import image_centralmanagement from "@/assets/Hethongql.png";
import image_security from "@/assets/giamsoatantoanAI.png";
import image_smartsurvey from "@/assets/khaosatthamdo.webp";
import image_visionsensor from "@/assets/cambienhinhanh.png"
import { Map, ShieldCheck, ScanEye, LayoutDashboard } from 'lucide-react';
import { ServicesSection,ServiceItem } from "../Component_mini/ServicesSection_module";
const services: ServiceItem[] = [
  {
    id: 1,
    title: "Khảo sát & Thăm dò thông minh",
    description: "ECOTEL tiên phong ứng dụng tổ hợp công nghệ Drone và hệ thống phân tích dữ liệu địa lý để hiện đại hóa quy trình khảo sát. Giải pháp của chúng tôi cho phép lập bản đồ 3D giám sát thực thể và đánh giá tiềm năng khoáng sản với độ chính xác cao, giúp doanh nghiệp tối ưu hóa công tác quy hoạch cũng như quản lý tài nguyên hiệu quả.",
    image: image_smartsurvey, // Cần đổi ảnh minh họa phù hợp (Drone/Bản đồ)
    icon: Map,
    path: '/AI&IoT/smart-survey'
  },
  {
    id: 2,
    title: "Giám sát & An toàn ứng dụng AI",
    description: "Nâng tầm hệ thống an ninh truyền thống với công nghệ AI tiên tiến, giải pháp của ECOTEL không chỉ kiểm soát chặt chẽ phương tiện và nhân sự ra vào mà còn tự động phát hiện các vi phạm về bảo hộ lao động. Đây là chìa khóa để kiến tạo môi trường sản xuất an toàn tuyệt đối và giảm thiểu rủi ro tai nạn trong các khu công nghiệp.",
    image: image_security, // Cần đổi ảnh minh họa phù hợp (Camera AI/An ninh)
    icon: ShieldCheck,
    path: '/AIoT/safety_security'
  },
  {
    id: 3,
    title: "Cảm biến hình ảnh với AI tích hợp",
    description: "Sở hữu dòng cảm biến IV4 thế hệ mới, chúng tôi mang đến giải pháp kiểm tra chất lượng tự động với khả năng phân loại, đếm sản phẩm và đọc ký tự (OCR) vượt trội. Hệ thống tích hợp AI giúp doanh nghiệp phát hiện lỗi sai hỏng nhanh chóng, đảm bảo tính ổn định cho dây chuyền sản xuất mà không đòi hỏi quy trình thiết lập phức tạp.",
    image: image_visionsensor,
    icon: ScanEye,
    path: '/AI&IoT/vision-sensor'
  },
  {
    id: 4,
    title: "Hệ thống quản lý tập trung",
    description: "Trung tâm điều hành thông minh (SOC) là giải pháp cốt lõi giúp số hóa toàn diện quy trình quản trị. Bằng cách tích hợp dữ liệu đa nguồn từ IoT, Drone đến Camera và ứng dụng Big Data để phân tích, hệ thống cung cấp bức tranh toàn cảnh trực quan theo thời gian thực, hỗ trợ ban lãnh đạo ra quyết định chính xác và kịp thời.",
    image: image_centralmanagement, // Cần đổi ảnh minh họa phù hợp (Dashboard SOC)
    icon: LayoutDashboard,
    path: '/AI&IoT/central-management'
  },
];

export const AIServicesSection = () => {
  return (
    <ServicesSection 
      sectionTitle="Các sản phẩm của hệ thống AIoT"
      items={services}
    />
  );
};