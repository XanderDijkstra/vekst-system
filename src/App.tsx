import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes, Navigate, useParams } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import DienstenOverview from "./pages/DienstenOverview";
import DienstDetail from "./pages/DienstDetail";
import LeadGeneratie from "./pages/systemen/LeadGeneratie";
import Klantcommunicatie from "./pages/systemen/Klantcommunicatie";
import ReviewFunnel from "./pages/systemen/ReviewFunnel";
import AllInOneInbox from "./pages/systemen/AllInOneInbox";
import MarketingCampagnes from "./pages/systemen/MarketingCampagnes";
import LeadFollowUp from "./pages/systemen/LeadFollowUp";
import DigitaliseringAannemers from "./pages/diensten/DigitaliseringAannemers";
import AutomatiseringAannemers from "./pages/diensten/AutomatiseringAannemers";
import SoftwareIntegraties from "./pages/diensten/SoftwareIntegraties";
import AiOplossingen from "./pages/diensten/AiOplossingen";
import OfferteSysteem from "./pages/diensten/OfferteSysteem";
import ReviewSysteem from "./pages/diensten/ReviewSysteem";
import PlanningSysteem from "./pages/diensten/PlanningSysteem";
import MarketingAutomatisering from "./pages/diensten/MarketingAutomatisering";
import SectorPage from "./pages/SectorPage";
import KennisbankOverview from "./pages/KennisbankOverview";
import KennisbankArticle from "./pages/KennisbankArticle";
import CaseStudiesOverview from "./pages/CaseStudiesOverview";
import ContactPage from "./pages/ContactPage";
import VakgebiedenPage from "./pages/VakgebiedenPage";
import TradePageWrapper from "./pages/TradePageWrapper";
import DemoPage from "./pages/DemoPage";
import ConfiguratorPage from "./pages/ConfiguratorPage";
import AdminConfiguratorPage from "./pages/AdminConfiguratorPage";
import AdminLayout from "./pages/admin/AdminLayout";
import AdminDashboard from "./pages/admin/AdminDashboard";
import AdminBraindump from "./pages/admin/AdminBraindump";
import AdminKennisbank from "./pages/admin/AdminKennisbank";
import AdminKennisbankEdit from "./pages/admin/AdminKennisbankEdit";
import AdminWiki from "./pages/admin/AdminWiki";
import AdminWikiEdit from "./pages/admin/AdminWikiEdit";
import PrijzenPage from "./pages/PrijzenPage";
import BlogOverview from "./pages/BlogOverview";
import WikiOverview from "./pages/WikiOverview";
import WikiTerm from "./pages/WikiTerm";
import ServicePageWrapper from "./pages/ServicePageWrapper";
import VergelijkOverview from "./pages/vergelijk/VergelijkOverview";
import WerkspotAlternatief from "./pages/vergelijk/WerkspotAlternatief";
import LokaleLeadsGenereren from "./pages/vergelijk/LokaleLeadsGenereren";
import BouwnuAlternatief from "./pages/vergelijk/BouwnuAlternatief";
import OfferteadviseurAlternatief from "./pages/vergelijk/OfferteadviseurAlternatief";
import SeoVsGoogleAds from "./pages/vergelijk/SeoVsGoogleAds";
import ToolsOverview from "./pages/tools/ToolsOverview";
import LeadwaardeCalculator from "./pages/tools/LeadwaardeCalculator";
import UurtariefCalculator from "./pages/tools/UurtariefCalculator";
import ProjectmargeCalculator from "./pages/tools/ProjectmargeCalculator";
import PersoneelskostenCalculator from "./pages/tools/PersoneelskostenCalculator";
import TegelsBerekenen from "./pages/tools/TegelsBerekenen";
import VerfBerekenen from "./pages/tools/VerfBerekenen";
import ScrollToTop from "./components/ScrollToTop";

