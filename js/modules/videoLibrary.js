/**
 * PHARMAVITA / CLINICALRX - PHÂN HỆ THƯ VIỆN VIDEO LÂM SÀNG (VIDEO LIBRARY)
 * Bệnh viện Đa khoa tỉnh Hưng Yên
 * Tích hợp xác thực Quản trị viên trực tiếp trong form, hỗ trợ tải lên MP4/MOV/WEBM
 */

import {
  getAllClinicalVideos,
  saveVideoMetadata,
  deleteVideoById,
  uploadVideoFileToSupabase,
  syncVideosFromCloud,
  formatVideoFileSize,
  normalizeVideoUrl
} from "../data/videoStorage.js?v=20260930_v47_restore_clinical_videos_and_drug_groups";

let currentCategory = "all";
let searchQuery = "";
let selectedFile = null;

/**
 * Định nghĩa thông tin chi tiết các Nhóm thuốc điều trị theo mã phân loại ATC & Dược thư
 */
export const DRUG_GROUP_INFO = {
  anti_infective: {
    id: "anti_infective",
    label: "Kháng sinh & Kháng khuẩn",
    atcCode: "ATC J",
    fullLabel: "Kháng sinh & Kháng khuẩn (ATC J)",
    badgeClass: "bg-rose-100/90 text-rose-800 border-rose-300",
    color: "rose"
  },
  respiratory: {
    id: "respiratory",
    label: "Hô hấp & Dụng cụ xịt hít",
    atcCode: "ATC R",
    fullLabel: "Hô hấp & Dụng cụ xịt hít (ATC R)",
    badgeClass: "bg-cyan-100/90 text-cyan-800 border-cyan-300",
    color: "cyan"
  },
  cardiovascular: {
    id: "cardiovascular",
    label: "Tim mạch & Chống đông",
    atcCode: "ATC B/C",
    fullLabel: "Tim mạch & Chống đông (ATC B/C)",
    badgeClass: "bg-red-100/90 text-red-800 border-red-300",
    color: "red"
  },
  endocrine: {
    id: "endocrine",
    label: "Nội tiết & Bút tiêm Insulin",
    atcCode: "ATC A/H",
    fullLabel: "Nội tiết & Bút tiêm Insulin (ATC A/H)",
    badgeClass: "bg-amber-100/90 text-amber-800 border-amber-300",
    color: "amber"
  },
  gastrointestinal: {
    id: "gastrointestinal",
    label: "Tiêu hóa & Chuyển hóa",
    atcCode: "ATC A",
    fullLabel: "Tiêu hóa & Chuyển hóa (ATC A)",
    badgeClass: "bg-emerald-100/90 text-emerald-800 border-emerald-300",
    color: "emerald"
  },
  neurology: {
    id: "neurology",
    label: "Thần kinh & Giảm đau",
    atcCode: "ATC N",
    fullLabel: "Thần kinh & Giảm đau (ATC N)",
    badgeClass: "bg-purple-100/90 text-purple-800 border-purple-300",
    color: "purple"
  },
  oncology: {
    id: "oncology",
    label: "Chống ung thư & Miễn dịch",
    atcCode: "ATC L",
    fullLabel: "Chống ung thư & Miễn dịch (ATC L)",
    badgeClass: "bg-indigo-100/90 text-indigo-800 border-indigo-300",
    color: "indigo"
  },
  general_clinical: {
    id: "general_clinical",
    label: "Tập huấn & Kỹ thuật chung",
    atcCode: "Lâm sàng",
    fullLabel: "Tập huấn & Kỹ thuật chung",
    badgeClass: "bg-blue-100/90 text-blue-800 border-blue-300",
    color: "blue"
  }
};

/**
 * Tự động xác định nhóm thuốc điều trị từ dữ liệu video (thuộc tính lưu trữ hoặc phân tích ngữ nghĩa)
 */
