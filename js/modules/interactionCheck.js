/**
 * PHARMAVITA / CLINICALRX - MODULE KIỂM TRA TƯƠNG TÁC ĐA THUỐC
 * Tích hợp chuẩn hóa Quyết định số 5948/QĐ-BYT (30/12/2021) của Bộ Y tế
 */

import { getActiveDrugsDatabase } from "../data/drugs.js?v=20260914_v35_qd5948_interactions";
import { DRUG_INTERACTIONS, QD_5948_METADATA } from "../data/interactions.js?v=20260914_v35_qd5948_interactions";

let selectedDrugs = [];

export function initInteractionChecker() {
  const selectElement = document.getElementById("interactionDrugSelect");
  const addBtn = document.getElementById("addDrugToBasketBtn");
  const clearBtn = document.getElementById("clearBasketBtn");
  const checkBtn = document.getElementById("runCheckInteractionsBtn");

  if (!selectElement) return;

  // Populate Select Dropdown sorted A-Z
  const currentDrugs = getActiveDrugsDatabase();
  const sortedForSelect = [...currentDrugs].sort((a, b) => a.name.localeCompare(b.name, "vi"));
  selectElement.innerHTML = `
    <option value="">-- Chọn thuốc đưa vào đơn phân tích (Dược thư A - Z) --</option>
    ${sortedForSelect.map(d => `<option value="${d.id}">${d.name} (${d.inn})</option>`).join("")}
  `;

  // Helper to add currently selected dropdown drug
  const addSelectedDrug = () => {
    const val = selectElement.value;
    if (val && !selectedDrugs.includes(val)) {
      selectedDrugs.push(val);
      selectElement.value = "";
      updateBasketUI();
      runInteractionAnalysis();
      return true;
    }
    return false;
  };

  if (addBtn) {
    addBtn.addEventListener("click", addSelectedDrug);
  }

  // Also support pressing Enter in the dropdown to add immediately
  selectElement.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      addSelectedDrug();
    }
  });

  if (clearBtn) {
    clearBtn.addEventListener("click", () => {
      selectedDrugs = [];
      updateBasketUI();
      runInteractionAnalysis();
    });
  }

  // Explicit Check Button
  if (checkBtn) {
    checkBtn.addEventListener("click", () => {
      if (selectedDrugs.length < 2) {
        alert("Vui lòng chọn từ 2 thuốc trở lên vào đơn trước khi kiểm tra tương tác!");
        return;
      }

      // Visual feedback on button
      const originalHtml = checkBtn.innerHTML;
      checkBtn.innerHTML = `
        <i data-lucide="loader-2" class="w-4 h-4 text-white animate-spin"></i>
        <span>Đang phân tích tương tác...</span>
      `;
      if (window.lucide) window.lucide.createIcons();

      setTimeout(() => {
        runInteractionAnalysis();
        checkBtn.innerHTML = originalHtml;
        updateBasketUI();
        if (window.lucide) window.lucide.createIcons();

        // Cuộn mượt đến bảng kết quả
        const resEl = document.getElementById("interactionResultsContainer");
        if (resEl) {
          resEl.scrollIntoView({ behavior: "smooth", block: "nearest" });
        }
      }, 250);
    });
  }

  // Pre-load a sample case (Simvastatin + Clarithromycin - QĐ 5948) for initial presentation
  selectedDrugs = ["simvastatin", "clarithromycin"];
  updateBasketUI();
  runInteractionAnalysis();
}

export function addPresetInteractionCase(caseId) {
  if (caseId === "case1") {
    // Simvastatin + Clarithromycin (QĐ 5948)
    selectedDrugs = ["simvastatin", "clarithromycin"];
  } else if (caseId === "case2") {
    // Amiodarone + Levofloxacin + Warfarin (QĐ 5948)
    selectedDrugs = ["amiodarone", "levofloxacin", "warfarin"];
  } else if (caseId === "case3") {
    // Vancomycin + Colistin + Furosemide
    selectedDrugs = ["vancomycin", "colistin", "furosemide"];
  } else if (caseId === "case4") {
    // Meropenem + Acid Valproic (QĐ 5948)
    selectedDrugs = ["meropenem", "valproic_acid"];
  } else if (caseId === "case5") {
    // Colchicine + Clarithromycin (QĐ 5948)
    selectedDrugs = ["colchicine", "clarithromycin"];
  } else if (caseId === "case6") {
    // Enalapril + Losartan (QĐ 5948)
    selectedDrugs = ["enalapril", "losartan"];
  } else if (caseId === "case7") {
    // Sildenafil + Nitroglycerin (QĐ 5948)
    selectedDrugs = ["sildenafil", "nitroglycerin"];
  }
  updateBasketUI();
  runInteractionAnalysis();
  const resEl = document.getElementById("interactionResultsContainer");
  if (resEl) {
    resEl.scrollIntoView({ behavior: "smooth", block: "nearest" });
  }
}

