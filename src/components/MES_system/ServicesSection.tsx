import { Factory, BarChart3, Cpu, ArrowRight, Wrench } from "lucide-react";
import image_conveyor from "@/assets/giamsatbangtai.png";
import image_enviroment from "@/assets/giamsatmoitruong.png";
import image_oee from "@/assets/qlhstb_big.png";
import image_product from "@/assets/qllenhsanxuat.png";
import image_qms from "@/assets/qlqms.png";
import image_repair from "@/assets/repair.png";
import { ServicesSection,ServiceItem } from "../Component_mini/ServicesSection_module";
import { 
  ClipboardList, 
  Activity, 
  Gauge, 
  ShieldCheck, 
  Wind, 
  Eye 
} from 'lucide-react';
import { Description } from "@radix-ui/react-toast";

const services: ServiceItem[] = [
  {
    id: 1,
    title: "Quản lý lệnh sản xuất & năng suất lao động",
    description: `ECOTEL cung cấp giải pháp quản lý toàn trình lệnh sản xuất, từ lập kế hoạch, phân công đến nghiệm thu. Hệ thống giám sát chặt chẽ năng suất nhân sự theo từng ca kíp, giúp doanh nghiệp đánh giá chính xác hiệu quả vận hành tại hiện trường.`,
    image: image_product,
    icon: ClipboardList, // Biểu tượng cho quản lý, danh sách lệnh
    path: '/mes/production-management'
  },
  {
    id: 2,
    title: "Phần mềm giám sát, vận hành sản xuất",
    description: `ECOTEL ứng dụng công nghệ kết nối sâu rộng (PLC, SCADA, IoT) để thu thập dữ liệu sản xuất theo thời gian thực. Hệ thống tự động tính toán sản lượng và giám sát trạng thái thiết bị, giúp nhà quản lý nắm bắt chính xác mọi diễn biến tại nhà máy.`,
    image: "https://ecotel.com.vn/api.php/api.php/images/800/14590293/dien-cong-nghiep-6.jpg1729586543582",
    icon: Activity, // Biểu tượng cho giám sát hoạt động thời gian thực
    path: '/mes/monitoring-operation'
  },
  {
    id: 3,
    title: "Quản lý hiệu suất thiết bị (OEE)",
    description: `Tối đa hóa năng lực máy móc thông qua việc giám sát ba chỉ số cốt lõi: Mức độ sẵn sàng, Hiệu suất và Chất lượng. ECOTEL cung cấp giải pháp giúp truy vết các điểm nghẽn trong vận hành và hỗ trợ ra quyết định cải thiện năng suất tức thời.`,
    image: image_oee,
    icon: Gauge, // Biểu tượng đồng hồ đo hiệu suất
    path: '/mes/oee-management'
  },
  {
    id: 4,
    title: "Quản lý chất lượng (QMS)",
    description: `Kiểm soát chất lượng không chỉ là kiểm tra sản phẩm cuối cùng, mà là một quy trình xuyên suốt. Đảm bảo tuân thủ tiêu chuẩn ở mọi công đoạn là cách tốt nhất để giảm thiểu lãng phí.

Hệ thống QMS từ ECOTEL giúp số hóa quy trình kiểm tra, giám sát chặt chẽ từ đầu vào đến đầu ra, mang lại sự an tâm tuyệt đối về chất lượng thành phẩm.`,
    image: image_qms,
    icon: ShieldCheck, // Biểu tượng bảo vệ/kiểm tra chất lượng
    path: '/mes/qms'
  },
  {
    id: 5,
    title : "Phần mềm Giám sát, bảo trì & bảo dưỡng thiết bị",
    description: `Việc thiếu kiểm soát về hiệu suất thực tế và tình trạng sức khỏe của máy móc thường dẫn đến những sự cố dừng máy bất ngờ, gây lãng phí năng lượng và gián đoạn dây chuyền sản xuất.
    \n\n Hệ thống cung cấp giải pháp quản lý toàn diện bao gồm: Giám sát hiệu suất tổng thể (OEE), Dự báo lỗi thiết bị (SM), Quản lý tiêu thụ điện năng (EM) và Định vị tài sản thời gian thực (LM). 
    Nền tảng giúp doanh nghiệp chuyển đổi từ bảo trì thụ động sang chủ động, tối ưu hóa 
    vòng đời tài sản.`,
    image: image_repair,
    icon: Wrench,
    path: '/mes/repair'
  },
  {
    id: 6,
    title: "Giám sát môi trường",
    description: `Trong môi trường đặc thù như hầm lò hay nhà máy hóa chất, việc kiểm soát các biến động môi trường là yếu tố sống còn. Những rủi ro vô hình như khí độc hay thay đổi nhiệt độ đột ngột cần được phát hiện trước khi chúng trở thành sự cố.
    \n\nECOTEL cung cấp hệ thống quan trắc môi trường thông minh, tích hợp cảm biến IoT để đo lường liên tục nồng độ khí và điều kiện vi khí hậu. 
    Hệ thống tự động kích hoạt cảnh báo khẩn cấp ngay khi chỉ số vượt ngưỡng an toàn, hỗ trợ ứng phó kịp thời.`,
    image: image_enviroment,
    icon: Wind, // Biểu tượng không khí/môi trường
    path: '/mes/environment-monitoring'
  },
  {
    id: 7,
    title: "Giám sát băng tải",
    description: `Nâng cấp quy trình vận hành với công nghệ giám sát băng tải thông minh. Thay vì kiểm tra thủ công, doanh nghiệp cần một "đôi mắt" công nghệ hoạt động 24/7 để phát hiện các bất thường nhỏ nhất.

\n\nỨng dụng Camera AI và cảm biến IoT, giải pháp của ECOTEL tự động phát hiện tình trạng lệch băng, giám sát nhiệt độ vòng bi/mô-tơ để ngăn ngừa nguy cơ cháy nổ. Dữ liệu được đồng bộ về trung tâm điều hành giúp xử lý sự cố tự động và chính xác.`,
    image: image_conveyor,
    icon: Eye, // Biểu tượng cho "đôi mắt công nghệ"/Camera AI
    path: '/mes/conveyor-monitoring'
  },
];
export const MesServicesSection = () => {
  return (
    <ServicesSection 
      sectionTitle="Các sản phẩm của hệ thống MES"
      items={services}
    />
  );
};

