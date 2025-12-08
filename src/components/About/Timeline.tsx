import { Lightbulb, TrendingUp, Award, Globe, Zap } from "lucide-react";
import { useSectionInView } from "@/hooks/useSectionInView";

const timelineData = [
  { period: "1991 - 1993", title: "Khởi đầu AFsys", description: "Sản phẩm bắt được được nghiên cứu và phát triển với thương hiệu AFsys.", icon: Lightbulb },
  { period: "1993 - 1999", title: "Gia nhập CET", description: "Các tác giả của AFsys đã gia nhập vào trung tâm CET với mục đích thương mại các sản phẩm phần mềm đang phát triển. Sau đó, thành lập Công ty cổ phần thương mại và phần mềm tin học ISC.", icon: TrendingUp },
  { period: "1999 - 2003", title: "Thành lập ESOFT", description: "Công ty Cổ phần giải pháp phần mềm ESOFT chính thức được thành lập do ông Vũ Quốc Kỳ là Chủ tịch Hội đồng quản trị kiêm Tổng giám đốc ESOFT.", icon: Award },
  { period: "2003 - Nay", title: "Mở rộng & EcoTel", description: "Thành lập văn phòng đại diện tại thành phố Hồ Chí Minh. Năm 2024, EcoTel được thành lập với vai trò trung tâm nghiên cứu phát triển.", icon: Globe },
];

const TimelineItem = ({ item, index, isVisible }: { item: typeof timelineData[0]; index: number; isVisible: boolean }) => {
  const isLeft = index % 2 === 0;
  return (
    <div className={`flex items-center gap-8 ${isLeft ? "flex-row" : "flex-row-reverse"} mb-16`}>
      <div className={`flex-1 transition-all duration-700 ${isVisible ? "opacity-100 translate-x-0" : isLeft ? "opacity-0 -translate-x-20" : "opacity-0 translate-x-20"}`} style={{ transitionDelay: `${index * 200}ms` }}>
        <div className="glass-card rounded-2xl p-8 hover-lift group relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-primary/20 to-accent/20 border border-primary/30 mb-4">
            <Zap className="w-4 h-4 text-primary" />
            <span className="text-sm font-bold text-primary">{item.period}</span>
          </div>
          <h3 className="text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">{item.title}</h3>
          <p className="text-muted-foreground leading-relaxed">{item.description}</p>
        </div>
      </div>
      <div className="flex flex-col items-center relative">
        {index > 0 && <div className={`w-1 h-16 bg-gradient-to-b from-primary/50 to-primary transition-all duration-500 ${isVisible ? "scale-y-100" : "scale-y-0"} origin-top`} style={{ transitionDelay: `${index * 200 - 100}ms` }} />}
        <div className={`relative z-10 w-20 h-20 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-lg transition-all duration-500 ${isVisible ? "scale-100" : "scale-0"}`} style={{ transitionDelay: `${index * 200 + 100}ms` }}>
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary to-accent animate-pulse-slow opacity-50 blur-md" />
          <item.icon className="w-10 h-10 text-white relative z-10" />
        </div>
        {index < timelineData.length - 1 && <div className={`w-1 h-16 bg-gradient-to-b from-primary to-primary/50 transition-all duration-500 ${isVisible ? "scale-y-100" : "scale-y-0"} origin-top`} style={{ transitionDelay: `${index * 200 + 200}ms` }} />}
      </div>
      <div className="flex-1" />
    </div>
  );
};

export const TimelineSection = () => {
  const { ref, isVisible } = useSectionInView();

  return (
    <section className="py-24 bg-secondary/30 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20">
          <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-primary/10 text-primary mb-4">Hành trình phát triển</span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            Lịch sử <span className="gradient-text">hình thành</span>
          </h2>
        </div>
        <div ref={ref} className="max-w-5xl mx-auto">
          {timelineData.map((item, index) => (
            <TimelineItem key={item.period} item={item} index={index} isVisible={isVisible} />
          ))}
        </div>
      </div>
    </section>
  );
};