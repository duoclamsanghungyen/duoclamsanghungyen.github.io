/**
 * PHARMAVITA / CLINICALRX - QUẢN LÝ LƯU TRỮ VIDEO LÂM SÀNG (VIDEO STORAGE)
 * Bệnh viện Đa khoa tỉnh Hưng Yên
 * Tích hợp tải lên đám mây Supabase Storage và đồng bộ đa thiết bị
 */

import { getSupabaseCredentials } from "../config.js";
import { getSupabaseClient } from "../modules/supabaseService.js?v=20260930_v47_restore_clinical_videos_and_drug_groups";

export const VIDEO_STORAGE_KEY = "clinicalrx_videos_store_v1";

/**
 * Chuẩn hóa URL video, tự động chuyển về tệp nội bộ siêu tốc độ nếu đường dẫn đám mây gặp sự cố tạm dừng
 */
export function normalizeVideoUrl(video) {
  if (!video) return "";
  let url = (video.fileUrl || "").trim();
  const text = ((video.fileName || "") + " " + (video.title || "") + " " + url).toLowerCase();

  // Kiểm tra nếu là URL Supabase tạm ngưng hoặc không hợp lệ hoặc tương ứng với các video lâm sàng nội viện
  if (!url || url.includes("supabase.co") || !url.startsWith("http")) {
    if (text.includes("pseudomonas") || text.includes("psa") || text.includes("dtr") || text.includes("mdr")) {
      return "./assets/videos/pseudomonas_aeruginosa_mdr_idsa_2026.mp4";
    }
    if (text.includes("ampc") || text.includes("cefepime")) {
      return "./assets/videos/enterobacterales_ampc_cefepime_idsa_2026.mp4";
    }
    if (text.includes("esbl") || text.includes("klebsiella") || text.includes("carbapenem")) {
      return "./assets/videos/esbl_ecoli_klebsiella_carbapenem_idsa.mp4";
    }
    if (text.includes("binh_xit") || text.includes("buong_dem") || text.includes("mask") || text.includes("inhaler") || text.includes("spacer")) {
      return "./assets/videos/huong_dan_binh_xit_dinh_lieu_buong_dem.mp4";
    }
  }
  return url;
}

