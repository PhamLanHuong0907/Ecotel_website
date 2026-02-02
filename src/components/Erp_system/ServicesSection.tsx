import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

import image_qtnl from "@/assets/quantringuonluc_outside.png";
import image_vhsx from "@/assets/vanhanh_sx.png";
import image_kddv from "@/assets/KDDV.png";
import image_bi from "@/assets/DashboardBI.png";
import ScrollToTop from "../Component_mini/Scrolltotop";
import { ServicesSection,ServiceItem } from "../Component_mini/ServicesSection_module";
import { 
  Briefcase,   // Dùng cho Quản trị nguồn lực (Hành chính/Tổng hợp)
  Factory,     // Dùng cho Vận hành - Sản xuất (Nhà máy)
  ShoppingCart,// Dùng cho Kinh doanh (Bán hàng)
  BarChart3,    // Dùng cho BI (Biểu đồ/Báo cáo)
  ArrowRight
} from 'lucide-react';


const services: ServiceItem[] = [
  {
    id: 1,
    title: "Quản trị nguồn lực",
    description: `Sự phân tán dữ liệu giữa Nhân sự, Tài chính và Kho vận thường dẫn đến lãng phí nguồn lực và thiếu cái nhìn tổng quan. Tối ưu hóa nguồn lực là bài toán sống còn để duy trì lợi thế cạnh tranh.

\n\nECOTEL cung cấp nền tảng quản trị hợp nhất, giúp doanh nghiệp quy hoạch và phân bổ nguồn lực chính xác. Hệ thống đảm bảo dòng chảy thông tin xuyên suốt, giảm thiểu chi phí ẩn và tối đa hóa hiệu quả sử dụng tài sản doanh nghiệp.`,
    image: image_qtnl,
    icon: Briefcase,
    path: '/erp/resource-management'
  },
  {
    id: 2,
    title: "Vận hành - Sản xuất",
    description: `Quy trình vận hành rời rạc là nguyên nhân chính gây ra chậm tiến độ và khó kiểm soát chi phí giá thành. Để mở rộng quy mô, doanh nghiệp cần một hệ thống kiểm soát chặt chẽ từng công đoạn.

\n\nECOTEL thiết lập quy trình sản xuất số hóa, kết nối đồng bộ từ nguyên vật liệu đầu vào đến thành phẩm đầu ra. Giải pháp giúp tự động hóa điều phối, giảm thiểu thời gian chết và đảm bảo chất lượng sản phẩm ổn định theo tiêu chuẩn.`,
    image: image_vhsx,
    icon: Factory,
    path: '/erp/manufacturing-operations'
  },
  {
    id: 3,
    title: "Kinh doanh & Dịch vụ",
    description: `Trong thị trường cạnh tranh, tốc độ phản hồi và trải nghiệm khách hàng là yếu tố then chốt. Các quy trình bán hàng thủ công dễ dẫn đến sai sót trong hợp đồng và bỏ lỡ cơ hội kinh doanh tiềm năng.

\n\nGiải pháp của ECOTEL chuẩn hóa toàn bộ phễu bán hàng (Sales Pipeline) và dịch vụ sau bán. Hệ thống hỗ trợ quản lý chặt chẽ tính pháp lý trong giao dịch, giúp đội ngũ kinh doanh chốt đơn nhanh chóng và nâng cao sự hài lòng của khách hàng.`,
    image: image_kddv,
    icon: ShoppingCart,
    path: '/erp/sales-services'
  },
  {
    id: 4,
    title: "Dashboard & BI",
    description: `Trong kỷ nguyên số, dữ liệu phân mảnh là rào cản lớn nhất cho việc ra quyết định. Lãnh đạo doanh nghiệp cần nhìn thấy bức tranh toàn cảnh về sức khỏe tài chính và vận hành ngay tại thời điểm thực.

\n\nECOTEL mang đến giải pháp ERP & BI toàn diện, biến dữ liệu thô thành thông tin chiến lược. Hệ thống Dashboard trực quan giúp chuẩn hóa báo cáo, hỗ trợ phân tích xu hướng và ra quyết định kinh doanh chính xác, kịp thời.`,
    image: image_bi,
    icon: BarChart3,
    path: '/erp/dashboard-bi'
  }
];
export const ErpServicesSection = () => {
  return (
    <ServicesSection 
      sectionTitle="Các sản phẩm của hệ thống ERP"
      items={services}
    />
  );
};
