import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import Services from "./pages/Services";
import Compare from "./pages/Compare";
import EOSterilization from "./pages/services/EOSterilization";
import SteamSterilization from "./pages/services/SteamSterilization";
import GammaIrradiation from "./pages/services/GammaIrradiation";
import Products from "./pages/Products";
import ChemicalIndicators from "./pages/products/ChemicalIndicators";
import BiologicalIndicators from "./pages/products/BiologicalIndicators";
import BowieDick from "./pages/products/BowieDick";
import Accessories from "./pages/products/Accessories";
import Industries from "./pages/Industries";
import Quality from "./pages/Quality";
import Contact from "./pages/Contact";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import Resources from "./pages/Resources";
import FAQ from "./pages/FAQ";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/compare" element={<Compare />} />
          <Route path="/services/eo-sterilization" element={<EOSterilization />} />
          <Route path="/services/steam-sterilization" element={<SteamSterilization />} />
          <Route path="/services/gamma-irradiation" element={<GammaIrradiation />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/chemical-indicators" element={<ChemicalIndicators />} />
          <Route path="/products/biological-indicators" element={<BiologicalIndicators />} />
          <Route path="/products/bowie-dick" element={<BowieDick />} />
          <Route path="/products/accessories" element={<Accessories />} />
          <Route path="/industries" element={<Industries />} />
          <Route path="/quality" element={<Quality />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/faq" element={<FAQ />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