function updateBasketUI() {
  const basketContainer = document.getElementById("selectedDrugsBasket");
  const countBadge = document.getElementById("selectedDrugsCount");
  const btnSelectedCount = document.getElementById("btnSelectedCount");
  if (!basketContainer) return;

  if (countBadge) {
    countBadge.textContent = selectedDrugs.length;
  }
  if (btnSelectedCount) {
    btnSelectedCount.textContent = `${selectedDrugs.length} thuốc`;
  }

  if (selectedDrugs.length === 0) {
    basketContainer.innerHTML = `
      <div class="text-xs text-slate-400 italic py-2">
        Chưa có thuốc nào trong đơn. Vui lòng chọn ít nhất 2 thuốc từ danh sách bên trên hoặc bấm chọn ca lâm sàng mẫu.
      </div>
    `;
    return;
  }

  basketContainer.innerHTML = selectedDrugs.map(drugId => {
    const drug = getActiveDrugsDatabase().find(d => d.id === drugId);
    const name = drug ? drug.name : (drugId === "alcohol" ? "Rượu (Alcohol/Ethanol)" : drugId);
    return `
      <span class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold bg-teal-50 text-teal-800 border border-teal-200/80 shadow-xs">
        <i data-lucide="pill" class="w-3.5 h-3.5 text-teal-600"></i>
        <span>${name}</span>
        <button onclick="window.removeDrugFromBasket('${drugId}')" class="text-slate-400 hover:text-rose-600 ml-1">
          <i data-lucide="x" class="w-3.5 h-3.5"></i>
        </button>
      </span>
    `;
  }).join("");

  if (window.lucide) window.lucide.createIcons();
}

export function removeDrugFromBasket(drugId) {
  selectedDrugs = selectedDrugs.filter(id => id !== drugId);
  updateBasketUI();
  runInteractionAnalysis();
}

export function loadPairAndCheck(d1, d2) {
  selectedDrugs = [d1, d2];
  updateBasketUI();
  runInteractionAnalysis();
  closeQD5948Modal();
  const resEl = document.getElementById("interactionResultsContainer");
  if (resEl) {
    resEl.scrollIntoView({ behavior: "smooth", block: "nearest" });
  }
}

