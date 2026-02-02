import { HeroSectionModule, HighlightCard } from "@/components/Component_mini/HeroSection_Module"
import erpDiagram from "@/assets/hethongmes.png";
import image_giamsat from "@/assets/Giamsat_mes.jpg"
import image_ketnoi from "@/assets/ketnoi2_mes.png"
import image_toiuuhoa from "@/assets/toiuuhoa_mes.jpg"
const highlightCards: HighlightCard[] = [
  {
    id: 1,
    title: "Giám sát toàn diện",
    description: "Giám sát và điều hành sản xuất theo thời gian thực.\n Theo dõi chặt chẽ lệnh sản xuất, tiến độ, năng suất và chất lượng.",
    image: image_giamsat,
  },
  {
    id: 2,
    title: "Kết nối chặt chẽ",
    description: "Tạo sự liên kết liền mạch \n giữa hệ thống quản trị (ERP) \n và tầng thiết bị.\n Đồng bộ dữ liệu trực tiếp \n từ dây chuyền sản xuất.",
    image: image_ketnoi,
  },
  {
    id: 3,
    title: "Tối ưu hóa hiệu quả",
    description: "Giảm thiểu sai lỗi, tối ưu hóa \n nguồn lực và hiệu suất thiết bị.\n Nâng cao hiệu quả vận hành, \n hiện thực hóa mô hình nhà máy thông minh.",
    image: image_toiuuhoa,
  },
];

export const HeroSection = () => {
  return (
    <HeroSectionModule
      // Thông tin Hero Banner
      backgroundImage={erpDiagram}// Đúng chiều cao bạn mong muốn trong code cũ
      title="HỆ THỐNG MES"
      subtitle="Manufacturing Execution System"
      slogan="Giám sát – Kết nối – Tối ưu hóa"
      
      // Thông tin Cards
      cardsSectionTitle="Lợi ích nổi bật"
      cards={highlightCards}
    />
  );
};