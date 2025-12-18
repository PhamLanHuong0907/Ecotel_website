import { useEffect, useState, ElementType } from "react";
import { cn } from "@/lib/utils"; // Bỏ comment nếu bạn cần dùng

export interface StatItem {
  icon: ElementType;
  value?: number;
  suffix?: string;
  label?: string;
  description?: string;
}

interface StatsSectionProps {
  data: StatItem[];
  className?: string;
}

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

export const StatsSection = ({ data, className }: StatsSectionProps) => {
  return (
    <div className={`w-full py-10 ${className || ""}`}>
      <div className="container mx-auto px-4">
        {/* THAY ĐỔI QUAN TRỌNG: 
            - Dùng flex flex-wrap thay vì grid để các phần tử tự động xuống dòng.
            - justify-center để căn giữa toàn bộ khối.
            - gap-4 (16px) để tạo khoảng cách.
        */}
        <div className="flex flex-wrap justify-center gap-4 max-w-5xl mx-auto">
          {data.map((stat, index) => (
            <div
              key={index}
              /* TÍNH TOÁN WIDTH (để giống grid):
                 - w-full: Mobile (1 cột)
                 - sm:w-[calc(50%-8px)]: Tablet (2 cột, trừ đi 1/2 gap 16px)
                 - md:w-[calc(25%-12px)]: Desktop (4 cột, trừ đi 3/4 gap 16px)
              */
              className="glass-card rounded-2xl p-6 text-center animate-scale-in hover-lift flex flex-col items-center justify-start 
                         w-full sm:w-[calc(50%-8px)] md:w-[calc(25%-12px)]"
              style={{ animationDelay: `${0.2 + index * 0.15}s` }}
            >
              {typeof stat.value === "number" && (
            <>
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mb-4 transition-transform group-hover:scale-110">
              <stat.icon className="w-6 h-6 text-primary" />
            </div>
    
            {/* Number Value */}
            <div className="text-2xl md:text-3xl font-bold mb-1">
            {/* Thêm || "" để tránh lỗi undefined vì suffix trong StatItem là optional */}
            <CountUpNumber target={stat.value} suffix={stat.suffix || ""} />
            </div>

    {/* Label */}
    <p className="text-sm font-semibold text-foreground mb-2">
      {stat.label}
    </p>
  </>
)}
          {typeof stat.value != "number" &&(
             <> <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mb-4 transition-transform group-hover:scale-110">
      <stat.icon className="w-8 h-8 text-primary" />
    </div>
    
    <p className="text-[25px] md:text-2xl font-bold mb-1">
      {stat.label}
    </p>
              {/* Description */}
              <p className="text-[15px] text-muted-foreground mt-auto">
                {stat.description}
              </p>
          </>)}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};