function runInteractionAnalysis() {
  const resultsContainer = document.getElementById("interactionResultsContainer");
  if (!resultsContainer) return;

  if (selectedDrugs.length < 2) {
    resultsContainer.innerHTML = `
      <div class="py-12 text-center bg-slate-50 border border-dashed border-slate-300 rounded-2xl p-6">
        <i data-lucide="shield-question" class="w-12 h-12 mx-auto text-slate-400 mb-3"></i>
        <h4 class="text-base font-semibold text-slate-700 mb-1">Cần tối thiểu 2 thuốc để phân tích tương tác</h4>
        <p class="text-xs text-slate-500 max-w-md mx-auto mb-3">
          Hệ thống sẽ đối chiếu ma trận cặp đôi tất cả các thuốc trong đơn để phát hiện tương tác theo Quyết định 5948/QĐ-BYT, Dược thư Quốc gia và cơ sở dữ liệu quốc tế.
        </p>
        <div class="flex items-center justify-center gap-3 flex-wrap">
          <button onclick="window.openQD5948Modal()" 
                  class="inline-flex items-center gap-1.5 text-xs font-bold text-rose-700 hover:text-rose-800 bg-rose-50 hover:bg-rose-100 px-3.5 py-2 rounded-xl border border-rose-200 shadow-2xs transition-colors">
            <i data-lucide="scale" class="w-4 h-4 text-rose-600"></i>
            <span>Xem Danh mục chống chỉ định QĐ 5948/QĐ-BYT</span>
          </button>
          <a href="https://reference.medscape.com/drug-interactionchecker" 
             target="_blank" 
             rel="noopener noreferrer" 
             class="inline-flex items-center gap-1.5 text-xs text-teal-700 hover:text-teal-800 font-semibold hover:underline bg-white px-3.5 py-2 rounded-xl border border-slate-200 shadow-2xs transition-colors">
            <span>Medscape Drug Interaction Checker</span>
            <i data-lucide="external-link" class="w-3.5 h-3.5"></i>
          </a>
        </div>
      </div>
    `;
    if (window.lucide) window.lucide.createIcons();
    return;
  }

  // Find all pairs
  const foundInteractions = [];
  for (let i = 0; i < selectedDrugs.length; i++) {
    for (let j = i + 1; j < selectedDrugs.length; j++) {
      const d1 = selectedDrugs[i];
      const d2 = selectedDrugs[j];

      const match = DRUG_INTERACTIONS.find(item => 
        (item.pair[0] === d1 && item.pair[1] === d2) ||
        (item.pair[0] === d2 && item.pair[1] === d1)
      );

      if (match) {
        const drugObj1 = getActiveDrugsDatabase().find(d => d.id === d1) || { name: d1 === "alcohol" ? "Rượu / Cồn (Alcohol)" : d1 };
        const drugObj2 = getActiveDrugsDatabase().find(d => d.id === d2) || { name: d2 === "alcohol" ? "Rượu / Cồn (Alcohol)" : d2 };
        foundInteractions.push({
          ...match,
          drugName1: drugObj1.name,
          drugName2: drugObj2.name
        });
      }
    }
  }

  if (foundInteractions.length === 0) {
    resultsContainer.innerHTML = `
      <div class="bg-emerald-50/80 border border-emerald-200 rounded-2xl p-6 text-emerald-950 shadow-xs">
        <div class="flex items-start gap-4 mb-4">
          <div class="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center shrink-0 text-emerald-700">
            <i data-lucide="shield-check" class="w-6 h-6"></i>
          </div>
          <div class="flex-1">
            <h4 class="text-base font-bold text-emerald-950 mb-1">Không có dữ liệu tương tác nguy hiểm trong CSDL nội viện & QĐ 5948/QĐ-BYT</h4>
            <p class="text-xs leading-relaxed text-emerald-800">
              Hệ thống chưa tìm thấy dữ liệu cảnh báo tương tác mức độ Nghiêm trọng hoặc Chống chỉ định giữa các cặp thuốc được chọn trong cơ sở dữ liệu nội viện và Danh mục Quyết định 5948/QĐ-BYT của Bộ Y tế.
              Người thực hành lâm sàng luôn cần đối chiếu tổng thể tình trạng chức năng gan, thận, điện giải và cá thể hóa điều trị trên từng bệnh nhân.
            </p>
          </div>
        </div>

        <!-- Khối liên kết mở rộng tra cứu trên Medscape -->
        <div class="mt-4 pt-4 border-t border-emerald-200/80 flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-white/70 p-4 rounded-xl border border-emerald-200/60">
          <div class="text-xs text-slate-700 space-y-0.5">
            <div class="font-bold text-slate-900 flex items-center gap-1.5">
              <i data-lucide="external-link" class="w-4 h-4 text-emerald-600"></i>
              <span>Tra cứu mở rộng trên cơ sở dữ liệu quốc tế:</span>
            </div>
            <p class="text-slate-500">
              Đối chiếu thêm ma trận tương tác đa thuốc trên Medscape Drug Interaction Checker (WebMD).
            </p>
          </div>
          <a href="https://reference.medscape.com/drug-interactionchecker" 
             target="_blank" 
             rel="noopener noreferrer" 
             class="inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-bold rounded-xl shadow-xs transition-all shrink-0 hover:shadow-md hover:scale-[1.02]">
            <span>Mở Medscape Interaction Checker</span>
            <i data-lucide="arrow-up-right" class="w-4 h-4"></i>
          </a>
        </div>
      </div>
    `;
    if (window.lucide) window.lucide.createIcons();
    return;
  }

  // Sort interactions: contraindicated first, then major, then moderate
  const severityOrder = { contraindicated: 1, major: 2, moderate: 3, minor: 4 };
  foundInteractions.sort((a, b) => severityOrder[a.severity] - severityOrder[b.severity]);

  const qd5948Count = foundInteractions.filter(it => it.isQD5948).length;

  resultsContainer.innerHTML = `
    <div class="space-y-4">

      <!-- Top Summary Header -->
      <div class="flex flex-col sm:flex-row sm:items-center justify-between pb-2 border-b border-slate-200 gap-2">
        <span class="text-sm font-bold text-slate-800 flex items-center gap-2">
          <i data-lucide="alert-octagon" class="w-4 h-4 text-rose-600"></i>
          Đã phát hiện <strong>${foundInteractions.length} tương tác</strong> trong đơn thuốc
        </span>
        <div class="flex items-center gap-2">
          ${qd5948Count > 0 ? `
            <span class="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-black bg-rose-600 text-white shadow-2xs">
              <i data-lucide="scale" class="w-3 h-3 text-amber-300"></i>
              ${qd5948Count} cặp theo QĐ 5948/QĐ-BYT
            </span>
          ` : ""}
          <span class="text-xs text-slate-500">Phân loại theo mức độ nghiêm trọng</span>
        </div>
      </div>

      <!-- Prominent QD 5948 Alert Banner if present -->
      ${qd5948Count > 0 ? `
        <div class="bg-gradient-to-r from-rose-900 via-red-800 to-slate-900 rounded-2xl p-4 sm:p-5 text-white shadow-md border border-rose-600/40 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <div class="flex items-start gap-3">
            <div class="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center shrink-0 text-amber-300 mt-0.5">
              <i data-lucide="shield-alert" class="w-6 h-6"></i>
            </div>
            <div class="space-y-0.5 text-xs">
              <div class="font-black text-sm text-white flex items-center gap-2">
                <span>CẢNH BÁO: PHÁT HIỆN TƯƠNG TÁC THUỘC QUYẾT ĐỊNH 5948/QĐ-BYT</span>
                <span class="px-2 py-0.5 rounded-full bg-amber-400 text-slate-950 font-black text-[10px] uppercase">Chống chỉ định</span>
              </div>
              <p class="text-rose-100/90 leading-relaxed">
                Đơn thuốc chứa <strong>${qd5948Count} cặp tương tác chống chỉ định bắt buộc</strong> theo Danh mục do Bộ Y tế ban hành. Căn cứ Điều 3 QĐ 5948/QĐ-BYT, Dược sĩ lâm sàng cần can thiệp dừng thuốc hoặc chuyển phác đồ thay thế trước khi duyệt phát thuốc.
              </p>
            </div>
          </div>
          <button onclick="window.openQD5948Modal()" 
                  class="shrink-0 px-3.5 py-2 bg-amber-500 hover:bg-amber-600 text-slate-950 font-black text-xs rounded-xl shadow-xs transition-all flex items-center gap-1.5 hover:scale-105 active:scale-95">
            <i data-lucide="book-open" class="w-4 h-4"></i>
            <span>Xem QĐ 5948</span>
          </button>
        </div>
      ` : ""}

      <!-- Interactions list -->
      ${foundInteractions.map(item => {
        let badgeClass = "bg-rose-100 text-rose-800 border-rose-300";
        let cardBorder = "border-rose-200 bg-rose-50/40";
        let label = "CHỐNG CHỈ ĐỊNH PHỐI HỢP";
        let icon = "alert-triangle";

        if (item.severity === "major") {
          badgeClass = "bg-amber-100 text-amber-900 border-amber-300";
          cardBorder = "border-amber-200 bg-amber-50/40";
          label = "NGUY CƠ NGHIÊM TRỌNG / CẦN ĐIỀU CHỈNH";
          icon = "alert-circle";
        } else if (item.severity === "moderate") {
          badgeClass = "bg-blue-100 text-blue-900 border-blue-300";
          cardBorder = "border-blue-200 bg-blue-50/40";
          label = "THẬN TRỌNG THEO DÕI";
          icon = "info";
        }

        return `
          <div class="border rounded-2xl p-5 ${cardBorder} shadow-sm transition-all space-y-3">
            <div class="flex flex-wrap items-center justify-between gap-2">
              <div class="flex items-center gap-2 flex-wrap">
                <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold border ${badgeClass}">
                  <i data-lucide="${icon}" class="w-3.5 h-3.5"></i>
                  ${label}
                </span>

                ${item.isQD5948 ? `
                  <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-black bg-rose-600 text-white border border-rose-700 shadow-2xs animate-pulse">
                    <i data-lucide="scale" class="w-3.5 h-3.5 text-amber-300"></i>
                    QĐ 5948/QĐ-BYT (BỘ Y TẾ)
                  </span>
                ` : ""}
              </div>

              <div class="text-xs font-bold text-slate-700 bg-white/90 px-3 py-1 rounded-lg border border-slate-200 shadow-2xs">
                ${item.drugName1} ⟷ ${item.drugName2}
              </div>
            </div>

            <h4 class="text-base font-bold text-slate-900 leading-snug">
              ${item.title}
            </h4>

            <div class="space-y-2.5 text-xs text-slate-700 leading-relaxed">
              <p>
                <strong class="text-slate-900">Cơ chế tương tác:</strong> ${item.mechanism}
              </p>
              <p>
                <strong class="text-slate-900">Hậu quả lâm sàng:</strong> ${item.clinicalImpact}
              </p>
            </div>

            <div class="bg-white p-3.5 rounded-xl border border-slate-200 text-xs space-y-2">
              <div class="font-bold text-teal-900 flex items-center gap-1.5">
                <i data-lucide="check-square" class="w-4 h-4 text-teal-600"></i>
                Khuyến cáo xử trí của Dược sĩ lâm sàng:
              </div>
              <p class="text-slate-700 leading-relaxed font-medium">
                ${item.recommendation}
              </p>

              ${item.isQD5948 ? `
                <div class="mt-2.5 p-2.5 bg-rose-50 border border-rose-200 rounded-xl flex items-start justify-between gap-2 text-rose-950">
                  <div class="flex items-start gap-2">
                    <i data-lucide="file-badge-2" class="w-4 h-4 text-rose-700 shrink-0 mt-0.5"></i>
                    <div>
                      <strong>Căn cứ pháp lý Quyết định số 5948/QĐ-BYT:</strong>
                      <span> Cặp tương tác này thuộc Danh mục chống chỉ định bắt buộc trong thực hành lâm sàng do Bộ Y tế ban hành. Phần mềm kê đơn và duyệt đơn bệnh viện cần tự động khóa/cảnh báo mức cao nhất.</span>
                    </div>
                  </div>
                  <button onclick="window.openQD5948Modal()" class="shrink-0 text-rose-800 hover:text-rose-950 font-bold underline text-[11px] inline-flex items-center gap-0.5">
                    <span>Xem QĐ 5948</span>
                    <i data-lucide="arrow-up-right" class="w-3 h-3"></i>
                  </button>
                </div>
              ` : ""}

              ${item.evidenceLevel ? `
                <div class="mt-1 text-[11px] text-slate-400 italic">
                  Mức độ bằng chứng: ${item.evidenceLevel}
                </div>
              ` : ""}
            </div>
          </div>
        `;
      }).join("")}

      <!-- Footer hỗ trợ tra cứu mở rộng Medscape -->
      <div class="p-4 bg-slate-50/90 rounded-2xl border border-slate-200 text-xs text-slate-600 flex flex-col sm:flex-row sm:items-center justify-between gap-3 shadow-2xs">
        <div class="flex items-center gap-2">
          <i data-lucide="info" class="w-4 h-4 text-slate-500 shrink-0"></i>
          <span>Cần đối chiếu mở rộng thêm với dữ liệu quốc tế hoặc kiểm tra các hoạt chất ngoài danh mục?</span>
        </div>
        <a href="https://reference.medscape.com/drug-interactionchecker" 
           target="_blank" 
           rel="noopener noreferrer" 
           class="inline-flex items-center gap-1.5 font-bold text-teal-700 hover:text-teal-800 bg-white hover:bg-teal-50 border border-slate-200 px-3 py-1.5 rounded-xl shadow-2xs shrink-0 transition-all">
          <span>Medscape Interaction Checker</span>
          <i data-lucide="arrow-up-right" class="w-3.5 h-3.5"></i>
        </a>
      </div>
    </div>
  `;

  if (window.lucide) window.lucide.createIcons();
}