/** Redirect old /voor/:slug URLs to /vakgebieden/:slug */
const VoorRedirect = () => {
  const { slug } = useParams();
  return <Navigate to={`/vakgebieden/${slug}`} replace />;
};

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/diensten" element={<DienstenOverview />} />
          <Route path="/diensten/lead-generatie" element={<LeadGeneratie />} />
          <Route path="/diensten/klantcommunicatie" element={<Klantcommunicatie />} />
          <Route path="/diensten/review-funnel" element={<ReviewFunnel />} />
          <Route path="/diensten/all-in-one-inbox" element={<AllInOneInbox />} />
          <Route path="/diensten/marketing-campagnes" element={<MarketingCampagnes />} />
          <Route path="/diensten/lead-follow-up" element={<LeadFollowUp />} />
          <Route path="/diensten/digitalisering-aannemers" element={<DigitaliseringAannemers />} />
          <Route path="/diensten/automatisering-aannemers" element={<AutomatiseringAannemers />} />
          <Route path="/diensten/software-integraties" element={<SoftwareIntegraties />} />
          <Route path="/diensten/ai-oplossingen" element={<AiOplossingen />} />
          <Route path="/diensten/offerte-systeem" element={<OfferteSysteem />} />
          <Route path="/diensten/review-systeem" element={<ReviewSysteem />} />
          <Route path="/diensten/planning-systeem" element={<PlanningSysteem />} />
          <Route path="/diensten/marketing-automatisering" element={<MarketingAutomatisering />} />
          <Route path="/diensten/:slug" element={<DienstDetail />} />
          <Route path="/sector/digitalisering-voor-aannemers" element={<SectorPage />} />
          <Route path="/kennisbank" element={<KennisbankOverview />} />
          <Route path="/kennisbank/:slug" element={<KennisbankArticle />} />
          <Route path="/case-studies" element={<CaseStudiesOverview />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/demo" element={<DemoPage />} />
          <Route path="/prijzen" element={<PrijzenPage />} />
          <Route path="/blog" element={<BlogOverview />} />
          <Route path="/wiki" element={<WikiOverview />} />
          <Route path="/wiki/:slug" element={<WikiTerm />} />
          <Route path="/configurator" element={<ConfiguratorPage />} />
          <Route path="/admin" element={<AdminLayout />}>
            <Route index element={<AdminDashboard />} />
            <Route path="configurator" element={<AdminConfiguratorPage />} />
            <Route path="braindump" element={<AdminBraindump />} />
            <Route path="kennisbank" element={<AdminKennisbank />} />
            <Route path="kennisbank/:slug" element={<AdminKennisbankEdit />} />
            <Route path="wiki" element={<AdminWiki />} />
            <Route path="wiki/:slug" element={<AdminWikiEdit />} />
          </Route>
          <Route path="/vakgebieden" element={<VakgebiedenPage />} />
          <Route path="/vakgebieden/:slug" element={<TradePageWrapper />} />
          <Route path="/vergelijk" element={<VergelijkOverview />} />
          <Route path="/vergelijk/werkspot-alternatief" element={<WerkspotAlternatief />} />
          <Route path="/vergelijk/bouwnu-alternatief" element={<BouwnuAlternatief />} />
          <Route path="/vergelijk/offerteadviseur-alternatief" element={<OfferteadviseurAlternatief />} />
          <Route path="/vergelijk/lokale-leads-genereren" element={<LokaleLeadsGenereren />} />
          <Route path="/vergelijk/seo-vs-google-ads" element={<SeoVsGoogleAds />} />
          <Route path="/tools" element={<ToolsOverview />} />
          <Route path="/tools/leadwaarde-calculator" element={<LeadwaardeCalculator />} />
          <Route path="/tools/uurtarief-calculator-aannemer" element={<UurtariefCalculator />} />
          <Route path="/tools/projectmarge-calculator" element={<ProjectmargeCalculator />} />
          <Route path="/tools/personeelskosten-calculator" element={<PersoneelskostenCalculator />} />
          <Route path="/tools/tegels-berekenen" element={<TegelsBerekenen />} />
          <Route path="/tools/verf-berekenen" element={<VerfBerekenen />} />
          {/* Redirects from old routes */}
          <Route path="/voor/:slug" element={<VoorRedirect />} />
          <Route path="/systemen" element={<Navigate to="/diensten" replace />} />
          <Route path="/systemen/:slug" element={<Navigate to="/diensten" replace />} />
          <Route path="/:slug" element={<ServicePageWrapper />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
  </HelmetProvider>
);

export default App;
