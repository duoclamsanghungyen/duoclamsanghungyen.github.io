/**
 * PHARMAVITA / CLINICALRX - QUẢN LÝ LƯU TRỮ VIDEO LÂM SÀNG (VIDEO STORAGE)
 * Bệnh viện Đa khoa tỉnh Hưng Yên
 * Tích hợp tải lên đám mây Supabase Storage và đồng bộ đa thiết bị
 */

import { getSupabaseCredentials } from "../config.js";
import { getSupabaseClient } from "../modules/supabaseService.js?v=20260923_v46_remove_dummy_sample_videos";

export const VIDEO_STORAGE_KEY = "clinicalrx_videos_store_v1";

// Danh mục video hướng dẫn lâm sàng ban đầu (Chỉ hiển thị các video có tệp tin MP4 thực tế)
export const DEFAULT_CLINICAL_VIDEOS = [];

export function getLocalStoredVideos() {
  try {
    const raw = localStorage.getItem(VIDEO_STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed)) return [];
    // Tự động loại bỏ hoàn toàn các video mẫu cũ không có đường dẫn tệp video (fileUrl)
    const valid = parsed.filter(v => v && v.fileUrl && v.fileUrl.trim());
    if (valid.length !== parsed.length) {
      saveLocalStoredVideos(valid);
    }
    return valid;
  } catch (e) {
    console.warn("Lỗi đọc video từ localStorage:", e);
    return [];
  }
}

export function saveLocalStoredVideos(videos) {
  try {
    const valid = (Array.isArray(videos) ? videos : []).filter(v => v && v.fileUrl && v.fileUrl.trim());
    localStorage.setItem(VIDEO_STORAGE_KEY, JSON.stringify(valid));
  } catch (e) {
    console.error("Lỗi lưu video vào localStorage:", e);
  }
}

export function getAllClinicalVideos() {
  const localList = getLocalStoredVideos();
  const map = new Map();

  // 1. Nạp danh mục mặc định (chỉ lấy video có fileUrl)
  DEFAULT_CLINICAL_VIDEOS.forEach(v => {
    if (v && v.fileUrl && v.fileUrl.trim()) {
      map.set(v.id, { ...v });
    }
  });

  // 2. Ghi đè hoặc thêm video do người dùng/admin tải lên (chỉ lấy video có fileUrl)
  localList.forEach(v => {
    if (v && v.fileUrl && v.fileUrl.trim()) {
      map.set(v.id, { ...v });
    }
  });

  return Array.from(map.values()).sort((a, b) => {
    const timeA = new Date(a.createdAt || 0).getTime();
    const timeB = new Date(b.createdAt || 0).getTime();
    return timeB - timeA;
  });
}

export async function saveVideoMetadata(videoItem) {
  const localList = getLocalStoredVideos();
  const index = localList.findIndex(v => v.id === videoItem.id);
  if (index >= 0) {
    localList[index] = videoItem;
  } else {
    localList.unshift(videoItem);
  }
  saveLocalStoredVideos(localList);

  // Đồng bộ lên Supabase Cloud nếu có kết nối
  try {
    await syncVideoToSupabase(videoItem);
  } catch (err) {
    console.warn("Chưa đồng bộ được video lên Cloud:", err);
  }

  return videoItem;
}

export async function deleteVideoById(videoId) {
  const localList = getLocalStoredVideos();
  const filtered = localList.filter(v => v.id !== videoId);
  saveLocalStoredVideos(filtered);

  // Xóa trên Supabase Cloud
  try {
    const { url, key } = getSupabaseCredentials();
    if (url && key) {
      await fetch(`${url}/rest/v1/custom_drugs?id=eq.${videoId}`, {
        method: "DELETE",
        headers: {
          "apikey": key,
          "Authorization": `Bearer ${key}`
        }
      });
    }
  } catch (err) {
    console.warn("Lỗi xóa video trên cloud:", err);
  }

  return true;
}

/**
 * Tải trực tiếp file video lên Supabase Storage với cơ chế đa tầng (XHR + Supabase JS SDK Fallback)
 * Bucket: 'drug-pdfs', thư mục: 'videos/videoId_cleanFileName.mp4'
 */
