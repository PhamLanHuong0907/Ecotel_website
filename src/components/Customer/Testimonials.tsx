import { useState, useEffect, useCallback } from "react";
import { Quote, Star } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { useSectionInView } from "@/hooks/useSectionInView";

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

export const TestimonialsSection = () => {
  const { ref, isVisible } = useSectionInView();
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: "start" },
    [Autoplay({ delay: 4000, stopOnInteraction: false, stopOnMouseEnter: true })]
  );
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    setScrollSnaps(emblaApi.scrollSnapList());
    emblaApi.on("select", onSelect);
    onSelect();
  }, [emblaApi, onSelect]);

  const scrollTo = useCallback((index: number) => {
    if (emblaApi) emblaApi.scrollTo(index);
  }, [emblaApi]);

  return (
    <section ref={ref} className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className={`text-center mb-12 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="gradient-text">Khách hàng nói gì về chúng tôi</span>
          </h2>
        </div>
        
        <div className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex gap-6">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="flex-[0_0_100%] min-w-0 md:flex-[0_0_50%] lg:flex-[0_0_33.333%] pl-4">
                  <div className="glass-card rounded-2xl p-8 h-full relative group hover-lift">
                    <Quote className="absolute top-6 right-6 w-10 h-10 text-primary/10 group-hover:text-primary/20 transition-colors" />
                    <div className="flex mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                      ))}
                    </div>
                    <p className="text-muted-foreground italic mb-6 leading-relaxed">"{testimonial.content}"</p>
                    <div className="flex items-center gap-4 mt-auto">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center flex-shrink-0">
                        <span className="text-white font-bold">{testimonial.author[0]}</span>
                      </div>
                      <div>
                        <h4 className="font-bold text-foreground">{testimonial.author}</h4>
                        <p className="text-sm text-muted-foreground">{testimonial.position}, {testimonial.company}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Dots navigation */}
          <div className="flex justify-center gap-2 mt-8">
            {scrollSnaps.map((_, index) => (
              <button
                key={index}
                onClick={() => scrollTo(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === selectedIndex 
                    ? 'bg-primary w-8' 
                    : 'bg-primary/30 hover:bg-primary/50'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};