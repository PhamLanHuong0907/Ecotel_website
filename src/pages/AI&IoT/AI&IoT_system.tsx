import { Header } from "@/components/Component_mini/Header";
import { Footer } from "@/components/Component_mini/Footer";
import { HeroSection } from "@/components/AI_IOT/HeroSection_AI";
import {AIServicesSection} from "@/components/AI_IOT/ServicesSection";

const AI_IoT = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <AIServicesSection />
      </main>

      <Footer />
    </div>
  );
};

export default AI_IoT;