export async function uploadVideoFileToSupabase(file, videoId, onProgress) {
  const { url, key } = getSupabaseCredentials();
  if (!url || !key) {
    throw new Error("Chưa cấu hình thông tin kết nối Supabase Cloud.");
  }

  // Làm sạch tên file tiếng Việt và ký tự đặc biệt
  const cleanFileName = file.name
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-zA-Z0-9._-]/g, "_");

  const storagePath = `videos/${videoId}_${cleanFileName}`;
  const contentType = file.type || "video/mp4";

  // Chiến lược 1: Thử tải qua XMLHttpRequest trực tiếp (hỗ trợ báo % tiến độ mượt mà)
  try {
    return await new Promise((resolve, reject) => {
      const uploadUrl = `${url}/storage/v1/object/drug-pdfs/${storagePath}`;
      const xhr = new XMLHttpRequest();
      xhr.open("POST", uploadUrl, true);
      xhr.setRequestHeader("apikey", key);
      xhr.setRequestHeader("Authorization", `Bearer ${key}`);
      xhr.setRequestHeader("Content-Type", contentType);
      xhr.setRequestHeader("x-upsert", "true");

      if (xhr.upload && onProgress) {
        xhr.upload.onprogress = (e) => {
          if (e.lengthComputable) {
            const percent = Math.round((e.loaded / e.total) * 100);
            onProgress(percent, e.loaded, e.total);
          }
        };
      }

      xhr.onload = () => {
        if (xhr.status >= 200 && xhr.status < 300) {
          const publicUrl = `${url}/storage/v1/object/public/drug-pdfs/${storagePath}`;
          resolve({
            publicUrl,
            storagePath,
            fileName: cleanFileName,
            fileSize: file.size
          });
        } else {
          try {
            const errRes = JSON.parse(xhr.responseText);
            reject(new Error(errRes.message || `Lỗi tải lên máy chủ (${xhr.status})`));
          } catch {
            reject(new Error(`Lỗi máy chủ (${xhr.status}): ${xhr.statusText || xhr.responseText}`));
          }
        }
      };

      xhr.onerror = () => reject(new Error("Lỗi mạng khi kết nối Supabase Storage qua XHR."));
      xhr.send(file);
    });
  } catch (xhrErr) {
    console.warn("Tải lên qua XHR thất bại, chuyển sang phương án 2 (Supabase JS Client SDK):", xhrErr);

    // Chiến lược 2: Sử dụng Supabase JS Client chính thức
    const client = getSupabaseClient();
    if (!client) {
      throw xhrErr;
    }

    if (onProgress) onProgress(50, file.size / 2, file.size);

    const { data, error } = await client.storage
      .from("drug-pdfs")
      .upload(storagePath, file, {
        contentType: contentType,
        upsert: true
      });

    if (error) {
      console.error("Lỗi Supabase Client SDK upload:", error);
      throw new Error(error.message || xhrErr.message);
    }

    if (onProgress) onProgress(100, file.size, file.size);

    const { data: publicData } = client.storage
      .from("drug-pdfs")
      .getPublicUrl(storagePath);

    return {
      publicUrl: publicData?.publicUrl || `${url}/storage/v1/object/public/drug-pdfs/${storagePath}`,
      storagePath,
      fileName: cleanFileName,
      fileSize: file.size
    };
  }
}

/**
 * Đồng bộ video metadata lên bảng custom_drugs trên Supabase (id bắt đầu bằng 'video_')
 */
async function syncVideoToSupabase(videoItem) {
  const { url, key } = getSupabaseCredentials();
  if (!url || !key) return;

  const payload = {
    id: videoItem.id,
    data: videoItem,
    updated_at: new Date().toISOString()
  };

  try {
    const response = await fetch(`${url}/rest/v1/custom_drugs`, {
      method: "POST",
      headers: {
        "apikey": key,
        "Authorization": `Bearer ${key}`,
        "Content-Type": "application/json",
        "Prefer": "resolution=merge-duplicates"
      },
      body: JSON.stringify(payload)
    });

    if (!response.ok) {
      const errText = await response.text();
      console.warn("Không thể lưu video metadata lên Supabase:", errText);
    }
  } catch (err) {
    console.warn("Lỗi gọi API lưu video metadata:", err);
  }
}

/**
 * Đồng bộ danh mục video từ Supabase Cloud về máy cục bộ
 */
export async function syncVideosFromCloud() {
  const { url, key } = getSupabaseCredentials();
  if (!url || !key) return [];

  try {
    const response = await fetch(`${url}/rest/v1/custom_drugs?id=like.video_*&select=id,data`, {
      headers: {
        "apikey": key,
        "Authorization": `Bearer ${key}`
      }
    });

    if (!response.ok) return [];

    const rows = await response.json();
    if (!Array.isArray(rows)) return [];

    const cloudVideos = rows.map(r => r.data).filter(v => v && v.fileUrl && v.fileUrl.trim());
    if (cloudVideos.length > 0) {
      const localList = getLocalStoredVideos();
      const map = new Map();
      localList.forEach(v => {
        if (v && v.fileUrl && v.fileUrl.trim()) map.set(v.id, v);
      });
      cloudVideos.forEach(v => map.set(v.id, v));
      const merged = Array.from(map.values());
      saveLocalStoredVideos(merged);
      return merged;
    }
  } catch (err) {
    console.warn("Lỗi đồng bộ video từ Supabase Cloud:", err);
  }
  return [];
}

export function formatVideoFileSize(bytes) {
  if (!bytes || bytes === 0) return "0 MB";
  const mb = bytes / (1024 * 1024);
  return mb.toFixed(1) + " MB";
}
