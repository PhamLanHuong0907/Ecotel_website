import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { HeroSection } from "@/components/ERP&BI_Solutions/HeroSection_ERP&BI_Solutions";
import { FeatureSection } from "@/components/ERP&BI_Solutions/FeatureSection";
import { CTASection } from "@/components/CTASection";
import { Cog, Cpu, Zap, Target, Settings, Shield, Wrench, Factory, CheckCircle2 } from "lucide-react";
import feature1 from "@/assets/daychuyencongnghiep.webp";
import feature2 from "@/assets/daychuyencongnghiep1.jpg";
import { Button } from "@/components/ui/button";// Data
const inventory_Features = [
  { text: "Quản lý danh mục sản phẩm và toàn bộ các biến thể của sản phẩm", icon: Cog },
  { text: "Quản ly sản phẩm hàng hóa đa dạng theo các phương thức như: quản lý theo lô gói (batch), quản lý theo Barcode, Quản lý theo Serial,...", icon: Cpu },
  { text: "Quản lý các kho và trạng thái tồn theo từng nghiệp vụ", icon: Zap },
  { text: "Quản lý các tác nghiệp tác động lên kho như nhập, xuất, điều chuyền, kiểm kê - đánh giá lại", icon:Zap},
  { text: "Tích hợp với các hệ thống như WMS, MES, SCADA,...", icon: Zap},
  { text: "Kiểm soát giá vốn linh động theo từng sản phẩm", icon:Zap},
];

const sale_Features = [
  { text: "Hợp đồng khung", icon: Target },
  { text: "Báo giá", icon: Settings },
  { text: "Đơn hàng / Hợp đồng", icon: Shield },
  { text: "Phê duyệt tự động theo các chính sách công nợ và thanh toán", icon: Shield},
  { text: "Giao hàng / Công nợ / Thanh toán", icon: Shield},
  { text: "Quản lý bảng giá, chính sách giá", icon: Shield},
  { text: "Quản lý chiết khấu, khuyến mãi bao gồm cả áp dụng tự động cũng như lũy kế trả sau", icon: Shield},
  { text: "Hệ thống báo cáo đa chiều", icon: Shield},
  { text: "Quản lý khiếu nại", icon: Shield}
];
const purchasing_Features = [
  { text: "Quản lý hợp đồng khung", icon: Target },
  { text: "Quản lý yêu cầu mua hàng, phê duyệt yêu cầu cung gắn với các yêu cầu giới hạn ngân sách", icon: Settings },
  { text: "Quản lý báo giá và so sánh báo giá nhà cung cấp", icon: Shield },
  { text: "Quản lý đơn hàng mua / hợp đồng mua", icon: Shield},
  { text: "Quản lý nhập kho hàng mua", icon: Shield},
  { text: "Quản lý công nợ và thanh toán đối với nhà cung cấp", icon: Shield},
  { text: "Quản lý chi phí mua hàng", icon: Shield},
  { text: "Dự báo, gợi ý yêu cầu mua", icon: Shield},
  { text: "Quản lý khiếu nại", icon: Shield}
];
const ERPBISolutionsDetail = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        <HeroSection />

        {/* Section 1: Thiết kế & Chế tạo máy */}
        <FeatureSection
          tag={{ icon: Wrench, text: "Module Quản lý bán hàng", colorClass: "bg-primary/10 text-primary" }}
          title={
            <>Sale <span className="gradient-text">- Quản lý bán hàng</span></>
          }
          description="Module quản trị chuỗi hoạt động liên quan đến kinh doanh cho mô hình B2B với đầy đủ các nghiệp vụ bao gồm:"
          features={sale_Features}
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
          tag={{ icon: Factory, text: "Module Quản lý kho vận", colorClass: "bg-accent/10 text-accent" }}
          title={
            <>Inventory <span className="gradient-text">- Quản lý kho vận</span></>
          }
          description="Module cho phép quản lý toàn bộ các cấu phần nghiệp vụ của mảng kho vận trong một doanh nghiệp"
          features={inventory_Features}
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
        <FeatureSection
          tag={{ icon: Wrench, text: "Module Quản lý mua hàng", colorClass: "bg-primary/10 text-primary" }}
          title={
            <>Purchasing <span className="gradient-text">- Quản lý mua hàng</span></>
          }
          description="Module quản lý chuỗi nghiệp vụ của bộ phần mua hàng (cung ứng) của doanh nghiệp với các chức năng: "
          features={sale_Features}
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
         
        <a href="/industrial"><Button className="w-[100px] h-[50px] ml-[47%] mb-6 group bg-gradient-to-br from-blue-600 via-cyan-500 to-teal-400 ">Trở về</Button></a>
        <CTASection />
      </main>

      <Footer />
    </div>
  );
};

export default ERPBISolutionsDetail;