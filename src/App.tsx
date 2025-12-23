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
import Partners from "./pages/Partners";
import ScrollToTop from "./components/Scrolltotop";
import Smart_Factory from "./pages/Smart_Factory";
import ERPBISolutionsDetail from "./pages/ERP&BI_Solutions";
import Eco_MES from "./pages/Eco-MES";
import Living_standard from "./pages/Living_standard";
import IoT from "./pages/IoT";
// [NEW] Import ThemeToggle
import ThemeToggle from "./components/ThemeToogle"; 
import Garagage from "./pages/Kiemsoatxe";
import PCB from "./pages/PCB";
import IoTSolutions from "./pages/IoTSolutions";
import Ecovision from "./pages/Ecovision";
import ChristmasIntro from "./components/ChiristmasIntro";
const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <ChristmasIntro />
      <Toaster />
      <Sonner />
      
      <BrowserRouter>
        <ScrollToTop/>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/about/leadership" element={<Leadership />} />
          <Route path="/about/professors" element={<Professor />} />
          <Route path="/about/customers" element={<Customers />} />
          <Route path="/about/products" element={<Products />} />
          <Route path="/about/partners" element={<Partners />} />
          <Route path="/industrial/manufacturing" element={<ManufacturingDetail />} />
          <Route path="/industrial/smart_factory" element={<Smart_Factory/>}/>
          <Route path="/industrial" element={<Industrial />} />
          <Route path="/industrial/erp_bi" element={<ERPBISolutionsDetail/>}/>
          <Route path="/industrial/eco_mes" element={<Eco_MES/>}/>
    
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="/living_standard" element={<Living_standard/>}/>
          <Route path="/living_standard/garagage" element={<Garagage/>}/>
         
          <Route path="/iot" element={<IoT/>}/>
           <Route path="/iot/pcb" element={<PCB/>}/>
          <Route path="/iot/iot_solutions" element={<IoTSolutions/>}/>
          <Route path="/iot/ecovision" element={<Ecovision/>}/>
          <Route path="*" element={<NotFound />} />
        </Routes>

        {/* [NEW] Đặt nút đổi màu ở góc màn hình. 
            z-50 để nổi lên trên cùng, fixed để luôn hiển thị khi cuộn */}
        <div className="fixed bottom-6 left-6 z-50 md:bottom-10 md:left-10 animate-fade-up">
           <ThemeToggle />
        </div>

      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;