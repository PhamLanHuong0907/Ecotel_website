import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { useEffect, useRef, useState, useCallback } from "react";
import { Building2, Users, Globe, ChevronRight, Star, Award, Handshake, Quote } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

const customersData = [
  { name: "VINACOMIN", logo: "/placeholder.svg", industry: "Khai khoáng" },
  { name: "FiinGroup", logo: "/placeholder.svg", industry: "Tài chính" },
  { name: "Ecopark", logo: "/placeholder.svg", industry: "Bất động sản" },
  { name: "TOSHIBA", logo: "/placeholder.svg", industry: "Công nghệ" },
  { name: "HEXAGON", logo: "/placeholder.svg", industry: "Công nghệ đo lường" },
  { name: "MAST", logo: "/placeholder.svg", industry: "Phụ tùng ô tô" },
  { name: "EVN", logo: "/placeholder.svg", industry: "Điện lực" },
  { name: "Viettel", logo: "/placeholder.svg", industry: "Viễn thông" },
  { name: "FPT", logo: "/placeholder.svg", industry: "Công nghệ" },
];

const stats = [
  { icon: Building2, value: "150+", label: "Khách hàng doanh nghiệp" },
  { icon: Globe, value: "5+", label: "Quốc gia" },
  { icon: Award, value: "20+", label: "Năm đồng hành" },
];

const testimonials = [
  {
    content: "ECOTEL đã mang đến cho chúng tôi giải pháp IoT hoàn hảo, giúp tối ưu hóa quy trình vận hành và tiết kiệm chi phí đáng kể.",
    author: "Nguyễn Văn A",
    position: "Giám đốc CNTT",
    company: "Công ty ABC"
  },
  {
    content: "Đội ngũ kỹ thuật chuyên nghiệp và hỗ trợ tận tình. Chúng tôi rất hài lòng với dịch vụ của ECOTEL.",
    author: "Trần Thị B", 
    position: "Trưởng phòng Kỹ thuật",
    company: "Tập đoàn XYZ"
  },
  {
    content: "Giải pháp quản lý năng lượng của ECOTEL giúp chúng tôi tiết kiệm 30% chi phí điện năng hàng tháng. Rất ấn tượng!",
    author: "Lê Minh C",
    position: "Giám đốc Vận hành",
    company: "Khu công nghiệp DEF"
  },
  {
    content: "Hệ thống giám sát thông minh hoạt động ổn định 24/7. Đội ngũ hỗ trợ phản hồi nhanh chóng mọi vấn đề.",
    author: "Phạm Thị D",
    position: "Quản lý Dự án",
    company: "Tòa nhà GHI"
  },
  {
    content: "Chúng tôi đã hợp tác với ECOTEL hơn 5 năm và luôn hài lòng với chất lượng sản phẩm cũng như dịch vụ.",
    author: "Hoàng Văn E",
    position: "CEO",
    company: "Công ty JKL"
  },
  {
    content: "ECOTEL không chỉ cung cấp sản phẩm mà còn là đối tác chiến lược giúp chúng tôi chuyển đổi số thành công.",
    author: "Ngô Thị F",
    position: "CTO",
    company: "Startup MNO"
  },
];

const CustomerCard = ({ customer, index, isVisible }: { customer: typeof customersData[0]; index: number; isVisible: boolean }) => (
  <div
    className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-10 scale-95'}`}
    style={{ transitionDelay: `${index * 100}ms` }}
  >
    <div className="glass-card rounded-2xl p-8 hover-lift group relative overflow-hidden h-48 flex flex-col items-center justify-center">
      {/* Hover gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      {/* Animated border on hover */}
      <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-primary/20 transition-colors duration-500" />
      
      {/* Logo */}
      <div className="relative z-10 w-full h-24 flex items-center justify-center mb-4">
        <img 
          src={customer.logo} 
          alt={customer.name}
          className="max-w-full max-h-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-110"
        />
      </div>
      
      {/* Name & Industry - shown on hover */}
      <div className="relative z-10 text-center opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
        <h3 className="font-bold text-foreground text-sm">{customer.name}</h3>
        <span className="text-xs text-muted-foreground">{customer.industry}</span>
      </div>
    </div>
  </div>
);

