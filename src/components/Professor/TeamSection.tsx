import { useState } from "react";
import { Linkedin, Mail, Award, Briefcase, GraduationCap, Star, ChevronRight, Sparkles } from "lucide-react";
import { useSectionInView } from "@/hooks/useSectionInView";
import image_leader from "@/assets/Leadership.png"
import image_tranthaigiang from "@/assets/tranthaigiang.png"
import image_nguyentrieulang from "@/assets/nguyentrieulang.png"
import image_dinhvantoi from "@/assets/dinhvantoi.png"

const leadershipData = [
  {
    name: "Nguyễn Tuấn Anh",
    position: "Giám đốc",
    company: "EcoTel",
    image: image_leader, 
    bio: "Lãnh đạo trung tâm nghiên cứu phát triển và thử nghiệm sản phẩm lõi EcoTel. Với tầm nhìn chiến lược, ông đang dẫn dắt đội ngũ kế thừa công nghệ cũ, cập nhật công nghệ mới.",
    achievements: ["Thành lập EcoTel năm 2024", "Phát triển sản phẩm lõi mới", "Xây dựng đội ngũ R&D chuyên sâu"],
    education: "Chứng chỉ PMP, PMI II",
    experience: "Chuyên gia phần mềm nhúng và tự động hóa"
  },
  {
    name: "Trần Thái Giang",
    position: "Chuyên gia tư vấn và giải pháp",
    company: "EcoTel",
    image: image_tranthaigiang, 
    bio: "Lãnh đạo trung tâm nghiên cứu phát triển và thử nghiệm sản phẩm lõi EcoTel. Với tầm nhìn chiến lược, ông đang dẫn dắt đội ngũ kế thừa công nghệ cũ, cập nhật công nghệ mới.",
    achievements: ["Thành lập EcoTel năm 2024", "Phát triển sản phẩm lõi mới", "Xây dựng đội ngũ R&D chuyên sâu"],
    education: "Chứng chỉ Tableau Qualification Accociated",
    experience: "Chuyên gia ERP, DWH & BI với hơn 10 năm kinh nghiệm"
  },
   {
    name: "Nguyễn Triều Lăng",
    position: "Chuyên gia phần mềm và giải pháp IoT",
    company: "EcoTel",
    image: image_nguyentrieulang, 
    bio: "Lãnh đạo trung tâm nghiên cứu phát triển và thử nghiệm sản phẩm lõi EcoTel. Với tầm nhìn chiến lược, ông đang dẫn dắt đội ngũ kế thừa công nghệ cũ, cập nhật công nghệ mới.",
    achievements: ["Thành lập EcoTel năm 2024", "Phát triển sản phẩm lõi mới", "Xây dựng đội ngũ R&D chuyên sâu"],
    education: ["Th.s Toán học ứng dụng và công nghệ thông tin", "Đại học quốc gia Matxcơva"],
    experience: "Chuyên gia giải pháp và phát triển phần mềm với hơn 20 năm kinh nghiệm"
  },
  {
    name: "Đinh Văn Tới",
    position: "Chuyên gia Data, AI, Science",
    company: "EcoTel",
    image: image_dinhvantoi, 
    bio: "Lãnh đạo trung tâm nghiên cứu phát triển và thử nghiệm sản phẩm lõi EcoTel. Với tầm nhìn chiến lược, ông đang dẫn dắt đội ngũ kế thừa công nghệ cũ, cập nhật công nghệ mới.",
    achievements: ["Thành lập EcoTel năm 2024", "Phát triển sản phẩm lõi mới", "Xây dựng đội ngũ R&D chuyên sâu"],
    education: ["Th.s Công nghệ thông tin"],
    experience: "Chuyên gia giải pháp và triển khai hơn 15 năm kinh nghiệm"
  },
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
          <div className="flex items-center gap-6 mb-6">
            <div className="relative items-center justify-center flex-shrink-0">
              <div className="w-28 h-28 rounded-2xl border-2 border-primary/30 group-hover:border-primary transition-colors duration-500">
                <img src={leader.image} alt={leader.name} className="w-full h-full items-center justify-centerobject-cover group-hover:scale-110 transition-transform duration-500" />
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
            <span className="gradient-text">Nhóm chuyên gia</span>
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