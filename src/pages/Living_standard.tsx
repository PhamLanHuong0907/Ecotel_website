import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { HeroSection } from "@/components/Living_standard/HeroSection_Industrial";
import { TitleBanner } from "@/components/Living_standard/TitleBanner";
import {ServicesSection} from "@/components/Living_standard/ServicesSection";
import { FeaturesSection } from "@/components/Living_standard/FeaturesSection";
import { CTASection } from "@/components/CTASection";

const Living_standard = () => {
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

export default Living_standard;