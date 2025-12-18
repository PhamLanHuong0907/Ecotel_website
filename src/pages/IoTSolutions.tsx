import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { HeroSection } from "@/components/IoTSolutions/HeroSection_iotsolutions";
import { FeatureSection } from "@/components/FeatureSection";
import { CTASection } from "@/components/CTASection";
import { Cog, Cpu, Zap, Target, Settings, Shield, Wrench, Factory, CheckCircle2 } from "lucide-react";
import feature1 from "@/assets/iot_tong_the1.png";
import { Button } from "@/components/ui/button";
const designFeatures = [
  { text: "Tư vấn & Lên lộ trình triển khai IoT", icon: Cog },
  { text: "Thiết kế & Xây dựng hệ thống IoT", icon: Zap },
  { text: "Triển khai và kết nối hệ thống IoT", icon: Cog},
  { text: "Vận hành, Giám sát & Bảo trì IoT", icon: Cog},
];
const IoTSolutions = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        <HeroSection />

        {/* Section 1: Thiết kế & Chế tạo máy */}
        <FeatureSection
          tag={{ icon: Factory, text: "IoT tổng thể", colorClass: "bg-primary/10 text-primary" }}
          title={
            <> <span className="gradient-text">Dịch vụ & Giải pháp IoT tổng thể </span></>
          }
          description="Dịch vụ của chúng tôi gồm: "
          features={designFeatures}
          imageSrc={feature1}
          imageAlt="Thiết kế và chế tạo máy"
          floatingBadge={{
            icon: CheckCircle2,
            title: "",
            subtitle: "",
            iconBgClass: "bg-primary",
            iconColorClass: "text-primary-foreground"
          }}
          
          glowClass="from-primary/20 to-accent/20"
        />
        <a href="/industrial"><Button className="w-[100px] h-[50px] ml-[47%] mb-6 group bg-gradient-to-br from-blue-600 via-cyan-500 to-teal-400 " >Trở về</Button></a>
        <CTASection />
      </main>

      <Footer />
    </div>
  );
};

export default IoTSolutions;