import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StickyCTA from "@/components/StickyCTA";
import ScrollProgress from "@/components/ScrollProgress";
import SEO from "@/components/SEO";
import ConstructoresHero from "@/components/constructores/ConstructoresHero";
import QueOfrecemos from "@/components/constructores/QueOfrecemos";
import ProcesoTrabajo from "@/components/constructores/ProcesoTrabajo";
import CasosReales from "@/components/constructores/CasosReales";
import BeneficiosMetricos from "@/components/constructores/BeneficiosMetricos";
import FormularioPresupuesto from "@/components/constructores/FormularioPresupuesto";
import FinalCTA from "@/components/constructores/FinalCTA";
import { useScrollTracking } from "@/hooks/useScrollTracking";

const Constructores = () => {
  useScrollTracking('constructores');
  
  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Distribución y suministro profesional de materiales para constructores"
        description="Matter ofrece suministro integral, soporte técnico y logística coordinada para constructores, promotores y buyers profesionales."
        path="/constructores"
      />
      <ScrollProgress />
      <Navbar />

      <main id="main-content">
        <ConstructoresHero />
        <QueOfrecemos />
        <ProcesoTrabajo />
        <CasosReales />
        <BeneficiosMetricos />
        <FormularioPresupuesto />
        <FinalCTA />
      </main>

      <Footer />
      <StickyCTA />
    </div>
  );
};

export default Constructores;