// Danh mục video hướng dẫn lâm sàng chuẩn mực nội viện (Lưu trữ trực tiếp trên CDN website, phát tức thì 100% không phụ thuộc máy chủ bên thứ ba)
export const DEFAULT_CLINICAL_VIDEOS = [
  {
    id: "video_psa_mdr_2026",
    title: "Hướng dẫn thực hành tiếp cận và điều trị nhiễm khuẩn do Pseudomonas aeruginosa đa kháng thuốc",
    category: "anti_infective",
    drugGroup: "anti_infective",
    categoryLabel: "Kháng sinh & Kháng khuẩn (ATC J)",
    drugId: "meropenem",
    drugName: "Meropenem",
    duration: "18:25",
    fileSize: 20316773,
    fileSizeFormatted: "19.4 MB",
    fileName: "pseudomonas_aeruginosa_mdr_idsa_2026.mp4",
    fileUrl: "./assets/videos/pseudomonas_aeruginosa_mdr_idsa_2026.mp4",
    thumbnailUrl: "",
    description: "Cá thể hóa phác đồ β-lactam thế hệ mới và phối hợp kháng sinh theo khuyến cáo IDSA 2026 trong điều trị Pseudomonas aeruginosa đa kháng (MDR) và kháng trị khó (DTR).",
    uploaderName: "Tổ Dược Lâm Sàng",
    department: "Khoa Dược · BVĐK Tỉnh Hưng Yên",
    createdAt: "2026-09-22T08:00:00.000Z",
    isBuiltin: true
  },
  {
    id: "video_ampc_cefepime_2026",
    title: "Tối ưu hóa phác đồ Cefepime liều cao truyền kéo dài trong điều trị Enterobacterales sinh men AmpC",
    category: "anti_infective",
    drugGroup: "anti_infective",
    categoryLabel: "Kháng sinh & Kháng khuẩn (ATC J)",
    drugId: "cefepime",
    drugName: "Cefepime",
    duration: "11:40",
    fileSize: 12776489,
    fileSizeFormatted: "12.2 MB",
    fileName: "enterobacterales_ampc_cefepime_idsa_2026.mp4",
    fileUrl: "./assets/videos/enterobacterales_ampc_cefepime_idsa_2026.mp4",
    thumbnailUrl: "",
    description: "Chiến lược phân tầng nguy cơ lâm sàng và áp dụng chế độ liều Cefepime tối ưu PK/PD (2g mỗi 8 giờ truyền 4 giờ) theo hướng dẫn IDSA 2026.",
    uploaderName: "Tổ Dược Lâm Sàng",
    department: "Khoa Dược · BVĐK Tỉnh Hưng Yên",
    createdAt: "2026-09-22T09:00:00.000Z",
    isBuiltin: true
  },
  {
    id: "video_esbl_carbapenem_idsa",
    title: "Tối ưu hóa Carbapenems và chiến lược bảo tồn kháng sinh trong điều trị ESBL-E",
    category: "anti_infective",
    drugGroup: "anti_infective",
    categoryLabel: "Kháng sinh & Kháng khuẩn (ATC J)",
    drugId: "meropenem",
    drugName: "Meropenem",
    duration: "08:50",
    fileSize: 9561467,
    fileSizeFormatted: "9.1 MB",
    fileName: "esbl_ecoli_klebsiella_carbapenem_idsa.mp4",
    fileUrl: "./assets/videos/esbl_ecoli_klebsiella_carbapenem_idsa.mp4",
    thumbnailUrl: "",
    description: "Tiếp cận điều trị Escherichia coli và Klebsiella pneumoniae sinh men ESBL: Lựa chọn Carbapenem hợp lý và các phác đồ thay thế tiết kiệm carbapenem theo IDSA.",
    uploaderName: "Tổ Dược Lâm Sàng",
    department: "Khoa Dược · BVĐK Tỉnh Hưng Yên",
    createdAt: "2026-09-23T08:00:00.000Z",
    isBuiltin: true
  },
  {
    id: "video_mdi_spacer_copd",
    title: "Kỹ thuật sử dụng bình xịt định liều qua buồng đệm cho bệnh nhân Hen và COPD",
    category: "respiratory",
    drugGroup: "respiratory",
    categoryLabel: "Hô hấp & Dụng cụ xịt hít (ATC R)",
    drugId: "salbutamol",
    drugName: "Salbutamol",
    duration: "03:45",
    fileSize: 4010316,
    fileSizeFormatted: "3.8 MB",
    fileName: "huong_dan_binh_xit_dinh_lieu_buong_dem.mp4",
    fileUrl: "./assets/videos/huong_dan_binh_xit_dinh_lieu_buong_dem.mp4",
    thumbnailUrl: "",
    description: "Video hướng dẫn thao tác chuẩn kỹ thuật xịt hít bằng buồng đệm không mask: Các bước chuẩn bị, phối hợp nhịp thở, nín thở và vệ sinh buồng đệm sau khi dùng.",
    uploaderName: "Tổ Dược Lâm Sàng",
    department: "Khoa Dược · BVĐK Tỉnh Hưng Yên",
    createdAt: "2026-09-22T10:00:00.000Z",
    isBuiltin: true
  }
];

export function getLocalStoredVideos() {
  try {
    const raw = localStorage.getItem(VIDEO_STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed)) return [];
    // Tự động chuẩn hóa và khôi phục các video bị link Supabase tạm ngưng
    let modified = false;
    const valid = parsed.map(v => {
      if (v) {
        const norm = normalizeVideoUrl(v);
        if (norm && norm !== v.fileUrl) {
          v.fileUrl = norm;
          modified = true;
        }
      }
      return v;
    }).filter(v => v && v.fileUrl && v.fileUrl.trim());
    if (modified || valid.length !== parsed.length) {
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
