import { Building2, Globe, Award } from "lucide-react";
import { useSectionInView } from "@/hooks/useSectionInView";

const stats = [
  { icon: Building2, value: "150+", label: "Khách hàng doanh nghiệp" },
  { icon: Globe, value: "20+", label: "Tỉnh/Thành phố" },
  { icon: Award, value: "20+", label: "Năm đồng hành" },
];

export const StatsSection = () => {
  const { ref, isVisible } = useSectionInView();

  return (
    <section ref={ref} className="py-12 relative">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`text-center transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="glass-card rounded-2xl p-6 hover-lift shadow-lg shadow-primary/30">
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
  );
};