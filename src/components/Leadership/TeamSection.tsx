import { Linkedin, Mail, Award, Briefcase, GraduationCap, Star, ChevronRight, Sparkles } from "lucide-react";
import { useSectionInView } from "@/hooks/useSectionInView";
import image_leader from "@/assets/Leadership.png"
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
  }
];

const LeaderCard = ({ leader, index, isVisible }: { leader: typeof leadershipData[0]; index: number; isVisible: boolean }) => {
  return (
    <div 
      className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      {/* - items-stretch: Để Card và Ảnh có chiều cao BẰNG NHAU 
         - gap-6: Khoảng cách giữa 2 khối
      */}
      <div className="flex flex-col-reverse md:flex-row items-stretch gap-6 h-full">
        
        {/* === PHẦN 1: CARD THÔNG TIN (BÊN TRÁI) === */}
        {/* md:w-[60%] hoặc flex-[1.5]: Chiếm phần lớn diện tích */}
        <div className="w-full md:flex-[1.5]">
          <div className="glass-card rounded-3xl p-8 relative border border-border/50 shadow-sm h-full flex flex-col justify-between">
            
            <div>
              {/* Header */}
              <div className="mb-4">
                <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium mb-2">
                  <Briefcase className="w-3 h-3" />
                  {leader.company}
                </span>
                <h3 className="text-3xl font-bold text-foreground mt-2">{leader.name}</h3>
                <p className="text-primary font-medium text-lg">{leader.position}</p>
              </div>
              
              {/* Bio */}
              <p className="text-muted-foreground text-base leading-relaxed mb-6 border-b border-border/30 pb-4">
                {leader.bio}
              </p>
              
              {/* Stats & Social */}
              <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm font-medium">
                    <GraduationCap className="w-5 h-5 text-primary" />
                    <span className="text-foreground/80">{leader.education}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm font-medium">
                    <Award className="w-5 h-5 text-accent" />
                    <span className="text-foreground/80">{leader.experience}</span>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                   <a href="#" className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-white transition-colors border border-border/50">
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a href="#" className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-white transition-colors border border-border/50">
                    <Mail className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
            
            {/* Achievements */}
            <div className="pt-5 border-t border-border/30 bg-secondary/30 -mx-8 -mb-8 px-8 py-6">
              <h4 className="text-sm font-bold text-foreground mb-3 flex items-center gap-2 uppercase tracking-wide">
                <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                Thành tựu nổi bật
              </h4>
              <ul className="space-y-2">
                {leader.achievements.map((achievement, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground/90">
                    <ChevronRight className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                    <span>{achievement}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>

        {/* === PHẦN 2: ẢNH (BÊN PHẢI) === */}
        {/* - md:flex-1: Tự động chiếm hết phần rộng còn lại 
            - min-h-[300px]: Đảm bảo chiều cao tối thiểu trên mobile
            - relative: Để làm khung cho ảnh absolute bên trong
        */}
        <div className="w-full md:flex-1 relative min-h-[320px] md:min-h-full ">
           <img 
            src={leader.image} 
            alt={leader.name}
            // absolute inset-0 + h-full: Buộc ảnh phải căng theo khung cha
            // object-cover: Đảm bảo ảnh đẹp dù khung hình thay đổi
            className="relative inset-0 w-full h-full object-cover  rounded-3xl overflow-hidden shadow-lg border-2 border-border/50"
          />

          {/* Overlay gradient nhẹ dưới đáy ảnh để làm nổi bật icon hoặc text nếu có */}
          <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/50 to-transparent pointer-events-none" />

          {/* Icon trang trí */}
          <div className="absolute bottom-4 right-4 z-20 w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center shadow-lg">
             <Sparkles className="w-6 h-6 text-white" />
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
        
        {/* Tăng max-w để layout rộng rãi hơn */}
        <div className="grid grid-cols-1 gap-16 max-w-6xl mx-auto">
          {leadershipData.map((leader, index) => (
            <LeaderCard key={leader.name} leader={leader} index={index} isVisible={isVisible} />
          ))}
        </div>
      </div>
    </section>
  );
};