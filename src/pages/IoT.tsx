import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { HeroSection } from "@/components/IoT/HeroSection_Industrial";
import { TitleBanner } from "@/components/IoT/TitleBanner";
import {ServicesSection} from "@/components/IoT/ServicesSection";
import { FeaturesSection } from "@/components/IoT/FeaturesSection";
import { CTASection } from "@/components/CTASection";
const IoT = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <TitleBanner />
        <ServicesSection />
        <FeaturesSection />
        <CTASection />
      </main>

      <Footer />
    </div>
  );
};

export default IoT;