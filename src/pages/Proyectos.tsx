import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StickyCTA from "@/components/StickyCTA";
import ScrollProgress from "@/components/ScrollProgress";
import SEO from "@/components/SEO";
import Breadcrumbs from "@/components/Breadcrumbs";
import ProyectosHero from "@/components/proyectos/ProyectosHero";
import ProyectosGrid from "@/components/proyectos/ProyectosGrid";
import ProyectosCTA from "@/components/proyectos/ProyectosCTA";
import { useScrollTracking } from "@/hooks/useScrollTracking";

const Proyectos = () => {
  useScrollTracking('proyectos');
  
  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Proyectos arquitectónicos con materiales Matter | Inspiración y resultados"
        description="Descubre proyectos reales donde Matter participó en la selección, suministro y asesoramiento técnico de materiales."
        path="/proyectos"
      />
      <ScrollProgress />
      <Navbar />
      <Breadcrumbs />

      <main id="main-content">
        <ProyectosHero />
        <ProyectosGrid />
        <ProyectosCTA />
      </main>

      <Footer />
      <StickyCTA />
    </div>
  );
};

export default Proyectos;