const TestimonialsCarousel = ({ testimonialRef, isVisible }: { testimonialRef: React.RefObject<HTMLDivElement>; isVisible: boolean }) => {
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
    <section ref={testimonialRef} className="py-20 relative overflow-hidden">
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

export default function Customers() {
  const [heroVisible, setHeroVisible] = useState(false);
  const [statsVisible, setStatsVisible] = useState(false);
  const [customersVisible, setCustomersVisible] = useState(false);
  const [testimonialVisible, setTestimonialVisible] = useState(false);
  
  const statsRef = useRef<HTMLDivElement>(null);
  const customersRef = useRef<HTMLDivElement>(null);
  const testimonialRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setHeroVisible(true);
    
    const observerOptions = { threshold: 0.2 };
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (entry.target === statsRef.current) setStatsVisible(true);
          if (entry.target === customersRef.current) setCustomersVisible(true);
          if (entry.target === testimonialRef.current) setTestimonialVisible(true);
        }
      });
    }, observerOptions);

    if (statsRef.current) observer.observe(statsRef.current);
    if (customersRef.current) observer.observe(customersRef.current);
    if (testimonialRef.current) observer.observe(testimonialRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        {/* Animated background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
          <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse-slow" />
          <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }} />
          {/* Grid pattern */}
          <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: 'linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)', backgroundSize: '50px 50px' }} />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className={`text-center max-w-4xl mx-auto transition-all duration-1000 ${heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
              <Users className="w-4 h-4 text-primary animate-pulse" />
              <span className="text-sm font-medium text-primary">Khách hàng</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="text-foreground">Đối tác </span>
              <span className="gradient-text">Tin cậy</span>
              <br />
              <span className="text-foreground">Của Chúng Tôi</span>
            </h1>
            
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              ECOTEL tự hào được đồng hành cùng hàng trăm doanh nghiệp hàng đầu trong nhiều lĩnh vực khác nhau, từ công nghiệp đến dân sinh.
            </p>
          </div>
        </div>
      </section>
      
      {/* Stats Section */}
      <section ref={statsRef} className="py-12 relative">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <div
                key={index}
                className={`text-center transition-all duration-700 ${statsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="glass-card rounded-2xl p-6 hover-lift">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mx-auto mb-4">
                    <stat.icon className="w-7 h-7 text-white" />
                  </div>
                  <div className="text-3xl font-bold gradient-text mb-1">{stat.value}</div>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Customers Grid Section */}
      <section ref={customersRef} className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-secondary/30 to-transparent" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className={`text-center mb-16 transition-all duration-700 ${customersVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="gradient-text">Khách hàng tiêu biểu</span>
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Những doanh nghiệp hàng đầu đã tin tưởng và lựa chọn giải pháp của ECOTEL
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {customersData.map((customer, index) => (
              <CustomerCard key={customer.name} customer={customer} index={index} isVisible={customersVisible} />
            ))}
          </div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <TestimonialsCarousel testimonialRef={testimonialRef} isVisible={testimonialVisible} />
      
      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-accent/5 to-primary/10" />
        <div className="container mx-auto px-4 relative z-10 text-center">
          <Handshake className="w-16 h-16 text-primary mx-auto mb-6" />
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-foreground">
            Trở thành khách hàng của ECOTEL
          </h2>
          <p className="text-muted-foreground mb-8 max-w-lg mx-auto">
            Liên hệ ngay để được tư vấn giải pháp phù hợp nhất cho doanh nghiệp của bạn
          </p>
          <a
            href="/#contact"
            className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-gradient-to-r from-primary to-accent text-primary-foreground font-semibold hover-lift"
          >
            Liên hệ ngay
            <ChevronRight className="w-4 h-4" />
          </a>
        </div>
      </section>
      
      <Footer />
    </div>
  );
}
