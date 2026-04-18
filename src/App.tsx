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
import ToolsOverview from "./pages/tools/ToolsOverview";
import LeadwaardeCalculator from "./pages/tools/LeadwaardeCalculator";
import ProjectmargeCalculator from "./pages/tools/ProjectmargeCalculator";
import TegelsBerekenen from "./pages/tools/TegelsBerekenen";
import VerfBerekenen from "./pages/tools/VerfBerekenen";
import BetonBerekenen from "./pages/tools/BetonBerekenen";
import LaminaatBerekenen from "./pages/tools/LaminaatBerekenen";
import BehangBerekenen from "./pages/tools/BehangBerekenen";
import GipsplatenBerekenen from "./pages/tools/GipsplatenBerekenen";
import StucwerkBerekenen from "./pages/tools/StucwerkBerekenen";
import BouwmaterialenHub from "./pages/tools/BouwmaterialenHub";
import MarketingScan from "./pages/tools/MarketingScan";
import DownloadsOverview from "./pages/DownloadsOverview";
import DownloadDetail from "./pages/DownloadDetail";
import ScrollToTop from "./components/ScrollToTop";

/** Redirect legacy /voor/:slug URLs to /fagomrader/:slug */
const VoorRedirect = () => {
  const { slug } = useParams();
  return <Navigate to={`/fagomrader/${slug}`} replace />;
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
          <Route path="/tjenester" element={<DienstenOverview />} />
          <Route path="/tjenester/leadgenerering" element={<LeadGeneratie />} />
          <Route path="/tjenester/kundekommunikasjon" element={<Klantcommunicatie />} />
          <Route path="/tjenester/anmeldelsesfunnel" element={<ReviewFunnel />} />
          <Route path="/tjenester/alt-i-en-innboks" element={<AllInOneInbox />} />
          <Route path="/tjenester/markedsforingskampanjer" element={<MarketingCampagnes />} />
          <Route path="/tjenester/lead-oppfolging" element={<LeadFollowUp />} />
          <Route path="/tjenester/digitalisering" element={<DigitaliseringAannemers />} />
          <Route path="/tjenester/automatisering" element={<AutomatiseringAannemers />} />
          <Route path="/tjenester/programvareintegrasjoner" element={<SoftwareIntegraties />} />
          <Route path="/tjenester/ai-losninger" element={<AiOplossingen />} />
          <Route path="/tjenester/tilbudssystem" element={<OfferteSysteem />} />
          <Route path="/tjenester/anmeldelsessystem" element={<ReviewSysteem />} />
          <Route path="/tjenester/planleggingssystem" element={<PlanningSysteem />} />
          <Route path="/tjenester/markedsforingsautomatisering" element={<MarketingAutomatisering />} />
          <Route path="/tjenester/:slug" element={<DienstDetail />} />
          <Route path="/bransje/digitalisering-for-handverkere" element={<SectorPage />} />
          <Route path="/kunnskapsbank" element={<KennisbankOverview />} />
          <Route path="/kunnskapsbank/:slug" element={<KennisbankArticle />} />
          <Route path="/kundecase" element={<CaseStudiesOverview />} />
          <Route path="/kontakt" element={<ContactPage />} />
          <Route path="/demo" element={<DemoPage />} />
          <Route path="/priser" element={<PrijzenPage />} />
          <Route path="/blogg" element={<BlogOverview />} />
          <Route path="/wiki" element={<WikiOverview />} />
          <Route path="/wiki/:slug" element={<WikiTerm />} />
          <Route path="/konfigurator" element={<ConfiguratorPage />} />
          <Route path="/admin" element={<AdminLayout />}>
            <Route index element={<AdminDashboard />} />
            <Route path="configurator" element={<AdminConfiguratorPage />} />
            <Route path="braindump" element={<AdminBraindump />} />
            <Route path="kennisbank" element={<AdminKennisbank />} />
            <Route path="kennisbank/:slug" element={<AdminKennisbankEdit />} />
            <Route path="wiki" element={<AdminWiki />} />
            <Route path="wiki/:slug" element={<AdminWikiEdit />} />
          </Route>
          <Route path="/fagomrader" element={<VakgebiedenPage />} />
          <Route path="/fagomrader/:slug" element={<TradePageWrapper />} />
          <Route path="/sammenlign" element={<VergelijkOverview />} />
          <Route path="/sammenlign/mittanbud-alternativ" element={<WerkspotAlternatief />} />
          <Route path="/verktoy" element={<ToolsOverview />} />
          <Route path="/verktoy/leadverdi-kalkulator" element={<LeadwaardeCalculator />} />
          <Route path="/verktoy/prosjektmargin-kalkulator" element={<ProjectmargeCalculator />} />
          <Route path="/verktoy/byggematerialer-kalkulator" element={<BouwmaterialenHub />} />
          <Route path="/verktoy/fliser-kalkulator" element={<TegelsBerekenen />} />
          <Route path="/verktoy/maling-kalkulator" element={<VerfBerekenen />} />
          <Route path="/verktoy/betong-kalkulator" element={<BetonBerekenen />} />
          <Route path="/verktoy/laminat-kalkulator" element={<LaminaatBerekenen />} />
          <Route path="/verktoy/tapet-kalkulator" element={<BehangBerekenen />} />
          <Route path="/verktoy/gipsplate-kalkulator" element={<GipsplatenBerekenen />} />
          <Route path="/verktoy/puss-kalkulator" element={<StucwerkBerekenen />} />
          <Route path="/verktoy/markedsforingsscan" element={<MarketingScan />} />
          <Route path="/nedlastinger" element={<DownloadsOverview />} />
          <Route path="/nedlastinger/:slug" element={<DownloadDetail />} />
          {/* Redirects from old routes */}
          <Route path="/voor/:slug" element={<VoorRedirect />} />
          <Route path="/systemen" element={<Navigate to="/tjenester" replace />} />
          <Route path="/systemen/:slug" element={<Navigate to="/tjenester" replace />} />
          <Route path="/:slug" element={<ServicePageWrapper />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
  </HelmetProvider>
);

export default App;
