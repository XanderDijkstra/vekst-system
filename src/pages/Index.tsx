import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/home/HeroSection";
import ProblemsSection from "@/components/home/ProblemsSection";
import SystemsGridSection from "@/components/home/SystemsGridSection";
import CaseStudySection from "@/components/home/CaseStudySection";
import HowItWorksSection from "@/components/home/HowItWorksSection";
import CtaSection from "@/components/home/CtaSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <HeroSection />
        <ProblemsSection />
        <SystemsGridSection />
        <CaseStudySection />
        <HowItWorksSection />
        <CtaSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