export function getVideoDrugGroup(v) {
  if (!v) return "general_clinical";

  // 1. Kiểm tra thuộc tính drugGroup trực tiếp
  if (v.drugGroup && DRUG_GROUP_INFO[v.drugGroup]) {
    return v.drugGroup;
  }

  // 2. Kiểm tra thuộc tính category đã lưu
  if (v.category && DRUG_GROUP_INFO[v.category]) {
    return v.category;
  }

  // 3. Phân tích ngữ nghĩa thông minh từ tiêu đề, tên hoạt chất, mô tả
  const text = [
    v.title || "",
    v.drugName || "",
    v.drugId || "",
    v.description || "",
    v.category || "",
    v.categoryLabel || ""
  ].join(" ").toLowerCase();

  // Kháng sinh & Kháng khuẩn (ATC J)
  if (
    text.includes("kháng sinh") ||
    text.includes("kháng khuẩn") ||
    text.includes("pseudomonas") ||
    text.includes("aeruginosa") ||
    text.includes("ampc") ||
    text.includes("cefepime") ||
    text.includes("meropenem") ||
    text.includes("carbapenem") ||
    text.includes("vancomycin") ||
    text.includes("ceftriaxone") ||
    text.includes("colistin") ||
    text.includes("amikacin") ||
    text.includes("ciprofloxacin") ||
    text.includes("levofloxacin") ||
    text.includes("nhiễm khuẩn") ||
    text.includes("đa kháng") ||
    text.includes("betalactam") ||
    text.includes("kháng nấm")
  ) {
    return "anti_infective";
  }

  // Hô hấp & Dụng cụ xịt hít (ATC R)
  if (
    text.includes("hô hấp") ||
    text.includes("xịt hít") ||
    text.includes("buồng đệm") ||
    text.includes("bình xịt") ||
    text.includes("mdi") ||
    text.includes("dpi") ||
    text.includes("spacer") ||
    text.includes("salbutamol") ||
    text.includes("ventolin") ||
    text.includes("seretide") ||
    text.includes("symbicort") ||
    text.includes("fluticasone") ||
    text.includes("budesonide") ||
    text.includes("khí dung") ||
    text.includes("hen") ||
    text.includes("copd") ||
    v.category === "inhaler"
  ) {
    return "respiratory";
  }

  // Tim mạch & Chống đông (ATC B/C)
  if (
    text.includes("tim mạch") ||
    text.includes("chống đông") ||
    text.includes("enoxaparin") ||
    text.includes("lovenox") ||
    text.includes("heparin") ||
    text.includes("acenocoumarol") ||
    text.includes("sintrom") ||
    text.includes("warfarin") ||
    text.includes("aspirin") ||
    text.includes("clopidogrel") ||
    text.includes("huyết áp") ||
    text.includes("digoxin")
  ) {
    return "cardiovascular";
  }

  // Nội tiết & Bút tiêm Insulin (ATC A/H)
  if (
    text.includes("nội tiết") ||
    text.includes("insulin") ||
    text.includes("bút tiêm") ||
    text.includes("đái tháo đường") ||
    text.includes("tiểu đường") ||
    text.includes("metformin") ||
    text.includes("lantus") ||
    text.includes("novorapid") ||
    text.includes("humalog") ||
    text.includes("corticoid") ||
    text.includes("tuyến giáp")
  ) {
    return "endocrine";
  }

  // Tiêu hóa & Chuyển hóa (ATC A)
  if (
    text.includes("tiêu hóa") ||
    text.includes("dạ dày") ||
    text.includes("gan") ||
    text.includes("hepagold") ||
    text.includes("lola") ||
    text.includes("omeprazole") ||
    text.includes("esomeprazole") ||
    text.includes("pantoprazole")
  ) {
    return "gastrointestinal";
  }

  // Thần kinh & Giảm đau (ATC N)
  if (
    text.includes("thần kinh") ||
    text.includes("giảm đau") ||
    text.includes("paracetamol") ||
    text.includes("morphin") ||
    text.includes("fentanyl") ||
    text.includes("gabapentin") ||
    text.includes("pregabalin") ||
    text.includes("động kinh") ||
    text.includes("an thần")
  ) {
    return "neurology";
  }

  // Chống ung thư & Miễn dịch (ATC L)
  if (
    text.includes("ung thư") ||
    text.includes("hóa trị") ||
    text.includes("miễn dịch") ||
    text.includes("methotrexate") ||
    text.includes("cisplatin")
  ) {
    return "oncology";
  }

  return "general_clinical";
}

export function isUserAdmin() {
  if (typeof window !== "undefined" && window.getCurrentUser) {
    const u = window.getCurrentUser();
    return !!(u && (u.role === "admin" || u.role === "Admin"));
  }
  return false;
}

/**
 * Xác thực nhanh mật khẩu Quản trị viên ngay tại form upload
 */
export function quickVerifyAdminPassword() {
  const passInput = document.getElementById("uploadAdminPasswordInput");
  const pass = passInput ? passInput.value.trim() : "";

  if (pass === "admin123" || pass === "admin") {
    if (window.loginWithRole) {
      window.loginWithRole("admin");
    }
    updateAdminAuthUIInModal();
    renderVideoList();
    alert("Xác thực quyền Quản trị viên thành công! Bạn có thể tiến hành tải video lên.");
    return true;
  } else {
    alert("Mật khẩu Quản trị viên không chính xác! Vui lòng nhập đúng mật khẩu Quản trị viên (Mặc định: admin123).");
    if (passInput) passInput.focus();
    return false;
  }
}

/**
 * Cập nhật hiển thị trạng thái xác thực Admin ngay trong Modal Upload
 */
