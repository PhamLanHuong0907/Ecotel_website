import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { HeroSection } from "@/components/Customer/HeroSection_Customer";
import Customer_Card from "@/components/Customer/Customer_card";
import Customer_Testimonials from "@/components/Customer/Testimonials";
import { CTASection } from "@/components/CTASection";

export default function Customers() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <Customer_Card />
        <Customer_Testimonials/>
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}