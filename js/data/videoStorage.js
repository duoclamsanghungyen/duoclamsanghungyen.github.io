/**
 * PHARMAVITA / CLINICALRX - QUẢN LÝ LƯU TRỮ VIDEO LÂM SÀNG (VIDEO STORAGE)
 * Bệnh viện Đa khoa tỉnh Hưng Yên
 * Tích hợp tải lên đám mây Supabase Storage và đồng bộ đa thiết bị
 */

import { getSupabaseCredentials } from "../config.js";
import { getSupabaseClient } from "../modules/supabaseService.js?v=20260922_v44_fix_drug_sync_crash";

export const VIDEO_STORAGE_KEY = "clinicalrx_videos_store_v1";

// Danh mục video hướng dẫn lâm sàng chuẩn mực ban đầu
export const DEFAULT_CLINICAL_VIDEOS = [
  {
    id: "video_mdi_spacer_guide",
    title: "Kỹ thuật sử dụng Bình xịt định liều (MDI) phối hợp Buồng đệm (Spacer)",
    category: "inhaler",
    categoryLabel: "Dụng cụ xịt hít & Hô hấp",
    drugId: "salbutamol",
    drugName: "Salbutamol (Ventolin)",
    duration: "03:45",
    fileSize: 12582912, // 12 MB
    fileSizeFormatted: "12.0 MB",
    fileName: "Ky_thuat_su_dung_MDI_va_Buong_dem.mp4",
    fileUrl: "",
    thumbnailUrl: "",
    description: "Hướng dẫn chi tiết từng bước cho người bệnh hen phế quản và COPD: lắc bình xịt, lắp vào buồng đệm, ngậm kín ống ngậm, ấn 1 nhát xịt và hít thở chậm sâu trong 5-10 giây để lắng đọng tối đa thuốc tại phế quản ngoại vi.",
    uploaderName: "Tổ Dược lâm sàng",
    department: "Khoa Dược - Khoa Nội Hô hấp",
    createdAt: "2026-09-22T08:00:00.000Z",
    isBuiltin: true
  },
  {
    id: "video_insulin_pen_technique",
    title: "Quy trình tiêm Insulin bằng Bút tiêm nạp sẵn và thay kim an toàn",
    category: "injection",
    categoryLabel: "Bút tiêm & Tiêm dưới da",
    drugId: "insulin_human",
    drugName: "Insulin (Bút tiêm)",
    duration: "04:20",
    fileSize: 14680064, // 14 MB
    fileSizeFormatted: "14.0 MB",
    fileName: "Quy_trinh_tiem_Insulin_but_tiem.mp4",
    fileUrl: "",
    thumbnailUrl: "",
    description: "Kỹ thuật kiểm tra lưu thông kim (prime 2 đơn vị), lấy véo da góc 90 độ hoặc 45 độ, ấn hết nút tiêm và giữ nguyên kim trong da tối thiểu 10 giây trước khi rút để tránh rò rỉ thuốc; luân chuyển vị trí tiêm chống loạn dưỡng mỡ.",
    uploaderName: "Dược sĩ Lâm sàng",
    department: "Khoa Dược - Khoa Nội Tiết",
    createdAt: "2026-09-22T08:30:00.000Z",
    isBuiltin: true
  },
  {
    id: "video_meropenem_infusion",
    title: "Kỹ thuật hoàn nguyên & Truyền kéo dài (Extended Infusion) Meropenem",
    category: "iv_reconstitution",
    categoryLabel: "Tiêm truyền & Pha chế",
    drugId: "meropenem",
    drugName: "Meropenem",
    duration: "05:15",
    fileSize: 18874368, // 18 MB
    fileSizeFormatted: "18.0 MB",
    fileName: "Ky_thuat_pha_truyen_keo_dai_Meropenem.mp4",
    fileUrl: "",
    thumbnailUrl: "",
    description: "Quy trình hoàn nguyên 1g Meropenem với 20ml nước cất, pha loãng trong 100ml NaCl 0.9%, thiết lập máy truyền dịch truyền kéo dài trong 3 giờ nhằm tối ưu hóa dược động học %T > MIC trong điều trị nhiễm khuẩn huyết và sốc nhiễm khuẩn.",
    uploaderName: "Tổ Dược lâm sàng",
    department: "Khoa Dược - Khoa Hồi sức tích cực (ICU)",
    createdAt: "2026-09-22T09:00:00.000Z",
    isBuiltin: true
  },
  {
    id: "video_enoxaparin_subcut",
    title: "Kỹ thuật tiêm dưới da chống đông Enoxaparin (Lovenox) không đuổi bọt khí",
    category: "injection",
    categoryLabel: "Bút tiêm & Tiêm dưới da",
    drugId: "enoxaparin",
    drugName: "Enoxaparin (Lovenox)",
    duration: "03:10",
    fileSize: 9961472, // 9.5 MB
    fileSizeFormatted: "9.5 MB",
    fileName: "Ky_thuat_tiem_duoi_da_Enoxaparin.mp4",
    fileUrl: "",
    thumbnailUrl: "",
    description: "Lưu ý quan trọng: Tuyệt đối KHÔNG đuổi bọt khí trong bơm tiêm nạp sẵn trước khi tiêm. Vị trí tiêm ở vùng bụng cách rốn 5cm, véo nếp da trong suốt quá trình tiêm và không xoa bóp vị trí tiêm để phòng tránh tụ máu bầm dưới da.",
    uploaderName: "Tổ Dược lâm sàng",
    department: "Khoa Dược - Khoa Tim mạch",
    createdAt: "2026-09-22T09:30:00.000Z",
    isBuiltin: true
  }
];

export function getLocalStoredVideos() {
  try {
    const raw = localStorage.getItem(VIDEO_STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch (e) {
    console.warn("Lỗi đọc video từ localStorage:", e);
    return [];
  }
}

export function saveLocalStoredVideos(videos) {
  try {
    localStorage.setItem(VIDEO_STORAGE_KEY, JSON.stringify(videos));
  } catch (e) {
    console.error("Lỗi lưu video vào localStorage:", e);
  }
}

export function getAllClinicalVideos() {
  const localList = getLocalStoredVideos();
  const map = new Map();

  // 1. Nạp danh mục mặc định
  DEFAULT_CLINICAL_VIDEOS.forEach(v => map.set(v.id, { ...v }));

  // 2. Ghi đè hoặc thêm video do người dùng/admin tải lên
  localList.forEach(v => map.set(v.id, { ...v }));

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

    const cloudVideos = rows.map(r => r.data).filter(Boolean);
    if (cloudVideos.length > 0) {
      const localList = getLocalStoredVideos();
      const map = new Map();
      localList.forEach(v => map.set(v.id, v));
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