// =========================================================================
// MODAL QUYẾT ĐỊNH 5948/QĐ-BYT - BỘ Y TẾ
// =========================================================================

export function openQD5948Modal() {
  let modalContainer = document.getElementById("qd5948ModalContainer");
  if (!modalContainer) {
    modalContainer = document.createElement("div");
    modalContainer.id = "qd5948ModalContainer";
    document.body.appendChild(modalContainer);
  }

  const allQDInteractions = DRUG_INTERACTIONS.filter(item => item.isQD5948);

  modalContainer.innerHTML = `
    <div id="qd5948Backdrop" class="fixed inset-0 z-50 bg-slate-950/75 backdrop-blur-xs flex items-center justify-center p-3 sm:p-5 overflow-y-auto animate-in fade-in duration-200">
      <div class="bg-white w-full max-w-5xl max-h-[92vh] rounded-3xl shadow-2xl border border-slate-200 flex flex-col overflow-hidden animate-in zoom-in-95 duration-200" onclick="event.stopPropagation()">
        
        <!-- Modal Header -->
        <div class="px-6 py-4 bg-gradient-to-r from-red-900 via-rose-900 to-slate-900 text-white flex items-start justify-between gap-4 border-b border-rose-800/60 shrink-0">
          <div class="space-y-1">
            <div class="flex items-center gap-2 flex-wrap">
              <span class="px-2.5 py-0.5 rounded-full bg-rose-500/30 text-rose-200 border border-rose-400/40 text-[10px] font-black uppercase tracking-wider flex items-center gap-1">
                <i data-lucide="scale" class="w-3 h-3 text-amber-300"></i>
                Văn Bản Quy Phạm - Bộ Y Tế
              </span>
              <span class="px-2.5 py-0.5 rounded-full bg-amber-500/20 text-amber-200 border border-amber-400/30 text-[10px] font-bold">
                Quyết định số 5948/QĐ-BYT (30/12/2021)
              </span>
            </div>
            <h3 class="text-base sm:text-xl font-black tracking-tight text-white">
              Danh Mục Tương Tác Thuốc Chống Chỉ Định Trong Thực Hành Lâm Sàng
            </h3>
            <p class="text-xs text-rose-100/90 leading-relaxed">
              Cơ sở pháp lý bắt buộc trong thẩm định kê đơn và cảnh báo tương tác thuốc tại các cơ sở khám bệnh, chữa bệnh
            </p>
          </div>
          <button onclick="window.closeQD5948Modal()" class="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center shrink-0 transition-colors">
            <i data-lucide="x" class="w-5 h-5"></i>
          </button>
        </div>

        <!-- Tabs Navigation -->
        <div class="px-6 pt-3 border-b border-slate-200 bg-slate-50 flex items-center justify-between gap-2 shrink-0">
          <div class="flex gap-2">
            <button id="qdTabBtn1" onclick="window.switchQD5948Tab('catalog')" 
                    class="px-4 py-2.5 text-xs font-extrabold border-b-2 border-rose-600 text-rose-700 transition-colors flex items-center gap-2">
              <i data-lucide="table" class="w-4 h-4"></i>
              <span>Danh Mục Chống Chỉ Định (${allQDInteractions.length} cặp tương tác)</span>
            </button>
            <button id="qdTabBtn2" onclick="window.switchQD5948Tab('fulltext')" 
                    class="px-4 py-2.5 text-xs font-extrabold border-b-2 border-transparent text-slate-500 hover:text-slate-800 transition-colors flex items-center gap-2">
              <i data-lucide="file-text" class="w-4 h-4"></i>
              <span>Toàn Văn Quyết Định 5948/QĐ-BYT</span>
            </button>
          </div>
        </div>

        <!-- Tab 1: Catalog Content -->
        <div id="qdTabContentCatalog" class="flex-1 overflow-y-auto p-6 space-y-4">
          <!-- Search & Filter Controls -->
          <div class="flex flex-col sm:flex-row gap-3 items-center justify-between bg-slate-50 p-3.5 rounded-2xl border border-slate-200">
            <div class="relative w-full sm:w-80">
              <i data-lucide="search" class="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2"></i>
              <input type="text" id="qdSearchInput" oninput="window.filterQD5948List()" 
                     placeholder="Tìm hoạt chất, cơ chế hoặc độc tính..." 
                     class="w-full pl-9 pr-8 py-2 text-xs bg-white border border-slate-300 rounded-xl focus:ring-2 focus:ring-rose-500 focus:outline-none">
              <button onclick="document.getElementById('qdSearchInput').value=''; window.filterQD5948List();" class="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600">
                <i data-lucide="x-circle" class="w-3.5 h-3.5"></i>
              </button>
            </div>
            <div class="text-xs text-slate-500 font-medium">
              Hiển thị: <span id="qdFilteredCount" class="font-bold text-rose-700">${allQDInteractions.length}</span> / ${allQDInteractions.length} cặp tương tác
            </div>
          </div>

          <!-- Interaction List Items -->
          <div id="qdInteractionsList" class="space-y-3.5">
            <!-- Rendered dynamically -->
          </div>
        </div>

        <!-- Tab 2: Full Text Content -->
        <div id="qdTabContentFulltext" class="hidden flex-1 overflow-y-auto p-6 space-y-6 bg-slate-50/50">
          <div class="max-w-3xl mx-auto bg-white p-8 rounded-2xl border border-slate-200/90 shadow-xs space-y-6 text-slate-800 text-xs sm:text-sm leading-relaxed">
            <div class="text-center space-y-1 border-b pb-6 border-slate-200">
              <div class="font-extrabold uppercase text-slate-700 tracking-wider text-xs">BỘ Y TẾ</div>
              <div class="font-black text-rose-800 text-base sm:text-lg">CỘNG HÒA XÃ HỘI CHỦ NGHĨA VIỆT NAM</div>
              <div class="font-semibold text-xs text-slate-600">Độc lập - Tự do - Hạnh phúc</div>
              <div class="text-[11px] text-slate-400 mt-2">Hà Nội, ngày 30 tháng 12 năm 2021</div>
              <div class="font-bold text-slate-900 mt-1">Số: 5948/QĐ-BYT</div>
            </div>

            <div class="text-center py-2">
              <h4 class="font-black text-base sm:text-lg text-slate-900 uppercase">QUYẾT ĐỊNH</h4>
              <p class="text-xs font-semibold text-slate-600 mt-1">
                Ban hành "Danh mục tương tác thuốc chống chỉ định trong thực hành lâm sàng tại các cơ sở khám bệnh, chữa bệnh"
              </p>
              <div class="w-16 h-0.5 bg-rose-600 mx-auto mt-3"></div>
            </div>

            <div class="space-y-2 text-slate-600 italic text-xs">
              <p>- Căn cứ Nghị định số 75/2017/NĐ-CP ngày 20 tháng 6 năm 2017 của Chính phủ quy định chức năng, nhiệm vụ, quyền hạn và cơ cấu tổ chức của Bộ Y tế;</p>
              <p>- Theo đề nghị của Cục trưởng Cục Quản lý Khám, chữa bệnh.</p>
            </div>

            <div class="text-center font-bold text-slate-900 text-sm">QUYẾT ĐỊNH:</div>

            <div class="space-y-4">
              <div class="p-3.5 bg-slate-50 rounded-xl border border-slate-200">
                <strong class="text-slate-900 font-bold block mb-1">Điều 1. Ban hành danh mục</strong>
                <p>Ban hành kèm theo Quyết định này "Danh mục tương tác thuốc chống chỉ định trong thực hành lâm sàng tại các cơ sở khám bệnh, chữa bệnh".</p>
              </div>

              <div class="p-3.5 bg-slate-50 rounded-xl border border-slate-200">
                <strong class="text-slate-900 font-bold block mb-1">Điều 2. Hiệu lực thi hành</strong>
                <p>Quyết định này có hiệu lực kể từ ngày ký ban hành (ngày 30 tháng 12 năm 2021).</p>
              </div>

              <div class="p-3.5 bg-rose-50/70 rounded-xl border border-rose-200">
                <strong class="text-rose-950 font-bold block mb-1 flex items-center gap-1.5">
                  <i data-lucide="shield-check" class="w-4 h-4 text-rose-600"></i>
                  Điều 3. Mục đích áp dụng tại cơ sở khám bệnh, chữa bệnh
                </strong>
                <p class="text-rose-950 leading-relaxed font-medium">
                  "Danh mục tương tác thuốc chống chỉ định trong thực hành lâm sàng tại các cơ sở khám bệnh, chữa bệnh" là cơ sở để:
                </p>
                <ul class="list-disc list-inside mt-2 space-y-1 text-rose-900 font-semibold pl-2">
                  <li>Các cơ sở khám bệnh, chữa bệnh xây dựng Danh mục tương tác thuốc chống chỉ định thực hiện tại đơn vị.</li>
                  <li>Các cơ sở khám bệnh, chữa bệnh xây dựng phần mềm cảnh báo tương tác thuốc trong kê đơn và duyệt đơn thuốc của Dược sĩ lâm sàng.</li>
                </ul>
              </div>

              <div class="p-3.5 bg-slate-50 rounded-xl border border-slate-200">
                <strong class="text-slate-900 font-bold block mb-1">Điều 4. Trách nhiệm thi hành</strong>
                <p>Các Ông, Bà: Chánh Văn phòng Bộ, Cục trưởng Cục Quản lý Khám, chữa bệnh, Chánh Thanh tra Bộ, Cục trưởng các Cục, Vụ trưởng các Vụ thuộc Bộ Y tế; Giám đốc các Bệnh viện, Viện có giường bệnh trực thuộc Bộ Y tế; Giám đốc Sở Y tế các tỉnh, thành phố trực thuộc Trung ương; Thủ trưởng Y tế các ngành chịu trách nhiệm thi hành Quyết định này.</p>
              </div>
            </div>

            <div class="flex justify-between items-start pt-6 border-t border-slate-200 text-xs">
              <div class="space-y-0.5 text-slate-500">
                <span class="font-bold text-slate-700 block">Nơi nhận:</span>
                <p>- Như Điều 4;</p>
                <p>- Bộ trưởng (để báo cáo);</p>
                <p>- Lưu: VT, KCB.</p>
              </div>
              <div class="text-center space-y-1">
                <div class="font-bold text-slate-900 uppercase">KT. BỘ TRƯỞNG</div>
                <div class="font-bold text-slate-700">THỨ TRƯỞNG</div>
                <div class="pt-10 font-black text-rose-800 text-sm">Nguyễn Trường Sơn</div>
                <div class="text-[10px] text-slate-400 italic">(Đã ký)</div>
              </div>
            </div>
          </div>
        </div>

        <!-- Modal Footer -->
        <div class="px-6 py-3.5 bg-slate-100 border-t border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-3 shrink-0">
          <div class="text-xs text-slate-600 flex items-center gap-1.5">
            <i data-lucide="info" class="w-4 h-4 text-rose-600 shrink-0"></i>
            <span>Bấm nút "Đưa vào đơn kiểm tra ngay" ở bất kỳ cặp tương tác nào để nạp tự động vào hệ thống kiểm tra</span>
          </div>
          <button onclick="window.closeQD5948Modal()" class="px-5 py-2 rounded-xl bg-slate-800 hover:bg-slate-900 text-white font-bold text-xs transition-colors shadow-xs">
            Đóng cửa sổ
          </button>
        </div>

      </div>
    </div>
  `;

  renderQDInteractions(allQDInteractions);

  if (window.lucide) window.lucide.createIcons();

  const backdrop = document.getElementById("qd5948Backdrop");
  if (backdrop) {
    backdrop.addEventListener("click", (e) => {
      if (e.target === backdrop) closeQD5948Modal();
    });
  }
}

