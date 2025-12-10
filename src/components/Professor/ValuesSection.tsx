import { Star, Award, Briefcase } from "lucide-react";
import { useSectionInView } from "@/hooks/useSectionInView";

const companyValues = [
  { icon: Star, title: "Tầm nhìn xa", desc: "Định hướng phát triển bền vững" },
  { icon: Award, title: "Chuyên nghiệp", desc: "Chuẩn mực quốc tế" },
  { icon: Briefcase, title: "Kinh nghiệm", desc: "Hơn 20 năm trong ngành" },
];

export const ValuesSection = () => {
  const { ref, isVisible } = useSectionInView();

  return (
    <section ref={ref} className="py-12 relative">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {companyValues.map((value, index) => (
            <div 
              key={index}
              className={`text-center transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="glass-card rounded-2xl p-6 hover-lift">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="font-bold text-foreground mb-1">{value.title}</h3>
                <p className="text-sm text-muted-foreground">{value.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};