function updateAdminAuthUIInModal() {
  const container = document.getElementById("uploadAdminAuthSection");
  if (!container) return;

  const admin = isUserAdmin();
  if (admin) {
    const u = window.getCurrentUser ? window.getCurrentUser() : null;
    container.innerHTML = `
      <div class="flex items-center justify-between p-3 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800">
        <div class="flex items-center gap-2">
          <i data-lucide="shield-check" class="w-4 h-4 text-emerald-600 shrink-0"></i>
          <span class="text-xs font-bold">Đã xác thực Quản trị viên: ${u ? u.fullName : "DS. Nguyễn Văn Quản Trị"}</span>
        </div>
        <span class="px-2 py-0.5 text-[10px] font-bold bg-emerald-200 text-emerald-900 rounded-md">ADMIN</span>
      </div>
    `;
  } else {
    container.innerHTML = `
      <div class="p-3.5 bg-rose-50 border border-rose-200 rounded-2xl space-y-2">
        <div class="flex items-center justify-between">
          <span class="text-xs font-bold text-rose-800 flex items-center gap-1.5">
            <i data-lucide="shield-alert" class="w-4 h-4 text-rose-600"></i>
            <span>Xác thực quyền Quản trị viên (Admin)</span>
          </span>
          <span class="text-[10px] font-bold bg-rose-200 text-rose-800 px-2 py-0.5 rounded">Bắt buộc</span>
        </div>
        <div class="flex items-center gap-2">
          <input type="password" id="uploadAdminPasswordInput" placeholder="Nhập mật khẩu Admin (mặc định: admin123)..."
            class="flex-1 px-3 py-2 bg-white border border-rose-300 rounded-xl text-xs font-medium focus:ring-2 focus:ring-rose-500 outline-none text-slate-800">
          <button type="button" onclick="window.quickVerifyAdminPassword()" class="px-3.5 py-2 bg-rose-600 hover:bg-rose-700 text-white font-bold text-xs rounded-xl shadow-xs cursor-pointer whitespace-nowrap transition-colors">
            Xác thực
          </button>
        </div>
        <p class="text-[11px] text-slate-500">
          Gợi ý mật khẩu Admin mặc định: <strong class="text-rose-700 font-mono">admin123</strong>
        </p>
      </div>
    `;
  }
  if (window.lucide) window.lucide.createIcons();
}

export function handleNonAdminUploadClick() {
  // Mở thẳng modal upload để người dùng nhập mật khẩu Admin hoặc xác thực
  openVideoUploadModal();
}

export function initVideoLibrary() {
  const searchInput = document.getElementById("videoSearchInput");
  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      searchQuery = (e.target.value || "").trim().toLowerCase();
      renderVideoList();
    });
  }

  // Khởi tạo bộ lọc chuyên mục
  const filterBtns = document.querySelectorAll("[data-video-category]");
  filterBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      const cat = btn.getAttribute("data-video-category");
      filterVideoCategory(cat);
    });
  });

  // Thiết lập sự kiện kéo thả và chọn file upload
  setupUploadEvents();

  // Nạp danh sách thuốc vào thẻ chọn trong form tải lên
  populateDrugSelectOptions();

  // Hiển thị danh sách ban đầu và render nút admin
  renderVideoList();

  // Đồng bộ đám mây Supabase chạy ngầm
  syncVideosFromCloud().then(updatedList => {
    if (updatedList && updatedList.length > 0) {
      renderVideoList();
    }
  }).catch(() => {});
}

export function filterVideoCategory(category) {
  currentCategory = category || "all";
  renderVideoList();
}

/**
 * Cập nhật hiển thị nút Thêm Video trên Hero Banner theo quyền Admin
 */
function renderAdminHeaderControls() {
  const container = document.getElementById("videoAdminUploadBtnContainer");
  if (!container) return;

  const admin = isUserAdmin();

  if (admin) {
    container.innerHTML = `
      <button onclick="window.openVideoUploadModal()" 
        class="px-5 py-3.5 rounded-2xl bg-gradient-to-r from-rose-600 via-rose-700 to-pink-700 hover:from-rose-700 hover:to-pink-800 text-white font-bold text-xs sm:text-sm shadow-lg hover:shadow-xl transition-all cursor-pointer flex items-center justify-center gap-2 ring-2 ring-rose-400/40">
        <i data-lucide="plus-circle" class="w-4 h-4"></i>
        <span>+ THÊM VIDEO MP4 (ADMIN)</span>
      </button>
    `;
  } else {
    container.innerHTML = `
      <button onclick="window.openVideoUploadModal()" 
        class="px-4 py-3 rounded-2xl bg-gradient-to-r from-rose-600 to-rose-700 hover:from-rose-700 hover:to-rose-800 text-white font-bold text-xs sm:text-sm shadow-md hover:shadow-lg transition-all cursor-pointer flex items-center justify-center gap-2" 
        title="Bấm để mở hộp thoại tải lên video (Yêu cầu mật khẩu Admin)">
        <i data-lucide="upload" class="w-4 h-4"></i>
        <span>+ Thêm Video MP4 (Admin)</span>
      </button>
    `;
  }
}

