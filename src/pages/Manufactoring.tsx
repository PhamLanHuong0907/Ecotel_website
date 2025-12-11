import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { HeroSection } from "@/components/Manufactoring/HeroSection_Manufactoring";
import { FeatureSection } from "@/components/Manufactoring/FeatureSection";
import { CTASection } from "@/components/CTASection";
import { Cog, Cpu, Zap, Target, Settings, Shield, Wrench, Factory, CheckCircle2 } from "lucide-react";
import feature1 from "@/assets/daychuyencongnghiep.webp";
import feature2 from "@/assets/daychuyencongnghiep1.jpg";
// Data
const designFeatures = [
  { text: "Thiết kế và chế tạo máy móc chuyên dụng theo yêu cầu, phù hợp với quy trình sản xuất đặc thù của doanh nghiệp.", icon: Cog },
  { text: "Phát triển và lắp đặt dây chuyền sản xuất tự động, tích hợp các công nghệ hiện đại như IoT, AI, SCADA nhằm nâng cao hiệu suất vận hành.", icon: Cpu },
  { text: "Cải tiến và nâng cấp dây chuyền sản xuất hiện có, tối ưu hóa công suất và tăng cường tính linh hoạt cho nhà máy.", icon: Zap },
];

const setupFeatures = [
  { text: "Tư vấn và triển khai mô hình nhà máy thông minh, giúp doanh nghiệp tận dụng tối đa lợi thế của công nghệ 4.0.", icon: Target },
  { text: "Tích hợp hệ thống quản lý sản xuất (MES), hệ thống điều khiển tự động (PLC/SCADA) để giám sát và điều hành sản xuất theo thời gian thực.", icon: Settings },
  { text: "Đào tạo và chuyển giao công nghệ, đảm bảo đội ngũ vận hành có đầy đủ kiến thức và kỹ năng để quản lý hệ thống hiệu quả.", icon: Shield },
];

const ManufacturingDetail = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        <HeroSection />

        {/* Section 1: Thiết kế & Chế tạo máy */}
        <FeatureSection
          tag={{ icon: Wrench, text: "Thiết kế & Chế tạo", colorClass: "bg-primary/10 text-primary" }}
          title={
            <>Thiết kế & Chế tạo <span className="gradient-text"> máy và dây chuyền sản xuất</span></>
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
        <FeatureSection
          tag={{ icon: Factory, text: "Set-up Nhà máy", colorClass: "bg-accent/10 text-accent" }}
          title={
            <>Set-up nhà máy theo <span className="gradient-text"> nhu cầu doanh nghiệp</span></>
          }
          description="ECOTEL hỗ trợ doanh nghiệp trong quá trình xây dựng và tối ưu hóa hệ thống nhà máy sản xuất, từ bước lên kế hoạch, thiết kế đến triển khai và vận hành:"
          features={setupFeatures}
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
        <a href="/industrial"><button className="w-[200px] h-[100px] items-center justify-center text-center ml-[43%] border-blue-600 bg-gradient-to-br from-secondray/30 to -background" >Trở về</button></a>
        <CTASection />
      </main>

      <Footer />
    </div>
  );
};

export default ManufacturingDetail;