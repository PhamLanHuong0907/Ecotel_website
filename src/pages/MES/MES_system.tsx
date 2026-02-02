import { Header } from "@/components/Component_mini/Header";
import { Footer } from "@/components/Component_mini/Footer";
import { HeroSection } from "@/components/MES_system/HeroSection_Industrial";
import {MesServicesSection} from "@/components/MES_system/ServicesSection";
const MES = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <MesServicesSection />
   
      </main>

      <Footer />
    </div>
  );
};

export default MES;