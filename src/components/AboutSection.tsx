import { CheckCircle2, Zap, Users, Award } from "lucide-react";

const highlights = [
  {
    icon: Zap,
    title: "Tiên phong công nghệ",
    description: "Ứng dụng công nghệ hiện đại vào tự động hóa công nghiệp",
  },
  {
    icon: Users,
    title: "Đội ngũ chuyên nghiệp",
    description: "Hơn 50 kỹ sư, cử nhân có chuyên môn cao",
  },
  {
    icon: Award,
    title: "Uy tín hàng đầu",
    description: "Đối tác tin cậy của TKV và nhiều doanh nghiệp lớn",
  },
];

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/5 to-transparent" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="animate-slide-in-left">
            <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-primary/10 text-primary mb-6">
              Về chúng tôi
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              <span className="text-foreground">Đơn vị </span>
              <span className="gradient-text">hàng đầu</span>
              <br />
              <span className="text-foreground">chuyển đổi số tại Việt Nam</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Công ty TNHH ECOTEL tiên phong trong việc cung cấp giải pháp chuyển đổi số tổng thể, 
              giúp doanh nghiệp tối ưu hóa vận hành, nâng cao hiệu suất và giảm thiểu chi phí sản xuất.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Với kinh nghiệm sâu rộng triển khai các dự án quy mô lớn, độ phức tạp cao, 
              ECOTEL cam kết mang đến những giải pháp chất lượng, tối ưu chi phí và đảm bảo tiến độ.
            </p>

            <div className="space-y-4">
              {["Giải pháp chuyển đổi số toàn diện", "Tối ưu chi phí vận hành", "Hỗ trợ 24/7"].map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" />
                  <span className="text-foreground">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Cards */}
          <div className="grid gap-6 animate-slide-in-right">
            {highlights.map((item, index) => (
              <div
                key={item.title}
                className="glass-card rounded-2xl p-6 hover-lift group"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <item.icon className="w-7 h-7 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">{item.title}</h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}

            {/* Experience Card */}
            <div className="glass-card rounded-2xl p-8 text-center glow-effect">
              <div className="text-5xl font-bold gradient-text mb-2">20+</div>
              <p className="text-muted-foreground">
                Năm kinh nghiệm cung cấp giải pháp IoT và chuyển đổi số đa lĩnh vực
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
