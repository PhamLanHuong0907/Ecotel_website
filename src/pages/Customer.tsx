import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { HeroSection } from "@/components/Customer/HeroSection_Customer";

import { CustomersGridSection } from "@/components/Customer/Customer_card";
import { TestimonialsSection } from "@/components/Customer/Testimonials";
import { CTASection } from "@/components/CTASection";

export default function Customers() {
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