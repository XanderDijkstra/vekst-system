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
import { SITE_URL, SITE_NAME, OG_IMAGE_URL, TWITTER_HANDLE } from "@/lib/seo";

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: SITE_NAME,
  url: SITE_URL,
  logo: `${SITE_URL}/logo.png`,
  email: "info@vekst-systemet.no",
  telephone: "+4740185596",
  description: "Digitale systemer for moderne håndverkere. Nettsider, lokal SEO, automatiserte anmeldelser og lead-oppfølging for byggebransjen.",
  areaServed: { "@type": "Country", name: "Norge" },
  sameAs: [] as string[],
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: SITE_NAME,
  url: SITE_URL,
  inLanguage: "nb-NO",
  publisher: { "@type": "Organization", name: SITE_NAME, url: SITE_URL },
  potentialAction: {
    "@type": "SearchAction",
    target: { "@type": "EntryPoint", urlTemplate: `${SITE_URL}/kennisbank?q={search_term_string}` },
    "query-input": "required name=search_term_string",
  },
};

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Vekst Systemet - Digitale systemer for moderne håndverkere</title>
        <meta name="description" content="Mindre administrasjon, mer tid på byggeplassen. Vekst Systemet bygger digitale systemer som hjelper håndverkere å automatisere prosessene sine." />
        <link rel="canonical" href={SITE_URL} />
        <meta property="og:site_name" content={SITE_NAME} />
        <meta property="og:title" content="Vekst Systemet - Digitale systemer for moderne håndverkere" />
        <meta property="og:description" content="Mindre administrasjon, mer tid på byggeplassen. Vekst Systemet bygger digitale systemer som hjelper håndverkere å automatisere prosessene sine." />
        <meta property="og:url" content={SITE_URL} />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="nb_NO" />
        <meta property="og:image" content={OG_IMAGE_URL} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content={TWITTER_HANDLE} />
        <meta name="twitter:title" content="Vekst Systemet - Digitale systemer for moderne håndverkere" />
        <meta name="twitter:description" content="Mindre administrasjon, mer tid på byggeplassen. Vekst Systemet bygger digitale systemer som hjelper håndverkere å automatisere prosessene sine." />
        <meta name="twitter:image" content={OG_IMAGE_URL} />
        <script type="application/ld+json">{JSON.stringify(organizationSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(websiteSchema)}</script>
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
