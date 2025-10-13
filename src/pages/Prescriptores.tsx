import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StickyCTA from "@/components/StickyCTA";
import ScrollProgress from "@/components/ScrollProgress";
import SEO from "@/components/SEO";
import Breadcrumbs from "@/components/Breadcrumbs";
import PrescriptoresHero from "@/components/prescriptores/PrescriptoresHero";
import ComoAyudamos from "@/components/prescriptores/ComoAyudamos";
import ImpactoReal from "@/components/prescriptores/ImpactoReal";
import CasosReales from "@/components/prescriptores/CasosReales";
import GuiaMuestras24h from "@/components/prescriptores/GuiaMuestras24h";
import ProcesoColaboracion from "@/components/prescriptores/ProcesoColaboracion";
import FormularioProyecto from "@/components/prescriptores/FormularioProyecto";
import Testimonios from "@/components/prescriptores/Testimonios";
import FAQ from "@/components/prescriptores/FAQ";
import FinalCTA from "@/components/prescriptores/FinalCTA";
import { useScrollTracking } from "@/hooks/useScrollTracking";

const Prescriptores = () => {
  useScrollTracking('prescriptores');
  
  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Consultoría de materiales para arquitectos e interioristas"
        description="Asesoramiento técnico, materiales sostenibles, muestras en 24 h y apoyo integral a arquitectos e interioristas en todas las fases del proyecto."
        path="/prescriptores"
      />
      <ScrollProgress />
      <Navbar />
      <Breadcrumbs />

      <main id="main-content">
        <PrescriptoresHero />
        <ComoAyudamos />
        <ImpactoReal />
        <CasosReales />
        <GuiaMuestras24h />
        <ProcesoColaboracion />
        <FormularioProyecto />
        <Testimonios />
        <FAQ />
        <FinalCTA />
      </main>

      <Footer />
      <StickyCTA />
    </div>
  );
};

export default Prescriptores;
