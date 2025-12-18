import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { HeroSection } from "@/components/Eco-MES/HeroSection_EcoMes";
import { FeatureSection } from "@/components/FeatureSection";
import { CTASection } from "@/components/CTASection";
import { Cog, Cpu, Zap, Target, Settings, Shield, Wrench, Factory, CheckCircle2 } from "lucide-react";
import feature1 from "@/assets/smart_factory2.png";
import feature2 from "@/assets/cameraAI.jpg"
import { Button } from "@/components/ui/button";
const Features = [
  { text: "Lưu trữ tập trung dữ liệu lớn của tất cả các camera IP trên toàn hệ thống, liên kết chia sẻ với các trung tâm, người giám sát.", icon: Cog },
  { text: "Phân tích dữ liệu: Giám sát người ra/vào (Face ID), giám sát người đi vào vùng cấm, đột nhập, cảnh báo đám cháy, chấm công, chấp hành ăn mặc, quản lý xe ra/vào….", icon: Zap },
  { text: "Tích hợp IOT với các thiết bị thông minh: Cổng, cửa, hệ thống chiếu sang….để giúp công tác quản lý", icon: Cog},
  { text: "Gửi tín hiệu báo động đến còi, đèn và điện thoại, mail, web", icon: Cog},
  { text: "Cảnh báo các trường hợp mất kết nối Camera, mất mạng.", icon: Cog
  }
];
const components = [
  { text: "Camera và thiết bị thông minh IOT: không giới hạn.", icon: Cog },
  { text: "Server AI (Box AI) (License/năm hoặc vĩnh viễn)", icon: Zap },
  { text: "Mobile app: Android/IOS (License/năm hoặc vĩnh viễn)", icon: Cog},
];
const Ecovision = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        <HeroSection />

        {/* Section 1: Thiết kế & Chế tạo máy */}
        <FeatureSection
          tag={{ icon: Factory, text: "Thành phần", colorClass: "bg-primary/10 text-primary" }}
          title={
            <> <span className="gradient-text">Cấu tạo chính</span></>
          }
          description="ECOVISION gồm những thành phần: "
          features={components}
          imageSrc={feature1}
          imageAlt="Thiết kế và chế tạo máy"
          floatingBadge={{
            icon: CheckCircle2,
            title: "Công nghệ tiên tiến",
            subtitle: "•BI • ERP • MES • IoT",
            iconBgClass: "bg-primary",
            iconColorClass: "text-primary-foreground"
          }}
          
          glowClass="from-primary/20 to-accent/20"
        />
        <FeatureSection
          tag={{ icon: Factory, text: "Tính năng", colorClass: "bg-accent/10 text-accent" }}
          title={
            <><span className="gradient-text">Tính năng nổi bật</span></>
          }
          description="ECOVISION mang những tính năng nổi bật"
          features={Features}
          imageSrc={feature2}
          imageAlt="Set-up nhà máy thông minh"
          floatingBadge={{
            icon: Cpu,
            title: "Công nghệ 4.0",
            subtitle: "MES • PLC • SCADA",
            iconBgClass: "bg-accent",
            iconColorClass: "text-accent-foreground"
          }}
          reverse={true}
          backgroundClass="bg-gradient-to-b from-secondary/30 to-background"
          glowClass="from-accent/20 to-primary/20"
        />
        <a href="/industrial"><Button className="w-[100px] h-[50px] ml-[47%] mb-6 group bg-gradient-to-br from-blue-600 via-cyan-500 to-teal-400 " >Trở về</Button></a>
        <CTASection />
      </main>

      <Footer />
    </div>
  );
};

export default Ecovision;