export function renderVideoList() {
  renderAdminHeaderControls();

  const container = document.getElementById("videoGridContainer");
  const countBadge = document.getElementById("videoTotalCountBadge");
  if (!container) return;

  const allVideos = getAllClinicalVideos();
  const admin = isUserAdmin();

  // 1. Cập nhật số lượng đếm trên từng nút nhóm thuốc (Category Filter Tabs)
  const counts = { all: allVideos.length };
  Object.keys(DRUG_GROUP_INFO).forEach(k => { counts[k] = 0; });
  allVideos.forEach(v => {
    const grp = getVideoDrugGroup(v);
    if (counts[grp] !== undefined) {
      counts[grp]++;
    } else {
      counts.general_clinical++;
    }
  });

  const filterBtns = document.querySelectorAll("[data-video-category]");
  filterBtns.forEach(btn => {
    const cat = btn.getAttribute("data-video-category");
    const count = counts[cat] || 0;
    let baseLabel = "Tất cả nhóm thuốc";
    if (cat !== "all" && DRUG_GROUP_INFO[cat]) {
      baseLabel = DRUG_GROUP_INFO[cat].fullLabel;
    }
    const isActive = (cat === currentCategory);
    if (isActive) {
      btn.className = "px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all bg-teal-600 text-white shadow-xs cursor-pointer whitespace-nowrap inline-flex items-center gap-1.5";
    } else {
      btn.className = "px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all bg-slate-100 hover:bg-slate-200 text-slate-600 cursor-pointer whitespace-nowrap inline-flex items-center gap-1.5";
    }
    if (count > 0) {
      btn.innerHTML = `<span>${baseLabel}</span><span class="px-1.5 py-0.2 rounded-full text-[10px] font-bold ${isActive ? 'bg-white/25 text-white' : 'bg-teal-100 text-teal-800'}">${count}</span>`;
    } else {
      btn.innerHTML = `<span>${baseLabel}</span>`;
    }
  });

  // 2. Lọc theo chuyên mục nhóm thuốc và tìm kiếm
  const filtered = allVideos.filter(v => {
    const videoGroup = getVideoDrugGroup(v);
    const matchCat = (currentCategory === "all") || (videoGroup === currentCategory);
    if (!matchCat) return false;

    if (!searchQuery) return true;

    const grpInfo = DRUG_GROUP_INFO[videoGroup] || DRUG_GROUP_INFO.general_clinical;
    const targetStr = [
      v.title || "",
      v.description || "",
      v.drugName || "",
      v.categoryLabel || "",
      grpInfo.label || "",
      grpInfo.atcCode || "",
      v.uploaderName || "",
      v.department || ""
    ].join(" ").toLowerCase();

    return targetStr.includes(searchQuery);
  });

  if (countBadge) {
    countBadge.textContent = `${filtered.length} video`;
  }

  if (filtered.length === 0) {
    container.innerHTML = `
      <div class="col-span-full py-16 text-center bg-slate-50 border-2 border-dashed border-slate-200 rounded-3xl p-8">
        <div class="w-16 h-16 rounded-2xl bg-teal-50 border border-teal-200 text-teal-600 flex items-center justify-center mx-auto mb-4">
          <i data-lucide="video-off" class="w-8 h-8"></i>
        </div>
        <h4 class="text-base font-bold text-slate-800">Không tìm thấy video trong nhóm thuốc này</h4>
        <p class="text-xs text-slate-500 mt-1 max-w-md mx-auto">
          Chưa có video hướng dẫn nào trong nhóm thuốc hoặc không khớp với từ khóa tìm kiếm.
        </p>
        <button onclick="window.openVideoUploadModal()" class="mt-4 px-4 py-2 bg-rose-600 hover:bg-rose-700 text-white rounded-xl text-xs font-bold shadow-xs inline-flex items-center gap-2 cursor-pointer transition-all">
          <i data-lucide="upload" class="w-4 h-4"></i>
          <span>Tải lên Video MP4 cho nhóm thuốc này</span>
        </button>
      </div>
    `;
    if (window.lucide) window.lucide.createIcons();
    return;
  }

  container.innerHTML = filtered.map(v => {
    const drugGrpKey = getVideoDrugGroup(v);
    const grpInfo = DRUG_GROUP_INFO[drugGrpKey] || DRUG_GROUP_INFO.general_clinical;
    const badgeClass = grpInfo.badgeClass;
    const groupDisplayLabel = `${grpInfo.label} (${grpInfo.atcCode})`;
    const hasDrug = v.drugName && v.drugName.trim();
    const isLocalDemo = !v.fileUrl;

    return `
      <div class="group bg-white rounded-2xl border border-slate-200 hover:border-teal-400 shadow-xs hover:shadow-md transition-all flex flex-col overflow-hidden">
        <!-- Video Header / Thumbnail Cover -->
        <div class="relative bg-gradient-to-br from-slate-900 via-teal-950 to-slate-900 aspect-video flex items-center justify-center overflow-hidden cursor-pointer" onclick="window.openVideoPlayerModal('${v.id}')">
          ${v.thumbnailUrl ? `
            <img src="${v.thumbnailUrl}" alt="${v.title}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300">
          ` : `
            <div class="text-center p-4">
              <div class="w-12 h-12 rounded-full bg-white/20 hover:bg-white/30 text-white flex items-center justify-center mx-auto backdrop-blur-xs group-hover:scale-110 transition-transform shadow-lg">
                <i data-lucide="play" class="w-6 h-6 fill-white ml-0.5"></i>
              </div>
              <span class="inline-block mt-2 text-[11px] font-medium text-teal-200/90 tracking-wide">Xem video thao tác</span>
            </div>
          `}

          <!-- Badges góc trên -->
          <div class="absolute top-2.5 left-2.5 right-2.5 flex items-center justify-between pointer-events-none gap-1">
            <span class="px-2 py-0.5 rounded-md text-[10px] font-bold border backdrop-blur-md shadow-xs truncate max-w-[65%] ${badgeClass}">
              ${groupDisplayLabel}
            </span>
            <div class="flex items-center gap-1 shrink-0">
              ${v.duration ? `
                <span class="px-1.5 py-0.5 rounded bg-black/60 text-white text-[10px] font-mono font-semibold backdrop-blur-xs">
                  ${v.duration}
                </span>
              ` : ''}
              <span class="px-1.5 py-0.5 rounded bg-teal-950/70 text-teal-300 text-[10px] font-mono font-semibold backdrop-blur-xs border border-teal-500/30">
                ${v.fileSizeFormatted || formatVideoFileSize(v.fileSize)}
              </span>
            </div>
          </div>

          ${isLocalDemo ? `
            <div class="absolute bottom-2 left-2 bg-amber-500/90 text-slate-950 text-[9px] font-bold px-1.5 py-0.5 rounded shadow-xs">
              Mẫu hướng dẫn chuẩn
            </div>
          ` : ''}
        </div>

        <!-- Nội dung thông tin video -->
        <div class="p-4 flex-1 flex flex-col justify-between space-y-3">
          <div class="space-y-2">
            <h3 class="text-xs sm:text-sm font-bold text-slate-900 group-hover:text-teal-700 transition-colors line-clamp-2 cursor-pointer leading-snug" onclick="window.openVideoPlayerModal('${v.id}')">
              ${v.title}
            </h3>

            ${hasDrug ? `
              <div class="flex items-center gap-1.5">
                <span class="text-[11px] text-slate-500 font-medium">Thuốc liên quan:</span>
                <button type="button" onclick="event.stopPropagation(); window.openDrugFromVideo('${v.drugId || ''}', '${v.drugName}')" class="inline-flex items-center gap-1 px-2 py-0.5 bg-teal-50 hover:bg-teal-100 text-teal-800 text-[11px] font-bold rounded-md border border-teal-200 transition-colors cursor-pointer">
                  <i data-lucide="pill" class="w-3 h-3 text-teal-600"></i>
                  <span>${v.drugName}</span>
                </button>
              </div>
            ` : ''}

            <p class="text-[11px] sm:text-xs text-slate-600 line-clamp-2 leading-relaxed">
              ${v.description || "Video hướng dẫn thực hành và quy trình thao tác lâm sàng chuẩn."}
            </p>
          </div>

          <!-- Footer của thẻ -->
          <div class="pt-2 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500">
            <div class="flex items-center gap-1.5 truncate max-w-[65%]">
              <i data-lucide="user" class="w-3 h-3 text-slate-400 shrink-0"></i>
              <span class="truncate font-medium">${v.uploaderName || "Khoa Dược"}</span>
            </div>

            <div class="flex items-center gap-1 shrink-0">
              <button onclick="window.openVideoPlayerModal('${v.id}')" title="Xem video" class="p-1.5 text-teal-600 hover:text-teal-800 hover:bg-teal-50 rounded-lg transition-colors cursor-pointer">
                <i data-lucide="play" class="w-4 h-4 fill-current"></i>
              </button>
              ${v.fileUrl ? `
                <a href="${v.fileUrl}" download="${v.fileName || 'video.mp4'}" target="_blank" title="Tải file MP4" class="p-1.5 text-slate-500 hover:text-slate-700 hover:bg-slate-100 rounded-lg transition-colors cursor-pointer">
                  <i data-lucide="download" class="w-4 h-4"></i>
                </a>
              ` : ''}
              ${(admin && !v.isBuiltin) ? `
                <button onclick="window.confirmDeleteVideo('${v.id}')" title="Xóa video này (Quyền Admin)" class="p-1.5 text-rose-500 hover:text-rose-700 hover:bg-rose-50 rounded-lg transition-colors cursor-pointer">
                  <i data-lucide="trash-2" class="w-4 h-4"></i>
                </button>
              ` : ''}
            </div>
          </div>
        </div>
      </div>
    `;
  }).join("");

  if (window.lucide) window.lucide.createIcons();
}

