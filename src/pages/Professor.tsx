import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { HeroSection } from "@/components/Professor/HeroSection_Professor";

import {TeamSection} from "@/components/Professor/TeamSection";
import { CTASection } from "@/components/CTASection";

export default function Professor() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <TeamSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}