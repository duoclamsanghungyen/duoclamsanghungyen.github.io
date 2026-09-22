/**
 * PHARMAVITA / CLINICALRX - PHÂN HỆ THƯ VIỆN VIDEO LÂM SÀNG (VIDEO LIBRARY)
 * Bệnh viện Đa khoa tỉnh Hưng Yên
 * Hiển thị danh mục video, trình phát video chuyên dụng và tải lên tệp MP4
 */

import {
  getAllClinicalVideos,
  saveVideoMetadata,
  deleteVideoById,
  uploadVideoFileToSupabase,
  syncVideosFromCloud,
  formatVideoFileSize
} from "../data/videoStorage.js?v=20260922_v40_video_library";

let currentCategory = "all";
let searchQuery = "";
let selectedFile = null;

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

  // Hiển thị danh sách ban đầu
  renderVideoList();

  // Đồng bộ đám mây Supabase chạy ngầm
  syncVideosFromCloud().then(updatedList => {
    if (updatedList && updatedList.length > 0) {
      renderVideoList();
    }
  }).catch(() => {});
}

export function filterVideoCategory(category) {
  currentCategory = category;
  const filterBtns = document.querySelectorAll("[data-video-category]");
  filterBtns.forEach(btn => {
    const cat = btn.getAttribute("data-video-category");
    if (cat === category) {
      btn.className = "px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all bg-teal-600 text-white shadow-xs cursor-pointer";
    } else {
      btn.className = "px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all bg-slate-100 hover:bg-slate-200 text-slate-600 cursor-pointer";
    }
  });
  renderVideoList();
}

export function renderVideoList() {
  const container = document.getElementById("videoGridContainer");
  const countBadge = document.getElementById("videoTotalCountBadge");
  if (!container) return;

  const allVideos = getAllClinicalVideos();

  // Lọc theo chuyên mục và tìm kiếm
  const filtered = allVideos.filter(v => {
    const matchCat = (currentCategory === "all") || (v.category === currentCategory);
    if (!matchCat) return false;

    if (!searchQuery) return true;

    const targetStr = [
      v.title || "",
      v.description || "",
      v.drugName || "",
      v.categoryLabel || "",
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
        <h4 class="text-base font-bold text-slate-800">Không tìm thấy video phù hợp</h4>
        <p class="text-xs text-slate-500 mt-1 max-w-md mx-auto">
          Không có video nào khớp với điều kiện tìm kiếm hoặc bộ lọc hiện tại. Bạn có thể bấm nút tải lên để bổ sung video MP4 mới.
        </p>
        <button onclick="window.openVideoUploadModal()" class="mt-4 px-4 py-2 bg-teal-600 hover:bg-teal-700 text-white rounded-xl text-xs font-bold shadow-xs inline-flex items-center gap-2 cursor-pointer transition-all">
          <i data-lucide="upload" class="w-4 h-4"></i>
          <span>Tải lên Video MP4 ngay</span>
        </button>
      </div>
    `;
    if (window.lucide) window.lucide.createIcons();
    return;
  }

  // Danh mục màu theo thể loại
  const catBadges = {
    inhaler: "bg-cyan-50 text-cyan-700 border-cyan-200",
    injection: "bg-emerald-50 text-emerald-700 border-emerald-200",
    iv_reconstitution: "bg-purple-50 text-purple-700 border-purple-200",
    counseling: "bg-amber-50 text-amber-700 border-amber-200",
    training: "bg-blue-50 text-blue-700 border-blue-200"
  };

  container.innerHTML = filtered.map(v => {
    const badgeClass = catBadges[v.category] || "bg-slate-50 text-slate-700 border-slate-200";
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
          <div class="absolute top-2.5 left-2.5 right-2.5 flex items-center justify-between pointer-events-none">
            <span class="px-2 py-0.5 rounded-md text-[10px] font-bold border backdrop-blur-md ${badgeClass}">
              ${v.categoryLabel || "Video Lâm Sàng"}
            </span>
            <div class="flex items-center gap-1">
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
              ${!v.isBuiltin ? `
                <button onclick="window.confirmDeleteVideo('${v.id}')" title="Xóa video này" class="p-1.5 text-rose-500 hover:text-rose-700 hover:bg-rose-50 rounded-lg transition-colors cursor-pointer">
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

  if (!modal || !player) return;

  titleEl.textContent = video.title;
  descEl.textContent = video.description || "Chưa có mô tả chi tiết cho video này.";
  catBadgeEl.textContent = video.categoryLabel || "Video Lâm Sàng";

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

  if (video.fileUrl) {
    player.classList.remove("hidden");
    emptyPlaceholder.classList.add("hidden");
    player.src = video.fileUrl;
    player.load();
    player.play().catch(() => {});
    if (downloadLink) {
      downloadLink.href = video.fileUrl;
      downloadLink.classList.remove("hidden");
    }
  } else {
    // Video mẫu hướng dẫn lâm sàng (chưa có tệp MP4 tải lên)
    player.classList.add("hidden");
    player.pause();
    emptyPlaceholder.classList.remove("hidden");
    if (downloadLink) downloadLink.classList.add("hidden");
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
    if (!file.name.toLowerCase().endsWith(".mp4") && !file.type.includes("video/")) {
      alert("Vui lòng chọn tệp video định dạng MP4 (.mp4)!");
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

  const category = catInput ? catInput.value : "inhaler";
  const catLabels = {
    inhaler: "Dụng cụ xịt hít & Hô hấp",
    injection: "Bút tiêm & Tiêm dưới da",
    iv_reconstitution: "Tiêm truyền & Pha chế",
    counseling: "Tư vấn người bệnh",
    training: "Tập huấn & Hội thảo"
  };

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

    const videoItem = {
      id: videoId,
      title: title,
      category: category,
      categoryLabel: catLabels[category] || "Video Lâm Sàng",
      drugId: drugId,
      drugName: drugName,
      duration: "", // Sẽ cập nhật khi trình duyệt phát
      fileSize: selectedFile.size,
      fileSizeFormatted: formatVideoFileSize(selectedFile.size),
      fileName: uploadResult.fileName,
      fileUrl: uploadResult.publicUrl,
      thumbnailUrl: "",
      description: (descInput ? descInput.value : "").trim(),
      uploaderName: (uploaderInput ? uploaderInput.value : "").trim() || "Dược sĩ Lâm sàng",
      department: "Bệnh viện Đa khoa tỉnh Hưng Yên",
      createdAt: new Date().toISOString(),
      isBuiltin: false
    };

    await saveVideoMetadata(videoItem);

    alert(`Tải lên thành công video: "${title}"! Video đã sẵn sàng phát trên website.`);
    closeVideoUploadModal();
    renderVideoList();
  } catch (err) {
    console.error("Lỗi upload video:", err);
    alert(`Không thể tải video lên máy chủ: ${err.message}`);
  } finally {
    if (submitBtn) {
      submitBtn.disabled = false;
      submitBtn.classList.remove("opacity-50", "cursor-not-allowed");
    }
  }
}

export async function confirmDeleteVideo(videoId) {
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
}
