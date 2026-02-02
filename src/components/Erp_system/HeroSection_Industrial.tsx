import { HeroSectionModule, HighlightCard } from "@/components/Component_mini/HeroSection_Module"
import erpDiagram from "@/assets/erp_bg.jpg";
import img_linhhoat from "@/assets/Screenshot 2026-01-29 164134.png";
const highlightCards: HighlightCard[]= [
  {
    id: 1,
    title: "Quản trị \n hiệu quả nguồn lực",
    description: "Chuẩn hóa quy trình \n Dữ liệu tập trung \n Tối ưu hóa vận hành",
    image: "https://amis.misa.vn/wp-content/uploads/2019/03/phuong-phap-su-dung-nguon-luc.jpg",
  },
  {
    id: 2,
    title: "Giải pháp \n ERP tổng thể",
    description: "Kết nối liền mạch \n MES, AIoT, BI",
    image: "https://cdn.fpt-is.com/vi/huong-dan-su-dung-he-thong-erp-2.png",
  },
  {
    id: 3,
    title: "Linh hoạt, \n dễ mở rộng",
    description: "Phù hợp với nhiều mô hình doanh nghiệp, đồng hành chuyển đổi số \n và phát triển bền vững",
    image: img_linhhoat,
  },
];

export const HeroSection = () => {
  return (
    <HeroSectionModule
      // Thông tin Hero Banner
      backgroundImage={erpDiagram}
    // Đúng chiều cao bạn mong muốn trong code cũ
      title="HỆ THỐNG ERP"
      subtitle="Enterprise Resource Planning"
      slogan="Toàn diện – Hiệu quả - Linh hoạt"
      
      // Thông tin Cards
      cardsSectionTitle="Lợi ích nổi bật"
      cards={highlightCards}
    />
  );
};