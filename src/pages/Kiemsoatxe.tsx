import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { HeroSection } from "@/components/Kiemsoatxe/HeroSection_Kiemsoatxe";
import { FeatureSection } from "@/components/FeatureSection";
import { CTASection } from "@/components/CTASection";
import { Cog, Cpu, Zap, Target, Settings, Shield, Wrench, Factory, CheckCircle2 } from "lucide-react";
import feature1 from "@/assets/kiemsoatxe1.jpg";
import { Button } from "@/components/ui/button";// Data
const designFeatures = [
  { text: "Thiết kế, cung cấp & lắp đặt hệ thống đỗ xe tự động", icon: Cog },
  { text: "Thiết kế, cung cấp & lắp đặt trạm kiểm soát xe ra vào", icon: Cpu },
  { text: "Hỗ trợ báo cáo nghiên cứu tiền khả thi", icon: Zap },
  { text: "Hỗ trợ thiết kế kỹ thuật", icon: Zap},
  { text: "Bảo Trì, Sửa Chữa Toàn Bộ Hệ Thống (Cơ, Điện, Phần Mềm)", icon: Zap}
];

const Garagage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        <HeroSection />

        {/* Section 1: Thiết kế & Chế tạo máy */}
        <FeatureSection
          tag={{ icon: Wrench, text: "Thiết kế & Chế tạo", colorClass: "bg-primary/10 text-primary" }}
          title={
            <> <span className="gradient-text">Dịch vụ & Giải pháp cung cấp</span></>
          }
          description="Với đội ngũ kỹ sư giàu kinh nghiệm và hệ thống công nghệ tiên tiến, ECOTEL cung cấp các giải pháp:"
          features={designFeatures}
          imageSrc={feature1}
          imageAlt="Thiết kế và chế tạo máy"
          floatingBadge={{
            icon: CheckCircle2,
            title: "Công nghệ tiên tiến",
            subtitle: "IoT • AI • SCADA",
            iconBgClass: "bg-primary",
            iconColorClass: "text-primary-foreground"
          }}
          glowClass="from-primary/20 to-accent/20"
        />

        {/* Section 2: Set-up nhà máy */}
        
        <a href="/industrial"><Button className="w-[100px] h-[50px] ml-[47%] mb-6 group bg-gradient-to-br from-blue-600 via-cyan-500 to-teal-400 ">Trở về</Button></a>
        <CTASection />
      </main>

      <Footer />
    </div>
  );
};

export default Garagage;