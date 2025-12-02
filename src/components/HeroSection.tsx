import { useEffect, useState } from "react";
import { ArrowRight, Cpu, Network, Shield } from "lucide-react";

const stats = [
  { value: 20, suffix: "+", label: "Năm kinh nghiệm" },
  { value: 150, suffix: "+", label: "Dự án hoàn thành" },
  { value: 50, suffix: "+", label: "Chuyên gia" },
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
      {/* Animated Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_hsl(var(--primary)/0.15)_0%,_transparent_70%)]" />
      
      {/* Grid Pattern */}
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `linear-gradient(hsl(var(--border)/0.5) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--border)/0.5) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }}
      />

      {/* Floating Elements */}
      <div className="absolute top-1/4 left-10 animate-float">
        <div className="w-16 h-16 rounded-2xl glass-card flex items-center justify-center">
          <Cpu className="w-8 h-8 text-primary" />
        </div>
      </div>
      <div className="absolute top-1/3 right-20 animate-float" style={{ animationDelay: '2s' }}>
        <div className="w-14 h-14 rounded-2xl glass-card flex items-center justify-center">
          <Network className="w-7 h-7 text-accent" />
        </div>
      </div>
      <div className="absolute bottom-1/4 left-1/4 animate-float" style={{ animationDelay: '4s' }}>
        <div className="w-12 h-12 rounded-xl glass-card flex items-center justify-center">
          <Shield className="w-6 h-6 text-primary" />
        </div>
      </div>

      {/* Glowing Orbs */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-primary/5 blur-3xl animate-pulse-slow" />
      <div className="absolute top-1/3 right-1/4 w-[400px] h-[400px] rounded-full bg-accent/10 blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }} />

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
          <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto">
            {stats.map((stat, index) => (
              <div key={stat.label} className="text-center animate-scale-in" style={{ animationDelay: `${0.8 + index * 0.2}s` }}>
                <div className="text-3xl md:text-5xl font-bold mb-2">
                  <CountUpNumber target={stat.value} suffix={stat.suffix} />
                </div>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
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
