import { useEffect, useState } from "react";
import { ArrowRight, Cpu, Network, Shield, TrendingUp, Briefcase, Users2, Trophy } from "lucide-react";
import heroBackground from "@/assets/hero-background.webp";
import Home_StatsSection from "./StatsSection";

export const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBackground})` }}
      />
      
      {/* FIX 1: Overlay
         - Dark Mode: Giữ nguyên lớp phủ tối màu để làm nổi bật chữ trắng.
         - Light Mode: Dùng lớp phủ trắng nhưng ĐẬM HƠN (90-95%) để che bớt ảnh nền, 
           giúp chữ đen đọc được dễ dàng hơn.
      */}
      <div className="absolute inset-0 bg-gradient-to-b dark: from-background/70 dark: via-background/40 dark:to-background/90 light: from-gray-800 light: via-white/70 light:to-white/90" />
      
      {/* Grid Pattern Overlay */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          // Sử dụng var(--primary) là an toàn cho cả 2 mode
          backgroundImage: `inear-gradient(hsl(var(--primary)/0.3) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary)/0.3) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }}
      />

      {/* Floating Elements - Glass card tự động đẹp nhờ CSS glass-card đã sửa trước đó */}
      <div className="absolute top-1/4 left-10 animate-float hidden md:block">
        <div className="w-16 h-16 rounded-2xl glass-card flex items-center justify-center hover:scale-110 transition-transform">
          <Cpu className="w-8 h-8 text-primary" />
        </div>
      </div>
      <div className="absolute top-1/3 right-20 animate-float hidden md:block" style={{ animationDelay: '2s' }}>
        <div className="w-14 h-14 rounded-2xl glass-card flex items-center justify-center hover:scale-110 transition-transform">
          <Network className="w-7 h-7 text-accent" />
        </div>
      </div>
      <div className="absolute bottom-1/3 left-1/4 animate-float hidden md:block" style={{ animationDelay: '4s' }}>
        <div className="w-12 h-12 rounded-xl glass-card flex items-center justify-center hover:scale-110 transition-transform">
          <Shield className="w-6 h-6 text-primary" />
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">

          {/* Headline */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fade-up-delay-1 pt-3">
            <span className="mt-3 pt-3 text-foreground [.light_&]:text-white ">Tiên phong</span>
            <br/>
            <span className="mt-3 gradient-text">chuyển đổi số</span>
            <br />
            <span className="mt-3 text-foreground [.light_&]:text-white">& kết nối hệ sinh thái</span>
          </h1>

          {/* FIX 2: Subtitle Text Color
             - text-gray-600: Màu xám đậm cho Light Mode (để đọc được trên nền trắng).
             - dark:text-gray-200: Màu xám sáng cho Dark Mode (để đọc được trên nền đen).
          */}
          <p className="text-lg md:text-xl text-gray-200 [.light_&]:text-black max-w-2xl mx-auto mb-10 animate-fade-up-delay-2 font-medium">
  ECOTEL đồng hành cùng doanh nghiệp trong hành trình số hóa, <br className="hidden md:block" />
  tối ưu vận hành và nâng cao năng lực cạnh tranh.
</p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 animate-fade-up-delay-3">
            <a
              href="#services"
              className="group inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-primary to-accent text-white font-semibold hover-lift shadow-lg shadow-primary/20"
            >
              Khám phá dịch vụ
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            
            {/* Nút phụ: Thêm bg-background/50 để nút rõ hơn nếu nền Light Mode hơi rối */}
            <a
              href="#about"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full border border-border/50 bg-background/50 backdrop-blur-sm text-foreground font-semibold hover:bg-secondary/80 transition-all"
            >
              Tìm hiểu thêm
            </a>
          </div>

          {/* Stats */}
          <section className="relative z-10 mt-5"> 
             <Home_StatsSection />
          </section>
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