export function openVideoPlayerModal(videoId) {
  const allVideos = getAllClinicalVideos();
  const video = allVideos.find(v => v.id === videoId);
  if (!video) return;

  const modal = document.getElementById("videoPlayerModal");
  const player = document.getElementById("videoElementPlayer");
  const titleEl = document.getElementById("videoPlayerTitle");
  const catBadgeEl = document.getElementById("videoPlayerCategoryBadge");
  const descEl = document.getElementById("videoPlayerDescription");
  const drugBadgeEl = document.getElementById("videoPlayerDrugBadge");
  const metaEl = document.getElementById("videoPlayerMeta");
  const downloadLink = document.getElementById("videoPlayerDownloadBtn");
  const emptyPlaceholder = document.getElementById("videoPlayerEmptyNotice");
  const adminUploadArea = document.getElementById("videoPlayerAdminUploadArea");

  if (!modal || !player) return;

  const drugGrpKey = getVideoDrugGroup(video);
  const grpInfo = DRUG_GROUP_INFO[drugGrpKey] || DRUG_GROUP_INFO.general_clinical;

  titleEl.textContent = video.title;
  descEl.textContent = video.description || "Chưa có mô tả chi tiết cho video này.";
  catBadgeEl.textContent = `${grpInfo.label} (${grpInfo.atcCode})`;
  catBadgeEl.className = `px-2.5 py-0.5 rounded-md text-[11px] font-bold border shrink-0 ${grpInfo.badgeClass}`;

  if (video.drugName) {
    drugBadgeEl.classList.remove("hidden");
    drugBadgeEl.innerHTML = `
      <i data-lucide="pill" class="w-3.5 h-3.5 text-teal-600"></i>
      <span>Chuyên luận: <strong>${video.drugName}</strong></span>
    `;
    drugBadgeEl.onclick = () => {
      window.closeVideoPlayerModal();
      window.openDrugFromVideo(video.drugId, video.drugName);
    };
  } else {
    drugBadgeEl.classList.add("hidden");
  }

  metaEl.textContent = `Tải lên bởi: ${video.uploaderName || "Khoa Dược"} (${video.department || "BVĐK Tỉnh Hưng Yên"}) • Dung lượng: ${video.fileSizeFormatted || formatVideoFileSize(video.fileSize)}`;

  const effectiveUrl = normalizeVideoUrl ? normalizeVideoUrl(video) : video.fileUrl;

  if (effectiveUrl) {
    player.classList.remove("hidden");
    emptyPlaceholder.classList.add("hidden");
    player.src = effectiveUrl;
    player.load();
    player.onerror = () => {
      console.warn("Lỗi phát video từ nguồn hiện tại, thử nguồn nội bộ dự phòng...");
      const fallbackUrl = normalizeVideoUrl ? normalizeVideoUrl({ ...video, fileUrl: "" }) : "";
      if (fallbackUrl && player.src !== fallbackUrl) {
        player.src = fallbackUrl;
        player.load();
        player.play().catch(() => {});
      }
    };
    player.play().catch(() => {});
    if (downloadLink) {
      downloadLink.href = effectiveUrl;
      downloadLink.classList.remove("hidden");
    }
  } else {
    // Video mẫu hướng dẫn lâm sàng (chưa có tệp MP4 tải lên)
    player.classList.add("hidden");
    player.pause();
    emptyPlaceholder.classList.remove("hidden");
    if (downloadLink) downloadLink.classList.add("hidden");

    if (adminUploadArea) {
      adminUploadArea.innerHTML = `
        <button onclick="window.closeVideoPlayerModal(); window.openVideoUploadModal();" class="mt-3 px-4 py-2 rounded-xl bg-rose-600 hover:bg-rose-700 text-white font-bold text-xs shadow-md inline-flex items-center gap-2 cursor-pointer transition-all">
          <i data-lucide="upload" class="w-3.5 h-3.5"></i>
          <span>Tải tệp MP4 cho video này (Admin)</span>
        </button>
      `;
    }
  }

  modal.classList.remove("hidden");
  if (window.lucide) window.lucide.createIcons();
}

