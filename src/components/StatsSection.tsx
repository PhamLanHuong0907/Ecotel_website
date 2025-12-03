import { TrendingUp, Briefcase, Users2, Trophy } from "lucide-react";

const stats = [
  {
    icon: TrendingUp,
    value: "20+",
    label: "Năm kinh nghiệm",
    description: "Cung cấp giải pháp IoT và chuyển đổi số đa lĩnh vực",
  },
  {
    icon: Briefcase,
    value: "150+",
    label: "Dự án triển khai",
    description: "Thành công cho TKV và nhiều doanh nghiệp lớn",
  },
  {
    icon: Users2,
    value: "50+",
    label: "Chuyên gia",
    description: "Đội ngũ kỹ sư, cử nhân chuyên môn cao",
  },
  {
    icon: Trophy,
    value: "4+",
    label: "Giải thưởng",
    description: "Được công nhận về chất lượng và đổi mới sáng tạo",
  },
];

export const StatsSection = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-accent/5 to-primary/10" />
      <div 
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, hsl(var(--primary)/0.3) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className="text-center group"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="glass-card rounded-3xl p-8 hover-lift h-full">
                {/* Icon */}
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <stat.icon className="w-8 h-8 text-primary" />
                </div>

                {/* Value */}
                <div className="text-4xl md:text-5xl font-bold gradient-text mb-3">
                  {stat.value}
                </div>

                {/* Label */}
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {stat.label}
                </h3>

                {/* Description */}
                <p className="text-sm text-muted-foreground">
                  {stat.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
