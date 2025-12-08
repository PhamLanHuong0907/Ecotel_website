import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { HeroSection } from "@/components/Leadership/HeroSection_Leadership";
import { ValuesSection } from "@/components/Leadership/ValuesSection";
import {TeamSection} from "@/components/Leadership/TeamSection";
import { CTASection } from "@/components/Leadership/CTASection";

export default function Leadership() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <ValuesSection />
        <TeamSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}