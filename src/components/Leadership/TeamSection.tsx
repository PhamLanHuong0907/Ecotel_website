import { useState } from "react";
import { Linkedin, Mail, Award, Briefcase, GraduationCap, Star, ChevronRight, Sparkles } from "lucide-react";
import { useSectionInView } from "@/hooks/useSectionInView";

const leadershipData = [
  {
    name: "Vũ Quốc Kỳ",
    position: "Chủ tịch HĐQT kiêm Tổng Giám đốc",
    company: "ESOFT",
    image: "/placeholder.svg",
    bio: "Người sáng lập và dẫn dắt ESOFT từ những ngày đầu thành lập. Với hơn 30 năm kinh nghiệm trong ngành công nghệ thông tin, ông đã xây dựng nên nền móng vững chắc cho sự phát triển của công ty.",
    achievements: ["Thành lập ESOFT năm 1999", "Mở rộng thị trường quốc tế", "Phát triển các giải pháp IoT tiên phong"],
    education: "Kỹ sư Công nghệ thông tin",
    experience: "30+ năm"
  },
  {
    name: "Nguyễn Tuấn Anh",
    position: "Giám đốc",
    company: "EcoTel",
    image: "/placeholder.svg",
    bio: "Lãnh đạo trung tâm nghiên cứu phát triển và thử nghiệm sản phẩm lõi EcoTel. Với tầm nhìn chiến lược, ông đang dẫn dắt đội ngũ kế thừa công nghệ cũ, cập nhật công nghệ mới.",
    achievements: ["Thành lập EcoTel năm 2024", "Phát triển sản phẩm lõi mới", "Xây dựng đội ngũ R&D chuyên sâu"],
    education: "Thạc sĩ Khoa học máy tính",
    experience: "15+ năm"
  },
  {
    name: "Trần Minh Đức",
    position: "Giám đốc Công nghệ",
    company: "ESOFT",
    image: "/placeholder.svg",
    bio: "Chịu trách nhiệm định hướng công nghệ và kiến trúc hệ thống cho toàn bộ sản phẩm của công ty. Ông là chuyên gia hàng đầu về IoT và Cloud Computing.",
    achievements: ["Triển khai hạ tầng Cloud", "Phát triển kiến trúc IoT", "Đào tạo đội ngũ kỹ thuật"],
    education: "Tiến sĩ Khoa học máy tính",
    experience: "20+ năm"
  },
  {
    name: "Lê Thị Hương",
    position: "Giám đốc Kinh doanh",
    company: "ESOFT",
    image: "/placeholder.svg",
    bio: "Phụ trách mở rộng thị trường và phát triển quan hệ đối tác chiến lược. Với mạng lưới khách hàng rộng khắp, bà đã góp phần quan trọng vào sự tăng trưởng của công ty.",
    achievements: ["Mở rộng thị trường Đông Nam Á", "Thiết lập 50+ đối tác chiến lược", "Tăng trưởng doanh thu 200%"],
    education: "MBA Quản trị Kinh doanh",
    experience: "18+ năm"
  }
];

const LeaderCard = ({ leader, index, isVisible }: { leader: typeof leadershipData[0]; index: number; isVisible: boolean }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div 
      className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}
      style={{ transitionDelay: `${index * 150}ms` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="glass-card rounded-3xl overflow-hidden hover-lift group relative">
        {/* Animated border */}
        <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-primary via-accent to-primary bg-[length:200%_100%] animate-shimmer opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ padding: '2px' }}>
          <div className="w-full h-full bg-card rounded-3xl" />
        </div>
        
        <div className="relative z-10 p-6">
          {/* Image & Info Header */}
          <div className="flex items-start gap-6 mb-6">
            <div className="relative">
              <div className="w-28 h-28 rounded-2xl overflow-hidden border-2 border-primary/30 group-hover:border-primary transition-colors duration-500">
                <img src={leader.image} alt={leader.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
              </div>
              <div className="absolute -bottom-2 -right-2 w-10 h-10 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-lg animate-bounce-subtle">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
            </div>
            
            <div className="flex-1">
              <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium mb-2">
                <Briefcase className="w-3 h-3" />
                {leader.company}
              </span>
              <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">{leader.name}</h3>
              <p className="text-primary/80 font-medium text-sm">{leader.position}</p>
            </div>
          </div>
          
          {/* Bio */}
          <p className="text-muted-foreground text-sm leading-relaxed mb-6">{leader.bio}</p>
          
          {/* Stats */}
          <div className="flex items-center gap-4 mb-6">
            <div className="flex items-center gap-2 text-sm">
              <GraduationCap className="w-4 h-4 text-primary" />
              <span className="text-muted-foreground">{leader.education}</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <Award className="w-4 h-4 text-accent" />
              <span className="text-muted-foreground">{leader.experience}</span>
            </div>
          </div>
          
          {/* Achievements - Expandable */}
          <div className={`overflow-hidden transition-all duration-500 ${isHovered ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}`}>
            <div className="pt-4 border-t border-border/30">
              <h4 className="text-sm font-semibold text-foreground mb-3 flex items-center gap-2">
                <Star className="w-4 h-4 text-yellow-500" />
                Thành tựu nổi bật
              </h4>
              <ul className="space-y-2">
                {leader.achievements.map((achievement, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <ChevronRight className="w-3 h-3 text-primary" />
                    {achievement}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          {/* Social Links */}
          <div className="flex items-center gap-3 mt-4 pt-4 border-t border-border/30">
            <a href="#" className="w-9 h-9 rounded-full bg-secondary/50 flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all">
              <Linkedin className="w-4 h-4" />
            </a>
            <a href="#" className="w-9 h-9 rounded-full bg-secondary/50 flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all">
              <Mail className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export const TeamSection = () => {
  const { ref, isVisible } = useSectionInView();

  return (
    <section ref={ref} className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-secondary/30 to-transparent" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="gradient-text">Ban lãnh đạo</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Những người đứng đầu với tầm nhìn chiến lược và kinh nghiệm dày dặn
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {leadershipData.map((leader, index) => (
            <LeaderCard key={leader.name} leader={leader} index={index} isVisible={isVisible} />
          ))}
        </div>
      </div>
    </section>
  );
};