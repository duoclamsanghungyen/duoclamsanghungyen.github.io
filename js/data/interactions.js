/**
 * PHARMAVITA / CLINICALRX - CƠ SỞ DỮ LIỆU TƯƠNG TÁC THUỐC LÂM SÀNG
 * Bệnh viện Đa khoa tỉnh Hưng Yên
 * TÍCH HỢP TOÀN DIỆN ĐẦY ĐỦ 633 CẶP TƯƠNG TÁC CHỐNG CHỈ ĐỊNH 
 * THEO QUYẾT ĐỊNH SỐ 5948/QĐ-BYT (30/12/2021) CỦA BỘ Y TẾ
 * Phân cấp theo chuẩn Dược thư Quốc gia Việt Nam 2022, Stockley's, Lexicomp
 */

export const QD_5948_METADATA = {
  "decisionNumber": "5948/QĐ-BYT",
  "issuedDate": "30/12/2021",
  "issuedBy": "Bộ Y tế",
  "department": "Cục Quản lý Khám, chữa bệnh",
  "signatory": "Thứ trưởng Nguyễn Trường Sơn",
  "title": "Danh mục tương tác thuốc chống chỉ định trong thực hành lâm sàng tại các cơ sở khám bệnh, chữa bệnh",
  "summary": "Quyết định số 5948/QĐ-BYT do Bộ trưởng Bộ Y tế ban hành ngày 30/12/2021 quy định Danh mục tương tác thuốc chống chỉ định bắt buộc trong thực hành lâm sàng. Đây là cơ sở pháp lý cao nhất để các bệnh viện xây dựng danh mục kiểm soát tương tác thuốc tại đơn vị và thiết lập hệ thống cảnh báo kê đơn, duyệt đơn thuốc của Dược sĩ lâm sàng.",
  "articles": [
    {
      "number": "Điều 1",
      "title": "Ban hành danh mục",
      "content": "Ban hành kèm theo Quyết định này \"Danh mục tương tác thuốc chống chỉ định trong thực hành lâm sàng tại các cơ sở khám bệnh, chữa bệnh\"."
    },
    {
      "number": "Điều 2",
      "title": "Hiệu lực thi hành",
      "content": "Quyết định này có hiệu lực kể từ ngày ký ban hành (ngày 30 tháng 12 năm 2021)."
    },
    {
      "number": "Điều 3",
      "title": "Mục đích áp dụng tại cơ sở khám bệnh, chữa bệnh",
      "content": "\"Danh mục tương tác thuốc chống chỉ định trong thực hành lâm sàng tại các cơ sở khám bệnh, chữa bệnh\" là cơ sở để:\n1. Các cơ sở khám bệnh, chữa bệnh xây dựng Danh mục tương tác thuốc chống chỉ định thực hiện tại đơn vị.\n2. Các cơ sở khám bệnh, chữa bệnh xây dựng phần mềm cảnh báo tương tác thuốc trong kê đơn và duyệt đơn thuốc của Dược sĩ lâm sàng."
    },
    {
      "number": "Điều 4",
      "title": "Trách nhiệm thi hành",
      "content": "Các Ông, Bà: Chánh Văn phòng Bộ, Cục trưởng Cục Quản lý Khám, chữa bệnh, Chánh Thanh tra Bộ, Cục trưởng các Cục, Vụ trưởng các Vụ thuộc Bộ Y tế; Giám đốc các Bệnh viện, Viện có giường bệnh trực thuộc Bộ Y tế; Giám đốc Sở Y tế các tỉnh, thành phố trực thuộc Trung ương; Thủ trưởng Y tế các ngành chịu trách nhiệm thi hành Quyết định này."
    }
  ],
  "totalPairs": 633,
  "tableTitle": "BẢNG 3.1. DANH MỤC TƯƠNG TÁC THUỐC THEO TỪNG HOẠT CHẤT (633 CẶP TƯƠNG TÁC)"
};

export const DRUG_INTERACTIONS = [
  {
    "pair": [
      "simvastatin",
      "clarithromycin"
    ],
    "severity": "contraindicated",
    "title": "Chống chỉ định tuyệt đối: Ức chế chuyển hóa Simvastatin & Nguy cơ tiêu cơ vân cấp tử vong",
    "mechanism": "Clarithromycin là chất ức chế cực mạnh cytochrom P450 3A4 (CYP3A4) và protein vận chuyển OATP1B1, làm giảm mạnh độ thanh thải tại gan và làm tăng nồng độ đỉnh cũng như AUC của Simvastatin trong huyết tương lên từ 10 đến 12 lần.",
    "clinicalImpact": "Nguy cơ rất cao xảy ra viêm cơ hoại tử, đau cơ dữ dội, tăng vọt men cơ Creatine Kinase (CK > 10 - 40 lần giới hạn trên bình thường) và Hội chứng Tiêu cơ vân cấp tính (Rhabdomyolysis) dẫn đến Myoglobin niệu, tắc ống thận cấp và suy thận cấp đe dọa tính mạng.",
    "recommendation": "CHỐNG CHỈ ĐỊNH PHỐI HỢP ĐỒNG THỜI (Theo Dược thư Quốc gia Việt Nam 2022 và Cảnh báo an toàn FDA). Bắt buộc TẠM NGỪNG SIMVASTATIN trong toàn bộ thời gian điều trị bằng Clarithromycin; hoặc thay thế bằng kháng sinh nhóm khác (như Amoxicillin/Acid Clavulanic, Cefuroxime) hoặc chuyển sang Statin không chuyển hóa qua CYP3A4 như Rosuvastatin liều thấp hoặc Pravastatin.",
    "evidenceLevel": "Mức độ 1 - Chống chỉ định theo Quyết định 5948/QĐ-BYT (Bộ Y tế)",
    "isQD5948": true,
    "source": "Quyết định 5948/QĐ-BYT (Bộ Y tế)"
  },
  {
    "pair": [
      "amiodarone",
      "levofloxacin"
    ],
    "severity": "contraindicated",
    "title": "Chống chỉ định phối hợp: Kéo dài khoảng QTc & Loạn nhịp xoắn đỉnh (TdP)",
    "mechanism": "Cả hai thuốc đều có tác dụng ức chế kênh kali nội tâm mạc IKr (hERG), dẫn đến kéo dài thời gian tái cực thất và kéo dài khoảng QTc trên điện tâm đồ.",
    "clinicalImpact": "Kéo dài khoảng QTc hiệp đồng (> 500 ms) làm tăng vọt nguy cơ khởi phát loạn nhịp thất đa hình xoắn đỉnh (Torsades de Pointes), rung thất và ngừng tim đột ngột.",
    "recommendation": "TRÁNH PHỐI HỢP ĐỒNG THỜI. Lựa chọn kháng sinh khác không kéo dài khoảng QT (như Beta-lactam, Aminoglycoside). Nếu bắt buộc phải dùng: Phải mắc Monitor theo dõi điện tim liên tục, xét nghiệm bù đủ Kali máu (mục tiêu > 4.0 mEq/L) và Magnesi máu (mục tiêu > 2.0 mg/dL).",
    "evidenceLevel": "Mức độ 1 - Chống chỉ định theo Quyết định 5948/QĐ-BYT (Bộ Y tế)",
    "isQD5948": true,
    "source": "Quyết định 5948/QĐ-BYT (Bộ Y tế)"
  },
  {
    "pair": [
      "meropenem",
      "valproic_acid"
    ],
    "severity": "contraindicated",
    "title": "Chống chỉ định phối hợp: Giảm nồng độ Valproic Acid & Cơn co giật bùng phát",
    "mechanism": "Meropenem và các Carbapenem ức chế enzym acylpeptide hydrolase thủy phân glucuronide valproic, đồng thời thúc đẩy vận chuyển Valproic acid vào hồng cầu và tăng thanh thải, làm nồng độ valproic tụt dốc 60 - 80% chỉ trong 24 giờ.",
    "clinicalImpact": "Mất hoàn toàn khả năng kiểm soát động kinh, dẫn đến trạng thái động kinh liên tục (Status Epilepticus), tổn thương não không hồi phục.",
    "recommendation": "CHỐNG CHỈ ĐỊNH PHỐI HỢP. Không thể bù liều Valproate để vượt qua tương tác này. Bắt buộc đổi kháng sinh (sang Ceftriaxone, Levofloxacin...) hoặc tạm thời chuyển thuốc chống động kinh khác (Levetiracetam, Phenytoin).",
    "evidenceLevel": "Mức độ 1 - Chống chỉ định theo Quyết định 5948/QĐ-BYT (Bộ Y tế)",
    "isQD5948": true,
    "source": "Quyết định 5948/QĐ-BYT (Bộ Y tế)"
  },
  {
    "pair": [
      "vancomycin",
      "colistin"
    ],
    "severity": "major",
    "title": "Nguy cơ cao: Độc tính cộng hưởng trên thận (Suy thận cấp hoại tử ống thận)",
    "mechanism": "Cả Vancomycin và Colistin đều tích tụ và gây tổn thương tế bào biểu mô ống lượn gần theo cơ chế stress oxy hóa và phá vỡ tính toàn vẹn màng tế bào.",
    "clinicalImpact": "Tỷ lệ suy thận cấp (AKI) tăng lên tới 40% - 60% khi phối hợp đồng thời 2 thuốc này, đặc biệt ở bệnh nhân sốc nhiễm khuẩn hoặc nằm ICU.",
    "recommendation": "Nếu bắt buộc phối hợp vì vi khuẩn đa kháng: Bắt buộc bù đủ dịch duy trì thể tích tuần hoàn; Giám sát Creatinine máu và nước tiểu hàng ngày; Định lượng TDM nồng độ đáy Vancomycin và nồng độ Colistin; Cân nhắc đổi sang thuốc ít độc thận hơn nếu có kháng sinh đồ.",
    "evidenceLevel": "Rất cao"
  },
  {
    "pair": [
      "furosemide",
      "vancomycin"
    ],
    "severity": "major",
    "title": "Nguy cơ cao: Hiệp đồng độc tính trên tai (Gây điếc) & Độc tính thận",
    "mechanism": "Furosemide liều cao làm biến đổi nồng độ điện giải ở nội dịch tai trong, hiệp đồng với Vancomycin phá hủy tế bào lông của cơ quan Corti. Ngoài ra, Furosemide làm cô đặc máu giảm tưới máu thận làm tăng tích lũy Vancomycin.",
    "clinicalImpact": "Ù tai, giảm thính lực tiến triển hoặc điếc vĩnh viễn; Tăng tỷ lệ suy giảm chức năng lọc cầu thận.",
    "recommendation": "Tránh dùng liều cao Furosemide tiêm tĩnh mạch nhanh (tiêm không quá 4mg/phút). Theo dõi nồng độ đáy Vancomycin chặt chẽ; hỏi bệnh nhân về triệu chứng ù tai hoặc cảm giác đầy tai.",
    "evidenceLevel": "Cao"
  },
  {
    "pair": [
      "clarithromycin",
      "amiodarone"
    ],
    "severity": "contraindicated",
    "title": "Chống chỉ định phối hợp: Kéo dài khoảng QTc & Ức chế chuyển hóa Amiodarone",
    "mechanism": "Clarithromycin vừa kéo dài khoảng QT, vừa là chất ức chế CYP3A4 làm tăng nồng độ Amiodarone trong máu.",
    "clinicalImpact": "Kéo dài khoảng QTc nghiêm trọng, nguy cơ xoắn đỉnh và ngừng tim rất cao.",
    "recommendation": "CHỐNG CHỈ ĐỊNH PHỐI HỢP. Chọn kháng sinh nhóm khác an toàn về mặt tim mạch.",
    "evidenceLevel": "Mức độ 1 - Chống chỉ định theo Quyết định 5948/QĐ-BYT (Bộ Y tế)",
    "isQD5948": true,
    "source": "Quyết định 5948/QĐ-BYT (Bộ Y tế)"
  },
  {
    "pair": [
      "metformin",
      "furosemide"
    ],
    "severity": "moderate",
    "title": "Thận trọng theo dõi: Tăng nồng độ Metformin & Nguy cơ toan Lactic",
    "mechanism": "Furosemide có thể làm tăng nồng độ đỉnh của Metformin trong huyết tương lên khoảng 22%, đồng thời giảm bài tiết qua thận. Tình trạng mất nước do lợi tiểu cũng làm giảm tưới máu thận.",
    "clinicalImpact": "Tăng nguy cơ tích lũy Metformin gây nhiễm toan Lactic ở bệnh nhân có tổn thương thận tiềm ẩn.",
    "recommendation": "Theo dõi chức năng thận (Creatinine, eGFR) và điện giải. Điều chỉnh liều nếu bệnh nhân có dấu hiệu mất nước hoặc suy giảm eGFR.",
    "evidenceLevel": "Trung bình"
  },
  {
    "pair": [
      "levofloxacin",
      "methylprednisolone"
    ],
    "severity": "major",
    "title": "Nguy cơ nghiêm trọng: Đứt gân gót chân (Achilles tendon rupture)",
    "mechanism": "Fluoroquinolone gây độc trực tiếp trên tế bào gân và ức chế tổng hợp collagen type 1. Corticosteroid ức chế phân bào nguyên bào sợi và làm yếu cấu trúc mô liên kết.",
    "clinicalImpact": "Tỷ lệ viêm gân và đứt gân (đặc biệt là gân gót Achilles) tăng gấp 3 đến 6 lần so với dùng đơn độc từng thuốc, có thể xảy ra ở cả người trẻ lẫn người cao tuổi.",
    "recommendation": "CÂN NHẮC KỸ LỢI ÍCH - NGUY CƠ. Tránh phối hợp nếu có kháng sinh thay thế. Dặn dò bệnh nhân ngừng tập thể thao cường độ cao, báo ngay cho nhân viên y tế nếu xuất hiện đau, sưng vùng gót chân.",
    "evidenceLevel": "Cảnh báo FDA Black Box"
  },
  {
    "pair": [
      "warfarin",
      "celecoxib"
    ],
    "severity": "major",
    "title": "Nguy cơ cao: Xuất huyết tiêu hóa ồ ạt & Tăng chỉ số INR",
    "mechanism": "Celecoxib ức chế enzym CYP2C9 (enzym chuyển hóa chính của S-warfarin), đồng thời ức chế COX-2 làm mất prostaglandin bảo vệ niêm mạc dạ dày.",
    "clinicalImpact": "Làm tăng nồng độ Warfarin tự do và đẩy INR tăng vọt, kết hợp tổn thương niêm mạc dạ dày gây loét và xuất huyết tiêu hóa dữ dội.",
    "recommendation": "Tránh dùng chung nếu có thể. Nếu đau cơ xương khớp, ưu tiên dùng Paracetamol hoặc giảm đau tại chỗ. Nếu bắt buộc phối hợp: Giảm liều Warfarin, theo dõi INR sau 3 - 5 ngày và bắt buộc kèm thuốc PPI bảo vệ dạ dày.",
    "evidenceLevel": "Rất cao"
  },
  {
    "pair": [
      "digoxin",
      "amiodarone"
    ],
    "severity": "major",
    "title": "Nguy cơ cao: Tăng gấp đôi nồng độ Digoxin & Ngộ độc Glycosid tim",
    "mechanism": "Amiodarone ức chế mạnh bơm tống thuốc P-glycoprotein (P-gp) ở thận và ruột, làm giảm đào thải Digoxin qua nước tiểu từ 30% đến 50%.",
    "clinicalImpact": "Nồng độ Digoxin trong máu tăng vọt từ 70% đến 100% trong vòng vài ngày, gây ngộ độc Digoxin cấp tính: Block nhĩ thất hoàn toàn, loạn nhịp thất chết người, nhìn mờ quầng vàng.",
    "recommendation": "KHI BẮT ĐẦU DÙNG AMIODARONE: Bắt buộc GIẢM NGAY 50% LIỀU DIGOXIN. Định lượng lại nồng độ đáy Digoxin máu sau 1 tuần và theo dõi sát điện tâm đồ.",
    "evidenceLevel": "Chắc chắn (Tương tác kinh điển Dược thư Quốc gia)"
  },
  {
    "pair": [
      "digoxin",
      "furosemide"
    ],
    "severity": "major",
    "title": "Nguy cơ cao: Hạ Kali/Magnesi máu kích hoạt ngộ độc Digoxin gây loạn nhịp tim",
    "mechanism": "Furosemide là lợi tiểu quai làm tăng bài tiết Kali và Magnesi qua ống thận. Tình trạng hạ Kali máu làm tăng gắn kết Digoxin vào thụ thể Na+/K+ ATPase trên màng tế bào cơ tim.",
    "clinicalImpact": "Khởi phát các loạn nhịp tim nguy hiểm đe dọa tính mạng (nhịp nhanh thất, rung thất, ngoại tâm thu thất chùm) ngay cả khi nồng độ Digoxin trong máu nằm trong khoảng tham chiếu bình thường!",
    "recommendation": "Luôn kiểm tra điện giải đồ thường xuyên. Bù Kali duy trì nồng độ K+ máu > 4.0 mEq/L và Mg2+ > 2.0 mg/dL. Cân nhắc phối hợp Spironolactone liều thấp để giữ Kali nếu phù hợp.",
    "evidenceLevel": "Mức độ 1 (Y văn kinh điển)"
  },
  {
    "pair": [
      "spironolactone",
      "enalapril"
    ],
    "severity": "major",
    "title": "Nguy cơ cao: Tăng Kali máu ác tính (> 6.0 mmol/L) & Ngừng tim",
    "mechanism": "Enalapril (ức chế men chuyển ACEi) làm giảm tiết Aldosterone từ vỏ thượng thận, kết hợp với Spironolactone là chất đối kháng trực tiếp thụ thể Aldosterone tại ống lượn xa, làm triệt tiêu hoàn toàn khả năng bài tiết Kali qua thận.",
    "clinicalImpact": "Tăng vọt nồng độ Kali huyết thanh dẫn đến block nhĩ thất, giãn rộng phức bộ QRS, rung thất và ngừng tim đột ngột, đặc biệt ở bệnh nhân suy giảm chức năng thận.",
    "recommendation": "Mặc dù đây là phác đồ phối hợp chuẩn trong suy tim HFrEF (tứ trụ), BẮT BUỘC: (1) Không khởi đầu nếu K+ > 5.0 mmol/L hoặc eGFR < 30 mL/phút; (2) Xét nghiệm K+ máu và Creatinine tại thời điểm 1 tuần, 4 tuần và mỗi 3 tháng; (3) Cấm dùng kèm viên uống bổ sung Kali.",
    "evidenceLevel": "Rất cao (Khuyến cáo AHA/ESC/Hội Tim Mạch VN)"
  },
  {
    "pair": [
      "spironolactone",
      "losartan"
    ],
    "severity": "major",
    "title": "Nguy cơ cao: Tăng Kali máu nghiêm trọng do hiệp đồng ức chế hệ RAAS",
    "mechanism": "Losartan ức chế thụ thể AT1 của Angiotensin II làm giảm tổng hợp Aldosterone, cộng hưởng với tác dụng kháng thụ thể Aldosterone của Spironolactone gây giữ Kali tại thận.",
    "clinicalImpact": "Tăng Kali máu tiến triển âm thầm, gây mệt mỏi, yếu liệt cơ tứ chi và rối loạn dẫn truyền tim ác tính.",
    "recommendation": "Kiểm tra chức năng thận và Kali máu định kỳ. Khởi đầu Spironolactone ở liều thấp 12.5 - 25 mg/ngày. Dặn bệnh nhân tránh các loại thực phẩm hoặc muối ăn thay thế chứa nhiều Kali.",
    "evidenceLevel": "Rất cao"
  },
  {
    "pair": [
      "piperacillin_tazobactam",
      "vancomycin"
    ],
    "severity": "major",
    "title": "Nguy cơ cao: Tổn thương thận cấp hiệp đồng (Synergistic AKI)",
    "mechanism": "Cơ chế hiệp đồng gây tổn thương mô kẽ và hoại tử ống thận cấp. Phối hợp Piperacillin/Tazobactam làm chậm thanh thải Vancomycin và làm tăng tích tụ Vancomycin trong biểu mô ống thận.",
    "clinicalImpact": "Tỷ lệ suy thận cấp (AKI) tăng vọt từ 8-10% lên tới 25-35% ở bệnh nhân ICU so với khi phối hợp Vancomycin + Cefepime hoặc Vancomycin + Meropenem.",
    "recommendation": "Nếu có thể thay thế, ưu tiên phối hợp Vancomycin với Meropenem hoặc Cefepime ở bệnh nhân có sẵn bệnh thận hoặc đang dùng các thuốc độc thận khác. Nếu bắt buộc phối hợp: Giám sát Creatinine máu hàng ngày, duy trì nồng độ đáy Vancomycin <= 15-20 mcg/mL.",
    "evidenceLevel": "Nhiều phân tích gộp (Meta-analysis) & Khuyến cáo IDSA"
  },
  {
    "pair": [
      "gentamicin",
      "vancomycin"
    ],
    "severity": "major",
    "title": "Nguy cơ cao: Độc tính cộng hưởng trên Thính giác & Thận",
    "mechanism": "Cả hai kháng sinh đều tích tụ nồng độ cao tại tế bào biểu mô ống lượn gần và các tế bào lông ở ốc tai/tiền đình, gây stress oxy hóa và chết tế bào theo chương trình.",
    "clinicalImpact": "Tăng vọt nguy cơ hoại tử ống thận cấp gây thiểu niệu suy thận; Giảm thính lực vĩnh viễn không hồi phục hoặc chóng mặt mất thăng bằng tiền đình dữ dội.",
    "recommendation": "Hạn chế thời gian phối hợp tối đa <= 3 - 5 ngày. Bắt buộc thực hiện TDM đo nồng độ đỉnh và đáy của cả hai thuốc. Chuyển Gentamicin sang chế độ liều 1 lần/ngày (OEDA) để giảm tích lũy độc tính thận.",
    "evidenceLevel": "Mức độ 1 (Y văn chuẩn)"
  },
  {
    "pair": [
      "atorvastatin",
      "clarithromycin"
    ],
    "severity": "major",
    "title": "Nguy cơ cao: Tăng nồng độ Statin & Hội chứng tiêu cơ vân cấp",
    "mechanism": "Clarithromycin là chất ức chế mạnh CYP3A4, làm giảm chuyển hóa bước một tại gan của Atorvastatin, làm tăng nồng độ đỉnh và AUC của Atorvastatin lên từ 3 đến 5 lần.",
    "clinicalImpact": "Tổn thương cơ vân cấp tính, đau cơ dữ dội, tăng nồng độ men Creatine Kinase (CK > 10 lần ULN), Myoglobin niệu gây tắc ống thận cấp và suy thận cấp.",
    "recommendation": "Tạm ngừng Atorvastatin trong suốt đợt điều trị Clarithromycin; hoặc thay thế bằng Azithromycin (không chuyển hóa qua CYP3A4) hoặc Rosuvastatin liều thấp (<= 10mg/ngày) nếu bắt buộc.",
    "evidenceLevel": "Rất cao (Cảnh báo FDA)"
  },
  {
    "pair": [
      "morphine",
      "diazepam"
    ],
    "severity": "contraindicated",
    "title": "Chống chỉ định phối hợp không kiểm soát: Ức chế hô hấp sâu & Hôn mê tử vong",
    "mechanism": "Cộng hưởng tác dụng ức chế hệ thần kinh trung ương và trung tâm hô hấp ở hành não thông qua kích thích đồng thời thụ thể Opioid Mu và thụ thể GABA-A.",
    "clinicalImpact": "Suy hô hấp cấp tính, giảm tần số thở trầm trọng (< 8 lần/phút), ứ đọng CO2 gây toan hô hấp, tụt huyết áp, hôn mê sâu và tử vong nhanh chóng nếu không được cấp cứu kịp thời.",
    "recommendation": "TRÁNH PHỐI HỢP TRỪ KHI BỆNH NHÂN ĐÃ ĐƯỢC ĐẶT NỘI KHÍ QUẢN THỞ MÁY TẠI ICU. Luôn chuẩn bị sẵn Naloxone và Flumazenil cùng bóng Ambu hỗ trợ hô hấp.",
    "evidenceLevel": "FDA Black Box Warning (Cảnh báo hộp đen cao nhất)"
  },
  {
    "pair": [
      "fentanyl",
      "midazolam"
    ],
    "severity": "contraindicated",
    "title": "Nguy cơ cao / Chống chỉ định ngoài ICU: Ngừng thở & Tụt huyết áp kịch phát",
    "mechanism": "Tác dụng hiệp đồng ức chế thụ thể GABA và Mu-opioid làm triệt tiêu phản xạ hô hấp tự nhiên và làm giãn mạch ngoại vi.",
    "clinicalImpact": "Ngừng thở đột ngột trong vòng 1 - 2 phút sau tiêm, tụt huyết áp nặng.",
    "recommendation": "Chỉ sử dụng phối hợp khi có Bác sĩ Gây mê hồi sức hoặc Hồi sức tích cực trực tiếp theo dõi, bệnh nhân đã có đường thở nhân tạo và máy thở hoạt động.",
    "evidenceLevel": "Khuyến cáo Gây mê Hồi sức lâm sàng"
  },
  {
    "pair": [
      "ciprofloxacin",
      "amiodarone"
    ],
    "severity": "contraindicated",
    "title": "Chống chỉ định phối hợp: Kéo dài khoảng QTc & Loạn nhịp xoắn đỉnh (TdP)",
    "mechanism": "Cả Ciprofloxacin và Amiodarone đều kéo dài thời gian tái cực thất thông qua ức chế dòng kali IKr (hERG).",
    "clinicalImpact": "Kéo dài khoảng QTc hiệp đồng (> 500 ms) kích hoạt loạn nhịp thất đa hình dạng xoắn đỉnh (Torsades de Pointes) và đột tử do tim.",
    "recommendation": "CHỐNG CHỈ ĐỊNH DÙNG CHUNG. Thay thế Ciprofloxacin bằng nhóm Beta-lactam hoặc Aminoglycoside không gây độc trên điện tim.",
    "evidenceLevel": "Mức độ 1 - Chống chỉ định theo Quyết định 5948/QĐ-BYT (Bộ Y tế)",
    "isQD5948": true,
    "source": "Quyết định 5948/QĐ-BYT (Bộ Y tế)"
  },
  {
    "pair": [
      "insulin_regular",
      "enalapril"
    ],
    "severity": "moderate",
    "title": "Thận trọng: Tăng nguy cơ hạ đường huyết ở bệnh nhân đái tháo đường",
    "mechanism": "Thuốc ức chế men chuyển làm tăng nồng độ Bradykinin, từ đó làm tăng nhạy cảm của thụ thể Insulin tại mô cơ và mô mỡ, thúc đẩy tiêu thụ glucose.",
    "clinicalImpact": "Có thể gây hạ đường huyết đột ngột không dự đoán trước, đặc biệt trong những tuần đầu phối hợp.",
    "recommendation": "Hướng dẫn bệnh nhân nhận biết các dấu hiệu hạ đường huyết (run rẩy, đói cồn cào, vã mồ hôi). Theo dõi đường huyết mao mạch chặt chẽ hơn và sẵn sàng giảm nhẹ liều Insulin.",
    "evidenceLevel": "Trung bình"
  },
  {
    "pair": [
      "perindopril",
      "spironolactone"
    ],
    "severity": "major",
    "title": "Nguy cơ cao: Hiệp đồng giữ Kali gây tăng Kali máu trầm trọng",
    "mechanism": "Ức chế hiệp đồng trục RAAS làm mất hoàn toàn khả năng bài tiết ion Kali của ống lượn xa và ống góp thận.",
    "clinicalImpact": "Tăng Kali máu nặng dẫn đến yếu cơ liệt mềm cơ hô hấp và ngừng tim kỳ tâm trương.",
    "recommendation": "Giám sát điện giải đồ chặt chẽ. Dặn dò bệnh nhân TUYỆT ĐỐI KHÔNG TỰ Ý DÙNG THỰC PHẨM CHỨC NĂNG BỔ SUNG KALI hoặc muối ăn thay thế chứa KCl.",
    "evidenceLevel": "Rất cao"
  },
  {
    "pair": [
      "fluconazole",
      "warfarin"
    ],
    "severity": "major",
    "title": "Nguy cơ cao: Ức chế chuyển hóa Warfarin & Xuất huyết ồ ạt",
    "mechanism": "Fluconazole là chất ức chế mạnh CYP2C9 (enzym chủ đạo chuyển hóa S-warfarin có hoạt tính chống đông mạnh gấp 5 lần R-warfarin).",
    "clinicalImpact": "Làm chỉ số INR tăng vọt (thường > 5.0 - 10.0), gây nguy cơ xuất huyết não, xuất huyết tiêu hóa và đái ra máu đe dọa tính mạng.",
    "recommendation": "Khi bắt buộc phối hợp: GIẢM NGAY 25% - 50% LIỀU WARFARIN. Kiểm tra INR sau 2 - 3 ngày và điều chỉnh liều kịp thời.",
    "evidenceLevel": "Mức độ 1 (Y văn chuẩn)"
  },
  {
    "pair": [
      "flumazenil",
      "diazepam"
    ],
    "severity": "major",
    "title": "Cảnh báo cấp cứu: Hiện tượng tái hôn mê (Resedation) & Nguy cơ co giật bùng phát",
    "mechanism": "Flumazenil có thời gian bán thải rất ngắn (40 - 80 phút) trong khi Diazepam và các chất chuyển hóa có hoạt tính tồn tại trong cơ thể hàng chục giờ.",
    "clinicalImpact": "Bệnh nhân có thể tỉnh táo ngay lập tức sau tiêm nhưng sau 1 - 2 giờ lại rơi vào hôn mê suy hô hấp trở lại; Bệnh nhân dùng Diazepam dài ngày có thể xuất hiện hội chứng cai bùng phát cơn co giật kháng trị.",
    "recommendation": "THEO DÕI SÁT TRI GIÁC VÀ HÔ HẤP TRONG ÍT NHẤT 2 - 4 GIỜ TẠI PHÒNG HỒI TỈNH. Sẵn sàng tiêm nhắc lại Flumazenil hoặc truyền liên tục nếu tái hôn mê.",
    "evidenceLevel": "Khuyến cáo Cấp cứu Chống độc"
  },
  {
    "pair": [
      "calcium_gluconate",
      "ceftriaxone"
    ],
    "severity": "contraindicated",
    "title": "Chống chỉ định tuyệt đối: Kết tủa Canxi - Ceftriaxone tắc mạch tử vong",
    "mechanism": "Muối Ceftriaxone tạo phức chelat không tan với ion Canxi tạo thành các tinh thể vi kết tủa trong lòng mạch máu.",
    "clinicalImpact": "Gây lắng đọng kết tủa dạng sỏi canxi trong vi mạch phổi và thận, suy hô hấp cấp và tử vong ở trẻ sơ sinh và trẻ nhỏ.",
    "recommendation": "CHỐNG CHỈ ĐỊNH TUYỆT ĐỐI DÙNG CHUNG ĐƯỜNG TRUYỀN HOẶC TRUYỀN ĐỒNG THỜI Ở TRẺ SƠ SINH (KỂ CẢ TRUYỀN QUA CÁC ĐƯỜNG RIÊNG RẼ TRONG VÒNG 48 GIỜ). Ở người lớn: Bắt buộc tráng rửa đường truyền thật kỹ bằng NaCl 0.9% giữa 2 lần tiêm.",
    "evidenceLevel": "Mức độ 1 - Chống chỉ định theo Quyết định 5948/QĐ-BYT (Bộ Y tế)",
    "isQD5948": true,
    "source": "Quyết định 5948/QĐ-BYT (Bộ Y tế)"
  },
  {
    "pair": [
      "amlodipine",
      "simvastatin"
    ],
    "severity": "major",
    "title": "Nguy cơ cao: Tăng nồng độ Simvastatin & Nguy cơ tiêu cơ vân",
    "mechanism": "Amlodipine ức chế nhẹ enzym CYP3A4 tại gan và ruột, làm tăng nồng độ Simvastatin trong máu lên khoảng 1.5 - 2 lần.",
    "clinicalImpact": "Tăng nguy cơ viêm cơ, đau cơ và tiêu cơ vân cấp tính (Rhabdomyolysis) dẫn đến suy thận cấp do myoglobin.",
    "recommendation": "GIỚI HẠN LIỀU SIMVASTATIN TỐI ĐA 20 mg/NGÀY khi phối hợp với Amlodipine (theo cảnh báo FDA). Hoặc chuyển sang Statin ít chuyển hóa qua CYP3A4 như Rosuvastatin hoặc Pravastatin.",
    "evidenceLevel": "Mức độ 1 (Cảnh báo FDA & Thông tư Dược lâm sàng)"
  },
  {
    "pair": [
      "clopidogrel",
      "omeprazole"
    ],
    "severity": "major",
    "title": "Tương tác nghiêm trọng: Giảm hoạt tính kháng kết tập tiểu cầu của Clopidogrel",
    "mechanism": "Omeprazole ức chế mạnh CYP2C19 (enzym chính chuyển Clopidogrel thành dạng chất chuyển hóa có hoạt tính chống đông), làm giảm 40-50% lượng chất chuyển hóa có hoạt tính.",
    "clinicalImpact": "Làm mất tác dụng bảo vệ tim mạch của Clopidogrel, tăng nguy cơ tái tắc mạch vành, huyết khối trong stent và nhồi máu cơ tim tái phát.",
    "recommendation": "TRÁNH PHỐI HỢP ĐỒNG THỜI. Chuyển sang dùng PPI ít hoặc không ức chế CYP2C19 như PANTOPRAZOLE hoặc RABEPRAZOLE để bảo vệ dạ dày.",
    "evidenceLevel": "Mức độ 1 (Cảnh báo FDA & Hội Tim mạch Châu Âu ESC)"
  },
  {
    "pair": [
      "aspirin",
      "clopidogrel"
    ],
    "severity": "moderate",
    "title": "Liệu pháp kháng tiểu cầu kép (DAPT): Tăng nguy cơ xuất huyết tiêu hóa",
    "mechanism": "Hiệp đồng tác dụng ức chế kết tập tiểu cầu qua 2 con đường độc lập: ức chế Thromboxane A2 (Aspirin) và ức chế thụ thể P2Y12 (Clopidogrel).",
    "clinicalImpact": "Tăng tỷ lệ chảy máu dạ dày, xuất huyết tiêu hóa và bầm máu dưới da. Tuy nhiên, đây là phác đồ chuẩn bắt buộc sau đặt stent mạch vành hoặc hội chứng vành cấp.",
    "recommendation": "Kê kèm thuốc ức chế bơm proton (Pantoprazole) để bảo vệ dạ dày ở bệnh nhân có yếu tố nguy cơ (tuổi > 65, tiền sử loét). Theo dõi sát công thức máu và phân.",
    "evidenceLevel": "Hướng dẫn thực hành chuẩn AHA/ESC"
  },
  {
    "pair": [
      "aspirin",
      "warfarin"
    ],
    "severity": "major",
    "title": "Nguy cơ cao: Phối hợp chống đông và kháng tiểu cầu gây xuất huyết nặng",
    "mechanism": "Aspirin làm tổn thương trực tiếp niêm mạc dạ dày và ức chế chức năng tiểu cầu, phối hợp với tác dụng chống đông giảm các yếu tố đông máu của Warfarin.",
    "clinicalImpact": "Nguy cơ xuất huyết tiêu hóa trên ồ ạt và xuất huyết não tăng gấp 3-5 lần so với dùng đơn trị liệu.",
    "recommendation": "Chỉ phối hợp khi có chỉ định tim mạch đặc biệt (van tim cơ học kèm hội chứng vành cấp). Bắt buộc dùng kèm PPI (Pantoprazole) và duy trì INR ở cận dưới của khoảng đích (2.0 - 2.5).",
    "evidenceLevel": "Rất cao"
  },
  {
    "pair": [
      "warfarin",
      "diclofenac"
    ],
    "severity": "major",
    "title": "Nguy cơ cao: NSAID hiệp đồng gây loét dạ dày & Xuất huyết ồ ạt",
    "mechanism": "Diclofenac ức chế COX-1 làm mất lớp màng bảo vệ dạ dày, đồng thời ức chế kết tập tiểu cầu và có thể làm tăng nhẹ nồng độ Warfarin tự do qua cạnh tranh gắn protein huyết tương.",
    "clinicalImpact": "Tăng vọt nguy cơ xuất huyết tiêu hóa nặng đe dọa tính mạng.",
    "recommendation": "TRÁNH PHỐI HỢP NSAID VỚI WARFARIN. Ưu tiên giảm đau bằng Paracetamol liều < 2g/ngày hoặc thuốc giảm đau bôi tại chỗ. Nếu bắt buộc dùng NSAID, phải dùng liều thấp nhất trong thời gian ngắn nhất kèm PPI.",
    "evidenceLevel": "Chắc chắn (Tương tác kinh điển)"
  },
  {
    "pair": [
      "warfarin",
      "ibuprofen"
    ],
    "severity": "major",
    "title": "Nguy cơ cao: Tăng nguy cơ xuất huyết tiêu hóa nghiêm trọng",
    "mechanism": "Ibuprofen gây tổn thương ăn mòn niêm mạc dạ dày và ức chế tiểu cầu, hiệp đồng với hiệu ứng chống đông máu của Warfarin.",
    "clinicalImpact": "Xuất huyết tiêu hóa, chảy máu kéo dài.",
    "recommendation": "Tránh dùng đồng thời. Khuyên bệnh nhân không tự ý mua các thuốc cảm sốt giảm đau chứa Ibuprofen khi đang điều trị Warfarin.",
    "evidenceLevel": "Chắc chắn"
  },
  {
    "pair": [
      "warfarin",
      "naproxen"
    ],
    "severity": "major",
    "title": "Nguy cơ cao: Xuất huyết tiêu hóa nặng khi dùng cùng Naproxen",
    "mechanism": "Naproxen ức chế COX-1 kéo dài, gây trợt loét niêm mạc đường tiêu hóa và ức chế tiểu cầu.",
    "clinicalImpact": "Nguy cơ chảy máu đường tiêu hóa tăng gấp 4-6 lần.",
    "recommendation": "Tránh dùng phối hợp. Ưu tiên Paracetamol hoặc Opioid yếu nếu cần giảm đau.",
    "evidenceLevel": "Cao"
  },
  {
    "pair": [
      "captopril",
      "spironolactone"
    ],
    "severity": "major",
    "title": "Nguy cơ cao: Tăng Kali máu ác tính đe dọa tính mạng",
    "mechanism": "Captopril ức chế sản sinh Aldosterone kết hợp Spironolactone chẹn thụ thể Aldosterone làm thận mất khả năng thải trừ Kali.",
    "clinicalImpact": "Tăng Kali máu nhanh chóng dẫn đến rối loạn nhịp tim nguy hiểm.",
    "recommendation": "Giám sát điện giải đồ chặt chẽ. Cấm dùng các thực phẩm chức năng bổ sung Kali hoặc muối ăn kiêng chứa KCl.",
    "evidenceLevel": "Rất cao"
  },
  {
    "pair": [
      "lisinopril",
      "spironolactone"
    ],
    "severity": "major",
    "title": "Nguy cơ cao: Hiệp đồng giữ Kali gây tăng Kali máu trầm trọng",
    "mechanism": "Ức chế kép hệ renin-angiotensin-aldosterone làm giảm tối đa sự bài tiết kali qua nước tiểu.",
    "clinicalImpact": "Tăng Kali máu nặng, sóng T nhọn, ngừng tim kỳ tâm trương.",
    "recommendation": "Kiểm tra điện giải đồ trước và sau khi bắt đầu dùng 1 tuần. Không dùng nếu Creatinine > 200 umol/L hoặc Kali > 5.0 mmol/L.",
    "evidenceLevel": "Rất cao"
  },
  {
    "pair": [
      "enalapril",
      "ibuprofen"
    ],
    "severity": "major",
    "title": "Hội chứng 'Triple Whammy': Nguy cơ suy thận cấp & Giảm tác dụng hạ áp",
    "mechanism": "Ibuprofen ức chế prostaglandin làm co tiểu động mạch đến của cầu thận; Enalapril làm giãn tiểu động mạch đi. Hậu quả là áp lực lọc cầu thận tụt dốc thê thảm.",
    "clinicalImpact": "Suy thận cấp (AKI), giữ nước gây phù và huyết áp tăng vọt mất kiểm soát.",
    "recommendation": "Tránh phối hợp kéo dài. Nếu cần giảm đau cho bệnh nhân đang dùng ACEi: Ưu tiên Paracetamol. Nếu bắt buộc dùng NSAID: Theo dõi Creatinine và huyết áp.",
    "evidenceLevel": "Rất cao"
  },
  {
    "pair": [
      "perindopril",
      "diclofenac"
    ],
    "severity": "major",
    "title": "Nguy cơ cao: Suy giảm chức năng thận cấp & Giảm hiệu quả hạ áp",
    "mechanism": "Diclofenac ức chế tổng hợp prostaglandin tại thận làm co mạch thận, đối kháng tác dụng giãn mạch hạ áp của Perindopril.",
    "clinicalImpact": "Tăng huyết áp trở lại, ứ trệ natri nước, suy thận cấp ở người cao tuổi.",
    "recommendation": "Hạn chế tối đa dùng NSAID ở bệnh nhân đang dùng thuốc ức chế men chuyển.",
    "evidenceLevel": "Cao"
  },
  {
    "pair": [
      "digoxin",
      "verapamil"
    ],
    "severity": "major",
    "title": "Nguy cơ cao: Tăng 60-90% nồng độ Digoxin & Block tim hoàn toàn",
    "mechanism": "Verapamil ức chế P-glycoprotein làm giảm độ thanh thải Digoxin qua thận và qua mật, đồng thời cả 2 thuốc đều làm chậm dẫn truyền nút nhĩ thất.",
    "clinicalImpact": "Ngộ độc Digoxin nặng kèm nhịp tim chậm nghiêm trọng, block nhĩ thất độ II, độ III.",
    "recommendation": "GIẢM 50% LIỀU DIGOXIN khi bắt đầu dùng Verapamil. Theo dõi nồng độ Digoxin trong máu và đo điện tâm đồ định kỳ.",
    "evidenceLevel": "Rất cao"
  },
  {
    "pair": [
      "metoprolol",
      "verapamil"
    ],
    "severity": "contraindicated",
    "title": "Chống chỉ định phối hợp tiêm truyền: Suy tim cấp & Block nhĩ thất hoàn toàn",
    "mechanism": "Hiệp đồng tác dụng ức chế co bóp cơ tim (Inotropic âm tính) và ức chế mạnh dẫn truyền qua nút nhĩ thất (Dromotropic âm tính).",
    "clinicalImpact": "Tụt huyết áp trụy mạch sâu, nhịp tim chậm kịch phát, block nhĩ thất hoàn toàn, vô tâm thu (ngừng tim).",
    "recommendation": "CHỐNG CHỈ ĐỊNH PHỐI HỢP ĐƯỜNG TIÊM TRUYỀN. Dạng uống chỉ dùng thận trọng dưới sự giám sát của bác sĩ chuyên khoa tim mạch.",
    "evidenceLevel": "Mức độ 1 - Chống chỉ định theo Quyết định 5948/QĐ-BYT (Bộ Y tế)",
    "isQD5948": true,
    "source": "Quyết định 5948/QĐ-BYT (Bộ Y tế)"
  },
  {
    "pair": [
      "bisoprolol",
      "diltiazem"
    ],
    "severity": "major",
    "title": "Nguy cơ cao: Nhịp tim chậm nghiêm trọng & Suy giảm chức năng co bóp",
    "mechanism": "Hiệp đồng ức chế dẫn truyền nhĩ thất và ức chế nút xoang.",
    "clinicalImpact": "Nhịp chậm xoang < 40-50 bpm, block AV, làm nặng thêm tình trạng suy tim sung huyết.",
    "recommendation": "Thận trọng theo dõi nhịp tim và điện tâm đồ. Tránh phối hợp ở bệnh nhân có suy tim phân suất tống máu giảm.",
    "evidenceLevel": "Mức độ 1 - Chống chỉ định theo Quyết định 5948/QĐ-BYT (Bộ Y tế)",
    "isQD5948": true,
    "source": "Quyết định 5948/QĐ-BYT (Bộ Y tế)"
  },
  {
    "pair": [
      "sildenafil",
      "nitroglycerin"
    ],
    "severity": "contraindicated",
    "title": "Chống chỉ định tuyệt đối: Tụt huyết áp kịch phát & Ngừng tim tử vong",
    "mechanism": "Nitroglycerin làm tăng cGMP qua giải phóng NO; Sildenafil ức chế PDE-5 ngăn phân hủy cGMP. Sự tích lũy ồ ạt cGMP gây giãn toàn bộ hệ mạch máu.",
    "clinicalImpact": "Tụt huyết áp tâm thu sâu không thể hồi phục (< 60 mmHg), thiếu máu cơ tim cấp và tử vong.",
    "recommendation": "CHỐNG CHỈ ĐỊNH TUYỆT ĐỐI. Không được dùng bất kỳ dẫn xuất Nitrat nào trong vòng ít nhất 24 giờ sau khi dùng Sildenafil (và ít nhất 48 giờ sau khi dùng Tadalafil).",
    "evidenceLevel": "Mức độ 1 - Chống chỉ định theo Quyết định 5948/QĐ-BYT (Bộ Y tế)",
    "isQD5948": true,
    "source": "Quyết định 5948/QĐ-BYT (Bộ Y tế)"
  },
  {
    "pair": [
      "tadalafil",
      "nitroglycerin"
    ],
    "severity": "contraindicated",
    "title": "Chống chỉ định tuyệt đối: Tụt huyết áp đe dọa tính mạng",
    "mechanism": "Hiệp đồng giãn cơ trơn mạch máu thông qua con đường NO-cGMP kéo dài.",
    "clinicalImpact": "Trụy tim mạch dữ dội, nhồi máu cơ tim, tử vong đột ngột.",
    "recommendation": "CHỐNG CHỈ ĐỊNH TUYỆT ĐỐI. Khoảng cách an toàn tối thiểu giữa Tadalafil và Nitrat là 48 GIỜ.",
    "evidenceLevel": "Mức độ 1 - Chống chỉ định theo Quyết định 5948/QĐ-BYT (Bộ Y tế)",
    "isQD5948": true,
    "source": "Quyết định 5948/QĐ-BYT (Bộ Y tế)"
  },
  {
    "pair": [
      "tadalafil",
      "isosorbide_dinitrate"
    ],
    "severity": "contraindicated",
    "title": "Chống chỉ định tuyệt đối: Nguy cơ trụy mạch khi dùng chung Nitrat",
    "mechanism": "Tích lũy cGMP gây giãn mạch toàn thể kịch phát.",
    "clinicalImpact": "Hạ huyết áp sâu đe dọa tử vong.",
    "recommendation": "CHỐNG CHỈ ĐỊNH TUYỆT ĐỐI.",
    "evidenceLevel": "Mức độ 1 - Chống chỉ định theo Quyết định 5948/QĐ-BYT (Bộ Y tế)",
    "isQD5948": true,
    "source": "Quyết định 5948/QĐ-BYT (Bộ Y tế)"
  },
  {
    "pair": [
      "ciprofloxacin",
      "theophylline"
    ],
    "severity": "major",
    "title": "Nguy cơ cao: Tăng vọt nồng độ Theophylline & Co giật tử vong",
    "mechanism": "Ciprofloxacin ức chế mạnh enzym gan CYP1A2 (con đường chuyển hóa chính của Theophylline), làm giảm 30-50% thanh thải Theophylline.",
    "clinicalImpact": "Ngộ độc Theophylline cấp tính: Loạn nhịp thất nguy hiểm, co giật liên tục kháng trị và tử vong.",
    "recommendation": "NẾU BẮT BUỘC PHỐI HỢP: GIẢM 50% LIỀU THEOPHYLLINE và định lượng TDM nồng độ Theophylline trong máu hàng ngày.",
    "evidenceLevel": "Chắc chắn (Tương tác kinh điển)"
  },
  {
    "pair": [
      "ciprofloxacin",
      "tizanidine"
    ],
    "severity": "contraindicated",
    "title": "Chống chỉ định tuyệt đối: Tụt huyết áp nghiêm trọng & An thần sâu",
    "mechanism": "Ciprofloxacin ức chế CYP1A2 làm nồng độ Tizanidine tăng vọt gấp 7 đến 10 lần.",
    "clinicalImpact": "Tụt huyết áp sâu ngất xỉu, nhịp tim chậm, an thần cực độ và suy giảm tâm thần vận động.",
    "recommendation": "CHỐNG CHỈ ĐỊNH TUYỆT ĐỐI ĐỒNG THỜI.",
    "evidenceLevel": "Mức độ 1 - Chống chỉ định theo Quyết định 5948/QĐ-BYT (Bộ Y tế)",
    "isQD5948": true,
    "source": "Quyết định 5948/QĐ-BYT (Bộ Y tế)"
  },
  {
    "pair": [
      "ciprofloxacin",
      "antacid_al_mg"
    ],
    "severity": "major",
    "title": "Mất hoạt tính kháng sinh: Tạo phức Chelat không tan với Nhôm/Magnesi",
    "mechanism": "Các cation kim loại đa hóa trị (Al3+, Mg2+) tạo phức chelat bền vững với Ciprofloxacin trong lòng ruột làm mất 80-90% khả năng hấp thu.",
    "clinicalImpact": "Nồng độ kháng sinh trong máu không đạt MIC diệt khuẩn, dẫn đến thất bại điều trị nhiễm trùng.",
    "recommendation": "UỐNG CIPROFLOXACIN TRƯỚC THUỐC KHÁNG ACID ÍT NHẤT 2 GIỜ HOẶC SAU ĐÓ ÍT NHẤT 4 GIỜ.",
    "evidenceLevel": "Mức độ 1"
  },
  {
    "pair": [
      "ciprofloxacin",
      "prednisolone"
    ],
    "severity": "major",
    "title": "Nguy cơ cao: Viêm gân & Đứt gân gót Achilles",
    "mechanism": "Cả Quinolon và Corticosteroid đều gây tổn thương và thoái hóa cấu trúc collagen của gân cơ.",
    "clinicalImpact": "Nguy cơ đứt gân gót Achilles tự phát tăng gấp nhiều lần, đặc biệt ở bệnh nhân trên 60 tuổi hoặc có suy thận.",
    "recommendation": "Thận trọng khi phối hợp. Dặn dò bệnh nhân ngừng thuốc ngay và bất động chi nếu thấy đau, sưng hoặc căng tức vùng gân gót.",
    "evidenceLevel": "FDA Black Box Warning"
  },
  {
    "pair": [
      "levofloxacin",
      "dexamethasone"
    ],
    "severity": "major",
    "title": "Nguy cơ cao: Tổn thương gân & Đứt gân khi phối hợp Quinolon với Corticoid",
    "mechanism": "Tác động cộng hưởng làm suy yếu chất nền ngoại bào của gân cơ.",
    "clinicalImpact": "Đứt gân gót Achilles, viêm bao gân.",
    "recommendation": "Theo dõi sát các triệu chứng đau gân; tránh vận động thể lực nặng trong thời gian dùng thuốc.",
    "evidenceLevel": "FDA Black Box"
  },
  {
    "pair": [
      "methotrexate",
      "naproxen"
    ],
    "severity": "major",
    "title": "Nguy cơ cao: Giảm bài tiết Methotrexate & Suy tủy xương tử vong",
    "mechanism": "NSAID ức chế prostaglandin tại thận làm giảm lưu lượng máu lọc cầu thận, đồng thời cạnh tranh bài tiết chủ động tại ống thận với Methotrexate.",
    "clinicalImpact": "Nồng độ Methotrexate trong máu tăng cao và kéo dài gây độc tính tủy xương nặng (giảm bạch cầu hạt, giảm tiểu cầu, suy tủy), loét hoại tử đường tiêu hóa.",
    "recommendation": "Tránh dùng NSAID liều cao cùng lúc với Methotrexate liều cao. Với Methotrexate liều thấp trong viêm khớp: Cần giám sát chặt chẽ công thức máu và chức năng thận.",
    "evidenceLevel": "Rất cao"
  },
  {
    "pair": [
      "methotrexate",
      "cotrimoxazole"
    ],
    "severity": "contraindicated",
    "title": "Chống chỉ định phối hợp: Hiệp đồng ức chế Folate & Suy tủy triệt để",
    "mechanism": "Cả hai thuốc đều ức chế tổng hợp acid folic (Methotrexate ức chế DHFR, Trimethoprim cũng ức chế DHFR), đồng thời Sulfamethoxazole cạnh tranh gắn protein huyết tương đẩy Methotrexate tự do tăng cao.",
    "clinicalImpact": "Thiếu máu bất sản suy tủy toàn bộ, nhiễm trùng cơ hội đe dọa tính mạng và tử vong.",
    "recommendation": "TRÁNH PHỐI HỢP ĐỒNG THỜI. Chọn kháng sinh khác khi bệnh nhân đang điều trị Methotrexate.",
    "evidenceLevel": "Mức độ 1 - Chống chỉ định theo Quyết định 5948/QĐ-BYT (Bộ Y tế)",
    "isQD5948": true,
    "source": "Quyết định 5948/QĐ-BYT (Bộ Y tế)"
  },
  {
    "pair": [
      "tramadol",
      "fluoxetine"
    ],
    "severity": "major",
    "title": "Nguy cơ cao: Hội chứng Serotonin & Giảm ngưỡng co giật",
    "mechanism": "Cả hai thuốc đều làm tăng nồng độ Serotonin trong khe synap thần kinh; ngoài ra Fluoxetine ức chế CYP2D6 cản trở chuyển hóa Tramadol.",
    "clinicalImpact": "Hội chứng Serotonin (kích động, run giật cơ, tăng thân nhiệt, vã mồ hôi) và tăng nguy cơ co giật cơn lớn.",
    "recommendation": "Thận trọng theo dõi. Giáo dục bệnh nhân nhận biết sớm các dấu hiệu của hội chứng Serotonin để đến viện kịp thời.",
    "evidenceLevel": "Cao"
  },
  {
    "pair": [
      "linezolid",
      "escitalopram"
    ],
    "severity": "contraindicated",
    "title": "Chống chỉ định tuyệt đối: Hội chứng Serotonin ác tính đe dọa tính mạng",
    "mechanism": "Linezolid là chất ức chế enzym Monoamine Oxidase (MAOI) có thể hồi phục; Escitalopram là chất ức chế tái thu hồi Serotonin chọn lọc (SSRI).",
    "clinicalImpact": "Khởi phát Hội chứng Serotonin kịch phát: Sốt cao ác tính, co cứng cơ toàn thân, huyết áp dao động dữ dội, hôn mê và tử vong.",
    "recommendation": "CHỐNG CHỈ ĐỊNH PHỐI HỢP. Bắt buộc ngừng SSRI ít nhất 2 tuần (hoặc 5 tuần với Fluoxetine) trước khi bắt đầu Linezolid, trừ trường hợp nhiễm khuẩn đe dọa tính mạng không còn kháng sinh thay thế.",
    "evidenceLevel": "Mức độ 1 - Chống chỉ định theo Quyết định 5948/QĐ-BYT (Bộ Y tế)",
    "isQD5948": true,
    "source": "Quyết định 5948/QĐ-BYT (Bộ Y tế)"
  },
  {
    "pair": [
      "metronidazole",
      "alcohol"
    ],
    "severity": "major",
    "title": "Phản ứng giống Disulfiram (Antabuse-like effect)",
    "mechanism": "Metronidazole ức chế enzym aldehyde dehydrogenase tại gan, làm tích lũy Acetaldehyde độc hại khi uống rượu bia.",
    "clinicalImpact": "Đỏ bừng mặt dữ dội, đau đầu buốt nhói, buồn nôn, nôn mửa liên tục, tụt huyết áp, nhịp tim nhanh và khó thở.",
    "recommendation": "TUYỆT ĐỐI CẤM UỐNG RƯỢU BIA hoặc dung dịch chứa cồn trong suốt thời gian dùng Metronidazole và ít nhất 48 giờ sau liều cuối cùng.",
    "evidenceLevel": "Chắc chắn (Tương tác kinh điển)"
  },
  {
    "pair": [
      "colchicine",
      "clarithromycin"
    ],
    "severity": "contraindicated",
    "isQD5948": true,
    "source": "Quyết định 5948/QĐ-BYT (Bộ Y tế)",
    "title": "Chống chỉ định phối hợp: Ngộ độc Colchicine cấp tính đe dọa tính mạng",
    "mechanism": "Clarithromycin là chất ức chế mạnh enzym CYP3A4 và chất vận chuyển P-glycoprotein (P-gp), làm giảm thanh thải nghiêm trọng và tăng vọt nồng độ Colchicine trong huyết tương gấp nhiều lần.",
    "clinicalImpact": "Ngộ độc Colchicine đa cơ quan cấp tính: tiêu chảy nặng, viêm cơ hoại tử, suy tủy xương toàn bộ (giảm 3 dòng tế bào máu), trụy tim mạch, suy đa tạng và tử vong, đặc biệt nghiêm trọng ở bệnh nhân suy gan hoặc suy thận.",
    "recommendation": "CHỐNG CHỈ ĐỊNH PHỐI HỢP ĐỒNG THỜI theo Quyết định 5948/QĐ-BYT. Tuyệt đối không dùng Clarithromycin ở bệnh nhân đang dùng Colchicine có kèm suy gan hoặc suy thận. Nếu bắt buộc điều trị đợt Gút cấp, chuyển sang NSAID (nếu không suy thận) hoặc Corticoid ngắn ngày; hoặc đổi kháng sinh sang nhóm Beta-lactam.",
    "evidenceLevel": "Mức độ 1 - Chống chỉ định theo Quyết định 5948/QĐ-BYT (Bộ Y tế)"
  },
  {
    "pair": [
      "ivabradine",
      "clarithromycin"
    ],
    "severity": "contraindicated",
    "isQD5948": true,
    "source": "Quyết định 5948/QĐ-BYT (Bộ Y tế)",
    "title": "Chống chỉ định phối hợp: Tăng nồng độ Ivabradine & Nguy cơ chậm nhịp tim kịch phát / Ngừng tim",
    "mechanism": "Ivabradine được chuyển hóa chủ yếu qua CYP3A4. Clarithromycin là chất ức chế CYP3A4 cực mạnh, làm tăng diện tích dưới đường cong nồng độ (AUC) của Ivabradine lên gấp 7 đến 8 lần.",
    "clinicalImpact": "Chậm nhịp tim trầm trọng (< 40 nhịp/phút), blốc nhĩ thất độ cao, tụt huyết áp, ngất, rung nhĩ và nguy cơ ngừng tim đột ngột.",
    "recommendation": "CHỐNG CHỈ ĐỊNH PHỐI HỢP ĐỒNG THỜI theo Quyết định 5948/QĐ-BYT. Lựa chọn kháng sinh khác không ức chế CYP3A4 (như Cefuroxime, Amoxicillin/Clavulanate) để điều trị nhiễm trùng.",
    "evidenceLevel": "Mức độ 1 - Chống chỉ định theo Quyết định 5948/QĐ-BYT (Bộ Y tế)"
  },
  {
    "pair": [
      "ergotamine",
      "clarithromycin"
    ],
    "severity": "contraindicated",
    "isQD5948": true,
    "source": "Quyết định 5948/QĐ-BYT (Bộ Y tế)",
    "title": "Chống chỉ định tuyệt đối: Hội chứng ngộ độc Nấm cựa gà (Ergotism) & Hoại tử chi / Nhồi máu cơ tim",
    "mechanism": "Clarithromycin ức chế mạnh CYP3A4, ngăn cản chuyển hóa Ergotamine tại gan, làm nồng độ Ergotamine tăng vọt kéo dài trong tuần hoàn.",
    "clinicalImpact": "Co thắt mạch ngoại vi dữ dội và kéo dài (Hội chứng nấm cựa gà - Ergotism), dẫn đến thiếu máu cục bộ chi, hoại tử đầu chi phải cắt cụt, thiếu máu não và co thắt mạch vành gây nhồi máu cơ tim cấp.",
    "recommendation": "CHỐNG CHỈ ĐỊNH PHỐI HỢP ĐỒNG THỜI theo Quyết định 5948/QĐ-BYT. Tuyệt đối không dùng chung alcaloid nấm cựa gà với các kháng sinh Macrolid ức chế CYP3A4 mạnh.",
    "evidenceLevel": "Mức độ 1 - Chống chỉ định theo Quyết định 5948/QĐ-BYT (Bộ Y tế)"
  },
  {
    "pair": [
      "domperidone",
      "amiodarone"
    ],
    "severity": "contraindicated",
    "isQD5948": true,
    "source": "Quyết định 5948/QĐ-BYT (Bộ Y tế)",
    "title": "Chống chỉ định phối hợp: Hiệp đồng kéo dài khoảng QTc & Loạn nhịp xoắn đỉnh (Torsades de Pointes) tử vong",
    "mechanism": "Cả hai thuốc đều ức chế kênh kali hERG tái cực cơ tim làm kéo dài khoảng QT; đồng thời Amiodarone ức chế CYP3A4 làm tăng nồng độ Domperidone trong huyết tương.",
    "clinicalImpact": "Kéo dài khoảng QTc nghiêm trọng (> 500ms), khởi phát xoắn đỉnh, rung thất và đột tử do tim.",
    "recommendation": "CHỐNG CHỈ ĐỊNH PHỐI HỢP ĐỒNG THỜI theo Quyết định 5948/QĐ-BYT. Thay thế thuốc chống nôn khác ít ảnh hưởng trên khoảng QT (như Ondansetron liều thấp có kiểm soát hoặc chuyển biện pháp hỗ trợ) hoặc đánh giá lại chỉ định Amiodarone.",
    "evidenceLevel": "Mức độ 1 - Chống chỉ định theo Quyết định 5948/QĐ-BYT (Bộ Y tế)"
  },
  {
    "pair": [
      "enalapril",
      "losartan"
    ],
    "severity": "contraindicated",
    "isQD5948": true,
    "source": "Quyết định 5948/QĐ-BYT (Bộ Y tế)",
    "title": "Chống chỉ định phối hợp kép RAAS: Suy thận cấp hoại tử ống thận & Tăng Kali máu ác tính",
    "mechanism": "Ức chế kép hệ Renin-Angiotensin-Aldosterone (Dual RAAS Blockade) do phối hợp đồng thời thuốc ức chế men chuyển (ACEi) và thuốc chẹn thụ thể Angiotensin II (ARB).",
    "clinicalImpact": "Không mang lại thêm lợi ích tim mạch nhưng làm tăng vọt nguy cơ tụt huyết áp nghiêm trọng, ngất, suy giảm mức lọc cầu thận cấp (suy thận cấp) và tăng Kali máu ác tính (> 6.5 mmol/L) gây ngừng tim.",
    "recommendation": "CHỐNG CHỈ ĐỊNH PHỐI HỢP ĐỒNG THỜI theo Quyết định 5948/QĐ-BYT và khuyến cáo ESC/AHA. Chỉ sử dụng đơn trị liệu ACEi HOẶC ARB, không dùng đồng thời 2 nhóm này.",
    "evidenceLevel": "Mức độ 1 - Chống chỉ định theo Quyết định 5948/QĐ-BYT (Bộ Y tế)"
  },
  {
    "pair": [
      "simvastatin",
      "itraconazole"
    ],
    "severity": "contraindicated",
    "isQD5948": true,
    "source": "Quyết định 5948/QĐ-BYT (Bộ Y tế)",
    "title": "Chống chỉ định tuyệt đối: Ức chế chuyển hóa Simvastatin & Nguy cơ tiêu cơ vân cấp tử vong",
    "mechanism": "Itraconazole là chất ức chế cực mạnh CYP3A4, làm tăng nồng độ Simvastatin trong máu lên hơn 10 - 20 lần.",
    "clinicalImpact": "Tổn thương cơ vân hoại tử nặng, đau cơ dữ dội, tăng vọt men cơ CK, tiêu cơ vân cấp dẫn đến suy thận cấp phải chạy thận nhân tạo và tử vong.",
    "recommendation": "CHỐNG CHỈ ĐỊNH PHỐI HỢP ĐỒNG THỜI theo Quyết định 5948/QĐ-BYT. Tạm ngừng Simvastatin trong suốt liệu trình điều trị kháng nấm Itraconazole; hoặc chuyển sang statin không chuyển hóa qua CYP3A4 (Rosuvastatin, Pravastatin) ở liều tối thiểu.",
    "evidenceLevel": "Mức độ 1 - Chống chỉ định theo Quyết định 5948/QĐ-BYT (Bộ Y tế)"
  },
  {
    "pair": [
      "linezolid",
      "tramadol"
    ],
    "severity": "contraindicated",
    "isQD5948": true,
    "source": "Quyết định 5948/QĐ-BYT (Bộ Y tế)",
    "title": "Chống chỉ định phối hợp: Hội chứng Serotonin kịch phát & Co giật ác tính",
    "mechanism": "Linezolid là chất ức chế MAO (Monoamine Oxidase Inhibitor). Tramadol ức chế tái hấp thu Serotonin và Norepinephrine. Phối hợp gây tích lũy Serotonin ồ ạt trong khe synap thần kinh trung ương.",
    "clinicalImpact": "Khởi phát Hội chứng Serotonin cấp: Sốt cao ác tính, co cứng cơ, giật rung cơ, ảo giác, co giật toàn thân, trụy hô hấp tuần hoàn và tử vong.",
    "recommendation": "CHỐNG CHỈ ĐỊNH PHỐI HỢP ĐỒNG THỜI theo Quyết định 5948/QĐ-BYT. Tuyệt đối không dùng Tramadol để giảm đau khi bệnh nhân đang truyền Linezolid. Thay thế bằng giảm đau nhóm khác như Paracetamol hoặc Morphin/Fentanyl có theo dõi sát.",
    "evidenceLevel": "Mức độ 1 - Chống chỉ định theo Quyết định 5948/QĐ-BYT (Bộ Y tế)"
  },
  {
    "pair": [
      "metoprolol",
      "diltiazem"
    ],
    "severity": "contraindicated",
    "isQD5948": true,
    "source": "Quyết định 5948/QĐ-BYT (Bộ Y tế)",
    "title": "Chống chỉ định phối hợp dạng tiêm: Ức chế nút nhĩ thất kịch phát & Vô tâm thu (Asystole)",
    "mechanism": "Cả hai thuốc đều ức chế co bóp cơ tim và làm chậm tốc độ dẫn truyền qua nút nhĩ thất (AV node). Khi dùng đường tĩnh mạch, tác dụng ức chế cộng gộp diễn ra rất nhanh và mạnh.",
    "clinicalImpact": "Block nhĩ thất độ 3 hoàn toàn, nhịp tim chậm nghiêm trọng (< 35 nhịp/phút), tụt huyết áp shock tim, suy tim cấp mất bù và vô tâm thu (ngừng tim).",
    "recommendation": "CHỐNG CHỈ ĐỊNH PHỐI HỢP ĐƯỜNG TIÊM TĨNH MẠCH theo Quyết định 5948/QĐ-BYT. Phải có khoảng cách an toàn ít nhất 48 giờ giữa hai thuốc khi chuyển đổi đường dùng; luôn sẵn sàng Atropine, Isoproterenol hoặc máy tạo nhịp tim ngoài.",
    "evidenceLevel": "Mức độ 1 - Chống chỉ định theo Quyết định 5948/QĐ-BYT (Bộ Y tế)"
  },
  {
    "pair": [
      "acenocoumarol",
      "tamoxifen"
    ],
    "severity": "contraindicated",
    "isQD5948": true,
    "source": "Quyết định 5948/QĐ-BYT (Bộ Y tế)",
    "title": "Chống chỉ định phối hợp (QĐ 5948/QĐ-BYT): Ức chế chuyển hóa Acenocoumarol & Tăng vọt nguy cơ xuất huyết kịch phát",
    "mechanism": "Tamoxifen là chất ức chế các enzym cytochrom P450 CYP2C9 và CYP3A4 tại gan - đây là con đường chuyển hóa chính đào thải Acenocoumarol (Sintrom). Sự ức chế này làm giảm độ thanh thải của Acenocoumarol, kéo dài thời gian bán thải và làm nồng độ thuốc tự do trong huyết tương tăng vọt gấp nhiều lần.",
    "clinicalImpact": "Tăng mạnh tác dụng chống đông máu, chỉ số INR tăng vọt mất kiểm soát (thường vượt ngưỡng 6.0 - 10.0), dẫn đến nguy cơ xuất huyết nghiêm trọng đe dọa tính mạng: xuất huyết tiêu hóa ồ ạt, xuất huyết nội sọ (đột quỵ xuất huyết não), tụ máu cơ sâu và tử vong.",
    "recommendation": "CHỐNG CHỈ ĐỊNH PHỐI HỢP ĐỒNG THỜI theo Quyết định số 5948/QĐ-BYT ngày 30/12/2021 của Bộ Y tế. Đối với bệnh nhân ung thư vú có chỉ định chống đông (rung nhĩ, huyết khối tĩnh mạch sâu, van tim cơ học): Cân nhắc lựa chọn liệu pháp nội tiết thay thế (nhóm ức chế Aromatase như Anastrozol, Letrozol ở phụ nữ mãn kinh) hoặc thay thế thuốc chống đông bằng Heparin trọng lượng phân tử thấp (LMWH). Nếu bắt buộc phải phối hợp: Phải chủ động giảm 30% - 50% liều Acenocoumarol ngay từ đầu, xét nghiệm INR 2 - 3 ngày/lần cho đến khi chỉ số ổn định và giáo dục bệnh nhân phát hiện sớm các dấu hiệu xuất huyết bất thường.",
    "evidenceLevel": "Mức độ 1 - Chống chỉ định theo Quyết định 5948/QĐ-BYT (Bộ Y tế)"
  },
  {
    "pair": [
      "warfarin",
      "tamoxifen"
    ],
    "severity": "contraindicated",
    "isQD5948": true,
    "source": "Quyết định 5948/QĐ-BYT (Bộ Y tế)",
    "title": "Chống chỉ định phối hợp (QĐ 5948/QĐ-BYT): Ức chế chuyển hóa Warfarin qua CYP2C9 & Xuất huyết nặng",
    "mechanism": "Tamoxifen ức chế mạnh isoenzyme CYP2C9 tại gan - enzym chính chịu trách nhiệm chuyển hóa đồng phân có hoạt tính mạnh S-warfarin, làm tăng mạnh AUC và thời gian bán thải của Warfarin.",
    "clinicalImpact": "Kéo dài thời gian prothrombin, chỉ số INR tăng vọt mất kiểm soát, làm tăng nguy cơ xuất huyết tiêu hóa, xuất huyết não đe dọa tính mạng.",
    "recommendation": "CHỐNG CHỈ ĐỊNH PHỐI HỢP ĐỒNG THỜI theo Quyết định 5948/QĐ-BYT. Lựa chọn liệu pháp nội tiết thay thế (ức chế Aromatase) hoặc thay thế thuốc chống đông đường tiêm (LMWH) có kiểm soát chặt chẽ.",
    "evidenceLevel": "Mức độ 1 - Chống chỉ định theo Quyết định 5948/QĐ-BYT (Bộ Y tế)"
  }
];

export const QD_5948_633_INTERACTIONS = [
  {
    "stt": 1,
    "drug1": "Aceclofenac",
    "drug2": "Ketorolac",
    "mechanism": "Hiệp đồng tác dụng kích ứng đường tiêu hóa",
    "clinicalImpact": "Tăng nguy cơ xuất huyết tiêu hóa nghiêm trọng (sử dụng đồng thời ketorolac với 1 NSAID khác làm tăng nguy cơ xuất huyết tiêu hóa gấp 5 lần so với phối hợp 2 NSAID khác)",
    "recommendation": "Chống chỉ định phối hợp. Cần đặc biệt lưu ý nguy cơ tương tác trong trường hợp giảm đau hậu phẫu."
  },
  {
    "stt": 2,
    "drug1": "Acenocoumarol",
    "drug2": "Tamoxifen",
    "mechanism": "Tamoxifen ức chế CYP2C9 làm giảm chuyển hóa của acenocoumarol",
    "clinicalImpact": "Tăng nguy cơ xuất huyết",
    "recommendation": "1. Chống chỉ định phối hợp ở bệnh nhân sử dụng tamoxifen dự phòng tiên phát ung thư vú. 2. Ở bệnh nhân ung thư vú, nên cân nhắc sử dụng heparin trọng lượng phân tử thấp (LMWH) hoặc các thuốc chống đông đường uống tác động trực tiếp (DOAC) thay thế cho warfarin để điều trị thuyên tắc tĩnh mạch do huyết khối. Trong trường hợp bắt buộc sử dụng đồng thời tamoxifen với warfarin, cần giảm 1/2 đến 2/3 liều warfarin và theo dõi chặt chẽ bệnh nhân."
  },
  {
    "stt": 3,
    "drug1": "Acid mefenamic",
    "drug2": "Ketorolac",
    "mechanism": "Hiệp đồng tác dụng kích ứng đường tiêu hóa",
    "clinicalImpact": "Tăng nguy cơ xuất huyết tiêu hóa nghiêm trọng (sử dụng đồng thời ketorolac với 1 NSAID khác làm tăng nguy cơ xuất huyết tiêu hóa gấp 5 lần so với phối hợp 2 NSAID khác)",
    "recommendation": "Chống chỉ định phối hợp. Cần đặc biệt lưu ý nguy cơ tương tác trong trường hợp giảm đau hậu phẫu."
  },
  {
    "stt": 4,
    "drug1": "Acid tranexamic",
    "drug2": "Ethinyl estradiol",
    "mechanism": "Nguy cơ huyết khối khi sử dụng ethinyl estradiol tăng lên khi phối hợp với acid tranexamic",
    "clinicalImpact": "Tăng nguy cơ biến cố huyết khối",
    "recommendation": "1. Chống chỉ định sử dụng acid tranexamic điều trị rong kinh ở bệnh nhân đang dùng thuốc tránh thai chứa ethinyl estradiol. 2. Với các chỉ định khác của acid tranexamic, có thể sử dung ở người đang dùng thuốc tránh thai nhưng cần đặc biệt thận trọng. Lưu ý các yếu tố tăng nguy cơ: béo phì, hút thuốc lá, đặc biệt ở người trên 35 tuổi."
  },
  {
    "stt": 5,
    "drug1": "Acid tranexamic",
    "drug2": "Estradiol valerat",
    "mechanism": "Nguy cơ huyết khối khi sử dụng estradiol valerat tăng lên khi phối hợp với acid tranexamic",
    "clinicalImpact": "Tăng nguy cơ biến cố huyết khối",
    "recommendation": "1. Chống chỉ định sử dụng acid tranexamic điều trị rong kinh ở bệnh nhân đang dùng thuốc tránh thai chứa estradiol valerat. 2. Với các chỉ định khác của acid tranexamic, có thể sử dung ở người đang dùng thuốc tránh thai nhưng cần đặc biệt thận trọng. Lưu ý các yếu tố tăng nguy cơ: béo phì, hút thuốc lá, đặc biệt ở người trên 35 tuổi."
  },
  {
    "stt": 6,
    "drug1": "Acid tranexamic",
    "drug2": "Estriol",
    "mechanism": "Nguy cơ huyết khối khi sử dụng estriol tăng lên khi phối hợp với acid tranexamic",
    "clinicalImpact": "Tăng nguy cơ biến cố huyết khối",
    "recommendation": "1. Chống chỉ định sử dụng acid tranexamic điều trị rong kinh ở bệnh nhân đang dùng thuốc tránh thai chứa estriol. 2. Với các chỉ định khác của acid tranexamic, có thể sử dung ở người đang dùng thuốc tránh thai nhưng cần đặc biệt thận trọng. Lưu ý các yếu tố tăng nguy cơ: béo phì, hút thuốc lá, đặc biệt ở người trên 35 tuổi."
  },
  {
    "stt": 7,
    "drug1": "Acid tranexamic",
    "drug2": "Clormadinon",
    "mechanism": "Nguy cơ huyết khối khi sử dụng clormadinon tăng lên khi phối hợp với acid tranexamic",
    "clinicalImpact": "Tăng nguy cơ biến cố huyết khối",
    "recommendation": "1. Chống chỉ định sử dụng acid tranexamic điều trị rong kinh ở bệnh nhân đang dùng thuốc tránh thai chứa clormadinon. 2. Với các chỉ định khác của acid tranexamic, có thể sử dung ở người đang dùng thuốc tránh thai nhưng cần đặc biệt thận trọng. Lưu ý các yếu tố tăng nguy cơ: béo phì, hút thuốc lá, đặc biệt ở người trên 35 tuổi."
  },
  {
    "stt": 8,
    "drug1": "Acid tranexamic",
    "drug2": "Desogestrel",
    "mechanism": "Nguy cơ huyết khối khi sử dụng desogestrel tăng lên khi phối hợp với acid tranexamic",
    "clinicalImpact": "Tăng nguy cơ biến cố huyết khối",
    "recommendation": "1. Chống chỉ định sử dụng acid tranexamic điều trị rong kinh ở bệnh nhân đang dùng thuốc tránh thai chứa desogestrel. 2. Với các chỉ định khác của acid tranexamic, có thể sử dung ở người đang dùng thuốc tránh thai nhưng cần đặc biệt thận trọng. Lưu ý các yếu tố tăng nguy cơ: béo phì, hút thuốc lá, đặc biệt ở người trên 35 tuổi."
  },
  {
    "stt": 9,
    "drug1": "Acid tranexamic",
    "drug2": "Dienogest",
    "mechanism": "Nguy cơ huyết khối khi sử dụng dienogest tăng lên khi phối hợp với acid tranexamic",
    "clinicalImpact": "Tăng nguy cơ biến cố huyết khối",
    "recommendation": "1. Chống chỉ định sử dụng acid tranexamic điều trị rong kinh ở bệnh nhân đang dùng thuốc tránh thai chứa dienogest. 2. Với các chỉ định khác của acid tranexamic, có thể sử dung ở người đang dùng thuốc tránh thai nhưng cần đặc biệt thận trọng. Lưu ý các yếu tố tăng nguy cơ: béo phì, hút thuốc lá, đặc biệt ở người trên 35 tuổi."
  },
  {
    "stt": 10,
    "drug1": "Acid tranexamic",
    "drug2": "Drospirenon",
    "mechanism": "Nguy cơ huyết khối khi sử dụng drospirenon tăng lên khi phối hợp với acid tranexamic",
    "clinicalImpact": "Tăng nguy cơ biến cố huyết khối",
    "recommendation": "1. Chống chỉ định sử dụng acid tranexamic điều trị rong kinh ở bệnh nhân đang dùng thuốc tránh thai chứa drospirenon. 2. Với các chỉ định khác của acid tranexamic, có thể sử dung ở người đang dùng thuốc tránh thai nhưng cần đặc biệt thận trọng. Lưu ý các yếu tố tăng nguy cơ: béo phì, hút thuốc lá, đặc biệt ở người trên 35 tuổi."
  },
  {
    "stt": 11,
    "drug1": "Acid tranexamic",
    "drug2": "Etonogestrel",
    "mechanism": "Nguy cơ huyết khối khi sử dụng etonogestrel tăng lên khi phối hợp với acid tranexamic",
    "clinicalImpact": "Tăng nguy cơ biến cố huyết khối",
    "recommendation": "1. Chống chỉ định sử dụng acid tranexamic điều trị rong kinh ở bệnh nhân đang dùng thuốc tránh thai chứa etonogestrel. 2. Với các chỉ định khác của acid tranexamic, có thể sử dung ở người đang dùng thuốc tránh thai nhưng cần đặc biệt thận trọng. Lưu ý các yếu tố tăng nguy cơ: béo phì, hút thuốc lá, đặc biệt ở người trên 35 tuổi."
  },
  {
    "stt": 12,
    "drug1": "Acid tranexamic",
    "drug2": "Gestoden",
    "mechanism": "Nguy cơ huyết khối khi sử dụng gestoden tăng lên khi phối hợp với acid tranexamic",
    "clinicalImpact": "Tăng nguy cơ biến cố huyết khối",
    "recommendation": "1. Chống chỉ định sử dụng acid tranexamic điều trị rong kinh ở bệnh nhân đang dùng thuốc tránh thai chứa gestoden. 2. Với các chỉ định khác của acid tranexamic, có thể sử dung ở người đang dùng thuốc tránh thai nhưng cần đặc biệt thận trọng. Lưu ý các yếu tố tăng nguy cơ: béo phì, hút thuốc lá, đặc biệt ở người trên 35 tuổi."
  },
  {
    "stt": 13,
    "drug1": "Acid tranexamic",
    "drug2": "Levonorgestrel",
    "mechanism": "Nguy cơ huyết khối khi sử dụng levonorgestrel tăng lên khi phối hợp với acid tranexamic",
    "clinicalImpact": "Tăng nguy cơ biến cố huyết khối",
    "recommendation": "1. Chống chỉ định sử dụng acid tranexamic điều trị rong kinh ở bệnh nhân đang dùng thuốc tránh thai chứa levonorgestrel. 2. Với các chỉ định khác của acid tranexamic, có thể sử dung ở người đang dùng thuốc tránh thai nhưng cần đặc biệt thận trọng. Lưu ý các yếu tố tăng nguy cơ: béo phì, hút thuốc lá, đặc biệt ở người trên 35 tuổi."
  },
  {
    "stt": 14,
    "drug1": "Acid tranexamic",
    "drug2": "Lynestrenol",
    "mechanism": "Nguy cơ huyết khối khi sử dụng lynestrenol tăng lên khi phối hợp với acid tranexamic",
    "clinicalImpact": "Tăng nguy cơ biến cố huyết khối",
    "recommendation": "1. Chống chỉ định sử dụng acid tranexamic điều trị rong kinh ở bệnh nhân đang dùng thuốc tránh thai chứa lynestrenol. 2. Với các chỉ định khác của acid tranexamic, có thể sử dung ở người đang dùng thuốc tránh thai nhưng cần đặc biệt thận trọng. Lưu ý các yếu tố tăng nguy cơ: béo phì, hút thuốc lá, đặc biệt ở người trên 35 tuổi."
  },
  {
    "stt": 15,
    "drug1": "Acid tranexamic",
    "drug2": "Medroxyprogesteron",
    "mechanism": "Nguy cơ huyết khối khi sử dụng medroxyprogeste ron tăng lên khi phối hợp với acid tranexamic",
    "clinicalImpact": "Tăng nguy cơ biến cố huyết khối",
    "recommendation": "1. Chống chỉ định sử dụng acid tranexamic điều trị rong kinh ở bệnh nhân đang dùng thuốc tránh thai chứa medroxyprogesteron. 2. Với các chỉ định khác của acid tranexamic, có thể sử dung ở người đang dùng thuốc tránh thai nhưng cần đặc biệt thận trọng. Lưu ý các yếu tố tăng nguy cơ: béo phì, hút thuốc lá, đặc biệt ở người trên 35 tuổi."
  },
  {
    "stt": 16,
    "drug1": "Acid tranexamic",
    "drug2": "Norelgestromin",
    "mechanism": "Nguy cơ huyết khối khi sử dụng norelgestromin tăng lên khi phối hợp với acid tranexamic",
    "clinicalImpact": "Tăng nguy cơ biến cố huyết khối",
    "recommendation": "1. Chống chỉ định sử dụng acid tranexamic điều trị rong kinh ở bệnh nhân đang dùng thuốc tránh thai chứa norelgestromin. 2. Với các chỉ định khác của acid tranexamic, có thể sử dung ở người đang dùng thuốc tránh thai nhưng cần đặc biệt thận trọng. Lưu ý các yếu tố tăng nguy cơ: béo phì, hút thuốc lá, đặc biệt ở người trên 35 tuổi."
  },
  {
    "stt": 17,
    "drug1": "Acid tranexamic",
    "drug2": "Norethindron",
    "mechanism": "Nguy cơ huyết khối khi sử dụng norethindron tăng lên khi phối hợp với acid tranexamic",
    "clinicalImpact": "Tăng nguy cơ biến cố huyết khối",
    "recommendation": "1. Chống chỉ định sử dụng acid tranexamic điều trị rong kinh ở bệnh nhân đang dùng thuốc tránh thai chứa norethindron. 2. Với các chỉ định khác của acid tranexamic, có thể sử dung ở người đang dùng thuốc tránh thai nhưng cần đặc biệt thận trọng. Lưu ý các yếu tố tăng nguy cơ: béo phì, hút thuốc lá, đặc biệt ở người trên 35 tuổi."
  },
  {
    "stt": 18,
    "drug1": "Acid tranexamic",
    "drug2": "Norgestrel",
    "mechanism": "Nguy cơ huyết khối khi sử dụng norgestrel tăng lên khi phối hợp với acid tranexamic",
    "clinicalImpact": "Tăng nguy cơ biến cố huyết khối",
    "recommendation": "1. Chống chỉ định sử dụng acid tranexamic điều trị rong kinh ở bệnh nhân đang dùng thuốc tránh thai chứa noregestrel. 2. Với các chỉ định khác của acid tranexamic, có thể sử dung ở người đang dùng thuốc tránh thai nhưng cần đặc biệt thận trọng. Lưu ý các yếu tố tăng nguy cơ: béo phì, hút thuốc lá, đặc biệt ở người trên 35 tuổi."
  },
  {
    "stt": 19,
    "drug1": "Acitretin",
    "drug2": "Doxycyclin",
    "mechanism": "Hiệp đồng tăng độc tính",
    "clinicalImpact": "Tăng nguy cơ tăng áp nội sọ lành tính (phù gai thị, đau đầu, buồn nôn và nôn, và rối loạn thị giác)",
    "recommendation": "Chống chỉ định phối hợp"
  },
  {
    "stt": 20,
    "drug1": "Acitretin",
    "drug2": "Minocyclin",
    "mechanism": "Hiệp đồng tăng độc tính",
    "clinicalImpact": "Tăng nguy cơ tăng áp nội sọ lành tính (phù gai thị, đau đầu, buồn nôn và nôn, và rối loạn thị giác)",
    "recommendation": "Chống chỉ định phối hợp"
  },
  {
    "stt": 21,
    "drug1": "Acitretin",
    "drug2": "Tetracyclin",
    "mechanism": "Hiệp đồng tăng độc tính",
    "clinicalImpact": "Tăng nguy cơ tăng áp nội sọ lành tính (phù gai thị, đau đầu, buồn nôn và nôn, và rối loạn thị giác)",
    "recommendation": "Chống chỉ định phối hợp"
  },
  {
    "stt": 22,
    "drug1": "Acitretin",
    "drug2": "Tigecyclin",
    "mechanism": "Hiệp đồng tăng độc tính",
    "clinicalImpact": "Tăng nguy cơ tăng áp nội sọ lành tính (phù gai thị, đau đầu, buồn nôn và nôn, và rối loạn thị giác)",
    "recommendation": "Chống chỉ định phối hợp"
  },
  {
    "stt": 23,
    "drug1": "Adipiodon",
    "drug2": "Metformin",
    "mechanism": "Nguy cơ suy thận cấp liên quan đến cả metformin và thuốc cản quang iod. Suy thận cấp làm tăng nguy cơ nhiễm toan lactic.",
    "clinicalImpact": "Tăng nguy cơ nhiễm toan lactic và suy thận cấp",
    "recommendation": "1. Bệnh nhân có MLCT > 30 ml/phút/1,73m² và không có bằng chứng tổn thương thận cấp, được chỉ định tiêm thuốc cản quang đường tĩnh mạch hoặc tiêm thuốc cản quang đường động mạch tiếp xúc với thận thứ cấp (ví dụ: bơm thuốc vào tim phải, động mạch phổi, động mạch cảnh, động mạch dưới đòn, động mạch vành, động mạch mạc treo hay động mạch dưới động mạch thận): tiếp tục sử dụng metformin như bình thường. 2. Bệnh nhân (1) MLCT < 30 ml/phút/1,73m² tiêm thuốc cản quang đường tĩnh mạch, đường động mạch tiếp xúc với thận thứ cấp, hoặc (2) Bệnh nhân tiêm thuốc cản quang đường động mạch tiếp xúc với thận đầu tiên (ví dụ: bơm thuốc vào tim trái, động mạch chủ ngực, động mạch chủ bụng trên động mạch thận hoặc động mạch thận) hoặc (3) Có tổn thương thận: Ngừng metformin trước hoặc tại thời điểm tiến hành thủ thuật chẩn đoán hình ảnh và không được dùng lại cho đến ít nhất 48 giờ sau đó. Sau 48 giờ, chỉ sử dụng lại metformin sau khi chức năng thận được đánh giá lại và cho thấy ổn định. * Lưu ý: - Các yếu tố nguy cơ: suy thận, suy tim, không đủ dịch hoặc thiếu dịch, sử dụng liều cao thuốc cản quang hoặc sử dụng đồng thời các thuốc độc tính trên thận khác. - Khuyến cáo về tương tác này không áp dụng trong trường hợp bơm thuốc cản quang iod để chụp X-quang tử cung - vòi trứng."
  },
  {
    "stt": 24,
    "drug1": "Agomelatin",
    "drug2": "Ciprofloxacin",
    "mechanism": "Ciprofloxacin ức chế CYP1A2 mạnh làm giảm chuyển hóa của agomelatin",
    "clinicalImpact": "Tăng nồng độ của agomelatin trong huyết thanh, tăng nguy cơ tác dụng không mong muốn(đau đầu, buồn ngủ, mệt mỏi, kích động, lo lắng, căng thẳng, chóng mặt, tím tái...)",
    "recommendation": "Chống chỉ định phối hợp"
  },
  {
    "stt": 25,
    "drug1": "Agomelatin",
    "drug2": "Fluvoxamin",
    "mechanism": "Fluvoxamin ức chế CYP1A2 mạnh làm giảm chuyển hóa của agomelatin",
    "clinicalImpact": "Tăng nồng độ của agomelatin trong huyết thanh, tăng nguy cơ tác dụng không mong muốn(đau đầu, buồn ngủ, mệt mỏi, kích động, lo lắng, căng thẳng, chóng mặt, tím tái...)",
    "recommendation": "Chống chỉ định phối hợp"
  },
  {
    "stt": 26,
    "drug1": "Alfuzosin",
    "drug2": "Boceprevir",
    "mechanism": "Boceprevir ức chế CYP3A4 làm giảm chuyển hóa của alfuzosin",
    "clinicalImpact": "Tăng nồng độ alfuzosin trong huyết thanh, tâng nguy cơ hạ huyết áp nghiêm trọng",
    "recommendation": "Chống chỉ định phối hợp"
  },
  {
    "stt": 27,
    "drug1": "Alfuzosin",
    "drug2": "Lopinavir/ritonavir",
    "mechanism": "Lopinavir/ritonav ir ức chế CYP3A4 làm giảm chuyển hóa của alfuzosin",
    "clinicalImpact": "Tăng nồng độ alfuzosin trong huyết thanh, tâng nguy cơ hạ huyết áp nghiêm trọng",
    "recommendation": "Chống chỉ định phối hợp"
  },
  {
    "stt": 28,
    "drug1": "Alfuzosin",
    "drug2": "Atazanavir/ritonavir",
    "mechanism": "Atazanavir/ritona vir ức chế CYP3A4 làm giảm chuyển hóa của alfuzosin",
    "clinicalImpact": "Tăng nồng độ alfuzosin trong huyết thanh, tâng nguy cơ hạ huyết áp nghiêm trọng",
    "recommendation": "Chống chỉ định phối hợp"
  },
  {
    "stt": 29,
    "drug1": "Alfuzosin",
    "drug2": "Darunavir/rit onavir",
    "mechanism": "Darunavir/ritonav ir ức chế CYP3A4 làm giảm chuyển hóa của alfuzosin",
    "clinicalImpact": "Tăng nồng độ alfuzosin trong huyết thanh, tâng nguy cơ hạ huyết áp nghiêm trọng",
    "recommendation": "Chống chỉ định phối hợp"
  },
  {
    "stt": 30,
    "drug1": "Alfuzosin",
    "drug2": "Indinavir +/- ritonavir",
    "mechanism": "Indinavir ức chế CYP3A4 làm giảm chuyển hóa của alfuzosin",
    "clinicalImpact": "Tăng nồng độ alfuzosin trong huyết thanh, tâng nguy cơ hạ huyết áp nghiêm trọng",
    "recommendation": "Chống chỉ định phối hợp"
  },
  {
    "stt": 31,
    "drug1": "Alfuzosin",
    "drug2": "Saquinavir +/- ritonavir",
    "mechanism": "Saquinavir ức chế CYP3A4 làm giảm chuyển hóa của alfuzosin",
    "clinicalImpact": "Tăng nồng độ alfuzosin trong huyết thanh, tâng nguy cơ hạ huyết áp nghiêm trọng",
    "recommendation": "Chống chỉ định phối hợp"
  },
  {
    "stt": 32,
    "drug1": "Aliskiren",
    "drug2": "Benazepril",
    "mechanism": "Hiệp đồng tăng tác dụng",
    "clinicalImpact": "Tăng nguy cơ tăng kali máu, suy thận và hạ huyết áp",
    "recommendation": "1. Chống chỉ định ở bệnh nhân đái tháo đường hoặc suy thận (MLCT < 60 ml/ph/1,73 m²). 2. Ở các đối tượng khác, cũng nên tránh phối hợp này. Trong trường hợp bắt buộc phối hợp, theo dõi chặt chẽ kali, creatinin và huyết áp của bệnh nhân."
  },
  {
    "stt": 33,
    "drug1": "Aliskiren",
    "drug2": "Candesartan",
    "mechanism": "Hiệp đồng tăng tác dụng",
    "clinicalImpact": "Tăng nguy cơ tăng kali máu, suy thận và hạ huyết áp",
    "recommendation": "1. Chống chỉ định ở bệnh nhân đái tháo đường hoặc suy thận (MLCT < 60 ml/ph/1,73 m²). 2. Ở các đối tượng khác, cũng nên tránh phối hợp này. Trong trường hợp bắt buộc phối hợp, theo dõi chặt chẽ kali, creatinin và huyết áp của bệnh nhân."
  },
  {
    "stt": 34,
    "drug1": "Aliskiren",
    "drug2": "Captopril",
    "mechanism": "Hiệp đồng tăng tác dụng",
    "clinicalImpact": "Tăng nguy cơ tăng kali máu, suy thận và hạ huyết áp",
    "recommendation": "1. Chống chỉ định ở bệnh nhân đái tháo đường hoặc suy thận (MLCT < 60 ml/ph/1,73 m²). 2. Ở các đối tượng khác, cũng nên tránh phối hợp này. Trong trường hợp bắt buộc phối hợp, theo dõi chặt chẽ kali, creatinin và huyết áp của bệnh nhân."
  },
  {
    "stt": 35,
    "drug1": "Aliskiren",
    "drug2": "Enalapril",
    "mechanism": "Hiệp đồng tăng tác dụng",
    "clinicalImpact": "Tăng nguy cơ tăng kali máu, suy thận và hạ huyết áp",
    "recommendation": "1. Chống chỉ định ở bệnh nhân đái tháo đường hoặc suy thận (MLCT < 60 ml/ph/1,73 m²). 2. Ở các đối tượng khác, cũng nên tránh phối hợp này. Trong trường hợp bắt buộc phối hợp, theo dõi chặt chẽ kali, creatinin và huyết áp của bệnh nhân."
  },
  {
    "stt": 36,
    "drug1": "Aliskiren",
    "drug2": "Eprosartan",
    "mechanism": "Hiệp đồng tăng tác dụng",
    "clinicalImpact": "Tăng nguy cơ tăng kali máu, suy thận và hạ huyết áp",
    "recommendation": "1. Chống chỉ định ở bệnh nhân đái tháo đường hoặc suy thận (MLCT < 60 ml/ph/1,73 m²). 2. Ở các đối tượng khác, cũng nên tránh phối hợp này. Trong trường hợp bắt buộc phối hợp, theo dõi chặt chẽ kali, creatinin và huyết áp của bệnh nhân."
  },
  {
    "stt": 37,
    "drug1": "Aliskiren",
    "drug2": "Imidapril",
    "mechanism": "Hiệp đồng tăng tác dụng",
    "clinicalImpact": "Tăng nguy cơ tăng kali máu, suy thận và hạ huyết áp",
    "recommendation": "1. Chống chỉ định ở bệnh nhân đái tháo đường hoặc suy thận (MLCT < 60 ml/ph/1,73 m²). 2. Ở các đối tượng khác, cũng nên tránh phối hợp này. Trong trường hợp bắt buộc phối hợp, theo dõi chặt chẽ kali, creatinin và huyết áp của bệnh nhân."
  },
  {
    "stt": 38,
    "drug1": "Aliskiren",
    "drug2": "Irbesartan",
    "mechanism": "Hiệp đồng tăng tác dụng",
    "clinicalImpact": "Tăng nguy cơ tăng kali máu, suy thận và hạ huyết áp",
    "recommendation": "1. Chống chỉ định ở bệnh nhân đái tháo đường hoặc suy thận (MLCT < 60 ml/ph/1,73 m²). 2. Ở các đối tượng khác, cũng nên tránh phối hợp này. Trong trường hợp bắt buộc phối hợp, theo dõi chặt chẽ kali, creatinin và huyết áp của bệnh nhân."
  },
  {
    "stt": 39,
    "drug1": "Aliskiren",
    "drug2": "Lisinopril",
    "mechanism": "Hiệp đồng tăng tác dụng",
    "clinicalImpact": "Tăng nguy cơ tăng kali máu, suy thận và hạ huyết áp",
    "recommendation": "1. Chống chỉ định ở bệnh nhân đái tháo đường hoặc suy thận (MLCT < 60 ml/ph/1,73 m²). 2. Ở các đối tượng khác, cũng nên tránh phối hợp này. Trong trường hợp bắt buộc phối hợp, theo dõi chặt chẽ kali, creatinin và huyết áp của bệnh nhân."
  },
  {
    "stt": 40,
    "drug1": "Aliskiren",
    "drug2": "Losartan",
    "mechanism": "Hiệp đồng tăng tác dụng",
    "clinicalImpact": "Tăng nguy cơ tăng kali máu, suy thận và hạ huyết áp",
    "recommendation": "1. Chống chỉ định ở bệnh nhân đái tháo đường hoặc suy thận (MLCT < 60 ml/ph/1,73 m²). 2. Ở các đối tượng khác, cũng nên tránh phối hợp này. Trong trường hợp bắt buộc phối hợp, theo dõi chặt chẽ kali, creatinin và huyết áp của bệnh nhân."
  },
  {
    "stt": 41,
    "drug1": "Aliskiren",
    "drug2": "Olmesartan",
    "mechanism": "Hiệp đồng tăng tác dụng",
    "clinicalImpact": "Tăng nguy cơ tăng kali máu, suy thận và hạ huyết áp",
    "recommendation": "1. Chống chỉ định ở bệnh nhân đái tháo đường hoặc suy thận (MLCT < 60 ml/ph/1,73 m²). 2. Ở các đối tượng khác, cũng nên tránh phối hợp này. Trong trường hợp bắt buộc phối hợp, theo dõi chặt chẽ kali, creatinin và huyết áp của bệnh nhân."
  },
  {
    "stt": 42,
    "drug1": "Aliskiren",
    "drug2": "Perindopril",
    "mechanism": "Hiệp đồng tăng tác dụng",
    "clinicalImpact": "Tăng nguy cơ tăng kali máu, suy thận và hạ huyết áp",
    "recommendation": "1. Chống chỉ định ở bệnh nhân đái tháo đường hoặc suy thận (MLCT < 60 ml/ph/1,73 m²). 2. Ở các đối tượng khác, cũng nên tránh phối hợp này. Trong trường hợp bắt buộc phối hợp, theo dõi chặt chẽ kali, creatinin và huyết áp của bệnh nhân."
  },
  {
    "stt": 43,
    "drug1": "Aliskiren",
    "drug2": "Quinapril",
    "mechanism": "Hiệp đồng tăng tác dụng",
    "clinicalImpact": "Tăng nguy cơ tăng kali máu, suy thận và hạ huyết áp",
    "recommendation": "1. Chống chỉ định ở bệnh nhân đái tháo đường hoặc suy thận (MLCT < 60 ml/ph/1,73 m²). 2. Ở các đối tượng khác, cũng nên tránh phối hợp này. Trong trường hợp bắt buộc phối hợp, theo dõi chặt chẽ kali, creatinin và huyết áp của bệnh nhân."
  },
  {
    "stt": 44,
    "drug1": "Aliskiren",
    "drug2": "Ramipril",
    "mechanism": "Hiệp đồng tăng tác dụng",
    "clinicalImpact": "Tăng nguy cơ tăng kali máu, suy thận và hạ huyết áp",
    "recommendation": "1. Chống chỉ định ở bệnh nhân đái tháo đường hoặc suy thận (MLCT < 60 ml/ph/1,73 m²). 2. Ở các đối tượng khác, cũng nên tránh phối hợp này. Trong trường hợp bắt buộc phối hợp, theo dõi chặt chẽ kali, creatinin và huyết áp của bệnh nhân."
  },
  {
    "stt": 45,
    "drug1": "Aliskiren",
    "drug2": "Telmisartan",
    "mechanism": "Hiệp đồng tăng tác dụng",
    "clinicalImpact": "Tăng nguy cơ tăng kali máu, suy thận và hạ huyết áp",
    "recommendation": "1. Chống chỉ định ở bệnh nhân đái tháo đường hoặc suy thận (MLCT < 60 ml/ph/1,73 m²). 2. Ở các đối tượng khác, cũng nên tránh phối hợp này. Trong trường hợp bắt buộc phối hợp, theo dõi chặt chẽ kali, creatinin và huyết áp của bệnh nhân."
  },
  {
    "stt": 46,
    "drug1": "Aliskiren",
    "drug2": "Trandolapril",
    "mechanism": "Hiệp đồng tăng tác dụng",
    "clinicalImpact": "Tăng nguy cơ tăng kali máu, suy thận và hạ huyết áp",
    "recommendation": "1. Chống chỉ định ở bệnh nhân đái tháo đường hoặc suy thận (MLCT < 60 ml/ph/1,73 m²). 2. Ở các đối tượng khác, cũng nên tránh phối hợp này. Trong trường hợp bắt buộc phối hợp, theo dõi chặt chẽ kali, creatinin và huyết áp của bệnh nhân."
  },
  {
    "stt": 47,
    "drug1": "Aliskiren",
    "drug2": "Valsartan",
    "mechanism": "Hiệp đồng tăng tác dụng",
    "clinicalImpact": "Tăng nguy cơ tăng kali máu, suy thận và hạ huyết áp",
    "recommendation": "1. Chống chỉ định ở bệnh nhân đái tháo đường hoặc suy thận (MLCT < 60 ml/ph/1,73 m²). 2. Ở các đối tượng khác, cũng nên tránh phối hợp này. Trong trường hợp bắt buộc phối hợp, theo dõi chặt chẽ kali, creatinin và huyết áp của bệnh nhân."
  },
  {
    "stt": 48,
    "drug1": "Aliskiren",
    "drug2": "Zofenopril",
    "mechanism": "Hiệp đồng tăng tác dụng",
    "clinicalImpact": "Tăng nguy cơ tăng kali máu, suy thận và hạ huyết áp",
    "recommendation": "1. Chống chỉ định ở bệnh nhân đái tháo đường hoặc suy thận (MLCT < 60 ml/ph/1,73 m²). 2. Ở các đối tượng khác, cũng nên tránh phối hợp này. Trong trường hợp bắt buộc phối hợp, theo dõi chặt chẽ kali, creatinin và huyết áp của bệnh nhân."
  },
  {
    "stt": 49,
    "drug1": "Alprazolam",
    "drug2": "Indinavir +/- ritonavir",
    "mechanism": "Indinavir ức chế CYP3A4 làm giảm chuyển hóa của alprazolam",
    "clinicalImpact": "Tăng nồng độ alprazolam trong huyết thanh, tăng nguy cơ tác dụng không mong muốn (buồn ngủ, lờ đờ, lẫn lộn, nặng hơn có thể xuất hiện mất điều hòa vận động, giảm trương lực cơ, hạ huyết áp, suy hô hấp, hôn mê)",
    "recommendation": "Chống chỉ định phối hợp"
  },
  {
    "stt": 50,
    "drug1": "Amiodaron",
    "drug2": "Thioridazin",
    "mechanism": "Hiệp đồng tăng tác dụng",
    "clinicalImpact": "Tăng nguy cơ kéo dài khoảng QT, xoắn đỉnh",
    "recommendation": "1. Chống chỉ định phối hợp ở các bệnh nhân có hội chứng QT kéo dài do di truyền hoặc mắc phải. 2. Trên các đối tượng bệnh nhân khác, tốt nhất nên tránh phối hợp các thuốc này. Trong trường hợp cần thiết phối hợp, cần đánh giá cẩn thận nguy cơ/lợi ích và lượng giá các yếu tố nguy cơ trên từng bệnh nhân, đặc biệt là rối loạn điện giải (hạ kali máu, hạ magie máu, hạ calci máu), nhịp tim chậm, nữ giới trước khi quyết định kê đơn."
  },
  {
    "stt": 51,
    "drug1": "Amiodaron",
    "drug2": "Moxifloxacin",
    "mechanism": "Hiệp đồng tăng tác dụng",
    "clinicalImpact": "Tăng nguy cơ kéo dài khoảng QT, xoắn đỉnh",
    "recommendation": "1. Chống chỉ định phối hợp ở các bệnh nhân có hội chứng QT kéo dài do di truyền hoặc mắc phải. 2. Trên các đối tượng bệnh nhân khác, tốt nhất nên tránh phối hợp các thuốc này. Trong trường hợp cần thiết phối hợp, cần đánh giá cẩn thận nguy cơ/lợi ích và lượng giá các yếu tố nguy cơ trên từng bệnh nhân, đặc biệt là rối loạn điện giải (hạ kali máu, hạ magie máu, hạ calci máu), nhịp tim chậm, nữ giới trước khi quyết định kê đơn."
  },
  {
    "stt": 52,
    "drug1": "Amiodaron",
    "drug2": "Sotalol",
    "mechanism": "Hiệp đồng tăng tác dụng",
    "clinicalImpact": "Tăng nguy cơ kéo dài khoảng QT, xoắn đỉnh",
    "recommendation": "1. Chống chỉ định phối hợp ở các bệnh nhân có hội chứng QT kéo dài do di truyền hoặc mắc phải. 2. Trên các đối tượng bệnh nhân khác, tốt nhất nên tránh phối hợp các thuốc này. Trong trường hợp cần thiết phối hợp, cần đánh giá cẩn thận nguy cơ/lợi ích và lượng giá các yếu tố nguy cơ trên từng bệnh nhân, đặc biệt là rối loạn điện giải (hạ kali máu, hạ magie máu, hạ calci máu), nhịp tim chậm, nữ giới trước khi quyết định kê đơn."
  },
  {
    "stt": 53,
    "drug1": "Amiodaron",
    "drug2": "Clorpromaz in",
    "mechanism": "Hiệp đồng tăng tác dụng",
    "clinicalImpact": "Tăng nguy cơ kéo dài khoảng QT, xoắn đỉnh",
    "recommendation": "1. Chống chỉ định phối hợp ở các bệnh nhân có hội chứng QT kéo dài do di truyền hoặc mắc phải. 2. Trên các đối tượng bệnh nhân khác, tốt nhất nên tránh phối hợp các thuốc này. Trong trường hợp cần thiết phối hợp, cần đánh giá cẩn thận nguy cơ/lợi ích và lượng giá các yếu tố nguy cơ trên từng bệnh nhân, đặc biệt là rối loạn điện giải (hạ kali máu, hạ magie máu, hạ calci máu), nhịp tim chậm, nữ giới trước khi quyết định kê đơn."
  },
  {
    "stt": 54,
    "drug1": "Amiodaron",
    "drug2": "Citalopram",
    "mechanism": "Hiệp đồng tăng tác dụng",
    "clinicalImpact": "Tăng nguy cơ kéo dài khoảng QT, xoắn đỉnh",
    "recommendation": "1. Chống chỉ định phối hợp ở các bệnh nhân có hội chứng QT kéo dài do di truyền hoặc mắc phải. 2. Trên các đối tượng bệnh nhân khác, tốt nhất nên tránh phối hợp các thuốc này. Trong trường hợp cần thiết phối hợp, cần đánh giá cẩn thận nguy cơ/lợi ích và lượng giá các yếu tố nguy cơ trên từng bệnh nhân, đặc biệt là rối loạn điện giải (hạ kali máu, hạ magie máu, hạ calci máu), nhịp tim chậm, nữ giới trước khi quyết định kê đơn."
  },
  {
    "stt": 55,
    "drug1": "Amiodaron",
    "drug2": "Escitalopram",
    "mechanism": "Hiệp đồng tăng tác dụng",
    "clinicalImpact": "Tăng nguy cơ kéo dài khoảng QT, xoắn đỉnh",
    "recommendation": "1. Chống chỉ định phối hợp ở các bệnh nhân có hội chứng QT kéo dài do di truyền hoặc mắc phải. 2. Trên các đối tượng bệnh nhân khác, tốt nhất nên tránh phối hợp các thuốc này. Trong trường hợp cần thiết phối hợp, cần đánh giá cẩn thận nguy cơ/lợi ích và lượng giá các yếu tố nguy cơ trên từng bệnh nhân, đặc biệt là rối loạn điện giải (hạ kali máu, hạ magie máu, hạ calci máu), nhịp tim chậm, nữ giới trước khi quyết định kê đơn."
  },
  {
    "stt": 56,
    "drug1": "Amiodaron",
    "drug2": "Haloperidol",
    "mechanism": "Hiệp đồng tăng tác dụng",
    "clinicalImpact": "Tăng nguy cơ kéo dài khoảng QT, xoắn đỉnh",
    "recommendation": "1. Chống chỉ định phối hợp ở các bệnh nhân có hội chứng QT kéo dài do di truyền hoặc mắc phải. 2. Trên các đối tượng bệnh nhân khác, tốt nhất nên tránh phối hợp các thuốc này. Trong trường hợp cần thiết phối hợp, cần đánh giá cẩn thận nguy cơ/lợi ích và lượng giá các yếu tố nguy cơ trên từng bệnh nhân, đặc biệt là rối loạn điện giải (hạ kali máu, hạ magie máu, hạ calci máu), nhịp tim chậm, nữ giới trước khi quyết định kê đơn."
  },
  {
    "stt": 57,
    "drug1": "Amiodaron",
    "drug2": "Cloroquin",
    "mechanism": "Hiệp đồng tăng tác dụng",
    "clinicalImpact": "Tăng nguy cơ kéo dài khoảng QT, xoắn đỉnh",
    "recommendation": "1. Chống chỉ định phối hợp ở các bệnh nhân có hội chứng QT kéo dài do di truyền hoặc mắc phải. 2. Trên các đối tượng bệnh nhân khác, tốt nhất nên tránh phối hợp các thuốc này. Trong trường hợp cần thiết phối hợp, cần đánh giá cẩn thận nguy cơ/lợi ích và lượng giá các yếu tố nguy cơ trên từng bệnh nhân, đặc biệt là rối loạn điện giải (hạ kali máu, hạ magie máu, hạ calci máu), nhịp tim chậm, nữ giới trước khi quyết định kê đơn."
  },
  {
    "stt": 58,
    "drug1": "Amiodaron",
    "drug2": "Domperidon",
    "mechanism": "Hiệp đồng tăng tác dụng",
    "clinicalImpact": "Tăng nguy cơ kéo dài khoảng QT, xoắn đỉnh",
    "recommendation": "Chống chỉ định phối hợp."
  },
  {
    "stt": 59,
    "drug1": "Amiodaron",
    "drug2": "Fluconazol",
    "mechanism": "Hiệp đồng tăng tác dụng",
    "clinicalImpact": "Tăng nguy cơ kéo dài khoảng QT, xoắn đỉnh",
    "recommendation": "1. Chống chỉ định phối hợp ở các bệnh nhân có hội chứng QT kéo dài do di truyền hoặc mắc phải. 2. Trên các đối tượng bệnh nhân khác, tốt nhất nên tránh phối hợp các thuốc này. Trong trường hợp cần thiết phối hợp, cần đánh giá cẩn thận nguy cơ/lợi ích và lượng giá các yếu tố nguy cơ trên từng bệnh nhân, đặc biệt là rối loạn điện giải (hạ kali máu, hạ magie máu, hạ calci máu), nhịp tim chậm, nữ giới trước khi quyết định kê đơn."
  },
  {
    "stt": 60,
    "drug1": "Amiodaron",
    "drug2": "Piperaquin/dihydroarte misinin (piperaquin)",
    "mechanism": "Hiệp đồng tăng tác dụng",
    "clinicalImpact": "Tăng nguy cơ kéo dài khoảng QT, xoắn đỉnh",
    "recommendation": "1. Chống chỉ định phối hợp ở các bệnh nhân có hội chứng QT kéo dài do di truyền hoặc mắc phải. 2. Trên các đối tượng bệnh nhân khác, tốt nhất nên tránh phối hợp các thuốc này. Trong trường hợp cần thiết phối hợp, cần đánh giá cẩn thận nguy cơ/lợi ích và lượng giá các yếu tố nguy cơ trên từng bệnh nhân, đặc biệt là rối loạn điện giải (hạ kali máu, hạ magie máu, hạ calci máu), nhịp tim chậm, nữ giới trước khi quyết định kê đơn."
  },
  {
    "stt": 61,
    "drug1": "Amiodaron",
    "drug2": "Colchicin",
    "mechanism": "Amiodaron ức chế P-gp làm giảm thải trừ colchicin.",
    "clinicalImpact": "Tăng nồng độ colchicin trong huyết thanh, tăng nguy cơ tác dụng độc tính (tiêu chảy, nôn, đau bụng, sốt, xuất huyết, giảm cả ba dòng tế bào máu, các dấu hiệu độc tính trên cơ như đau cơ, mỏi cơ hoặc yếu cơ, nước tiểu sẫm màu, dị cảm, trường hợp nặng có thể gây suy đa tạng và tử vong).",
    "recommendation": "1. Chống chỉ định ở bệnh nhân suy gan hoặc suy thận. 2. Ở bệnh nhân chức năng gan, thận bình thường: nên tránh phối hợp. Nếu phối hợp: giảm liều colchicin. Dùng liều tiếp theo của colchicin sau 3 ngày. Theo dõi nguy cơ độc tính của colchicin."
  },
  {
    "stt": 62,
    "drug1": "Amiodaron",
    "drug2": "Lopinavir/ritonavir (ritonavir)",
    "mechanism": "Ritonavir ức chế CYP3A4 làm giảm chuyển hóa của amiodaron",
    "clinicalImpact": "Tăng nồng độ amiodaron trong huyết thanh, tăng nguy cơ tác dụng không mong muốn (hạ huyết áp, chậm nhịp tim, ngừng xoang...)",
    "recommendation": "Chống chỉ định phối hợp"
  },
  {
    "stt": 63,
    "drug1": "Amiodaron",
    "drug2": "Darunavir/rit onavir (ritonavir)",
    "mechanism": "Ritonavir ức chế CYP3A4 làm giảm chuyển hóa của amiodaron",
    "clinicalImpact": "Tăng nồng độ amiodaron trong huyết thanh, tăng nguy cơ tác dụng không mong muốn (hạ huyết áp, chậm nhịp tim, ngừng xoang...)",
    "recommendation": "Chống chỉ định phối hợp"
  },
  {
    "stt": 64,
    "drug1": "Amiodaron",
    "drug2": "Atazanavir/ritonavir (ritonavir)",
    "mechanism": "Ritonavir ức chế CYP3A4 làm giảm chuyển hóa của amiodaron",
    "clinicalImpact": "Tăng nồng độ amiodaron trong huyết thanh, tăng nguy cơ tác dụng không mong muốn (hạ huyết áp, chậm nhịp tim, ngừng xoang...)",
    "recommendation": "Chống chỉ định phối hợp"
  },
  {
    "stt": 65,
    "drug1": "Amiodaron",
    "drug2": "Indinavir +/- ritonavir",
    "mechanism": "Indinavir ức chế CYP3A4 làm giảm chuyển hóa của amiodaron",
    "clinicalImpact": "Tăng nồng độ amiodaron trong huyết thanh, tăng nguy cơ tác dụng không mong muốn (hạ huyết áp, chậm nhịp tim, ngừng xoang...)",
    "recommendation": "Chống chỉ định phối hợp"
  },
  {
    "stt": 66,
    "drug1": "Amiodaron",
    "drug2": "Saquinavir +/- ritonavir",
    "mechanism": "Saquinavir ức chế CYP3A4 làm giảm chuyển hóa của amiodaron",
    "clinicalImpact": "Tăng nồng độ amiodaron trong huyết thanh, tăng nguy cơ tác dụng không mong muốn (hạ huyết áp, chậm nhịp tim, ngừng xoang...)",
    "recommendation": "Chống chỉ định phối hợp"
  },
  {
    "stt": 67,
    "drug1": "Amiodaron",
    "drug2": "Sparfloxacin",
    "mechanism": "Hiệp đồng tăng tác dụng",
    "clinicalImpact": "Tăng nguy cơ kéo dài khoảng QT, xoắn đỉnh",
    "recommendation": "1. Chống chỉ định phối hợp ở các bệnh nhân có hội chứng QT kéo dài do di truyền hoặc mắc phải. 2. Trên các đối tượng bệnh nhân khác, tốt nhất nên tránh phối hợp các thuốc này. Trong trường hợp cần thiết phối hợp, cần đánh giá cẩn thận nguy cơ/lợi ích và lượng giá các yếu tố nguy cơ trên từng bệnh nhân, đặc biệt là rối loạn điện giải (hạ kali máu, hạ magie máu, hạ calci máu), nhịp tim chậm, nữ giới trước khi quyết định kê đơn."
  },
  {
    "stt": 68,
    "drug1": "Amisulpirid",
    "drug2": "Thioridazin",
    "mechanism": "Hiệp đồng tăng tác dụng",
    "clinicalImpact": "Tăng nguy cơ kéo dài khoảng QT, xoắn đỉnh",
    "recommendation": "1. Chống chỉ định phối hợp ở các bệnh nhân có hội chứng QT kéo dài do di truyền hoặc mắc phải. 2. Trên các đối tượng bệnh nhân khác, tốt nhất nên tránh phối hợp các thuốc này. Trong trường hợp cần thiết phối hợp, cần đánh giá cẩn thận nguy cơ/lợi ích và lượng giá các yếu tố nguy cơ trên từng bệnh nhân, đặc biệt là rối loạn điện giải (hạ kali máu, hạ magie máu, hạ calci máu), nhịp tim chậm, nữ giới trước khi quyết định kê đơn."
  },
  {
    "stt": 69,
    "drug1": "Amisulpirid",
    "drug2": "Sparfloxacin",
    "mechanism": "Hiệp đồng tăng tác dụng",
    "clinicalImpact": "Tăng nguy cơ kéo dài khoảng QT, xoắn đỉnh",
    "recommendation": "1. Chống chỉ định phối hợp ở các bệnh nhân có hội chứng QT kéo dài do di truyền hoặc mắc phải. 2. Trên các đối tượng bệnh nhân khác, tốt nhất nên tránh phối hợp các thuốc này. Trong trường hợp cần thiết phối hợp, cần đánh giá cẩn thận nguy cơ/lợi ích và lượng giá các yếu tố nguy cơ trên từng bệnh nhân, đặc biệt là rối loạn điện giải (hạ kali máu, hạ magie máu, hạ calci máu), nhịp tim chậm, nữ giới trước khi quyết định kê đơn."
  },
  {
    "stt": 70,
    "drug1": "Amitriptylin",
    "drug2": "Linezolid",
    "mechanism": "Hiệp đồng tác dụng serotonin",
    "clinicalImpact": "Tăng nguy cơ hội chứng serotonin (sốt cao, rối loạn nhận thức, tăng phản xạ, mất phối hợp, rung giật cơ, cứng cơ, co giật, nhịp tim nhanh, tăng huyết áp, tăng thân nhiệt, vã mồ hôi, ảo giác, kích động hoặc bồn chồn…)",
    "recommendation": "1. Cố gắng tránh sử dụng đồng thời linezolid và amitriptylin. Tốt nhất các thuốc này nên sử dụng cách nhau 2 tuần. Cân nhắc thay đổi sang các thuốc nhóm khác có cùng chỉ định và ít có nguy cơ tương tác hơn. 2. Trong hợp không thể trì hoãn điều trị được 2 tuần, bắt buộc sử dụng dài ngày hoặc khẩn cấp bằng linezolid và không có thuốc khác thay thế, cân bằng lợi ích và nguy cơ xảy ra hội chứng serotonin. Nếu lợi ích vượt trội nguy cơ, vẫn có thể sử dụng đồng thời nhưng cần giám sát chặt chẽ chặt chẽ bệnh nhân, đặc biệt trong tháng đầu tiên sử dụng đồng thời 2 thuốc."
  },
  {
    "stt": 71,
    "drug1": "Amitriptylin",
    "drug2": "Xanh methylen (sử dụng đường tiêm tĩnh mạch)",
    "mechanism": "Hiệp đồng tác dụng serotonin",
    "clinicalImpact": "Tăng nguy cơ hội chứng serotonin (sốt cao, rối loạn nhận thức, tăng phản xạ, mất phối hợp, rung giật cơ, cứng cơ, co giật, nhịp tim nhanh, tăng huyết áp, tăng thân nhiệt, vã mồ hôi, ảo giác, kích động hoặc bồn chồn…)",
    "recommendation": "1. Cố gắng tránh sử dụng đồng thời xanh methylen và sumatriptan. Tốt nhất các thuốc này nên sử dụng cách nhau 2 tuần. Cân nhắc thay đổi sang các thuốc nhóm khác có cùng chỉ định và ít có nguy cơ tương tác hơn. 2. Trong hợp không thể trì hoãn điều trị được 2 tuần, bắt buộc sử dụng dài ngày hoặc khẩn cấp bằng xanh methylen và không có thuốc khác thay thế, cân bằng lợi ích và nguy cơ xảy ra hội chứng serotonin. Nếu lợi ích vượt trội nguy cơ, vẫn có thể sử dụng đồng thời nhưng cần giám sát chặt chẽ chặt chẽ bệnh nhân, đặc biệt trong tháng đầu tiên sử dụng đồng thời 2 thuốc."
  },
  {
    "stt": 72,
    "drug1": "Amitriptylin",
    "drug2": "Furazolidon",
    "mechanism": "Hiệp đồng tác dụng serotonin. Tác dụng ức chế MAO của furazolidon do chất chuyển hóa của thuốc, xuất hiện chậm sau 5 - 10 ngày.",
    "clinicalImpact": "Tăng nguy cơ hội chứng serotonin (sốt cao, rối loạn nhận thức, tăng phản xạ, mất phối hợp, rung giật cơ, cứng cơ, co giật, nhịp tim nhanh, tăng huyết áp, tăng thân nhiệt, vã mồ hôi, ảo giác, kích động hoặc bồn chồn…)",
    "recommendation": "1. Cố gắng tránh sử dụng đồng thời furazolidon và amitriptylin. Tốt nhất các thuốc này nên sử dụng cách nhau 2 tuần. Cân nhắc thay đổi sang các thuốc nhóm khác có cùng chỉ định và ít có nguy cơ tương tác hơn. 2. Trong hợp không thể trì hoãn điều trị được 2 tuần, bắt buộc sử dụng dài ngày hoặc khẩn cấp bằng furazolidon và không có thuốc khác thay thế, cân bằng lợi ích và nguy cơ xảy ra hội chứng serotonin. Nếu lợi ích vượt trội nguy cơ, vẫn có thể sử dụng đồng thời nhưng cần giám sát chặt chẽ chặt chẽ bệnh nhân, đặc biệt trong tháng đầu tiên sử dụng đồng thời 2 thuốc."
  },
  {
    "stt": 73,
    "drug1": "Arsenic trioxid",
    "drug2": "Thioridazin",
    "mechanism": "Hiệp đồng tăng tác dụng",
    "clinicalImpact": "Tăng nguy cơ kéo dài khoảng QT, xoắn đỉnh",
    "recommendation": "1. Chống chỉ định phối hợp ở các bệnh nhân có hội chứng QT kéo dài do di truyền hoặc mắc phải. 2. Trên các đối tượng bệnh nhân khác, tốt nhất nên tránh phối hợp các thuốc này. Trong trường hợp cần thiết phối hợp, cần đánh giá cẩn thận nguy cơ/lợi ích và lượng giá các yếu tố nguy cơ trên từng bệnh nhân, đặc biệt là rối loạn điện giải (hạ kali máu, hạ magie máu, hạ calci máu), nhịp tim chậm, nữ giới trước khi quyết định kê đơn."
  },
  {
    "stt": 74,
    "drug1": "Arsenic trioxid",
    "drug2": "Sparfloxacin",
    "mechanism": "Hiệp đồng tăng tác dụng",
    "clinicalImpact": "Tăng nguy cơ kéo dài khoảng QT, xoắn đỉnh",
    "recommendation": "1. Chống chỉ định phối hợp ở các bệnh nhân có hội chứng QT kéo dài do di truyền hoặc mắc phải. 2. Trên các đối tượng bệnh nhân khác, tốt nhất nên tránh phối hợp các thuốc này. Trong trường hợp cần thiết phối hợp, cần đánh giá cẩn thận nguy cơ/lợi ích và lượng giá các yếu tố nguy cơ trên từng bệnh nhân, đặc biệt là rối loạn điện giải (hạ kali máu, hạ magie máu, hạ calci máu), nhịp tim chậm, nữ giới trước khi quyết định kê đơn."
  },
  {
    "stt": 75,
    "drug1": "Arsenic trioxid",
    "drug2": "Domperidon",
    "mechanism": "Hiệp đồng tăng tác dụng",
    "clinicalImpact": "Tăng nguy cơ kéo dài khoảng QT, xoắn đỉnh",
    "recommendation": "Chống chỉ định phối hợp."
  },
  {
    "stt": 76,
    "drug1": "Artemether/lumefantrin",
    "drug2": "Posaconazol",
    "mechanism": "Hiệp đồng tăng tác dụng",
    "clinicalImpact": "Tăng nguy cơ kéo dài khoảng QT, xoắn đỉnh",
    "recommendation": "1. Chống chỉ định phối hợp ở các bệnh nhân có hội chứng QT kéo dài do di truyền hoặc mắc phải. 2. Trên các đối tượng bệnh nhân khác, tốt nhất nên tránh phối hợp các thuốc này. Trong trường hợp cần thiết phối hợp, cần đánh giá cẩn thận nguy cơ/lợi ích và lượng giá các yếu tố nguy cơ trên từng bệnh nhân, đặc biệt là rối loạn điện giải (hạ kali máu, hạ magie máu, hạ calci máu), nhịp tim chậm, nữ giới trước khi quyết định kê đơn."
  },
  {
    "stt": 77,
    "drug1": "Artemether/lumefantrin",
    "drug2": "Fluconazol",
    "mechanism": "Hiệp đồng tăng tác dụng",
    "clinicalImpact": "Tăng nguy cơ kéo dài khoảng QT, xoắn đỉnh",
    "recommendation": "1. Chống chỉ định phối hợp ở các bệnh nhân có hội chứng QT kéo dài do di truyền hoặc mắc phải. 2. Trên các đối tượng bệnh nhân khác, tốt nhất nên tránh phối hợp các thuốc này. Trong trường hợp cần thiết phối hợp, cần đánh giá cẩn thận nguy cơ/lợi ích và lượng giá các yếu tố nguy cơ trên từng bệnh nhân, đặc biệt là rối loạn điện giải (hạ kali máu, hạ magie máu, hạ calci máu), nhịp tim chậm, nữ giới trước khi quyết định kê đơn."
  },
  {
    "stt": 78,
    "drug1": "Artemether/lumefantrin",
    "drug2": "Domperidon",
    "mechanism": "Hiệp đồng tăng tác dụng",
    "clinicalImpact": "Tăng nguy cơ kéo dài khoảng QT, xoắn đỉnh",
    "recommendation": "Chống chỉ định phối hợp."
  },
  {
    "stt": 79,
    "drug1": "Artemether/lumefantrin",
    "drug2": "Rifampicin",
    "mechanism": "Rifampicin cảm ứng CYP3A4 làm tăng chuyển hóa của artemether/lumef antrin",
    "clinicalImpact": "Giảm nồng độ của artemether/lumefan trin trong huyết thanh, dẫn đến giảm hiệu quả điều trị",
    "recommendation": "Chống chỉ định phối hợp."
  },
  {
    "stt": 80,
    "drug1": "Artemether/lumefantrin",
    "drug2": "Enzalutamid",
    "mechanism": "Enzalutamid cảm ứng CYP3A4 làm tăng chuyển hóa của artemether/lumef antrin",
    "clinicalImpact": "Giảm nồng độ của artemether/lumefan trin trong huyết thanh, dẫn đến giảm hiệu quả điều trị",
    "recommendation": "Chống chỉ định phối hợp."
  },
  {
    "stt": 81,
    "drug1": "Artemether/lumefantrin",
    "drug2": "Carbamazepin",
    "mechanism": "Carbamazepin cảm ứng CYP3A4 mạnh làm tăng chuyển hóa của artemether/lumef antrin",
    "clinicalImpact": "Giảm nồng độ của artemether/lumefan trin trong huyết thanh, dẫn đến giảm hiệu quả điều trị",
    "recommendation": "Chống chỉ định phối hợp."
  },
  {
    "stt": 82,
    "drug1": "Artemether/lumefantrin",
    "drug2": "Phenobarbital",
    "mechanism": "Phenobarbital cảm ứng CYP3A4 mạnh làm tăng chuyển hóa của artemether/lumef antrin",
    "clinicalImpact": "Giảm nồng độ của artemether/lumefan trin trong huyết thanh, dẫn đến giảm hiệu quả điều trị",
    "recommendation": "Chống chỉ định phối hợp."
  },
  {
    "stt": 83,
    "drug1": "Artemether/lumefantrin",
    "drug2": "Phenytoin",
    "mechanism": "Phenytoin cảm ứng CYP3A4 mạnh làm tăng chuyển hóa của artemether/lumef antrin",
    "clinicalImpact": "Giảm nồng độ của artemether/lumefan trin trong huyết thanh, dẫn đến giảm hiệu quả điều trị",
    "recommendation": "Chống chỉ định phối hợp."
  },
  {
    "stt": 84,
    "drug1": "Artemether/lumefantrin",
    "drug2": "Sparfloxacin",
    "mechanism": "Hiệp đồng tăng tác dụng",
    "clinicalImpact": "Tăng nguy cơ kéo dài khoảng QT, xoắn đỉnh",
    "recommendation": "1. Chống chỉ định phối hợp ở các bệnh nhân có hội chứng QT kéo dài do di truyền hoặc mắc phải. 2. Trên các đối tượng bệnh nhân khác, tốt nhất nên tránh phối hợp các thuốc này. Trong trường hợp cần thiết phối hợp, cần đánh giá cẩn thận nguy cơ/lợi ích và lượng giá các yếu tố nguy cơ trên từng bệnh nhân, đặc biệt là rối loạn điện giải (hạ kali máu, hạ magie máu, hạ calci máu), nhịp tim chậm, nữ giới trước khi quyết định kê đơn."
  },
  {
    "stt": 85,
    "drug1": "Aspirin",
    "drug2": "Ketorolac",
    "mechanism": "Hiệp đồng tác dụng kích ứng đường tiêu hóa",
    "clinicalImpact": "Tăng nguy cơ xuất huyết tiêu hóa nghiêm trọng (sử dụng đồng thời ketorolac với 1 NSAID khác làm tăng nguy cơ xuất huyết tiêu hóa gấp 5 lần so với phối hợp 2 NSAID khác)",
    "recommendation": "Chống chỉ định phối hợp. Cần đặc biệt lưu ý nguy cơ tương tác trong trường hợp giảm đau hậu phẫu."
  },
  {
    "stt": 86,
    "drug1": "Atazanavir/ritonavir",
    "drug2": "Lovastatin",
    "mechanism": "Atazanavir/ritona vir ức chế CYP3A4 mạnh làm giảm chuyển hóa của lovastatin",
    "clinicalImpact": "Tăng nồng độ của lovastatin trong huyết thanh, tăng nguy cơ bệnh cơ hoặc tiêu cơ vân cấp",
    "recommendation": "Chống chỉ định phối hợp. Trong trường hợp bắt buộc sử dụng dẫn chất statin, thay lovastatin bằng các dẫn chất statin khác (ngoại trừ simvastatin), sử dụng liều thấp nhất có hiệu quả, atorvastatin không quá 10 mg/ngày, rosuvastatin không vượt quá 10 mg/ngày, pitavastatin không cần hiệu chỉnh liều khi phối hợp."
  },
  {
    "stt": 87,
    "drug1": "Atazanavir/ritonavir",
    "drug2": "Simvastatin",
    "mechanism": "Atazanavir/ritona vir ức chế CYP3A4 mạnh làm giảm chuyển hóa của simvastatin",
    "clinicalImpact": "Tăng nồng độ của simvastatin trong huyết thanh, tăng nguy cơ bệnh cơ hoặc tiêu cơ vân cấp",
    "recommendation": "Chống chỉ định phối hợp. Trong trường hợp bắt buộc sử dụng dẫn chất statin, thay simvastatin bằng các dẫn chất statin khác (ngoại trừ lovastatin) sử dụng liều thấp nhất có hiệu quả, atorvastatin không quá 10 mg/ngày, rosuvastatin không vượt quá 10 mg/ngày, pitavastatin không cần hiệu chỉnh liều khi phối hợp."
  },
  {
    "stt": 88,
    "drug1": "Atazanavir/ritonavir",
    "drug2": "Dihydroergot amin",
    "mechanism": "Atazanavir/ritona vir ức chế CYP3A4 mạnh làm giảm chuyển hóa của dihydroergotamin",
    "clinicalImpact": "Tăng nồng độ của dihydroergotamin trong huyết thanh, tăng nguy cơ độc tính (nôn, buồn nôn, hoại tử đầu chi, thiếu máu cục bộ do co thắt mạch…)",
    "recommendation": "Chống chỉ định phối hợp"
  },
  {
    "stt": 89,
    "drug1": "Atazanavir/ritonavir",
    "drug2": "Ergotamin",
    "mechanism": "Atazanavir/ritona vir ức chế CYP3A4 mạnh làm giảm chuyển hóa của ergotamin",
    "clinicalImpact": "Tăng nồng độ của ergotamin trong huyết thanh, tăng nguy cơ độc tính (nôn, buồn nôn, hoại tử đầu chi, thiếu máu cục bộ do co thắt mạch…)",
    "recommendation": "Chống chỉ định phối hợp"
  },
  {
    "stt": 90,
    "drug1": "Atazanavir/ritonavir",
    "drug2": "Ergometrin",
    "mechanism": "Atazanavir/ritona vir ức chế CYP3A4 mạnh làm giảm chuyển hóa của ergometrin",
    "clinicalImpact": "Tăng nồng độ của ergometrin trong huyết thanh, tăng nguy cơ độc tính (nôn, buồn nôn, hoại tử đầu chi, thiếu máu cục bộ do co thắt mạch…)",
    "recommendation": "Tốt nhất nên tránh phối hợp. Đối với trường hợp điều trị băng huyết sau sinh, nếu không còn thuốc khác thay thế ở người bệnh đang sử dụng atazanavir, sử dụng ergometrin chỉ khi lợi ích vượt trội nguy cơ và sử dụng liều thấp nhất có hiệu quả trong thời gian ngắn nhất."
  },
  {
    "stt": 91,
    "drug1": "Atazanavir/ritonavir",
    "drug2": "Methylergometrin",
    "mechanism": "Atazanavir/ritona vir ức chế CYP3A4 mạnh làm giảm chuyển hóa của methylergometrin",
    "clinicalImpact": "Tăng nồng độ của methylergometrin trong huyết thanh, tăng nguy cơ độc tính (nôn, buồn nôn, hoại tử đầu chi, thiếu máu cục bộ do co thắt mạch…)",
    "recommendation": "Tốt nhất nên tránh phối hợp. Đối với trường hợp điều trị băng huyết sau sinh, nếu không còn thuốc khác thay thế ở người bệnh đang sử dụng atazanavir, sử dụng methylergometrin chỉ khi lợi ích vượt trội nguy cơ và sử dụng liều thấp nhất có hiệu quả trong thời gian ngắn nhất."
  },
  {
    "stt": 92,
    "drug1": "Atazanavir/ritonavir",
    "drug2": "Ivabradin",
    "mechanism": "Atazanavir/ritona vir ức chế CYP3A4 mạnh làm giảm chuyển hóa của ivabradin",
    "clinicalImpact": "Tăng nồng độ ivabradin trong huyết thanh, tăng nguy cơ kéo dài khoảng QT và chậm nhịp tim",
    "recommendation": "Chống chỉ định phối hợp"
  },
  {
    "stt": 93,
    "drug1": "Atazanavir/ritonavir",
    "drug2": "Ticagrelor",
    "mechanism": "Atazanavir/ritona vir ức chế CYP3A4 mạnh làm giảm chuyển hóa của ticagrelor",
    "clinicalImpact": "Tăng nồng độ của ticagrelor trong huyết thanh, tăng nguy cơ xuất huyết",
    "recommendation": "Chống chỉ định phối hợp"
  },
  {
    "stt": 94,
    "drug1": "Atazanavir/ritonavir",
    "drug2": "Ranolazin",
    "mechanism": "Atazanavir/ritona vir ức chế CYP3A4 mạnh làm giảm chuyển hóa của ranolazin",
    "clinicalImpact": "Tăng nồng độ ranolazin trong huyết thanh, tăng nguy cơ kéo dài khoảng QT",
    "recommendation": "Chống chỉ định phối hợp"
  },
  {
    "stt": 95,
    "drug1": "Atazanavir/ritonavir",
    "drug2": "Tolvaptan",
    "mechanism": "Atazanavir/ritona vir ức chế CYP3A4 mạnh làm giảm chuyển hóa của tolvaptan",
    "clinicalImpact": "Tăng nồng độ tolvaptan trong huyết thanh, tăng nguy cơ tác dụng không mong muốn (tăng nồng độ natri huyết thanh, đa niệu, khát nước, giảm thể tích tuần hoàn...)",
    "recommendation": "Chống chỉ định phối hợp"
  },
  {
    "stt": 96,
    "drug1": "Atazanavir/ritonavir",
    "drug2": "Felodipin",
    "mechanism": "Atazanavir/ritona vir ức chế CYP3A4 mạnh làm giảm chuyển hóa của felodipin",
    "clinicalImpact": "Tăng nồng độ felodipin, tăng nguy cơ hạ huyết áp nghiêm trọng",
    "recommendation": "Chống chỉ định phối hợp"
  },
  {
    "stt": 97,
    "drug1": "Atazanavir/ritonavir",
    "drug2": "Lercanidipin",
    "mechanism": "Atazanavir/ritona vir ức chế CYP3A4 mạnh làm giảm chuyển hóa của lercanidipin",
    "clinicalImpact": "Tăng nồng độ lercanidipin, tăng nguy cơ hạ huyết áp nghiêm trọng",
    "recommendation": "Chống chỉ định phối hợp"
  },
  {
    "stt": 98,
    "drug1": "Atazanavir/ritonavir",
    "drug2": "Sildenafil",
    "mechanism": "Atazanavir/ritona vir ức chế CYP3A4 làm giảm chuyển hóa của sildenafil",
    "clinicalImpact": "Tăng nồng độ sildenafil trong huyết thanh, tăng nguy cơ độc tính (hạ huyết áp, ngất, rối loạn thị giác)",
    "recommendation": "1. Chống chỉ định phối hợp trong trường hợp sử dụng sildenafil điều trị tăng áp động mạch phổi. 2. Trong trường hợp sử dụng sildenafil điều trị rối loạn cương dương, liều sildenafil không vượt quá 25 mg mỗi 48 giờ ở người đang sử dụng atazanavir."
  },
  {
    "stt": 99,
    "drug1": "Atazanavir/ritonavir",
    "drug2": "Quetiapin",
    "mechanism": "Atazanavir/ritona vir ức chế CYP3A4 mạnh làm giảm chuyển hóa của quetiapin",
    "clinicalImpact": "Tăng nồng độ của quetiapin, tăng nguy cơ kéo dài khoảng QT",
    "recommendation": "Tốt nhất nên tránh phối hợp. Trong trường hợp bắt buộc sử dụng atazanavir, giảm liều quetiapin còn 1/6 liều so với liều bình thường."
  },
  {
    "stt": 100,
    "drug1": "Atazanavir/ritonavir",
    "drug2": "Rifampicin",
    "mechanism": "Rifampicin cảm ứng CYP3A4 làm tăng chuyển hóa của Atazanavir/ritona vir",
    "clinicalImpact": "Giảm nồng độ atazanavir trong huyết thanh, giảm hiệu quả điều trị",
    "recommendation": "Chống chỉ định phối hợp"
  },
  {
    "stt": 101,
    "drug1": "Atazanavir/ritonavir",
    "drug2": "Grazoprevir/elbasvir",
    "mechanism": "Atazanavir/ritona vir ức chế OATP1B1/3 làm giảm vận chuyển grazoprevir vào gan.",
    "clinicalImpact": "Tăng nồng độ grazoprevir/elbasvir, tăng nguy cơ tăng ALT",
    "recommendation": "Chống chỉ định phối hợp"
  },
  {
    "stt": 102,
    "drug1": "Atazanavir/ritonavir",
    "drug2": "Domperidon",
    "mechanism": "Atazanavir/ritona vir ức chế CYP3A4 làm giảm chuyển hóa của domperidon",
    "clinicalImpact": "Tăng nồng độ domperidon trong huyết thanh, tăng nguy cơ kéo dài khoảng QT",
    "recommendation": "Chống chỉ định phối hợp"
  },
  {
    "stt": 103,
    "drug1": "Atazanavir/ritonavir (ritonavir)",
    "drug2": "Colchicin",
    "mechanism": "Ritonavir ức chế mạnh CYP3A4 và ức chế P-gp làm giảm chuyển hóa và thải trừ colchicin.",
    "clinicalImpact": "Tăng nồng độ colchicin trong huyết thanh, tăng nguy cơ tác dụng độc tính (tiêu chảy, nôn, đau bụng, sốt, xuất huyết, giảm cả ba dòng tế bào máu, các dấu hiệu độc tính trên cơ như đau cơ, mỏi cơ hoặc yếu cơ, nước tiểu sẫm màu, dị cảm, trường hợp nặng có thể gây suy đa tạng và tử vong).",
    "recommendation": "1. Chống chỉ định ở bệnh nhân suy gan hoặc suy thận. 2. Ở bệnh nhân chức năng gan, thận bình thường: nên tránh phối hợp. Nếu phối hợp: giảm liều colchicin. Dùng liều tiếp theo của colchicin sau 3 ngày. Theo dõi nguy cơ độc tính của colchicin."
  },
  {
    "stt": 104,
    "drug1": "Atazanavir/ritonavir (ritonavir)",
    "drug2": "Vardenafil",
    "mechanism": "Ritonavir ức chế CYP3A4 làm giảm chuyển hóa của vardenafil",
    "clinicalImpact": "Tăng nồng độ vardenafil trong huyết thanh, tăng nguy cơ kéo dài khoảng QT",
    "recommendation": "Chống chỉ định phối hợp"
  },
  {
    "stt": 105,
    "drug1": "Atazanavir/ritonavir (ritonavir)",
    "drug2": "Propafenon",
    "mechanism": "Ritonavir ức chế chuyển hóa của propafenon qua CYP3A4 và CYP2D6.",
    "clinicalImpact": "Tăng nồng độ, dẫn đến tăng độc tính của propafenon (đặc biệt là loạn nhịp tim).",
    "recommendation": "Chống chỉ định phối hợp."
  },
  {
    "stt": 106,
    "drug1": "Atazanavir/ritonavir (ritonavir)",
    "drug2": "Everolimus",
    "mechanism": "Ritonavir ức chế mạnh CP3A4 làm giảm chuyển hóa của everolimus ở gan, đồng thời, ức chế P-gp làm giảm thải trừ everolimus khỏi cơ thể.",
    "clinicalImpact": "Tăng nồng độ everolimus trong huyết thanh, tăng tác dụng bất lợi liên quan đến ức chế miễn dịch",
    "recommendation": "Chống chỉ định phối hợp"
  },
  {
    "stt": 107,
    "drug1": "Atazanavir/ritonavir (ritonavir)",
    "drug2": "Voriconazol",
    "mechanism": "Ritonavir cảm ứng CYP2C19 (hoặc ức chế CYP3A4 ở người thiếu hoặc giảm hoạt tính CYP2C19) làm tăng (hoặc giảm) chuyển hóa của voriconazol tùy thuộc từng cá thể (voriconazol là cơ chất của cả CYP3A4 và CYP2C19)",
    "clinicalImpact": "Giảm (hoặc tăng) nồng độ voriconazol.",
    "recommendation": "1. Việc phối hợp voriconazol và ritonavir liều cao (400mg mỗi 12 giờ) làm giảm rõ rệt nồng độ voriconazol, vì vậy, chống chỉ định phối hợp voriconazol với ritonavir ở mức liều này. 2. Việc phối hợp voriconazol với ritonavir liều thấp (100mg mỗi 12 giờ) cũng đã cho thấy làm giảm nồng độ voriconazol mặc dù mức độ ít hơn so với liều cao ritonavir, vì vậy, nên tránh phối hợp thuốc trừ khi lợi ích vượt trội nguy cơ."
  },
  {
    "stt": 108,
    "drug1": "Atorvastatin",
    "drug2": "Ciclosporin",
    "mechanism": "Ciclosporin ức chế CYP3A4 làm giảm chuyển hóa của atorvastatin; ciclosporin cũng ức chế cả OATP1B1 làm giảm vận chuyển atorvastatin vào gan.",
    "clinicalImpact": "Tăng nồng độ simvastatin trong huyết thanh, tăng nguy cơ bệnh cơ hoặc tiêu cơ vân cấp",
    "recommendation": "Chống chỉ định phối hợp. Cân nhắc thay đổi sang các thuốc nhóm khác có cùng chỉ định và ít có nguy cơ tương tác hơn: thay atorvastatin bằng fluvastatin (tối đa 20 mg/ngày), pravastatin (tối đa 20 mg/ngày), rosuvastatin (tối đa 5 mg/ngày)."
  },
  {
    "stt": 109,
    "drug1": "Atorvastatin",
    "drug2": "Gemfibrozil",
    "mechanism": "Gemfibrozil ức chế OATP1B1 làm giảm vận chuyển atorvastatin vào gan.",
    "clinicalImpact": "Tăng nồng độ atorvastatin trong huyết thanh, tăng nguy cơ bệnh cơ hoặc tiêu cơ vân cấp",
    "recommendation": "Chống chỉ định phối hợp. Trong trường hợp bắt buộc sử dụng dẫn chất fibrat, thay thế gemfibrozil bằng fenofibrat nhưng cần thận trọng khi phối hợp."
  },
  {
    "stt": 110,
    "drug1": "Atropin",
    "drug2": "Kali clorid (dạng uống giải phóng kéo dài)",
    "mechanism": "Atropin kháng cholinergic gây tồn lưu hoặc làm tăng thời gian kali qua đường tiêu hóa khi sử dụng đường uống, gây loét đường tiêu hóa",
    "clinicalImpact": "Tăng nguy cơ loét tiêu hóa",
    "recommendation": "1. Tốt nhất nên tránh phối hợp, đặc biệt ở người cao tuổi. Cân nhắc chuyển sang sử dụng kali đường tĩnh mạch. 2. Trong trường hợp bắt buộc sử dụng đồng thời, cân nhắc một số khuyến cáo sau giúp giảm nguy cơ loét tiêu hóa: (1) uống ít nhất 100 mL nước sau khi uống kali, (2) ngồi hoặc đứng thẳng trong ít nhất 5 - 10 phút sau khi uống thuốc."
  },
  {
    "stt": 111,
    "drug1": "Azithromycin",
    "drug2": "Thioridazin",
    "mechanism": "Hiệp đồng tăng tác dụng",
    "clinicalImpact": "Tăng nguy cơ kéo dài khoảng QT, xoắn đỉnh",
    "recommendation": "1. Chống chỉ định phối hợp ở các bệnh nhân có hội chứng QT kéo dài do di truyền hoặc mắc phải. 2. Trên các đối tượng bệnh nhân khác, tốt nhất nên tránh phối hợp các thuốc này. Trong trường hợp cần thiết phối hợp, cần đánh giá cẩn thận nguy cơ/lợi ích và lượng giá các yếu tố nguy cơ trên từng bệnh nhân, đặc biệt là rối loạn điện giải (hạ kali máu, hạ magie máu, hạ calci máu), nhịp tim chậm, nữ giới trước khi quyết định kê đơn."
  },
  {
    "stt": 112,
    "drug1": "Azithromycin",
    "drug2": "Haloperidol",
    "mechanism": "Hiệp đồng tăng tác dụng",
    "clinicalImpact": "Tăng nguy cơ kéo dài khoảng QT, xoắn đỉnh",
    "recommendation": "1. Chống chỉ định phối hợp ở các bệnh nhân có hội chứng QT kéo dài do di truyền hoặc mắc phải. 2. Trên các đối tượng bệnh nhân khác, tốt nhất nên tránh phối hợp các thuốc này. Trong trường hợp cần thiết phối hợp, cần đánh giá cẩn thận nguy cơ/lợi ích và lượng giá các yếu tố nguy cơ trên từng bệnh nhân, đặc biệt là rối loạn điện giải (hạ kali máu, hạ magie máu, hạ calci máu), nhịp tim chậm, nữ giới trước khi quyết định kê đơn."
  },
  {
    "stt": 113,
    "drug1": "Azithromycin",
    "drug2": "Sparfloxacin",
    "mechanism": "Hiệp đồng tăng tác dụng",
    "clinicalImpact": "Tăng nguy cơ kéo dài khoảng QT, xoắn đỉnh",
    "recommendation": "1. Chống chỉ định phối hợp ở các bệnh nhân có hội chứng QT kéo dài do di truyền hoặc mắc phải. 2. Trên các đối tượng bệnh nhân khác, tốt nhất nên tránh phối hợp các thuốc này. Trong trường hợp cần thiết phối hợp, cần đánh giá cẩn thận nguy cơ/lợi ích và lượng giá các yếu tố nguy cơ trên từng bệnh nhân, đặc biệt là rối loạn điện giải (hạ kali máu, hạ magie máu, hạ calci máu), nhịp tim chậm, nữ giới trước khi quyết định kê đơn."
  },
  {
    "stt": 114,
    "drug1": "Azithromycin",
    "drug2": "Domperidon",
    "mechanism": "Hiệp đồng tăng tác dụng",
    "clinicalImpact": "Tăng nguy cơ kéo dài khoảng QT, xoắn đỉnh",
    "recommendation": "Chống chỉ định phối hợp."
  },
  {
    "stt": 115,
    "drug1": "Benazepril",
    "drug2": "Sacubitril/val sartan (sacubitril)",
    "mechanism": "Tăng tích lũy bradykinin gây phù mạch",
    "clinicalImpact": "Tăng nguy cơ phù mạch",
    "recommendation": "Chống chỉ định phối hợp. Chỉ bắt đầu sử dụng Sacubitril/valsartan (sacubitril) sau khi ngừng benazepril ít nhất 36 giờ."
  },
  {
    "stt": 116,
    "drug1": "Bleomycin",
    "drug2": "Brentuximab",
    "mechanism": "Chưa rõ",
    "clinicalImpact": "Tăng nguy cơ độc tính (không nhiễm trùng) trên phổi (bao gồm viêm phổi không nhiễm trùng, bệnh phổi kẽ hoặc hội chứng suy hô hấp cấp tính (ARDS) do tổn thương phế nang, với biểu hiện khó thở, ho và sốt không đặc hiệu",
    "recommendation": "Chống chỉ định phối hợp"
  },
  {
    "stt": 117,
    "drug1": "Boceprevir",
    "drug2": "Lovastatin",
    "mechanism": "Boceprevir ức chế CYP3A4 mạnh làm giảm chuyển hóa của lovastatin",
    "clinicalImpact": "Tăng nồng độ của lovastatin trong huyết thanh, tăng nguy cơ bệnh cơ hoặc tiêu cơ vân cấp",
    "recommendation": "Chống chỉ định phối hợp"
  },
  {
    "stt": 118,
    "drug1": "Boceprevir",
    "drug2": "Simvastatin",
    "mechanism": "Boceprevir ức chế CYP3A4 mạnh làm giảm chuyển hóa của simvastatin",
    "clinicalImpact": "Tăng nồng độ của simvastatin trong huyết thanh, tăng nguy cơ bệnh cơ hoặc tiêu cơ vân cấp",
    "recommendation": "Chống chỉ định phối hợp"
  },
  {
    "stt": 119,
    "drug1": "Boceprevir",
    "drug2": "Colchicin",
    "mechanism": "Boceprevir ức chế CYP3A4 mạnh làm giảm chuyển hóa của colchicin",
    "clinicalImpact": "Tăng nồng độ colchicin trong huyết thanh, tăng nguy cơ tác dụng độc tính (tiêu chảy, nôn, đau bụng, sốt, xuất huyết, giảm cả ba dòng tế bào máu, các dấu hiệu độc tính trên cơ như đau cơ, mỏi cơ hoặc yếu cơ, nước tiểu sẫm màu, dị cảm, trường hợp nặng có thể gây suy đa tạng và tử vong).",
    "recommendation": "1. Chống chỉ định ở bệnh nhân suy gan hoặc suy thận. 2. Ở bệnh nhân chức năng gan, thận bình thường: nên tránh phối hợp. Nếu phối hợp: giảm liều colchicin. Dùng liều tiếp theo của colchicin sau 3 ngày. Theo dõi nguy cơ độc tính của colchicin."
  },
  {
    "stt": 120,
    "drug1": "Boceprevir",
    "drug2": "Dihydroergot amin",
    "mechanism": "Boceprevir ức chế CYP3A4 mạnh làm giảm chuyển hóa của dihydroergotamin",
    "clinicalImpact": "Tăng nồng độ của dihydroergotamin trong huyết thanh, tăng nguy cơ độc tính (nôn, buồn nôn, hoại tử đầu chi, thiếu máu cục bộ do co thắt mạch…)",
    "recommendation": "Chống chỉ định phối hợp"
  },
  {
    "stt": 121,
    "drug1": "Boceprevir",
    "drug2": "Ergotamin",
    "mechanism": "Boceprevir ức chế CYP3A4 mạnh làm giảm chuyển hóa của ergotamin",
    "clinicalImpact": "Tăng nồng độ của ergotamin trong huyết thanh, tăng nguy cơ độc tính (nôn, buồn nôn, hoại tử đầu chi, thiếu máu cục bộ do co thắt mạch…)",
    "recommendation": "Chống chỉ định phối hợp"
  },
  {
    "stt": 122,
    "drug1": "Boceprevir",
    "drug2": "Ergometrin",
    "mechanism": "Boceprevir ức chế CYP3A4 mạnh làm giảm chuyển hóa của ergometrin",
    "clinicalImpact": "Tăng nồng độ của ergometrin trong huyết thanh, tăng nguy cơ độc tính (nôn, buồn nôn, hoại tử đầu chi, thiếu máu cục bộ do co thắt mạch…)",
    "recommendation": "Chống chỉ định phối hợp"
  },
  {
    "stt": 123,
    "drug1": "Boceprevir",
    "drug2": "Methylergometrin",
    "mechanism": "Boceprevir ức chế CYP3A4 mạnh làm giảm chuyển hóa của methylergometrin",
    "clinicalImpact": "Tăng nồng độ của methylergometrin trong huyết thanh, tăng nguy cơ độc tính (nôn, buồn nôn, hoại tử đầu chi, thiếu máu cục bộ do co thắt mạch…)",
    "recommendation": "Chống chỉ định phối hợp"
  },
  {
    "stt": 124,
    "drug1": "Boceprevir",
    "drug2": "Ivabradin",
    "mechanism": "Boceprevir ức chế CYP3A4 mạnh làm giảm chuyển hóa của ivabradin",
    "clinicalImpact": "Tăng nồng độ ivabradin trong huyết thanh, tăng nguy cơ kéo dài khoảng QT và chậm nhịp tim",
    "recommendation": "Chống chỉ định phối hợp"
  },
  {
    "stt": 125,
    "drug1": "Bosentan",
    "drug2": "Glibenclamid",
    "mechanism": "Bosentan cảm ứng CYP3A4 và CYP2C9, làm tăng chuyển hóa của glibenclamid. Cơ chế tăng enzym gan chưa rõ",
    "clinicalImpact": "Tăng nguy cơ tăng enzym gan, giảm nồng độ glibenclamid trong huyết thanh,giảm hiệu quả điều trị",
    "recommendation": "Chống chỉ định phối hợp"
  },
  {
    "stt": 126,
    "drug1": "Bosentan",
    "drug2": "Ciclosporin",
    "mechanism": "Ciclosporin ức chế CYP3A4 làm giảm chuyển hóa của bosentan; bosentan cảm ứng CYP3A4 làm tăng chuyển hóa của ciclosporin",
    "clinicalImpact": "Tăng nồng độ của bosentan, tăng nguy cơ tác dụng không mong muốn (đau đầu..); giảm nồng độ của ciclosporin trong huyết thanh, giảm hiệu quả điều trị, tăng nguy cơ thải ghép",
    "recommendation": "Chống chỉ định phối hợp"
  },
  {
    "stt": 127,
    "drug1": "Brivudin",
    "drug2": "Capecitabin",
    "mechanism": "Chất chuyển hóa của brivudin ức chế enzym dihydropyrimidine dehydrogenase (DPD) - enzym chuyển hóa capecitabin",
    "clinicalImpact": "Tăng nồng độ capecitabin trong máu, dẫn đến tăng nguy cơ độc tính",
    "recommendation": "Chống chỉ định phối hợp. Chỉ bắt đầu sử dụng capecitabin sau khi ngừng brivudin ít nhất 4 tuần."
  },
  {
    "stt": 128,
    "drug1": "Brivudin",
    "drug2": "Fluorouracil",
    "mechanism": "Chất chuyển hóa của brivudin ức chế enzym dihydropyrimidine dehydrogenase (DPD) - enzym chuyển hóa fluorouracil",
    "clinicalImpact": "Tăng nồng độ fluoruoracil trong máu, dẫn đến tăng nguy cơ độc tính",
    "recommendation": "Chống chỉ định phối hợp. Chỉ bắt đầu sử dụng fluoruoracil sau khi ngừng brivudin ít nhất 4 tuần."
  },
  {
    "stt": 129,
    "drug1": "Brivudin",
    "drug2": "Tegafur",
    "mechanism": "Chất chuyển hóa của brivudin ức chế enzym dihydropyrimidine dehydrogenase (DPD) - enzym chuyển hóa tegafur",
    "clinicalImpact": "Tăng nồng độ tegafur trong máu, dẫn đến tăng nguy cơ độc tính",
    "recommendation": "Chống chỉ định phối hợp. Chỉ bắt đầu sử dụng tegafur sau khi ngừng brivudin ít nhất 4 tuần."
  },
  {
    "stt": 130,
    "drug1": "Bromocriptin",
    "drug2": "Metoclopram id",
    "mechanism": "Đối kháng tác dụng của nhau",
    "clinicalImpact": "Giảm hiệu quả của cả hai thuốc",
    "recommendation": "Chống chỉ định phối hợp"
  },
  {
    "stt": 131,
    "drug1": "Bromocriptin",
    "drug2": "Sulpirid",
    "mechanism": "Đối kháng tác dụng của nhau",
    "clinicalImpact": "Giảm hiệu quả của cả hai thuốc",
    "recommendation": "Chống chỉ định phối hợp"
  },
  {
    "stt": 132,
    "drug1": "Bupropion",
    "drug2": "Linezolid",
    "mechanism": "Hiệp đồng tác dụng serotonin",
    "clinicalImpact": "Tăng nguy cơ hội chứng serotonin (sốt cao, rối loạn nhận thức, tăng phản xạ, mất phối hợp, rung giật cơ, cứng cơ, co giật, nhịp tim nhanh, tăng huyết áp, tăng thân nhiệt, vã mồ hôi, ảo giác, kích động hoặc bồn chồn…)",
    "recommendation": "1. Cố gắng tránh sử dụng đồng thời linezolid và bupropion. Tốt nhất các thuốc này nên sử dụng cách nhau 2 tuần. Cân nhắc thay đổi sang các thuốc nhóm khác có cùng chỉ định và ít có nguy cơ tương tác hơn. 2. Trong hợp không thể trì hoãn điều trị được 2 tuần, bắt buộc sử dụng dài ngày hoặc khẩn cấp bằng linezolid và không có thuốc khác thay thế, cân bằng lợi ích và nguy cơ xảy ra hội chứng serotonin. Nếu lợi ích vượt trội nguy cơ, vẫn có thể sử dụng đồng thời nhưng cần giám sát chặt chẽ chặt chẽ bệnh nhân, đặc biệt trong tháng đầu tiên sử dụng đồng thời 2 thuốc."
  },
  {
    "stt": 133,
    "drug1": "Bupropion",
    "drug2": "Xanh methylen (sử dụng đường tiêm tĩnh mạch)",
    "mechanism": "Hiệp đồng tác dụng serotonin",
    "clinicalImpact": "Tăng nguy cơ hội chứng serotonin (sốt cao, rối loạn nhận thức, tăng phản xạ, mất phối hợp, rung giật cơ, cứng cơ, co giật, nhịp tim nhanh, tăng huyết áp, tăng thân nhiệt, vã mồ hôi, ảo giác, kích động hoặc bồn chồn…)",
    "recommendation": "1. Cố gắng tránh sử dụng đồng thời xanh methylen và bupropion. Tốt nhất các thuốc này nên sử dụng cách nhau 2 tuần. Cân nhắc thay đổi sang các thuốc nhóm khác có cùng chỉ định và ít có nguy cơ tương tác hơn. 2. Trong hợp không thể trì hoãn điều trị được 2 tuần, bắt buộc sử dụng dài ngày hoặc khẩn cấp bằng xanh methylen và không có thuốc khác thay thế, cân bằng lợi ích và nguy cơ xảy ra hội chứng serotonin. Nếu lợi ích vượt trội nguy cơ, vẫn có thể sử dụng đồng thời nhưng cần giám sát chặt chẽ chặt chẽ bệnh nhân, đặc biệt trong tháng đầu tiên sử dụng đồng thời 2 thuốc."
  },
  {
    "stt": 134,
    "drug1": "Bupropion",
    "drug2": "Furazolidon",
    "mechanism": "Hiệp đồng tác dụng serotonin. Tác dụng ức chế MAO của furazolidon do chất chuyển hóa của thuốc, xuất hiện chậm sau 5 - 10 ngày.",
    "clinicalImpact": "Tăng nguy cơ hội chứng serotonin (sốt cao, rối loạn nhận thức, tăng phản xạ, mất phối hợp, rung giật cơ, cứng cơ, co giật, nhịp tim nhanh, tăng huyết áp, tăng thân nhiệt, vã mồ hôi, ảo giác, kích động hoặc bồn chồn…)",
    "recommendation": "1. Cố gắng tránh sử dụng đồng thời furazolidon và bupropion. Tốt nhất các thuốc này nên sử dụng cách nhau 2 tuần. Cân nhắc thay đổi sang các thuốc nhóm khác có cùng chỉ định và ít có nguy cơ tương tác hơn. 2. Trong hợp không thể trì hoãn điều trị được 2 tuần, bắt buộc sử dụng dài ngày hoặc khẩn cấp bằng furazolidon và không có thuốc khác thay thế, cân bằng lợi ích và nguy cơ xảy ra hội chứng serotonin. Nếu lợi ích vượt trội nguy cơ, vẫn có thể sử dụng đồng thời nhưng cần giám sát chặt chẽ chặt chẽ bệnh nhân, đặc biệt trong tháng đầu tiên sử dụng đồng thời 2 thuốc."
  },
  {
    "stt": 135,
    "drug1": "Calci clorid",
    "drug2": "Ceftriaxon",
    "mechanism": "Hình thành tủa calci - ceftriaxon tại mô phổi và thận khi dùng đồng thời đường tĩnh mạch ở trẻ sơ sinh",
    "clinicalImpact": "Tạo kết tủa tại phổi và thận, có thể dẫn đến tử vong ở trẻ sơ sinh",
    "recommendation": "1. Chống chỉ định sử dụng đồng thời ở trẻ sơ sinh (< 28 ngày tuổi). 2. Ở các đối tượng khác, không trộn lẫn calci và ceftriaxon trong cùng 1 đường truyền, dùng 2 thuốc theo 2 đường truyền tại 2 vị trí khác nhau hoặc dùng lần lượt từng thuốc sau đó khi tráng rửa đường truyền bằng dung môi tương hợp."
  },
  {
    "stt": 136,
    "drug1": "Calci glubionat",
    "drug2": "Ceftriaxon",
    "mechanism": "Hình thành tủa calci - ceftriaxon tại mô phổi và thận khi dùng đồng thời đường tĩnh mạch ở trẻ sơ sinh",
    "clinicalImpact": "Tạo kết tủa tại phổi và thận, có thể dẫn đến tử vong ở trẻ sơ sinh",
    "recommendation": "1. Chống chỉ định sử dụng đồng thời ở trẻ sơ sinh (< 28 ngày tuổi). 2. Ở các đối tượng khác, không trộn lẫn calci và ceftriaxon trong cùng 1 đường truyền, dùng 2 thuốc theo 2 đường truyền tại 2 vị trí khác nhau hoặc dùng lần lượt từng thuốc sau đó khi tráng rửa đường truyền bằng dung môi tương hợp."
  },
  {
    "stt": 137,
    "drug1": "Calci gluconat",
    "drug2": "Ceftriaxon",
    "mechanism": "Hình thành tủa calci - ceftriaxon tại mô phổi và thận khi dùng đồng thời đường tĩnh mạch ở trẻ sơ sinh",
    "clinicalImpact": "Tạo kết tủa tại phổi và thận, có thể dẫn đến tử vong ở trẻ sơ sinh",
    "recommendation": "1. Chống chỉ định sử dụng đồng thời ở trẻ sơ sinh (< 28 ngày tuổi). 2. Ở các đối tượng khác, không trộn lẫn calci và ceftriaxon trong cùng 1 đường truyền, dùng 2 thuốc theo 2 đường truyền tại 2 vị trí khác nhau hoặc dùng lần lượt từng thuốc sau đó khi tráng rửa đường truyền bằng dung môi tương hợp."
  },
  {
    "stt": 138,
    "drug1": "Captopril",
    "drug2": "Sacubitril/val sartan (sacubitril)",
    "mechanism": "Tăng tích lũy bradykinin gây phù mạch",
    "clinicalImpact": "Tăng nguy cơ phù mạch",
    "recommendation": "Chống chỉ định phối hợp. Chỉ bắt đầu sử dụng Sacubitril/valsartan (sacubitril) sau khi ngừng captopril ít nhất 36 giờ."
  },
  {
    "stt": 139,
    "drug1": "Carbamazepin",
    "drug2": "Linezolid",
    "mechanism": "Hiệp đồng tác dụng serotonin",
    "clinicalImpact": "Tăng nguy cơ hội chứng serotonin (sốt cao, rối loạn nhận thức, tăng phản xạ, mất phối hợp, rung giật cơ, cứng cơ, co giật, nhịp tim nhanh, tăng huyết áp, tăng thân nhiệt, vã mồ hôi, ảo giác, kích động hoặc bồn chồn…)",
    "recommendation": "1. Cố gắng tránh sử dụng đồng thời linezolid và carbamazepin. Tốt nhất các thuốc này nên sử dụng cách nhau 2 tuần. Cân nhắc thay đổi sang các thuốc nhóm khác có cùng chỉ định và ít có nguy cơ tương tác hơn. 2. Trong hợp không thể trì hoãn điều trị được 2 tuần, bắt buộc sử dụng dài ngày hoặc khẩn cấp bằng linezolid và không có thuốc khác thay thế, cân bằng lợi ích và nguy cơ xảy ra hội chứng serotonin. Nếu lợi ích vượt trội nguy cơ, vẫn có thể sử dụng đồng thời nhưng cần giám sát chặt chẽ chặt chẽ bệnh nhân, đặc biệt trong tháng đầu tiên sử dụng đồng thời 2 thuốc."
  },
  {
    "stt": 140,
    "drug1": "Carbamazepin",
    "drug2": "Xanh methylen (sử dụng đường tiêm tĩnh mạch)",
    "mechanism": "Hiệp đồng tác dụng serotonin",
    "clinicalImpact": "Tăng nguy cơ hội chứng serotonin (sốt cao, rối loạn nhận thức, tăng phản xạ, mất phối hợp, rung giật cơ, cứng cơ, co giật, nhịp tim nhanh, tăng huyết áp, tăng thân nhiệt, vã mồ hôi, ảo giác, kích động hoặc bồn chồn…)",
    "recommendation": "1. Cố gắng tránh sử dụng đồng thời xanh methylen và carbamazepin. Tốt nhất các thuốc này nên sử dụng cách nhau 2 tuần. Cân nhắc thay đổi sang các thuốc nhóm khác có cùng chỉ định và ít có nguy cơ tương tác hơn. 2. Trong hợp không thể trì hoãn điều trị được 2 tuần, bắt buộc sử dụng dài ngày hoặc khẩn cấp bằng xanh methylen và không có thuốc khác thay thế, cân bằng lợi ích và nguy cơ xảy ra hội chứng serotonin. Nếu lợi ích vượt trội nguy cơ, vẫn có thể sử dụng đồng thời nhưng cần giám sát chặt chẽ chặt chẽ bệnh nhân, đặc biệt trong tháng đầu tiên sử dụng đồng thời 2 thuốc."
  },
  {
    "stt": 141,
    "drug1": "Carbamazepin",
    "drug2": "Praziquantel",
    "mechanism": "Carbamazepin cảm ứng CYP3A4 mạnh làm tăng chuyển hóa của praziquantel",
    "clinicalImpact": "Giảm nồng độ của praziquantel trong huyết thanh, dẫn đến giảm hiệu quả điều trị",
    "recommendation": "Chống chỉ định phối hợp."
  },
  {
    "stt": 142,
    "drug1": "Carbamazepin",
    "drug2": "Rilpivirin",
    "mechanism": "Carbamazepin cảm ứng CYP3A4 mạnh làm tăng chuyển hóa của rilpivirin",
    "clinicalImpact": "Giảm nồng độ của rilpivirin trong huyết thanh, dẫn đến giảm hiệu quả điều trị",
    "recommendation": "Chống chỉ định phối hợp."
  },
  {
    "stt": 143,
    "drug1": "Carbamazepin",
    "drug2": "Voriconazol",
    "mechanism": "Carbamazepin cảm ứng CYP3A4 mạnh làm tăng chuyển hóa của voriconazol",
    "clinicalImpact": "Giảm nồng độ của voriconazol trong huyết thanh, dẫn đến giảm hiệu quả điều trị",
    "recommendation": "Chống chỉ định phối hợp."
  },
  {
    "stt": 144,
    "drug1": "Carbamazepin",
    "drug2": "Daclatasvir",
    "mechanism": "Carbamazepin cảm ứng CYP3A4 mạnh làm tăng chuyển hóa của daclatasvir",
    "clinicalImpact": "Giảm nồng độ của daclatasvir trong huyết thanh, dẫn đến giảm hiệu quả điều trị",
    "recommendation": "Chống chỉ định phối hợp."
  },
  {
    "stt": 145,
    "drug1": "Carbamazepin",
    "drug2": "Delamanid",
    "mechanism": "Carbamazepin cảm ứng CYP3A4 mạnh làm tăng chuyển hóa của delamanid",
    "clinicalImpact": "Giảm nồng độ của delamanid trong huyết thanh, dẫn đến giảm hiệu quả điều trị",
    "recommendation": "Chống chỉ định phối hợp."
  },
  {
    "stt": 146,
    "drug1": "Carbamazepin",
    "drug2": "Grazoprevir/elbasvir",
    "mechanism": "Carbamazepin cảm ứng CYP3A4 mạnh làm tăng chuyển hóa của Grazoprevir/elbas vir",
    "clinicalImpact": "Giảm nồng độ grazoprevir/elbasvir trong huyết thanh, dẫn đến giảm hiệu quả điều trị",
    "recommendation": "Chống chỉ định phối hợp."
  },
  {
    "stt": 147,
    "drug1": "Carbamazepin",
    "drug2": "Ranolazin",
    "mechanism": "Carbamazepin cảm ứng CYP3A4 và P-gp làm tăng chuyển hóa của ranolazin và thải trừ của ranolazin.",
    "clinicalImpact": "Giảm nồng độ ranolazin trong huyết thanh, giảm hiệu quả điều trị",
    "recommendation": "Chống chỉ định phối hợp"
  },
  {
    "stt": 148,
    "drug1": "Carbamazepin",
    "drug2": "Furazolidon",
    "mechanism": "Hiệp đồng tác dụng serotonin. Tác dụng ức chế MAO của furazolidon do chất chuyển hóa của thuốc, xuất hiện chậm sau 5 - 10 ngày.",
    "clinicalImpact": "Tăng nguy cơ hội chứng serotonin (sốt cao, rối loạn nhận thức, tăng phản xạ, mất phối hợp, rung giật cơ, cứng cơ, co giật, nhịp tim nhanh, tăng huyết áp, tăng thân nhiệt, vã mồ hôi, ảo giác, kích động hoặc bồn chồn…)",
    "recommendation": "1. Cố gắng tránh sử dụng đồng thời furazolidon và carbamazepin. Tốt nhất các thuốc này nên sử dụng cách nhau 2 tuần. Cân nhắc thay đổi sang các thuốc nhóm khác có cùng chỉ định và ít có nguy cơ tương tác hơn. 2. Trong hợp không thể trì hoãn điều trị được 2 tuần, bắt buộc sử dụng dài ngày hoặc khẩn cấp bằng furazolidon và không có thuốc khác thay thế, cân bằng lợi ích và nguy cơ xảy ra hội chứng serotonin. Nếu lợi ích vượt trội nguy cơ, vẫn có thể sử dụng đồng thời nhưng cần giám sát chặt chẽ chặt chẽ bệnh nhân, đặc biệt trong tháng đầu tiên sử dụng đồng thời 2 thuốc."
  },
  {
    "stt": 149,
    "drug1": "Carvedilol",
    "drug2": "Colchicin",
    "mechanism": "Carvedilol ức chế P-gp làm giảm thải trừ colchicin.",
    "clinicalImpact": "Tăng nồng độ colchicin trong huyết thanh, tăng nguy cơ tác dụng độc tính (tiêu chảy, nôn, đau bụng, sốt, xuất huyết, giảm cả ba dòng tế bào máu, các dấu hiệu độc tính trên cơ như đau cơ, mỏi cơ hoặc yếu cơ, nước tiểu sẫm màu, dị cảm, trường hợp nặng có thể gây suy đa tạng và tử vong).",
    "recommendation": "1. Chống chỉ định ở bệnh nhân suy gan hoặc suy thận. 2. Ở bệnh nhân chức năng gan, thận bình thường: nên tránh phối hợp. Nếu phối hợp: giảm liều colchicin. Dùng liều tiếp theo của colchicin sau 3 ngày. Theo dõi nguy cơ độc tính của colchicin."
  },
  {
    "stt": 150,
    "drug1": "Ceftriaxon",
    "drug2": "Dung dịch nuôi dưỡng đường tĩnh mạch chứa calci",
    "mechanism": "Hình thành tủa calci - ceftriaxon tại mô phổi và thận khi dùng đồng thời đường tĩnh mạch ở trẻ sơ sinh",
    "clinicalImpact": "Tạo kết tủa tại phổi và thận, có thể dẫn đến tử vong ở trẻ sơ sinh",
    "recommendation": "1. Chống chỉ định sử dụng đồng thời ở trẻ sơ sinh (< 28 ngày tuổi). 2. Ở các đối tượng khác, không trộn lẫn calci và ceftriaxon trong cùng 1 đường truyền, dùng 2 thuốc theo 2 đường truyền tại 2 vị trí khác nhau hoặc dùng lần lượt từng thuốc sau đó khi tráng rửa đường truyền bằng dung môi tương hợp."
  },
  {
    "stt": 151,
    "drug1": "Ceftriaxon",
    "drug2": "Ringer Lactat",
    "mechanism": "Hình thành tủa calci - ceftriaxon tại mô phổi và thận khi dùng đồng thời đường tĩnh mạch ở trẻ sơ sinh",
    "clinicalImpact": "Tạo kết tủa tại phổi và thận, có thể dẫn đến tử vong ở trẻ sơ sinh",
    "recommendation": "1. Chống chỉ định sử dụng đồng thời ở trẻ sơ sinh (< 28 ngày tuổi). 2. Ở các đối tượng khác, không trộn lẫn calci và ceftriaxon trong cùng 1 đường truyền, dùng 2 thuốc theo 2 đường truyền tại 2 vị trí khác nhau hoặc dùng lần lượt từng thuốc sau đó khi tráng rửa đường truyền bằng dung môi tương hợp."
  },
  {
    "stt": 152,
    "drug1": "Celecoxib",
    "drug2": "Ketorolac",
    "mechanism": "Hiệp đồng tác dụng kích ứng đường tiêu hóa",
    "clinicalImpact": "Tăng nguy cơ xuất huyết tiêu hóa nghiêm trọng (sử dụng đồng thời ketorolac với 1 NSAID khác làm tăng nguy cơ xuất huyết tiêu hóa gấp 5 lần so với phối hợp 2 NSAID khác)",
    "recommendation": "Chống chỉ định phối hợp. Cần đặc biệt lưu ý nguy cơ tương tác trong trường hợp giảm đau hậu phẫu."
  },
  {
    "stt": 153,
    "drug1": "Ciclosporin",
    "drug2": "Pitavastatin",
    "mechanism": "Ciclosporin ức chế OATP1B1 làm giảm vận chuyển pitavastatin vào gan.",
    "clinicalImpact": "Tăng nồng độ pitavastatin trong huyết thanh, tăng nguy cơ bệnh cơ hoặc tiêu cơ vân cấp",
    "recommendation": "Chống chỉ định phối hợp. Cân nhắc thay đổi sang các thuốc nhóm khác có cùng chỉ định và ít có nguy cơ tương tác hơn: thay pitavastatin bằng fluvastatin (tối đa 20 mg/ngày), pravastatin (tối đa 20 mg/ngày), rosuvastatin (tối đa 5 mg/ngày)."
  },
  {
    "stt": 154,
    "drug1": "Ciclosporin",
    "drug2": "Lovastatin",
    "mechanism": "Ciclosporin ức chế CYP3A4 làm giảm chuyển hóa của lovastatin; ciclosporin cũng ức chế cả OATP1B1 làm giảm vận chuyển lovastatin vào gan.",
    "clinicalImpact": "Tăng nồng độ lovastatin trong huyết thanh, tăng nguy cơ bệnh cơ hoặc tiêu cơ vân cấp",
    "recommendation": "Chống chỉ định phối hợp. Trong trường hợp bắt buộc sử dụng dẫn chất statin, thay lovastatin bằng fluvastatin (tối đa 20 mg/ngày), pravastatin (tối đa 20 mg/ngày), rosuvastatin (tối đa 5 mg/ngày)."
  },
  {
    "stt": 155,
    "drug1": "Ciclosporin",
    "drug2": "Simvastatin",
    "mechanism": "Ciclosporin ức chế CYP3A4 làm giảm chuyển hóa của simvastatin; ciclosporin cũng ức chế cả OATP1B1 làm giảm vận chuyển simvastatin vào gan.",
    "clinicalImpact": "Tăng nồng độ simvastatin trong huyết thanh, tăng nguy cơ bệnh cơ hoặc tiêu cơ vân cấp",
    "recommendation": "Chống chỉ định phối hợp. Trong trường hợp bắt buộc sử dụng dẫn chất statin, thay simvastatin bằng fluvastatin (tối đa 20 mg/ngày), pravastatin (tối đa 20 mg/ngày), rosuvastatin (tối đa 5 mg/ngày)."
  },
  {
    "stt": 156,
    "drug1": "Ciclosporin",
    "drug2": "Colchicin",
    "mechanism": "Ciclosporin ức chế P-gp làm giảm thải trừ colchicin.",
    "clinicalImpact": "Tăng nồng độ colchicin trong huyết thanh, tăng nguy cơ tác dụng độc tính (tiêu chảy, nôn, đau bụng, sốt, xuất huyết, giảm cả ba dòng tế bào máu, các dấu hiệu độc tính trên cơ như đau cơ, mỏi cơ hoặc yếu cơ, nước tiểu sẫm màu, dị cảm, trường hợp nặng có thể gây suy đa tạng và tử vong).",
    "recommendation": "1. Chống chỉ định ở bệnh nhân suy gan hoặc suy thận. 2. Ở bệnh nhân chức năng gan, thận bình thường: nên tránh phối hợp. Nếu phối hợp: giảm liều colchicin. Dùng liều tiếp theo của colchicin sau 3 ngày. Theo dõi nguy cơ độc tính của colchicin."
  },
  {
    "stt": 157,
    "drug1": "Ciclosporin",
    "drug2": "Lercanidipin",
    "mechanism": "Ciclosporin ức chế CYP3A4 làm giảm chuyển hóa của lercanidipin và ngược lại, lercanidipin ức chế yếu CYP3A4 làm giảm chuyển hóa ciclosporin.",
    "clinicalImpact": "Tăng nồng độ ciclosporin, tăng nồng độ lercanidipin trong huyết thanh, tăng nguy cơ hạ huyết áp nghiêm trọng",
    "recommendation": "Chống chỉ định phối hợp"
  },
  {
    "stt": 158,
    "drug1": "Ciclosporin",
    "drug2": "Grazoprevir/elbasvir",
    "mechanism": "Ciclosporin ức chế OATP1B1/3 làm giảm vận chuyển grazoprevir vào gan.",
    "clinicalImpact": "Tăng nồng độ grazoprevir/elbasvir, tăng nguy cơ tăng ALT",
    "recommendation": "Chống chỉ định phối hợp"
  },
  {
    "stt": 159,
    "drug1": "Cilostazol",
    "drug2": "Domperidon",
    "mechanism": "Hiệp đồng tăng tác dụng",
    "clinicalImpact": "Tăng nguy cơ kéo dài khoảng QT, xoắn đỉnh",
    "recommendation": "Chống chỉ định phối hợp."
  },
  {
    "stt": 160,
    "drug1": "Ciprofloxacin",
    "drug2": "Thioridazin",
    "mechanism": "Hiệp đồng tăng tác dụng",
    "clinicalImpact": "Tăng nguy cơ kéo dài khoảng QT, xoắn đỉnh",
    "recommendation": "1. Chống chỉ định phối hợp ở các bệnh nhân có hội chứng QT kéo dài do di truyền hoặc mắc phải. 2. Trên các đối tượng bệnh nhân khác, tốt nhất nên tránh phối hợp các thuốc này. Trong trường hợp cần thiết phối hợp, cần đánh giá cẩn thận nguy cơ/lợi ích và lượng giá các yếu tố nguy cơ trên từng bệnh nhân, đặc biệt là rối loạn điện giải (hạ kali máu, hạ magie máu, hạ calci máu), nhịp tim chậm, nữ giới trước khi quyết định kê đơn."
  },
  {
    "stt": 161,
    "drug1": "Ciprofloxacin",
    "drug2": "Tizanidin",
    "mechanism": "Ciprofloxacin ức chế CYP1A2 mạnh làm giảm chuyển hóa của tizanidin",
    "clinicalImpact": "Tăng nồng độ của tizanidin trong huyết thanh, tăng nguy cơ tác dụng bất lợi (hạ huyết áp, buồn ngủ, nhịp tim chậm...)",
    "recommendation": "Chống chỉ định phối hợp"
  },
  {
    "stt": 162,
    "drug1": "Ciprofloxacin",
    "drug2": "Duloxetin",
    "mechanism": "Ciprofloxacin ức chế CYP1A2 mạnh làm giảm chuyển hóa của duloxetin",
    "clinicalImpact": "Tăng nồng độ của duloxetin trong huyết thanh, tăng nguy cơ tác dụng không mong muốn (buồn ngủ, hôn mê, hội chứng serotonin, co giật, nôn và nhịp tim nhanh...)",
    "recommendation": "Chống chỉ định phối hợp"
  },
  {
    "stt": 163,
    "drug1": "Ciprofloxacin",
    "drug2": "Domperidon",
    "mechanism": "Hiệp đồng tăng tác dụng",
    "clinicalImpact": "Tăng nguy cơ kéo dài khoảng QT, xoắn đỉnh",
    "recommendation": "Chống chỉ định phối hợp."
  },
  {
    "stt": 164,
    "drug1": "Citalopram",
    "drug2": "Linezolid",
    "mechanism": "Hiệp đồng tác dụng serotonin",
    "clinicalImpact": "Tăng nguy cơ hội chứng serotonin (sốt cao, rối loạn nhận thức, tăng phản xạ, mất phối hợp, rung giật cơ, cứng cơ, co giật, nhịp tim nhanh, tăng huyết áp, tăng thân nhiệt, vã mồ hôi, ảo giác, kích động hoặc bồn chồn…)",
    "recommendation": "1. Cố gắng tránh sử dụng đồng thời linezolid và citalopram. Tốt nhất các thuốc này nên sử dụng cách nhau 2 tuần. Cân nhắc thay đổi sang các thuốc nhóm khác có cùng chỉ định và ít có nguy cơ tương tác hơn. 2. Trong hợp không thể trì hoãn điều trị được 2 tuần, bắt buộc sử dụng dài ngày hoặc khẩn cấp bằng linezolid và không có thuốc khác thay thế, cân bằng lợi ích và nguy cơ xảy ra hội chứng serotonin. Nếu lợi ích vượt trội nguy cơ, vẫn có thể sử dụng đồng thời nhưng cần giám sát chặt chẽ chặt chẽ bệnh nhân, đặc biệt trong tháng đầu tiên sử dụng đồng thời 2 thuốc."
  },
  {
    "stt": 165,
    "drug1": "Citalopram",
    "drug2": "Xanh methylen (sử dụng đường tiêm tĩnh mạch)",
    "mechanism": "Hiệp đồng tác dụng serotonin",
    "clinicalImpact": "Tăng nguy cơ hội chứng serotonin (sốt cao, rối loạn nhận thức, tăng phản xạ, mất phối hợp, rung giật cơ, cứng cơ, co giật, nhịp tim nhanh, tăng huyết áp, tăng thân nhiệt, vã mồ hôi, ảo giác, kích động hoặc bồn chồn…)",
    "recommendation": "1. Cố gắng tránh sử dụng đồng thời xanh methylen và carbamazepin. Tốt nhất các thuốc này nên sử dụng cách nhau 2 tuần. Cân nhắc thay đổi sang các thuốc nhóm khác có cùng chỉ định và ít có nguy cơ tương tác hơn. 2. Trong hợp không thể trì hoãn điều trị được 2 tuần, bắt buộc sử dụng dài ngày hoặc khẩn cấp bằng xanh methylen và không có thuốc khác thay thế, cân bằng lợi ích và nguy cơ xảy ra hội chứng serotonin. Nếu lợi ích vượt trội nguy cơ, vẫn có thể sử dụng đồng thời nhưng cần giám sát chặt chẽ chặt chẽ bệnh nhân, đặc biệt trong tháng đầu tiên sử dụng đồng thời 2 thuốc."
  },
  {
    "stt": 166,
    "drug1": "Citalopram",
    "drug2": "Thioridazin",
    "mechanism": "Hiệp đồng tăng tác dụng",
    "clinicalImpact": "Tăng nguy cơ kéo dài khoảng QT, xoắn đỉnh",
    "recommendation": "1. Chống chỉ định phối hợp ở các bệnh nhân có hội chứng QT kéo dài do di truyền hoặc mắc phải. 2. Trên các đối tượng bệnh nhân khác, tốt nhất nên tránh phối hợp các thuốc này. Trong trường hợp cần thiết phối hợp, cần đánh giá cẩn thận nguy cơ/lợi ích và lượng giá các yếu tố nguy cơ trên từng bệnh nhân, đặc biệt là rối loạn điện giải (hạ kali máu, hạ magie máu, hạ calci máu), nhịp tim chậm, nữ giới trước khi quyết định kê đơn."
  },
  {
    "stt": 167,
    "drug1": "Citalopram",
    "drug2": "Moxifloxacin",
    "mechanism": "Hiệp đồng tăng tác dụng",
    "clinicalImpact": "Tăng nguy cơ kéo dài khoảng QT, xoắn đỉnh",
    "recommendation": "1. Chống chỉ định phối hợp ở các bệnh nhân có hội chứng QT kéo dài do di truyền hoặc mắc phải. 2. Trên các đối tượng bệnh nhân khác, tốt nhất nên tránh phối hợp các thuốc này. Trong trường hợp cần thiết phối hợp, cần đánh giá cẩn thận nguy cơ/lợi ích và lượng giá các yếu tố nguy cơ trên từng bệnh nhân, đặc biệt là rối loạn điện giải (hạ kali máu, hạ magie máu, hạ calci máu), nhịp tim chậm, nữ giới trước khi quyết định kê đơn."
  },
  {
    "stt": 168,
    "drug1": "Citalopram",
    "drug2": "Clorpromaz in",
    "mechanism": "Hiệp đồng tăng tác dụng",
    "clinicalImpact": "Tăng nguy cơ kéo dài khoảng QT, xoắn đỉnh",
    "recommendation": "1. Chống chỉ định phối hợp ở các bệnh nhân có hội chứng QT kéo dài do di truyền hoặc mắc phải. 2. Trên các đối tượng bệnh nhân khác, tốt nhất nên tránh phối hợp các thuốc này. Trong trường hợp cần thiết phối hợp, cần đánh giá cẩn thận nguy cơ/lợi ích và lượng giá các yếu tố nguy cơ trên từng bệnh nhân, đặc biệt là rối loạn điện giải (hạ kali máu, hạ magie máu, hạ calci máu), nhịp tim chậm, nữ giới trước khi quyết định kê đơn."
  },
  {
    "stt": 169,
    "drug1": "Citalopram",
    "drug2": "Domperidon",
    "mechanism": "Hiệp đồng tăng tác dụng",
    "clinicalImpact": "Tăng nguy cơ kéo dài khoảng QT, xoắn đỉnh",
    "recommendation": "Chống chỉ định phối hợp."
  },
  {
    "stt": 170,
    "drug1": "Citalopram",
    "drug2": "Fluconazol",
    "mechanism": "Hiệp đồng tăng tác dụng",
    "clinicalImpact": "Tăng nguy cơ kéo dài khoảng QT, xoắn đỉnh",
    "recommendation": "1. Chống chỉ định phối hợp ở các bệnh nhân có hội chứng QT kéo dài do di truyền hoặc mắc phải. 2. Trên các đối tượng bệnh nhân khác, tốt nhất nên tránh phối hợp các thuốc này. Trong trường hợp cần thiết phối hợp, cần đánh giá cẩn thận nguy cơ/lợi ích và lượng giá các yếu tố nguy cơ trên từng bệnh nhân, đặc biệt là rối loạn điện giải (hạ kali máu, hạ magie máu, hạ calci máu), nhịp tim chậm, nữ giới trước khi quyết định kê đơn."
  },
  {
    "stt": 171,
    "drug1": "Citalopram",
    "drug2": "Haloperidol",
    "mechanism": "Hiệp đồng tăng tác dụng",
    "clinicalImpact": "Tăng nguy cơ kéo dài khoảng QT, xoắn đỉnh",
    "recommendation": "1. Chống chỉ định phối hợp ở các bệnh nhân có hội chứng QT kéo dài do di truyền hoặc mắc phải. 2. Trên các đối tượng bệnh nhân khác, tốt nhất nên tránh phối hợp các thuốc này. Trong trường hợp cần thiết phối hợp, cần đánh giá cẩn thận nguy cơ/lợi ích và lượng giá các yếu tố nguy cơ trên từng bệnh nhân, đặc biệt là rối loạn điện giải (hạ kali máu, hạ magie máu, hạ calci máu), nhịp tim chậm, nữ giới trước khi quyết định kê đơn."
  },
  {
    "stt": 172,
    "drug1": "Citalopram",
    "drug2": "Sotalol",
    "mechanism": "Hiệp đồng tăng tác dụng",
    "clinicalImpact": "Tăng nguy cơ kéo dài khoảng QT, xoắn đỉnh",
    "recommendation": "1. Chống chỉ định phối hợp ở các bệnh nhân có hội chứng QT kéo dài do di truyền hoặc mắc phải. 2. Trên các đối tượng bệnh nhân khác, tốt nhất nên tránh phối hợp các thuốc này. Trong trường hợp cần thiết phối hợp, cần đánh giá cẩn thận nguy cơ/lợi ích và lượng giá các yếu tố nguy cơ trên từng bệnh nhân, đặc biệt là rối loạn điện giải (hạ kali máu, hạ magie máu, hạ calci máu), nhịp tim chậm, nữ giới trước khi quyết định kê đơn."
  },
  {
    "stt": 173,
    "drug1": "Citalopram",
    "drug2": "Furazolidon",
    "mechanism": "Hiệp đồng tác dụng serotonin. Tác dụng ức chế MAO của furazolidon do chất chuyển hóa của thuốc, xuất hiện chậm sau 5 - 10 ngày.",
    "clinicalImpact": "Tăng nguy cơ hội chứng serotonin (sốt cao, rối loạn nhận thức, tăng phản xạ, mất phối hợp, rung giật cơ, cứng cơ, co giật, nhịp tim nhanh, tăng huyết áp, tăng thân nhiệt, vã mồ hôi, ảo giác, kích động hoặc bồn chồn…)",
    "recommendation": "1. Cố gắng tránh sử dụng đồng thời furazolidon và citalopram. Tốt nhất các thuốc này nên sử dụng cách nhau 2 tuần. Cân nhắc thay đổi sang các thuốc nhóm khác có cùng chỉ định và ít có nguy cơ tương tác hơn. 2. Trong hợp không thể trì hoãn điều trị được 2 tuần, bắt buộc sử dụng dài ngày hoặc khẩn cấp bằng furazolidon và không có thuốc khác thay thế, cân bằng lợi ích và nguy cơ xảy ra hội chứng serotonin. Nếu lợi ích vượt trội nguy cơ, vẫn có thể sử dụng đồng thời nhưng cần giám sát chặt chẽ chặt chẽ bệnh nhân, đặc biệt trong tháng đầu tiên sử dụng đồng thời 2 thuốc."
  },
  {
    "stt": 174,
    "drug1": "Citalopram",
    "drug2": "Sparfloxacin",
    "mechanism": "Hiệp đồng tăng tác dụng",
    "clinicalImpact": "Tăng nguy cơ kéo dài khoảng QT, xoắn đỉnh",
    "recommendation": "1. Chống chỉ định phối hợp ở các bệnh nhân có hội chứng QT kéo dài do di truyền hoặc mắc phải. 2. Trên các đối tượng bệnh nhân khác, tốt nhất nên tránh phối hợp các thuốc này. Trong trường hợp cần thiết phối hợp, cần đánh giá cẩn thận nguy cơ/lợi ích và lượng giá các yếu tố nguy cơ trên từng bệnh nhân, đặc biệt là rối loạn điện giải (hạ kali máu, hạ magie máu, hạ calci máu), nhịp tim chậm, nữ giới trước khi quyết định kê đơn."
  },
  {
    "stt": 175,
    "drug1": "Clarithromycin",
    "drug2": "Thioridazin",
    "mechanism": "Hiệp đồng tăng tác dụng",
    "clinicalImpact": "Tăng nguy cơ kéo dài khoảng QT, xoắn đỉnh",
    "recommendation": "1. Chống chỉ định phối hợp ở các bệnh nhân có hội chứng QT kéo dài do di truyền hoặc mắc phải. 2. Trên các đối tượng bệnh nhân khác, tốt nhất nên tránh phối hợp các thuốc này. Trong trường hợp cần thiết phối hợp, cần đánh giá cẩn thận nguy cơ/lợi ích và lượng giá các yếu tố nguy cơ trên từng bệnh nhân, đặc biệt là rối loạn điện giải (hạ kali máu, hạ magie máu, hạ calci máu), nhịp tim chậm, nữ giới trước khi quyết định kê đơn."
  },
  {
    "stt": 176,
    "drug1": "Clarithromycin",
    "drug2": "Fluconazol",
    "mechanism": "Hiệp đồng tăng tác dụng",
    "clinicalImpact": "Tăng nguy cơ kéo dài khoảng QT, xoắn đỉnh",
    "recommendation": "1. Chống chỉ định phối hợp ở các bệnh nhân có hội chứng QT kéo dài do di truyền hoặc mắc phải. 2. Trên các đối tượng bệnh nhân khác, tốt nhất nên tránh phối hợp các thuốc này. Trong trường hợp cần thiết phối hợp, cần đánh giá cẩn thận nguy cơ/lợi ích và lượng giá các yếu tố nguy cơ trên từng bệnh nhân, đặc biệt là rối loạn điện giải (hạ kali máu, hạ magie máu, hạ calci máu), nhịp tim chậm, nữ giới trước khi quyết định kê đơn."
  },
  {
    "stt": 177,
    "drug1": "Clarithromycin",
    "drug2": "Haloperidol",
    "mechanism": "Hiệp đồng tăng tác dụng",
    "clinicalImpact": "Tăng nguy cơ kéo dài khoảng QT, xoắn đỉnh",
    "recommendation": "1. Chống chỉ định phối hợp ở các bệnh nhân có hội chứng QT kéo dài do di truyền hoặc mắc phải. 2. Trên các đối tượng bệnh nhân khác, tốt nhất nên tránh phối hợp các thuốc này. Trong trường hợp cần thiết phối hợp, cần đánh giá cẩn thận nguy cơ/lợi ích và lượng giá các yếu tố nguy cơ trên từng bệnh nhân, đặc biệt là rối loạn điện giải (hạ kali máu, hạ magie máu, hạ calci máu), nhịp tim chậm, nữ giới trước khi quyết định kê đơn."
  },
  {
    "stt": 178,
    "drug1": "Clarithromycin",
    "drug2": "Piperaquin/dihydroarte misinin (piperaquin)",
    "mechanism": "Hiệp đồng tăng tác dụng",
    "clinicalImpact": "Tăng nguy cơ kéo dài khoảng QT, xoắn đỉnh",
    "recommendation": "1. Chống chỉ định phối hợp ở các bệnh nhân có hội chứng QT kéo dài do di truyền hoặc mắc phải. 2. Trên các đối tượng bệnh nhân khác, tốt nhất nên tránh phối hợp các thuốc này. Trong trường hợp cần thiết phối hợp, cần đánh giá cẩn thận nguy cơ/lợi ích và lượng giá các yếu tố nguy cơ trên từng bệnh nhân, đặc biệt là rối loạn điện giải (hạ kali máu, hạ magie máu, hạ calci máu), nhịp tim chậm, nữ giới trước khi quyết định kê đơn."
  },
  {
    "stt": 179,
    "drug1": "Clarithromycin",
    "drug2": "Lovastatin",
    "mechanism": "Clarithromycin ức chế CYP3A4 mạnh làm giảm chuyển hóa của lovastatin",
    "clinicalImpact": "Tăng nồng độ của lovastatin trong huyết thanh, tăng nguy cơ bệnh cơ hoặc tiêu cơ vân cấp",
    "recommendation": "Chống chỉ định phối hợp. Cân nhắc thay đổi sang các thuốc nhóm khác có cùng chỉ định và ít có nguy cơ tương tác hơn: - Trong trường hợp bắt buộc sử dụng kháng sinh macrolid, thay clarithromycin bằng azithromycin HOẶC - Trong trường hợp bắt buộc sử dụng dẫn chất statin, thay lovastatin bằng các dẫn chất statin khác (lưu ý liều pravastatin không vượt quá 40 mg/ngày, fluvastatin không vượt quá 20 mg/ngày, thận trọng khi phối hợp với atorvastatin)."
  },
  {
    "stt": 180,
    "drug1": "Clarithromycin",
    "drug2": "Simvastatin",
    "mechanism": "Clarithromycin ức chế CYP3A4 mạnh làm giảm chuyển hóa của simvastatin",
    "clinicalImpact": "Tăng nồng độ của simvastatin trong huyết thanh, tăng nguy cơ bệnh cơ hoặc tiêu cơ vân cấp",
    "recommendation": "Chống chỉ định phối hợp. Cân nhắc thay đổi sang các thuốc nhóm khác có cùng chỉ định và ít có nguy cơ tương tác hơn: - Trong trường hợp bắt buộc sử dụng kháng sinh macrolid, thay clarithromycin bằng azithromycin HOẶC - Trong trường hợp bắt buộc sử dụng dẫn chất statin, thay simvastatin bằng các dẫn chất statin khác (lưu ý liều pravastatin không vượt quá 40 mg/ngày, fluvastatin không vượt quá 20 mg/ngày, thận trọng khi phối hợp với atorvastatin)."
  },
  {
    "stt": 181,
    "drug1": "Clarithromycin",
    "drug2": "Colchicin",
    "mechanism": "Clarithromycin ức chế mạnh CYP3A4 và ức chế P-gp làm giảm chuyển hóa và thải trừ colchicin.",
    "clinicalImpact": "Tăng nồng độ colchicin trong huyết thanh, tăng nguy cơ tác dụng độc tính (tiêu chảy, nôn, đau bụng, sốt, xuất huyết, giảm cả ba dòng tế bào máu, các dấu hiệu độc tính trên cơ như đau cơ, mỏi cơ hoặc yếu cơ, nước tiểu sẫm màu, dị cảm, trường hợp nặng có thể gây suy đa tạng và tử vong).",
    "recommendation": "1. Chống chỉ định ở bệnh nhân suy gan hoặc suy thận. 2. Ở bệnh nhân chức năng gan, thận bình thường: nên tránh phối hợp. Nếu phối hợp: giảm liều colchicin. Dùng liều tiếp theo của colchicin sau 3 ngày. Theo dõi nguy cơ độc tính của colchicin."
  },
  {
    "stt": 182,
    "drug1": "Clarithromycin",
    "drug2": "Dihydroergot amin",
    "mechanism": "Clarithromycin ức chế CYP3A4 mạnh làm giảm chuyển hóa của dihydroergotamin",
    "clinicalImpact": "Tăng nồng độ của dihydroergotamin trong huyết thanh, tăng nguy cơ độc tính (nôn, buồn nôn, hoại tử đầu chi, thiếu máu cục bộ do co thắt mạch…)",
    "recommendation": "Chống chỉ định phối hợp"
  },
  {
    "stt": 183,
    "drug1": "Clarithromycin",
    "drug2": "Ergotamin",
    "mechanism": "Clarithromycin ức chế CYP3A4 mạnh làm giảm chuyển hóa của ergotamin",
    "clinicalImpact": "Tăng nồng độ của ergotamin trong huyết thanh, tăng nguy cơ độc tính (nôn, buồn nôn, hoại tử đầu chi, thiếu máu cục bộ do co thắt mạch…)",
    "recommendation": "Chống chỉ định phối hợp"
  },
  {
    "stt": 184,
    "drug1": "Clarithromycin",
    "drug2": "Ergometrin",
    "mechanism": "Clarithromycin ức chế CYP3A4 mạnh làm giảm chuyển hóa của ergometrin",
    "clinicalImpact": "Tăng nồng độ của ergometrin trong huyết thanh, tăng nguy cơ độc tính (nôn, buồn nôn, hoại tử đầu chi, thiếu máu cục bộ do co thắt mạch…)",
    "recommendation": "Chống chỉ định phối hợp"
  },
  {
    "stt": 185,
    "drug1": "Clarithromycin",
    "drug2": "Methylergometrin",
    "mechanism": "Clarithromycin ức chế CYP3A4 mạnh làm giảm chuyển hóa của methylergometrin",
    "clinicalImpact": "Tăng nồng độ của methylergometrin trong huyết thanh, tăng nguy cơ độc tính (nôn, buồn nôn, hoại tử đầu chi, thiếu máu cục bộ do co thắt mạch…)",
    "recommendation": "Chống chỉ định phối hợp"
  },
  {
    "stt": 186,
    "drug1": "Clarithromycin",
    "drug2": "Ivabradin",
    "mechanism": "Clarithromycin ức chế CYP3A4 mạnh làm giảm chuyển hóa của ivabradin",
    "clinicalImpact": "Tăng nồng độ ivabradin trong huyết thanh, tăng nguy cơ kéo dài khoảng QT và chậm nhịp tim",
    "recommendation": "Chống chỉ định phối hợp. Cân nhắc thay đổi sang các thuốc nhóm khác có cùng chỉ định và ít có nguy cơ tương tác hơn: Trong trường hợp bắt buộc sử dụng kháng sinh macrolid, thay clarithromycin bằng azithromycin."
  },
  {
    "stt": 187,
    "drug1": "Clarithromycin",
    "drug2": "Ticagrelor",
    "mechanism": "Clarithromycin ức chế CYP3A4 mạnh làm giảm chuyển hóa của ticagrelor",
    "clinicalImpact": "Tăng nồng độ của ticagrelor trong huyết thanh, tăng nguy cơ xuất huyết",
    "recommendation": "Chống chỉ định phối hợp. Cân nhắc thay đổi sang các thuốc nhóm khác có cùng chỉ định và ít có nguy cơ tương tác hơn: Trong trường hợp bắt buộc sử dụng kháng sinh macrolid, thay clarithromycin bằng azithromycin."
  },
  {
    "stt": 188,
    "drug1": "Clarithromycin",
    "drug2": "Ranolazin",
    "mechanism": "Clarithromycin ức chế CYP3A4 mạnh làm giảm chuyển hóa của ranolazin",
    "clinicalImpact": "Tăng nồng độ ranolazin trong huyết thanh, tăng nguy cơ kéo dài khoảng QT",
    "recommendation": "Chống chỉ định phối hợp. Cân nhắc thay đổi sang các thuốc nhóm khác có cùng chỉ định và ít có nguy cơ tương tác hơn: Trong trường hợp bắt buộc sử dụng kháng sinh macrolid, thay clarithromycin bằng azithromycin."
  },
  {
    "stt": 189,
    "drug1": "Clarithromycin",
    "drug2": "Tolvaptan",
    "mechanism": "Clarithromycin ức chế CYP3A4 mạnh làm giảm chuyển hóa của tolvaptan",
    "clinicalImpact": "Tăng nồng độ tolvaptan trong huyết thanh, tăng nguy cơ tác dụng không mong muốn (tăng nồng độ natri huyết thanh, đa niệu, khát nước, giảm thể tích tuần hoàn...)",
    "recommendation": "Chống chỉ định phối hợp. Cân nhắc thay đổi sang các thuốc nhóm khác có cùng chỉ định và ít có nguy cơ tương tác hơn: Trong trường hợp bắt buộc sử dụng kháng sinh macrolid, thay clarithromycin bằng azithromycin."
  },
  {
    "stt": 190,
    "drug1": "Clarithromycin",
    "drug2": "Felodipin",
    "mechanism": "Clarithromycin ức chế CYP3A4 mạnh làm giảm chuyển hóa của felodipin",
    "clinicalImpact": "Tăng nồng độ felodipin, tăng nguy cơ hạ huyết áp nghiêm trọng",
    "recommendation": "Chống chỉ định phối hợp. Cân nhắc thay đổi sang các thuốc nhóm khác có cùng chỉ định và ít có nguy cơ tương tác hơn: Trong trường hợp bắt buộc sử dụng kháng sinh macrolid, thay clarithromycin bằng azithromycin."
  },
  {
    "stt": 191,
    "drug1": "Clarithromycin",
    "drug2": "Lercanidipin",
    "mechanism": "Clarithromycin ức chế CYP3A4 mạnh làm giảm chuyển hóa của lercanidipin",
    "clinicalImpact": "Tăng nồng độ lercanidipin, tăng nguy cơ hạ huyết áp nghiêm trọng",
    "recommendation": "Chống chỉ định phối hợp. Cân nhắc thay đổi sang các thuốc nhóm khác có cùng chỉ định và ít có nguy cơ tương tác hơn: Trong trường hợp bắt buộc sử dụng kháng sinh macrolid, thay clarithromycin bằng azithromycin."
  },
  {
    "stt": 192,
    "drug1": "Clarithromycin",
    "drug2": "Quetiapin",
    "mechanism": "Clarithromycin ức chế CYP3A4 mạnh làm giảm chuyển hóa của quetiapin",
    "clinicalImpact": "Tăng nồng độ của quetiapin, tăng nguy cơ kéo dài khoảng QT",
    "recommendation": "Chống chỉ định phối hợp. Cân nhắc thay đổi sang các thuốc nhóm khác có cùng chỉ định và ít có nguy cơ tương tác hơn: Trong trường hợp bắt buộc sử dụng kháng sinh macrolid, thay clarithromycin bằng azithromycin."
  },
  {
    "stt": 193,
    "drug1": "Clarithromycin",
    "drug2": "Everolimus",
    "mechanism": "Clarithromycin ức chế mạnh CP3A4 làm giảm chuyển hóa của everolimus ở gan, đồng thời, ức chế P-gp làm giảm thải trừ everolimus khỏi cơ thể.",
    "clinicalImpact": "Tăng nồng độ everolimus trong huyết thanh, tăng tác dụng bất lợi liên quan đến ức chế miễn dịch",
    "recommendation": "Chống chỉ định phối hợp"
  },
  {
    "stt": 194,
    "drug1": "Clarithromycin",
    "drug2": "Saquinavir/ritonavir",
    "mechanism": "Clarithromycin ức chế CYP3A4 và P-gp, làm giảm chuyển hóa và thải trừ saquinavir. Saquinavir cũng ức chế CYP3A4 làm giảm chuyển hóa của clarithromycin.",
    "clinicalImpact": "Tăng nồng độ clarithromycin, tăng nồng độ saquinavir, tăng nguy cơ kéo dài khoảng QT và xoắn đỉnh.",
    "recommendation": "1. Chống chỉ định phối hợp ở bệnh nhân có QTc > 450 ms và saquinavir ở dạng phối hợp ritonavir. 2. Trong trường hợp bắt buộc phối hợp, định kỳ đo điện tâm đồ mỗi 3-4 ngày. Nếu QTc > 480 ms hoặc tăng > 20 ms so với ban đầu, ngừng 1 trong 2 hoặc cả 2 thuốc."
  },
  {
    "stt": 195,
    "drug1": "Clarithromycin",
    "drug2": "Sparfloxacin",
    "mechanism": "Hiệp đồng tăng tác dụng",
    "clinicalImpact": "Tăng nguy cơ kéo dài khoảng QT, xoắn đỉnh",
    "recommendation": "1. Chống chỉ định phối hợp ở các bệnh nhân có hội chứng QT kéo dài do di truyền hoặc mắc phải. 2. Trên các đối tượng bệnh nhân khác, tốt nhất nên tránh phối hợp các thuốc này. Trong trường hợp cần thiết phối hợp, cần đánh giá cẩn thận nguy cơ/lợi ích và lượng giá các yếu tố nguy cơ trên từng bệnh nhân, đặc biệt là rối loạn điện giải (hạ kali máu, hạ magie máu, hạ calci máu), nhịp tim chậm, nữ giới trước khi quyết định kê đơn."
  },
  {
    "stt": 196,
    "drug1": "Clarithromycin",
    "drug2": "Domperidon",
    "mechanism": "Clarithromycin ức chế CYP3A4 làm giảm chuyển hóa của domperidon",
    "clinicalImpact": "Tăng nồng độ domperidon trong huyết thanh, tăng nguy cơ kéo dài khoảng QT",
    "recommendation": "Chống chỉ định phối hợp"
  },
  {
    "stt": 197,
    "drug1": "Clidinium",
    "drug2": "Kali clorid (dạng uống giải phóng kéo dài)",
    "mechanism": "Clidinium kháng cholinergic gây tồn lưu hoặc làm tăng thời gian kali qua đường tiêu hóa khi sử dụng đường uống, gây loét đường tiêu hóa",
    "clinicalImpact": "Tăng nguy cơ loét tiêu hóa",
    "recommendation": "1. Tốt nhất nên tránh phối hợp, đặc biệt ở người cao tuổi. Cân nhắc chuyển sang sử dụng kali đường tĩnh mạch. 2. Trong trường hợp bắt buộc sử dụng đồng thời, cân nhắc một số khuyến cáo sau giúp giảm nguy cơ loét tiêu hóa: (1) uống ít nhất 100 mL nước sau khi uống kali, (2) ngồi hoặc đứng thẳng trong ít nhất 5 - 10 phút sau khi uống thuốc."
  },
  {
    "stt": 198,
    "drug1": "Clomipramin",
    "drug2": "Linezolid",
    "mechanism": "Hiệp đồng tác dụng serotonin",
    "clinicalImpact": "Tăng nguy cơ hội chứng serotonin (sốt cao, rối loạn nhận thức, tăng phản xạ, mất phối hợp, rung giật cơ, cứng cơ, co giật, nhịp tim nhanh, tăng huyết áp, tăng thân nhiệt, vã mồ hôi, ảo giác, kích động hoặc bồn chồn…)",
    "recommendation": "1. Cố gắng tránh sử dụng đồng thời linezolid và clomipramin. Tốt nhất các thuốc này nên sử dụng cách nhau 2 tuần. Cân nhắc thay đổi sang các thuốc nhóm khác có cùng chỉ định và ít có nguy cơ tương tác hơn. 2. Trong hợp không thể trì hoãn điều trị được 2 tuần, bắt buộc sử dụng dài ngày hoặc khẩn cấp bằng linezolid và không có thuốc khác thay thế, cân bằng lợi ích và nguy cơ xảy ra hội chứng serotonin. Nếu lợi ích vượt trội nguy cơ, vẫn có thể sử dụng đồng thời nhưng cần giám sát chặt chẽ chặt chẽ bệnh nhân, đặc biệt trong tháng đầu tiên sử dụng đồng thời 2 thuốc."
  },
  {
    "stt": 199,
    "drug1": "Clomipramin",
    "drug2": "Xanh methylen (sử dụng đường tiêm tĩnh mạch)",
    "mechanism": "Hiệp đồng tác dụng serotonin",
    "clinicalImpact": "Tăng nguy cơ hội chứng serotonin (sốt cao, rối loạn nhận thức, tăng phản xạ, mất phối hợp, rung giật cơ, cứng cơ, co giật, nhịp tim nhanh, tăng huyết áp, tăng thân nhiệt, vã mồ hôi, ảo giác, kích động hoặc bồn chồn…)",
    "recommendation": "1. Cố gắng tránh sử dụng đồng thời xanh methylen và pethidin. Tốt nhất các thuốc này nên sử dụng cách nhau 2 tuần. Cân nhắc thay đổi sang các thuốc nhóm khác có cùng chỉ định và ít có nguy cơ tương tác hơn. Trong trường hợp bắt buộc sử dụng opioid, có thể đổi sang các opiod khác không có hoạt tính ức chế thu hồi serotonin (morphin, codein, oxycodon, buprenorphin) 2. Trong hợp không thể trì hoãn điều trị được 2 tuần, bắt buộc sử dụng dài ngày hoặc khẩn cấp bằng xanh methylen và không có thuốc khác thay thế, cân bằng lợi ích và nguy cơ xảy ra hội chứng serotonin. Nếu lợi ích vượt trội nguy cơ, vẫn có thể sử dụng đồng thời nhưng cần giám sát chặt chẽ chặt chẽ bệnh nhân, đặc biệt trong tháng đầu tiên sử dụng đồng thời 2 thuốc."
  },
  {
    "stt": 200,
    "drug1": "Clomipramin",
    "drug2": "Furazolidon",
    "mechanism": "Hiệp đồng tác dụng serotonin. Tác dụng ức chế MAO của furazolidon do chất chuyển hóa của thuốc, xuất hiện chậm sau 5 - 10 ngày.",
    "clinicalImpact": "Tăng nguy cơ hội chứng serotonin (sốt cao, rối loạn nhận thức, tăng phản xạ, mất phối hợp, rung giật cơ, cứng cơ, co giật, nhịp tim nhanh, tăng huyết áp, tăng thân nhiệt, vã mồ hôi, ảo giác, kích động hoặc bồn chồn…)",
    "recommendation": "1. Cố gắng tránh sử dụng đồng thời furazolidon và clomipramin. Tốt nhất các thuốc này nên sử dụng cách nhau 2 tuần. Cân nhắc thay đổi sang các thuốc nhóm khác có cùng chỉ định và ít có nguy cơ tương tác hơn. 2. Trong hợp không thể trì hoãn điều trị được 2 tuần, bắt buộc sử dụng dài ngày hoặc khẩn cấp bằng furazolidon và không có thuốc khác thay thế, cân bằng lợi ích và nguy cơ xảy ra hội chứng serotonin. Nếu lợi ích vượt trội nguy cơ, vẫn có thể sử dụng đồng thời nhưng cần giám sát chặt chẽ chặt chẽ bệnh nhân, đặc biệt trong tháng đầu tiên sử dụng đồng thời 2 thuốc."
  },
  {
    "stt": 201,
    "drug1": "Clonixin",
    "drug2": "Ketorolac",
    "mechanism": "Hiệp đồng tác dụng kích ứng đường tiêu hóa",
    "clinicalImpact": "Tăng nguy cơ xuất huyết tiêu hóa nghiêm trọng (sử dụng đồng thời ketorolac với 1 NSAID khác làm tăng nguy cơ xuất huyết tiêu hóa gấp 5 lần so với phối hợp 2 NSAID khác)",
    "recommendation": "Chống chỉ định phối hợp. Cần đặc biệt lưu ý nguy cơ tương tác trong trường hợp giảm đau hậu phẫu."
  },
  {
    "stt": 202,
    "drug1": "Cloroquin",
    "drug2": "Thioridazin",
    "mechanism": "Hiệp đồng tăng tác dụng",
    "clinicalImpact": "Tăng nguy cơ kéo dài khoảng QT, xoắn đỉnh",
    "recommendation": "1. Chống chỉ định phối hợp ở các bệnh nhân có hội chứng QT kéo dài do di truyền hoặc mắc phải. 2. Trên các đối tượng bệnh nhân khác, tốt nhất nên tránh phối hợp các thuốc này. Trong trường hợp cần thiết phối hợp, cần đánh giá cẩn thận nguy cơ/lợi ích và lượng giá các yếu tố nguy cơ trên từng bệnh nhân, đặc biệt là rối loạn điện giải (hạ kali máu, hạ magie máu, hạ calci máu), nhịp tim chậm, nữ giới trước khi quyết định kê đơn."
  },
  {
    "stt": 203,
    "drug1": "Cloroquin",
    "drug2": "Sparfloxacin",
    "mechanism": "Hiệp đồng tăng tác dụng",
    "clinicalImpact": "Tăng nguy cơ kéo dài khoảng QT, xoắn đỉnh",
    "recommendation": "1. Chống chỉ định phối hợp ở các bệnh nhân có hội chứng QT kéo dài do di truyền hoặc mắc phải. 2. Trên các đối tượng bệnh nhân khác, tốt nhất nên tránh phối hợp các thuốc này. Trong trường hợp cần thiết phối hợp, cần đánh giá cẩn thận nguy cơ/lợi ích và lượng giá các yếu tố nguy cơ trên từng bệnh nhân, đặc biệt là rối loạn điện giải (hạ kali máu, hạ magie máu, hạ calci máu), nhịp tim chậm, nữ giới trước khi quyết định kê đơn."
  },
  {
    "stt": 204,
    "drug1": "Cloroquin",
    "drug2": "Domperidon",
    "mechanism": "Hiệp đồng tăng tác dụng",
    "clinicalImpact": "Tăng nguy cơ kéo dài khoảng QT, xoắn đỉnh",
    "recommendation": "Chống chỉ định phối hợp."
  },
  {
    "stt": 205,
    "drug1": "Clorpromazin",
    "drug2": "Thioridazin",
    "mechanism": "Hiệp đồng tăng tác dụng",
    "clinicalImpact": "Tăng nguy cơ kéo dài khoảng QT, xoắn đỉnh",
    "recommendation": "1. Chống chỉ định phối hợp ở các bệnh nhân có hội chứng QT kéo dài do di truyền hoặc mắc phải. 2. Trên các đối tượng bệnh nhân khác, tốt nhất nên tránh phối hợp các thuốc này. Trong trường hợp cần thiết phối hợp, cần đánh giá cẩn thận nguy cơ/lợi ích và lượng giá các yếu tố nguy cơ trên từng bệnh nhân, đặc biệt là rối loạn điện giải (hạ kali máu, hạ magie máu, hạ calci máu), nhịp tim chậm, nữ giới trước khi quyết định kê đơn."
  },
  {
    "stt": 206,
    "drug1": "Clorpromazin",
    "drug2": "Moxifloxacin",
    "mechanism": "Hiệp đồng tăng tác dụng",
    "clinicalImpact": "Tăng nguy cơ kéo dài khoảng QT, xoắn đỉnh",
    "recommendation": "1. Chống chỉ định phối hợp ở các bệnh nhân có hội chứng QT kéo dài do di truyền hoặc mắc phải. 2. Trên các đối tượng bệnh nhân khác, tốt nhất nên tránh phối hợp các thuốc này. Trong trường hợp cần thiết phối hợp, cần đánh giá cẩn thận nguy cơ/lợi ích và lượng giá các yếu tố nguy cơ trên từng bệnh nhân, đặc biệt là rối loạn điện giải (hạ kali máu, hạ magie máu, hạ calci máu), nhịp tim chậm, nữ giới trước khi quyết định kê đơn."
  },
  {
    "stt": 207,
    "drug1": "Clorpromazin",
    "drug2": "Escitalopram",
    "mechanism": "Hiệp đồng tăng tác dụng",
    "clinicalImpact": "Tăng nguy cơ kéo dài khoảng QT, xoắn đỉnh",
    "recommendation": "1. Chống chỉ định phối hợp ở các bệnh nhân có hội chứng QT kéo dài do di truyền hoặc mắc phải. 2. Trên các đối tượng bệnh nhân khác, tốt nhất nên tránh phối hợp các thuốc này. Trong trường hợp cần thiết phối hợp, cần đánh giá cẩn thận nguy cơ/lợi ích và lượng giá các yếu tố nguy cơ trên từng bệnh nhân, đặc biệt là rối loạn điện giải (hạ kali máu, hạ magie máu, hạ calci máu), nhịp tim chậm, nữ giới trước khi quyết định kê đơn."
  },
  {
    "stt": 208,
    "drug1": "Clorpromazin",
    "drug2": "Haloperidol",
    "mechanism": "Hiệp đồng tăng tác dụng",
    "clinicalImpact": "Tăng nguy cơ kéo dài khoảng QT, xoắn đỉnh",
    "recommendation": "1. Chống chỉ định phối hợp ở các bệnh nhân có hội chứng QT kéo dài do di truyền hoặc mắc phải. 2. Trên các đối tượng bệnh nhân khác, tốt nhất nên tránh phối hợp các thuốc này. Trong trường hợp cần thiết phối hợp, cần đánh giá cẩn thận nguy cơ/lợi ích và lượng giá các yếu tố nguy cơ trên từng bệnh nhân, đặc biệt là rối loạn điện giải (hạ kali máu, hạ magie máu, hạ calci máu), nhịp tim chậm, nữ giới trước khi quyết định kê đơn."
  },
  {
    "stt": 209,
    "drug1": "Clorpromazin",
    "drug2": "Piperaquin/dihydroarte misinin (piperaquin)",
    "mechanism": "Hiệp đồng tăng tác dụng",
    "clinicalImpact": "Tăng nguy cơ kéo dài khoảng QT, xoắn đỉnh",
    "recommendation": "1. Chống chỉ định phối hợp ở các bệnh nhân có hội chứng QT kéo dài do di truyền hoặc mắc phải. 2. Trên các đối tượng bệnh nhân khác, tốt nhất nên tránh phối hợp các thuốc này. Trong trường hợp cần thiết phối hợp, cần đánh giá cẩn thận nguy cơ/lợi ích và lượng giá các yếu tố nguy cơ trên từng bệnh nhân, đặc biệt là rối loạn điện giải (hạ kali máu, hạ magie máu, hạ calci máu), nhịp tim chậm, nữ giới trước khi quyết định kê đơn."
  },
  {
    "stt": 210,
    "drug1": "Clorpromazin",
    "drug2": "Sparfloxacin",
    "mechanism": "Hiệp đồng tăng tác dụng",
    "clinicalImpact": "Tăng nguy cơ kéo dài khoảng QT, xoắn đỉnh",
    "recommendation": "1. Chống chỉ định phối hợp ở các bệnh nhân có hội chứng QT kéo dài do di truyền hoặc mắc phải. 2. Trên các đối tượng bệnh nhân khác, tốt nhất nên tránh phối hợp các thuốc này. Trong trường hợp cần thiết phối hợp, cần đánh giá cẩn thận nguy cơ/lợi ích và lượng giá các yếu tố nguy cơ trên từng bệnh nhân, đặc biệt là rối loạn điện giải (hạ kali máu, hạ magie máu, hạ calci máu), nhịp tim chậm, nữ giới trước khi quyết định kê đơn."
  },
  {
    "stt": 211,
    "drug1": "Clorpromazin",
    "drug2": "Domperidon",
    "mechanism": "Hiệp đồng tăng tác dụng",
    "clinicalImpact": "Tăng nguy cơ kéo dài khoảng QT, xoắn đỉnh",
    "recommendation": "Chống chỉ định phối hợp."
  },
  {
    "stt": 212,
    "drug1": "Colchicin",
    "drug2": "Indinavir +/- ritonavir",
    "mechanism": "Indinavir ức chế CYP3A4 mạnh làm giảm chuyển hóa của colchicin",
    "clinicalImpact": "Tăng nồng độ colchicin trong huyết thanh, tăng nguy cơ tác dụng độc tính (tiêu chảy, nôn, đau bụng, sốt, xuất huyết, giảm cả ba dòng tế bào máu, các dấu hiệu độc tính trên cơ như đau cơ, mỏi cơ hoặc yếu cơ, nước tiểu sẫm màu, dị cảm, trường hợp nặng có thể gây suy đa tạng và tử vong).",
    "recommendation": "1. Chống chỉ định ở bệnh nhân suy gan hoặc suy thận. 2. Ở bệnh nhân chức năng gan, thận bình thường: nên tránh phối hợp. Nếu phối hợp: giảm liều colchicin. Dùng liều tiếp theo của colchicin sau 3 ngày. Theo dõi nguy cơ độc tính của colchicin."
  },
  {
    "stt": 213,
    "drug1": "Colchicin",
    "drug2": "Lopinavir/ri tonavir (ritonavir)",
    "mechanism": "Ritonavir ức chế mạnh CYP3A4 và ức chế P-gp làm giảm chuyển hóa và thải trừ colchicin.",
    "clinicalImpact": "Tăng nồng độ colchicin trong huyết thanh, tăng nguy cơ tác dụng độc tính (tiêu chảy, nôn, đau bụng, sốt, xuất huyết, giảm cả ba dòng tế bào máu, các dấu hiệu độc tính trên cơ như đau cơ, mỏi cơ hoặc yếu cơ, nước tiểu sẫm màu, dị cảm, trường hợp nặng có thể gây suy đa tạng và tử vong).",
    "recommendation": "1. Chống chỉ định ở bệnh nhân suy gan hoặc suy thận. 2. Ở bệnh nhân chức năng gan, thận bình thường: nên tránh phối hợp. Nếu phối hợp: giảm liều colchicin. Dùng liều tiếp theo của colchicin sau 3 ngày. Theo dõi nguy cơ độc tính của colchicin."
  },
  {
    "stt": 214,
    "drug1": "Colchicin",
    "drug2": "Darunavir/ritonavir (ritonavir)",
    "mechanism": "Ritonavir ức chế mạnh CYP3A4 và ức chế P-gp làm giảm chuyển hóa và thải trừ colchicin.",
    "clinicalImpact": "Tăng nồng độ colchicin trong huyết thanh, tăng nguy cơ tác dụng độc tính (tiêu chảy, nôn, đau bụng, sốt, xuất huyết, giảm cả ba dòng tế bào máu, các dấu hiệu độc tính trên cơ như đau cơ, mỏi cơ hoặc yếu cơ, nước tiểu sẫm màu, dị cảm, trường hợp nặng có thể gây suy đa tạng và tử vong).",
    "recommendation": "1. Chống chỉ định ở bệnh nhân suy gan hoặc suy thận. 2. Ở bệnh nhân chức năng gan, thận bình thường: nên tránh phối hợp. Nếu phối hợp: giảm liều colchicin. Dùng liều tiếp theo của colchicin sau 3 ngày. Theo dõi nguy cơ độc tính của colchicin."
  },
  {
    "stt": 215,
    "drug1": "Colchicin",
    "drug2": "Saquinavir +/- ritonavir",
    "mechanism": "Saquinavir ức chế CYP3A4 mạnh làm giảm chuyển hóa của colchicin",
    "clinicalImpact": "Tăng nồng độ colchicin trong huyết thanh, tăng nguy cơ tác dụng độc tính (tiêu chảy, nôn, đau bụng, sốt, xuất huyết, giảm cả ba dòng tế bào máu, các dấu hiệu độc tính trên cơ như đau cơ, mỏi cơ hoặc yếu cơ, nước tiểu sẫm màu, dị cảm, trường hợp nặng có thể gây suy đa tạng và tử vong).",
    "recommendation": "1. Chống chỉ định ở bệnh nhân suy gan hoặc suy thận. 2. Ở bệnh nhân chức năng gan, thận bình thường: nên tránh phối hợp. Nếu phối hợp: giảm liều colchicin. Dùng liều tiếp theo của colchicin sau 3 ngày. Theo dõi nguy cơ độc tính của colchicin."
  },
  {
    "stt": 216,
    "drug1": "Colchicin",
    "drug2": "Itraconazol",
    "mechanism": "Itraconazol ức chế mạnh CYP3A4 và ức chế P-gp làm giảm chuyển hóa và thải trừ colchicin.",
    "clinicalImpact": "Tăng nồng độ colchicin trong huyết thanh, tăng nguy cơ tác dụng độc tính (tiêu chảy, nôn, đau bụng, sốt, xuất huyết, giảm cả ba dòng tế bào máu, các dấu hiệu độc tính trên cơ như đau cơ, mỏi cơ hoặc yếu cơ, nước tiểu sẫm màu, dị cảm, trường hợp nặng có thể gây suy đa tạng và tử vong).",
    "recommendation": "1. Chống chỉ định ở bệnh nhân suy gan hoặc suy thận. 2. Ở bệnh nhân chức năng gan, thận bình thường: nên tránh phối hợp. Nếu phối hợp: giảm liều colchicin. Dùng liều tiếp theo của colchicin sau 3 ngày. Theo dõi nguy cơ độc tính của colchicin."
  },
  {
    "stt": 217,
    "drug1": "Colchicin",
    "drug2": "Posaconazol",
    "mechanism": "Posaconazol ức chế CYP3A4 mạnh làm giảm chuyển hóa của colchicin",
    "clinicalImpact": "Tăng nồng độ colchicin trong huyết thanh, tăng nguy cơ tác dụng độc tính (tiêu chảy, nôn, đau bụng, sốt, xuất huyết, giảm cả ba dòng tế bào máu, các dấu hiệu độc tính trên cơ như đau cơ, mỏi cơ hoặc yếu cơ, nước tiểu sẫm màu, dị cảm, trường hợp nặng có thể gây suy đa tạng và tử vong).",
    "recommendation": "1. Chống chỉ định ở bệnh nhân suy gan hoặc suy thận. 2. Ở bệnh nhân chức năng gan, thận bình thường: nên tránh phối hợp. Nếu phối hợp: giảm liều colchicin. Dùng liều tiếp theo của colchicin sau 3 ngày. Theo dõi nguy cơ độc tính của colchicin."
  },
  {
    "stt": 218,
    "drug1": "Colchicin",
    "drug2": "Voriconazol",
    "mechanism": "Voriconazol ức chế CYP3A4 mạnh làm giảm chuyển hóa của colchicin",
    "clinicalImpact": "Tăng nồng độ colchicin trong huyết thanh, tăng nguy cơ tác dụng độc tính (tiêu chảy, nôn, đau bụng, sốt, xuất huyết, giảm cả ba dòng tế bào máu, các dấu hiệu độc tính trên cơ như đau cơ, mỏi cơ hoặc yếu cơ, nước tiểu sẫm màu, dị cảm, trường hợp nặng có thể gây suy đa tạng và tử vong).",
    "recommendation": "1. Chống chỉ định ở bệnh nhân suy gan hoặc suy thận. 2. Ở bệnh nhân chức năng gan, thận bình thường: nên tránh phối hợp. Nếu phối hợp: giảm liều colchicin. Dùng liều tiếp theo của colchicin sau 3 ngày. Theo dõi nguy cơ độc tính của colchicin."
  },
  {
    "stt": 219,
    "drug1": "Colchicin",
    "drug2": "Roxithromy cin",
    "mechanism": "Roxithromycin ức chế CYP3A4 mạnh làm giảm chuyển hóa của colchicin",
    "clinicalImpact": "Tăng nồng độ colchicin trong huyết thanh, tăng nguy cơ tác dụng độc tính (tiêu chảy, nôn, đau bụng, sốt, xuất huyết, giảm cả ba dòng tế bào máu, các dấu hiệu độc tính trên cơ như đau cơ, mỏi cơ hoặc yếu cơ, nước tiểu sẫm màu, dị cảm, trường hợp nặng có thể gây suy đa tạng và tử vong).",
    "recommendation": "1. Chống chỉ định ở bệnh nhân suy gan hoặc suy thận. 2. Ở bệnh nhân chức năng gan, thận bình thường: nên tránh phối hợp. Nếu phối hợp: giảm liều colchicin. Dùng liều tiếp theo của colchicin sau 3 ngày. Theo dõi nguy cơ độc tính của colchicin."
  },
  {
    "stt": 220,
    "drug1": "Colchicin",
    "drug2": "Erythromyc in",
    "mechanism": "Erythromycin ức chế mạnh CYP3A4 và ức chế P-gp làm giảm chuyển hóa và thải trừ colchicin.",
    "clinicalImpact": "Tăng nồng độ colchicin trong huyết thanh, tăng nguy cơ tác dụng độc tính (tiêu chảy, nôn, đau bụng, sốt, xuất huyết, giảm cả ba dòng tế bào máu, các dấu hiệu độc tính trên cơ như đau cơ, mỏi cơ hoặc yếu cơ, nước tiểu sẫm màu, dị cảm, trường hợp nặng có thể gây suy đa tạng và tử vong).",
    "recommendation": "1. Chống chỉ định ở bệnh nhân suy gan hoặc suy thận. 2. Ở bệnh nhân chức năng gan, thận bình thường: nên tránh phối hợp. Nếu phối hợp: giảm liều colchicin. Dùng liều tiếp theo của colchicin sau 3 ngày. Theo dõi nguy cơ độc tính của colchicin."
  },
  {
    "stt": 221,
    "drug1": "Colchicin",
    "drug2": "Ranolazin",
    "mechanism": "Ranolazin ức chế P-gp làm giảm thải trừ colchicin.",
    "clinicalImpact": "Tăng nồng độ colchicin trong huyết thanh, tăng nguy cơ tác dụng độc tính (tiêu chảy, nôn, đau bụng, sốt, xuất huyết, giảm cả ba dòng tế bào máu, các dấu hiệu độc tính trên cơ như đau cơ, mỏi cơ hoặc yếu cơ, nước tiểu sẫm màu, dị cảm, trường hợp nặng có thể gây suy đa tạng và tử vong).",
    "recommendation": "1. Chống chỉ định ở bệnh nhân suy gan hoặc suy thận. 2. Ở bệnh nhân chức năng gan, thận bình thường: nên tránh phối hợp. Nếu phối hợp: giảm liều colchicin. Dùng liều tiếp theo của colchicin sau 3 ngày. Theo dõi nguy cơ độc tính của colchicin."
  },
  {
    "stt": 222,
    "drug1": "Colchicin",
    "drug2": "Verapamil",
    "mechanism": "Verapamil ức chế P-gp làm giảm thải trừ colchicin.",
    "clinicalImpact": "Tăng nồng độ colchicin trong huyết thanh, tăng nguy cơ tác dụng độc tính (tiêu chảy, nôn, đau bụng, sốt, xuất huyết, giảm cả ba dòng tế bào máu, các dấu hiệu độc tính trên cơ như đau cơ, mỏi cơ hoặc yếu cơ, nước tiểu sẫm màu, dị cảm, trường hợp nặng có thể gây suy đa tạng và tử vong).",
    "recommendation": "1. Chống chỉ định ở bệnh nhân suy gan hoặc suy thận. 2. Ở bệnh nhân chức năng gan, thận bình thường: nên tránh phối hợp. Nếu phối hợp: giảm liều colchicin. Dùng liều tiếp theo của colchicin sau 3 ngày. Theo dõi nguy cơ độc tính của colchicin."
  },
  {
    "stt": 223,
    "drug1": "Colchicin",
    "drug2": "Diltiazem",
    "mechanism": "Diltiazem ức chế P-gp làm giảm thải trừ colchicin.",
    "clinicalImpact": "Tăng nồng độ colchicin trong huyết thanh, tăng nguy cơ tác dụng độc tính (tiêu chảy, nôn, đau bụng, sốt, xuất huyết, giảm cả ba dòng tế bào máu, các dấu hiệu độc tính trên cơ như đau cơ, mỏi cơ hoặc yếu cơ, nước tiểu sẫm màu, dị cảm, trường hợp nặng có thể gây suy đa tạng và tử vong).",
    "recommendation": "1. Chống chỉ định ở bệnh nhân suy gan hoặc suy thận. 2. Ở bệnh nhân chức năng gan, thận bình thường: nên tránh phối hợp. Nếu phối hợp: giảm liều colchicin. Dùng liều tiếp theo của colchicin sau 3 ngày. Theo dõi nguy cơ độc tính của colchicin."
  },
  {
    "stt": 224,
    "drug1": "Colchicin",
    "drug2": "Sunitinib",
    "mechanism": "Sunitinib ức chế P-gp làm giảm thải trừ colchicin.",
    "clinicalImpact": "Tăng nồng độ colchicin trong huyết thanh, tăng nguy cơ tác dụng độc tính (tiêu chảy, nôn, đau bụng, sốt, xuất huyết, giảm cả ba dòng tế bào máu, các dấu hiệu độc tính trên cơ như đau cơ, mỏi cơ hoặc yếu cơ, nước tiểu sẫm màu, dị cảm, trường hợp nặng có thể gây suy đa tạng và tử vong).",
    "recommendation": "1. Chống chỉ định ở bệnh nhân suy gan hoặc suy thận. 2. Ở bệnh nhân chức năng gan, thận bình thường: nên tránh phối hợp. Nếu phối hợp: giảm liều colchicin. Dùng liều tiếp theo của colchicin sau 3 ngày. Theo dõi nguy cơ độc tính của colchicin."
  },
  {
    "stt": 225,
    "drug1": "Colchicin",
    "drug2": "Nilotinib",
    "mechanism": "Nilotinib ức chế P-gp làm giảm thải trừ colchicin.",
    "clinicalImpact": "Tăng nồng độ colchicin trong huyết thanh, tăng nguy cơ tác dụng độc tính (tiêu chảy, nôn, đau bụng, sốt, xuất huyết, giảm cả ba dòng tế bào máu, các dấu hiệu độc tính trên cơ như đau cơ, mỏi cơ hoặc yếu cơ, nước tiểu sẫm màu, dị cảm, trường hợp nặng có thể gây suy đa tạng và tử vong).",
    "recommendation": "1. Chống chỉ định ở bệnh nhân suy gan hoặc suy thận. 2. Ở bệnh nhân chức năng gan, thận bình thường: nên tránh phối hợp. Nếu phối hợp: giảm liều colchicin. Dùng liều tiếp theo của colchicin sau 3 ngày. Theo dõi nguy cơ độc tính của colchicin."
  },
  {
    "stt": 226,
    "drug1": "Dabigatran",
    "drug2": "Itraconazol",
    "mechanism": "Itraconazol ức chế P-gp làm giảm thải trừ dabigatran khỏi cơ thể",
    "clinicalImpact": "Tăng nồng độ dabigatran trong huyết thanh, tăng nguy cơ xuất huyết",
    "recommendation": "Chống chỉ định phối hợp"
  },
  {
    "stt": 227,
    "drug1": "Daclatasvir",
    "drug2": "Rifampicin",
    "mechanism": "Rifampicin cảm ứng CYP3A4 làm tăng chuyển hóa của daclatasvir",
    "clinicalImpact": "Giảm nồng độ của daclatasvir trong huyết thanh, dẫn đến giảm hiệu quả điều trị",
    "recommendation": "Chống chỉ định phối hợp."
  },
  {
    "stt": 228,
    "drug1": "Daclatasvir",
    "drug2": "Enzalutamid",
    "mechanism": "Enzalutamid cảm ứng CYP3A4 làm tăng chuyển hóa của daclatasvir",
    "clinicalImpact": "Giảm nồng độ của daclatasvir trong huyết thanh, dẫn đến giảm hiệu quả điều trị",
    "recommendation": "Chống chỉ định phối hợp."
  },
  {
    "stt": 229,
    "drug1": "Daclatasvir",
    "drug2": "Phenobarbital",
    "mechanism": "Phenobarbital cảm ứng CYP3A4 mạnh làm tăng chuyển hóa của daclatasvir",
    "clinicalImpact": "Giảm nồng độ của daclatasvir trong huyết thanh, dẫn đến giảm hiệu quả điều trị",
    "recommendation": "Chống chỉ định phối hợp."
  },
  {
    "stt": 230,
    "drug1": "Daclatasvir",
    "drug2": "Phenytoin",
    "mechanism": "Phenytoin cảm ứng CYP3A4 mạnh làm tăng chuyển hóa của daclatasvir",
    "clinicalImpact": "Giảm nồng độ của daclatasvir trong huyết thanh, dẫn đến giảm hiệu quả điều trị",
    "recommendation": "Chống chỉ định phối hợp."
  },
  {
    "stt": 231,
    "drug1": "Danazol",
    "drug2": "Simvastatin",
    "mechanism": "Danazol ức chế CYP3A4 làm giảm chuyển hóa của simvastatin",
    "clinicalImpact": "Tăng nồng độ simvastatin trong huyết thanh, tăng nguy cơ bệnh cơ hoặc tiêu cơ vân cấp",
    "recommendation": "Chống chỉ định phối hợp"
  },
  {
    "stt": 232,
    "drug1": "Danazol",
    "drug2": "Lovastatin",
    "mechanism": "Danazol ức chế CYP3A4 làm giảm chuyển hóa của lovastatin",
    "clinicalImpact": "Tăng nồng độ lovastatin trong huyết thanh, tăng nguy cơ bệnh cơ hoặc tiêu cơ vân cấp",
    "recommendation": "Chống chỉ định phối hợp"
  },
  {
    "stt": 233,
    "drug1": "Darunavir/ritonavir",
    "drug2": "Lovastatin",
    "mechanism": "Darunavir/ritonav ir ức chế CYP3A4 mạnh làm giảm chuyển hóa của lovastatin",
    "clinicalImpact": "Tăng nồng độ của lovastatin trong huyết thanh, tăng nguy cơ bệnh cơ hoặc tiêu cơ vân cấp",
    "recommendation": "Chống chỉ định phối hợp. Trong trường hợp bắt buộc sử dụng dẫn chất statin, thay lovastatin bằng các dẫn chất statin khác (ngoại trừ simvastatin), sử dụng liều thấp nhất có hiệu quả, atorvastatin không vượt quá 20 mg/ngày (hoặc 40 mg/ngày theo Hướng dẫn điều trị HIV/AIDS của Bộ Y tế và Tổ chức Y tế Thế giới), pitavastatin không cần hiệu chỉnh liều khi phối hợp."
  },
  {
    "stt": 234,
    "drug1": "Darunavir/ritonavir",
    "drug2": "Simvastatin",
    "mechanism": "Darunavir/ritonav ir ức chế CYP3A4 mạnh làm giảm chuyển hóa của simvastatin",
    "clinicalImpact": "Tăng nồng độ của simvastatin trong huyết thanh, tăng nguy cơ bệnh cơ hoặc tiêu cơ vân cấp",
    "recommendation": "Chống chỉ định phối hợp. Trong trường hợp bắt buộc sử dụng dẫn chất statin, thay simvastatin bằng các dẫn chất statin khác (ngoại trừ lovastatin), sử dụng liều thấp nhất có hiệu quả, atorvastatin không vượt quá 20 mg/ngày (hoặc 40 mg/ngày theo Hướng dẫn điều trị HIV/AIDS của Bộ Y tế và Tổ chức Y tế Thế giới), pitavastatin không cần hiệu chỉnh liều khi phối hợp."
  },
  {
    "stt": 235,
    "drug1": "Darunavir/ritonavir",
    "drug2": "Dihydroergot amin",
    "mechanism": "Darunavir/ritonav ir ức chế CYP3A4 mạnh làm giảm chuyển hóa của dihydroergotamin",
    "clinicalImpact": "Tăng nồng độ của dihydroergotamin trong huyết thanh, tăng nguy cơ độc tính (nôn, buồn nôn, hoại tử đầu chi, thiếu máu cục bộ do co thắt mạch…)",
    "recommendation": "Chống chỉ định phối hợp"
  },
  {
    "stt": 236,
    "drug1": "Darunavir/ritonavir",
    "drug2": "Ergotamin",
    "mechanism": "Darunavir/ritonav ir ức chế CYP3A4 mạnh làm giảm chuyển hóa của ergotamin",
    "clinicalImpact": "Tăng nồng độ của ergotamin trong huyết thanh, tăng nguy cơ độc tính (nôn, buồn nôn, hoại tử đầu chi, thiếu máu cục bộ do co thắt mạch…)",
    "recommendation": "Chống chỉ định phối hợp"
  },
  {
    "stt": 237,
    "drug1": "Darunavir/rit onavir",
    "drug2": "Ergometrin",
    "mechanism": "Darunavir/ritonav ir ức chế CYP3A4 mạnh làm giảm chuyển hóa của ergometrin",
    "clinicalImpact": "Tăng nồng độ của ergometrin trong huyết thanh, tăng nguy cơ độc tính (nôn, buồn nôn, hoại tử đầu chi, thiếu máu cục bộ do co thắt mạch…)",
    "recommendation": "Tốt nhất nên tránh phối hợp. Đối với trường hợp điều trị băng huyết sau sinh, nếu không còn thuốc khác thay thế ở người bệnh đang sử dụng darunavir, sử dụng ergometrin chỉ khi lợi ích vượt trội nguy cơ và sử dụng liều thấp nhất có hiệu quả trong thời gian ngắn nhất."
  },
  {
    "stt": 238,
    "drug1": "Darunavir/rit onavir",
    "drug2": "Methylergometrin",
    "mechanism": "Darunavir/ritonav ir ức chế CYP3A4 mạnh làm giảm chuyển hóa của methylergometrin",
    "clinicalImpact": "Tăng nồng độ của methylergometrin trong huyết thanh, tăng nguy cơ độc tính (nôn, buồn nôn, hoại tử đầu chi, thiếu máu cục bộ do co thắt mạch…)",
    "recommendation": "Tốt nhất nên tránh phối hợp. Đối với trường hợp điều trị băng huyết sau sinh, nếu không còn thuốc khác thay thế ở người bệnh đang sử dụng darunavir, sử dụng methylergometrin chỉ khi lợi ích vượt trội nguy cơ và sử dụng liều thấp nhất có hiệu quả trong thời gian ngắn nhất."
  },
  {
    "stt": 239,
    "drug1": "Darunavir/ritonavir",
    "drug2": "Ivabradin",
    "mechanism": "Darunavir/ritonav ir ức chế CYP3A4 mạnh làm giảm chuyển hóa của ivabradin",
    "clinicalImpact": "Tăng nồng độ ivabradin trong huyết thanh, tăng nguy cơ kéo dài khoảng QT và chậm nhịp tim",
    "recommendation": "Chống chỉ định phối hợp"
  },
  {
    "stt": 240,
    "drug1": "Darunavir/ritonavir",
    "drug2": "Ticagrelor",
    "mechanism": "Darunavir/ritonav ir ức chế CYP3A4 mạnh làm giảm chuyển hóa của ticagrelor",
    "clinicalImpact": "Tăng nồng độ của ticagrelor trong huyết thanh, tăng nguy cơ xuất huyết",
    "recommendation": "Chống chỉ định phối hợp"
  },
  {
    "stt": 241,
    "drug1": "Darunavir/ritonavir",
    "drug2": "Ranolazin",
    "mechanism": "Darunavir/ritonav ir ức chế CYP3A4 mạnh làm giảm chuyển hóa của ranolazin",
    "clinicalImpact": "Tăng nồng độ ranolazin trong huyết thanh, tăng nguy cơ kéo dài khoảng QT",
    "recommendation": "Chống chỉ định phối hợp"
  },
  {
    "stt": 242,
    "drug1": "Darunavir/ritonavir",
    "drug2": "Tolvaptan",
    "mechanism": "Darunavir/ritonav ir ức chế CYP3A4 mạnh làm giảm chuyển hóa của tolvaptan",
    "clinicalImpact": "Tăng nồng độ tolvaptan trong huyết thanh, tăng nguy cơ tác dụng không mong muốn (tăng nồng độ natri huyết thanh, đa niệu, khát nước, giảm thể tích tuần hoàn...)",
    "recommendation": "Chống chỉ định phối hợp"
  },
  {
    "stt": 243,
    "drug1": "Darunavir/ritonavir",
    "drug2": "Felodipin",
    "mechanism": "Darunavir/ritonav ir ức chế CYP3A4 mạnh làm giảm chuyển hóa của felodipin",
    "clinicalImpact": "Tăng nồng độ felodipin, tăng nguy cơ hạ huyết áp nghiêm trọng",
    "recommendation": "Chống chỉ định phối hợp"
  },
  {
    "stt": 244,
    "drug1": "Darunavir/ritonavir",
    "drug2": "Lercanidipin",
    "mechanism": "Darunavir/ritonav ir ức chế CYP3A4 mạnh làm giảm chuyển hóa của lercanidipin",
    "clinicalImpact": "Tăng nồng độ lercanidipin, tăng nguy cơ hạ huyết áp nghiêm trọng",
    "recommendation": "Chống chỉ định phối hợp"
  },
  {
    "stt": 245,
    "drug1": "Darunavir/rit onavir",
    "drug2": "Sildenafil",
    "mechanism": "Darunavir/ritonav ir ức chế CYP3A4 làm giảm chuyển hóa của sildenafil",
    "clinicalImpact": "Tăng nồng độ sildenafil trong huyết thanh, tăng nguy cơ độc tính (hạ huyết áp, ngất, rối loạn thị giác)",
    "recommendation": "1. Chống chỉ định phối hợp trong trường hợp sử dụng sildenafil điều trị tăng áp động mạch phổi. 2. Trong trường hợp sử dụng sildenafil điều trị rối loạn cương dương, liều sildenafil không vượt quá 25 mg mỗi 48 giờ ở người đang sử dụng darunavir."
  },
  {
    "stt": 246,
    "drug1": "Darunavir/rit onavir",
    "drug2": "Quetiapin",
    "mechanism": "Darunavir/ritonav ir ức chế CYP3A4 mạnh làm giảm chuyển hóa của quetiapin",
    "clinicalImpact": "Tăng nồng độ của quetiapin, tăng nguy cơ kéo dài khoảng QT",
    "recommendation": "Tốt nhất nên tránh phối hợp. Trong trường hợp bắt buộc sử dụng darunavir, giảm liều quetiapin còn 1/6 liều so với liều bình thường."
  },
  {
    "stt": 247,
    "drug1": "Darunavir/ritonavir",
    "drug2": "Rifampicin",
    "mechanism": "Rifampicin cảm ứng CYP3A4 làm tăng chuyển hóa của Darunavir/ritonav ir",
    "clinicalImpact": "Giảm nồng độ darunavir trong huyết thanh, giảm hiệu quả điều trị",
    "recommendation": "Chống chỉ định phối hợp"
  },
  {
    "stt": 248,
    "drug1": "Darunavir/ritonavir",
    "drug2": "Grazoprevir/elbasvir",
    "mechanism": "Darunavir/ritonav ir ức chế OATP1B1/3 làm giảm vận chuyển grazoprevir vào gan.",
    "clinicalImpact": "Tăng nồng độ grazoprevir/elbasvir, tăng nguy cơ tăng ALT",
    "recommendation": "Chống chỉ định phối hợp"
  },
  {
    "stt": 249,
    "drug1": "Darunavir/ritonavir",
    "drug2": "Domperidon",
    "mechanism": "Darunavir/ritonav ir ức chế CYP3A4 làm giảm chuyển hóa của domperidon",
    "clinicalImpact": "Tăng nồng độ domperidon trong huyết thanh, tăng nguy cơ kéo dài khoảng QT",
    "recommendation": "Chống chỉ định phối hợp"
  },
  {
    "stt": 250,
    "drug1": "Darunavir/ritonavir (ritonavir)",
    "drug2": "Vardenafil",
    "mechanism": "Ritonavir ức chế CYP3A4 làm giảm chuyển hóa của vardenafil",
    "clinicalImpact": "Tăng nồng độ vardenafil trong huyết thanh, tăng nguy cơ kéo dài khoảng QT",
    "recommendation": "Chống chỉ định phối hợp"
  },
  {
    "stt": 251,
    "drug1": "Darunavir/ritonavir (ritonavir)",
    "drug2": "Propafenon",
    "mechanism": "Ritonavir ức chế chuyển hóa của propafenon qua CYP3A4 và CYP2D6.",
    "clinicalImpact": "Tăng nồng độ, dẫn đến tăng độc tính của propafenon (đặc biệt là loạn nhịp tim).",
    "recommendation": "Chống chỉ định phối hợp."
  },
  {
    "stt": 252,
    "drug1": "Darunavir/ritonavir (ritonavir)",
    "drug2": "Everolimus",
    "mechanism": "Ritonavir ức chế mạnh CP3A4 làm giảm chuyển hóa của everolimus ở gan, đồng thời, ức chế P-gp làm giảm thải trừ everolimus khỏi cơ thể.",
    "clinicalImpact": "Tăng nồng độ everolimus trong huyết thanh, tăng tác dụng bất lợi liên quan đến ức chế miễn dịch",
    "recommendation": "Chống chỉ định phối hợp"
  },
  {
    "stt": 253,
    "drug1": "Darunavir/rit onavir (ritonavir)",
    "drug2": "Voriconazol",
    "mechanism": "Ritonavir cảm ứng CYP2C19 (hoặc ức chế CYP3A4 ở người thiếu hoặc giảm hoạt tính CYP2C19) làm tăng (hoặc giảm) chuyển hóa của voriconazol tùy thuộc từng cá thể (voriconazol là cơ chất của cả CYP3A4 và CYP2C19)",
    "clinicalImpact": "Giảm (hoặc tăng) nồng độ voriconazol.",
    "recommendation": "1. Việc phối hợp voriconazol và ritonavir liều cao (400mg mỗi 12 giờ) làm giảm rõ rệt nồng độ voriconazol, vì vậy, chống chỉ định phối hợp voriconazol với ritonavir ở mức liều này. 2. Việc phối hợp voriconazol với ritonavir liều thấp (100mg mỗi 12 giờ) cũng đã cho thấy làm giảm nồng độ voriconazol mặc dù mức độ ít hơn so với liều cao ritonavir, vì vậy, nên tránh phối hợp thuốc trừ khi lợi ích vượt trội nguy cơ."
  },
  {
    "stt": 254,
    "drug1": "Delamanid",
    "drug2": "Rifampicin",
    "mechanism": "Rifampicin cảm ứng CYP3A4 làm tăng chuyển hóa của delamanid",
    "clinicalImpact": "Giảm nồng độ của delamanid trong huyết thanh, dẫn đến giảm hiệu quả điều trị",
    "recommendation": "Chống chỉ định phối hợp."
  },
  {
    "stt": 255,
    "drug1": "Delamanid",
    "drug2": "Enzalutamid",
    "mechanism": "Enzalutamid cảm ứng CYP3A4 làm tăng chuyển hóa của delamanid",
    "clinicalImpact": "Giảm nồng độ của delamanid trong huyết thanh, dẫn đến giảm hiệu quả điều trị",
    "recommendation": "Chống chỉ định phối hợp."
  },
  {
    "stt": 256,
    "drug1": "Delamanid",
    "drug2": "Phenytoin",
    "mechanism": "Phenytoin cảm ứng CYP3A4 mạnh làm tăng chuyển hóa của delamanid",
    "clinicalImpact": "Giảm nồng độ của delamanid trong huyết thanh, dẫn đến giảm hiệu quả điều trị",
    "recommendation": "Chống chỉ định phối hợp."
  },
  {
    "stt": 257,
    "drug1": "Dexamethason",
    "drug2": "Rilpivirin",
    "mechanism": "Dexamethason cảm ứng CYP3A4 mạnh làm tăng chuyển hóa của rilpivirin",
    "clinicalImpact": "Giảm nồng độ của rilpivirin trong huyết thanh, dẫn đến giảm hiệu quả điều trị",
    "recommendation": "Chống chỉ định phối hợp."
  },
  {
    "stt": 258,
    "drug1": "Dexibuprofen",
    "drug2": "Ketorolac",
    "mechanism": "Hiệp đồng tác dụng kích ứng đường tiêu hóa",
    "clinicalImpact": "Tăng nguy cơ xuất huyết tiêu hóa nghiêm trọng (sử dụng đồng thời ketorolac với 1 NSAID khác làm tăng nguy cơ xuất huyết tiêu hóa gấp 5 lần so với phối hợp 2 NSAID khác)",
    "recommendation": "Chống chỉ định phối hợp. Cần đặc biệt lưu ý nguy cơ tương tác trong trường hợp giảm đau hậu phẫu."
  },
  {
    "stt": 259,
    "drug1": "Dexketoprofen",
    "drug2": "Ketorolac",
    "mechanism": "Hiệp đồng tác dụng kích ứng đường tiêu hóa",
    "clinicalImpact": "Tăng nguy cơ xuất huyết tiêu hóa nghiêm trọng (sử dụng đồng thời ketorolac với 1 NSAID khác làm tăng nguy cơ xuất huyết tiêu hóa gấp 5 lần so với phối hợp 2 NSAID khác)",
    "recommendation": "Chống chỉ định phối hợp. Cần đặc biệt lưu ý nguy cơ tương tác trong trường hợp giảm đau hậu phẫu."
  },
  {
    "stt": 260,
    "drug1": "Dexlansoprazol",
    "drug2": "Rilpivirin",
    "mechanism": "Giảm hấp thu rilpivirin do tăng pH dạ dày",
    "clinicalImpact": "Giảm nồng độ rilpivirin trong huyết thanh, giảm hiệu quả điều trị",
    "recommendation": "Chống chỉ định phối hợp. Trong trường hợp thay thế bằng thuốc kháng H2, sử dụng các thuốc H2 ít nhất 12 giờ trước hoặc 4 giờ sau khi uống rilpivirin."
  },
  {
    "stt": 261,
    "drug1": "Dextromethor phan",
    "drug2": "Linezolid",
    "mechanism": "Hiệp đồng tác dụng serotonin",
    "clinicalImpact": "Tăng nguy cơ hội chứng serotonin (sốt cao, rối loạn nhận thức, tăng phản xạ, mất phối hợp, rung giật cơ, cứng cơ, co giật, nhịp tim nhanh, tăng huyết áp, tăng thân nhiệt, vã mồ hôi, ảo giác, kích động hoặc bồn chồn…)",
    "recommendation": "1. Cố gắng tránh sử dụng đồng thời linezolid và dextromethorphan. Tốt nhất các thuốc này nên sử dụng cách nhau 2 tuần. Cân nhắc thay đổi sang các thuốc nhóm khác có cùng chỉ định và ít có nguy cơ tương tác hơn. Trong trường hợp bắt buộc sử dụng opioid, có thể đổi sang các opiod khác không có hoạt tính ức chế thu hồi serotonin (codein) 2. Trong hợp không thể trì hoãn điều trị được 2 tuần, bắt buộc sử dụng dài ngày hoặc khẩn cấp bằng linezolid và không có thuốc khác thay thế, cân bằng lợi ích và nguy cơ xảy ra hội chứng serotonin. Nếu lợi ích vượt trội nguy cơ, vẫn có thể sử dụng đồng thời nhưng cần giám sát chặt chẽ chặt chẽ bệnh nhân, đặc biệt trong tháng đầu tiên sử dụng đồng thời 2 thuốc."
  },
  {
    "stt": 262,
    "drug1": "Dextromethor phan",
    "drug2": "Xanh methylen (sử dụng đường tiêm tĩnh mạch)",
    "mechanism": "Hiệp đồng tác dụng serotonin",
    "clinicalImpact": "Tăng nguy cơ hội chứng serotonin (sốt cao, rối loạn nhận thức, tăng phản xạ, mất phối hợp, rung giật cơ, cứng cơ, co giật, nhịp tim nhanh, tăng huyết áp, tăng thân nhiệt, vã mồ hôi, ảo giác, kích động hoặc bồn chồn…)",
    "recommendation": "1. Cố gắng tránh sử dụng đồng thời xanh methylen và dextromethorphan. Tốt nhất các thuốc này nên sử dụng cách nhau 2 tuần. Cân nhắc thay đổi sang các thuốc nhóm khác có cùng chỉ định và ít có nguy cơ tương tác hơn. Trong trường hợp bắt buộc sử dụng opioid, có thể đổi sang các opiod khác không có hoạt tính ức chế thu hồi serotonin (codein) 2. Trong hợp không thể trì hoãn điều trị được 2 tuần, bắt buộc sử dụng dài ngày hoặc khẩn cấp bằng xanh methylen và không có thuốc khác thay thế, cân bằng lợi ích và nguy cơ xảy ra hội chứng serotonin. Nếu lợi ích vượt trội nguy cơ, vẫn có thể sử dụng đồng thời nhưng cần giám sát chặt chẽ chặt chẽ bệnh nhân, đặc biệt trong tháng đầu tiên sử dụng đồng thời 2 thuốc."
  },
  {
    "stt": 263,
    "drug1": "Dextromethorp han",
    "drug2": "Paroxetin",
    "mechanism": "Paroxetin ức chế CYP2D6 làm giảm chuyển hóa của dextromethorphan",
    "clinicalImpact": "Tăng nồng độ dextromethorphan, tăng nguy cơ độc tính (nôn, buồn nôn, nhìn mờ, ảo giác) hoặc tăng nguy cơ hội chứng serotonin (sốt cao, rối loạn nhận thức, tăng phản xạ, mất phối hợp, rung giật cơ, cứng cơ, co giật, nhịp tim nhanh, tăng huyết áp, tăng thân nhiệt, vã mồ hôi, ảo giác, kích động hoặc bồn chồn…)",
    "recommendation": "Chống chỉ định phối hợp"
  },
  {
    "stt": 264,
    "drug1": "Dextromethorp han",
    "drug2": "Fluoxetin",
    "mechanism": "Fluoxetin ức chế CYP2D6 làm giảm chuyển hóa của dextromethorphan",
    "clinicalImpact": "Tăng nồng độ dextromethorphan, tăng nguy cơ độc tính (nôn, buồn nôn, nhìn mờ, ảo giác) hoặc tăng nguy cơ hội chứng serotonin (sốt cao, rối loạn nhận thức, tăng phản xạ, mất phối hợp, rung giật cơ, cứng cơ, co giật, nhịp tim nhanh, tăng huyết áp, tăng thân nhiệt, vã mồ hôi, ảo giác, kích động hoặc bồn chồn…)",
    "recommendation": "Chống chỉ định phối hợp"
  },
  {
    "stt": 265,
    "drug1": "Dextromethor phan",
    "drug2": "Furazolidon",
    "mechanism": "Hiệp đồng tác dụng serotonin. Tác dụng ức chế MAO của furazolidon do chất chuyển hóa của thuốc, xuất hiện chậm sau 5 - 10 ngày.",
    "clinicalImpact": "Tăng nguy cơ hội chứng serotonin (sốt cao, rối loạn nhận thức, tăng phản xạ, mất phối hợp, rung giật cơ, cứng cơ, co giật, nhịp tim nhanh, tăng huyết áp, tăng thân nhiệt, vã mồ hôi, ảo giác, kích động hoặc bồn chồn…)",
    "recommendation": "1. Cố gắng tránh sử dụng đồng thời furazolidon và dextromethorphan. Tốt nhất các thuốc này nên sử dụng cách nhau 2 tuần. Cân nhắc thay đổi sang các thuốc nhóm khác có cùng chỉ định và ít có nguy cơ tương tác hơn. Trong trường hợp bắt buộc sử dụng opioid, có thể đổi sang các opiod khác không có hoạt tính ức chế thu hồi serotonin (codein) 2. Trong hợp không thể trì hoãn điều trị được 2 tuần, bắt buộc sử dụng dài ngày hoặc khẩn cấp bằng furazolidon và không có thuốc khác thay thế, cân bằng lợi ích và nguy cơ xảy ra hội chứng serotonin. Nếu lợi ích vượt trội nguy cơ, vẫn có thể sử dụng đồng thời nhưng cần giám sát chặt chẽ chặt chẽ bệnh nhân, đặc biệt trong tháng đầu tiên sử dụng đồng thời 2 thuốc."
  },
  {
    "stt": 266,
    "drug1": "Diclofenac",
    "drug2": "Ketorolac",
    "mechanism": "Hiệp đồng tác dụng kích ứng đường tiêu hóa",
    "clinicalImpact": "Tăng nguy cơ xuất huyết tiêu hóa nghiêm trọng (sử dụng đồng thời ketorolac với 1 NSAID khác làm tăng nguy cơ xuất huyết tiêu hóa gấp 5 lần so với phối hợp 2 NSAID khác)",
    "recommendation": "Chống chỉ định phối hợp. Cần đặc biệt lưu ý nguy cơ tương tác trong trường hợp giảm đau hậu phẫu."
  },
  {
    "stt": 267,
    "drug1": "Dicycloverin",
    "drug2": "Kali clorid (dạng thuốc viên sử dụng đường uống)",
    "mechanism": "Dicycloverin kháng cholinergic gây tồn lưu hoặc làm tăng thời gian kali qua đường tiêu hóa khi sử dụng đường uống, gây loét đường tiêu hóa",
    "clinicalImpact": "Tăng nguy cơ loét đường tiêu hóa",
    "recommendation": "1. Tốt nhất nên tránh phối hợp, đặc biệt ở người cao tuổi. Cân nhắc chuyển sang sử dụng kali đường tĩnh mạch. 2. Trong trường hợp bắt buộc sử dụng đồng thời, cân nhắc một số khuyến cáo sau giúp giảm nguy cơ loét tiêu hóa: (1) uống ít nhất 100 mL nước sau khi uống kali, (2) ngồi hoặc đứng thẳng trong ít nhất 5 - 10 phút sau khi uống thuốc."
  },
  {
    "stt": 268,
    "drug1": "Dihydroergota min",
    "drug2": "Sumatriptan",
    "mechanism": "Hiệp đồng tác dụng co mạch",
    "clinicalImpact": "Co thắt mạch kéo dài",
    "recommendation": "Chống chỉ định phối hợp. Hai thuốc cách nhau ít nhất 24 giờ."
  },
  {
    "stt": 269,
    "drug1": "Dihydroergota min",
    "drug2": "Roxithromyc in",
    "mechanism": "Roxithromycin ức chế CYP3A4 mạnh làm giảm chuyển hóa của dihydroergotamin",
    "clinicalImpact": "Tăng nồng độ của dihydroergotamin trong huyết thanh, tăng nguy cơ độc tính (nôn, buồn nôn, hoại tử đầu chi, thiếu máu cục bộ do co thắt mạch…)",
    "recommendation": "Chống chỉ định phối hợp"
  },
  {
    "stt": 270,
    "drug1": "Dihydroergota min",
    "drug2": "Erythromycin",
    "mechanism": "Erythromycin ức chế CYP3A4 mạnh làm giảm chuyển hóa của dihydroergotamin",
    "clinicalImpact": "Tăng nồng độ của dihydroergotamin trong huyết thanh, tăng nguy cơ độc tính (nôn, buồn nôn, hoại tử đầu chi, thiếu máu cục bộ do co thắt mạch…)",
    "recommendation": "Chống chỉ định phối hợp"
  },
  {
    "stt": 271,
    "drug1": "Dihydroergota min",
    "drug2": "Voriconazol",
    "mechanism": "Voriconazol ức chế CYP3A4 mạnh làm giảm chuyển hóa của dihydroergotamin",
    "clinicalImpact": "Tăng nồng độ của dihydroergotamin trong huyết thanh, tăng nguy cơ độc tính (nôn, buồn nôn, hoại tử đầu chi, thiếu máu cục bộ do co thắt mạch…)",
    "recommendation": "Chống chỉ định phối hợp"
  },
  {
    "stt": 272,
    "drug1": "Dihydroergota min",
    "drug2": "Posaconazol",
    "mechanism": "Posaconazol ức chế CYP3A4 mạnh làm giảm chuyển hóa của dihydroergotamin",
    "clinicalImpact": "Tăng nồng độ của dihydroergotamin trong huyết thanh, tăng nguy cơ độc tính (nôn, buồn nôn, hoại tử đầu chi, thiếu máu cục bộ do co thắt mạch…)",
    "recommendation": "Chống chỉ định phối hợp"
  },
  {
    "stt": 273,
    "drug1": "Dihydroergota min",
    "drug2": "Itraconazol",
    "mechanism": "Itraconazol ức chế CYP3A4 mạnh làm giảm chuyển hóa của dihydroergotamin",
    "clinicalImpact": "Tăng nồng độ của dihydroergotamin trong huyết thanh, tăng nguy cơ độc tính (nôn, buồn nôn, hoại tử đầu chi, thiếu máu cục bộ do co thắt mạch…)",
    "recommendation": "Chống chỉ định phối hợp"
  },
  {
    "stt": 274,
    "drug1": "Dihydroergota min",
    "drug2": "Saquinavir +/- ritonavir",
    "mechanism": "Saquinavir ức chế CYP3A4 mạnh làm giảm chuyển hóa của dihydroergotamin",
    "clinicalImpact": "Tăng nồng độ của dihydroergotamin trong huyết thanh, tăng nguy cơ độc tính (nôn, buồn nôn, hoại tử đầu chi, thiếu máu cục bộ do co thắt mạch…)",
    "recommendation": "Chống chỉ định phối hợp"
  },
  {
    "stt": 275,
    "drug1": "Dihydroergota min",
    "drug2": "Lopinavir/ritonavir",
    "mechanism": "Lopinavir/ritonav ir ức chế CYP3A4 mạnh làm giảm chuyển hóa của dihydroergotamin",
    "clinicalImpact": "Tăng nồng độ của dihydroergotamin trong huyết thanh, tăng nguy cơ độc tính (nôn, buồn nôn, hoại tử đầu chi, thiếu máu cục bộ do co thắt mạch…)",
    "recommendation": "Chống chỉ định phối hợp"
  },
  {
    "stt": 276,
    "drug1": "Dihydroergota min",
    "drug2": "Indinavir +/- ritonavir",
    "mechanism": "Indinavir ức chế CYP3A4 mạnh làm giảm chuyển hóa của dihydroergotamin",
    "clinicalImpact": "Tăng nồng độ của dihydroergotamin trong huyết thanh, tăng nguy cơ độc tính (nôn, buồn nôn, hoại tử đầu chi, thiếu máu cục bộ do co thắt mạch…)",
    "recommendation": "Chống chỉ định phối hợp"
  },
  {
    "stt": 277,
    "drug1": "Diltiazem",
    "drug2": "Ivabradin",
    "mechanism": "Diltiazem ức chế CYP3A4 làm giảm chuyển hóa của ivabradin và hiệp đồng tác dụng làm chậm nhịp tim của ivabradin",
    "clinicalImpact": "Tăng nồng độ ivabradin trong huyết thanh, tăng nguy cơ kéo dài khoảng QT và chậm nhịp tim",
    "recommendation": "Chống chỉ định phối hợp"
  },
  {
    "stt": 278,
    "drug1": "Domperidon",
    "drug2": "Sotalol",
    "mechanism": "Hiệp đồng tăng tác dụng",
    "clinicalImpact": "Tăng nguy cơ kéo dài khoảng QT, xoắn đỉnh",
    "recommendation": "Chống chỉ định phối hợp."
  },
  {
    "stt": 279,
    "drug1": "Domperidon",
    "drug2": "Donepezil",
    "mechanism": "Hiệp đồng tăng tác dụng",
    "clinicalImpact": "Tăng nguy cơ kéo dài khoảng QT, xoắn đỉnh",
    "recommendation": "Chống chỉ định phối hợp."
  },
  {
    "stt": 280,
    "drug1": "Domperidon",
    "drug2": "Haloperidol",
    "mechanism": "Hiệp đồng tăng tác dụng",
    "clinicalImpact": "Tăng nguy cơ kéo dài khoảng QT, xoắn đỉnh",
    "recommendation": "Chống chỉ định phối hợp."
  },
  {
    "stt": 281,
    "drug1": "Domperidon",
    "drug2": "Escitalopram",
    "mechanism": "Hiệp đồng tăng tác dụng",
    "clinicalImpact": "Tăng nguy cơ kéo dài khoảng QT, xoắn đỉnh",
    "recommendation": "Chống chỉ định phối hợp."
  },
  {
    "stt": 282,
    "drug1": "Domperidon",
    "drug2": "Spiramycin",
    "mechanism": "Hiệp đồng tăng tác dụng",
    "clinicalImpact": "Tăng nguy cơ kéo dài khoảng QT, xoắn đỉnh",
    "recommendation": "Chống chỉ định phối hợp."
  },
  {
    "stt": 283,
    "drug1": "Domperidon",
    "drug2": "Moxifloxacin",
    "mechanism": "Hiệp đồng tăng tác dụng",
    "clinicalImpact": "Tăng nguy cơ kéo dài khoảng QT, xoắn đỉnh",
    "recommendation": "Chống chỉ định phối hợp."
  },
  {
    "stt": 284,
    "drug1": "Domperidon",
    "drug2": "Levofloxacin",
    "mechanism": "Hiệp đồng tăng tác dụng",
    "clinicalImpact": "Tăng nguy cơ kéo dài khoảng QT, xoắn đỉnh",
    "recommendation": "Chống chỉ định phối hợp."
  },
  {
    "stt": 285,
    "drug1": "Domperidon",
    "drug2": "Thioridazin",
    "mechanism": "Hiệp đồng tăng tác dụng",
    "clinicalImpact": "Tăng nguy cơ kéo dài khoảng QT, xoắn đỉnh",
    "recommendation": "Chống chỉ định phối hợp."
  },
  {
    "stt": 286,
    "drug1": "Domperidon",
    "drug2": "Methadon",
    "mechanism": "Hiệp đồng tăng tác dụng",
    "clinicalImpact": "Tăng nguy cơ kéo dài khoảng QT, xoắn đỉnh",
    "recommendation": "Chống chỉ định phối hợp."
  },
  {
    "stt": 287,
    "drug1": "Domperidon",
    "drug2": "Sparfloxacin",
    "mechanism": "Hiệp đồng tăng tác dụng",
    "clinicalImpact": "Tăng nguy cơ kéo dài khoảng QT, xoắn đỉnh",
    "recommendation": "Chống chỉ định phối hợp."
  },
  {
    "stt": 288,
    "drug1": "Domperidon",
    "drug2": "Lopinavir/ritonavir",
    "mechanism": "Lopinavir/ritonav ir ức chế CYP3A4 làm giảm chuyển hóa của domperidon",
    "clinicalImpact": "Tăng nồng độ domperidon trong huyết thanh, tăng nguy cơ kéo dài khoảng QT",
    "recommendation": "Chống chỉ định phối hợp"
  },
  {
    "stt": 289,
    "drug1": "Domperidon",
    "drug2": "Saquinavir +/- ritonavir",
    "mechanism": "Saquinavir ức chế CYP3A4 làm giảm chuyển hóa của domperidon",
    "clinicalImpact": "Tăng nồng độ domperidon trong huyết thanh, tăng nguy cơ kéo dài khoảng QT",
    "recommendation": "Chống chỉ định phối hợp"
  },
  {
    "stt": 290,
    "drug1": "Domperidon",
    "drug2": "Indinavir +/- ritonavir",
    "mechanism": "Indinavir ức chế CYP3A4 làm giảm chuyển hóa của domperidon",
    "clinicalImpact": "Tăng nồng độ domperidon trong huyết thanh, tăng nguy cơ kéo dài khoảng QT",
    "recommendation": "Chống chỉ định phối hợp"
  },
  {
    "stt": 291,
    "drug1": "Domperidon",
    "drug2": "Itraconazol",
    "mechanism": "Itraconazol ức chế CYP3A4 làm giảm chuyển hóa của domperidon",
    "clinicalImpact": "Tăng nồng độ domperidon trong huyết thanh, tăng nguy cơ kéo dài khoảng QT",
    "recommendation": "Chống chỉ định phối hợp"
  },
  {
    "stt": 292,
    "drug1": "Domperidon",
    "drug2": "Fluconazol",
    "mechanism": "Hiệp đồng tăng tác dụng",
    "clinicalImpact": "Tăng nguy cơ kéo dài khoảng QT, xoắn đỉnh",
    "recommendation": "Chống chỉ định phối hợp."
  },
  {
    "stt": 293,
    "drug1": "Domperidon",
    "drug2": "Posaconazol",
    "mechanism": "Posaconazol ức chế CYP3A4 làm giảm chuyển hóa của domperidon",
    "clinicalImpact": "Tăng nồng độ domperidon trong huyết thanh, tăng nguy cơ kéo dài khoảng QT",
    "recommendation": "Chống chỉ định phối hợp"
  },
  {
    "stt": 294,
    "drug1": "Domperidon",
    "drug2": "Voriconazol",
    "mechanism": "Voriconazol ức chế CYP3A4 làm giảm chuyển hóa của domperidon",
    "clinicalImpact": "Tăng nồng độ domperidon trong huyết thanh, tăng nguy cơ kéo dài khoảng QT",
    "recommendation": "Chống chỉ định phối hợp"
  },
  {
    "stt": 295,
    "drug1": "Domperidon",
    "drug2": "Erythromycin",
    "mechanism": "Erythromcyin ức chế CYP3A4 làm giảm chuyển hóa của domperidon",
    "clinicalImpact": "Tăng nồng độ domperidon trong huyết thanh, tăng nguy cơ kéo dài khoảng QT",
    "recommendation": "Chống chỉ định phối hợp"
  },
  {
    "stt": 296,
    "drug1": "Domperidon",
    "drug2": "Levomeprom azin",
    "mechanism": "Hiệp đồng tăng tác dụng",
    "clinicalImpact": "Tăng nguy cơ kéo dài khoảng QT, xoắn đỉnh",
    "recommendation": "Chống chỉ định phối hợp."
  },
  {
    "stt": 297,
    "drug1": "Domperidon",
    "drug2": "Levosulpirid",
    "mechanism": "Hiệp đồng tăng tác dụng",
    "clinicalImpact": "Tăng nguy cơ kéo dài khoảng QT, xoắn đỉnh",
    "recommendation": "Chống chỉ định phối hợp."
  },
  {
    "stt": 298,
    "drug1": "Domperidon",
    "drug2": "Ondansetron",
    "mechanism": "Hiệp đồng tăng tác dụng",
    "clinicalImpact": "Tăng nguy cơ kéo dài khoảng QT, xoắn đỉnh",
    "recommendation": "Chống chỉ định phối hợp."
  },
  {
    "stt": 299,
    "drug1": "Domperidon",
    "drug2": "Oxaliplatin",
    "mechanism": "Hiệp đồng tăng tác dụng",
    "clinicalImpact": "Tăng nguy cơ kéo dài khoảng QT, xoắn đỉnh",
    "recommendation": "Chống chỉ định phối hợp."
  },
  {
    "stt": 300,
    "drug1": "Domperidon",
    "drug2": "Propofol",
    "mechanism": "Hiệp đồng tăng tác dụng",
    "clinicalImpact": "Tăng nguy cơ kéo dài khoảng QT, xoắn đỉnh",
    "recommendation": "Chống chỉ định phối hợp."
  },
  {
    "stt": 301,
    "drug1": "Domperidon",
    "drug2": "Roxithromyc in",
    "mechanism": "Hiệp đồng tăng tác dụng",
    "clinicalImpact": "Tăng nguy cơ kéo dài khoảng QT, xoắn đỉnh",
    "recommendation": "Chống chỉ định phối hợp."
  },
  {
    "stt": 302,
    "drug1": "Domperidon",
    "drug2": "Sevofluran",
    "mechanism": "Hiệp đồng tăng tác dụng",
    "clinicalImpact": "Tăng nguy cơ kéo dài khoảng QT, xoắn đỉnh",
    "recommendation": "Chống chỉ định phối hợp."
  },
  {
    "stt": 303,
    "drug1": "Domperidon",
    "drug2": "Sulpirid",
    "mechanism": "Hiệp đồng tăng tác dụng",
    "clinicalImpact": "Tăng nguy cơ kéo dài khoảng QT, xoắn đỉnh",
    "recommendation": "Chống chỉ định phối hợp."
  },
  {
    "stt": 304,
    "drug1": "Donepezil",
    "drug2": "Thioridazin",
    "mechanism": "Hiệp đồng tăng tác dụng",
    "clinicalImpact": "Tăng nguy cơ kéo dài khoảng QT, xoắn đỉnh",
    "recommendation": "1. Chống chỉ định phối hợp ở các bệnh nhân có hội chứng QT kéo dài do di truyền hoặc mắc phải. 2. Trên các đối tượng bệnh nhân khác, tốt nhất nên tránh phối hợp các thuốc này. Trong trường hợp cần thiết phối hợp, cần đánh giá cẩn thận nguy cơ/lợi ích và lượng giá các yếu tố nguy cơ trên từng bệnh nhân, đặc biệt là rối loạn điện giải (hạ kali máu, hạ magie máu, hạ calci máu), nhịp tim chậm, nữ giới trước khi quyết định kê đơn."
  },
  {
    "stt": 305,
    "drug1": "Donepezil",
    "drug2": "Fluconazol",
    "mechanism": "Hiệp đồng tăng tác dụng",
    "clinicalImpact": "Tăng nguy cơ kéo dài khoảng QT, xoắn đỉnh",
    "recommendation": "1. Chống chỉ định phối hợp ở các bệnh nhân có hội chứng QT kéo dài do di truyền hoặc mắc phải. 2. Trên các đối tượng bệnh nhân khác, tốt nhất nên tránh phối hợp các thuốc này. Trong trường hợp cần thiết phối hợp, cần đánh giá cẩn thận nguy cơ/lợi ích và lượng giá các yếu tố nguy cơ trên từng bệnh nhân, đặc biệt là rối loạn điện giải (hạ kali máu, hạ magie máu, hạ calci máu), nhịp tim chậm, nữ giới trước khi quyết định kê đơn."
  },
  {
    "stt": 306,
    "drug1": "Donepezil",
    "drug2": "Sparfloxacin",
    "mechanism": "Hiệp đồng tăng tác dụng",
    "clinicalImpact": "Tăng nguy cơ kéo dài khoảng QT, xoắn đỉnh",
    "recommendation": "1. Chống chỉ định phối hợp ở các bệnh nhân có hội chứng QT kéo dài do di truyền hoặc mắc phải. 2. Trên các đối tượng bệnh nhân khác, tốt nhất nên tránh phối hợp các thuốc này. Trong trường hợp cần thiết phối hợp, cần đánh giá cẩn thận nguy cơ/lợi ích và lượng giá các yếu tố nguy cơ trên từng bệnh nhân, đặc biệt là rối loạn điện giải (hạ kali máu, hạ magie máu, hạ calci máu), nhịp tim chậm, nữ giới trước khi quyết định kê đơn."
  },
  {
    "stt": 307,
    "drug1": "Doxycyclin",
    "drug2": "Tretinoin",
    "mechanism": "Hiệp đồng tăng độc tính",
    "clinicalImpact": "Tăng nguy cơ tăng áp nội sọ lành tính (phù gai thị, đau đầu, buồn nôn và nôn, và rối loạn thị giác)",
    "recommendation": "Chống chỉ định phối hợp"
  },
  {
    "stt": 308,
    "drug1": "Doxycyclin",
    "drug2": "Isotretinoin",
    "mechanism": "Hiệp đồng tăng độc tính",
    "clinicalImpact": "Tăng nguy cơ tăng áp nội sọ lành tính (phù gai thị, đau đầu, buồn nôn và nôn, và rối loạn thị giác)",
    "recommendation": "Chống chỉ định phối hợp"
  },
  {
    "stt": 309,
    "drug1": "Doxylamin",
    "drug2": "Linezolid",
    "mechanism": "Hiệp đồng tác dụng serotonin",
    "clinicalImpact": "Tăng nguy cơ hội chứng serotonin (sốt cao, rối loạn nhận thức, tăng phản xạ, mất phối hợp, rung giật cơ, cứng cơ, co giật, nhịp tim nhanh, tăng huyết áp, tăng thân nhiệt, vã mồ hôi, ảo giác, kích động hoặc bồn chồn…)",
    "recommendation": "1. Cố gắng tránh sử dụng đồng thời linezolid và doxylamin. Tốt nhất các thuốc này nên sử dụng cách nhau 2 tuần. Cân nhắc thay đổi sang các thuốc nhóm khác có cùng chỉ định và ít có nguy cơ tương tác hơn. 2. Trong hợp không thể trì hoãn điều trị được 2 tuần, bắt buộc sử dụng dài ngày hoặc khẩn cấp bằng linezolid và không có thuốc khác thay thế, cân bằng lợi ích và nguy cơ xảy ra hội chứng serotonin. Nếu lợi ích vượt trội nguy cơ, vẫn có thể sử dụng đồng thời nhưng cần giám sát chặt chẽ chặt chẽ bệnh nhân, đặc biệt trong tháng đầu tiên sử dụng đồng thời 2 thuốc."
  },
  {
    "stt": 310,
    "drug1": "Doxylamin",
    "drug2": "Xanh methylen (sử dụng đường tiêm tĩnh mạch)",
    "mechanism": "Hiệp đồng tác dụng serotonin",
    "clinicalImpact": "Tăng nguy cơ hội chứng serotonin (sốt cao, rối loạn nhận thức, tăng phản xạ, mất phối hợp, rung giật cơ, cứng cơ, co giật, nhịp tim nhanh, tăng huyết áp, tăng thân nhiệt, vã mồ hôi, ảo giác, kích động hoặc bồn chồn…)",
    "recommendation": "1. Cố gắng tránh sử dụng đồng thời xanh methylen và carbamazepin. Tốt nhất các thuốc này nên sử dụng cách nhau 2 tuần. Cân nhắc thay đổi sang các thuốc nhóm khác có cùng chỉ định và ít có nguy cơ tương tác hơn. 2. Trong hợp không thể trì hoãn điều trị được 2 tuần, bắt buộc sử dụng dài ngày hoặc khẩn cấp bằng xanh methylen và không có thuốc khác thay thế, cân bằng lợi ích và nguy cơ xảy ra hội chứng serotonin. Nếu lợi ích vượt trội nguy cơ, vẫn có thể sử dụng đồng thời nhưng cần giám sát chặt chẽ chặt chẽ bệnh nhân, đặc biệt trong tháng đầu tiên sử dụng đồng thời 2 thuốc."
  },
  {
    "stt": 311,
    "drug1": "Doxylamin",
    "drug2": "Furazolidon",
    "mechanism": "Hiệp đồng tác dụng serotonin. Tác dụng ức chế MAO của furazolidon do chất chuyển hóa của thuốc, xuất hiện chậm sau 5 - 10 ngày.",
    "clinicalImpact": "Tăng nguy cơ hội chứng serotonin (sốt cao, rối loạn nhận thức, tăng phản xạ, mất phối hợp, rung giật cơ, cứng cơ, co giật, nhịp tim nhanh, tăng huyết áp, tăng thân nhiệt, vã mồ hôi, ảo giác, kích động hoặc bồn chồn…)",
    "recommendation": "1. Cố gắng tránh sử dụng đồng thời furazolidon và doxylamin. Tốt nhất các thuốc này nên sử dụng cách nhau 2 tuần. Cân nhắc thay đổi sang các thuốc nhóm khác có cùng chỉ định và ít có nguy cơ tương tác hơn. 2. Trong hợp không thể trì hoãn điều trị được 2 tuần, bắt buộc sử dụng dài ngày hoặc khẩn cấp bằng furazolidon và không có thuốc khác thay thế, cân bằng lợi ích và nguy cơ xảy ra hội chứng serotonin. Nếu lợi ích vượt trội nguy cơ, vẫn có thể sử dụng đồng thời nhưng cần giám sát chặt chẽ chặt chẽ bệnh nhân, đặc biệt trong tháng đầu tiên sử dụng đồng thời 2 thuốc."
  },
  {
    "stt": 312,
    "drug1": "Duloxetin",
    "drug2": "Linezolid",
    "mechanism": "Hiệp đồng tác dụng serotonin",
    "clinicalImpact": "Tăng nguy cơ hội chứng serotonin (sốt cao, rối loạn nhận thức, tăng phản xạ, mất phối hợp, rung giật cơ, cứng cơ, co giật, nhịp tim nhanh, tăng huyết áp, tăng thân nhiệt, vã mồ hôi, ảo giác, kích động hoặc bồn chồn…)",
    "recommendation": "1. Cố gắng tránh sử dụng đồng thời linezolid và duloxetin. Tốt nhất các thuốc này nên sử dụng cách nhau 2 tuần. Cân nhắc thay đổi sang các thuốc nhóm khác có cùng chỉ định và ít có nguy cơ tương tác hơn. 2. Trong hợp không thể trì hoãn điều trị được 2 tuần, bắt buộc sử dụng dài ngày hoặc khẩn cấp bằng linezolid và không có thuốc khác thay thế, cân bằng lợi ích và nguy cơ xảy ra hội chứng serotonin. Nếu lợi ích vượt trội nguy cơ, vẫn có thể sử dụng đồng thời nhưng cần giám sát chặt chẽ chặt chẽ bệnh nhân, đặc biệt trong tháng đầu tiên sử dụng đồng thời 2 thuốc."
  },
  {
    "stt": 313,
    "drug1": "Duloxetin",
    "drug2": "Xanh methylen (sử dụng đường tiêm tĩnh mạch)",
    "mechanism": "Hiệp đồng tác dụng serotonin",
    "clinicalImpact": "Tăng nguy cơ hội chứng serotonin (sốt cao, rối loạn nhận thức, tăng phản xạ, mất phối hợp, rung giật cơ, cứng cơ, co giật, nhịp tim nhanh, tăng huyết áp, tăng thân nhiệt, vã mồ hôi, ảo giác, kích động hoặc bồn chồn…)",
    "recommendation": "1. Cố gắng tránh sử dụng đồng thời xanh methylen và duloxetin. Tốt nhất các thuốc này nên sử dụng cách nhau 2 tuần. Cân nhắc thay đổi sang các thuốc nhóm khác có cùng chỉ định và ít có nguy cơ tương tác hơn. 2. Trong hợp không thể trì hoãn điều trị được 2 tuần, bắt buộc sử dụng dài ngày hoặc khẩn cấp bằng xanh methylen và không có thuốc khác thay thế, cân bằng lợi ích và nguy cơ xảy ra hội chứng serotonin. Nếu lợi ích vượt trội nguy cơ, vẫn có thể sử dụng đồng thời nhưng cần giám sát chặt chẽ chặt chẽ bệnh nhân, đặc biệt trong tháng đầu tiên sử dụng đồng thời 2 thuốc."
  },
  {
    "stt": 314,
    "drug1": "Duloxetin",
    "drug2": "Fluvoxamin",
    "mechanism": "Fluvoxamin ức chế CYP1A2 mạnh làm giảm chuyển hóa của duloxetin",
    "clinicalImpact": "Tăng nồng độ của duloxetin trong huyết thanh, tăng nguy cơ tác dụng không mong muốn (buồn ngủ, hôn mê, hội chứng serotonin, co giật, nôn và nhịp tim nhanh...)",
    "recommendation": "Chống chỉ định phối hợp"
  },
  {
    "stt": 315,
    "drug1": "Duloxetin",
    "drug2": "Furazolidon",
    "mechanism": "Hiệp đồng tác dụng serotonin. Tác dụng ức chế MAO của furazolidon do chất chuyển hóa của thuốc, xuất hiện chậm sau 5 - 10 ngày.",
    "clinicalImpact": "Tăng nguy cơ hội chứng serotonin (sốt cao, rối loạn nhận thức, tăng phản xạ, mất phối hợp, rung giật cơ, cứng cơ, co giật, nhịp tim nhanh, tăng huyết áp, tăng thân nhiệt, vã mồ hôi, ảo giác, kích động hoặc bồn chồn…)",
    "recommendation": "1. Cố gắng tránh sử dụng đồng thời furazolidon và duloxetin. Tốt nhất các thuốc này nên sử dụng cách nhau 2 tuần. Cân nhắc thay đổi sang các thuốc nhóm khác có cùng chỉ định và ít có nguy cơ tương tác hơn. 2. Trong hợp không thể trì hoãn điều trị được 2 tuần, bắt buộc sử dụng dài ngày hoặc khẩn cấp bằng furazolidon và không có thuốc khác thay thế, cân bằng lợi ích và nguy cơ xảy ra hội chứng serotonin. Nếu lợi ích vượt trội nguy cơ, vẫn có thể sử dụng đồng thời nhưng cần giám sát chặt chẽ chặt chẽ bệnh nhân, đặc biệt trong tháng đầu tiên sử dụng đồng thời 2 thuốc."
  },
  {
    "stt": 316,
    "drug1": "Efavirenz",
    "drug2": "Grazoprevir/elbasvir",
    "mechanism": "Efavirenz cảm ứng CYP3A4 làm tăng chuyển hóa của Grazoprevir/elbas vir",
    "clinicalImpact": "Giảm nồng độ grazoprevir/elbasvir trong huyết thanh, dẫn đến giảm hiệu quả điều trị",
    "recommendation": "Chống chỉ định phối hợp."
  },
  {
    "stt": 317,
    "drug1": "Efavirenz",
    "drug2": "Voriconazol",
    "mechanism": "Efavirenz cảm ứng CYP3A4 làm tăng chuyển hóa của voriconazol; voriconazol ức chế CYP3A4 làm giảm chuyển hóa của efavirenz",
    "clinicalImpact": "Giảm nồng độ voriconazol, tăng nồng độ efavirenz trong huyết thanh, tăng nguy cơ kéo dài khoảng QT",
    "recommendation": "1. Chống chỉ định với liều efavirenz trên 400 mg/ngày. 2. Voriconazol có thể phối hợp efavirenz khi tăng liều duy trì của voriconazol lên 400 mg mỗi 12 giờ và giảm liều của efavirenz còn 300 mg mỗi 24 giờ. Khi ngừng sử dụng voriconazol, có thể quay lại sử dụng liều ban đầu efavirenz."
  },
  {
    "stt": 318,
    "drug1": "Eltrombopag",
    "drug2": "Grazoprevir/elbasvir",
    "mechanism": "Eltrombopag ức chế OATP1B1/3 làm giảm vận chuyển grazoprevir vào gan.",
    "clinicalImpact": "Tăng nồng độ grazoprevir/elbasvir, tăng nguy cơ tăng ALT",
    "recommendation": "Chống chỉ định phối hợp"
  },
  {
    "stt": 319,
    "drug1": "Enalapril",
    "drug2": "Sacubitril/val sartan (sacubitril)",
    "mechanism": "Tăng tích lũy bradykinin gây phù mạch",
    "clinicalImpact": "Tăng nguy cơ phù mạch",
    "recommendation": "Chống chỉ định phối hợp. Chỉ bắt đầu sử dụng Sacubitril/valsartan (sacubitril) sau khi ngừng enalapril ít nhất 36 giờ."
  },
  {
    "stt": 320,
    "drug1": "Enzalutamid",
    "drug2": "Grazoprevir/elbasvir",
    "mechanism": "Enzalutamid cảm ứng CYP3A4 làm tăng chuyển hóa của Grazoprevir/elbas vir",
    "clinicalImpact": "Giảm nồng độ grazoprevir/elbasvir trong huyết thanh, dẫn đến giảm hiệu quả điều trị",
    "recommendation": "Chống chỉ định phối hợp."
  },
  {
    "stt": 321,
    "drug1": "Ephedrin (sử dụng đường uống)",
    "drug2": "Xanh methylen (sử dụng đường tiêm tĩnh mạch)",
    "mechanism": "Tăng tích lũy noradrenalin (norepinephrin)",
    "clinicalImpact": "Tăng nguy cơ xuất hiện cơn tăng huyết áp (đau đầu, đánh trống ngực, cứng cổ, tăng huyết áp)",
    "recommendation": "1. Chống chỉ định sử dụng ephedrin sử dụng đường uống đồng thời hoặc trong vòng 14 ngày trước đó có sử dụng linezolid. 2. Đối với ephedrin sử dụng đường tiêm, cần sử dụng rất thận trọng trên bệnh nhân đang dùng linezolid trong điều kiện giám sát huyết áp chặt chẽ."
  },
  {
    "stt": 322,
    "drug1": "Ephedrin (sử dụng đường uống)",
    "drug2": "Xanh methylen (sử dụng đường tiêm tĩnh mạch)",
    "mechanism": "Tăng tích lũy noradrenalin (norepinephrin)",
    "clinicalImpact": "Tăng nguy cơ xuất hiện cơn tăng huyết áp (đau đầu, đánh trống ngực, cứng cổ, tăng huyết áp)",
    "recommendation": "1. Chống chỉ định sử dụng ephedrin sử dụng đường uống đồng thời hoặc trong vòng 14 ngày trước đó có sử dụng xanh methylen. 2. Đối với ephedrin sử dụng đường tiêm, cần sử dụng rất thận trọng trên bệnh nhân đang dùng xanh methylen trong điều kiện giám sát huyết áp chặt chẽ."
  },
  {
    "stt": 323,
    "drug1": "Ephedrin (sử dụng đường uống)",
    "drug2": "Furazolidon",
    "mechanism": "Tăng tích lũy noradrenalin (norepinephrin). Tác dụng ức chế MAO của furazolidon do chất chuyển hóa của thuốc, xuất hiện chậm sau 5 - 10 ngày.",
    "clinicalImpact": "Tăng nguy cơ xuất hiện cơn tăng huyết áp (đau đầu, đánh trống ngực, cứng cổ, tăng huyết áp)",
    "recommendation": "1. Chống chỉ định sử dụng ephedrin sử dụng đường uống đồng thời hoặc trong vòng 14 ngày trước đó có sử dụng furazolidon. 2. Đối với ephedrin sử dụng đường tiêm, cần sử dụng rất thận trọng trên bệnh nhân đang dùng furazolidon trong điều kiện giám sát huyết áp chặt chẽ."
  },
  {
    "stt": 324,
    "drug1": "Ergometrin",
    "drug2": "Sumatriptan",
    "mechanism": "Hiệp đồng tác dụng co mạch",
    "clinicalImpact": "Co thắt mạch kéo dài",
    "recommendation": "Chống chỉ định phối hợp. Hai thuốc cách nhau ít nhất 24 giờ."
  },
  {
    "stt": 325,
    "drug1": "Ergometrin",
    "drug2": "Roxithromyc in",
    "mechanism": "Roxithromycin ức chế CYP3A4 mạnh làm giảm chuyển hóa của ergometrin",
    "clinicalImpact": "Tăng nồng độ của ergometrin trong huyết thanh, tăng nguy cơ độc tính (nôn, buồn nôn, hoại tử đầu chi, thiếu máu cục bộ do co thắt mạch…)",
    "recommendation": "Chống chỉ định phối hợp"
  },
  {
    "stt": 326,
    "drug1": "Ergometrin",
    "drug2": "Erythromycin",
    "mechanism": "Erythromycin ức chế CYP3A4 mạnh làm giảm chuyển hóa của ergometrin",
    "clinicalImpact": "Tăng nồng độ của ergometrin trong huyết thanh, tăng nguy cơ độc tính (nôn, buồn nôn, hoại tử đầu chi, thiếu máu cục bộ do co thắt mạch…)",
    "recommendation": "Chống chỉ định phối hợp"
  },
  {
    "stt": 327,
    "drug1": "Ergometrin",
    "drug2": "Voriconazol",
    "mechanism": "Voriconazol ức chế CYP3A4 mạnh làm giảm chuyển hóa của ergometrin",
    "clinicalImpact": "Tăng nồng độ của ergometrin trong huyết thanh, tăng nguy cơ độc tính (nôn, buồn nôn, hoại tử đầu chi, thiếu máu cục bộ do co thắt mạch…)",
    "recommendation": "Chống chỉ định phối hợp"
  },
  {
    "stt": 328,
    "drug1": "Ergometrin",
    "drug2": "Posaconazol",
    "mechanism": "Posaconazol ức chế CYP3A4 mạnh làm giảm chuyển hóa của ergometrin",
    "clinicalImpact": "Tăng nồng độ của ergometrin trong huyết thanh, tăng nguy cơ độc tính (nôn, buồn nôn, hoại tử đầu chi, thiếu máu cục bộ do co thắt mạch…)",
    "recommendation": "Chống chỉ định phối hợp"
  },
  {
    "stt": 329,
    "drug1": "Ergometrin",
    "drug2": "Itraconazol",
    "mechanism": "Itraconazol ức chế CYP3A4 mạnh làm giảm chuyển hóa của ergometrin",
    "clinicalImpact": "Tăng nồng độ của ergometrin trong huyết thanh, tăng nguy cơ độc tính (nôn, buồn nôn, hoại tử đầu chi, thiếu máu cục bộ do co thắt mạch…)",
    "recommendation": "Chống chỉ định phối hợp"
  },
  {
    "stt": 330,
    "drug1": "Ergometrin",
    "drug2": "Saquinavir +/- ritonavir",
    "mechanism": "Saquinavir ức chế CYP3A4 mạnh làm giảm chuyển hóa của ergometrin",
    "clinicalImpact": "Tăng nồng độ của ergometrin trong huyết thanh, tăng nguy cơ độc tính (nôn, buồn nôn, hoại tử đầu chi, thiếu máu cục bộ do co thắt mạch…)",
    "recommendation": "Tốt nhất nên tránh phối hợp. Đối với trường hợp điều trị băng huyết sau sinh, nếu không còn thuốc khác thay thế ở người bệnh đang sử dụng saquinavir, sử dụng ergometrin chỉ khi lợi ích vượt trội nguy cơ và sử dụng liều thấp nhất có hiệu quả trong thời gian ngắn nhất."
  },
  {
    "stt": 331,
    "drug1": "Ergometrin",
    "drug2": "Lopinavir/ri tonavir",
    "mechanism": "Lopinavir/ritonav ir ức chế CYP3A4 mạnh làm giảm chuyển hóa của ergometrin",
    "clinicalImpact": "Tăng nồng độ của ergometrin trong huyết thanh, tăng nguy cơ độc tính (nôn, buồn nôn, hoại tử đầu chi, thiếu máu cục bộ do co thắt mạch…)",
    "recommendation": "Tốt nhất nên tránh phối hợp. Đối với trường hợp điều trị băng huyết sau sinh, nếu không còn thuốc khác thay thế ở người bệnh đang sử dụng lopinavir/ritonavir, sử dụng ergometrin chỉ khi lợi ích vượt trội nguy cơ và sử dụng liều thấp nhất có hiệu quả trong thời gian ngắn nhất."
  },
  {
    "stt": 332,
    "drug1": "Ergometrin",
    "drug2": "Indinavir +/- ritonavir",
    "mechanism": "Indinavir ức chế CYP3A4 mạnh làm giảm chuyển hóa của ergometrin",
    "clinicalImpact": "Tăng nồng độ của ergometrin trong huyết thanh, tăng nguy cơ độc tính (nôn, buồn nôn, hoại tử đầu chi, thiếu máu cục bộ do co thắt mạch…)",
    "recommendation": "Tốt nhất nên tránh phối hợp. Đối với trường hợp điều trị băng huyết sau sinh, nếu không còn thuốc khác thay thế ở người bệnh đang sử dụng indinavir, sử dụng ergometrin chỉ khi lợi ích vượt trội nguy cơ và sử dụng liều thấp nhất có hiệu quả trong thời gian ngắn nhất."
  },
  {
    "stt": 333,
    "drug1": "Ergotamin",
    "drug2": "Sumatriptan",
    "mechanism": "Hiệp đồng tác dụng co mạch",
    "clinicalImpact": "Co thắt mạch kéo dài",
    "recommendation": "Chống chỉ định phối hợp. Hai thuốc cách nhau ít nhất 24 giờ."
  },
  {
    "stt": 334,
    "drug1": "Ergotamin",
    "drug2": "Roxithromyc in",
    "mechanism": "Roxithromycin ức chế CYP3A4 mạnh làm giảm chuyển hóa của ergotamin",
    "clinicalImpact": "Tăng nồng độ của ergotamin trong huyết thanh, tăng nguy cơ độc tính (nôn, buồn nôn, hoại tử đầu chi, thiếu máu cục bộ do co thắt mạch…)",
    "recommendation": "Chống chỉ định phối hợp"
  },
  {
    "stt": 335,
    "drug1": "Ergotamin",
    "drug2": "Erythromycin",
    "mechanism": "Erythromycin ức chế CYP3A4 mạnh làm giảm chuyển hóa của ergotamin",
    "clinicalImpact": "Tăng nồng độ của ergotamin trong huyết thanh, tăng nguy cơ độc tính (nôn, buồn nôn, hoại tử đầu chi, thiếu máu cục bộ do co thắt mạch…)",
    "recommendation": "Chống chỉ định phối hợp"
  },
  {
    "stt": 336,
    "drug1": "Ergotamin",
    "drug2": "Voriconazol",
    "mechanism": "Voriconazol ức chế CYP3A4 mạnh làm giảm chuyển hóa của ergotamin",
    "clinicalImpact": "Tăng nồng độ của ergotamin trong huyết thanh, tăng nguy cơ độc tính (nôn, buồn nôn, hoại tử đầu chi, thiếu máu cục bộ do co thắt mạch…)",
    "recommendation": "Chống chỉ định phối hợp"
  },
  {
    "stt": 337,
    "drug1": "Ergotamin",
    "drug2": "Posaconazol",
    "mechanism": "Posaconazol ức chế CYP3A4 mạnh làm giảm chuyển hóa của ergotamin",
    "clinicalImpact": "Tăng nồng độ của ergotamin trong huyết thanh, tăng nguy cơ độc tính (nôn, buồn nôn, hoại tử đầu chi, thiếu máu cục bộ do co thắt mạch…)",
    "recommendation": "Chống chỉ định phối hợp"
  },
  {
    "stt": 338,
    "drug1": "Ergotamin",
    "drug2": "Itraconazol",
    "mechanism": "Itraconazol ức chế CYP3A4 mạnh làm giảm chuyển hóa của ergotamin",
    "clinicalImpact": "Tăng nồng độ của ergotamin trong huyết thanh, tăng nguy cơ độc tính (nôn, buồn nôn, hoại tử đầu chi, thiếu máu cục bộ do co thắt mạch…)",
    "recommendation": "Chống chỉ định phối hợp"
  },
  {
    "stt": 339,
    "drug1": "Ergotamin",
    "drug2": "Saquinavir +/- ritonavir",
    "mechanism": "Saquinavir ức chế CYP3A4 mạnh làm giảm chuyển hóa của ergotamin",
    "clinicalImpact": "Tăng nồng độ của ergotamin trong huyết thanh, tăng nguy cơ độc tính (nôn, buồn nôn, hoại tử đầu chi, thiếu máu cục bộ do co thắt mạch…)",
    "recommendation": "Chống chỉ định phối hợp"
  },
  {
    "stt": 340,
    "drug1": "Ergotamin",
    "drug2": "Lopinavir/ritonavir",
    "mechanism": "Lopinavir/ritonav ir ức chế CYP3A4 mạnh làm giảm chuyển hóa của ergotamin",
    "clinicalImpact": "Tăng nồng độ của ergotamin trong huyết thanh, tăng nguy cơ độc tính (nôn, buồn nôn, hoại tử đầu chi, thiếu máu cục bộ do co thắt mạch…)",
    "recommendation": "Chống chỉ định phối hợp"
  },
  {
    "stt": 341,
    "drug1": "Ergotamin",
    "drug2": "Indinavir +/- ritonavir",
    "mechanism": "Indinavir ức chế CYP3A4 mạnh làm giảm chuyển hóa của ergotamin",
    "clinicalImpact": "Tăng nồng độ của ergotamin trong huyết thanh, tăng nguy cơ độc tính (nôn, buồn nôn, hoại tử đầu chi, thiếu máu cục bộ do co thắt mạch…)",
    "recommendation": "Chống chỉ định phối hợp"
  },
  {
    "stt": 342,
    "drug1": "Erythromycin",
    "drug2": "Thioridazin",
    "mechanism": "Hiệp đồng tăng tác dụng",
    "clinicalImpact": "Tăng nguy cơ kéo dài khoảng QT, xoắn đỉnh",
    "recommendation": "1. Chống chỉ định phối hợp ở các bệnh nhân có hội chứng QT kéo dài do di truyền hoặc mắc phải. 2. Trên các đối tượng bệnh nhân khác, tốt nhất nên tránh phối hợp các thuốc này. Trong trường hợp cần thiết phối hợp, cần đánh giá cẩn thận nguy cơ/lợi ích và lượng giá các yếu tố nguy cơ trên từng bệnh nhân, đặc biệt là rối loạn điện giải (hạ kali máu, hạ magie máu, hạ calci máu), nhịp tim chậm, nữ giới trước khi quyết định kê đơn."
  },
  {
    "stt": 343,
    "drug1": "Erythromycin",
    "drug2": "Fluconazol",
    "mechanism": "Hiệp đồng tăng tác dụng",
    "clinicalImpact": "Tăng nguy cơ kéo dài khoảng QT, xoắn đỉnh",
    "recommendation": "1. Chống chỉ định phối hợp ở các bệnh nhân có hội chứng QT kéo dài do di truyền hoặc mắc phải. 2. Trên các đối tượng bệnh nhân khác, tốt nhất nên tránh phối hợp các thuốc này. Trong trường hợp cần thiết phối hợp, cần đánh giá cẩn thận nguy cơ/lợi ích và lượng giá các yếu tố nguy cơ trên từng bệnh nhân, đặc biệt là rối loạn điện giải (hạ kali máu, hạ magie máu, hạ calci máu), nhịp tim chậm, nữ giới trước khi quyết định kê đơn."
  },
  {
    "stt": 344,
    "drug1": "Erythromycin",
    "drug2": "Piperaquin/dihydroarte misinin (piperaquin)",
    "mechanism": "Hiệp đồng tăng tác dụng",
    "clinicalImpact": "Tăng nguy cơ kéo dài khoảng QT, xoắn đỉnh",
    "recommendation": "1. Chống chỉ định phối hợp ở các bệnh nhân có hội chứng QT kéo dài do di truyền hoặc mắc phải. 2. Trên các đối tượng bệnh nhân khác, tốt nhất nên tránh phối hợp các thuốc này. Trong trường hợp cần thiết phối hợp, cần đánh giá cẩn thận nguy cơ/lợi ích và lượng giá các yếu tố nguy cơ trên từng bệnh nhân, đặc biệt là rối loạn điện giải (hạ kali máu, hạ magie máu, hạ calci máu), nhịp tim chậm, nữ giới trước khi quyết định kê đơn."
  },
  {
    "stt": 345,
    "drug1": "Erythromycin",
    "drug2": "Lovastatin",
    "mechanism": "Erythromycin ức chế CYP3A4 mạnh làm giảm chuyển hóa của lovastatin",
    "clinicalImpact": "Tăng nồng độ của lovastatin trong huyết thanh, tăng nguy cơ bệnh cơ hoặc tiêu cơ vân cấp",
    "recommendation": "Chống chỉ định phối hợp. Cân nhắc thay đổi sang các thuốc nhóm khác có cùng chỉ định và ít có nguy cơ tương tác hơn: - Trong trường hợp bắt buộc sử dụng kháng sinh macrolid, thay erythromycin bằng azithromycin HOẶC - Trong trường hợp bắt buộc sử dụng dẫn chất statin, thay lovastatin bằng các dẫn chất statin khác (thận trọng khi phối hợp với pravastatin)."
  },
  {
    "stt": 346,
    "drug1": "Erythromycin",
    "drug2": "Simvastatin",
    "mechanism": "Erythromycin ức chế CYP3A4 mạnh làm giảm chuyển hóa của simvastatin",
    "clinicalImpact": "Tăng nồng độ của simvastatin trong huyết thanh, tăng nguy cơ bệnh cơ hoặc tiêu cơ vân cấp",
    "recommendation": "Chống chỉ định phối hợp. Cân nhắc thay đổi sang các thuốc nhóm khác có cùng chỉ định và ít có nguy cơ tương tác hơn: - Trong trường hợp bắt buộc sử dụng kháng sinh macrolid, thay erythromycin bằng azithromycin HOẶC - Trong trường hợp bắt buộc sử dụng dẫn chất statin, thay simvastatin bằng các dẫn chất statin khác (thận trọng khi phối hợp với pravastatin)."
  },
  {
    "stt": 347,
    "drug1": "Erythromycin",
    "drug2": "Methylergometrin",
    "mechanism": "Erythromycin ức chế CYP3A4 mạnh làm giảm chuyển hóa của methylergometrin",
    "clinicalImpact": "Tăng nồng độ của methylergometrin trong huyết thanh, tăng nguy cơ độc tính (nôn, buồn nôn, hoại tử đầu chi, thiếu máu cục bộ do co thắt mạch…)",
    "recommendation": "Chống chỉ định phối hợp"
  },
  {
    "stt": 348,
    "drug1": "Erythromycin",
    "drug2": "Ivabradin",
    "mechanism": "Erythromycin ức chế CYP3A4 mạnh làm giảm chuyển hóa của ivabradin",
    "clinicalImpact": "Tăng nồng độ ivabradin trong huyết thanh, tăng nguy cơ kéo dài khoảng QT và chậm nhịp tim",
    "recommendation": "Chống chỉ định phối hợp. Cân nhắc thay đổi sang các thuốc nhóm khác có cùng chỉ định và ít có nguy cơ tương tác hơn: Trong trường hợp bắt buộc sử dụng kháng sinh macrolid, thay erythromycin bằng azithromycin."
  },
  {
    "stt": 349,
    "drug1": "Erythromycin",
    "drug2": "Saquinavir/ritonavir",
    "mechanism": "Erythromycin ức chế CYP3A4 và P-gp, làm giảm chuyển hóa và thải trừ saquinavir. Saquinavir cũng ức chế CYP3A4 làm giảm chuyển hóa của erythromycin.",
    "clinicalImpact": "Tăng nồng độ erythromycin, tăng nồng độ saquinavir, tăng nguy cơ kéo dài khoảng QT và xoắn đỉnh.",
    "recommendation": "1. Chống chỉ định phối hợp ở bệnh nhân có QTc > 450 ms và saquinavir ở dạng phối hợp ritonavir. 2. Trong trường hợp bắt buộc phối hợp, định kỳ đo điện tâm đồ mỗi 3-4 ngày. Nếu QTc > 480 ms hoặc tăng > 20 ms so với ban đầu, ngừng 1 trong 2 hoặc cả 2 thuốc."
  },
  {
    "stt": 350,
    "drug1": "Erythromycin",
    "drug2": "Sparfloxacin",
    "mechanism": "Hiệp đồng tăng tác dụng",
    "clinicalImpact": "Tăng nguy cơ kéo dài khoảng QT, xoắn đỉnh",
    "recommendation": "1. Chống chỉ định phối hợp ở các bệnh nhân có hội chứng QT kéo dài do di truyền hoặc mắc phải. 2. Trên các đối tượng bệnh nhân khác, tốt nhất nên tránh phối hợp các thuốc này. Trong trường hợp cần thiết phối hợp, cần đánh giá cẩn thận nguy cơ/lợi ích và lượng giá các yếu tố nguy cơ trên từng bệnh nhân, đặc biệt là rối loạn điện giải (hạ kali máu, hạ magie máu, hạ calci máu), nhịp tim chậm, nữ giới trước khi quyết định kê đơn."
  },
  {
    "stt": 351,
    "drug1": "Escitalopram",
    "drug2": "Linezolid",
    "mechanism": "Hiệp đồng tác dụng serotonin",
    "clinicalImpact": "Tăng nguy cơ hội chứng serotonin (sốt cao, rối loạn nhận thức, tăng phản xạ, mất phối hợp, rung giật cơ, cứng cơ, co giật, nhịp tim nhanh, tăng huyết áp, tăng thân nhiệt, vã mồ hôi, ảo giác, kích động hoặc bồn chồn…)",
    "recommendation": "1. Cố gắng tránh sử dụng đồng thời linezolid và escitalopram. Tốt nhất các thuốc này nên sử dụng cách nhau 2 tuần. Cân nhắc thay đổi sang các thuốc nhóm khác có cùng chỉ định và ít có nguy cơ tương tác hơn. 2. Trong hợp không thể trì hoãn điều trị được 2 tuần, bắt buộc sử dụng dài ngày hoặc khẩn cấp bằng linezolid và không có thuốc khác thay thế, cân bằng lợi ích và nguy cơ xảy ra hội chứng serotonin. Nếu lợi ích vượt trội nguy cơ, vẫn có thể sử dụng đồng thời nhưng cần giám sát chặt chẽ chặt chẽ bệnh nhân, đặc biệt trong tháng đầu tiên sử dụng đồng thời 2 thuốc."
  },
  {
    "stt": 352,
    "drug1": "Escitalopram",
    "drug2": "Xanh methylen (sử dụng đường tiêm tĩnh mạch)",
    "mechanism": "Hiệp đồng tác dụng serotonin",
    "clinicalImpact": "Tăng nguy cơ hội chứng serotonin (sốt cao, rối loạn nhận thức, tăng phản xạ, mất phối hợp, rung giật cơ, cứng cơ, co giật, nhịp tim nhanh, tăng huyết áp, tăng thân nhiệt, vã mồ hôi, ảo giác, kích động hoặc bồn chồn…)",
    "recommendation": "1. Cố gắng tránh sử dụng đồng thời xanh methylen và methadon. Tốt nhất các thuốc này nên sử dụng cách nhau 2 tuần. Cân nhắc thay đổi sang các thuốc nhóm khác có cùng chỉ định và ít có nguy cơ tương tác hơn. Trong trường hợp bắt buộc sử dụng opioid, có thể đổi sang các opiod khác không có hoạt tính ức chế thu hồi serotonin (morphin, codein, oxycodon, buprenorphin) 2. Trong hợp không thể trì hoãn điều trị được 2 tuần, bắt buộc sử dụng dài ngày hoặc khẩn cấp bằng xanh methylen và không có thuốc khác thay thế, cân bằng lợi ích và nguy cơ xảy ra hội chứng serotonin. Nếu lợi ích vượt trội nguy cơ, vẫn có thể sử dụng đồng thời nhưng cần giám sát chặt chẽ chặt chẽ bệnh nhân, đặc biệt trong tháng đầu tiên sử dụng đồng thời 2 thuốc."
  },
  {
    "stt": 353,
    "drug1": "Escitalopram",
    "drug2": "Thioridazin",
    "mechanism": "Hiệp đồng tăng tác dụng",
    "clinicalImpact": "Tăng nguy cơ kéo dài khoảng QT, xoắn đỉnh",
    "recommendation": "1. Chống chỉ định phối hợp ở các bệnh nhân có hội chứng QT kéo dài do di truyền hoặc mắc phải. 2. Trên các đối tượng bệnh nhân khác, tốt nhất nên tránh phối hợp các thuốc này. Trong trường hợp cần thiết phối hợp, cần đánh giá cẩn thận nguy cơ/lợi ích và lượng giá các yếu tố nguy cơ trên từng bệnh nhân, đặc biệt là rối loạn điện giải (hạ kali máu, hạ magie máu, hạ calci máu), nhịp tim chậm, nữ giới trước khi quyết định kê đơn."
  },
  {
    "stt": 354,
    "drug1": "Escitalopram",
    "drug2": "Moxifloxacin",
    "mechanism": "Hiệp đồng tăng tác dụng",
    "clinicalImpact": "Tăng nguy cơ kéo dài khoảng QT, xoắn đỉnh",
    "recommendation": "1. Chống chỉ định phối hợp ở các bệnh nhân có hội chứng QT kéo dài do di truyền hoặc mắc phải. 2. Trên các đối tượng bệnh nhân khác, tốt nhất nên tránh phối hợp các thuốc này. Trong trường hợp cần thiết phối hợp, cần đánh giá cẩn thận nguy cơ/lợi ích và lượng giá các yếu tố nguy cơ trên từng bệnh nhân, đặc biệt là rối loạn điện giải (hạ kali máu, hạ magie máu, hạ calci máu), nhịp tim chậm, nữ giới trước khi quyết định kê đơn."
  },
  {
    "stt": 355,
    "drug1": "Escitalopram",
    "drug2": "Fluconazol",
    "mechanism": "Hiệp đồng tăng tác dụng",
    "clinicalImpact": "Tăng nguy cơ kéo dài khoảng QT, xoắn đỉnh",
    "recommendation": "1. Chống chỉ định phối hợp ở các bệnh nhân có hội chứng QT kéo dài do di truyền hoặc mắc phải. 2. Trên các đối tượng bệnh nhân khác, tốt nhất nên tránh phối hợp các thuốc này. Trong trường hợp cần thiết phối hợp, cần đánh giá cẩn thận nguy cơ/lợi ích và lượng giá các yếu tố nguy cơ trên từng bệnh nhân, đặc biệt là rối loạn điện giải (hạ kali máu, hạ magie máu, hạ calci máu), nhịp tim chậm, nữ giới trước khi quyết định kê đơn."
  },
  {
    "stt": 356,
    "drug1": "Escitalopram",
    "drug2": "Haloperidol",
    "mechanism": "Hiệp đồng tăng tác dụng",
    "clinicalImpact": "Tăng nguy cơ kéo dài khoảng QT, xoắn đỉnh",
    "recommendation": "1. Chống chỉ định phối hợp ở các bệnh nhân có hội chứng QT kéo dài do di truyền hoặc mắc phải. 2. Trên các đối tượng bệnh nhân khác, tốt nhất nên tránh phối hợp các thuốc này. Trong trường hợp cần thiết phối hợp, cần đánh giá cẩn thận nguy cơ/lợi ích và lượng giá các yếu tố nguy cơ trên từng bệnh nhân, đặc biệt là rối loạn điện giải (hạ kali máu, hạ magie máu, hạ calci máu), nhịp tim chậm, nữ giới trước khi quyết định kê đơn."
  },
  {
    "stt": 357,
    "drug1": "Escitalopram",
    "drug2": "Sotalol",
    "mechanism": "Hiệp đồng tăng tác dụng",
    "clinicalImpact": "Tăng nguy cơ kéo dài khoảng QT, xoắn đỉnh",
    "recommendation": "1. Chống chỉ định phối hợp ở các bệnh nhân có hội chứng QT kéo dài do di truyền hoặc mắc phải. 2. Trên các đối tượng bệnh nhân khác, tốt nhất nên tránh phối hợp các thuốc này. Trong trường hợp cần thiết phối hợp, cần đánh giá cẩn thận nguy cơ/lợi ích và lượng giá các yếu tố nguy cơ trên từng bệnh nhân, đặc biệt là rối loạn điện giải (hạ kali máu, hạ magie máu, hạ calci máu), nhịp tim chậm, nữ giới trước khi quyết định kê đơn."
  },
  {
    "stt": 358,
    "drug1": "Escitalopram",
    "drug2": "Furazolidon",
    "mechanism": "Hiệp đồng tác dụng serotonin. Tác dụng ức chế MAO của furazolidon do chất chuyển hóa của thuốc, xuất hiện chậm sau 5 - 10 ngày.",
    "clinicalImpact": "Tăng nguy cơ hội chứng serotonin (sốt cao, rối loạn nhận thức, tăng phản xạ, mất phối hợp, rung giật cơ, cứng cơ, co giật, nhịp tim nhanh, tăng huyết áp, tăng thân nhiệt, vã mồ hôi, ảo giác, kích động hoặc bồn chồn…)",
    "recommendation": "1. Cố gắng tránh sử dụng đồng thời furazolidon và escitalopram. Tốt nhất các thuốc này nên sử dụng cách nhau 2 tuần. Cân nhắc thay đổi sang các thuốc nhóm khác có cùng chỉ định và ít có nguy cơ tương tác hơn. 2. Trong hợp không thể trì hoãn điều trị được 2 tuần, bắt buộc sử dụng dài ngày hoặc khẩn cấp bằng furazolidon và không có thuốc khác thay thế, cân bằng lợi ích và nguy cơ xảy ra hội chứng serotonin. Nếu lợi ích vượt trội nguy cơ, vẫn có thể sử dụng đồng thời nhưng cần giám sát chặt chẽ chặt chẽ bệnh nhân, đặc biệt trong tháng đầu tiên sử dụng đồng thời 2 thuốc."
  },
  {
    "stt": 359,
    "drug1": "Escitalopram",
    "drug2": "Sparfloxacin",
    "mechanism": "Hiệp đồng tăng tác dụng",
    "clinicalImpact": "Tăng nguy cơ kéo dài khoảng QT, xoắn đỉnh",
    "recommendation": "1. Chống chỉ định phối hợp ở các bệnh nhân có hội chứng QT kéo dài do di truyền hoặc mắc phải. 2. Trên các đối tượng bệnh nhân khác, tốt nhất nên tránh phối hợp các thuốc này. Trong trường hợp cần thiết phối hợp, cần đánh giá cẩn thận nguy cơ/lợi ích và lượng giá các yếu tố nguy cơ trên từng bệnh nhân, đặc biệt là rối loạn điện giải (hạ kali máu, hạ magie máu, hạ calci máu), nhịp tim chậm, nữ giới trước khi quyết định kê đơn."
  },
  {
    "stt": 360,
    "drug1": "Etodolac",
    "drug2": "Ketorolac",
    "mechanism": "Hiệp đồng tác dụng kích ứng đường tiêu hóa",
    "clinicalImpact": "Tăng nguy cơ xuất huyết tiêu hóa nghiêm trọng (sử dụng đồng thời ketorolac với 1 NSAID khác làm tăng nguy cơ xuất huyết tiêu hóa gấp 5 lần so với phối hợp 2 NSAID khác)",
    "recommendation": "Chống chỉ định phối hợp. Cần đặc biệt lưu ý nguy cơ tương tác trong trường hợp giảm đau hậu phẫu."
  },
  {
    "stt": 361,
    "drug1": "Etoricoxib",
    "drug2": "Ketorolac",
    "mechanism": "Hiệp đồng tác dụng kích ứng đường tiêu hóa",
    "clinicalImpact": "Tăng nguy cơ xuất huyết tiêu hóa nghiêm trọng (sử dụng đồng thời ketorolac với 1 NSAID khác làm tăng nguy cơ xuất huyết tiêu hóa gấp 5 lần so với phối hợp 2 NSAID khác)",
    "recommendation": "Chống chỉ định phối hợp. Cần đặc biệt lưu ý nguy cơ tương tác trong trường hợp giảm đau hậu phẫu."
  },
  {
    "stt": 362,
    "drug1": "Everolimus",
    "drug2": "Lopinavir/ritonavir (ritonavir)",
    "mechanism": "Ritonavir ức chế mạnh CP3A4 làm giảm chuyển hóa của everolimus ở gan, đồng thời, ức chế P-gp làm giảm thải trừ everolimus khỏi cơ thể.",
    "clinicalImpact": "Tăng nồng độ everolimus trong huyết thanh, tăng tác dụng bất lợi liên quan đến ức chế miễn dịch",
    "recommendation": "Chống chỉ định phối hợp"
  },
  {
    "stt": 363,
    "drug1": "Everolimus",
    "drug2": "Indinavir/ritonavir (ritonavir)",
    "mechanism": "Ritonavir ức chế mạnh CP3A4 làm giảm chuyển hóa của everolimus ở gan, đồng thời, ức chế P-gp làm giảm thải trừ everolimus khỏi cơ thể.",
    "clinicalImpact": "Tăng nồng độ everolimus trong huyết thanh, tăng tác dụng bất lợi liên quan đến ức chế miễn dịch",
    "recommendation": "Chống chỉ định phối hợp"
  },
  {
    "stt": 364,
    "drug1": "Everolimus",
    "drug2": "Saquinavir/ri tonavir (ritonavir)",
    "mechanism": "Ritonavir ức chế mạnh CP3A4 làm giảm chuyển hóa của everolimus ở gan, đồng thời, ức chế P-gp làm giảm thải trừ everolimus khỏi cơ thể.",
    "clinicalImpact": "Tăng nồng độ everolimus trong huyết thanh, tăng tác dụng bất lợi liên quan đến ức chế miễn dịch",
    "recommendation": "Chống chỉ định phối hợp"
  },
  {
    "stt": 365,
    "drug1": "Everolimus",
    "drug2": "Itraconazol",
    "mechanism": "Itraconazol ức chế mạnh CP3A4 làm giảm chuyển hóa của everolimus ở gan, đồng thời, ức chế P-gp làm giảm thải trừ everolimus khỏi cơ thể.",
    "clinicalImpact": "Tăng nồng độ everolimus trong huyết thanh, tăng tác dụng bất lợi liên quan đến ức chế miễn dịch",
    "recommendation": "Chống chỉ định phối hợp"
  },
  {
    "stt": 366,
    "drug1": "Felodipin",
    "drug2": "Lopinavir/ritonavir",
    "mechanism": "Lopinavir/ritonav ir ức chế CYP3A4 mạnh làm giảm chuyển hóa của felodipin",
    "clinicalImpact": "Tăng nồng độ felodipin, tăng nguy cơ hạ huyết áp nghiêm trọng",
    "recommendation": "Chống chỉ định phối hợp"
  },
  {
    "stt": 367,
    "drug1": "Felodipin",
    "drug2": "Indinavir +/- ritonavir",
    "mechanism": "Indinavir ức chế CYP3A4 mạnh làm giảm chuyển hóa của felodipin",
    "clinicalImpact": "Tăng nồng độ felodipin, tăng nguy cơ hạ huyết áp nghiêm trọng",
    "recommendation": "Chống chỉ định phối hợp"
  },
  {
    "stt": 368,
    "drug1": "Felodipin",
    "drug2": "Saquinavir +/- ritonavir",
    "mechanism": "Saquinavir ức chế CYP3A4 mạnh làm giảm chuyển hóa của felodipin",
    "clinicalImpact": "Tăng nồng độ felodipin, tăng nguy cơ hạ huyết áp nghiêm trọng",
    "recommendation": "Chống chỉ định phối hợp"
  },
  {
    "stt": 369,
    "drug1": "Felodipin",
    "drug2": "Itraconazol",
    "mechanism": "Itraconazol ức chế CYP3A4 mạnh làm giảm chuyển hóa của felodipin",
    "clinicalImpact": "Tăng nồng độ felodipin, tăng nguy cơ hạ huyết áp nghiêm trọng",
    "recommendation": "Chống chỉ định phối hợp. 1. Chỉ bắt đầu sử dụng felodipin sau khi ngừng itraconazol ít nhất 2 tuần HOẶC 2. Cân nhắc thay đổi sang các thuốc nhóm khác có cùng chỉ định và ít có nguy cơ tương tác hơn: Trong trường hợp bắt buộc sử dụng thuốc kháng nấm azol, thay itraconazol bằng fluconazol (nhưng tránh dùng liều cao, có tác dụng ức chế mạnh CYP3A4)."
  },
  {
    "stt": 370,
    "drug1": "Felodipin",
    "drug2": "Posaconazol",
    "mechanism": "Posaconazol ức chế CYP3A4 mạnh làm giảm chuyển hóa của felodipin",
    "clinicalImpact": "Tăng nồng độ felodipin, tăng nguy cơ hạ huyết áp nghiêm trọng",
    "recommendation": "Chống chỉ định phối hợp. Cân nhắc thay đổi sang các thuốc nhóm khác có cùng chỉ định và ít có nguy cơ tương tác hơn: Trong trường hợp bắt buộc sử dụng thuốc kháng nấm azol, thay posaconazol bằng fluconazol (nhưng tránh dùng liều cao, có tác dụng ức chế mạnh CYP3A4)."
  },
  {
    "stt": 371,
    "drug1": "Felodipin",
    "drug2": "Voriconazol",
    "mechanism": "Voriconazol ức chế CYP3A4 mạnh làm giảm chuyển hóa của felodipin",
    "clinicalImpact": "Tăng nồng độ felodipin, tăng nguy cơ hạ huyết áp nghiêm trọng",
    "recommendation": "Chống chỉ định phối hợp. Cân nhắc thay đổi sang các thuốc nhóm khác có cùng chỉ định và ít có nguy cơ tương tác hơn: Trong trường hợp bắt buộc sử dụng thuốc kháng nấm azol, thay voriconazol bằng fluconazol (nhưng tránh dùng liều cao, có tác dụng ức chế mạnh CYP3A4)."
  },
  {
    "stt": 372,
    "drug1": "Fentanyl",
    "drug2": "Linezolid",
    "mechanism": "Hiệp đồng tác dụng serotonin",
    "clinicalImpact": "Tăng nguy cơ hội chứng serotonin (sốt cao, rối loạn nhận thức, tăng phản xạ, mất phối hợp, rung giật cơ, cứng cơ, co giật, nhịp tim nhanh, tăng huyết áp, tăng thân nhiệt, vã mồ hôi, ảo giác, kích động hoặc bồn chồn…)",
    "recommendation": "1. Cố gắng tránh sử dụng đồng thời linezolid và fentanyl. Tốt nhất các thuốc này nên sử dụng cách nhau 2 tuần. Cân nhắc thay đổi sang các thuốc nhóm khác có cùng chỉ định và ít có nguy cơ tương tác hơn. Trong trường hợp bắt buộc sử dụng opioid, có thể đổi sang các opiod khác không có hoạt tính ức chế thu hồi serotonin (morphin, codein, oxycodon, buprenorphin) 2. Trong hợp không thể trì hoãn điều trị được 2 tuần, bắt buộc sử dụng dài ngày hoặc khẩn cấp bằng linezolid và không có thuốc khác thay thế, cân bằng lợi ích và nguy cơ xảy ra hội chứng serotonin. Nếu lợi ích vượt trội nguy cơ, vẫn có thể sử dụng đồng thời nhưng cần giám sát chặt chẽ chặt chẽ bệnh nhân, đặc biệt trong tháng đầu tiên sử dụng đồng thời 2 thuốc."
  },
  {
    "stt": 373,
    "drug1": "Fentanyl",
    "drug2": "Xanh methylen (sử dụng đường tiêm tĩnh mạch)",
    "mechanism": "Hiệp đồng tác dụng serotonin",
    "clinicalImpact": "Tăng nguy cơ hội chứng serotonin (sốt cao, rối loạn nhận thức, tăng phản xạ, mất phối hợp, rung giật cơ, cứng cơ, co giật, nhịp tim nhanh, tăng huyết áp, tăng thân nhiệt, vã mồ hôi, ảo giác, kích động hoặc bồn chồn…)",
    "recommendation": "1. Cố gắng tránh sử dụng đồng thời xanh methylen và fentanyl. Tốt nhất các thuốc này nên sử dụng cách nhau 2 tuần. Cân nhắc thay đổi sang các thuốc nhóm khác có cùng chỉ định và ít có nguy cơ tương tác hơn. Trong trường hợp bắt buộc sử dụng opioid, có thể đổi sang các opiod khác không có hoạt tính ức chế thu hồi serotonin (morphin, codein, oxycodon, buprenorphin) 2. Trong hợp không thể trì hoãn điều trị được 2 tuần, bắt buộc sử dụng dài ngày hoặc khẩn cấp bằng xanh methylen và không có thuốc khác thay thế, cân bằng lợi ích và nguy cơ xảy ra hội chứng serotonin. Nếu lợi ích vượt trội nguy cơ, vẫn có thể sử dụng đồng thời nhưng cần giám sát chặt chẽ chặt chẽ bệnh nhân, đặc biệt trong tháng đầu tiên sử dụng đồng thời 2 thuốc."
  },
  {
    "stt": 374,
    "drug1": "Fentanyl",
    "drug2": "Furazolidon",
    "mechanism": "Hiệp đồng tác dụng serotonin. Tác dụng ức chế MAO của furazolidon do chất chuyển hóa của thuốc, xuất hiện chậm sau 5 - 10 ngày.",
    "clinicalImpact": "Tăng nguy cơ hội chứng serotonin (sốt cao, rối loạn nhận thức, tăng phản xạ, mất phối hợp, rung giật cơ, cứng cơ, co giật, nhịp tim nhanh, tăng huyết áp, tăng thân nhiệt, vã mồ hôi, ảo giác, kích động hoặc bồn chồn…)",
    "recommendation": "1. Cố gắng tránh sử dụng đồng thời furazolidon và fentanyl. Tốt nhất các thuốc này nên sử dụng cách nhau 2 tuần. Cân nhắc thay đổi sang các thuốc nhóm khác có cùng chỉ định và ít có nguy cơ tương tác hơn. Trong trường hợp bắt buộc sử dụng opioid, có thể đổi sang các opiod khác không có hoạt tính ức chế thu hồi serotonin (morphin, codein, oxycodon, buprenorphin) 2. Trong hợp không thể trì hoãn điều trị được 2 tuần, bắt buộc sử dụng dài ngày hoặc khẩn cấp bằng furazolidon và không có thuốc khác thay thế, cân bằng lợi ích và nguy cơ xảy ra hội chứng serotonin. Nếu lợi ích vượt trội nguy cơ, vẫn có thể sử dụng đồng thời nhưng cần giám sát chặt chẽ chặt chẽ bệnh nhân, đặc biệt trong tháng đầu tiên sử dụng đồng thời 2 thuốc."
  },
  {
    "stt": 375,
    "drug1": "Floctafenin",
    "drug2": "Ketorolac",
    "mechanism": "Hiệp đồng tác dụng kích ứng đường tiêu hóa",
    "clinicalImpact": "Tăng nguy cơ xuất huyết tiêu hóa nghiêm trọng (sử dụng đồng thời ketorolac với 1 NSAID khác làm tăng nguy cơ xuất huyết tiêu hóa gấp 5 lần so với phối hợp 2 NSAID khác)",
    "recommendation": "Chống chỉ định phối hợp. Cần đặc biệt lưu ý nguy cơ tương tác trong trường hợp giảm đau hậu phẫu."
  },
  {
    "stt": 376,
    "drug1": "Fluconazol",
    "drug2": "Thioridazin",
    "mechanism": "Hiệp đồng tăng tác dụng",
    "clinicalImpact": "Tăng nguy cơ kéo dài khoảng QT, xoắn đỉnh",
    "recommendation": "1. Chống chỉ định phối hợp ở các bệnh nhân có hội chứng QT kéo dài do di truyền hoặc mắc phải. 2. Trên các đối tượng bệnh nhân khác, tốt nhất nên tránh phối hợp các thuốc này. Trong trường hợp cần thiết phối hợp, cần đánh giá cẩn thận nguy cơ/lợi ích và lượng giá các yếu tố nguy cơ trên từng bệnh nhân, đặc biệt là rối loạn điện giải (hạ kali máu, hạ magie máu, hạ calci máu), nhịp tim chậm, nữ giới trước khi quyết định kê đơn."
  },
  {
    "stt": 377,
    "drug1": "Fluconazol",
    "drug2": "Ondansetron",
    "mechanism": "Hiệp đồng tăng tác dụng",
    "clinicalImpact": "Tăng nguy cơ kéo dài khoảng QT, xoắn đỉnh",
    "recommendation": "1. Chống chỉ định phối hợp ở các bệnh nhân có hội chứng QT kéo dài do di truyền hoặc mắc phải. 2. Trên các đối tượng bệnh nhân khác, tốt nhất nên tránh phối hợp các thuốc này. Trong trường hợp cần thiết phối hợp, cần đánh giá cẩn thận nguy cơ/lợi ích và lượng giá các yếu tố nguy cơ trên từng bệnh nhân, đặc biệt là rối loạn điện giải (hạ kali máu, hạ magie máu, hạ calci máu), nhịp tim chậm, nữ giới trước khi quyết định kê đơn."
  },
  {
    "stt": 378,
    "drug1": "Fluconazol",
    "drug2": "Methadon",
    "mechanism": "Hiệp đồng tăng tác dụng",
    "clinicalImpact": "Tăng nguy cơ kéo dài khoảng QT, xoắn đỉnh",
    "recommendation": "1. Chống chỉ định phối hợp ở các bệnh nhân có hội chứng QT kéo dài do di truyền hoặc mắc phải. 2. Trên các đối tượng bệnh nhân khác, tốt nhất nên tránh phối hợp các thuốc này. Trong trường hợp cần thiết phối hợp, cần đánh giá cẩn thận nguy cơ/lợi ích và lượng giá các yếu tố nguy cơ trên từng bệnh nhân, đặc biệt là rối loạn điện giải (hạ kali máu, hạ magie máu, hạ calci máu), nhịp tim chậm, nữ giới trước khi quyết định kê đơn."
  },
  {
    "stt": 379,
    "drug1": "Fluconazol",
    "drug2": "Haloperidol",
    "mechanism": "Hiệp đồng tăng tác dụng",
    "clinicalImpact": "Tăng nguy cơ kéo dài khoảng QT, xoắn đỉnh",
    "recommendation": "1. Chống chỉ định phối hợp ở các bệnh nhân có hội chứng QT kéo dài do di truyền hoặc mắc phải. 2. Trên các đối tượng bệnh nhân khác, tốt nhất nên tránh phối hợp các thuốc này. Trong trường hợp cần thiết phối hợp, cần đánh giá cẩn thận nguy cơ/lợi ích và lượng giá các yếu tố nguy cơ trên từng bệnh nhân, đặc biệt là rối loạn điện giải (hạ kali máu, hạ magie máu, hạ calci máu), nhịp tim chậm, nữ giới trước khi quyết định kê đơn."
  },
  {
    "stt": 380,
    "drug1": "Fluconazol",
    "drug2": "Sparfloxacin",
    "mechanism": "Hiệp đồng tăng tác dụng",
    "clinicalImpact": "Tăng nguy cơ kéo dài khoảng QT, xoắn đỉnh",
    "recommendation": "1. Chống chỉ định phối hợp ở các bệnh nhân có hội chứng QT kéo dài do di truyền hoặc mắc phải. 2. Trên các đối tượng bệnh nhân khác, tốt nhất nên tránh phối hợp các thuốc này. Trong trường hợp cần thiết phối hợp, cần đánh giá cẩn thận nguy cơ/lợi ích và lượng giá các yếu tố nguy cơ trên từng bệnh nhân, đặc biệt là rối loạn điện giải (hạ kali máu, hạ magie máu, hạ calci máu), nhịp tim chậm, nữ giới trước khi quyết định kê đơn."
  },
  {
    "stt": 381,
    "drug1": "Fluoxetin",
    "drug2": "Linezolid",
    "mechanism": "Hiệp đồng tác dụng serotonin",
    "clinicalImpact": "Tăng nguy cơ hội chứng serotonin (sốt cao, rối loạn nhận thức, tăng phản xạ, mất phối hợp, rung giật cơ, cứng cơ, co giật, nhịp tim nhanh, tăng huyết áp, tăng thân nhiệt, vã mồ hôi, ảo giác, kích động hoặc bồn chồn…)",
    "recommendation": "1. Cố gắng tránh sử dụng đồng thời linezolid và fluoxetin. Tốt nhất các thuốc này nên sử dụng cách nhau 5 tuần. Cân nhắc thay đổi sang các thuốc nhóm khác có cùng chỉ định và ít có nguy cơ tương tác hơn. 2. Trong hợp không thể trì hoãn điều trị được 5 tuần, bắt buộc sử dụng dài ngày hoặc khẩn cấp bằng linezolid và không có thuốc khác thay thế, cân bằng lợi ích và nguy cơ xảy ra hội chứng serotonin. Nếu lợi ích vượt trội nguy cơ, vẫn có thể sử dụng đồng thời nhưng cần giám sát chặt chẽ chặt chẽ bệnh nhân, đặc biệt trong tháng đầu tiên sử dụng đồng thời 2 thuốc."
  },
  {
    "stt": 382,
    "drug1": "Fluoxetin",
    "drug2": "Xanh methylen (sử dụng đường tiêm tĩnh mạch)",
    "mechanism": "Hiệp đồng tác dụng serotonin",
    "clinicalImpact": "Tăng nguy cơ hội chứng serotonin (sốt cao, rối loạn nhận thức, tăng phản xạ, mất phối hợp, rung giật cơ, cứng cơ, co giật, nhịp tim nhanh, tăng huyết áp, tăng thân nhiệt, vã mồ hôi, ảo giác, kích động hoặc bồn chồn…)",
    "recommendation": "1. Cố gắng tránh sử dụng đồng thời xanh methylen và dextromethorphan. Tốt nhất các thuốc này nên sử dụng cách nhau 2 tuần. Cân nhắc thay đổi sang các thuốc nhóm khác có cùng chỉ định và ít có nguy cơ tương tác hơn. Trong trường hợp bắt buộc sử dụng opioid, có thể đổi sang các opiod khác không có hoạt tính ức chế thu hồi serotonin (morphin, codein, oxycodon, buprenorphin) 2. Trong hợp không thể trì hoãn điều trị được 2 tuần, bắt buộc sử dụng dài ngày hoặc khẩn cấp bằng xanh methylen và không có thuốc khác thay thế, cân bằng lợi ích và nguy cơ xảy ra hội chứng serotonin. Nếu lợi ích vượt trội nguy cơ, vẫn có thể sử dụng đồng thời nhưng cần giám sát chặt chẽ chặt chẽ bệnh nhân, đặc biệt trong tháng đầu tiên sử dụng đồng thời 2 thuốc."
  },
  {
    "stt": 383,
    "drug1": "Fluoxetin",
    "drug2": "Furazolidon",
    "mechanism": "Hiệp đồng tác dụng serotonin. Tác dụng ức chế MAO của furazolidon do chất chuyển hóa của thuốc, xuất hiện chậm sau 5 - 10 ngày.",
    "clinicalImpact": "Tăng nguy cơ hội chứng serotonin (sốt cao, rối loạn nhận thức, tăng phản xạ, mất phối hợp, rung giật cơ, cứng cơ, co giật, nhịp tim nhanh, tăng huyết áp, tăng thân nhiệt, vã mồ hôi, ảo giác, kích động hoặc bồn chồn…)",
    "recommendation": "1. Cố gắng tránh sử dụng đồng thời furazolidon và fluoxetin. Tốt nhất các thuốc này nên sử dụng cách nhau 5 tuần. Cân nhắc thay đổi sang các thuốc nhóm khác có cùng chỉ định và ít có nguy cơ tương tác hơn. 2. Trong hợp không thể trì hoãn điều trị được 5 tuần, bắt buộc sử dụng dài ngày hoặc khẩn cấp bằng furazolidon và không có thuốc khác thay thế, cân bằng lợi ích và nguy cơ xảy ra hội chứng serotonin. Nếu lợi ích vượt trội nguy cơ, vẫn có thể sử dụng đồng thời nhưng cần giám sát chặt chẽ chặt chẽ bệnh nhân, đặc biệt trong tháng đầu tiên sử dụng đồng thời 2 thuốc."
  },
  {
    "stt": 384,
    "drug1": "Flurbiprofen",
    "drug2": "Ketorolac",
    "mechanism": "Hiệp đồng tác dụng kích ứng đường tiêu hóa",
    "clinicalImpact": "Tăng nguy cơ xuất huyết tiêu hóa nghiêm trọng (sử dụng đồng thời ketorolac với 1 NSAID khác làm tăng nguy cơ xuất huyết tiêu hóa gấp 5 lần so với phối hợp 2 NSAID khác)",
    "recommendation": "Chống chỉ định phối hợp. Cần đặc biệt lưu ý nguy cơ tương tác trong trường hợp giảm đau hậu phẫu."
  },
  {
    "stt": 385,
    "drug1": "Fluvastatin",
    "drug2": "Gemfibrozil",
    "mechanism": "Gemfibrozil ức chế OATP1B1 làm giảm vận chuyển fluvastatin vào gan.",
    "clinicalImpact": "Tăng nồng độ fluvastatin trong huyết thanh, tăng nguy cơ bệnh cơ hoặc tiêu cơ vân cấp",
    "recommendation": "Chống chỉ định phối hợp. Trong trường hợp bắt buộc sử dụng dẫn chất fibrat, thay thế gemfibrozil bằng fenofibrat nhưng cần thận trọng khi phối hợp."
  },
  {
    "stt": 386,
    "drug1": "Fluvoxamin",
    "drug2": "Linezolid",
    "mechanism": "Hiệp đồng tác dụng serotonin",
    "clinicalImpact": "Tăng nguy cơ hội chứng serotonin (sốt cao, rối loạn nhận thức, tăng phản xạ, mất phối hợp, rung giật cơ, cứng cơ, co giật, nhịp tim nhanh, tăng huyết áp, tăng thân nhiệt, vã mồ hôi, ảo giác, kích động hoặc bồn chồn…)",
    "recommendation": "1. Cố gắng tránh sử dụng đồng thời linezolid và fluvoxamin. Tốt nhất các thuốc này nên sử dụng cách nhau 2 tuần. Cân nhắc thay đổi sang các thuốc nhóm khác có cùng chỉ định và ít có nguy cơ tương tác hơn. 2. Trong hợp không thể trì hoãn điều trị được 2 tuần, bắt buộc sử dụng dài ngày hoặc khẩn cấp bằng linezolid và không có thuốc khác thay thế, cân bằng lợi ích và nguy cơ xảy ra hội chứng serotonin. Nếu lợi ích vượt trội nguy cơ, vẫn có thể sử dụng đồng thời nhưng cần giám sát chặt chẽ chặt chẽ bệnh nhân, đặc biệt trong tháng đầu tiên sử dụng đồng thời 2 thuốc."
  },
  {
    "stt": 387,
    "drug1": "Fluvoxamin",
    "drug2": "Xanh methylen (sử dụng đường tiêm tĩnh mạch)",
    "mechanism": "Hiệp đồng tác dụng serotonin",
    "clinicalImpact": "Tăng nguy cơ hội chứng serotonin (sốt cao, rối loạn nhận thức, tăng phản xạ, mất phối hợp, rung giật cơ, cứng cơ, co giật, nhịp tim nhanh, tăng huyết áp, tăng thân nhiệt, vã mồ hôi, ảo giác, kích động hoặc bồn chồn…)",
    "recommendation": "1. Cố gắng tránh sử dụng đồng thời xanh methylen và fentanyl. Tốt nhất các thuốc này nên sử dụng cách nhau 2 tuần. Cân nhắc thay đổi sang các thuốc nhóm khác có cùng chỉ định và ít có nguy cơ tương tác hơn. Trong trường hợp bắt buộc sử dụng opioid, có thể đổi sang các opiod khác không có hoạt tính ức chế thu hồi serotonin (morphin, codein, oxycodon, buprenorphin) 2. Trong hợp không thể trì hoãn điều trị được 2 tuần, bắt buộc sử dụng dài ngày hoặc khẩn cấp bằng xanh methylen và không có thuốc khác thay thế, cân bằng lợi ích và nguy cơ xảy ra hội chứng serotonin. Nếu lợi ích vượt trội nguy cơ, vẫn có thể sử dụng đồng thời nhưng cần giám sát chặt chẽ chặt chẽ bệnh nhân, đặc biệt trong tháng đầu tiên sử dụng đồng thời 2 thuốc."
  },
  {
    "stt": 388,
    "drug1": "Fluvoxamin",
    "drug2": "Tizanidin",
    "mechanism": "Fluvoxamin ức chế CYP1A2 mạnh làm giảm chuyển hóa của tizanidin",
    "clinicalImpact": "Tăng nồng độ của tizanidin trong huyết thanh, tăng nguy cơ tác dụng bất lợi (hạ huyết áp, buồn ngủ, nhịp tim chậm...)",
    "recommendation": "Chống chỉ định phối hợp"
  },
  {
    "stt": 389,
    "drug1": "Fluvoxamin",
    "drug2": "Furazolidon",
    "mechanism": "Hiệp đồng tác dụng serotonin. Tác dụng ức chế MAO của furazolidon do chất chuyển hóa của thuốc, xuất hiện chậm sau 5 - 10 ngày.",
    "clinicalImpact": "Tăng nguy cơ hội chứng serotonin (sốt cao, rối loạn nhận thức, tăng phản xạ, mất phối hợp, rung giật cơ, cứng cơ, co giật, nhịp tim nhanh, tăng huyết áp, tăng thân nhiệt, vã mồ hôi, ảo giác, kích động hoặc bồn chồn…)",
    "recommendation": "1. Cố gắng tránh sử dụng đồng thời furazolidon và fluvoxamin. Tốt nhất các thuốc này nên sử dụng cách nhau 2 tuần. Cân nhắc thay đổi sang các thuốc nhóm khác có cùng chỉ định và ít có nguy cơ tương tác hơn. 2. Trong hợp không thể trì hoãn điều trị được 2 tuần, bắt buộc sử dụng dài ngày hoặc khẩn cấp bằng furazolidon và không có thuốc khác thay thế, cân bằng lợi ích và nguy cơ xảy ra hội chứng serotonin. Nếu lợi ích vượt trội nguy cơ, vẫn có thể sử dụng đồng thời nhưng cần giám sát chặt chẽ chặt chẽ bệnh nhân, đặc biệt trong tháng đầu tiên sử dụng đồng thời 2 thuốc."
  },
  {
    "stt": 390,
    "drug1": "Furazolidon",
    "drug2": "Paroxetin",
    "mechanism": "Hiệp đồng tác dụng serotonin. Tác dụng ức chế MAO của furazolidon do chất chuyển hóa của thuốc, xuất hiện chậm sau 5 - 10 ngày.",
    "clinicalImpact": "Tăng nguy cơ hội chứng serotonin (sốt cao, rối loạn nhận thức, tăng phản xạ, mất phối hợp, rung giật cơ, cứng cơ, co giật, nhịp tim nhanh, tăng huyết áp, tăng thân nhiệt, vã mồ hôi, ảo giác, kích động hoặc bồn chồn…)",
    "recommendation": "1. Cố gắng tránh sử dụng đồng thời furazolidon và paroxetin. Tốt nhất các thuốc này nên sử dụng cách nhau 2 tuần. Cân nhắc thay đổi sang các thuốc nhóm khác có cùng chỉ định và ít có nguy cơ tương tác hơn. 2. Trong hợp không thể trì hoãn điều trị được 2 tuần, bắt buộc sử dụng dài ngày hoặc khẩn cấp bằng furazolidon và không có thuốc khác thay thế, cân bằng lợi ích và nguy cơ xảy ra hội chứng serotonin. Nếu lợi ích vượt trội nguy cơ, vẫn có thể sử dụng đồng thời nhưng cần giám sát chặt chẽ chặt chẽ bệnh nhân, đặc biệt trong tháng đầu tiên sử dụng đồng thời 2 thuốc."
  },
  {
    "stt": 391,
    "drug1": "Furazolidon",
    "drug2": "Sertralin",
    "mechanism": "Hiệp đồng tác dụng serotonin. Tác dụng ức chế MAO của furazolidon do chất chuyển hóa của thuốc, xuất hiện chậm sau 5 - 10 ngày.",
    "clinicalImpact": "Tăng nguy cơ hội chứng serotonin (sốt cao, rối loạn nhận thức, tăng phản xạ, mất phối hợp, rung giật cơ, cứng cơ, co giật, nhịp tim nhanh, tăng huyết áp, tăng thân nhiệt, vã mồ hôi, ảo giác, kích động hoặc bồn chồn…)",
    "recommendation": "1. Cố gắng tránh sử dụng đồng thời furazolidon và sertralin. Tốt nhất các thuốc này nên sử dụng cách nhau 2 tuần. Cân nhắc thay đổi sang các thuốc nhóm khác có cùng chỉ định và ít có nguy cơ tương tác hơn. 2. Trong hợp không thể trì hoãn điều trị được 2 tuần, bắt buộc sử dụng dài ngày hoặc khẩn cấp bằng furazolidon và không có thuốc khác thay thế, cân bằng lợi ích và nguy cơ xảy ra hội chứng serotonin. Nếu lợi ích vượt trội nguy cơ, vẫn có thể sử dụng đồng thời nhưng cần giám sát chặt chẽ chặt chẽ bệnh nhân, đặc biệt trong tháng đầu tiên sử dụng đồng thời 2 thuốc."
  },
  {
    "stt": 392,
    "drug1": "Furazolidon",
    "drug2": "Venlafaxin",
    "mechanism": "Hiệp đồng tác dụng serotonin. Tác dụng ức chế MAO của furazolidon do chất chuyển hóa của thuốc, xuất hiện chậm sau 5 - 10 ngày.",
    "clinicalImpact": "Tăng nguy cơ hội chứng serotonin (sốt cao, rối loạn nhận thức, tăng phản xạ, mất phối hợp, rung giật cơ, cứng cơ, co giật, nhịp tim nhanh, tăng huyết áp, tăng thân nhiệt, vã mồ hôi, ảo giác, kích động hoặc bồn chồn…)",
    "recommendation": "1. Cố gắng tránh sử dụng đồng thời furazolidon và venlafaxin. Tốt nhất các thuốc này nên sử dụng cách nhau 2 tuần. Cân nhắc thay đổi sang các thuốc nhóm khác có cùng chỉ định và ít có nguy cơ tương tác hơn. 2. Trong hợp không thể trì hoãn điều trị được 2 tuần, bắt buộc sử dụng dài ngày hoặc khẩn cấp bằng furazolidon và không có thuốc khác thay thế, cân bằng lợi ích và nguy cơ xảy ra hội chứng serotonin. Nếu lợi ích vượt trội nguy cơ, vẫn có thể sử dụng đồng thời nhưng cần giám sát chặt chẽ chặt chẽ bệnh nhân, đặc biệt trong tháng đầu tiên sử dụng đồng thời 2 thuốc."
  },
  {
    "stt": 393,
    "drug1": "Furazolidon",
    "drug2": "Milnacipran",
    "mechanism": "Hiệp đồng tác dụng serotonin. Tác dụng ức chế MAO của furazolidon do chất chuyển hóa của thuốc, xuất hiện chậm sau 5 - 10 ngày.",
    "clinicalImpact": "Tăng nguy cơ hội chứng serotonin (sốt cao, rối loạn nhận thức, tăng phản xạ, mất phối hợp, rung giật cơ, cứng cơ, co giật, nhịp tim nhanh, tăng huyết áp, tăng thân nhiệt, vã mồ hôi, ảo giác, kích động hoặc bồn chồn…)",
    "recommendation": "1. Cố gắng tránh sử dụng đồng thời furazolidon và milnacriptan. Tốt nhất các thuốc này nên sử dụng cách nhau 2 tuần. Cân nhắc thay đổi sang các thuốc nhóm khác có cùng chỉ định và ít có nguy cơ tương tác hơn. 2. Trong hợp không thể trì hoãn điều trị được 2 tuần, bắt buộc sử dụng dài ngày hoặc khẩn cấp bằng furazolidon và không có thuốc khác thay thế, cân bằng lợi ích và nguy cơ xảy ra hội chứng serotonin. Nếu lợi ích vượt trội nguy cơ, vẫn có thể sử dụng đồng thời nhưng cần giám sát chặt chẽ chặt chẽ bệnh nhân, đặc biệt trong tháng đầu tiên sử dụng đồng thời 2 thuốc."
  },
  {
    "stt": 394,
    "drug1": "Furazolidon",
    "drug2": "Trazodon",
    "mechanism": "Hiệp đồng tác dụng serotonin. Tác dụng ức chế MAO của furazolidon do chất chuyển hóa của thuốc, xuất hiện chậm sau 5 - 10 ngày.",
    "clinicalImpact": "Tăng nguy cơ hội chứng serotonin (sốt cao, rối loạn nhận thức, tăng phản xạ, mất phối hợp, rung giật cơ, cứng cơ, co giật, nhịp tim nhanh, tăng huyết áp, tăng thân nhiệt, vã mồ hôi, ảo giác, kích động hoặc bồn chồn…)",
    "recommendation": "1. Cố gắng tránh sử dụng đồng thời furazolidon và trazodon. Tốt nhất các thuốc này nên sử dụng cách nhau 2 tuần. Cân nhắc thay đổi sang các thuốc nhóm khác có cùng chỉ định và ít có nguy cơ tương tác hơn. 2. Trong hợp không thể trì hoãn điều trị được 2 tuần, bắt buộc sử dụng dài ngày hoặc khẩn cấp bằng furazolidon và không có thuốc khác thay thế, cân bằng lợi ích và nguy cơ xảy ra hội chứng serotonin. Nếu lợi ích vượt trội nguy cơ, vẫn có thể sử dụng đồng thời nhưng cần giám sát chặt chẽ chặt chẽ bệnh nhân, đặc biệt trong tháng đầu tiên sử dụng đồng thời 2 thuốc."
  },
  {
    "stt": 395,
    "drug1": "Furazolidon",
    "drug2": "Methylphen idat",
    "mechanism": "Hiệp đồng tác dụng serotonin. Tác dụng ức chế MAO của furazolidon do chất chuyển hóa của thuốc, xuất hiện chậm sau 5 - 10 ngày.",
    "clinicalImpact": "Tăng nguy cơ hội chứng serotonin (sốt cao, rối loạn nhận thức, tăng phản xạ, mất phối hợp, rung giật cơ, cứng cơ, co giật, nhịp tim nhanh, tăng huyết áp, tăng thân nhiệt, vã mồ hôi, ảo giác, kích động hoặc bồn chồn…)",
    "recommendation": "1. Cố gắng tránh sử dụng đồng thời furazolidon và methylphenidat. Tốt nhất các thuốc này nên sử dụng cách nhau 2 tuần. Cân nhắc thay đổi sang các thuốc nhóm khác có cùng chỉ định và ít có nguy cơ tương tác hơn. 2. Trong hợp không thể trì hoãn điều trị được 2 tuần, bắt buộc sử dụng dài ngày hoặc khẩn cấp bằng furazolidon và không có thuốc khác thay thế, cân bằng lợi ích và nguy cơ xảy ra hội chứng serotonin. Nếu lợi ích vượt trội nguy cơ, vẫn có thể sử dụng đồng thời nhưng cần giám sát chặt chẽ chặt chẽ bệnh nhân, đặc biệt trong tháng đầu tiên sử dụng đồng thời 2 thuốc."
  },
  {
    "stt": 396,
    "drug1": "Furazolidon",
    "drug2": "Mirtazapin",
    "mechanism": "Hiệp đồng tác dụng serotonin. Tác dụng ức chế MAO của furazolidon do chất chuyển hóa của thuốc, xuất hiện chậm sau 5 - 10 ngày.",
    "clinicalImpact": "Tăng nguy cơ hội chứng serotonin (sốt cao, rối loạn nhận thức, tăng phản xạ, mất phối hợp, rung giật cơ, cứng cơ, co giật, nhịp tim nhanh, tăng huyết áp, tăng thân nhiệt, vã mồ hôi, ảo giác, kích động hoặc bồn chồn…)",
    "recommendation": "1. Cố gắng tránh sử dụng đồng thời furazolidon và mirtazapin. Tốt nhất các thuốc này nên sử dụng cách nhau 2 tuần. Cân nhắc thay đổi sang các thuốc nhóm khác có cùng chỉ định và ít có nguy cơ tương tác hơn. 2. Trong hợp không thể trì hoãn điều trị được 2 tuần, bắt buộc sử dụng dài ngày hoặc khẩn cấp bằng furazolidon và không có thuốc khác thay thế, cân bằng lợi ích và nguy cơ xảy ra hội chứng serotonin. Nếu lợi ích vượt trội nguy cơ, vẫn có thể sử dụng đồng thời nhưng cần giám sát chặt chẽ chặt chẽ bệnh nhân, đặc biệt trong tháng đầu tiên sử dụng đồng thời 2 thuốc."
  },
  {
    "stt": 397,
    "drug1": "Furazolidon",
    "drug2": "Sumatriptan",
    "mechanism": "Hiệp đồng tác dụng serotonin. Tác dụng ức chế MAO của furazolidon do chất chuyển hóa của thuốc, xuất hiện chậm sau 5 - 10 ngày.",
    "clinicalImpact": "Tăng nguy cơ hội chứng serotonin (sốt cao, rối loạn nhận thức, tăng phản xạ, mất phối hợp, rung giật cơ, cứng cơ, co giật, nhịp tim nhanh, tăng huyết áp, tăng thân nhiệt, vã mồ hôi, ảo giác, kích động hoặc bồn chồn…)",
    "recommendation": "1. Cố gắng tránh sử dụng đồng thời furazolidon và sumatriptan. Tốt nhất các thuốc này nên sử dụng cách nhau 2 tuần. Cân nhắc thay đổi sang các thuốc nhóm khác có cùng chỉ định và ít có nguy cơ tương tác hơn. 2. Trong hợp không thể trì hoãn điều trị được 2 tuần, bắt buộc sử dụng dài ngày hoặc khẩn cấp bằng furazolidon và không có thuốc khác thay thế, cân bằng lợi ích và nguy cơ xảy ra hội chứng serotonin. Nếu lợi ích vượt trội nguy cơ, vẫn có thể sử dụng đồng thời nhưng cần giám sát chặt chẽ chặt chẽ bệnh nhân, đặc biệt trong tháng đầu tiên sử dụng đồng thời 2 thuốc."
  },
  {
    "stt": 398,
    "drug1": "Furazolidon",
    "drug2": "Pethidin",
    "mechanism": "Hiệp đồng tác dụng serotonin. Tác dụng ức chế MAO của furazolidon do chất chuyển hóa của thuốc, xuất hiện chậm sau 5 - 10 ngày.",
    "clinicalImpact": "Tăng nguy cơ hội chứng serotonin (sốt cao, rối loạn nhận thức, tăng phản xạ, mất phối hợp, rung giật cơ, cứng cơ, co giật, nhịp tim nhanh, tăng huyết áp, tăng thân nhiệt, vã mồ hôi, ảo giác, kích động hoặc bồn chồn…)",
    "recommendation": "1. Cố gắng tránh sử dụng đồng thời furazolidon và pethidin. Tốt nhất các thuốc này nên sử dụng cách nhau 2 tuần. Cân nhắc thay đổi sang các thuốc nhóm khác có cùng chỉ định và ít có nguy cơ tương tác hơn. Trong trường hợp bắt buộc sử dụng opioid, có thể đổi sang các opiod khác không có hoạt tính ức chế thu hồi serotonin (morphin, codein, oxycodon, buprenorphin) 2. Trong hợp không thể trì hoãn điều trị được 2 tuần, bắt buộc sử dụng dài ngày hoặc khẩn cấp bằng furazolidon và không có thuốc khác thay thế, cân bằng lợi ích và nguy cơ xảy ra hội chứng serotonin. Nếu lợi ích vượt trội nguy cơ, vẫn có thể sử dụng đồng thời nhưng cần giám sát chặt chẽ chặt chẽ bệnh nhân, đặc biệt trong tháng đầu tiên sử dụng đồng thời 2 thuốc."
  },
  {
    "stt": 399,
    "drug1": "Furazolidon",
    "drug2": "Tramadol",
    "mechanism": "Hiệp đồng tác dụng serotonin. Tác dụng ức chế MAO của furazolidon do chất chuyển hóa của thuốc, xuất hiện chậm sau 5 - 10 ngày.",
    "clinicalImpact": "Tăng nguy cơ hội chứng serotonin (sốt cao, rối loạn nhận thức, tăng phản xạ, mất phối hợp, rung giật cơ, cứng cơ, co giật, nhịp tim nhanh, tăng huyết áp, tăng thân nhiệt, vã mồ hôi, ảo giác, kích động hoặc bồn chồn…)",
    "recommendation": "1. Cố gắng tránh sử dụng đồng thời furazolidon và tramadol. Tốt nhất các thuốc này nên sử dụng cách nhau 2 tuần. Cân nhắc thay đổi sang các thuốc nhóm khác có cùng chỉ định và ít có nguy cơ tương tác hơn. Trong trường hợp bắt buộc sử dụng opioid, có thể đổi sang các opiod khác không có hoạt tính ức chế thu hồi serotonin (morphin, codein, oxycodon, buprenorphin) 2. Trong hợp không thể trì hoãn điều trị được 2 tuần, bắt buộc sử dụng dài ngày hoặc khẩn cấp bằng furazolidon và không có thuốc khác thay thế, cân bằng lợi ích và nguy cơ xảy ra hội chứng serotonin. Nếu lợi ích vượt trội nguy cơ, vẫn có thể sử dụng đồng thời nhưng cần giám sát chặt chẽ chặt chẽ bệnh nhân, đặc biệt trong tháng đầu tiên sử dụng đồng thời 2 thuốc."
  },
  {
    "stt": 400,
    "drug1": "Furazolidon",
    "drug2": "Methadon",
    "mechanism": "Hiệp đồng tác dụng serotonin. Tác dụng ức chế MAO của furazolidon do chất chuyển hóa của thuốc, xuất hiện chậm sau 5 - 10 ngày.",
    "clinicalImpact": "Tăng nguy cơ hội chứng serotonin (sốt cao, rối loạn nhận thức, tăng phản xạ, mất phối hợp, rung giật cơ, cứng cơ, co giật, nhịp tim nhanh, tăng huyết áp, tăng thân nhiệt, vã mồ hôi, ảo giác, kích động hoặc bồn chồn…)",
    "recommendation": "1. Cố gắng tránh sử dụng đồng thời furazolidon và methadon. Tốt nhất các thuốc này nên sử dụng cách nhau 2 tuần. Cân nhắc thay đổi sang các thuốc nhóm khác có cùng chỉ định và ít có nguy cơ tương tác hơn. Trong trường hợp bắt buộc sử dụng opioid, có thể đổi sang các opiod khác không có hoạt tính ức chế thu hồi serotonin (morphin, codein, oxycodon, buprenorphin) 2. Trong hợp không thể trì hoãn điều trị được 2 tuần, bắt buộc sử dụng dài ngày hoặc khẩn cấp bằng furazolidon và không có thuốc khác thay thế, cân bằng lợi ích và nguy cơ xảy ra hội chứng serotonin. Nếu lợi ích vượt trội nguy cơ, vẫn có thể sử dụng đồng thời nhưng cần giám sát chặt chẽ chặt chẽ bệnh nhân, đặc biệt trong tháng đầu tiên sử dụng đồng thời 2 thuốc."
  },
  {
    "stt": 401,
    "drug1": "Furazolidon",
    "drug2": "Levodopa/ca rbidopa +/- entacapon",
    "mechanism": "Tăng tích lũy noradrenalin (norepinephrin) và dopamin. Tác dụng ức chế MAO của furazolidon do chất chuyển hóa của thuốc, xuất hiện chậm sau 5 - 10 ngày.",
    "clinicalImpact": "Tăng nguy cơ xuất hiện cơn tăng huyết áp (đau đầu, đánh trống ngực, cứng cổ, tăng huyết áp)",
    "recommendation": "Chống chỉ định sử dụng levodopa/carbidopa đồng thời hoặc trong vòng 14 ngày gần đây có sử dụng furazolidon."
  },
  {
    "stt": 402,
    "drug1": "Furazolidon",
    "drug2": "Methyldopa",
    "mechanism": "Chưa rõ",
    "clinicalImpact": "Tăng nguy cơ xuất hiện cơn tăng huyết áp (đau đầu, đánh trống ngực, cứng cổ)",
    "recommendation": "Chống chỉ định phối hợp"
  },
  {
    "stt": 403,
    "drug1": "Furazolidon",
    "drug2": "Pseudoephedrin (sử dụng đường uống)",
    "mechanism": "Tăng tích lũy noradrenalin (norepinephrin). Tác dụng ức chế MAO của furazolidon do chất chuyển hóa của thuốc, xuất hiện chậm sau 5 - 10 ngày.",
    "clinicalImpact": "Tăng nguy cơ xuất hiện cơn tăng huyết áp (đau đầu, đánh trống ngực, cứng cổ, tăng huyết áp)",
    "recommendation": "Chống chỉ định sử dụng pseudoephedrin (sử dụng đường uống) đồng thời hoặc trong vòng 14 ngày gần đây có sử dụng furazolidon."
  },
  {
    "stt": 404,
    "drug1": "Furazolidon",
    "drug2": "Phenylephrin (sử dụng đường uống)",
    "mechanism": "Tăng tích lũy noradrenalin (norepinephrin). Tác dụng ức chế MAO của furazolidon do chất chuyển hóa của thuốc, xuất hiện chậm sau 5 - 10 ngày.",
    "clinicalImpact": "Tăng nguy cơ xuất hiện cơn tăng huyết áp (đau đầu, đánh trống ngực, cứng cổ, tăng huyết áp)",
    "recommendation": "1. Chống chỉ định sử dụng phenylephrin sử dụng đường uống đồng thời hoặc trong vòng 14 ngày trước đó có sử dụng furazolidon. 2. Đối với phenylephrin sử dụng đường tiêm, cần sử dụng rất thận trọng trên bệnh nhân đang dùng furazolidon trong điều kiện giám sát huyết áp chặt chẽ."
  },
  {
    "stt": 405,
    "drug1": "Furazolidon",
    "drug2": "Nefopam",
    "mechanism": "Nefopam ức chế thu hồi noradrenalin (norepinephrin) và serotonin trên hệ thần kinh. Tác dụng ức chế MAO của furazolidon do chất chuyển hóa của thuốc, xuất hiện chậm sau 5 - 10 ngày",
    "clinicalImpact": "Tăng nguy cơ kích thích thần kinh trung ương (co giật, ảo giác và kích động)",
    "recommendation": "Chống chỉ định phối hợp"
  },
  {
    "stt": 406,
    "drug1": "Gemfibrozil",
    "drug2": "Repaglinid",
    "mechanism": "Gemfibrozil ức chế CYP2C8 làm giảm chuyển hóa của repaglinid, gemfibrozil cũng ức chế OATP1B1 làm giảm vận chuyển gemfibrozil vào gan.",
    "clinicalImpact": "Tăng nồng độ repaglinid trong huyết thanh, tăng nguy cơ hạ đường huyết",
    "recommendation": "Chống chỉ định phối hợp"
  },
  {
    "stt": 407,
    "drug1": "Gemfibrozil",
    "drug2": "Simvastatin",
    "mechanism": "Gemfibrozil ức chế OATP1B1 làm giảm vận chuyển simvastatin vào gan.",
    "clinicalImpact": "Tăng nồng độ simvastatin trong huyết thanh, tăng nguy cơ bệnh cơ hoặc tiêu cơ vân cấp",
    "recommendation": "Chống chỉ định phối hợp. Trong trường hợp bắt buộc sử dụng dẫn chất fibrat, thay thế gemfibrozil bằng fenofibrat nhưng cần thận trọng khi phối hợp."
  },
  {
    "stt": 408,
    "drug1": "Gemfibrozil",
    "drug2": "Lovastatin",
    "mechanism": "Gemfibrozil ức chế OATP1B1 làm giảm vận chuyển lovastatin vào gan.",
    "clinicalImpact": "Tăng nồng độ lovastatin trong huyết thanh, tăng nguy cơ bệnh cơ hoặc tiêu cơ vân cấp",
    "recommendation": "Chống chỉ định phối hợp. Trong trường hợp bắt buộc sử dụng dẫn chất fibrat, thay thế gemfibrozil bằng fenofibrat nhưng cần thận trọng khi phối hợp."
  },
  {
    "stt": 409,
    "drug1": "Gemfibrozil",
    "drug2": "Pravastatin",
    "mechanism": "Gemfibrozil ức chế OATP1B1 làm giảm vận chuyển pravastatin vào gan.",
    "clinicalImpact": "Tăng nồng độ pravastatin trong huyết thanh, tăng nguy cơ bệnh cơ hoặc tiêu cơ vân cấp",
    "recommendation": "Chống chỉ định phối hợp. Trong trường hợp bắt buộc sử dụng dẫn chất fibrat, thay thế gemfibrozil bằng fenofibrat nhưng cần thận trọng khi phối hợp."
  },
  {
    "stt": 410,
    "drug1": "Grazoprevir/elbasvir",
    "drug2": "Phenobarbital",
    "mechanism": "Phenobarbital cảm ứng CYP3A4 mạnh làm tăng chuyển hóa của Grazoprevir/elbas vir",
    "clinicalImpact": "Giảm nồng độ grazoprevir/elbasvir trong huyết thanh, dẫn đến giảm hiệu quả điều trị",
    "recommendation": "Chống chỉ định phối hợp."
  },
  {
    "stt": 411,
    "drug1": "Grazoprevir/elbasvir",
    "drug2": "Phenytoin",
    "mechanism": "Phenytoin cảm ứng CYP3A4 mạnh làm tăng chuyển hóa của Grazoprevir/elbas vir",
    "clinicalImpact": "Giảm nồng độ grazoprevir/elbasvir trong huyết thanh, dẫn đến giảm hiệu quả điều trị",
    "recommendation": "Chống chỉ định phối hợp."
  },
  {
    "stt": 412,
    "drug1": "Grazoprevir/elbasvir",
    "drug2": "Rifampicin",
    "mechanism": "Rifampicin ức chế OATP1B1/3 làm giảm vận chuyển grazoprevir vào gan. Khi dùng rifampicin dài ngày, rifampicin gây cảm ứng CYP3A4 làm giảm nồng độ rifampicin trong huyết thanh.",
    "clinicalImpact": "Tăng nồng độ grazoprevir/elbasvir, tăng nguy cơ tăng ALT. Khi dùng rifampicin dài ngày, lại có nguy cơ giảm nồng độ grazoprevir/elbasvir, giảm hiệu quả điều trị.",
    "recommendation": "Chống chỉ định phối hợp"
  },
  {
    "stt": 413,
    "drug1": "Grazoprevir/elbasvir",
    "drug2": "Saquinavir +/- ritonavir",
    "mechanism": "Saquinavir ức chế OATP1B1/3 làm giảm vận chuyển grazoprevir vào gan.",
    "clinicalImpact": "Tăng nồng độ grazoprevir/elbasvir, tăng nguy cơ tăng ALT",
    "recommendation": "Chống chỉ định phối hợp"
  },
  {
    "stt": 414,
    "drug1": "Grazoprevir/elbasvir",
    "drug2": "Lopinavir/ritonavir (lopinavir)",
    "mechanism": "Lopinavir ức chế OATP1B1/3 làm giảm vận chuyển grazoprevir vào gan.",
    "clinicalImpact": "Tăng nồng độ grazoprevir/elbasvir, tăng nguy cơ tăng ALT",
    "recommendation": "Chống chỉ định phối hợp"
  },
  {
    "stt": 415,
    "drug1": "Haloperidol",
    "drug2": "Thioridazin",
    "mechanism": "Hiệp đồng tăng tác dụng",
    "clinicalImpact": "Tăng nguy cơ kéo dài khoảng QT, xoắn đỉnh",
    "recommendation": "1. Chống chỉ định phối hợp ở các bệnh nhân có hội chứng QT kéo dài do di truyền hoặc mắc phải. 2. Trên các đối tượng bệnh nhân khác, tốt nhất nên tránh phối hợp các thuốc này. Trong trường hợp cần thiết phối hợp, cần đánh giá cẩn thận nguy cơ/lợi ích và lượng giá các yếu tố nguy cơ trên từng bệnh nhân, đặc biệt là rối loạn điện giải (hạ kali máu, hạ magie máu, hạ calci máu), nhịp tim chậm, nữ giới trước khi quyết định kê đơn."
  },
  {
    "stt": 416,
    "drug1": "Haloperidol",
    "drug2": "Moxifloxacin",
    "mechanism": "Hiệp đồng tăng tác dụng",
    "clinicalImpact": "Tăng nguy cơ kéo dài khoảng QT, xoắn đỉnh",
    "recommendation": "1. Chống chỉ định phối hợp ở các bệnh nhân có hội chứng QT kéo dài do di truyền hoặc mắc phải. 2. Trên các đối tượng bệnh nhân khác, tốt nhất nên tránh phối hợp các thuốc này. Trong trường hợp cần thiết phối hợp, cần đánh giá cẩn thận nguy cơ/lợi ích và lượng giá các yếu tố nguy cơ trên từng bệnh nhân, đặc biệt là rối loạn điện giải (hạ kali máu, hạ magie máu, hạ calci máu), nhịp tim chậm, nữ giới trước khi quyết định kê đơn."
  },
  {
    "stt": 417,
    "drug1": "Haloperidol",
    "drug2": "Sotalol",
    "mechanism": "Hiệp đồng tăng tác dụng",
    "clinicalImpact": "Tăng nguy cơ kéo dài khoảng QT, xoắn đỉnh",
    "recommendation": "1. Chống chỉ định phối hợp ở các bệnh nhân có hội chứng QT kéo dài do di truyền hoặc mắc phải. 2. Trên các đối tượng bệnh nhân khác, tốt nhất nên tránh phối hợp các thuốc này. Trong trường hợp cần thiết phối hợp, cần đánh giá cẩn thận nguy cơ/lợi ích và lượng giá các yếu tố nguy cơ trên từng bệnh nhân, đặc biệt là rối loạn điện giải (hạ kali máu, hạ magie máu, hạ calci máu), nhịp tim chậm, nữ giới trước khi quyết định kê đơn."
  },
  {
    "stt": 418,
    "drug1": "Haloperidol",
    "drug2": "Levofloxacin",
    "mechanism": "Hiệp đồng tăng tác dụng",
    "clinicalImpact": "Tăng nguy cơ kéo dài khoảng QT, xoắn đỉnh",
    "recommendation": "1. Chống chỉ định phối hợp ở các bệnh nhân có hội chứng QT kéo dài do di truyền hoặc mắc phải. 2. Trên các đối tượng bệnh nhân khác, tốt nhất nên tránh phối hợp các thuốc này. Trong trường hợp cần thiết phối hợp, cần đánh giá cẩn thận nguy cơ/lợi ích và lượng giá các yếu tố nguy cơ trên từng bệnh nhân, đặc biệt là rối loạn điện giải (hạ kali máu, hạ magie máu, hạ calci máu), nhịp tim chậm, nữ giới trước khi quyết định kê đơn."
  },
  {
    "stt": 419,
    "drug1": "Haloperidol",
    "drug2": "Piperaquin/dihydroarte misinin (piperaquin)",
    "mechanism": "Hiệp đồng tăng tác dụng",
    "clinicalImpact": "Tăng nguy cơ kéo dài khoảng QT, xoắn đỉnh",
    "recommendation": "1. Chống chỉ định phối hợp ở các bệnh nhân có hội chứng QT kéo dài do di truyền hoặc mắc phải. 2. Trên các đối tượng bệnh nhân khác, tốt nhất nên tránh phối hợp các thuốc này. Trong trường hợp cần thiết phối hợp, cần đánh giá cẩn thận nguy cơ/lợi ích và lượng giá các yếu tố nguy cơ trên từng bệnh nhân, đặc biệt là rối loạn điện giải (hạ kali máu, hạ magie máu, hạ calci máu), nhịp tim chậm, nữ giới trước khi quyết định kê đơn."
  },
  {
    "stt": 420,
    "drug1": "Haloperidol",
    "drug2": "Sparfloxacin",
    "mechanism": "Hiệp đồng tăng tác dụng",
    "clinicalImpact": "Tăng nguy cơ kéo dài khoảng QT, xoắn đỉnh",
    "recommendation": "1. Chống chỉ định phối hợp ở các bệnh nhân có hội chứng QT kéo dài do di truyền hoặc mắc phải. 2. Trên các đối tượng bệnh nhân khác, tốt nhất nên tránh phối hợp các thuốc này. Trong trường hợp cần thiết phối hợp, cần đánh giá cẩn thận nguy cơ/lợi ích và lượng giá các yếu tố nguy cơ trên từng bệnh nhân, đặc biệt là rối loạn điện giải (hạ kali máu, hạ magie máu, hạ calci máu), nhịp tim chậm, nữ giới trước khi quyết định kê đơn."
  },
  {
    "stt": 421,
    "drug1": "Hydroxycloro quin",
    "drug2": "Thioridazin",
    "mechanism": "Hiệp đồng tăng tác dụng",
    "clinicalImpact": "Tăng nguy cơ kéo dài khoảng QT, xoắn đỉnh",
    "recommendation": "1. Chống chỉ định phối hợp ở các bệnh nhân có hội chứng QT kéo dài do di truyền hoặc mắc phải. 2. Trên các đối tượng bệnh nhân khác, tốt nhất nên tránh phối hợp các thuốc này. Trong trường hợp cần thiết phối hợp, cần đánh giá cẩn thận nguy cơ/lợi ích và lượng giá các yếu tố nguy cơ trên từng bệnh nhân, đặc biệt là rối loạn điện giải (hạ kali máu, hạ magie máu, hạ calci máu), nhịp tim chậm, nữ giới trước khi quyết định kê đơn."
  },
  {
    "stt": 422,
    "drug1": "Hydroxycloro quin",
    "drug2": "Sparfloxacin",
    "mechanism": "Hiệp đồng tăng tác dụng",
    "clinicalImpact": "Tăng nguy cơ kéo dài khoảng QT, xoắn đỉnh",
    "recommendation": "1. Chống chỉ định phối hợp ở các bệnh nhân có hội chứng QT kéo dài do di truyền hoặc mắc phải. 2. Trên các đối tượng bệnh nhân khác, tốt nhất nên tránh phối hợp các thuốc này. Trong trường hợp cần thiết phối hợp, cần đánh giá cẩn thận nguy cơ/lợi ích và lượng giá các yếu tố nguy cơ trên từng bệnh nhân, đặc biệt là rối loạn điện giải (hạ kali máu, hạ magie máu, hạ calci máu), nhịp tim chậm, nữ giới trước khi quyết định kê đơn."
  },
  {
    "stt": 423,
    "drug1": "Hyoscin butylbromid",
    "drug2": "Kali clorid (dạng uống giải phóng kéo dài)",
    "mechanism": "Hyoscin butylbromid kháng cholinergic gây tồn lưu hoặc làm tăng thời gian kali qua đường tiêu hóa khi sử dụng đường uống, gây loét đường tiêu hóa",
    "clinicalImpact": "Tăng nguy cơ loét tiêu hóa",
    "recommendation": "1. Tốt nhất nên tránh phối hợp, đặc biệt ở người cao tuổi. Cân nhắc chuyển sang sử dụng kali đường tĩnh mạch. 2. Trong trường hợp bắt buộc sử dụng đồng thời, cân nhắc một số khuyến cáo sau giúp giảm nguy cơ loét tiêu hóa: (1) uống ít nhất 100 mL nước sau khi uống kali, (2) ngồi hoặc đứng thẳng trong ít nhất 5 - 10 phút sau khi uống thuốc."
  },
  {
    "stt": 424,
    "drug1": "Hyoscyamin",
    "drug2": "Kali clorid (dạng uống giải phóng kéo dài)",
    "mechanism": "Hyoscyamin kháng cholinergic gây tồn lưu hoặc làm tăng thời gian kali qua đường tiêu hóa khi sử dụng đường uống, gây loét đường tiêu hóa",
    "clinicalImpact": "Tăng nguy cơ loét tiêu hóa",
    "recommendation": "1. Tốt nhất nên tránh phối hợp, đặc biệt ở người cao tuổi. Cân nhắc chuyển sang sử dụng kali đường tĩnh mạch. 2. Trong trường hợp bắt buộc sử dụng đồng thời, cân nhắc một số khuyến cáo sau giúp giảm nguy cơ loét tiêu hóa: (1) uống ít nhất 100 mL nước sau khi uống kali, (2) ngồi hoặc đứng thẳng trong ít nhất 5 - 10 phút sau khi uống thuốc."
  },
  {
    "stt": 425,
    "drug1": "Ibuprofen",
    "drug2": "Ketorolac",
    "mechanism": "Hiệp đồng tác dụng kích ứng đường tiêu hóa",
    "clinicalImpact": "Tăng nguy cơ xuất huyết tiêu hóa nghiêm trọng (sử dụng đồng thời ketorolac với 1 NSAID khác làm tăng nguy cơ xuất huyết tiêu hóa gấp 5 lần so với phối hợp 2 NSAID khác)",
    "recommendation": "Chống chỉ định phối hợp. Cần đặc biệt lưu ý nguy cơ tương tác trong trường hợp giảm đau hậu phẫu."
  },
  {
    "stt": 426,
    "drug1": "Imidapril",
    "drug2": "Sacubitril/val sartan (sacubitril)",
    "mechanism": "Tăng tích lũy bradykinin gây phù mạch",
    "clinicalImpact": "Tăng nguy cơ phù mạch",
    "recommendation": "Chống chỉ định phối hợp. Chỉ bắt đầu sử dụng Sacubitril/valsartan (sacubitril) sau khi ngừng imidapril ít nhất 36 giờ."
  },
  {
    "stt": 427,
    "drug1": "Indinavir +/- ritonavir",
    "drug2": "Lovastatin",
    "mechanism": "Indinavir ức chế CYP3A4 mạnh làm giảm chuyển hóa của lovastatin",
    "clinicalImpact": "Tăng nồng độ của lovastatin trong huyết thanh, tăng nguy cơ bệnh cơ hoặc tiêu cơ vân cấp",
    "recommendation": "Chống chỉ định phối hợp"
  },
  {
    "stt": 428,
    "drug1": "Indinavir +/- ritonavir",
    "drug2": "Simvastatin",
    "mechanism": "Indinavir ức chế CYP3A4 mạnh làm giảm chuyển hóa của simvastatin",
    "clinicalImpact": "Tăng nồng độ của simvastatin trong huyết thanh, tăng nguy cơ bệnh cơ hoặc tiêu cơ vân cấp",
    "recommendation": "Chống chỉ định phối hợp"
  },
  {
    "stt": 429,
    "drug1": "Indinavir +/- ritonavir",
    "drug2": "Methylergometrin",
    "mechanism": "Indinavir ức chế CYP3A4 mạnh làm giảm chuyển hóa của methylergometrin",
    "clinicalImpact": "Tăng nồng độ của methylergometrin trong huyết thanh, tăng nguy cơ độc tính (nôn, buồn nôn, hoại tử đầu chi, thiếu máu cục bộ do co thắt mạch…)",
    "recommendation": "Tốt nhất nên tránh phối hợp. Đối với trường hợp điều trị băng huyết sau sinh, nếu không còn thuốc khác thay thế ở người bệnh đang sử dụng indinavir, sử dụng methylergometrin chỉ khi lợi ích vượt trội nguy cơ và sử dụng liều thấp nhất có hiệu quả trong thời gian ngắn nhất."
  },
  {
    "stt": 430,
    "drug1": "Indinavir +/- ritonavir",
    "drug2": "Ivabradin",
    "mechanism": "Indinavir ức chế CYP3A4 mạnh làm giảm chuyển hóa của ivabradin",
    "clinicalImpact": "Tăng nồng độ ivabradin trong huyết thanh, tăng nguy cơ kéo dài khoảng QT và chậm nhịp tim",
    "recommendation": "Chống chỉ định phối hợp"
  },
  {
    "stt": 431,
    "drug1": "Indinavir +/- ritonavir",
    "drug2": "Ticagrelor",
    "mechanism": "Indinavir ức chế CYP3A4 mạnh làm giảm chuyển hóa của ticagrelor",
    "clinicalImpact": "Tăng nồng độ của ticagrelor trong huyết thanh, tăng nguy cơ xuất huyết",
    "recommendation": "Chống chỉ định phối hợp"
  },
  {
    "stt": 432,
    "drug1": "Indinavir +/- ritonavir",
    "drug2": "Ranolazin",
    "mechanism": "Indinavir ức chế CYP3A4 mạnh làm giảm chuyển hóa của ranolazin",
    "clinicalImpact": "Tăng nồng độ ranolazin trong huyết thanh, tăng nguy cơ kéo dài khoảng QT",
    "recommendation": "Chống chỉ định phối hợp"
  },
  {
    "stt": 433,
    "drug1": "Indinavir +/- ritonavir",
    "drug2": "Tolvaptan",
    "mechanism": "Indinavir ức chế CYP3A4 mạnh làm giảm chuyển hóa của tolvaptan",
    "clinicalImpact": "Tăng nồng độ tolvaptan trong huyết thanh, tăng nguy cơ tác dụng không mong muốn (tăng nồng độ natri huyết thanh, đa niệu, khát nước, giảm thể tích tuần hoàn...)",
    "recommendation": "Chống chỉ định phối hợp"
  },
  {
    "stt": 434,
    "drug1": "Indinavir +/- ritonavir",
    "drug2": "Lercanidipin",
    "mechanism": "Indinavir ức chế CYP3A4 mạnh làm giảm chuyển hóa của lercanidipin",
    "clinicalImpact": "Tăng nồng độ lercanidipin, tăng nguy cơ hạ huyết áp nghiêm trọng",
    "recommendation": "Chống chỉ định phối hợp"
  },
  {
    "stt": 435,
    "drug1": "Indinavir +/- ritonavir",
    "drug2": "Vardenafil",
    "mechanism": "Indinavir ức chế CYP3A4 làm giảm chuyển hóa của vardenafil",
    "clinicalImpact": "Tăng nồng độ vardenafil trong huyết thanh, tăng nguy cơ kéo dài khoảng QT",
    "recommendation": "Chống chỉ định phối hợp"
  },
  {
    "stt": 436,
    "drug1": "Indinavir +/- ritonavir",
    "drug2": "Sildenafil",
    "mechanism": "Indinavir ức chế CYP3A4 làm giảm chuyển hóa của sildenafil",
    "clinicalImpact": "Tăng nồng độ sildenafil trong huyết thanh, tăng nguy cơ độc tính (hạ huyết áp, ngất, rối loạn thị giác)",
    "recommendation": "1. Chống chỉ định phối hợp trong trường hợp sử dụng sildenafil điều trị tăng áp động mạch phổi. 2. Trong trường hợp sử dụng sildenafil điều trị rối loạn cương dương, liều sildenafil không vượt quá 25 mg mỗi 48 giờ ở người đang sử dụng indinavir."
  },
  {
    "stt": 437,
    "drug1": "Indinavir +/- ritonavir",
    "drug2": "Quetiapin",
    "mechanism": "Indinavir ức chế CYP3A4 mạnh làm giảm chuyển hóa của quetiapin",
    "clinicalImpact": "Tăng nồng độ của quetiapin, tăng nguy cơ kéo dài khoảng QT",
    "recommendation": "Tốt nhất nên tránh phối hợp. Trong trường hợp bắt buộc sử dụng indinavir, giảm liều quetiapin còn 1/6 liều so với liều bình thường."
  },
  {
    "stt": 438,
    "drug1": "Indinavir +/- ritonavir",
    "drug2": "Rifampicin",
    "mechanism": "Rifampicin cảm ứng CYP3A4 làm tăng chuyển hóa của indinavir",
    "clinicalImpact": "Giảm nồng độ indinavir trong huyết thanh, giảm hiệu quả điều trị",
    "recommendation": "Chống chỉ định phối hợp"
  },
  {
    "stt": 439,
    "drug1": "Indinavir/riton avir (ritonavir)",
    "drug2": "Propafenon",
    "mechanism": "Ritonavir ức chế chuyển hóa của propafenon qua CYP3A4 và CYP2D6.",
    "clinicalImpact": "Tăng nồng độ, dẫn đến tăng độc tính của propafenon (đặc biệt là loạn nhịp tim).",
    "recommendation": "Chống chỉ định phối hợp."
  },
  {
    "stt": 440,
    "drug1": "Indinavir/ritonavir (ritonavir)",
    "drug2": "Voriconazol",
    "mechanism": "Ritonavir cảm ứng CYP2C19 (hoặc ức chế CYP3A4 ở người thiếu hoặc giảm hoạt tính CYP2C19) làm tăng (hoặc giảm) chuyển hóa của voriconazol tùy thuộc từng cá thể (voriconazol là cơ chất của cả CYP3A4 và CYP2C19)",
    "clinicalImpact": "Giảm (hoặc tăng) nồng độ voriconazol.",
    "recommendation": "1. Việc phối hợp voriconazol và ritonavir liều cao (400mg mỗi 12 giờ) làm giảm rõ rệt nồng độ voriconazol, vì vậy, chống chỉ định phối hợp voriconazol với ritonavir ở mức liều này. 2. Việc phối hợp voriconazol với ritonavir liều thấp (100mg mỗi 12 giờ) cũng đã cho thấy làm giảm nồng độ voriconazol mặc dù mức độ ít hơn so với liều cao ritonavir, vì vậy, nên tránh phối hợp thuốc trừ khi lợi ích vượt trội nguy cơ."
  },
  {
    "stt": 441,
    "drug1": "Indomethacin",
    "drug2": "Ketorolac",
    "mechanism": "Hiệp đồng tác dụng kích ứng đường tiêu hóa",
    "clinicalImpact": "Tăng nguy cơ xuất huyết tiêu hóa nghiêm trọng (sử dụng đồng thời ketorolac với 1 NSAID khác làm tăng nguy cơ xuất huyết tiêu hóa gấp 5 lần so với phối hợp 2 NSAID khác)",
    "recommendation": "Chống chỉ định phối hợp. Cần đặc biệt lưu ý nguy cơ tương tác trong trường hợp giảm đau hậu phẫu."
  },
  {
    "stt": 442,
    "drug1": "Iobitridol",
    "drug2": "Metformin",
    "mechanism": "Nguy cơ suy thận cấp liên quan đến cả metformin và thuốc cản quang iod. Suy thận cấp làm tăng nguy cơ nhiễm toan lactic.",
    "clinicalImpact": "Tăng nguy cơ nhiễm toan lactic và suy thận cấp",
    "recommendation": "1. Bệnh nhân có MLCT > 30 ml/phút/1,73m² và không có bằng chứng tổn thương thận cấp, được chỉ định tiêm thuốc cản quang đường tĩnh mạch hoặc tiêm thuốc cản quang đường động mạch tiếp xúc với thận thứ cấp (ví dụ: bơm thuốc vào tim phải, động mạch phổi, động mạch cảnh, động mạch dưới đòn, động mạch vành, động mạch mạc treo hay động mạch dưới động mạch thận): tiếp tục sử dụng metformin như bình thường. 2. Bệnh nhân (1) MLCT < 30 ml/phút/1,73m² tiêm thuốc cản quang đường tĩnh mạch, đường động mạch tiếp xúc với thận thứ cấp, hoặc (2) Bệnh nhân tiêm thuốc cản quang đường động mạch tiếp xúc với thận đầu tiên (ví dụ: bơm thuốc vào tim trái, động mạch chủ ngực, động mạch chủ bụng trên động mạch thận hoặc động mạch thận) hoặc (3) Có tổn thương thận: Ngừng metformin trước hoặc tại thời điểm tiến hành thủ thuật chẩn đoán hình ảnh và không được dùng lại cho đến ít nhất 48 giờ sau đó. Sau 48 giờ, chỉ sử dụng lại metformin sau khi chức năng thận được đánh giá lại và cho thấy ổn định. * Lưu ý: - Các yếu tố nguy cơ: suy thận, suy tim, không đủ dịch hoặc thiếu dịch, sử dụng liều cao thuốc cản quang hoặc sử dụng đồng thời các thuốc độc tính trên thận khác. - Khuyến cáo về tương tác này không áp dụng trong trường hợp bơm thuốc cản quang iod để chụp X-quang tử cung - vòi trứng."
  },
  {
    "stt": 443,
    "drug1": "Iodixanol",
    "drug2": "Metformin",
    "mechanism": "Nguy cơ suy thận cấp liên quan đến cả metformin và thuốc cản quang iod. Suy thận cấp làm tăng nguy cơ nhiễm toan lactic.",
    "clinicalImpact": "Tăng nguy cơ nhiễm toan lactic và suy thận cấp",
    "recommendation": "1. Bệnh nhân có MLCT > 30 ml/phút/1,73m² và không có bằng chứng tổn thương thận cấp, được chỉ định tiêm thuốc cản quang đường tĩnh mạch hoặc tiêm thuốc cản quang đường động mạch tiếp xúc với thận thứ cấp (ví dụ: bơm thuốc vào tim phải, động mạch phổi, động mạch cảnh, động mạch dưới đòn, động mạch vành, động mạch mạc treo hay động mạch dưới động mạch thận): tiếp tục sử dụng metformin như bình thường. 2. Bệnh nhân (1) MLCT < 30 ml/phút/1,73m² tiêm thuốc cản quang đường tĩnh mạch, đường động mạch tiếp xúc với thận thứ cấp, hoặc (2) Bệnh nhân tiêm thuốc cản quang đường động mạch tiếp xúc với thận đầu tiên (ví dụ: bơm thuốc vào tim trái, động mạch chủ ngực, động mạch chủ bụng trên động mạch thận hoặc động mạch thận) hoặc (3) Có tổn thương thận: Ngừng metformin trước hoặc tại thời điểm tiến hành thủ thuật chẩn đoán hình ảnh và không được dùng lại cho đến ít nhất 48 giờ sau đó. Sau 48 giờ, chỉ sử dụng lại metformin sau khi chức năng thận được đánh giá lại và cho thấy ổn định. * Lưu ý: - Các yếu tố nguy cơ: suy thận, suy tim, không đủ dịch hoặc thiếu dịch, sử dụng liều cao thuốc cản quang hoặc sử dụng đồng thời các thuốc độc tính trên thận khác. - Khuyến cáo về tương tác này không áp dụng trong trường hợp bơm thuốc cản quang iod để chụp X-quang tử cung - vòi trứng."
  },
  {
    "stt": 444,
    "drug1": "Iohexol",
    "drug2": "Metformin",
    "mechanism": "Nguy cơ suy thận cấp liên quan đến cả metformin và thuốc cản quang iod. Suy thận cấp làm tăng nguy cơ nhiễm toan lactic.",
    "clinicalImpact": "Tăng nguy cơ nhiễm toan lactic và suy thận cấp",
    "recommendation": "1. Bệnh nhân có MLCT > 30 ml/phút/1,73m² và không có bằng chứng tổn thương thận cấp, được chỉ định tiêm thuốc cản quang đường tĩnh mạch hoặc tiêm thuốc cản quang đường động mạch tiếp xúc với thận thứ cấp (ví dụ: bơm thuốc vào tim phải, động mạch phổi, động mạch cảnh, động mạch dưới đòn, động mạch vành, động mạch mạc treo hay động mạch dưới động mạch thận): tiếp tục sử dụng metformin như bình thường. 2. Bệnh nhân (1) MLCT < 30 ml/phút/1,73m² tiêm thuốc cản quang đường tĩnh mạch, đường động mạch tiếp xúc với thận thứ cấp, hoặc (2) Bệnh nhân tiêm thuốc cản quang đường động mạch tiếp xúc với thận đầu tiên (ví dụ: bơm thuốc vào tim trái, động mạch chủ ngực, động mạch chủ bụng trên động mạch thận hoặc động mạch thận) hoặc (3) Có tổn thương thận: Ngừng metformin trước hoặc tại thời điểm tiến hành thủ thuật chẩn đoán hình ảnh và không được dùng lại cho đến ít nhất 48 giờ sau đó. Sau 48 giờ, chỉ sử dụng lại metformin sau khi chức năng thận được đánh giá lại và cho thấy ổn định. * Lưu ý: - Các yếu tố nguy cơ: suy thận, suy tim, không đủ dịch hoặc thiếu dịch, sử dụng liều cao thuốc cản quang hoặc sử dụng đồng thời các thuốc độc tính trên thận khác. - Khuyến cáo về tương tác này không áp dụng trong trường hợp bơm thuốc cản quang iod để chụp X-quang tử cung - vòi trứng."
  },
  {
    "stt": 445,
    "drug1": "Iopamidol",
    "drug2": "Metformin",
    "mechanism": "Nguy cơ suy thận cấp liên quan đến cả metformin và thuốc cản quang iod. Suy thận cấp làm tăng nguy cơ nhiễm toan lactic.",
    "clinicalImpact": "Tăng nguy cơ nhiễm toan lactic và suy thận cấp",
    "recommendation": "1. Bệnh nhân có MLCT > 30 ml/phút/1,73m² và không có bằng chứng tổn thương thận cấp, được chỉ định tiêm thuốc cản quang đường tĩnh mạch hoặc tiêm thuốc cản quang đường động mạch tiếp xúc với thận thứ cấp (ví dụ: bơm thuốc vào tim phải, động mạch phổi, động mạch cảnh, động mạch dưới đòn, động mạch vành, động mạch mạc treo hay động mạch dưới động mạch thận): tiếp tục sử dụng metformin như bình thường. 2. Bệnh nhân (1) MLCT < 30 ml/phút/1,73m² tiêm thuốc cản quang đường tĩnh mạch, đường động mạch tiếp xúc với thận thứ cấp, hoặc (2) Bệnh nhân tiêm thuốc cản quang đường động mạch tiếp xúc với thận đầu tiên (ví dụ: bơm thuốc vào tim trái, động mạch chủ ngực, động mạch chủ bụng trên động mạch thận hoặc động mạch thận) hoặc (3) Có tổn thương thận: Ngừng metformin trước hoặc tại thời điểm tiến hành thủ thuật chẩn đoán hình ảnh và không được dùng lại cho đến ít nhất 48 giờ sau đó. Sau 48 giờ, chỉ sử dụng lại metformin sau khi chức năng thận được đánh giá lại và cho thấy ổn định. * Lưu ý: - Các yếu tố nguy cơ: suy thận, suy tim, không đủ dịch hoặc thiếu dịch, sử dụng liều cao thuốc cản quang hoặc sử dụng đồng thời các thuốc độc tính trên thận khác. - Khuyến cáo về tương tác này không áp dụng trong trường hợp bơm thuốc cản quang iod để chụp X-quang tử cung - vòi trứng."
  },
  {
    "stt": 446,
    "drug1": "Iopromid",
    "drug2": "Metformin",
    "mechanism": "Nguy cơ suy thận cấp liên quan đến cả metformin và thuốc cản quang iod. Suy thận cấp làm tăng nguy cơ nhiễm toan lactic.",
    "clinicalImpact": "Tăng nguy cơ nhiễm toan lactic và suy thận cấp",
    "recommendation": "1. Bệnh nhân có MLCT > 30 ml/phút/1,73m² và không có bằng chứng tổn thương thận cấp, được chỉ định tiêm thuốc cản quang đường tĩnh mạch hoặc tiêm thuốc cản quang đường động mạch tiếp xúc với thận thứ cấp (ví dụ: bơm thuốc vào tim phải, động mạch phổi, động mạch cảnh, động mạch dưới đòn, động mạch vành, động mạch mạc treo hay động mạch dưới động mạch thận): tiếp tục sử dụng metformin như bình thường. 2. Bệnh nhân (1) MLCT < 30 ml/phút/1,73m² tiêm thuốc cản quang đường tĩnh mạch, đường động mạch tiếp xúc với thận thứ cấp, hoặc (2) Bệnh nhân tiêm thuốc cản quang đường động mạch tiếp xúc với thận đầu tiên (ví dụ: bơm thuốc vào tim trái, động mạch chủ ngực, động mạch chủ bụng trên động mạch thận hoặc động mạch thận) hoặc (3) Có tổn thương thận: Ngừng metformin trước hoặc tại thời điểm tiến hành thủ thuật chẩn đoán hình ảnh và không được dùng lại cho đến ít nhất 48 giờ sau đó. Sau 48 giờ, chỉ sử dụng lại metformin sau khi chức năng thận được đánh giá lại và cho thấy ổn định. * Lưu ý: - Các yếu tố nguy cơ: suy thận, suy tim, không đủ dịch hoặc thiếu dịch, sử dụng liều cao thuốc cản quang hoặc sử dụng đồng thời các thuốc độc tính trên thận khác. - Khuyến cáo về tương tác này không áp dụng trong trường hợp bơm thuốc cản quang iod để chụp X-quang tử cung - vòi trứng."
  },
  {
    "stt": 447,
    "drug1": "Ioxaglic natri/ioxaglic meglumin",
    "drug2": "Metformin",
    "mechanism": "Nguy cơ suy thận cấp liên quan đến cả metformin và thuốc cản quang iod. Suy thận cấp làm tăng nguy cơ nhiễm toan lactic.",
    "clinicalImpact": "Tăng nguy cơ nhiễm toan lactic và suy thận cấp",
    "recommendation": "1. Bệnh nhân có MLCT > 30 ml/phút/1,73m² và không có bằng chứng tổn thương thận cấp, được chỉ định tiêm thuốc cản quang đường tĩnh mạch hoặc tiêm thuốc cản quang đường động mạch tiếp xúc với thận thứ cấp (ví dụ: bơm thuốc vào tim phải, động mạch phổi, động mạch cảnh, động mạch dưới đòn, động mạch vành, động mạch mạc treo hay động mạch dưới động mạch thận): tiếp tục sử dụng metformin như bình thường. 2. Bệnh nhân (1) MLCT < 30 ml/phút/1,73m² tiêm thuốc cản quang đường tĩnh mạch, đường động mạch tiếp xúc với thận thứ cấp, hoặc (2) Bệnh nhân tiêm thuốc cản quang đường động mạch tiếp xúc với thận đầu tiên (ví dụ: bơm thuốc vào tim trái, động mạch chủ ngực, động mạch chủ bụng trên động mạch thận hoặc động mạch thận) hoặc (3) Có tổn thương thận: Ngừng metformin trước hoặc tại thời điểm tiến hành thủ thuật chẩn đoán hình ảnh và không được dùng lại cho đến ít nhất 48 giờ sau đó. Sau 48 giờ, chỉ sử dụng lại metformin sau khi chức năng thận được đánh giá lại và cho thấy ổn định. * Lưu ý: - Các yếu tố nguy cơ: suy thận, suy tim, không đủ dịch hoặc thiếu dịch, sử dụng liều cao thuốc cản quang hoặc sử dụng đồng thời các thuốc độc tính trên thận khác. - Khuyến cáo về tương tác này không áp dụng trong trường hợp bơm thuốc cản quang iod để chụp X-quang tử cung - vòi trứng."
  },
  {
    "stt": 448,
    "drug1": "Ioxitalamat natri/ioxitala mat meglumin",
    "drug2": "Metformin",
    "mechanism": "Nguy cơ suy thận cấp liên quan đến cả metformin và thuốc cản quang iod. Suy thận cấp làm tăng nguy cơ nhiễm toan lactic.",
    "clinicalImpact": "Tăng nguy cơ nhiễm toan lactic và suy thận cấp",
    "recommendation": "1. Bệnh nhân có MLCT > 30 ml/phút/1,73m² và không có bằng chứng tổn thương thận cấp, được chỉ định tiêm thuốc cản quang đường tĩnh mạch hoặc tiêm thuốc cản quang đường động mạch tiếp xúc với thận thứ cấp (ví dụ: bơm thuốc vào tim phải, động mạch phổi, động mạch cảnh, động mạch dưới đòn, động mạch vành, động mạch mạc treo hay động mạch dưới động mạch thận): tiếp tục sử dụng metformin như bình thường. 2. Bệnh nhân (1) MLCT < 30 ml/phút/1,73m² tiêm thuốc cản quang đường tĩnh mạch, đường động mạch tiếp xúc với thận thứ cấp, hoặc (2) Bệnh nhân tiêm thuốc cản quang đường động mạch tiếp xúc với thận đầu tiên (ví dụ: bơm thuốc vào tim trái, động mạch chủ ngực, động mạch chủ bụng trên động mạch thận hoặc động mạch thận) hoặc (3) Có tổn thương thận: Ngừng metformin trước hoặc tại thời điểm tiến hành thủ thuật chẩn đoán hình ảnh và không được dùng lại cho đến ít nhất 48 giờ sau đó. Sau 48 giờ, chỉ sử dụng lại metformin sau khi chức năng thận được đánh giá lại và cho thấy ổn định. * Lưu ý: - Các yếu tố nguy cơ: suy thận, suy tim, không đủ dịch hoặc thiếu dịch, sử dụng liều cao thuốc cản quang hoặc sử dụng đồng thời các thuốc độc tính trên thận khác. - Khuyến cáo về tương tác này không áp dụng trong trường hợp bơm thuốc cản quang iod để chụp X-quang tử cung - vòi trứng."
  },
  {
    "stt": 449,
    "drug1": "Irinotecan",
    "drug2": "Itraconazol",
    "mechanism": "Itraconazol ức chế CYP3A4 và ức chế UGT1A1 (enzym xúc tác phản ứng glucuronid hóa) làm giảm chuyển hóa của SN-38 (chất chuyển hóa có hoạt tính của irinotecan)",
    "clinicalImpact": "Tăng nồng độ của chất chuyển hóa có hoạt tính của irinotecan trong huyết thanh, tăng nguy cơ tác dụng không mong muốn (tiêu chảy, giảm bạch cầu trung tính...)",
    "recommendation": "Chống chỉ định phối hợp. Chỉ bắt đầu sử dụng irinotecan sau khi ngừng itraconazol ít nhất 2 tuần."
  },
  {
    "stt": 450,
    "drug1": "Isosorbid dinitrat",
    "drug2": "Sildenafil",
    "mechanism": "Hiệp đồng tăng nồng độ guanosine monophosphate (cGMP) vòng có dụng giãn mạch",
    "clinicalImpact": "Tăng tác dụng hạ huyết áp nghiêm trọng",
    "recommendation": "Chống chỉ định phối hợp. Hai thuốc cách nhau ít nhất 24 giờ."
  },
  {
    "stt": 451,
    "drug1": "Isosorbid dinitrat",
    "drug2": "Vardenafil",
    "mechanism": "Hiệp đồng tăng nồng độ guanosine monophosphate (cGMP) vòng có dụng giãn mạch",
    "clinicalImpact": "Tăng tác dụng hạ huyết áp nghiêm trọng",
    "recommendation": "Chống chỉ định phối hợp. Hai thuốc cách nhau ít nhất 24 giờ."
  },
  {
    "stt": 452,
    "drug1": "Isosorbid dinitrat",
    "drug2": "Tadalafil",
    "mechanism": "Hiệp đồng tăng nồng độ guanosine monophosphate (cGMP) vòng có dụng giãn mạch",
    "clinicalImpact": "Tăng tác dụng hạ huyết áp nghiêm trọng",
    "recommendation": "Chống chỉ định phối hợp. Hai thuốc cách nhau ít nhất 48 giờ."
  },
  {
    "stt": 453,
    "drug1": "Isosorbid mononitrat",
    "drug2": "Sildenafil",
    "mechanism": "Hiệp đồng tăng nồng độ guanosine monophosphate (cGMP) vòng có dụng giãn mạch",
    "clinicalImpact": "Tăng tác dụng hạ huyết áp nghiêm trọng",
    "recommendation": "Chống chỉ định phối hợp. Hai thuốc cách nhau ít nhất 24 giờ."
  },
  {
    "stt": 454,
    "drug1": "Isosorbid mononitrat",
    "drug2": "Vardenafil",
    "mechanism": "Hiệp đồng tăng nồng độ guanosine monophosphate (cGMP) vòng có dụng giãn mạch",
    "clinicalImpact": "Tăng tác dụng hạ huyết áp nghiêm trọng",
    "recommendation": "Chống chỉ định phối hợp. Hai thuốc cách nhau ít nhất 24 giờ."
  },
  {
    "stt": 455,
    "drug1": "Isosorbid mononitrat",
    "drug2": "Tadalafil",
    "mechanism": "Hiệp đồng tăng nồng độ guanosine monophosphate (cGMP) vòng có dụng giãn mạch",
    "clinicalImpact": "Tăng tác dụng hạ huyết áp nghiêm trọng",
    "recommendation": "Chống chỉ định phối hợp. Hai thuốc cách nhau ít nhất 48 giờ."
  },
  {
    "stt": 456,
    "drug1": "Isotretinoin",
    "drug2": "Minocyclin",
    "mechanism": "Hiệp đồng tăng độc tính",
    "clinicalImpact": "Tăng nguy cơ tăng áp nội sọ lành tính (phù gai thị, đau đầu, buồn nôn và nôn, và rối loạn thị giác)",
    "recommendation": "Chống chỉ định phối hợp"
  },
  {
    "stt": 457,
    "drug1": "Isotretinoin",
    "drug2": "Tetracyclin",
    "mechanism": "Hiệp đồng tăng độc tính",
    "clinicalImpact": "Tăng nguy cơ tăng áp nội sọ lành tính (phù gai thị, đau đầu, buồn nôn và nôn, và rối loạn thị giác)",
    "recommendation": "Chống chỉ định phối hợp"
  },
  {
    "stt": 458,
    "drug1": "Isotretinoin",
    "drug2": "Tigecyclin",
    "mechanism": "Hiệp đồng tăng độc tính",
    "clinicalImpact": "Tăng nguy cơ tăng áp nội sọ lành tính (phù gai thị, đau đầu, buồn nôn và nôn, và rối loạn thị giác)",
    "recommendation": "Chống chỉ định phối hợp"
  },
  {
    "stt": 459,
    "drug1": "Itraconazol",
    "drug2": "Lovastatin",
    "mechanism": "Itraconazol ức chế CYP3A4 mạnh làm giảm chuyển hóa của lovastatin",
    "clinicalImpact": "Tăng nồng độ của lovastatin trong huyết thanh, tăng nguy cơ bệnh cơ hoặc tiêu cơ vân cấp",
    "recommendation": "Chống chỉ định phối hợp. 1. Chỉ bắt đầu sử dụng lovastatin sau khi ngừng itraconazol ít nhất 2 tuần HOẶC 2. Cân nhắc thay đổi sang các thuốc nhóm khác có cùng chỉ định và ít có nguy cơ tương tác hơn: - Trong trường hợp bắt buộc sử dụng thuốc kháng nấm azol, thay itraconazol bằng fluconazol (nhưng tránh dùng liều cao, có tác dụng ức chế mạnh CYP3A4) HOẶC - Trong trường hợp bắt buộc sử dụng dẫn chất statin, thay lovastatin bằng các dẫn chất statin khác (ngoại trừ simvastatin), thận trọng khi phối hợp với atorvastatin."
  },
  {
    "stt": 460,
    "drug1": "Itraconazol",
    "drug2": "Simvastatin",
    "mechanism": "Itraconazol ức chế CYP3A4 mạnh làm giảm chuyển hóa của simvastatin",
    "clinicalImpact": "Tăng nồng độ của simvastatin trong huyết thanh, tăng nguy cơ bệnh cơ hoặc tiêu cơ vân cấp",
    "recommendation": "Chống chỉ định phối hợp. 1. Chỉ bắt đầu sử dụng lovastatin sau khi ngừng itraconazol ít nhất 2 tuần HOẶC 2. Cân nhắc thay đổi sang các thuốc nhóm khác có cùng chỉ định và ít có nguy cơ tương tác hơn: - Trong trường hợp bắt buộc sử dụng thuốc kháng nấm azol, thay itraconazol bằng fluconazol (nhưng tránh dùng liều cao, có tác dụng ức chế mạnh CYP3A4) HOẶC - Trong trường hợp bắt buộc sử dụng dẫn chất statin, thay simvastatin bằng các dẫn chất statin khác (ngoại trừ lovastatin), thận trọng khi phối hợp với atorvastatin."
  },
  {
    "stt": 461,
    "drug1": "Itraconazol",
    "drug2": "Methylergometrin",
    "mechanism": "Itraconazol ức chế CYP3A4 mạnh làm giảm chuyển hóa của methylergometrin",
    "clinicalImpact": "Tăng nồng độ của methylergometrin trong huyết thanh, tăng nguy cơ độc tính (nôn, buồn nôn, hoại tử đầu chi, thiếu máu cục bộ do co thắt mạch…)",
    "recommendation": "Chống chỉ định phối hợp"
  },
  {
    "stt": 462,
    "drug1": "Itraconazol",
    "drug2": "Ivabradin",
    "mechanism": "Itraconazol ức chế CYP3A4 mạnh làm giảm chuyển hóa của ivabradin",
    "clinicalImpact": "Tăng nồng độ ivabradin trong huyết thanh, tăng nguy cơ kéo dài khoảng QT và chậm nhịp tim",
    "recommendation": "Chống chỉ định phối hợp. Cân nhắc thay đổi sang các thuốc nhóm khác có cùng chỉ định và ít có nguy cơ tương tác hơn: Trong trường hợp bắt buộc sử dụng thuốc kháng nấm azol, thay itraconazol bằng fluconazol (nhưng tránh dùng liều cao, có tác dụng ức chế mạnh CYP3A4)."
  },
  {
    "stt": 463,
    "drug1": "Itraconazol",
    "drug2": "Ticagrelor",
    "mechanism": "Itraconazol ức chế CYP3A4 mạnh làm giảm chuyển hóa của ticagrelor",
    "clinicalImpact": "Tăng nồng độ của ticagrelor trong huyết thanh, tăng nguy cơ xuất huyết",
    "recommendation": "Chống chỉ định phối hợp. 1. Chỉ bắt đầu sử dụng ticagrelor sau khi ngừng itraconazol ít nhất 2 tuần HOẶC 2. Cân nhắc thay đổi sang các thuốc nhóm khác có cùng chỉ định và ít có nguy cơ tương tác hơn: Trong trường hợp bắt buộc sử dụng thuốc kháng nấm azol, thay itraconazol bằng fluconazol (nhưng tránh dùng liều cao, có tác dụng ức chế mạnh CYP3A4)."
  },
  {
    "stt": 464,
    "drug1": "Itraconazol",
    "drug2": "Ranolazin",
    "mechanism": "Itraconazol ức chế CYP3A4 mạnh làm giảm chuyển hóa của ranolazin",
    "clinicalImpact": "Tăng nồng độ ranolazin trong huyết thanh, tăng nguy cơ kéo dài khoảng QT",
    "recommendation": "Chống chỉ định phối hợp. 1. Chỉ bắt đầu sử dụng ranolazin sau khi ngừng itraconazol ít nhất 2 tuần HOẶC 2. Cân nhắc thay đổi sang các thuốc nhóm khác có cùng chỉ định và ít có nguy cơ tương tác hơn: Trong trường hợp bắt buộc sử dụng thuốc kháng nấm azol, thay itraconazol bằng fluconazol (nhưng tránh dùng liều cao, có tác dụng ức chế mạnh CYP3A4)."
  },
  {
    "stt": 465,
    "drug1": "Itraconazol",
    "drug2": "Tolvaptan",
    "mechanism": "Itraconazol ức chế CYP3A4 mạnh làm giảm chuyển hóa của tolvaptan",
    "clinicalImpact": "Tăng nồng độ tolvaptan trong huyết thanh, tăng nguy cơ tác dụng không mong muốn (tăng nồng độ natri huyết thanh, đa niệu, khát nước, giảm thể tích tuần hoàn...)",
    "recommendation": "Chống chỉ định phối hợp. Cân nhắc thay đổi sang các thuốc nhóm khác có cùng chỉ định và ít có nguy cơ tương tác hơn: Trong trường hợp bắt buộc sử dụng thuốc kháng nấm azol, thay itraconazol bằng fluconazol (nhưng tránh dùng liều cao, có tác dụng ức chế mạnh CYP3A4)."
  },
  {
    "stt": 466,
    "drug1": "Itraconazol",
    "drug2": "Lercanidipin",
    "mechanism": "Itraconazol ức chế CYP3A4 mạnh làm giảm chuyển hóa của lercanidipin",
    "clinicalImpact": "Tăng nồng độ lercanidipin, tăng nguy cơ hạ huyết áp nghiêm trọng",
    "recommendation": "Chống chỉ định phối hợp. Cân nhắc thay đổi sang các thuốc nhóm khác có cùng chỉ định và ít có nguy cơ tương tác hơn: Trong trường hợp bắt buộc sử dụng thuốc kháng nấm azol, thay itraconazol bằng fluconazol (nhưng tránh dùng liều cao, có tác dụng ức chế mạnh CYP3A4)."
  },
  {
    "stt": 467,
    "drug1": "Itraconazol",
    "drug2": "Vardenafil",
    "mechanism": "Itraconazol ức chế CYP3A4 làm giảm chuyển hóa của vardenafil",
    "clinicalImpact": "Tăng nồng độ vardenafil trong huyết thanh, tăng nguy cơ kéo dài khoảng QT",
    "recommendation": "Chống chỉ định phối hợp"
  },
  {
    "stt": 468,
    "drug1": "Itraconazol",
    "drug2": "Quetiapin",
    "mechanism": "Itraconazol ức chế CYP3A4 mạnh làm giảm chuyển hóa của quetiapin",
    "clinicalImpact": "Tăng nồng độ của quetiapin, tăng nguy cơ kéo dài khoảng QT",
    "recommendation": "Chống chỉ định phối hợp. Cân nhắc thay đổi sang các thuốc nhóm khác có cùng chỉ định và ít có nguy cơ tương tác hơn: Trong trường hợp bắt buộc sử dụng thuốc kháng nấm azol, thay itraconazol bằng fluconazol (nhưng tránh dùng liều cao, có tác dụng ức chế mạnh CYP3A4)."
  },
  {
    "stt": 469,
    "drug1": "Ivabradin",
    "drug2": "Lopinavir/ritonavir",
    "mechanism": "Lopinavir/ritonav ir ức chế CYP3A4 mạnh làm giảm chuyển hóa của ivabradin",
    "clinicalImpact": "Tăng nồng độ ivabradin trong huyết thanh, tăng nguy cơ kéo dài khoảng QT và chậm nhịp tim",
    "recommendation": "Chống chỉ định phối hợp"
  },
  {
    "stt": 470,
    "drug1": "Ivabradin",
    "drug2": "Saquinavir +/- ritonavir",
    "mechanism": "Saquinavir ức chế CYP3A4 mạnh làm giảm chuyển hóa của ivabradin",
    "clinicalImpact": "Tăng nồng độ ivabradin trong huyết thanh, tăng nguy cơ kéo dài khoảng QT và chậm nhịp tim",
    "recommendation": "Chống chỉ định phối hợp"
  },
  {
    "stt": 471,
    "drug1": "Ivabradin",
    "drug2": "Posaconazol",
    "mechanism": "Posaconazol ức chế CYP3A4 mạnh làm giảm chuyển hóa của ivabradin",
    "clinicalImpact": "Tăng nồng độ ivabradin trong huyết thanh, tăng nguy cơ kéo dài khoảng QT và chậm nhịp tim",
    "recommendation": "Chống chỉ định phối hợp. Cân nhắc thay đổi sang các thuốc nhóm khác có cùng chỉ định và ít có nguy cơ tương tác hơn: Trong trường hợp bắt buộc sử dụng thuốc kháng nấm azol, thay posaconazol bằng fluconazol (nhưng tránh dùng liều cao, có tác dụng ức chế mạnh CYP3A4)."
  },
  {
    "stt": 472,
    "drug1": "Ivabradin",
    "drug2": "Voriconazol",
    "mechanism": "Voriconazol ức chế CYP3A4 mạnh làm giảm chuyển hóa của ivabradin",
    "clinicalImpact": "Tăng nồng độ ivabradin trong huyết thanh, tăng nguy cơ kéo dài khoảng QT và chậm nhịp tim",
    "recommendation": "Chống chỉ định phối hợp. Cân nhắc thay đổi sang các thuốc nhóm khác có cùng chỉ định và ít có nguy cơ tương tác hơn: Trong trường hợp bắt buộc sử dụng thuốc kháng nấm azol, thay voriconazol bằng fluconazol (nhưng tránh dùng liều cao, có tác dụng ức chế mạnh CYP3A4)."
  },
  {
    "stt": 473,
    "drug1": "Ivabradin",
    "drug2": "Verapamil",
    "mechanism": "Verapamil ức chế CYP3A4 làm giảm chuyển hóa của ivabradin và hiệp đồng tác dụng làm chậm nhịp tim của ivabradin",
    "clinicalImpact": "Tăng nồng độ ivabradin trong huyết thanh, tăng nguy cơ kéo dài khoảng QT và chậm nhịp tim",
    "recommendation": "Chống chỉ định phối hợp"
  },
  {
    "stt": 474,
    "drug1": "Kali clorid (dạng uống giải phóng kéo dài)",
    "drug2": "Trihexyphe nidyl",
    "mechanism": "Trihexyphenidyl kháng cholinergic gây tồn lưu hoặc làm tăng thời gian kali qua đường tiêu hóa khi sử dụng đường uống, gây loét đường tiêu hóa",
    "clinicalImpact": "Tăng nguy cơ loét tiêu hóa",
    "recommendation": "1. Tốt nhất nên tránh phối hợp, đặc biệt ở người cao tuổi. Cân nhắc chuyển sang sử dụng kali đường tĩnh mạch. 2. Trong trường hợp bắt buộc sử dụng đồng thời, cân nhắc một số khuyến cáo sau giúp giảm nguy cơ loét tiêu hóa: (1) uống ít nhất 100 mL nước sau khi uống kali, (2) ngồi hoặc đứng thẳng trong ít nhất 5 - 10 phút sau khi uống thuốc."
  },
  {
    "stt": 475,
    "drug1": "Kali clorid (dạng uống giải phóng kéo dài)",
    "drug2": "Solifenacin",
    "mechanism": "Solifenacin kháng cholinergic gây tồn lưu hoặc làm tăng thời gian kali qua đường tiêu hóa khi sử dụng đường uống, gây loét đường tiêu hóa",
    "clinicalImpact": "Tăng nguy cơ loét tiêu hóa",
    "recommendation": "1. Tốt nhất nên tránh phối hợp, đặc biệt ở người cao tuổi. Cân nhắc chuyển sang sử dụng kali đường tĩnh mạch. 2. Trong trường hợp bắt buộc sử dụng đồng thời, cân nhắc một số khuyến cáo sau giúp giảm nguy cơ loét tiêu hóa: (1) uống ít nhất 100 mL nước sau khi uống kali, (2) ngồi hoặc đứng thẳng trong ít nhất 5 - 10 phút sau khi uống thuốc."
  },
  {
    "stt": 476,
    "drug1": "Kali clorid (dạng uống giải phóng kéo dài)",
    "drug2": "Oxybutynin",
    "mechanism": "Oxybutynin kháng cholinergic gây tồn lưu hoặc làm tăng thời gian kali qua đường tiêu hóa khi sử dụng đường uống, gây loét đường tiêu hóa",
    "clinicalImpact": "Tăng nguy cơ loét tiêu hóa",
    "recommendation": "1. Tốt nhất nên tránh phối hợp, đặc biệt ở người cao tuổi. Cân nhắc chuyển sang sử dụng kali đường tĩnh mạch. 2. Trong trường hợp bắt buộc sử dụng đồng thời, cân nhắc một số khuyến cáo sau giúp giảm nguy cơ loét tiêu hóa: (1) uống ít nhất 100 mL nước sau khi uống kali, (2) ngồi hoặc đứng thẳng trong ít nhất 5 - 10 phút sau khi uống thuốc."
  },
  {
    "stt": 477,
    "drug1": "Ketoprofen",
    "drug2": "Ketorolac",
    "mechanism": "Hiệp đồng tác dụng kích ứng đường tiêu hóa",
    "clinicalImpact": "Tăng nguy cơ xuất huyết tiêu hóa nghiêm trọng (sử dụng đồng thời ketorolac với 1 NSAID khác làm tăng nguy cơ xuất huyết tiêu hóa gấp 5 lần so với phối hợp 2 NSAID khác)",
    "recommendation": "Chống chỉ định phối hợp. Cần đặc biệt lưu ý nguy cơ tương tác trong trường hợp giảm đau hậu phẫu."
  },
  {
    "stt": 478,
    "drug1": "Ketorolac",
    "drug2": "Lornoxicam",
    "mechanism": "Hiệp đồng tác dụng kích ứng đường tiêu hóa",
    "clinicalImpact": "Tăng nguy cơ xuất huyết tiêu hóa nghiêm trọng (sử dụng đồng thời ketorolac với 1 NSAID khác làm tăng nguy cơ xuất huyết tiêu hóa gấp 5 lần so với phối hợp 2 NSAID khác)",
    "recommendation": "Chống chỉ định phối hợp. Cần đặc biệt lưu ý nguy cơ tương tác trong trường hợp giảm đau hậu phẫu."
  },
  {
    "stt": 479,
    "drug1": "Ketorolac",
    "drug2": "Loxoprofen",
    "mechanism": "Hiệp đồng tác dụng kích ứng đường tiêu hóa",
    "clinicalImpact": "Tăng nguy cơ xuất huyết tiêu hóa nghiêm trọng (sử dụng đồng thời ketorolac với 1 NSAID khác làm tăng nguy cơ xuất huyết tiêu hóa gấp 5 lần so với phối hợp 2 NSAID khác)",
    "recommendation": "Chống chỉ định phối hợp. Cần đặc biệt lưu ý nguy cơ tương tác trong trường hợp giảm đau hậu phẫu."
  },
  {
    "stt": 480,
    "drug1": "Ketorolac",
    "drug2": "Meloxicam",
    "mechanism": "Hiệp đồng tác dụng kích ứng đường tiêu hóa",
    "clinicalImpact": "Tăng nguy cơ xuất huyết tiêu hóa nghiêm trọng (sử dụng đồng thời ketorolac với 1 NSAID khác làm tăng nguy cơ xuất huyết tiêu hóa gấp 5 lần so với phối hợp 2 NSAID khác)",
    "recommendation": "Chống chỉ định phối hợp. Cần đặc biệt lưu ý nguy cơ tương tác trong trường hợp giảm đau hậu phẫu."
  },
  {
    "stt": 481,
    "drug1": "Ketorolac",
    "drug2": "Nabumeton",
    "mechanism": "Hiệp đồng tác dụng kích ứng đường tiêu hóa",
    "clinicalImpact": "Tăng nguy cơ xuất huyết tiêu hóa nghiêm trọng (sử dụng đồng thời ketorolac với 1 NSAID khác làm tăng nguy cơ xuất huyết tiêu hóa gấp 5 lần so với phối hợp 2 NSAID khác)",
    "recommendation": "Chống chỉ định phối hợp. Cần đặc biệt lưu ý nguy cơ tương tác trong trường hợp giảm đau hậu phẫu."
  },
  {
    "stt": 482,
    "drug1": "Ketorolac",
    "drug2": "Naproxen",
    "mechanism": "Hiệp đồng tác dụng kích ứng đường tiêu hóa",
    "clinicalImpact": "Tăng nguy cơ xuất huyết tiêu hóa nghiêm trọng (sử dụng đồng thời ketorolac với 1 NSAID khác làm tăng nguy cơ xuất huyết tiêu hóa gấp 5 lần so với phối hợp 2 NSAID khác)",
    "recommendation": "Chống chỉ định phối hợp. Cần đặc biệt lưu ý nguy cơ tương tác trong trường hợp giảm đau hậu phẫu."
  },
  {
    "stt": 483,
    "drug1": "Ketorolac",
    "drug2": "Piroxicam",
    "mechanism": "Hiệp đồng tác dụng kích ứng đường tiêu hóa",
    "clinicalImpact": "Tăng nguy cơ xuất huyết tiêu hóa nghiêm trọng (sử dụng đồng thời ketorolac với 1 NSAID khác làm tăng nguy cơ xuất huyết tiêu hóa gấp 5 lần so với phối hợp 2 NSAID khác)",
    "recommendation": "Chống chỉ định phối hợp. Cần đặc biệt lưu ý nguy cơ tương tác trong trường hợp giảm đau hậu phẫu."
  },
  {
    "stt": 484,
    "drug1": "Ketorolac",
    "drug2": "Talniflumat",
    "mechanism": "Hiệp đồng tác dụng kích ứng đường tiêu hóa",
    "clinicalImpact": "Tăng nguy cơ xuất huyết tiêu hóa nghiêm trọng (sử dụng đồng thời ketorolac với 1 NSAID khác làm tăng nguy cơ xuất huyết tiêu hóa gấp 5 lần so với phối hợp 2 NSAID khác)",
    "recommendation": "Chống chỉ định phối hợp. Cần đặc biệt lưu ý nguy cơ tương tác trong trường hợp giảm đau hậu phẫu."
  },
  {
    "stt": 485,
    "drug1": "Ketorolac",
    "drug2": "Tenoxicam",
    "mechanism": "Hiệp đồng tác dụng kích ứng đường tiêu hóa",
    "clinicalImpact": "Tăng nguy cơ xuất huyết tiêu hóa nghiêm trọng (sử dụng đồng thời ketorolac với 1 NSAID khác làm tăng nguy cơ xuất huyết tiêu hóa gấp 5 lần so với phối hợp 2 NSAID khác)",
    "recommendation": "Chống chỉ định phối hợp. Cần đặc biệt lưu ý nguy cơ tương tác trong trường hợp giảm đau hậu phẫu."
  },
  {
    "stt": 486,
    "drug1": "Ketorolac",
    "drug2": "Zaltoprofen",
    "mechanism": "Hiệp đồng tác dụng kích ứng đường tiêu hóa",
    "clinicalImpact": "Tăng nguy cơ xuất huyết tiêu hóa nghiêm trọng (sử dụng đồng thời ketorolac với 1 NSAID khác làm tăng nguy cơ xuất huyết tiêu hóa gấp 5 lần so với phối hợp 2 NSAID khác)",
    "recommendation": "Chống chỉ định phối hợp. Cần đặc biệt lưu ý nguy cơ tương tác trong trường hợp giảm đau hậu phẫu."
  },
  {
    "stt": 487,
    "drug1": "Lansoprazol",
    "drug2": "Rilpivirin",
    "mechanism": "Giảm hấp thu rilpivirin do tăng pH dạ dày",
    "clinicalImpact": "Giảm nồng độ rilpivirin trong huyết thanh, giảm hiệu quả điều trị",
    "recommendation": "Chống chỉ định phối hợp. Trong trường hợp thay thế bằng thuốc kháng H2, sử dụng các thuốc H2 ít nhất 12 giờ trước hoặc 4 giờ sau khi uống rilpivirin."
  },
  {
    "stt": 488,
    "drug1": "Lercanidipin",
    "drug2": "Lopinavir/ritonavir",
    "mechanism": "Lopinavir/ritonav ir ức chế CYP3A4 mạnh làm giảm chuyển hóa của lercanidipin",
    "clinicalImpact": "Tăng nồng độ lercanidipin, tăng nguy cơ hạ huyết áp nghiêm trọng",
    "recommendation": "Chống chỉ định phối hợp"
  },
  {
    "stt": 489,
    "drug1": "Lercanidipin",
    "drug2": "Saquinavir +/- ritonavir",
    "mechanism": "Saquinavir ức chế CYP3A4 mạnh làm giảm chuyển hóa của lercanidipin",
    "clinicalImpact": "Tăng nồng độ lercanidipin, tăng nguy cơ hạ huyết áp nghiêm trọng",
    "recommendation": "Chống chỉ định phối hợp"
  },
  {
    "stt": 490,
    "drug1": "Lercanidipin",
    "drug2": "Posaconazol",
    "mechanism": "Posaconazol ức chế CYP3A4 mạnh làm giảm chuyển hóa của lercanidipin",
    "clinicalImpact": "Tăng nồng độ lercanidipin, tăng nguy cơ hạ huyết áp nghiêm trọng",
    "recommendation": "Chống chỉ định phối hợp. Cân nhắc thay đổi sang các thuốc nhóm khác có cùng chỉ định và ít có nguy cơ tương tác hơn: Trong trường hợp bắt buộc sử dụng thuốc kháng nấm azol, thay posaconazol bằng fluconazol (nhưng tránh dùng liều cao, có tác dụng ức chế mạnh CYP3A4)."
  },
  {
    "stt": 491,
    "drug1": "Lercanidipin",
    "drug2": "Voriconazol",
    "mechanism": "Voriconazol ức chế CYP3A4 mạnh làm giảm chuyển hóa của lercanidipin",
    "clinicalImpact": "Tăng nồng độ lercanidipin, tăng nguy cơ hạ huyết áp nghiêm trọng",
    "recommendation": "Chống chỉ định phối hợp. Cân nhắc thay đổi sang các thuốc nhóm khác có cùng chỉ định và ít có nguy cơ tương tác hơn: Trong trường hợp bắt buộc sử dụng thuốc kháng nấm azol, thay voriconazol bằng fluconazol (nhưng tránh dùng liều cao, có tác dụng ức chế mạnh CYP3A4)."
  },
  {
    "stt": 492,
    "drug1": "Levodopa/carb idopa +/- entacapon",
    "drug2": "Metoclopram id",
    "mechanism": "Đối kháng tác dụng của nhau",
    "clinicalImpact": "Giảm hiệu quả của cả hai thuốc",
    "recommendation": "Chống chỉ định phối hợp"
  },
  {
    "stt": 493,
    "drug1": "Levodopa/carb idopa +/- entacapon",
    "drug2": "Sulpirid",
    "mechanism": "Đối kháng tác dụng của nhau",
    "clinicalImpact": "Giảm hiệu quả của cả hai thuốc",
    "recommendation": "Chống chỉ định phối hợp"
  },
  {
    "stt": 494,
    "drug1": "Levodopa/carb idopa +/- entacapon",
    "drug2": "Linezolid",
    "mechanism": "Tăng tích lũy noradrenalin (norepinephrin) và dopamin",
    "clinicalImpact": "Tăng nguy cơ xuất hiện cơn tăng huyết áp (đau đầu, đánh trống ngực, cứng cổ, tăng huyết áp)",
    "recommendation": "Chống chỉ định sử dụng levodopa/carbidopa đồng thời hoặc trong vòng 14 ngày trước đó có sử dụng linezolid."
  },
  {
    "stt": 495,
    "drug1": "Levodopa/carb idopa +/- entacapon",
    "drug2": "Xanh methylen (sử dụng đường tiêm tĩnh mạch)",
    "mechanism": "Tăng tích lũy noradrenalin (norepinephrin) và dopamin",
    "clinicalImpact": "Tăng nguy cơ xuất hiện cơn tăng huyết áp (đau đầu, đánh trống ngực, cứng cổ, tăng huyết áp)",
    "recommendation": "Chống chỉ định sử dụng levodopa/carbidopa đồng thời hoặc trong vòng 14 ngày trước đó có sử dụng xanh methylen."
  },
  {
    "stt": 496,
    "drug1": "Levofloxacin",
    "drug2": "Thioridazin",
    "mechanism": "Hiệp đồng tăng tác dụng",
    "clinicalImpact": "Tăng nguy cơ kéo dài khoảng QT, xoắn đỉnh",
    "recommendation": "1. Chống chỉ định phối hợp ở các bệnh nhân có hội chứng QT kéo dài do di truyền hoặc mắc phải. 2. Trên các đối tượng bệnh nhân khác, tốt nhất nên tránh phối hợp các thuốc này. Trong trường hợp cần thiết phối hợp, cần đánh giá cẩn thận nguy cơ/lợi ích và lượng giá các yếu tố nguy cơ trên từng bệnh nhân, đặc biệt là rối loạn điện giải (hạ kali máu, hạ magie máu, hạ calci máu), nhịp tim chậm, nữ giới trước khi quyết định kê đơn."
  },
  {
    "stt": 497,
    "drug1": "Levosulpirid",
    "drug2": "Thioridazin",
    "mechanism": "Hiệp đồng tăng tác dụng",
    "clinicalImpact": "Tăng nguy cơ kéo dài khoảng QT, xoắn đỉnh",
    "recommendation": "1. Chống chỉ định phối hợp ở các bệnh nhân có hội chứng QT kéo dài do di truyền hoặc mắc phải. 2. Trên các đối tượng bệnh nhân khác, tốt nhất nên tránh phối hợp các thuốc này. Trong trường hợp cần thiết phối hợp, cần đánh giá cẩn thận nguy cơ/lợi ích và lượng giá các yếu tố nguy cơ trên từng bệnh nhân, đặc biệt là rối loạn điện giải (hạ kali máu, hạ magie máu, hạ calci máu), nhịp tim chậm, nữ giới trước khi quyết định kê đơn."
  },
  {
    "stt": 498,
    "drug1": "Levosulpirid",
    "drug2": "Sparfloxacin",
    "mechanism": "Hiệp đồng tăng tác dụng",
    "clinicalImpact": "Tăng nguy cơ kéo dài khoảng QT, xoắn đỉnh",
    "recommendation": "1. Chống chỉ định phối hợp ở các bệnh nhân có hội chứng QT kéo dài do di truyền hoặc mắc phải. 2. Trên các đối tượng bệnh nhân khác, tốt nhất nên tránh phối hợp các thuốc này. Trong trường hợp cần thiết phối hợp, cần đánh giá cẩn thận nguy cơ/lợi ích và lượng giá các yếu tố nguy cơ trên từng bệnh nhân, đặc biệt là rối loạn điện giải (hạ kali máu, hạ magie máu, hạ calci máu), nhịp tim chậm, nữ giới trước khi quyết định kê đơn."
  },
  {
    "stt": 499,
    "drug1": "Linezolid",
    "drug2": "Paroxetin",
    "mechanism": "Hiệp đồng tác dụng serotonin",
    "clinicalImpact": "Tăng nguy cơ hội chứng serotonin (sốt cao, rối loạn nhận thức, tăng phản xạ, mất phối hợp, rung giật cơ, cứng cơ, co giật, nhịp tim nhanh, tăng huyết áp, tăng thân nhiệt, vã mồ hôi, ảo giác, kích động hoặc bồn chồn…)",
    "recommendation": "1. Cố gắng tránh sử dụng đồng thời linezolid và paroxetin. Tốt nhất các thuốc này nên sử dụng cách nhau 2 tuần. Cân nhắc thay đổi sang các thuốc nhóm khác có cùng chỉ định và ít có nguy cơ tương tác hơn. 2. Trong hợp không thể trì hoãn điều trị được 2 tuần, bắt buộc sử dụng dài ngày hoặc khẩn cấp bằng linezolid và không có thuốc khác thay thế, cân bằng lợi ích và nguy cơ xảy ra hội chứng serotonin. Nếu lợi ích vượt trội nguy cơ, vẫn có thể sử dụng đồng thời nhưng cần giám sát chặt chẽ chặt chẽ bệnh nhân, đặc biệt trong tháng đầu tiên sử dụng đồng thời 2 thuốc."
  },
  {
    "stt": 500,
    "drug1": "Linezolid",
    "drug2": "Sertralin",
    "mechanism": "Hiệp đồng tác dụng serotonin",
    "clinicalImpact": "Tăng nguy cơ hội chứng serotonin (sốt cao, rối loạn nhận thức, tăng phản xạ, mất phối hợp, rung giật cơ, cứng cơ, co giật, nhịp tim nhanh, tăng huyết áp, tăng thân nhiệt, vã mồ hôi, ảo giác, kích động hoặc bồn chồn…)",
    "recommendation": "1. Cố gắng tránh sử dụng đồng thời linezolid và sertralin. Tốt nhất các thuốc này nên sử dụng cách nhau 2 tuần. Cân nhắc thay đổi sang các thuốc nhóm khác có cùng chỉ định và ít có nguy cơ tương tác hơn. 2. Trong hợp không thể trì hoãn điều trị được 2 tuần, bắt buộc sử dụng dài ngày hoặc khẩn cấp bằng linezolid và không có thuốc khác thay thế, cân bằng lợi ích và nguy cơ xảy ra hội chứng serotonin. Nếu lợi ích vượt trội nguy cơ, vẫn có thể sử dụng đồng thời nhưng cần giám sát chặt chẽ chặt chẽ bệnh nhân, đặc biệt trong tháng đầu tiên sử dụng đồng thời 2 thuốc."
  },
  {
    "stt": 501,
    "drug1": "Linezolid",
    "drug2": "Venlafaxin",
    "mechanism": "Hiệp đồng tác dụng serotonin",
    "clinicalImpact": "Tăng nguy cơ hội chứng serotonin (sốt cao, rối loạn nhận thức, tăng phản xạ, mất phối hợp, rung giật cơ, cứng cơ, co giật, nhịp tim nhanh, tăng huyết áp, tăng thân nhiệt, vã mồ hôi, ảo giác, kích động hoặc bồn chồn…)",
    "recommendation": "1. Cố gắng tránh sử dụng đồng thời linezolid và venlafaxin. Tốt nhất các thuốc này nên sử dụng cách nhau 2 tuần. Cân nhắc thay đổi sang các thuốc nhóm khác có cùng chỉ định và ít có nguy cơ tương tác hơn. 2. Trong hợp không thể trì hoãn điều trị được 2 tuần, bắt buộc sử dụng dài ngày hoặc khẩn cấp bằng linezolid và không có thuốc khác thay thế, cân bằng lợi ích và nguy cơ xảy ra hội chứng serotonin. Nếu lợi ích vượt trội nguy cơ, vẫn có thể sử dụng đồng thời nhưng cần giám sát chặt chẽ chặt chẽ bệnh nhân, đặc biệt trong tháng đầu tiên sử dụng đồng thời 2 thuốc."
  },
  {
    "stt": 502,
    "drug1": "Linezolid",
    "drug2": "Milnacipran",
    "mechanism": "Hiệp đồng tác dụng serotonin",
    "clinicalImpact": "Tăng nguy cơ hội chứng serotonin (sốt cao, rối loạn nhận thức, tăng phản xạ, mất phối hợp, rung giật cơ, cứng cơ, co giật, nhịp tim nhanh, tăng huyết áp, tăng thân nhiệt, vã mồ hôi, ảo giác, kích động hoặc bồn chồn…)",
    "recommendation": "1. Cố gắng tránh sử dụng đồng thời linezolid và milnacriptan. Tốt nhất các thuốc này nên sử dụng cách nhau 2 tuần. Cân nhắc thay đổi sang các thuốc nhóm khác có cùng chỉ định và ít có nguy cơ tương tác hơn. 2. Trong hợp không thể trì hoãn điều trị được 2 tuần, bắt buộc sử dụng dài ngày hoặc khẩn cấp bằng linezolid và không có thuốc khác thay thế, cân bằng lợi ích và nguy cơ xảy ra hội chứng serotonin. Nếu lợi ích vượt trội nguy cơ, vẫn có thể sử dụng đồng thời nhưng cần giám sát chặt chẽ chặt chẽ bệnh nhân, đặc biệt trong tháng đầu tiên sử dụng đồng thời 2 thuốc."
  },
  {
    "stt": 503,
    "drug1": "Linezolid",
    "drug2": "Trazodon",
    "mechanism": "Hiệp đồng tác dụng serotonin",
    "clinicalImpact": "Tăng nguy cơ hội chứng serotonin (sốt cao, rối loạn nhận thức, tăng phản xạ, mất phối hợp, rung giật cơ, cứng cơ, co giật, nhịp tim nhanh, tăng huyết áp, tăng thân nhiệt, vã mồ hôi, ảo giác, kích động hoặc bồn chồn…)",
    "recommendation": "1. Cố gắng tránh sử dụng đồng thời linezolid và trazodon. Tốt nhất các thuốc này nên sử dụng cách nhau 2 tuần. Cân nhắc thay đổi sang các thuốc nhóm khác có cùng chỉ định và ít có nguy cơ tương tác hơn. 2. Trong hợp không thể trì hoãn điều trị được 2 tuần, bắt buộc sử dụng dài ngày hoặc khẩn cấp bằng linezolid và không có thuốc khác thay thế, cân bằng lợi ích và nguy cơ xảy ra hội chứng serotonin. Nếu lợi ích vượt trội nguy cơ, vẫn có thể sử dụng đồng thời nhưng cần giám sát chặt chẽ chặt chẽ bệnh nhân, đặc biệt trong tháng đầu tiên sử dụng đồng thời 2 thuốc."
  },
  {
    "stt": 504,
    "drug1": "Linezolid",
    "drug2": "Methylphen idat",
    "mechanism": "Hiệp đồng tác dụng serotonin",
    "clinicalImpact": "Tăng nguy cơ hội chứng serotonin (sốt cao, rối loạn nhận thức, tăng phản xạ, mất phối hợp, rung giật cơ, cứng cơ, co giật, nhịp tim nhanh, tăng huyết áp, tăng thân nhiệt, vã mồ hôi, ảo giác, kích động hoặc bồn chồn…)",
    "recommendation": "1. Cố gắng tránh sử dụng đồng thời linezolid và methylphenidat. Tốt nhất các thuốc này nên sử dụng cách nhau 2 tuần. Cân nhắc thay đổi sang các thuốc nhóm khác có cùng chỉ định và ít có nguy cơ tương tác hơn. 2. Trong hợp không thể trì hoãn điều trị được 2 tuần, bắt buộc sử dụng dài ngày hoặc khẩn cấp bằng linezolid và không có thuốc khác thay thế, cân bằng lợi ích và nguy cơ xảy ra hội chứng serotonin. Nếu lợi ích vượt trội nguy cơ, vẫn có thể sử dụng đồng thời nhưng cần giám sát chặt chẽ chặt chẽ bệnh nhân, đặc biệt trong tháng đầu tiên sử dụng đồng thời 2 thuốc."
  },
  {
    "stt": 505,
    "drug1": "Linezolid",
    "drug2": "Mirtazapin",
    "mechanism": "Hiệp đồng tác dụng serotonin",
    "clinicalImpact": "Tăng nguy cơ hội chứng serotonin (sốt cao, rối loạn nhận thức, tăng phản xạ, mất phối hợp, rung giật cơ, cứng cơ, co giật, nhịp tim nhanh, tăng huyết áp, tăng thân nhiệt, vã mồ hôi, ảo giác, kích động hoặc bồn chồn…)",
    "recommendation": "1. Cố gắng tránh sử dụng đồng thời linezolid và mirtazapin. Tốt nhất các thuốc này nên sử dụng cách nhau 2 tuần. Cân nhắc thay đổi sang các thuốc nhóm khác có cùng chỉ định và ít có nguy cơ tương tác hơn. 2. Trong hợp không thể trì hoãn điều trị được 2 tuần, bắt buộc sử dụng dài ngày hoặc khẩn cấp bằng linezolid và không có thuốc khác thay thế, cân bằng lợi ích và nguy cơ xảy ra hội chứng serotonin. Nếu lợi ích vượt trội nguy cơ, vẫn có thể sử dụng đồng thời nhưng cần giám sát chặt chẽ chặt chẽ bệnh nhân, đặc biệt trong tháng đầu tiên sử dụng đồng thời 2 thuốc."
  },
  {
    "stt": 506,
    "drug1": "Linezolid",
    "drug2": "Xanh methylen (sử dụng đường tiêm tĩnh mạch)",
    "mechanism": "Hiệp đồng tác dụng serotonin",
    "clinicalImpact": "Tăng nguy cơ hội chứng serotonin (sốt cao, rối loạn nhận thức, tăng phản xạ, mất phối hợp, rung giật cơ, cứng cơ, co giật, nhịp tim nhanh, tăng huyết áp, tăng thân nhiệt, vã mồ hôi, ảo giác, kích động hoặc bồn chồn…)",
    "recommendation": "1. Cố gắng tránh sử dụng đồng thời linezolid và xanh methylen. Tốt nhất các thuốc này nên sử dụng cách nhau 2 tuần. Cân nhắc thay đổi linezolid sang các thuốc nhóm khác có cùng chỉ định và ít có nguy cơ tương tác hơn. 2. Trong hợp không thể trì hoãn điều trị được 2 tuần, bắt buộc sử dụng cả hai thuốc và không có thuốc khác thay thế, cân bằng lợi ích và nguy cơ xảy ra hội chứng serotonin. Nếu lợi ích vượt trội nguy cơ, vẫn có thể sử dụng đồng thời nhưng cần giám sát chặt chẽ chặt chẽ bệnh nhân, đặc biệt trong tháng đầu tiên sử dụng đồng thời 2 thuốc. Lưu ý: xanh methylen sử dụng đường tiêm tĩnh mạch."
  },
  {
    "stt": 507,
    "drug1": "Linezolid",
    "drug2": "Sumatriptan",
    "mechanism": "Hiệp đồng tác dụng serotonin",
    "clinicalImpact": "Tăng nguy cơ hội chứng serotonin (sốt cao, rối loạn nhận thức, tăng phản xạ, mất phối hợp, rung giật cơ, cứng cơ, co giật, nhịp tim nhanh, tăng huyết áp, tăng thân nhiệt, vã mồ hôi, ảo giác, kích động hoặc bồn chồn…)",
    "recommendation": "1. Cố gắng tránh sử dụng đồng thời linezolid và sumatriptan. Tốt nhất các thuốc này nên sử dụng cách nhau 2 tuần. Cân nhắc thay đổi sang các thuốc nhóm khác có cùng chỉ định và ít có nguy cơ tương tác hơn. 2. Trong hợp không thể trì hoãn điều trị được 2 tuần, bắt buộc sử dụng dài ngày hoặc khẩn cấp bằng linezolid và không có thuốc khác thay thế, cân bằng lợi ích và nguy cơ xảy ra hội chứng serotonin. Nếu lợi ích vượt trội nguy cơ, vẫn có thể sử dụng đồng thời nhưng cần giám sát chặt chẽ chặt chẽ bệnh nhân, đặc biệt trong tháng đầu tiên sử dụng đồng thời 2 thuốc."
  },
  {
    "stt": 508,
    "drug1": "Linezolid",
    "drug2": "Pethidin",
    "mechanism": "Hiệp đồng tác dụng serotonin",
    "clinicalImpact": "Tăng nguy cơ hội chứng serotonin (sốt cao, rối loạn nhận thức, tăng phản xạ, mất phối hợp, rung giật cơ, cứng cơ, co giật, nhịp tim nhanh, tăng huyết áp, tăng thân nhiệt, vã mồ hôi, ảo giác, kích động hoặc bồn chồn…)",
    "recommendation": "1. Cố gắng tránh sử dụng đồng thời linezolid và pethidin. Tốt nhất các thuốc này nên sử dụng cách nhau 2 tuần. Cân nhắc thay đổi sang các thuốc nhóm khác có cùng chỉ định và ít có nguy cơ tương tác hơn. Trong trường hợp bắt buộc sử dụng opioid, có thể đổi sang các opiod khác không có hoạt tính ức chế thu hồi serotonin (morphin, codein, oxycodon, buprenorphin) 2. Trong hợp không thể trì hoãn điều trị được 2 tuần, bắt buộc sử dụng dài ngày hoặc khẩn cấp bằng linezolid và không có thuốc khác thay thế, cân bằng lợi ích và nguy cơ xảy ra hội chứng serotonin. Nếu lợi ích vượt trội nguy cơ, vẫn có thể sử dụng đồng thời nhưng cần giám sát chặt chẽ chặt chẽ bệnh nhân, đặc biệt trong tháng đầu tiên sử dụng đồng thời 2 thuốc."
  },
  {
    "stt": 509,
    "drug1": "Linezolid",
    "drug2": "Tramadol",
    "mechanism": "Hiệp đồng tác dụng serotonin",
    "clinicalImpact": "Tăng nguy cơ hội chứng serotonin (sốt cao, rối loạn nhận thức, tăng phản xạ, mất phối hợp, rung giật cơ, cứng cơ, co giật, nhịp tim nhanh, tăng huyết áp, tăng thân nhiệt, vã mồ hôi, ảo giác, kích động hoặc bồn chồn…)",
    "recommendation": "1. Cố gắng tránh sử dụng đồng thời linezolid và tramadol. Tốt nhất các thuốc này nên sử dụng cách nhau 2 tuần. Cân nhắc thay đổi sang các thuốc nhóm khác có cùng chỉ định và ít có nguy cơ tương tác hơn. Trong trường hợp bắt buộc sử dụng opioid, có thể đổi sang các opiod khác không có hoạt tính ức chế thu hồi serotonin (morphin, codein, oxycodon, buprenorphin) 2. Trong hợp không thể trì hoãn điều trị được 2 tuần, bắt buộc sử dụng dài ngày hoặc khẩn cấp bằng linezolid và không có thuốc khác thay thế, cân bằng lợi ích và nguy cơ xảy ra hội chứng serotonin. Nếu lợi ích vượt trội nguy cơ, vẫn có thể sử dụng đồng thời nhưng cần giám sát chặt chẽ chặt chẽ bệnh nhân, đặc biệt trong tháng đầu tiên sử dụng đồng thời 2 thuốc."
  },
  {
    "stt": 510,
    "drug1": "Linezolid",
    "drug2": "Methadon",
    "mechanism": "Hiệp đồng tác dụng serotonin",
    "clinicalImpact": "Tăng nguy cơ hội chứng serotonin (sốt cao, rối loạn nhận thức, tăng phản xạ, mất phối hợp, rung giật cơ, cứng cơ, co giật, nhịp tim nhanh, tăng huyết áp, tăng thân nhiệt, vã mồ hôi, ảo giác, kích động hoặc bồn chồn…)",
    "recommendation": "1. Cố gắng tránh sử dụng đồng thời linezolid và methadon. Tốt nhất các thuốc này nên sử dụng cách nhau 2 tuần. Cân nhắc thay đổi sang các thuốc nhóm khác có cùng chỉ định và ít có nguy cơ tương tác hơn. Trong trường hợp bắt buộc sử dụng opioid, có thể đổi sang các opiod khác không có hoạt tính ức chế thu hồi serotonin (morphin, codein, oxycodon, buprenorphin) 2. Trong hợp không thể trì hoãn điều trị được 2 tuần, bắt buộc sử dụng dài ngày hoặc khẩn cấp bằng linezolid và không có thuốc khác thay thế, cân bằng lợi ích và nguy cơ xảy ra hội chứng serotonin. Nếu lợi ích vượt trội nguy cơ, vẫn có thể sử dụng đồng thời nhưng cần giám sát chặt chẽ chặt chẽ bệnh nhân, đặc biệt trong tháng đầu tiên sử dụng đồng thời 2 thuốc."
  },
  {
    "stt": 511,
    "drug1": "Linezolid",
    "drug2": "Methyldopa",
    "mechanism": "Chưa rõ",
    "clinicalImpact": "Tăng nguy cơ xuất hiện cơn tăng huyết áp (đau đầu, đánh trống ngực, cứng cổ)",
    "recommendation": "Chống chỉ định phối hợp"
  },
  {
    "stt": 512,
    "drug1": "Linezolid",
    "drug2": "Pseudoephedrin (sử dụng đường uống)",
    "mechanism": "Tăng tích lũy noradrenalin (norepinephrin)",
    "clinicalImpact": "Tăng nguy cơ xuất hiện cơn tăng huyết áp (đau đầu, đánh trống ngực, cứng cổ, tăng huyết áp)",
    "recommendation": "Chống chỉ định sử dụng pseudoephedrin (sử dụng đường uống) đồng thời hoặc trong vòng 14 ngày trước đó có sử dụng linezolid."
  },
  {
    "stt": 513,
    "drug1": "Linezolid",
    "drug2": "Phenylephrin (sử dụng đường uống)",
    "mechanism": "Tăng tích lũy noradrenalin (norepinephrin)",
    "clinicalImpact": "Tăng nguy cơ xuất hiện cơn tăng huyết áp (đau đầu, đánh trống ngực, cứng cổ, tăng huyết áp)",
    "recommendation": "1. Chống chỉ định sử dụng phenylephrin sử dụng đường uống đồng thời hoặc trong vòng 14 ngày trước đó có sử dụng linezolid. 2. Đối với phenylephrin sử dụng đường tiêm, cần sử dụng rất thận trọng trên bệnh nhân đang dùng linezolid trong điều kiện giám sát huyết áp chặt chẽ."
  },
  {
    "stt": 514,
    "drug1": "Linezolid",
    "drug2": "Nefopam",
    "mechanism": "Nefopam ức chế thu hồi noradrenalin (norepinephrin) và serotonin trên hệ thần kinh",
    "clinicalImpact": "Tăng nguy cơ kích thích thần kinh trung ương (co giật, ảo giác và kích động)",
    "recommendation": "Chống chỉ định phối hợp"
  },
  {
    "stt": 515,
    "drug1": "Lisinopril",
    "drug2": "Sacubitril/val sartan (sacubitril)",
    "mechanism": "Tăng tích lũy bradykinin gây phù mạch",
    "clinicalImpact": "Tăng nguy cơ phù mạch",
    "recommendation": "Chống chỉ định phối hợp. Chỉ bắt đầu sử dụng Sacubitril/valsartan (sacubitril) sau khi ngừng lisinopril ít nhất 36 giờ."
  },
  {
    "stt": 516,
    "drug1": "Lopinavir/riton avir",
    "drug2": "Lovastatin",
    "mechanism": "Lopinavir/ritonav ir ức chế CYP3A4 mạnh làm giảm chuyển hóa của lovastatin",
    "clinicalImpact": "Tăng nồng độ của lovastatin trong huyết thanh, tăng nguy cơ bệnh cơ hoặc tiêu cơ vân cấp",
    "recommendation": "Chống chỉ định phối hợp. Trong trường hợp bắt buộc sử dụng dẫn chất statin, thay lovastatin bằng các dẫn chất statin khác (ngoại trừ simvastatin), sử dụng liều thấp nhất có hiệu quả, atorvastatin không quá 20 mg/ngày, rosuvastatin không vượt quá 10 mg/ngày, pitavastatin và pravastatin không cần hiệu chỉnh liều khi phối hợp."
  },
  {
    "stt": 517,
    "drug1": "Lopinavir/riton avir",
    "drug2": "Simvastatin",
    "mechanism": "Lopinavir/ritonav ir ức chế CYP3A4 mạnh làm giảm chuyển hóa của simvastatin",
    "clinicalImpact": "Tăng nồng độ của simvastatin trong huyết thanh, tăng nguy cơ bệnh cơ hoặc tiêu cơ vân cấp",
    "recommendation": "Chống chỉ định phối hợp. Trong trường hợp bắt buộc sử dụng dẫn chất statin, thay simvastatin bằng các dẫn chất statin khác (ngoại trừ lovastatin) sử dụng liều thấp nhất có hiệu quả, atorvastatin không quá 20 mg/ngày, rosuvastatin không vượt quá 10 mg/ngày, pitavastatin và pravastatin không cần hiệu chỉnh liều khi phối hợp."
  },
  {
    "stt": 518,
    "drug1": "Lopinavir/ritonavir",
    "drug2": "Methylergometrin",
    "mechanism": "Lopinavir/ritonav ir ức chế CYP3A4 mạnh làm giảm chuyển hóa của methylergometrin",
    "clinicalImpact": "Tăng nồng độ của methylergometrin trong huyết thanh, tăng nguy cơ độc tính (nôn, buồn nôn, hoại tử đầu chi, thiếu máu cục bộ do co thắt mạch…)",
    "recommendation": "Tốt nhất nên tránh phối hợp. Đối với trường hợp điều trị băng huyết sau sinh, nếu không còn thuốc khác thay thế ở người bệnh đang sử dụng lopinavir/ritonavir sử dụng methylergometrin chỉ khi lợi ích vượt trội nguy cơ và sử dụng liều thấp nhất có hiệu quả trong thời gian ngắn nhất."
  },
  {
    "stt": 519,
    "drug1": "Lopinavir/riton avir",
    "drug2": "Ticagrelor",
    "mechanism": "Lopinavir/ritonav ir ức chế CYP3A4 mạnh làm giảm chuyển hóa của ticagrelor",
    "clinicalImpact": "Tăng nồng độ của ticagrelor trong huyết thanh, tăng nguy cơ xuất huyết",
    "recommendation": "Chống chỉ định phối hợp"
  },
  {
    "stt": 520,
    "drug1": "Lopinavir/riton avir",
    "drug2": "Ranolazin",
    "mechanism": "Lopinavir/ritonav ir ức chế CYP3A4 mạnh làm giảm chuyển hóa của ranolazin",
    "clinicalImpact": "Tăng nồng độ ranolazin trong huyết thanh, tăng nguy cơ kéo dài khoảng QT",
    "recommendation": "Chống chỉ định phối hợp"
  },
  {
    "stt": 521,
    "drug1": "Lopinavir/riton avir",
    "drug2": "Tolvaptan",
    "mechanism": "Lopinavir/ritonav ir ức chế CYP3A4 mạnh làm giảm chuyển hóa của tolvaptan",
    "clinicalImpact": "Tăng nồng độ tolvaptan trong huyết thanh, tăng nguy cơ tác dụng không mong muốn (tăng nồng độ natri huyết thanh, đa niệu, khát nước, giảm thể tích tuần hoàn...)",
    "recommendation": "Chống chỉ định phối hợp"
  },
  {
    "stt": 522,
    "drug1": "Lopinavir/ritonavir",
    "drug2": "Sildenafil",
    "mechanism": "Lopinavir/ritonav ir ức chế CYP3A4 làm giảm chuyển hóa của sildenafil",
    "clinicalImpact": "Tăng nồng độ sildenafil trong huyết thanh, tăng nguy cơ độc tính (hạ huyết áp, ngất, rối loạn thị giác)",
    "recommendation": "1. Chống chỉ định phối hợp trong trường hợp sử dụng sildenafil điều trị tăng áp động mạch phổi. 2. Trong trường hợp sử dụng sildenafil điều trị rối loạn cương dương, liều sildenafil không vượt quá 25 mg mỗi 48 giờ ở người đang sử dụng lopinavir/ritonavir."
  },
  {
    "stt": 523,
    "drug1": "Lopinavir/ritonavir",
    "drug2": "Quetiapin",
    "mechanism": "Lopinavir/ritonav ir ức chế CYP3A4 mạnh làm giảm chuyển hóa của quetiapin",
    "clinicalImpact": "Tăng nồng độ của quetiapin, tăng nguy cơ kéo dài khoảng QT",
    "recommendation": "Tốt nhất nên tránh phối hợp. Trong trường hợp bắt buộc sử dụng lopinavir/ritonavir, giảm liều quetiapin còn 1/6 liều so với liều bình thường."
  },
  {
    "stt": 524,
    "drug1": "Lopinavir/ritonavir (lopinavir)",
    "drug2": "Rifampicin",
    "mechanism": "Rifampicin cảm ứng CYP3A4 làm tăng chuyển hóa của lopinavir",
    "clinicalImpact": "Giảm nồng độ lopinavir trong huyết thanh, giảm hiệu quả điều trị",
    "recommendation": "Tốt nhất nên tránh phối hợp. Nếu bắt buộc phối hợp, điều chỉnh liều lopinavir/ritonavir (lopinavir 800 mg + ritonavir 200 mg hai lần mỗi ngày hoặc lopinavir 400 mg + ritonavir 400 mg hai lần mỗi ngày)"
  },
  {
    "stt": 525,
    "drug1": "Lopinavir/ritonavir (ritonavir)",
    "drug2": "Voriconazol",
    "mechanism": "Ritonavir cảm ứng CYP2C19 (hoặc ức chế CYP3A4 ở người thiếu hoặc giảm hoạt tính CYP2C19) làm tăng (hoặc giảm) chuyển hóa của voriconazol tùy thuộc từng cá thể (voriconazol là cơ chất của cả CYP3A4 và CYP2C19)",
    "clinicalImpact": "Giảm (hoặc tăng) nồng độ voriconazol.",
    "recommendation": "1. Việc phối hợp voriconazol và ritonavir liều cao (400mg mỗi 12 giờ) làm giảm rõ rệt nồng độ voriconazol, vì vậy, chống chỉ định phối hợp voriconazol với ritonavir ở mức liều này. 2. Việc phối hợp voriconazol với ritonavir liều thấp (100mg mỗi 12 giờ) cũng đã cho thấy làm giảm nồng độ voriconazol mặc dù mức độ ít hơn so với liều cao ritonavir, vì vậy, nên tránh phối hợp thuốc trừ khi lợi ích vượt trội nguy cơ."
  },
  {
    "stt": 526,
    "drug1": "Lopinavir/riton avir (ritonavir)",
    "drug2": "Vardenafil",
    "mechanism": "Ritonavir ức chế CYP3A4 làm giảm chuyển hóa của vardenafil",
    "clinicalImpact": "Tăng nồng độ vardenafil trong huyết thanh, tăng nguy cơ kéo dài khoảng QT",
    "recommendation": "Chống chỉ định phối hợp"
  },
  {
    "stt": 527,
    "drug1": "Lopinavir/riton avir (ritonavir)",
    "drug2": "Propafenon",
    "mechanism": "Ritonavir ức chế chuyển hóa của propafenon qua CYP3A4 và CYP2D6.",
    "clinicalImpact": "Tăng nồng độ, dẫn đến tăng độc tính của propafenon (đặc biệt là loạn nhịp tim).",
    "recommendation": "Chống chỉ định phối hợp."
  },
  {
    "stt": 528,
    "drug1": "Lovastatin",
    "drug2": "Saquinavir +/- ritonavir",
    "mechanism": "Saquinavir ức chế CYP3A4 mạnh làm giảm chuyển hóa của lovastatin",
    "clinicalImpact": "Tăng nồng độ của lovastatin trong huyết thanh, tăng nguy cơ bệnh cơ hoặc tiêu cơ vân cấp",
    "recommendation": "Chống chỉ định phối hợp. Trong trường hợp bắt buộc sử dụng dẫn chất statin, thay lovastatin bằng các dẫn chất statin khác (ngoại trừ simvastatin), sử dụng liều thấp nhất có hiệu quả, atorvastatin không vượt quá 20 mg/ngày, pitavastatin và pravastatin không cần hiệu chỉnh liều khi phối hợp."
  },
  {
    "stt": 529,
    "drug1": "Lovastatin",
    "drug2": "Posaconazol",
    "mechanism": "Posaconazol ức chế CYP3A4 mạnh làm giảm chuyển hóa của lovastatin",
    "clinicalImpact": "Tăng nồng độ của lovastatin trong huyết thanh, tăng nguy cơ bệnh cơ hoặc tiêu cơ vân cấp",
    "recommendation": "Chống chỉ định phối hợp. Cân nhắc thay đổi sang các thuốc nhóm khác có cùng chỉ định và ít có nguy cơ tương tác hơn: - Trong trường hợp bắt buộc sử dụng thuốc kháng nấm azol, thay posaconazol bằng fluconazol (nhưng tránh dùng liều cao, có tác dụng ức chế mạnh CYP3A4) HOẶC - Trong trường hợp bắt buộc sử dụng dẫn chất statin, thay lovastatin bằng các dẫn chất statin khác (ngoại trừ simvastatin)."
  },
  {
    "stt": 530,
    "drug1": "Lovastatin",
    "drug2": "Voriconazol",
    "mechanism": "Voriconazol ức chế CYP3A4 mạnh làm giảm chuyển hóa của lovastatin",
    "clinicalImpact": "Tăng nồng độ của lovastatin trong huyết thanh, tăng nguy cơ bệnh cơ hoặc tiêu cơ vân cấp",
    "recommendation": "Chống chỉ định phối hợp. Cân nhắc thay đổi sang các thuốc nhóm khác có cùng chỉ định và ít có nguy cơ tương tác hơn: - Trong trường hợp bắt buộc sử dụng thuốc kháng nấm azol, thay voriconazol bằng fluconazol (nhưng tránh dùng liều cao, có tác dụng ức chế mạnh CYP3A4) HOẶC - Trong trường hợp bắt buộc sử dụng dẫn chất statin, thay lovastatin bằng các dẫn chất statin khác (ngoại trừ simvastatin)."
  },
  {
    "stt": 531,
    "drug1": "Lovastatin",
    "drug2": "Mifepriston",
    "mechanism": "Mifepriston ức chế CYP3A4 làm giảm chuyển hóa của lovastatin",
    "clinicalImpact": "Tăng nồng độ lovastatin trong huyết thanh, tăng nguy cơ bệnh cơ hoặc tiêu cơ vân cấp",
    "recommendation": "Chống chỉ định phối hợp. 1. Chỉ bắt đầu sử dụng lovastatin sau khi ngừng mifepriston ít nhất 2 tuần HOẶC 2. Trong trường hợp bắt buộc sử dụng dẫn chất statin, thay lovastatin bằng pravasatin, rosuvastatin, fluvastatin hoặc pitavastatin."
  },
  {
    "stt": 532,
    "drug1": "Methadon",
    "drug2": "Xanh methylen (sử dụng đường tiêm tĩnh mạch)",
    "mechanism": "Hiệp đồng tác dụng serotonin",
    "clinicalImpact": "Tăng nguy cơ hội chứng serotonin (sốt cao, rối loạn nhận thức, tăng phản xạ, mất phối hợp, rung giật cơ, cứng cơ, co giật, nhịp tim nhanh, tăng huyết áp, tăng thân nhiệt, vã mồ hôi, ảo giác, kích động hoặc bồn chồn…)",
    "recommendation": "1. Cố gắng tránh sử dụng đồng thời xanh methylen và methadon. Tốt nhất các thuốc này nên sử dụng cách nhau 2 tuần. Cân nhắc thay đổi sang các thuốc nhóm khác có cùng chỉ định và ít có nguy cơ tương tác hơn. Trong trường hợp bắt buộc sử dụng opioid, có thể đổi sang các opiod khác không có hoạt tính ức chế thu hồi serotonin (morphin, codein, oxycodon, buprenorphin) 2. Trong hợp không thể trì hoãn điều trị được 2 tuần, bắt buộc sử dụng dài ngày hoặc khẩn cấp bằng xanh methylen và không có thuốc khác thay thế, cân bằng lợi ích và nguy cơ xảy ra hội chứng serotonin. Nếu lợi ích vượt trội nguy cơ, vẫn có thể sử dụng đồng thời nhưng cần giám sát chặt chẽ chặt chẽ bệnh nhân, đặc biệt trong tháng đầu tiên sử dụng đồng thời 2 thuốc."
  },
  {
    "stt": 533,
    "drug1": "Methadon",
    "drug2": "Thioridazin",
    "mechanism": "Hiệp đồng tăng tác dụng",
    "clinicalImpact": "Tăng nguy cơ kéo dài khoảng QT, xoắn đỉnh",
    "recommendation": "1. Chống chỉ định phối hợp ở các bệnh nhân có hội chứng QT kéo dài do di truyền hoặc mắc phải. 2. Trên các đối tượng bệnh nhân khác, tốt nhất nên tránh phối hợp các thuốc này. Trong trường hợp cần thiết phối hợp, cần đánh giá cẩn thận nguy cơ/lợi ích và lượng giá các yếu tố nguy cơ trên từng bệnh nhân, đặc biệt là rối loạn điện giải (hạ kali máu, hạ magie máu, hạ calci máu), nhịp tim chậm, nữ giới trước khi quyết định kê đơn."
  },
  {
    "stt": 534,
    "drug1": "Methyldopa",
    "drug2": "Xanh methylen (sử dụng đường tiêm tĩnh mạch)",
    "mechanism": "Chưa rõ",
    "clinicalImpact": "Tăng nguy cơ xuất hiện cơn tăng huyết áp (đau đầu, đánh trống ngực, cứng cổ)",
    "recommendation": "Chống chỉ định phối hợp"
  },
  {
    "stt": 535,
    "drug1": "Methylergometrin",
    "drug2": "Sumatriptan",
    "mechanism": "Hiệp đồng tác dụng co mạch",
    "clinicalImpact": "Co thắt mạch kéo dài",
    "recommendation": "Chống chỉ định phối hợp. Hai thuốc cách nhau ít nhất 24 giờ."
  },
  {
    "stt": 536,
    "drug1": "Methylergometrin",
    "drug2": "Roxithromyc in",
    "mechanism": "Roxithromycin ức chế CYP3A4 mạnh làm giảm chuyển hóa của methylergometrin",
    "clinicalImpact": "Tăng nồng độ của methylergometrin trong huyết thanh, tăng nguy cơ độc tính (nôn, buồn nôn, hoại tử đầu chi, thiếu máu cục bộ do co thắt mạch…)",
    "recommendation": "Chống chỉ định phối hợp"
  },
  {
    "stt": 537,
    "drug1": "Methylergometrin",
    "drug2": "Voriconazol",
    "mechanism": "Voriconazol ức chế CYP3A4 mạnh làm giảm chuyển hóa của methylergometrin",
    "clinicalImpact": "Tăng nồng độ của methylergometrin trong huyết thanh, tăng nguy cơ độc tính (nôn, buồn nôn, hoại tử đầu chi, thiếu máu cục bộ do co thắt mạch…)",
    "recommendation": "Chống chỉ định phối hợp"
  },
  {
    "stt": 538,
    "drug1": "Methylergometrin",
    "drug2": "Posaconazol",
    "mechanism": "Posaconazol ức chế CYP3A4 mạnh làm giảm chuyển hóa của methylergometrin",
    "clinicalImpact": "Tăng nồng độ của methylergometrin trong huyết thanh, tăng nguy cơ độc tính (nôn, buồn nôn, hoại tử đầu chi, thiếu máu cục bộ do co thắt mạch…)",
    "recommendation": "Chống chỉ định phối hợp"
  },
  {
    "stt": 539,
    "drug1": "Methylergom etrin",
    "drug2": "Saquinavir +/- ritonavir",
    "mechanism": "Saquinavir ức chế CYP3A4 mạnh làm giảm chuyển hóa của methylergometrin",
    "clinicalImpact": "Tăng nồng độ của methylergometrin trong huyết thanh, tăng nguy cơ độc tính (nôn, buồn nôn, hoại tử đầu chi, thiếu máu cục bộ do co thắt mạch…)",
    "recommendation": "Tốt nhất nên tránh phối hợp. Đối với trường hợp điều trị băng huyết sau sinh, nếu không còn thuốc khác thay thế ở người bệnh đang sử dụng saquinavir, sử dụng methylergometrin chỉ khi lợi ích vượt trội nguy cơ và sử dụng liều thấp nhất có hiệu quả trong thời gian ngắn nhất."
  },
  {
    "stt": 540,
    "drug1": "Methylphenidat",
    "drug2": "Xanh methylen (sử dụng đường tiêm tĩnh mạch)",
    "mechanism": "Hiệp đồng tác dụng serotonin",
    "clinicalImpact": "Tăng nguy cơ hội chứng serotonin (sốt cao, rối loạn nhận thức, tăng phản xạ, mất phối hợp, rung giật cơ, cứng cơ, co giật, nhịp tim nhanh, tăng huyết áp, tăng thân nhiệt, vã mồ hôi, ảo giác, kích động hoặc bồn chồn…)",
    "recommendation": "1. Cố gắng tránh sử dụng đồng thời xanh methylen và methylphenidat. Tốt nhất các thuốc này nên sử dụng cách nhau 2 tuần. Cân nhắc thay đổi sang các thuốc nhóm khác có cùng chỉ định và ít có nguy cơ tương tác hơn. 2. Trong hợp không thể trì hoãn điều trị được 2 tuần, bắt buộc sử dụng dài ngày hoặc khẩn cấp bằng xanh methylen và không có thuốc khác thay thế, cân bằng lợi ích và nguy cơ xảy ra hội chứng serotonin. Nếu lợi ích vượt trội nguy cơ, vẫn có thể sử dụng đồng thời nhưng cần giám sát chặt chẽ chặt chẽ bệnh nhân, đặc biệt trong tháng đầu tiên sử dụng đồng thời 2 thuốc."
  },
  {
    "stt": 541,
    "drug1": "Metoclopramid",
    "drug2": "Rotigotin",
    "mechanism": "Đối kháng tác dụng của nhau",
    "clinicalImpact": "Giảm hiệu quả của cả hai thuốc",
    "recommendation": "Chống chỉ định phối hợp"
  },
  {
    "stt": 542,
    "drug1": "Metoclopramid",
    "drug2": "Pramipexol",
    "mechanism": "Đối kháng tác dụng của nhau",
    "clinicalImpact": "Giảm hiệu quả của cả hai thuốc",
    "recommendation": "Chống chỉ định phối hợp"
  },
  {
    "stt": 543,
    "drug1": "Metoclopramid",
    "drug2": "Piribedil",
    "mechanism": "Đối kháng tác dụng của nhau",
    "clinicalImpact": "Giảm hiệu quả của cả hai thuốc",
    "recommendation": "Chống chỉ định phối hợp"
  },
  {
    "stt": 544,
    "drug1": "Mifepriston",
    "drug2": "Simvastatin",
    "mechanism": "Mifepriston ức chế CYP3A4 làm giảm chuyển hóa của simvastatin",
    "clinicalImpact": "Tăng nồng độ simvastatin trong huyết thanh, tăng nguy cơ bệnh cơ hoặc tiêu cơ vân cấp",
    "recommendation": "Chống chỉ định phối hợp. 1. Chỉ bắt đầu sử dụng simvastatin sau khi ngừng mifepriston ít nhất 2 tuần HOẶC 2. Trong trường hợp bắt buộc sử dụng dẫn chất statin, thay simvastatin bằng pravasatin, rosuvastatin, fluvastatin hoặc pitavastatin."
  },
  {
    "stt": 545,
    "drug1": "Milnacipran",
    "drug2": "Xanh methylen (sử dụng đường tiêm tĩnh mạch)",
    "mechanism": "Hiệp đồng tác dụng serotonin",
    "clinicalImpact": "Tăng nguy cơ hội chứng serotonin (sốt cao, rối loạn nhận thức, tăng phản xạ, mất phối hợp, rung giật cơ, cứng cơ, co giật, nhịp tim nhanh, tăng huyết áp, tăng thân nhiệt, vã mồ hôi, ảo giác, kích động hoặc bồn chồn…)",
    "recommendation": "1. Cố gắng tránh sử dụng đồng thời xanh methylen và milnacriptan. Tốt nhất các thuốc này nên sử dụng cách nhau 2 tuần. Cân nhắc thay đổi sang các thuốc nhóm khác có cùng chỉ định và ít có nguy cơ tương tác hơn. 2. Trong hợp không thể trì hoãn điều trị được 2 tuần, bắt buộc sử dụng dài ngày hoặc khẩn cấp bằng xanh methylen và không có thuốc khác thay thế, cân bằng lợi ích và nguy cơ xảy ra hội chứng serotonin. Nếu lợi ích vượt trội nguy cơ, vẫn có thể sử dụng đồng thời nhưng cần giám sát chặt chẽ chặt chẽ bệnh nhân, đặc biệt trong tháng đầu tiên sử dụng đồng thời 2 thuốc."
  },
  {
    "stt": 546,
    "drug1": "Minocyclin",
    "drug2": "Tretinoin",
    "mechanism": "Hiệp đồng tăng độc tính",
    "clinicalImpact": "Tăng nguy cơ tăng áp nội sọ lành tính (phù gai thị, đau đầu, buồn nôn và nôn, và rối loạn thị giác)",
    "recommendation": "Chống chỉ định phối hợp"
  },
  {
    "stt": 547,
    "drug1": "Mirtazapin",
    "drug2": "Xanh methylen (sử dụng đường tiêm tĩnh mạch)",
    "mechanism": "Hiệp đồng tác dụng serotonin",
    "clinicalImpact": "Tăng nguy cơ hội chứng serotonin (sốt cao, rối loạn nhận thức, tăng phản xạ, mất phối hợp, rung giật cơ, cứng cơ, co giật, nhịp tim nhanh, tăng huyết áp, tăng thân nhiệt, vã mồ hôi, ảo giác, kích động hoặc bồn chồn…)",
    "recommendation": "1. Cố gắng tránh sử dụng đồng thời xanh methylen và mirtazapin. Tốt nhất các thuốc này nên sử dụng cách nhau 2 tuần. Cân nhắc thay đổi sang các thuốc nhóm khác có cùng chỉ định và ít có nguy cơ tương tác hơn. 2. Trong hợp không thể trì hoãn điều trị được 2 tuần, bắt buộc sử dụng dài ngày hoặc khẩn cấp bằng xanh methylen và không có thuốc khác thay thế, cân bằng lợi ích và nguy cơ xảy ra hội chứng serotonin. Nếu lợi ích vượt trội nguy cơ, vẫn có thể sử dụng đồng thời nhưng cần giám sát chặt chẽ chặt chẽ bệnh nhân, đặc biệt trong tháng đầu tiên sử dụng đồng thời 2 thuốc."
  },
  {
    "stt": 548,
    "drug1": "Moxifloxacin",
    "drug2": "Thioridazin",
    "mechanism": "Hiệp đồng tăng tác dụng",
    "clinicalImpact": "Tăng nguy cơ kéo dài khoảng QT, xoắn đỉnh",
    "recommendation": "1. Chống chỉ định phối hợp ở các bệnh nhân có hội chứng QT kéo dài do di truyền hoặc mắc phải. 2. Trên các đối tượng bệnh nhân khác, tốt nhất nên tránh phối hợp các thuốc này. Trong trường hợp cần thiết phối hợp, cần đánh giá cẩn thận nguy cơ/lợi ích và lượng giá các yếu tố nguy cơ trên từng bệnh nhân, đặc biệt là rối loạn điện giải (hạ kali máu, hạ magie máu, hạ calci máu), nhịp tim chậm, nữ giới trước khi quyết định kê đơn."
  },
  {
    "stt": 549,
    "drug1": "Moxifloxacin",
    "drug2": "Piperaquin/dihydroarte misinin (piperaquin)",
    "mechanism": "Hiệp đồng tăng tác dụng",
    "clinicalImpact": "Tăng nguy cơ kéo dài khoảng QT, xoắn đỉnh",
    "recommendation": "1. Chống chỉ định phối hợp ở các bệnh nhân có hội chứng QT kéo dài do di truyền hoặc mắc phải. 2. Trên các đối tượng bệnh nhân khác, tốt nhất nên tránh phối hợp các thuốc này. Trong trường hợp cần thiết phối hợp, cần đánh giá cẩn thận nguy cơ/lợi ích và lượng giá các yếu tố nguy cơ trên từng bệnh nhân, đặc biệt là rối loạn điện giải (hạ kali máu, hạ magie máu, hạ calci máu), nhịp tim chậm, nữ giới trước khi quyết định kê đơn."
  },
  {
    "stt": 550,
    "drug1": "Moxifloxacin",
    "drug2": "Sotalol",
    "mechanism": "Hiệp đồng tăng tác dụng",
    "clinicalImpact": "Tăng nguy cơ kéo dài khoảng QT, xoắn đỉnh",
    "recommendation": "1. Chống chỉ định phối hợp ở các bệnh nhân có hội chứng QT kéo dài do di truyền hoặc mắc phải. 2. Trên các đối tượng bệnh nhân khác, tốt nhất nên tránh phối hợp các thuốc này. Trong trường hợp cần thiết phối hợp, cần đánh giá cẩn thận nguy cơ/lợi ích và lượng giá các yếu tố nguy cơ trên từng bệnh nhân, đặc biệt là rối loạn điện giải (hạ kali máu, hạ magie máu, hạ calci máu), nhịp tim chậm, nữ giới trước khi quyết định kê đơn."
  },
  {
    "stt": 551,
    "drug1": "Nefopam",
    "drug2": "Xanh methylen (sử dụng đường tiêm tĩnh mạch)",
    "mechanism": "Nefopam ức chế thu hồi noradrenalin (norepinephrin) và serotonin trên hệ thần kinh",
    "clinicalImpact": "Tăng nguy cơ kích thích thần kinh trung ương (co giật, ảo giác và kích động)",
    "recommendation": "Chống chỉ định phối hợp"
  },
  {
    "stt": 552,
    "drug1": "Nicoradil",
    "drug2": "Sildenafil",
    "mechanism": "Hiệp đồng tăng nồng độ guanosine monophosphate (cGMP) vòng có dụng giãn mạch",
    "clinicalImpact": "Tăng tác dụng hạ huyết áp nghiêm trọng",
    "recommendation": "Chống chỉ định phối hợp. Hai thuốc cách nhau ít nhất 24 giờ."
  },
  {
    "stt": 553,
    "drug1": "Nicoradil",
    "drug2": "Vardenafil",
    "mechanism": "Hiệp đồng tăng nồng độ guanosine monophosphate (cGMP) vòng có dụng giãn mạch",
    "clinicalImpact": "Tăng tác dụng hạ huyết áp nghiêm trọng",
    "recommendation": "Chống chỉ định phối hợp. Hai thuốc cách nhau ít nhất 24 giờ."
  },
  {
    "stt": 554,
    "drug1": "Nicoradil",
    "drug2": "Tadalafil",
    "mechanism": "Hiệp đồng tăng nồng độ guanosine monophosphate (cGMP) vòng có dụng giãn mạch",
    "clinicalImpact": "Tăng tác dụng hạ huyết áp nghiêm trọng",
    "recommendation": "Chống chỉ định phối hợp. Hai thuốc cách nhau ít nhất 48 giờ."
  },
  {
    "stt": 555,
    "drug1": "Nifedipin",
    "drug2": "Rifampicin",
    "mechanism": "Rifampicin cảm ứng CYP3A4 làm tăng chuyển hóa của nifedipin",
    "clinicalImpact": "Giảm nồng độ nifedipin, giảm hiệu quả điều trị",
    "recommendation": "Chống chỉ định phối hợp"
  },
  {
    "stt": 556,
    "drug1": "Nitroglycerin",
    "drug2": "Sildenafil",
    "mechanism": "Hiệp đồng tăng nồng độ guanosine monophosphate (cGMP) vòng có dụng giãn mạch",
    "clinicalImpact": "Tăng tác dụng hạ huyết áp nghiêm trọng",
    "recommendation": "Chống chỉ định phối hợp. Hai thuốc cách nhau ít nhất 24 giờ."
  },
  {
    "stt": 557,
    "drug1": "Nitroglycerin",
    "drug2": "Vardenafil",
    "mechanism": "Hiệp đồng tăng nồng độ guanosine monophosphate (cGMP) vòng có dụng giãn mạch",
    "clinicalImpact": "Tăng tác dụng hạ huyết áp nghiêm trọng",
    "recommendation": "Chống chỉ định phối hợp. Hai thuốc cách nhau ít nhất 24 giờ."
  },
  {
    "stt": 558,
    "drug1": "Nitroglycerin",
    "drug2": "Tadalafil",
    "mechanism": "Hiệp đồng tăng nồng độ guanosine monophosphate (cGMP) vòng có dụng giãn mạch",
    "clinicalImpact": "Tăng tác dụng hạ huyết áp nghiêm trọng",
    "recommendation": "Chống chỉ định phối hợp. Hai thuốc cách nhau ít nhất 48 giờ."
  },
  {
    "stt": 559,
    "drug1": "Esomeprazol",
    "drug2": "Rilpivirin",
    "mechanism": "Giảm hấp thu rilpivirin do tăng pH dạ dày",
    "clinicalImpact": "Giảm nồng độ rilpivirin trong huyết thanh, giảm hiệu quả điều trị",
    "recommendation": "Chống chỉ định phối hợp. Trong trường hợp thay thế bằng thuốc kháng H2, sử dụng các thuốc H2 ít nhất 12 giờ trước hoặc 4 giờ sau khi uống rilpivirin."
  },
  {
    "stt": 560,
    "drug1": "Omeprazol",
    "drug2": "Rilpivirin",
    "mechanism": "Giảm hấp thu rilpivirin do tăng pH dạ dày",
    "clinicalImpact": "Giảm nồng độ rilpivirin trong huyết thanh, giảm hiệu quả điều trị",
    "recommendation": "Chống chỉ định phối hợp. Trong trường hợp thay thế bằng thuốc kháng H2, sử dụng các thuốc H2 ít nhất 12 giờ trước hoặc 4 giờ sau khi uống rilpivirin."
  },
  {
    "stt": 561,
    "drug1": "Ondansetron",
    "drug2": "Thioridazin",
    "mechanism": "Hiệp đồng tăng tác dụng",
    "clinicalImpact": "Tăng nguy cơ kéo dài khoảng QT, xoắn đỉnh",
    "recommendation": "1. Chống chỉ định phối hợp ở các bệnh nhân có hội chứng QT kéo dài do di truyền hoặc mắc phải. 2. Trên các đối tượng bệnh nhân khác, tốt nhất nên tránh phối hợp các thuốc này. Trong trường hợp cần thiết phối hợp, cần đánh giá cẩn thận nguy cơ/lợi ích và lượng giá các yếu tố nguy cơ trên từng bệnh nhân, đặc biệt là rối loạn điện giải (hạ kali máu, hạ magie máu, hạ calci máu), nhịp tim chậm, nữ giới trước khi quyết định kê đơn."
  },
  {
    "stt": 562,
    "drug1": "Ondansetron",
    "drug2": "Sparfloxacin",
    "mechanism": "Hiệp đồng tăng tác dụng",
    "clinicalImpact": "Tăng nguy cơ kéo dài khoảng QT, xoắn đỉnh",
    "recommendation": "1. Chống chỉ định phối hợp ở các bệnh nhân có hội chứng QT kéo dài do di truyền hoặc mắc phải. 2. Trên các đối tượng bệnh nhân khác, tốt nhất nên tránh phối hợp các thuốc này. Trong trường hợp cần thiết phối hợp, cần đánh giá cẩn thận nguy cơ/lợi ích và lượng giá các yếu tố nguy cơ trên từng bệnh nhân, đặc biệt là rối loạn điện giải (hạ kali máu, hạ magie máu, hạ calci máu), nhịp tim chậm, nữ giới trước khi quyết định kê đơn."
  },
  {
    "stt": 563,
    "drug1": "Oxaliplatin",
    "drug2": "Thioridazin",
    "mechanism": "Hiệp đồng tăng tác dụng",
    "clinicalImpact": "Tăng nguy cơ kéo dài khoảng QT, xoắn đỉnh",
    "recommendation": "1. Chống chỉ định phối hợp ở các bệnh nhân có hội chứng QT kéo dài do di truyền hoặc mắc phải. 2. Trên các đối tượng bệnh nhân khác, tốt nhất nên tránh phối hợp các thuốc này. Trong trường hợp cần thiết phối hợp, cần đánh giá cẩn thận nguy cơ/lợi ích và lượng giá các yếu tố nguy cơ trên từng bệnh nhân, đặc biệt là rối loạn điện giải (hạ kali máu, hạ magie máu, hạ calci máu), nhịp tim chậm, nữ giới trước khi quyết định kê đơn."
  },
  {
    "stt": 564,
    "drug1": "Oxaliplatin",
    "drug2": "Sparfloxacin",
    "mechanism": "Hiệp đồng tăng tác dụng",
    "clinicalImpact": "Tăng nguy cơ kéo dài khoảng QT, xoắn đỉnh",
    "recommendation": "1. Chống chỉ định phối hợp ở các bệnh nhân có hội chứng QT kéo dài do di truyền hoặc mắc phải. 2. Trên các đối tượng bệnh nhân khác, tốt nhất nên tránh phối hợp các thuốc này. Trong trường hợp cần thiết phối hợp, cần đánh giá cẩn thận nguy cơ/lợi ích và lượng giá các yếu tố nguy cơ trên từng bệnh nhân, đặc biệt là rối loạn điện giải (hạ kali máu, hạ magie máu, hạ calci máu), nhịp tim chậm, nữ giới trước khi quyết định kê đơn."
  },
  {
    "stt": 565,
    "drug1": "Oxcarbazepin",
    "drug2": "Rilpivirin",
    "mechanism": "Oxcarbamazepin cảm ứng CYP3A4 mạnh làm tăng chuyển hóa của rilpivirin",
    "clinicalImpact": "Giảm nồng độ của rilpivirin trong huyết thanh, dẫn đến giảm hiệu quả điều trị",
    "recommendation": "Chống chỉ định phối hợp."
  },
  {
    "stt": 566,
    "drug1": "Pantoprazol",
    "drug2": "Rilpivirin",
    "mechanism": "Giảm hấp thu rilpivirin do tăng pH dạ dày",
    "clinicalImpact": "Giảm nồng độ rilpivirin trong huyết thanh, giảm hiệu quả điều trị",
    "recommendation": "Chống chỉ định phối hợp. Trong trường hợp thay thế bằng thuốc kháng H2, sử dụng các thuốc H2 ít nhất 12 giờ trước hoặc 4 giờ sau khi uống rilpivirin."
  },
  {
    "stt": 567,
    "drug1": "Paroxetin",
    "drug2": "Xanh methylen (sử dụng đường tiêm tĩnh mạch)",
    "mechanism": "Hiệp đồng tác dụng serotonin",
    "clinicalImpact": "Tăng nguy cơ hội chứng serotonin (sốt cao, rối loạn nhận thức, tăng phản xạ, mất phối hợp, rung giật cơ, cứng cơ, co giật, nhịp tim nhanh, tăng huyết áp, tăng thân nhiệt, vã mồ hôi, ảo giác, kích động hoặc bồn chồn…)",
    "recommendation": "1. Cố gắng tránh sử dụng đồng thời xanh methylen và tramadol. Tốt nhất các thuốc này nên sử dụng cách nhau 2 tuần. Cân nhắc thay đổi sang các thuốc nhóm khác có cùng chỉ định và ít có nguy cơ tương tác hơn. Trong trường hợp bắt buộc sử dụng opioid, có thể đổi sang các opiod khác không có hoạt tính ức chế thu hồi serotonin (morphin, codein, oxycodon, buprenorphin) 2. Trong hợp không thể trì hoãn điều trị được 2 tuần, bắt buộc sử dụng dài ngày hoặc khẩn cấp bằng xanh methylen và không có thuốc khác thay thế, cân bằng lợi ích và nguy cơ xảy ra hội chứng serotonin. Nếu lợi ích vượt trội nguy cơ, vẫn có thể sử dụng đồng thời nhưng cần giám sát chặt chẽ chặt chẽ bệnh nhân, đặc biệt trong tháng đầu tiên sử dụng đồng thời 2 thuốc."
  },
  {
    "stt": 568,
    "drug1": "Paroxetin",
    "drug2": "Thioridazin",
    "mechanism": "Paroxetin ức chế CYP2D6 làm giảm chuyển hóa của thioridazin",
    "clinicalImpact": "Tăng nồng độ thioridazin, tăng nguy cơ kéo dài khoảng QT",
    "recommendation": "Chống chỉ định phối hợp"
  },
  {
    "stt": 569,
    "drug1": "Peginterferon- alpha (2a hoặc 2b)",
    "drug2": "Telbivudin",
    "mechanism": "Chưa rõ",
    "clinicalImpact": "Tăng nguy cơ viêm thần kinh ngoại vi liên quan đến telbivudin.",
    "recommendation": "Chống chỉ định phối hợp"
  },
  {
    "stt": 570,
    "drug1": "Perindopril",
    "drug2": "Sacubitril/val sartan (sacubitril)",
    "mechanism": "Tăng tích lũy bradykinin gây phù mạch",
    "clinicalImpact": "Tăng nguy cơ phù mạch",
    "recommendation": "Chống chỉ định phối hợp. Chỉ bắt đầu sử dụng Sacubitril/valsartan (sacubitril) sau khi ngừng perindopril ít nhất 36 giờ."
  },
  {
    "stt": 571,
    "drug1": "Pethidin",
    "drug2": "Xanh methylen (sử dụng đường tiêm tĩnh mạch)",
    "mechanism": "Hiệp đồng tác dụng serotonin",
    "clinicalImpact": "Tăng nguy cơ hội chứng serotonin (sốt cao, rối loạn nhận thức, tăng phản xạ, mất phối hợp, rung giật cơ, cứng cơ, co giật, nhịp tim nhanh, tăng huyết áp, tăng thân nhiệt, vã mồ hôi, ảo giác, kích động hoặc bồn chồn…)",
    "recommendation": "1. Cố gắng tránh sử dụng đồng thời xanh methylen và pethidin. Tốt nhất các thuốc này nên sử dụng cách nhau 2 tuần. Cân nhắc thay đổi sang các thuốc nhóm khác có cùng chỉ định và ít có nguy cơ tương tác hơn. Trong trường hợp bắt buộc sử dụng opioid, có thể đổi sang các opiod khác không có hoạt tính ức chế thu hồi serotonin (morphin, codein, oxycodon, buprenorphin) 2. Trong hợp không thể trì hoãn điều trị được 2 tuần, bắt buộc sử dụng dài ngày hoặc khẩn cấp bằng xanh methylen và không có thuốc khác thay thế, cân bằng lợi ích và nguy cơ xảy ra hội chứng serotonin. Nếu lợi ích vượt trội nguy cơ, vẫn có thể sử dụng đồng thời nhưng cần giám sát chặt chẽ chặt chẽ bệnh nhân, đặc biệt trong tháng đầu tiên sử dụng đồng thời 2 thuốc."
  },
  {
    "stt": 572,
    "drug1": "Phenobarbital",
    "drug2": "Praziquantel",
    "mechanism": "Phenobarbital cảm ứng CYP3A4 mạnh làm tăng chuyển hóa của praziquantel",
    "clinicalImpact": "Giảm nồng độ của praziquantel trong huyết thanh, dẫn đến giảm hiệu quả điều trị",
    "recommendation": "Chống chỉ định phối hợp."
  },
  {
    "stt": 573,
    "drug1": "Phenobarbital",
    "drug2": "Rilpivirin",
    "mechanism": "Phenobarbital cảm ứng CYP3A4 mạnh làm tăng chuyển hóa của rilpivirin",
    "clinicalImpact": "Giảm nồng độ của rilpivirin trong huyết thanh, dẫn đến giảm hiệu quả điều trị",
    "recommendation": "Chống chỉ định phối hợp."
  },
  {
    "stt": 574,
    "drug1": "Phenobarbital",
    "drug2": "Voriconazol",
    "mechanism": "Phenobarbital cảm ứng CYP3A4 mạnh làm tăng chuyển hóa của voriconazol",
    "clinicalImpact": "Giảm nồng độ của voriconazol trong huyết thanh, dẫn đến giảm hiệu quả điều trị",
    "recommendation": "Chống chỉ định phối hợp."
  },
  {
    "stt": 575,
    "drug1": "Phenobarbital",
    "drug2": "Ranolazin",
    "mechanism": "Phenobarbital cảm ứng CYP3A4 và P-gp làm tăng chuyển hóa của ranolazin và thải trừ của ranolazin.",
    "clinicalImpact": "Giảm nồng độ ranolazin trong huyết thanh, giảm hiệu quả điều trị",
    "recommendation": "Chống chỉ định phối hợp"
  },
  {
    "stt": 576,
    "drug1": "Phenylephrin (sử dụng đường uống)",
    "drug2": "Xanh methylen (sử dụng đường tiêm tĩnh mạch)",
    "mechanism": "Tăng tích lũy noradrenalin (norepinephrin)",
    "clinicalImpact": "Tăng nguy cơ xuất hiện cơn tăng huyết áp (đau đầu, đánh trống ngực, cứng cổ, tăng huyết áp)",
    "recommendation": "1. Chống chỉ định sử dụng phenylephrin sử dụng đường uống đồng thời hoặc trong vòng 14 ngày trước đó có sử dụng xanh methylen. 2. Đối với phenylephrin sử dụng đường tiêm, cần sử dụng rất thận trọng trên bệnh nhân đang dùng xanh methylen trong điều kiện giám sát huyết áp chặt chẽ."
  },
  {
    "stt": 577,
    "drug1": "Phenytoin",
    "drug2": "Praziquantel",
    "mechanism": "Phenytoin cảm ứng CYP3A4 mạnh làm tăng chuyển hóa của praziquantel",
    "clinicalImpact": "Giảm nồng độ của praziquantel trong huyết thanh, dẫn đến giảm hiệu quả điều trị",
    "recommendation": "Chống chỉ định phối hợp."
  },
  {
    "stt": 578,
    "drug1": "Phenytoin",
    "drug2": "Rilpivirin",
    "mechanism": "Phenytoin cảm ứng CYP3A4 mạnh làm tăng chuyển hóa của rilpivirin",
    "clinicalImpact": "Giảm nồng độ của rilpivirin trong huyết thanh, dẫn đến giảm hiệu quả điều trị",
    "recommendation": "Chống chỉ định phối hợp."
  },
  {
    "stt": 579,
    "drug1": "Phenytoin",
    "drug2": "Ranolazin",
    "mechanism": "Phenytoin cảm ứng CYP3A4 và P-gp làm tăng chuyển hóa của ranolazin và thải trừ của ranolazin.",
    "clinicalImpact": "Giảm nồng độ ranolazin trong huyết thanh, giảm hiệu quả điều trị",
    "recommendation": "Chống chỉ định phối hợp"
  },
  {
    "stt": 580,
    "drug1": "Piperaquin/dihydroartemisinin (piperaquin)",
    "drug2": "Thioridazin",
    "mechanism": "Hiệp đồng tăng tác dụng",
    "clinicalImpact": "Tăng nguy cơ kéo dài khoảng QT, xoắn đỉnh",
    "recommendation": "1. Chống chỉ định phối hợp ở các bệnh nhân có hội chứng QT kéo dài do di truyền hoặc mắc phải. 2. Trên các đối tượng bệnh nhân khác, tốt nhất nên tránh phối hợp các thuốc này. Trong trường hợp cần thiết phối hợp, cần đánh giá cẩn thận nguy cơ/lợi ích và lượng giá các yếu tố nguy cơ trên từng bệnh nhân, đặc biệt là rối loạn điện giải (hạ kali máu, hạ magie máu, hạ calci máu), nhịp tim chậm, nữ giới trước khi quyết định kê đơn."
  },
  {
    "stt": 581,
    "drug1": "Piperaquin/dihydroartemisinin (piperaquin)",
    "drug2": "Sotalol",
    "mechanism": "Hiệp đồng tăng tác dụng",
    "clinicalImpact": "Tăng nguy cơ kéo dài khoảng QT, xoắn đỉnh",
    "recommendation": "1. Chống chỉ định phối hợp ở các bệnh nhân có hội chứng QT kéo dài do di truyền hoặc mắc phải. 2. Trên các đối tượng bệnh nhân khác, tốt nhất nên tránh phối hợp các thuốc này. Trong trường hợp cần thiết phối hợp, cần đánh giá cẩn thận nguy cơ/lợi ích và lượng giá các yếu tố nguy cơ trên từng bệnh nhân, đặc biệt là rối loạn điện giải (hạ kali máu, hạ magie máu, hạ calci máu), nhịp tim chậm, nữ giới trước khi quyết định kê đơn."
  },
  {
    "stt": 582,
    "drug1": "Piperaquin/dihydroartemisinin (piperaquin)",
    "drug2": "Saquinavir +/- ritonavir",
    "mechanism": "Hiệp đồng tăng tác dụng",
    "clinicalImpact": "Tăng nguy cơ kéo dài khoảng QT, xoắn đỉnh",
    "recommendation": "1. Chống chỉ định phối hợp ở các bệnh nhân có hội chứng QT kéo dài do di truyền hoặc mắc phải. 2. Trên các đối tượng bệnh nhân khác, tốt nhất nên tránh phối hợp các thuốc này. Trong trường hợp cần thiết phối hợp, cần đánh giá cẩn thận nguy cơ/lợi ích và lượng giá các yếu tố nguy cơ trên từng bệnh nhân, đặc biệt là rối loạn điện giải (hạ kali máu, hạ magie máu, hạ calci máu), nhịp tim chậm, nữ giới trước khi quyết định kê đơn."
  },
  {
    "stt": 583,
    "drug1": "Piperaquin/dihydroartemisinin (piperaquin)",
    "drug2": "Sparfloxacin",
    "mechanism": "Hiệp đồng tăng tác dụng",
    "clinicalImpact": "Tăng nguy cơ kéo dài khoảng QT, xoắn đỉnh",
    "recommendation": "1. Chống chỉ định phối hợp ở các bệnh nhân có hội chứng QT kéo dài do di truyền hoặc mắc phải. 2. Trên các đối tượng bệnh nhân khác, tốt nhất nên tránh phối hợp các thuốc này. Trong trường hợp cần thiết phối hợp, cần đánh giá cẩn thận nguy cơ/lợi ích và lượng giá các yếu tố nguy cơ trên từng bệnh nhân, đặc biệt là rối loạn điện giải (hạ kali máu, hạ magie máu, hạ calci máu), nhịp tim chậm, nữ giới trước khi quyết định kê đơn."
  },
  {
    "stt": 584,
    "drug1": "Piribedil",
    "drug2": "Sulpirid",
    "mechanism": "Đối kháng tác dụng của nhau",
    "clinicalImpact": "Giảm hiệu quả của cả hai thuốc",
    "recommendation": "Chống chỉ định phối hợp"
  },
  {
    "stt": 585,
    "drug1": "Posaconazol",
    "drug2": "Simvastatin",
    "mechanism": "Posaconazol ức chế CYP3A4 mạnh làm giảm chuyển hóa của simvastatin",
    "clinicalImpact": "Tăng nồng độ của simvastatin trong huyết thanh, tăng nguy cơ bệnh cơ hoặc tiêu cơ vân cấp",
    "recommendation": "Chống chỉ định phối hợp. Cân nhắc thay đổi sang các thuốc nhóm khác có cùng chỉ định và ít có nguy cơ tương tác hơn: - Trong trường hợp bắt buộc sử dụng thuốc kháng nấm azol, thay posaconazol bằng fluconazol (nhưng tránh dùng liều cao, có tác dụng ức chế mạnh CYP3A4) HOẶC - Trong trường hợp bắt buộc sử dụng dẫn chất statin, thay simvastatin bằng các dẫn chất statin khác (ngoại trừ lovastatin)."
  },
  {
    "stt": 586,
    "drug1": "Posaconazol",
    "drug2": "Ticagrelor",
    "mechanism": "Posaconazol ức chế CYP3A4 mạnh làm giảm chuyển hóa của ticagrelor",
    "clinicalImpact": "Tăng nồng độ của ticagrelor trong huyết thanh, tăng nguy cơ xuất huyết",
    "recommendation": "Chống chỉ định phối hợp. Cân nhắc thay đổi sang các thuốc nhóm khác có cùng chỉ định và ít có nguy cơ tương tác hơn: Trong trường hợp bắt buộc sử dụng thuốc kháng nấm azol, thay posaconazol bằng fluconazol (nhưng tránh dùng liều cao, có tác dụng ức chế mạnh CYP3A4)."
  },
  {
    "stt": 587,
    "drug1": "Posaconazol",
    "drug2": "Ranolazin",
    "mechanism": "Posaconazol ức chế CYP3A4 mạnh làm giảm chuyển hóa của ranolazin",
    "clinicalImpact": "Tăng nồng độ ranolazin trong huyết thanh, tăng nguy cơ kéo dài khoảng QT",
    "recommendation": "Chống chỉ định phối hợp. Cân nhắc thay đổi sang các thuốc nhóm khác có cùng chỉ định và ít có nguy cơ tương tác hơn: Trong trường hợp bắt buộc sử dụng thuốc kháng nấm azol, thay posaconazol bằng fluconazol (nhưng tránh dùng liều cao, có tác dụng ức chế mạnh CYP3A4)."
  },
  {
    "stt": 588,
    "drug1": "Posaconazol",
    "drug2": "Tolvaptan",
    "mechanism": "Posaconazol ức chế CYP3A4 mạnh làm giảm chuyển hóa của tolvaptan",
    "clinicalImpact": "Tăng nồng độ tolvaptan trong huyết thanh, tăng nguy cơ tác dụng không mong muốn (tăng nồng độ natri huyết thanh, đa niệu, khát nước, giảm thể tích tuần hoàn...)",
    "recommendation": "Chống chỉ định phối hợp. Cân nhắc thay đổi sang các thuốc nhóm khác có cùng chỉ định và ít có nguy cơ tương tác hơn: Trong trường hợp bắt buộc sử dụng thuốc kháng nấm azol, thay posaconazol bằng fluconazol (nhưng tránh dùng liều cao, có tác dụng ức chế mạnh CYP3A4)."
  },
  {
    "stt": 589,
    "drug1": "Posaconazol",
    "drug2": "Quetiapin",
    "mechanism": "Posaconazol ức chế CYP3A4 mạnh làm giảm chuyển hóa của quetiapin",
    "clinicalImpact": "Tăng nồng độ của quetiapin, tăng nguy cơ kéo dài khoảng QT",
    "recommendation": "Chống chỉ định phối hợp. Cân nhắc thay đổi sang các thuốc nhóm khác có cùng chỉ định và ít có nguy cơ tương tác hơn: Trong trường hợp bắt buộc sử dụng thuốc kháng nấm azol, thay posaconazol bằng fluconazol (nhưng tránh dùng liều cao, có tác dụng ức chế mạnh CYP3A4)."
  },
  {
    "stt": 590,
    "drug1": "Pramipexol",
    "drug2": "Sulpirid",
    "mechanism": "Đối kháng tác dụng của nhau",
    "clinicalImpact": "Giảm hiệu quả của cả hai thuốc",
    "recommendation": "Chống chỉ định phối hợp"
  },
  {
    "stt": 591,
    "drug1": "Praziquantel",
    "drug2": "Rifampicin",
    "mechanism": "Rifampicin cảm ứng CYP3A4 làm tăng chuyển hóa của praziquantel",
    "clinicalImpact": "Giảm nồng độ của praziquantel trong huyết thanh, dẫn đến giảm hiệu quả điều trị",
    "recommendation": "Chống chỉ định phối hợp. Với rifampicin, chỉ bắt đầu sử dụng praziquantel sau khi ngừng rifampicin ít nhất 4 tuần. Rifampicin có thể sử dụng lại sau 1 ngày dừng praziquantel."
  },
  {
    "stt": 592,
    "drug1": "Propafenon",
    "drug2": "Saquinavir/ri tonavir (ritonavir)",
    "mechanism": "Ritonavir ức chế chuyển hóa của propafenon qua CYP3A4 và CYP2D6.",
    "clinicalImpact": "Tăng nồng độ, dẫn đến tăng độc tính của propafenon (đặc biệt là loạn nhịp tim).",
    "recommendation": "Chống chỉ định phối hợp."
  },
  {
    "stt": 593,
    "drug1": "Pseudoephedrin (sử dụng đường uống)",
    "drug2": "Xanh methylen (sử dụng đường tiêm tĩnh mạch)",
    "mechanism": "Tăng tích lũy noradrenalin (norepinephrin)",
    "clinicalImpact": "Tăng nguy cơ xuất hiện cơn tăng huyết áp (đau đầu, đánh trống ngực, cứng cổ, tăng huyết áp)",
    "recommendation": "Chống chỉ định sử dụng pseudoephedrin (sử dụng đường uống) đồng thời hoặc trong vòng 14 ngày trước đó có sử dụng xanh methylen."
  },
  {
    "stt": 594,
    "drug1": "Quetiapin",
    "drug2": "Saquinavir +/- ritonavir",
    "mechanism": "Saquinavir ức chế CYP3A4 mạnh làm giảm chuyển hóa của quetiapin",
    "clinicalImpact": "Tăng nồng độ của quetiapin, tăng nguy cơ kéo dài khoảng QT",
    "recommendation": "Tốt nhất nên tránh phối hợp. Trong trường hợp bắt buộc sử dụng saquinavir, giảm liều quetiapin còn 1/6 liều so với liều bình thường."
  },
  {
    "stt": 595,
    "drug1": "Quetiapin",
    "drug2": "Voriconazol",
    "mechanism": "Voriconazol ức chế CYP3A4 mạnh làm giảm chuyển hóa của quetiapin",
    "clinicalImpact": "Tăng nồng độ của quetiapin, tăng nguy cơ kéo dài khoảng QT",
    "recommendation": "Chống chỉ định phối hợp. Cân nhắc thay đổi sang các thuốc nhóm khác có cùng chỉ định và ít có nguy cơ tương tác hơn: Trong trường hợp bắt buộc sử dụng thuốc kháng nấm azol, thay voriconazol bằng fluconazol (nhưng tránh dùng liều cao, có tác dụng ức chế mạnh CYP3A4)."
  },
  {
    "stt": 596,
    "drug1": "Quinapril",
    "drug2": "Sacubitril/val sartan (sacubitril)",
    "mechanism": "Tăng tích lũy bradykinin gây phù mạch",
    "clinicalImpact": "Tăng nguy cơ phù mạch",
    "recommendation": "Chống chỉ định phối hợp. Chỉ bắt đầu sử dụng Sacubitril/valsartan (sacubitril) sau khi ngừng quinapril ít nhất 36 giờ."
  },
  {
    "stt": 597,
    "drug1": "Rabeprazol",
    "drug2": "Rilpivirin",
    "mechanism": "Giảm hấp thu rilpivirin do tăng pH dạ dày",
    "clinicalImpact": "Giảm nồng độ rilpivirin trong huyết thanh, giảm hiệu quả điều trị",
    "recommendation": "Chống chỉ định phối hợp. Trong trường hợp thay thế bằng thuốc kháng H2, sử dụng các thuốc H2 ít nhất 12 giờ trước hoặc 4 giờ sau khi uống rilpivirin."
  },
  {
    "stt": 598,
    "drug1": "Ramipril",
    "drug2": "Sacubitril/val sartan (sacubitril)",
    "mechanism": "Tăng tích lũy bradykinin gây phù mạch",
    "clinicalImpact": "Tăng nguy cơ phù mạch",
    "recommendation": "Chống chỉ định phối hợp. Chỉ bắt đầu sử dụng Sacubitril/valsartan (sacubitril) sau khi ngừng ramipril ít nhất 36 giờ."
  },
  {
    "stt": 599,
    "drug1": "Ranolazin",
    "drug2": "Saquinavir +/- ritonavir",
    "mechanism": "Saquinavir ức chế CYP3A4 mạnh làm giảm chuyển hóa của ranolazin",
    "clinicalImpact": "Tăng nồng độ ranolazin trong huyết thanh, tăng nguy cơ kéo dài khoảng QT",
    "recommendation": "Chống chỉ định phối hợp"
  },
  {
    "stt": 600,
    "drug1": "Ranolazin",
    "drug2": "Voriconazol",
    "mechanism": "Voriconazol ức chế CYP3A4 mạnh làm giảm chuyển hóa của ranolazin",
    "clinicalImpact": "Tăng nồng độ ranolazin trong huyết thanh, tăng nguy cơ kéo dài khoảng QT",
    "recommendation": "Chống chỉ định phối hợp. Cân nhắc thay đổi sang các thuốc nhóm khác có cùng chỉ định và ít có nguy cơ tương tác hơn: Trong trường hợp bắt buộc sử dụng thuốc kháng nấm azol, thay voriconazol bằng fluconazol (nhưng tránh dùng liều cao, có tác dụng ức chế mạnh CYP3A4)."
  },
  {
    "stt": 601,
    "drug1": "Ranolazin",
    "drug2": "Rifampicin",
    "mechanism": "Rifampicin cảm ứng CYP3A4 và P-gp làm tăng chuyển hóa của ranolazin và thải trừ của ranolazin.",
    "clinicalImpact": "Giảm nồng độ ranolazin trong huyết thanh, giảm hiệu quả điều trị",
    "recommendation": "Chống chỉ định phối hợp"
  },
  {
    "stt": 602,
    "drug1": "Rifampicin",
    "drug2": "Rilpivirin",
    "mechanism": "Rifampicin cảm ứng CYP3A4 làm tăng chuyển hóa của rilpivirin",
    "clinicalImpact": "Giảm nồng độ của rilpivirin trong huyết thanh, dẫn đến giảm hiệu quả điều trị",
    "recommendation": "Chống chỉ định phối hợp."
  },
  {
    "stt": 603,
    "drug1": "Rifampicin",
    "drug2": "Voriconazol",
    "mechanism": "Rifampicin cảm ứng CYP3A4 làm tăng chuyển hóa của voriconazol",
    "clinicalImpact": "Giảm nồng độ của voriconazol trong huyết thanh, dẫn đến giảm hiệu quả điều trị",
    "recommendation": "Chống chỉ định phối hợp. Trong trường hợp bắt buộc sử dụng voriconazol, cân nhắc thay đổi phác đồ chống lao cho bệnh nhân."
  },
  {
    "stt": 604,
    "drug1": "Rifampicin",
    "drug2": "Sofosbuvir",
    "mechanism": "Rifampicin cảm ứng P-gp làm tăng thải trừ của sofusbuvir",
    "clinicalImpact": "Giảm nồng độ của sofosbuvir trong huyết thanh, dẫn đến giảm hiệu quả điều trị",
    "recommendation": "Chống chỉ định phối hợp"
  },
  {
    "stt": 605,
    "drug1": "Rifampicin",
    "drug2": "Saquinavir +/- ritonavir",
    "mechanism": "Rifampicin cảm ứng CYP3A4 làm tăng chuyển hóa của saquinavir",
    "clinicalImpact": "Giảm nồng độ saquinavir trong huyết thanh, giảm hiệu quả điều trị",
    "recommendation": "Chống chỉ định phối hợp"
  },
  {
    "stt": 606,
    "drug1": "Rosuvastatin",
    "drug2": "Sofosbuvir/ledipasvir (ledipasvir)",
    "mechanism": "Ledipasvir ức chế BCRP và P-gp làm giảm thải trừ rosuvastatin khỏi cơ thể",
    "clinicalImpact": "Tăng nồng độ rosuvastatin trong huyết thanh, tăng nguy cơ bệnh cơ hoặc tiêu cơ vân cấp",
    "recommendation": "Chống chỉ định phối hợp"
  },
  {
    "stt": 607,
    "drug1": "Rotigotin",
    "drug2": "Sulpirid",
    "mechanism": "Đối kháng tác dụng của nhau",
    "clinicalImpact": "Giảm hiệu quả của cả hai thuốc",
    "recommendation": "Chống chỉ định phối hợp"
  },
  {
    "stt": 608,
    "drug1": "Sacubitril/vals artan (sacubitril)",
    "drug2": "Trandolapril",
    "mechanism": "Tăng tích lũy bradykinin gây phù mạch",
    "clinicalImpact": "Tăng nguy cơ phù mạch",
    "recommendation": "Chống chỉ định phối hợp. Chỉ bắt đầu sử dụng Sacubitril/valsartan (sacubitril) sau khi ngừng trandolapril ít nhất 36 giờ."
  },
  {
    "stt": 609,
    "drug1": "Sacubitril/vals artan (sacubitril)",
    "drug2": "Zofenopril",
    "mechanism": "Tăng tích lũy bradykinin gây phù mạch",
    "clinicalImpact": "Tăng nguy cơ phù mạch",
    "recommendation": "Chống chỉ định phối hợp. Chỉ bắt đầu sử dụng Sacubitril/valsartan (sacubitril) sau khi ngừng zofenopril ít nhất 36 giờ."
  },
  {
    "stt": 610,
    "drug1": "Saquinavir +/- ritonavir",
    "drug2": "Simvastatin",
    "mechanism": "Saquinavir ức chế CYP3A4 mạnh làm giảm chuyển hóa của simvastatin",
    "clinicalImpact": "Tăng nồng độ của simvastatin trong huyết thanh, tăng nguy cơ bệnh cơ hoặc tiêu cơ vân cấp",
    "recommendation": "Chống chỉ định phối hợp. Trong trường hợp bắt buộc sử dụng dẫn chất statin, thay simvastatin bằng các dẫn chất statin khác (ngoại trừ lovastatin) sử dụng liều thấp nhất có hiệu quả, atorvastatin không vượt quá 20 mg/ngày, pitavastatin và pravastatin không cần hiệu chỉnh liều khi phối hợp."
  },
  {
    "stt": 611,
    "drug1": "Saquinavir +/- ritonavir",
    "drug2": "Ticagrelor",
    "mechanism": "Saquinavir ức chế CYP3A4 mạnh làm giảm chuyển hóa của ticagrelor",
    "clinicalImpact": "Tăng nồng độ của ticagrelor trong huyết thanh, tăng nguy cơ xuất huyết",
    "recommendation": "Chống chỉ định phối hợp"
  },
  {
    "stt": 612,
    "drug1": "Saquinavir +/- ritonavir",
    "drug2": "Tolvaptan",
    "mechanism": "Saquinavir ức chế CYP3A4 mạnh làm giảm chuyển hóa của tolvaptan",
    "clinicalImpact": "Tăng nồng độ tolvaptan trong huyết thanh, tăng nguy cơ tác dụng không mong muốn (tăng nồng độ natri huyết thanh, đa niệu, khát nước, giảm thể tích tuần hoàn...)",
    "recommendation": "Chống chỉ định phối hợp"
  },
  {
    "stt": 613,
    "drug1": "Saquinavir +/- ritonavir",
    "drug2": "Sildenafil",
    "mechanism": "Saquinavir ức chế CYP3A4 làm giảm chuyển hóa của sildenafil",
    "clinicalImpact": "Tăng nồng độ sildenafil trong huyết thanh, tăng nguy cơ độc tính (hạ huyết áp, ngất, rối loạn thị giác)",
    "recommendation": "1. Chống chỉ định phối hợp trong trường hợp sử dụng sildenafil điều trị tăng áp động mạch phổi. 2. Trong trường hợp sử dụng sildenafil điều trị rối loạn cương dương, liều sildenafil không vượt quá 25 mg mỗi 48 giờ ở người đang sử dụng saquinavir."
  },
  {
    "stt": 614,
    "drug1": "Saquinavir/rito navir (ritonavir)",
    "drug2": "Vardenafil",
    "mechanism": "Ritonavir ức chế CYP3A4 làm giảm chuyển hóa của vardenafil",
    "clinicalImpact": "Tăng nồng độ vardenafil trong huyết thanh, tăng nguy cơ kéo dài khoảng QT",
    "recommendation": "Chống chỉ định phối hợp"
  },
  {
    "stt": 615,
    "drug1": "Saquinavir/rit onavir (ritonavir)",
    "drug2": "Voriconazol",
    "mechanism": "Ritonavir cảm ứng CYP2C19 (hoặc ức chế CYP3A4 ở người thiếu hoặc giảm hoạt tính CYP2C19) làm tăng (hoặc giảm) chuyển hóa của voriconazol tùy thuộc từng cá thể (voriconazol là cơ chất của cả CYP3A4 và CYP2C19)",
    "clinicalImpact": "Giảm (hoặc tăng) nồng độ voriconazol.",
    "recommendation": "1. Việc phối hợp voriconazol và ritonavir liều cao (400mg mỗi 12 giờ) làm giảm rõ rệt nồng độ voriconazol, vì vậy, chống chỉ định phối hợp voriconazol với ritonavir ở mức liều này. 2. Việc phối hợp voriconazol với ritonavir liều thấp (100mg mỗi 12 giờ) cũng đã cho thấy làm giảm nồng độ voriconazol mặc dù mức độ ít hơn so với liều cao ritonavir, vì vậy, nên tránh phối hợp thuốc trừ khi lợi ích vượt trội nguy cơ."
  },
  {
    "stt": 616,
    "drug1": "Sertralin",
    "drug2": "Xanh methylen (sử dụng đường tiêm tĩnh mạch)",
    "mechanism": "Hiệp đồng tác dụng serotonin",
    "clinicalImpact": "Tăng nguy cơ hội chứng serotonin (sốt cao, rối loạn nhận thức, tăng phản xạ, mất phối hợp, rung giật cơ, cứng cơ, co giật, nhịp tim nhanh, tăng huyết áp, tăng thân nhiệt, vã mồ hôi, ảo giác, kích động hoặc bồn chồn…)",
    "recommendation": "1. Cố gắng tránh sử dụng đồng thời xanh methylen và doxylamin. Tốt nhất các thuốc này nên sử dụng cách nhau 2 tuần. Cân nhắc thay đổi sang các thuốc nhóm khác có cùng chỉ định và ít có nguy cơ tương tác hơn. 2. Trong hợp không thể trì hoãn điều trị được 2 tuần, bắt buộc sử dụng dài ngày hoặc khẩn cấp bằng xanh methylen và không có thuốc khác thay thế, cân bằng lợi ích và nguy cơ xảy ra hội chứng serotonin. Nếu lợi ích vượt trội nguy cơ, vẫn có thể sử dụng đồng thời nhưng cần giám sát chặt chẽ chặt chẽ bệnh nhân, đặc biệt trong tháng đầu tiên sử dụng đồng thời 2 thuốc."
  },
  {
    "stt": 617,
    "drug1": "Sevofluran",
    "drug2": "Thioridazin",
    "mechanism": "Hiệp đồng tăng tác dụng",
    "clinicalImpact": "Tăng nguy cơ kéo dài khoảng QT, xoắn đỉnh",
    "recommendation": "1. Chống chỉ định phối hợp ở các bệnh nhân có hội chứng QT kéo dài do di truyền hoặc mắc phải. 2. Trên các đối tượng bệnh nhân khác, tốt nhất nên tránh phối hợp các thuốc này. Trong trường hợp cần thiết phối hợp, cần đánh giá cẩn thận nguy cơ/lợi ích và lượng giá các yếu tố nguy cơ trên từng bệnh nhân, đặc biệt là rối loạn điện giải (hạ kali máu, hạ magie máu, hạ calci máu), nhịp tim chậm, nữ giới trước khi quyết định kê đơn."
  },
  {
    "stt": 618,
    "drug1": "Sevofluran",
    "drug2": "Sparfloxacin",
    "mechanism": "Hiệp đồng tăng tác dụng",
    "clinicalImpact": "Tăng nguy cơ kéo dài khoảng QT, xoắn đỉnh",
    "recommendation": "1. Chống chỉ định phối hợp ở các bệnh nhân có hội chứng QT kéo dài do di truyền hoặc mắc phải. 2. Trên các đối tượng bệnh nhân khác, tốt nhất nên tránh phối hợp các thuốc này. Trong trường hợp cần thiết phối hợp, cần đánh giá cẩn thận nguy cơ/lợi ích và lượng giá các yếu tố nguy cơ trên từng bệnh nhân, đặc biệt là rối loạn điện giải (hạ kali máu, hạ magie máu, hạ calci máu), nhịp tim chậm, nữ giới trước khi quyết định kê đơn."
  },
  {
    "stt": 619,
    "drug1": "Simvastatin",
    "drug2": "Voriconazol",
    "mechanism": "Voriconazol ức chế CYP3A4 mạnh làm giảm chuyển hóa của simvastatin",
    "clinicalImpact": "Tăng nồng độ của simvastatin trong huyết thanh, tăng nguy cơ bệnh cơ hoặc tiêu cơ vân cấp",
    "recommendation": "Chống chỉ định phối hợp. Cân nhắc thay đổi sang các thuốc nhóm khác có cùng chỉ định và ít có nguy cơ tương tác hơn: - Trong trường hợp bắt buộc sử dụng thuốc kháng nấm azol, thay voriconazol bằng fluconazol (nhưng tránh dùng liều cao, có tác dụng ức chế mạnh CYP3A4) HOẶC - Trong trường hợp bắt buộc sử dụng dẫn chất statin, thay simvastatin bằng các dẫn chất statin khác (ngoại trừ lovastatin)."
  },
  {
    "stt": 620,
    "drug1": "Sotalol",
    "drug2": "Thioridazin",
    "mechanism": "Hiệp đồng tăng tác dụng",
    "clinicalImpact": "Tăng nguy cơ kéo dài khoảng QT, xoắn đỉnh",
    "recommendation": "1. Chống chỉ định phối hợp ở các bệnh nhân có hội chứng QT kéo dài do di truyền hoặc mắc phải. 2. Trên các đối tượng bệnh nhân khác, tốt nhất nên tránh phối hợp các thuốc này. Trong trường hợp cần thiết phối hợp, cần đánh giá cẩn thận nguy cơ/lợi ích và lượng giá các yếu tố nguy cơ trên từng bệnh nhân, đặc biệt là rối loạn điện giải (hạ kali máu, hạ magie máu, hạ calci máu), nhịp tim chậm, nữ giới trước khi quyết định kê đơn."
  },
  {
    "stt": 621,
    "drug1": "Sotalol",
    "drug2": "Sparfloxacin",
    "mechanism": "Hiệp đồng tăng tác dụng",
    "clinicalImpact": "Tăng nguy cơ kéo dài khoảng QT, xoắn đỉnh",
    "recommendation": "1. Chống chỉ định phối hợp ở các bệnh nhân có hội chứng QT kéo dài do di truyền hoặc mắc phải. 2. Trên các đối tượng bệnh nhân khác, tốt nhất nên tránh phối hợp các thuốc này. Trong trường hợp cần thiết phối hợp, cần đánh giá cẩn thận nguy cơ/lợi ích và lượng giá các yếu tố nguy cơ trên từng bệnh nhân, đặc biệt là rối loạn điện giải (hạ kali máu, hạ magie máu, hạ calci máu), nhịp tim chậm, nữ giới trước khi quyết định kê đơn."
  },
  {
    "stt": 622,
    "drug1": "Sparfloxacin",
    "drug2": "Sulpirid",
    "mechanism": "Hiệp đồng tăng tác dụng",
    "clinicalImpact": "Tăng nguy cơ kéo dài khoảng QT, xoắn đỉnh",
    "recommendation": "1. Chống chỉ định phối hợp ở các bệnh nhân có hội chứng QT kéo dài do di truyền hoặc mắc phải. 2. Trên các đối tượng bệnh nhân khác, tốt nhất nên tránh phối hợp các thuốc này. Trong trường hợp cần thiết phối hợp, cần đánh giá cẩn thận nguy cơ/lợi ích và lượng giá các yếu tố nguy cơ trên từng bệnh nhân, đặc biệt là rối loạn điện giải (hạ kali máu, hạ magie máu, hạ calci máu), nhịp tim chậm, nữ giới trước khi quyết định kê đơn."
  },
  {
    "stt": 623,
    "drug1": "Sparfloxacin",
    "drug2": "Thioridazin",
    "mechanism": "Hiệp đồng tăng tác dụng",
    "clinicalImpact": "Tăng nguy cơ kéo dài khoảng QT, xoắn đỉnh",
    "recommendation": "1. Chống chỉ định phối hợp ở các bệnh nhân có hội chứng QT kéo dài do di truyền hoặc mắc phải. 2. Trên các đối tượng bệnh nhân khác, tốt nhất nên tránh phối hợp các thuốc này. Trong trường hợp cần thiết phối hợp, cần đánh giá cẩn thận nguy cơ/lợi ích và lượng giá các yếu tố nguy cơ trên từng bệnh nhân, đặc biệt là rối loạn điện giải (hạ kali máu, hạ magie máu, hạ calci máu), nhịp tim chậm, nữ giới trước khi quyết định kê đơn."
  },
  {
    "stt": 624,
    "drug1": "Sulpirid",
    "drug2": "Thioridazin",
    "mechanism": "Hiệp đồng tăng tác dụng",
    "clinicalImpact": "Tăng nguy cơ kéo dài khoảng QT, xoắn đỉnh",
    "recommendation": "1. Chống chỉ định phối hợp ở các bệnh nhân có hội chứng QT kéo dài do di truyền hoặc mắc phải. 2. Trên các đối tượng bệnh nhân khác, tốt nhất nên tránh phối hợp các thuốc này. Trong trường hợp cần thiết phối hợp, cần đánh giá cẩn thận nguy cơ/lợi ích và lượng giá các yếu tố nguy cơ trên từng bệnh nhân, đặc biệt là rối loạn điện giải (hạ kali máu, hạ magie máu, hạ calci máu), nhịp tim chậm, nữ giới trước khi quyết định kê đơn."
  },
  {
    "stt": 625,
    "drug1": "Sumatriptan",
    "drug2": "Xanh methylen (sử dụng đường tiêm tĩnh mạch)",
    "mechanism": "Hiệp đồng tác dụng serotonin",
    "clinicalImpact": "Tăng nguy cơ hội chứng serotonin (sốt cao, rối loạn nhận thức, tăng phản xạ, mất phối hợp, rung giật cơ, cứng cơ, co giật, nhịp tim nhanh, tăng huyết áp, tăng thân nhiệt, vã mồ hôi, ảo giác, kích động hoặc bồn chồn…)",
    "recommendation": "1. Cố gắng tránh sử dụng đồng thời xanh methylen và sumatriptan. Tốt nhất các thuốc này nên sử dụng cách nhau 2 tuần. Cân nhắc thay đổi sang các thuốc nhóm khác có cùng chỉ định và ít có nguy cơ tương tác hơn. 2. Trong hợp không thể trì hoãn điều trị được 2 tuần, bắt buộc sử dụng dài ngày hoặc khẩn cấp bằng xanh methylen và không có thuốc khác thay thế, cân bằng lợi ích và nguy cơ xảy ra hội chứng serotonin. Nếu lợi ích vượt trội nguy cơ, vẫn có thể sử dụng đồng thời nhưng cần giám sát chặt chẽ chặt chẽ bệnh nhân, đặc biệt trong tháng đầu tiên sử dụng đồng thời 2 thuốc."
  },
  {
    "stt": 626,
    "drug1": "Tamoxifen",
    "drug2": "Warfarin",
    "mechanism": "Tamoxifen ức chế CYP2C9 làm giảm chuyển hóa của warfarin",
    "clinicalImpact": "Tăng nguy cơ xuất huyết",
    "recommendation": "1. Chống chỉ định phối hợp ở bệnh nhân sử dụng tamoxifen dự phòng tiên phát ung thư vú. 2. Ở bệnh nhân ung thư vú, nên cân nhắc sử dụng heparin trọng lượng phân tử thấp (LMWH) hoặc các thuốc chống đông đường uống tác động trực tiếp (DOAC) thay thế acenocoumarol để điều trị thuyên tắc tĩnh mạch do huyết khối. Trong trường hợp bắt buộc sử dụng đồng thời tamoxifen với acenocoumarol, cần giảm liều acenocoumarol và theo dõi chặt chẽ bệnh nhân."
  },
  {
    "stt": 627,
    "drug1": "Tetracyclin",
    "drug2": "Tretinoin",
    "mechanism": "Hiệp đồng tăng độc tính",
    "clinicalImpact": "Tăng nguy cơ tăng áp nội sọ lành tính (phù gai thị, đau đầu, buồn nôn và nôn, và rối loạn thị giác)",
    "recommendation": "Chống chỉ định phối hợp"
  },
  {
    "stt": 628,
    "drug1": "Ticagrelor",
    "drug2": "Voriconazol",
    "mechanism": "Voriconazol ức chế CYP3A4 mạnh làm giảm chuyển hóa của ticagrelor",
    "clinicalImpact": "Tăng nồng độ của ticagrelor trong huyết thanh, tăng nguy cơ xuất huyết",
    "recommendation": "Chống chỉ định phối hợp. Cân nhắc thay đổi sang các thuốc nhóm khác có cùng chỉ định và ít có nguy cơ tương tác hơn: Trong trường hợp bắt buộc sử dụng thuốc kháng nấm azol, thay voriconazol bằng fluconazol (nhưng tránh dùng liều cao, có tác dụng ức chế mạnh CYP3A4)."
  },
  {
    "stt": 629,
    "drug1": "Tigecyclin",
    "drug2": "Tretinoin",
    "mechanism": "Hiệp đồng tăng độc tính",
    "clinicalImpact": "Tăng nguy cơ tăng áp nội sọ lành tính (phù gai thị, đau đầu, buồn nôn và nôn, và rối loạn thị giác)",
    "recommendation": "Chống chỉ định phối hợp"
  },
  {
    "stt": 630,
    "drug1": "Tolvaptan",
    "drug2": "Voriconazol",
    "mechanism": "Voriconazol ức chế CYP3A4 mạnh làm giảm chuyển hóa của tolvaptan",
    "clinicalImpact": "Tăng nồng độ tolvaptan trong huyết thanh, tăng nguy cơ tác dụng không mong muốn (tăng nồng độ natri huyết thanh, đa niệu, khát nước, giảm thể tích tuần hoàn...)",
    "recommendation": "Chống chỉ định phối hợp. Cân nhắc thay đổi sang các thuốc nhóm khác có cùng chỉ định và ít có nguy cơ tương tác hơn: Trong trường hợp bắt buộc sử dụng thuốc kháng nấm azol, thay voriconazol bằng fluconazol (nhưng tránh dùng liều cao, có tác dụng ức chế mạnh CYP3A4)."
  },
  {
    "stt": 631,
    "drug1": "Tramadol",
    "drug2": "Xanh methylen (sử dụng đường tiêm tĩnh mạch)",
    "mechanism": "Hiệp đồng tác dụng serotonin",
    "clinicalImpact": "Tăng nguy cơ hội chứng serotonin (sốt cao, rối loạn nhận thức, tăng phản xạ, mất phối hợp, rung giật cơ, cứng cơ, co giật, nhịp tim nhanh, tăng huyết áp, tăng thân nhiệt, vã mồ hôi, ảo giác, kích động hoặc bồn chồn…)",
    "recommendation": "1. Cố gắng tránh sử dụng đồng thời xanh methylen và tramadol. Tốt nhất các thuốc này nên sử dụng cách nhau 2 tuần. Cân nhắc thay đổi sang các thuốc nhóm khác có cùng chỉ định và ít có nguy cơ tương tác hơn. Trong trường hợp bắt buộc sử dụng opioid, có thể đổi sang các opiod khác không có hoạt tính ức chế thu hồi serotonin (morphin, codein, oxycodon, buprenorphin) 2. Trong hợp không thể trì hoãn điều trị được 2 tuần, bắt buộc sử dụng dài ngày hoặc khẩn cấp bằng xanh methylen và không có thuốc khác thay thế, cân bằng lợi ích và nguy cơ xảy ra hội chứng serotonin. Nếu lợi ích vượt trội nguy cơ, vẫn có thể sử dụng đồng thời nhưng cần giám sát chặt chẽ chặt chẽ bệnh nhân, đặc biệt trong tháng đầu tiên sử dụng đồng thời 2 thuốc."
  },
  {
    "stt": 632,
    "drug1": "Trazodon",
    "drug2": "Xanh methylen (sử dụng đường tiêm tĩnh mạch)",
    "mechanism": "Hiệp đồng tác dụng serotonin",
    "clinicalImpact": "Tăng nguy cơ hội chứng serotonin (sốt cao, rối loạn nhận thức, tăng phản xạ, mất phối hợp, rung giật cơ, cứng cơ, co giật, nhịp tim nhanh, tăng huyết áp, tăng thân nhiệt, vã mồ hôi, ảo giác, kích động hoặc bồn chồn…)",
    "recommendation": "1. Cố gắng tránh sử dụng đồng thời xanh methylen và trazodon. Tốt nhất các thuốc này nên sử dụng cách nhau 2 tuần. Cân nhắc thay đổi sang các thuốc nhóm khác có cùng chỉ định và ít có nguy cơ tương tác hơn. 2. Trong hợp không thể trì hoãn điều trị được 2 tuần, bắt buộc sử dụng dài ngày hoặc khẩn cấp bằng xanh methylen và không có thuốc khác thay thế, cân bằng lợi ích và nguy cơ xảy ra hội chứng serotonin. Nếu lợi ích vượt trội nguy cơ, vẫn có thể sử dụng đồng thời nhưng cần giám sát chặt chẽ chặt chẽ bệnh nhân, đặc biệt trong tháng đầu tiên sử dụng đồng thời 2 thuốc."
  },
  {
    "stt": 633,
    "drug1": "Venlafaxin",
    "drug2": "Xanh methylen (sử dụng đường tiêm tĩnh mạch)",
    "mechanism": "Hiệp đồng tác dụng serotonin",
    "clinicalImpact": "Tăng nguy cơ hội chứng serotonin (sốt cao, rối loạn nhận thức, tăng phản xạ, mất phối hợp, rung giật cơ, cứng cơ, co giật, nhịp tim nhanh, tăng huyết áp, tăng thân nhiệt, vã mồ hôi, ảo giác, kích động hoặc bồn chồn…)",
    "recommendation": "1. Cố gắng tránh sử dụng đồng thời xanh methylen và venlafaxin. Tốt nhất các thuốc này nên sử dụng cách nhau 2 tuần. Cân nhắc thay đổi sang các thuốc nhóm khác có cùng chỉ định và ít có nguy cơ tương tác hơn. 2. Trong hợp không thể trì hoãn điều trị được 2 tuần, bắt buộc sử dụng dài ngày hoặc khẩn cấp bằng xanh methylen và không có thuốc khác thay thế, cân bằng lợi ích và nguy cơ xảy ra hội chứng serotonin. Nếu lợi ích vượt trội nguy cơ, vẫn có thể sử dụng đồng thời nhưng cần giám sát chặt chẽ chặt chẽ bệnh nhân, đặc biệt trong tháng đầu tiên sử dụng đồng thời 2 thuốc."
  }
];
