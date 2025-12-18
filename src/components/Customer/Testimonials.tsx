import { useState, useEffect, useCallback } from "react";
import { Quote, Star } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { useSectionInView } from "@/hooks/useSectionInView";
import { TestimonialsSection } from "../Testimonials";

const testimonials = [
  {
    content: "ECOTEL đã mang đến cho chúng tôi giải pháp IoT hoàn hảo, giúp tối ưu hóa quy trình vận hành và tiết kiệm chi phí đáng kể.",
    author: "Nguyễn Văn A", position: "Giám đốc CNTT", company: "Công ty ABC"
  },
  {
    content: "Đội ngũ kỹ thuật chuyên nghiệp và hỗ trợ tận tình. Chúng tôi rất hài lòng với dịch vụ của ECOTEL.",
    author: "Trần Thị B", position: "Trưởng phòng Kỹ thuật", company: "Tập đoàn XYZ"
  },
  {
    content: "Giải pháp quản lý năng lượng của ECOTEL giúp chúng tôi tiết kiệm 30% chi phí điện năng hàng tháng. Rất ấn tượng!",
    author: "Lê Minh C", position: "Giám đốc Vận hành", company: "Khu công nghiệp DEF"
  },
  {
    content: "Hệ thống giám sát thông minh hoạt động ổn định 24/7. Đội ngũ hỗ trợ phản hồi nhanh chóng mọi vấn đề.",
    author: "Phạm Thị D", position: "Quản lý Dự án", company: "Tòa nhà GHI"
  },
  {
    content: "Chúng tôi đã hợp tác với ECOTEL hơn 5 năm và luôn hài lòng với chất lượng sản phẩm cũng như dịch vụ.",
    author: "Hoàng Văn E", position: "CEO", company: "Công ty JKL"
  },
  {
    content: "ECOTEL không chỉ cung cấp sản phẩm mà còn là đối tác chiến lược giúp chúng tôi chuyển đổi số thành công.",
    author: "Ngô Thị F", position: "CTO", company: "Startup MNO"
  },
];

export default function Customer_Testimonials(){
  return(
    <TestimonialsSection
    title="Khách hàng"
    testimonials={testimonials}
    />
  )
}