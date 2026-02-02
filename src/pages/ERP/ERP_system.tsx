import { Header } from "@/components/Component_mini/Header";
import { Footer } from "@/components/Component_mini/Footer";
import { HeroSection } from "@/components/Erp_system/HeroSection_Industrial";
import {ErpServicesSection} from "@/components/Erp_system/ServicesSection";
const ERP = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        <HeroSection />
        <ErpServicesSection />
      </main>

      <Footer />
    </div>
  );
};

export default ERP;