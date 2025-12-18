import { Header } from "@/components/Header";
import { HeroSection } from "@/components/Home/HeroSection";
import { AboutSection } from "@/components/Home/AboutSection";
import { ServicesSection } from "@/components/Home/ServicesSection";
import { ProjectsSection } from "@/components/Home/ProjectsSection";
import Home_Testimonials from "@/components/Home/TestimonialsSection";
import { ContactSection } from "@/components/Home/ContactSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <ProjectsSection />
        <Home_Testimonials/>
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
