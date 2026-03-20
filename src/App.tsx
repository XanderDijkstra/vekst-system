import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
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
import PrijzenPage from "./pages/PrijzenPage";

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/diensten" element={<DienstenOverview />} />
          <Route path="/diensten/lead-generatie" element={<LeadGeneratie />} />
          <Route path="/diensten/klantcommunicatie" element={<Klantcommunicatie />} />
          <Route path="/diensten/review-funnel" element={<ReviewFunnel />} />
          <Route path="/diensten/all-in-one-inbox" element={<AllInOneInbox />} />
          <Route path="/diensten/marketing-campagnes" element={<MarketingCampagnes />} />
          <Route path="/diensten/lead-follow-up" element={<LeadFollowUp />} />
          <Route path="/diensten/:slug" element={<DienstDetail />} />
          <Route path="/sector/digitalisering-voor-aannemers" element={<SectorPage />} />
          <Route path="/kennisbank" element={<KennisbankOverview />} />
          <Route path="/kennisbank/:slug" element={<KennisbankArticle />} />
          <Route path="/case-studies" element={<CaseStudiesOverview />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/demo" element={<DemoPage />} />
          <Route path="/prijzen" element={<PrijzenPage />} />
          <Route path="/vakgebieden" element={<VakgebiedenPage />} />
          <Route path="/voor/:slug" element={<TradePageWrapper />} />
          {/* Redirects from old /systemen routes */}
          <Route path="/systemen" element={<Navigate to="/diensten" replace />} />
          <Route path="/systemen/:slug" element={<Navigate to="/diensten" replace />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
  </HelmetProvider>
);

export default App;
