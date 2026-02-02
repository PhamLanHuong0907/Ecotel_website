import { HeroSectionModule, HighlightCard } from "@/components/Component_mini/HeroSection_Module"
import img_tichhop from "@/assets/aiot_tichhop.png"
const highlightCards: HighlightCard[] = [
  {
    id: 1,
    title: "Tích hợp thông minh",
    description: "Nền tảng tích hợp IoT và \n Trí tuệ nhân tạo (AI).\n Kết nối thiết bị đa dạng và \n thu thập dữ liệu theo thời gian thực.",
    image: img_tichhop,
  },
  {
    id: 2,
    title: "Phân tích & Dự báo",
    description: "Phân tích thông minh giúp giám sát, dự báo và tối ưu vận hành.\n Hỗ trợ doanh nghiệp ra quyết định chính xác trong môi trường công nghiệp hiện đại.",
    image: "https://openend.vn/wp-content/uploads/2022/12/du-bao-ban-hang.png",
  },
  {
    id: 3,
    title: "Hạ tầng dữ liệu lõi",
    description: "Đóng vai trò hạ tầng dữ liệu quan trọng trong hệ sinh thái ERP – MES.\n Nền tảng vững chắc để xây dựng Nhà máy thông minh.",
    image: "https://vinbigdata.com/wp-content/uploads/2022/04/cloud-storage-background-business-network-design-scaled.jpg",
  },
];

export const HeroSection = () => {
  return (
    <HeroSectionModule 
      backgroundImage="https://cdn-media.sforum.vn/storage/app/media/ctvseo_15/Background%20xanh/background-xanh-1.jpg"
      title="HỆ THỐNG AIoT"
      subtitle="Artificial Intelligence of Things"
      slogan="Kết nối thông minh - Phân tích chi tiết - Cảnh báo kịp thời"
      cards={highlightCards}
    />
  );
};