export function closeVideoPlayerModal() {
  const modal = document.getElementById("videoPlayerModal");
  const player = document.getElementById("videoElementPlayer");
  if (player) {
    player.pause();
    player.src = "";
  }
  if (modal) modal.classList.add("hidden");
}

export function openVideoUploadModal() {
  const modal = document.getElementById("videoUploadModal");
  if (!modal) return;

  // Reset form
  const form = document.getElementById("videoUploadForm");
  if (form) form.reset();
  selectedFile = null;

  const previewName = document.getElementById("uploadFileNamePreview");
  if (previewName) previewName.textContent = "";

  const progressBar = document.getElementById("uploadProgressBar");
  const progressContainer = document.getElementById("uploadProgressContainer");
  if (progressContainer) progressContainer.classList.add("hidden");
  if (progressBar) progressBar.style.width = "0%";

  updateAdminAuthUIInModal();
  populateDrugSelectOptions();

  modal.classList.remove("hidden");
  if (window.lucide) window.lucide.createIcons();
}

export function closeVideoUploadModal() {
  const modal = document.getElementById("videoUploadModal");
  if (modal) modal.classList.add("hidden");
}

function setupUploadEvents() {
  const fileInput = document.getElementById("videoFileInput");
  const dropZone = document.getElementById("videoUploadDropZone");
  const previewName = document.getElementById("uploadFileNamePreview");

  if (!fileInput || !dropZone) return;

  fileInput.addEventListener("change", (e) => {
    if (e.target.files && e.target.files[0]) {
      handleFileSelected(e.target.files[0]);
    }
  });

  dropZone.addEventListener("dragover", (e) => {
    e.preventDefault();
    dropZone.classList.add("border-teal-500", "bg-teal-50/50");
  });

  dropZone.addEventListener("dragleave", (e) => {
    e.preventDefault();
    dropZone.classList.remove("border-teal-500", "bg-teal-50/50");
  });

  dropZone.addEventListener("drop", (e) => {
    e.preventDefault();
    dropZone.classList.remove("border-teal-500", "bg-teal-50/50");
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFileSelected(e.dataTransfer.files[0]);
    }
  });

  function handleFileSelected(file) {
    const validExtensions = [".mp4", ".webm", ".mov", ".m4v"];
    const fileNameLower = file.name.toLowerCase();
    const hasValidExt = validExtensions.some(ext => fileNameLower.endsWith(ext));

    if (!hasValidExt && !file.type.includes("video/")) {
      alert("Vui lòng chọn tệp video hợp lệ (định dạng .mp4, .webm, .mov, .m4v)!");
      return;
    }

    // Giới hạn 50MB cho gói Supabase Free
    const maxBytes = 52428800; // 50MB
    if (file.size > maxBytes) {
      alert(`Dung lượng tệp (${formatVideoFileSize(file.size)}) vượt quá hạn mức 50 MB của hệ thống. Vui lòng nén video hoặc chọn tệp nhỏ hơn!`);
      return;
    }

    selectedFile = file;
    if (previewName) {
      previewName.innerHTML = `
        <div class="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-teal-50 text-teal-800 text-xs font-bold border border-teal-200">
          <i data-lucide="file-video" class="w-4 h-4 text-teal-600"></i>
          <span>${file.name}</span>
          <span class="text-teal-600 font-mono">(${formatVideoFileSize(file.size)})</span>
        </div>
      `;
      if (window.lucide) window.lucide.createIcons();
    }

    // Tự động điền tiêu đề từ tên file nếu chưa có
    const titleInput = document.getElementById("videoUploadTitle");
    if (titleInput && !titleInput.value.trim()) {
      const cleanTitle = file.name
        .replace(/\.[^/.]+$/, "")
        .replace(/_/g, " ")
        .replace(/-/g, " ");
      titleInput.value = cleanTitle;
    }
  }

  // Bắt sự kiện submit form
  const form = document.getElementById("videoUploadForm");
  if (form) {
    form.addEventListener("submit", async (e) => {
      e.preventDefault();
      await executeVideoUpload();
    });
  }
}