function renderQDInteractions(items) {
  const container = document.getElementById("qdInteractionsList");
  if (!container) return;

  const currentDrugs = getActiveDrugsDatabase();

  if (items.length === 0) {
    container.innerHTML = `
      <div class="text-center py-10 bg-slate-50 rounded-2xl border border-dashed border-slate-200 text-slate-400 text-xs">
        <i data-lucide="search-x" class="w-8 h-8 mx-auto mb-2 text-slate-300"></i>
        Không tìm thấy cặp tương tác nào phù hợp với từ khóa tra cứu.
      </div>
    `;
    if (window.lucide) window.lucide.createIcons();
    return;
  }

  container.innerHTML = items.map((item, idx) => {
    const d1 = item.pair[0];
    const d2 = item.pair[1];
    const drug1 = currentDrugs.find(d => d.id === d1) || { name: d1 === "alcohol" ? "Rượu (Alcohol)" : d1 };
    const drug2 = currentDrugs.find(d => d.id === d2) || { name: d2 === "alcohol" ? "Rượu (Alcohol)" : d2 };

    return `
      <div class="p-4 sm:p-5 rounded-2xl border border-rose-200 bg-rose-50/40 hover:bg-rose-50/70 transition-all shadow-xs space-y-3">
        <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <div class="flex items-center gap-2 flex-wrap">
            <span class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-black bg-rose-600 text-white border border-rose-700 shadow-2xs">
              <i data-lucide="alert-octagon" class="w-3 h-3 text-amber-300"></i>
              #${idx + 1} - CHỐNG CHỈ ĐỊNH (QĐ 5948)
            </span>
            <div class="text-xs font-bold text-slate-800 bg-white px-2.5 py-1 rounded-lg border border-slate-200 shadow-2xs">
              ${drug1.name} ⟷ ${drug2.name}
            </div>
          </div>
          <button onclick="window.loadPairAndCheck('${d1}', '${d2}')" 
                  class="self-start sm:self-auto px-3 py-1.5 bg-rose-700 hover:bg-rose-800 text-white text-xs font-bold rounded-xl shadow-xs transition-all flex items-center gap-1.5 hover:scale-[1.02] active:scale-98">
            <i data-lucide="zap" class="w-3.5 h-3.5 text-amber-300"></i>
            <span>Đưa vào đơn kiểm tra ngay</span>
          </button>
        </div>

        <h4 class="text-sm font-bold text-slate-900 leading-snug">
          ${item.title}
        </h4>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-2.5 text-xs text-slate-700">
          <div class="bg-white/80 p-3 rounded-xl border border-slate-200/80">
            <strong class="text-slate-900 block mb-0.5">Cơ chế tương tác:</strong>
            <p class="leading-relaxed text-slate-600">${item.mechanism}</p>
          </div>
          <div class="bg-white/80 p-3 rounded-xl border border-slate-200/80">
            <strong class="text-rose-900 block mb-0.5">Hậu quả lâm sàng nghiêm trọng:</strong>
            <p class="leading-relaxed text-rose-900/90 font-medium">${item.clinicalImpact}</p>
          </div>
        </div>

        <div class="bg-white p-3 rounded-xl border border-rose-200 text-xs">
          <strong class="text-teal-900 block mb-1 flex items-center gap-1 font-bold">
            <i data-lucide="check-circle-2" class="w-3.5 h-3.5 text-teal-600"></i>
            Khuyến cáo xử trí & thay thế thuốc:
          </strong>
          <p class="text-slate-700 leading-relaxed">${item.recommendation}</p>
        </div>
      </div>
    `;
  }).join("");

  if (window.lucide) window.lucide.createIcons();
}

