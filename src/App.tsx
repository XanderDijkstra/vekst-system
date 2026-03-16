import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import SystemenOverview from "./pages/SystemenOverview";
import SystemDetail from "./pages/SystemDetail";
import LeadGeneratie from "./pages/systemen/LeadGeneratie";
import DienstenOverview from "./pages/DienstenOverview";
import DienstDetail from "./pages/DienstDetail";
import SectorPage from "./pages/SectorPage";
import KennisbankOverview from "./pages/KennisbankOverview";
import KennisbankArticle from "./pages/KennisbankArticle";
import CaseStudiesOverview from "./pages/CaseStudiesOverview";
import ContactPage from "./pages/ContactPage";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/systemen" element={<SystemenOverview />} />
          <Route path="/systemen/:slug" element={<SystemDetail />} />
          <Route path="/diensten" element={<DienstenOverview />} />
          <Route path="/diensten/:slug" element={<DienstDetail />} />
          <Route path="/sector/digitalisering-voor-aannemers" element={<SectorPage />} />
          <Route path="/kennisbank" element={<KennisbankOverview />} />
          <Route path="/kennisbank/:slug" element={<KennisbankArticle />} />
          <Route path="/case-studies" element={<CaseStudiesOverview />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