async function executeVideoUpload() {
  // 1. Kiểm tra xác thực quyền Admin
  if (!isUserAdmin()) {
    const passInput = document.getElementById("uploadAdminPasswordInput");
    const pass = passInput ? passInput.value.trim() : "";
    if (pass === "admin123" || pass === "admin") {
      if (window.loginWithRole) {
        window.loginWithRole("admin");
      }
    } else {
      alert("Vui lòng nhập chính xác Mật khẩu Quản trị viên (Mặc định: admin123) để tải video lên!");
      if (passInput) passInput.focus();
      return;
    }
  }

  // 2. Kiểm tra tệp tin
  if (!selectedFile) {
    alert("Vui lòng chọn một tệp video MP4 trước khi bấm Tải lên!");
    return;
  }

  const titleInput = document.getElementById("videoUploadTitle");
  const catInput = document.getElementById("videoUploadCategory");
  const drugSelect = document.getElementById("videoUploadDrug");
  const descInput = document.getElementById("videoUploadDesc");
  const uploaderInput = document.getElementById("videoUploadUploader");
  const submitBtn = document.getElementById("videoSubmitUploadBtn");

  const title = (titleInput.value || "").trim();
  if (!title) {
    alert("Vui lòng nhập Tiêu đề cho video!");
    titleInput.focus();
    return;
  }

  const category = catInput ? catInput.value : "anti_infective";
  const grpInfo = DRUG_GROUP_INFO[category] || DRUG_GROUP_INFO.general_clinical;

  const selectedDrugOption = drugSelect && drugSelect.selectedOptions ? drugSelect.selectedOptions[0] : null;
  const drugId = selectedDrugOption ? selectedDrugOption.value : "";
  const drugName = selectedDrugOption && drugId ? selectedDrugOption.text : "";

  const videoId = "video_" + Date.now() + "_" + Math.random().toString(36).substring(2, 7);

  // Hiển thị thanh tiến trình
  const progressContainer = document.getElementById("uploadProgressContainer");
  const progressBar = document.getElementById("uploadProgressBar");
  const progressPercentText = document.getElementById("uploadProgressPercent");
  const progressStatusText = document.getElementById("uploadProgressStatus");

  if (progressContainer) progressContainer.classList.remove("hidden");
  if (submitBtn) {
    submitBtn.disabled = true;
    submitBtn.classList.add("opacity-50", "cursor-not-allowed");
  }

  try {
    if (progressStatusText) progressStatusText.textContent = "Đang tải video lên máy chủ đám mây Supabase...";

    const uploadResult = await uploadVideoFileToSupabase(selectedFile, videoId, (percent) => {
      if (progressBar) progressBar.style.width = `${percent}%`;
      if (progressPercentText) progressPercentText.textContent = `${percent}%`;
    });

    if (progressStatusText) progressStatusText.textContent = "Đang lưu thông tin và hoàn tất...";

    const currentUser = typeof window !== "undefined" && window.getCurrentUser ? window.getCurrentUser() : null;

    const videoItem = {
      id: videoId,
      title: title,
      category: category,
      drugGroup: category,
      categoryLabel: grpInfo.fullLabel,
      drugId: drugId,
      drugName: drugName,
      duration: "", // Sẽ cập nhật khi trình duyệt phát
      fileSize: selectedFile.size,
      fileSizeFormatted: formatVideoFileSize(selectedFile.size),
      fileName: uploadResult.fileName,
      fileUrl: uploadResult.publicUrl,
      thumbnailUrl: "",
      description: (descInput ? descInput.value : "").trim(),
      uploaderName: (uploaderInput ? uploaderInput.value : "").trim() || (currentUser ? currentUser.fullName : "Quản trị viên (Admin)"),
      department: currentUser ? (currentUser.department || "Khoa Dược") : "Bệnh viện Đa khoa tỉnh Hưng Yên",
      createdAt: new Date().toISOString(),
      isBuiltin: false
    };

    await saveVideoMetadata(videoItem);

    alert(`Tải lên thành công video: "${title}"! Video đã sẵn sàng phát trên website.`);
    closeVideoUploadModal();
    renderVideoList();
  } catch (err) {
    console.error("Lỗi upload video:", err);
    alert(`Không thể tải video lên máy chủ: ${err.message}\n\nVui lòng kiểm tra lại kết nối mạng hoặc thử lại với tệp MP4 khác.`);
  } finally {
    if (submitBtn) {
      submitBtn.disabled = false;
      submitBtn.classList.remove("opacity-50", "cursor-not-allowed");
    }
  }
}

