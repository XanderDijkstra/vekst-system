import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/home/HeroSection";
import ProblemsSection from "@/components/home/ProblemsSection";
import FeatureShowcaseSection from "@/components/home/FeatureShowcaseSection";
import TradesSection from "@/components/home/TradesSection";
import WhyUniqueSection from "@/components/home/WhyUniqueSection";
import SystemsGridSection from "@/components/home/SystemsGridSection";
import CaseStudySection from "@/components/home/CaseStudySection";
import HowItWorksSection from "@/components/home/HowItWorksSection";
import CtaSection from "@/components/home/CtaSection";

const SITE_URL = "https://aannemersysteem.com";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Aannemer Systeem — Digitale systemen voor moderne aannemers</title>
        <meta name="description" content="Minder administratie, meer tijd op de werf. Aannemer Systeem bouwt digitale systemen die aannemers helpen hun processen te automatiseren." />
        <link rel="canonical" href={SITE_URL} />
        <meta property="og:title" content="Aannemer Systeem — Digitale systemen voor moderne aannemers" />
        <meta property="og:description" content="Minder administratie, meer tijd op de werf. Aannemer Systeem bouwt digitale systemen die aannemers helpen hun processen te automatiseren." />
        <meta property="og:url" content={SITE_URL} />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="nl_NL" />
      </Helmet>
      <Navbar />
      <main>
        <HeroSection />
        <ProblemsSection />
        <FeatureShowcaseSection />
        <TradesSection />
        <WhyUniqueSection />
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
