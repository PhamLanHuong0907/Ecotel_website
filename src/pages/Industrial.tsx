import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { HeroSection } from "@/components/Industrial/HeroSection_Industrial";
import { TitleBanner } from "@/components/Industrial/TitleBanner";
import {ServicesSection} from "@/components/Industrial/ServicesSection";
import { FeaturesSection } from "@/components/Industrial/FeaturesSection";
import { CTASection } from "@/components/CTASection";

const Industrial = () => {
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

export default Industrial;