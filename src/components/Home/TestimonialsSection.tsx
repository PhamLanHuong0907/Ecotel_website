import { Quote } from "lucide-react";
import { TestimonialsSection } from "../Testimonials";

const testimonials = [
  {
    content: "ECOTEL đã giúp chúng tôi chuyển đổi số toàn diện hệ thống sản xuất, giảm 30% chi phí vận hành và tăng hiệu suất đáng kể.",
    author: "Nguyễn Văn A",
    position: "Giám đốc Sản xuất",
    company: "Tập đoàn TKV",
  },
  {
    content: "Đội ngũ kỹ sư của ECOTEL rất chuyên nghiệp, luôn đảm bảo tiến độ và chất lượng dự án. Chúng tôi rất hài lòng với kết quả.",
    author: "Trần Thị B",
    position: "Phó Tổng Giám đốc",
    company: "Công ty ABC",
  },
  {
    content: "Giải pháp IoT của ECOTEL đã thay đổi hoàn toàn cách chúng tôi quản lý và vận hành. Rất đáng tin cậy và hiệu quả.",
    author: "Lê Văn C",
    position: "Trưởng phòng IT",
    company: "Tập đoàn XYZ",
  },
];

export default function Home_Testimonials(){
  return(
    <TestimonialsSection
    title="Khách hàng"
    testimonials={testimonials}
    />
  )
}