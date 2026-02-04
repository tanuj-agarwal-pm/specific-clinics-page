import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import VariantA from "./pages/VariantA";
import VariantB from "./pages/VariantB";
import VariantC from "./pages/VariantC";
import VariantD from "./pages/VariantD";
import VariantE from "./pages/VariantE";
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
          <Route path="/variantA" element={<VariantA />} />
          <Route path="/variantB" element={<VariantB />} />
          <Route path="/variantC" element={<VariantC />} />
          <Route path="/variantD" element={<VariantD />} />
          <Route path="/variantE" element={<VariantE />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
