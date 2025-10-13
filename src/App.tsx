import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SkipToContent from "@/components/SkipToContent";
import Index from "./pages/Index";
import Prescriptores from "./pages/Prescriptores";
import Fabricantes from "./pages/Fabricantes";
import Constructores from "./pages/Constructores";
import Biblioteca from "./pages/Biblioteca";
import Proyectos from "./pages/Proyectos";
import ProyectoDetalle from "./pages/ProyectoDetalle";
import Eventos from "./pages/Eventos";
import EventoDetalle from "./pages/EventoDetalle";
import Journal from "./pages/Journal";
import JournalDetalle from "./pages/JournalDetalle";
import Sobre from "./pages/Sobre";
import Contacto from "./pages/Contacto";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <SkipToContent />
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/prescriptores" element={<Prescriptores />} />
          <Route path="/fabricantes" element={<Fabricantes />} />
          <Route path="/constructores" element={<Constructores />} />
          <Route path="/biblioteca" element={<Biblioteca />} />
          <Route path="/proyectos" element={<Proyectos />} />
          <Route path="/proyectos/:slug" element={<ProyectoDetalle />} />
          <Route path="/eventos" element={<Eventos />} />
          <Route path="/eventos/:slug" element={<EventoDetalle />} />
          <Route path="/journal" element={<Journal />} />
          <Route path="/journal/:slug" element={<JournalDetalle />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/contacto" element={<Contacto />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