export function closeQD5948Modal() {
  const modalContainer = document.getElementById("qd5948ModalContainer");
  if (modalContainer) {
    modalContainer.innerHTML = "";
  }
}

// Window global bindings
window.removeDrugFromBasket = removeDrugFromBasket;
window.addPresetInteractionCase = addPresetInteractionCase;
window.loadPairAndCheck = loadPairAndCheck;
window.openQD5948Modal = openQD5948Modal;
window.closeQD5948Modal = closeQD5948Modal;

window.switchQD5948Tab = function(tabName) {
  const catEl = document.getElementById("qdTabContentCatalog");
  const fullEl = document.getElementById("qdTabContentFulltext");
  const btn1 = document.getElementById("qdTabBtn1");
  const btn2 = document.getElementById("qdTabBtn2");

  if (tabName === "catalog") {
    if (catEl) catEl.classList.remove("hidden");
    if (fullEl) fullEl.classList.add("hidden");
    if (btn1) {
      btn1.className = "px-4 py-2.5 text-xs font-extrabold border-b-2 border-rose-600 text-rose-700 transition-colors flex items-center gap-2";
    }
    if (btn2) {
      btn2.className = "px-4 py-2.5 text-xs font-extrabold border-b-2 border-transparent text-slate-500 hover:text-slate-800 transition-colors flex items-center gap-2";
    }
  } else {
    if (catEl) catEl.classList.add("hidden");
    if (fullEl) fullEl.classList.remove("hidden");
    if (btn1) {
      btn1.className = "px-4 py-2.5 text-xs font-extrabold border-b-2 border-transparent text-slate-500 hover:text-slate-800 transition-colors flex items-center gap-2";
    }
    if (btn2) {
      btn2.className = "px-4 py-2.5 text-xs font-extrabold border-b-2 border-rose-600 text-rose-700 transition-colors flex items-center gap-2";
    }
  }
  if (window.lucide) window.lucide.createIcons();
};

window.filterQD5948List = function() {
  const q = (document.getElementById("qdSearchInput")?.value || "").trim().toLowerCase();
  const currentDrugs = getActiveDrugsDatabase();
  const allQDInteractions = DRUG_INTERACTIONS.filter(item => item.isQD5948);
  
  const filtered = allQDInteractions.filter(item => {
    if (!q) return true;
    const d1 = item.pair[0];
    const d2 = item.pair[1];
    const drug1 = currentDrugs.find(d => d.id === d1) || { name: d1 };
    const drug2 = currentDrugs.find(d => d.id === d2) || { name: d2 };
    const textToSearch = [
      d1, d2, drug1.name, drug2.name,
      item.title, item.mechanism, item.clinicalImpact, item.recommendation
    ].join(" ").toLowerCase();
    return textToSearch.includes(q);
  });

  const countBadge = document.getElementById("qdFilteredCount");
  if (countBadge) countBadge.textContent = filtered.length;

  renderQDInteractions(filtered);
};
