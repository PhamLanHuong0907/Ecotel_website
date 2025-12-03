import { useEffect, useState } from "react";
import { ArrowRight, Cpu, Network, Shield, TrendingUp, Briefcase, Users2, Trophy } from "lucide-react";
import heroBackground from "@/assets/hero-background.webp";

const stats = [
  { icon: TrendingUp, value: 20, suffix: "+", label: "Năm kinh nghiệm", description: "Cung cấp giải pháp IoT và chuyển đổi số đa lĩnh vực" },
  { icon: Briefcase, value: 150, suffix: "+", label: "Dự án triển khai", description: "Thành công cho TKV và nhiều doanh nghiệp lớn" },
  { icon: Users2, value: 50, suffix: "+", label: "Chuyên gia", description: "Đội ngũ kỹ sư, cử nhân chuyên môn cao" },
  { icon: Trophy, value: 10, suffix: "+", label: "Giải thưởng", description: "Được công nhận về chất lượng và đổi mới sáng tạo" },
];

const CountUpNumber = ({ target, suffix }: { target: number; suffix: string }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const duration = 2000;
    const steps = 60;
    const increment = target / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [target]);

  return (
    <span className="gradient-text text-shadow-glow">
      {count}{suffix}
    </span>
  );
};

export const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBackground})` }}
      />
      
      {/* Dark Overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/50 to-background/90" />
      
      {/* Grid Pattern Overlay */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `linear-gradient(hsl(var(--primary)/0.3) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary)/0.3) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }}
      />

      {/* Floating Elements */}
      <div className="absolute top-1/4 left-10 animate-float hidden md:block">
        <div className="w-16 h-16 rounded-2xl glass-card flex items-center justify-center">
          <Cpu className="w-8 h-8 text-primary" />
        </div>
      </div>
      <div className="absolute top-1/3 right-20 animate-float hidden md:block" style={{ animationDelay: '2s' }}>
        <div className="w-14 h-14 rounded-2xl glass-card flex items-center justify-center">
          <Network className="w-7 h-7 text-accent" />
        </div>
      </div>
      <div className="absolute bottom-1/3 left-1/4 animate-float hidden md:block" style={{ animationDelay: '4s' }}>
        <div className="w-12 h-12 rounded-xl glass-card flex items-center justify-center">
          <Shield className="w-6 h-6 text-primary" />
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-8 animate-fade-up">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            <span className="text-sm text-muted-foreground">Tiên phong chuyển đổi số tại Việt Nam</span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fade-up-delay-1">
            <span className="text-foreground">Giải pháp </span>
            <span className="gradient-text">IoT & Chuyển đổi số</span>
            <br />
            <span className="text-foreground">toàn diện</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 animate-fade-up-delay-2">
            ECOTEL đồng hành cùng doanh nghiệp trong hành trình số hóa, tối ưu vận hành và nâng cao năng lực cạnh tranh.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 animate-fade-up-delay-3">
            <a
              href="#services"
              className="group inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-primary to-accent text-primary-foreground font-semibold hover-lift"
              style={{ boxShadow: "var(--shadow-button)" }}
            >
              Khám phá dịch vụ
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#about"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full border border-border hover:border-primary/50 text-foreground font-semibold hover:bg-secondary/50 transition-all"
            >
              Tìm hiểu thêm
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
            {stats.map((stat, index) => (
              <div 
                key={stat.label} 
                className="glass-card rounded-2xl p-6 text-center animate-scale-in hover-lift"
                style={{ animationDelay: `${0.8 + index * 0.15}s` }}
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-6 h-6 text-primary" />
                </div>
                <div className="text-2xl md:text-3xl font-bold mb-1">
                  <CountUpNumber target={stat.value} suffix={stat.suffix} />
                </div>
                <p className="text-sm font-semibold text-foreground mb-1">{stat.label}</p>
                <p className="text-xs text-muted-foreground">{stat.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex justify-center pt-2">
          <div className="w-1.5 h-3 rounded-full bg-primary animate-pulse" />
        </div>
      </div>
    </section>
  );
};
