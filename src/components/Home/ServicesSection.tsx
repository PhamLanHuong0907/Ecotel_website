import { Factory, Home, Globe, ArrowRight } from "lucide-react";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const services = [
  {
    icon: Factory,
    title: "Công nghiệp",
    description: "Giải pháp tự động hóa cho nhà máy và doanh nghiệp, từ gia công chế tạo máy, tối ưu vận hành đến xây dựng nhà máy thông minh.",
    features: ["Giải pháp gia công chế tạo máy & dây chuyền sản xuất", "Giải pháp ERP & BI - Tối ưu hóa vận hành doanh nghiệp", "Nhà máy thông minh"],
    gradient: "from-blue-500 to-cyan-500",
    images: [
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80",
      "https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?w=800&q=80",
      "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80",
    ],
  },
  {
    icon: Home,
    title: "Dân sinh",
    description: "Trong lĩnh vực dân sinh, ECOTEL cung cấp nhiều giải pháp, thiết bị công nghệ nhằm phục vụ cho đời sống xã hội, bao gồm: Hệ thống đỗ xe tự động, sạc pin xe điện, và giám sát an ninh (giải pháp Camera AI). Chúng tôi cũng không ngừng cập nhật các dòng sản phẩm phù hợp với mục tiêu giúp cuộc sống tiện ích, thông minh và xanh hơn.",
    features: ["Giải pháp đỗ xe thông minh & Kiểm soát xe ra vào", "Dịch vụ & Giải pháp sạc pin ô tô điện thông minh", "Giải pháp giám sát an ninh thông minh - Camera AI"],
    gradient: "from-emerald-500 to-teal-500",
    images: [
      "https://images.unsplash.com/photo-1558002038-1055907df827?w=800&q=80",
      "https://images.unsplash.com/photo-1585503418537-88331351ad99?w=800&q=80",
      "https://images.unsplash.com/photo-1593784991095-a205069470b6?w=800&q=80",
    ],
  },
  {
    icon: Globe,
    title: "Giải pháp IoT tổng thể",
    description: "ECOTEL không ngừng phát triển và triển khai các ứng dụng IoT tiên tiến ngay tại công ty, xem đây là nền tảng quan trọng để tối ưu hóa giải pháp cho ngành sản xuất, nâng cao hiệu suất và tính linh hoạt trong vận hành.",
    features: ["Thiết kế mạch in PCB", "Giải pháp IoT tổng thể"],
    gradient: "from-violet-500 to-purple-500",
    images: [
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80",
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&q=80",
      "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&q=80",
    ],
  },
];

export const ServicesSection = () => {
  return (
    <section id="services" className="py-24 relative">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-primary/10 text-primary mb-6">
            Dịch vụ
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            <span className="text-foreground">Lĩnh vực </span>
            <span className="gradient-text">chuyên môn</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Đa dạng giải pháp IoT và chuyển đổi số phù hợp với mọi quy mô doanh nghiệp
          </p>
        </div>

        {/* Services List */}
        <div className="space-y-16">
          {services.map((service, index) => (
            <div
              key={service.title}
              className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 lg:gap-12 items-center`}
            >
              {/* Text Content - 1/3 width */}
              <div className="lg:w-1/3 space-y-5">
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.gradient} flex items-center justify-center`}>
                  <service.icon className="w-7 h-7 text-white" />
                </div>
                
                <h3 className="text-xl md:text-2xl font-bold text-foreground">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{service.description}</p>

                <ul className="space-y-2">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3 text-sm text-foreground/80">
                      <span className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${service.gradient}`} />
                      {feature}
                    </li>
                  ))}
                </ul>

                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 text-primary text-sm font-medium group"
                >
                  Tìm hiểu thêm
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>

              {/* Image Carousel - 2/3 width */}
              <div className="lg:w-2/3 w-full">
                <Carousel
                  className="w-full"
                  plugins={[
                    Autoplay({
                      delay: 4000,
                      stopOnInteraction: false,
                      stopOnMouseEnter: true,
                    }),
                  ]}
                  opts={{
                    loop: true,
                  }}
                >
                  <CarouselContent>
                    {service.images.map((image, imgIndex) => (
                      <CarouselItem key={imgIndex}>
                        <div className="relative aspect-[16/9] rounded-2xl overflow-hidden glass-card">
                          <img
                            src={image}
                            alt={`${service.title} ${imgIndex + 1}`}
                            className="w-full h-full object-cover"
                          />
                          <div className={`absolute inset-0 bg-gradient-to-t ${service.gradient} opacity-10`} />
                        </div>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <CarouselPrevious className="left-4" />
                  <CarouselNext className="right-4" />
                </Carousel>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};