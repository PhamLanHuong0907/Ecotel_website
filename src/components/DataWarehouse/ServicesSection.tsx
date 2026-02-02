import image_datawarehouse from "@/assets/datawarehouse.png";
import { 
  Briefcase,   // Dùng cho Quản trị nguồn lực (Hành chính/Tổng hợp)
} from 'lucide-react';
import { ServicesSection,ServiceItem } from "../Component_mini/ServicesSection_module";

const services: ServiceItem[] = [
  {
    id: 1,
    title: "Kho dữ liệu tập trung",
    description: `Việc đồng bộ dữ liệu tại một nơi là yếu tố then chốt giúp doanh nghiệp khai thác tối đa giá trị của thông tin trong quá trình chuyển đổi số đầy thách thức.

\n\nGiải pháp Data Lakehouse mang đến một hệ thống lưu trữ linh hoạt, hỗ trợ mạnh mẽ cho AI/ML và phân tích dữ liệu lớn. Bằng cách tích hợp các công cụ BI và khả năng phân tích thời gian thực, nền tảng này giúp doanh nghiệp đưa ra các quyết định kinh doanh nhanh chóng, chính xác dựa trên dữ liệu đáng tin cậy.`,
    image: image_datawarehouse,
    icon: Briefcase,
    path: '/datawarehouse/datawarehouse'
  }]
export const DataServicesSection = () => {
  return (
    <ServicesSection 
      sectionTitle="Các sản phẩm của hệ thống Data Warehouse"
      items={services}
    />
  );
};
