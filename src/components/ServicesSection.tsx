import { Factory, Home, Globe, ArrowRight } from "lucide-react";

const services = [
  {
    icon: Factory,
    title: "Công nghiệp",
    description: "Giải pháp tự động hóa công nghiệp, SCADA, DCS, hệ thống điều khiển thông minh cho nhà máy, mỏ khai thác.",
    features: ["Hệ thống SCADA", "Tự động hóa sản xuất", "Giám sát thời gian thực"],
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    icon: Home,
    title: "Dân sinh",
    description: "Smart home, smart building, hệ thống quản lý năng lượng thông minh cho tòa nhà và khu dân cư.",
    features: ["Smart Home", "Quản lý năng lượng", "An ninh thông minh"],
    gradient: "from-emerald-500 to-teal-500",
  },
  {
    icon: Globe,
    title: "Giải pháp IoT tổng thể",
    description: "Nền tảng IoT toàn diện, tích hợp cảm biến, gateway, cloud platform và ứng dụng quản lý.",
    features: ["IoT Platform", "Cloud Integration", "Data Analytics"],
    gradient: "from-violet-500 to-purple-500",
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

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group glass-card rounded-3xl p-8 hover-lift relative overflow-hidden"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Gradient overlay on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
              
              <div className="relative z-10">
                {/* Icon */}
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <service.icon className="w-8 h-8 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-foreground mb-4">{service.title}</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">{service.description}</p>

                {/* Features */}
                <ul className="space-y-3 mb-8">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3 text-sm text-foreground/80">
                      <span className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${service.gradient}`} />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 text-primary font-medium group/link"
                >
                  Tìm hiểu thêm
                  <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
