import { HeroSectionModule, HighlightCard } from "@/components/Component_mini/HeroSection_Module"
import erpDiagram from "@/assets/datawarehousemodule.png";
import img_dongbo from "@/assets/data_dongbodulieu1.png"
const highlightCards: HighlightCard[] = [
  {
    id: 1,
    title: "Đồng bộ đa nguồn",
    description: "Dữ liệu tập trung \ntại một nơi duy nhất \n Thiết kế chuẩn Data Lakehouse",
    image: img_dongbo,
  },
  {
    id: 2,
    title: "Phân tích \n thông minh",
    description: "Xử lý Big Data & hỗ trợ AI/ML \n Tích hợp BI trực quan hóa",
    image: "https://cloud-web-cms-beta.s3.cloud.cmctelecom.vn/Cloud_Backup_1_b4706932aa.png",
  },
  {
    id: 3,
    title: "Bảo mật dữ liệu",
    description: "Bảo mật đa lớp & Mã hóa dữ liệu \n Kiểm soát quyền truy cập chặt chẽ \n Đảm bảo dữ liệu sạch và chuẩn hóa",
    image: "https://congnghethongtinaau.com/wp-content/uploads/2024/04/bao-mat-du-lieu-la-gi.jpg",
  },
];

export const HeroSection = () => {
  return (
    <HeroSectionModule 
      backgroundImage={erpDiagram}
      title="Kho dữ liệu tập trung"
      subtitle="Data Warehouse"
      slogan="Đồng bộ - Thông minh - Bảo mật"
      cards={highlightCards}
    />
  );
};