export async function confirmDeleteVideo(videoId) {
  if (!isUserAdmin()) {
    alert("Từ chối quyền: Chỉ Quản trị viên (Admin) mới có quyền xóa video khỏi thư viện!");
    return;
  }

  if (!confirm("Bạn có chắc chắn muốn xóa video này khỏi Thư viện Video lâm sàng?")) {
    return;
  }
  await deleteVideoById(videoId);
  renderVideoList();
}

function populateDrugSelectOptions() {
  const select = document.getElementById("videoUploadDrug");
  if (!select) return;

  if (select.children.length > 1) return; // Đã nạp

  try {
    const drugs = (typeof window !== "undefined" && window.getActiveDrugsDatabase) 
      ? window.getActiveDrugsDatabase() 
      : [];

    // Lọc duy nhất và sắp xếp tên
    const sorted = [...drugs].sort((a, b) => (a.name || "").localeCompare(b.name || "", "vi"));
    sorted.forEach(d => {
      const opt = document.createElement("option");
      opt.value = d.id;
      opt.textContent = `${d.name} (${d.inn || ""})`;
      select.appendChild(opt);
    });
  } catch (e) {
    console.warn("Không thể nạp danh mục thuốc vào selector video:", e);
  }
}

export function openDrugFromVideo(drugId, drugName) {
  if (!drugId && !drugName) return;

  // Chuyển sang tab Tra cứu thuốc
  const drugsNavBtn = document.querySelector("[data-nav-target='drugs']");
  if (drugsNavBtn) drugsNavBtn.click();

  setTimeout(() => {
    // Mở modal chuyên luận nếu có hàm modal
    if (window.openDrugDetailModal && drugId) {
      const drugs = window.getActiveDrugsDatabase ? window.getActiveDrugsDatabase() : [];
      const d = drugs.find(item => item.id === drugId || (item.name && item.name.toLowerCase() === drugName.toLowerCase()));
      if (d) {
        window.openDrugDetailModal(d.id);
        return;
      }
    }

    // Hoặc điền vào ô tìm kiếm thuốc
    const searchInput = document.getElementById("drugSearchInput");
    if (searchInput) {
      searchInput.value = drugName || drugId;
      searchInput.dispatchEvent(new Event("input"));
    }
  }, 100);
}

// Gán toàn cục để gọi từ HTML template
if (typeof window !== "undefined") {
  window.openVideoPlayerModal = openVideoPlayerModal;
  window.closeVideoPlayerModal = closeVideoPlayerModal;
  window.openVideoUploadModal = openVideoUploadModal;
  window.closeVideoUploadModal = closeVideoUploadModal;
  window.filterVideoCategory = filterVideoCategory;
  window.confirmDeleteVideo = confirmDeleteVideo;
  window.openDrugFromVideo = openDrugFromVideo;
  window.renderVideoList = renderVideoList;
  window.isUserAdmin = isUserAdmin;
  window.handleNonAdminUploadClick = handleNonAdminUploadClick;
  window.quickVerifyAdminPassword = quickVerifyAdminPassword;
}
