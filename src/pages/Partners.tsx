import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { HeroSection } from "@/components/Partner/HeroSection_Partner";
import { CustomersGridSection } from "@/components/Partner/Partner_card";
import { TestimonialsSection } from "@/components/Partner/Testimonials";
import { CTASection } from "@/components/CTASection";

export default function Partners() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <CustomersGridSection />
        <TestimonialsSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}