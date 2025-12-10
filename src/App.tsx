import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import About from "./pages/Introduce";
import Leadership from "./pages/Leadership";
import Customers from "./pages/Customer";
import ManufacturingDetail from "./pages/Manufactoring";
import Industrial from "./pages/Industrial";
import Professor from "./pages/Professor";
import Products from "./pages/Product";
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
          <Route path="/about/leadership" element={<Leadership />} />
          <Route path="/about/professors" element={<Professor />} />
          <Route path="/about/customers" element={<Customers />} />
          <Route path="/about/products" element={<Products />} />
          <Route path="/industrial/manufacturing" element={<ManufacturingDetail />} />
          <Route path="/industrial" element={<Industrial />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
