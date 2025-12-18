import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { HeroSection } from "@/components/Partner/HeroSection_Partner";
import Partner_Card from "@/components/Partner/Partner_card";
import Partner_Testimnonials from "@/components/Partner/Testimonials";
import { CTASection } from "@/components/CTASection";

export default function Partners() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <Partner_Card />
        <Partner_Testimnonials/>
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}