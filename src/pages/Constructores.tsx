import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StickyCTA from "@/components/StickyCTA";
import ScrollProgress from "@/components/ScrollProgress";
import SEO from "@/components/SEO";
import Breadcrumbs from "@/components/Breadcrumbs";
import ConstructoresHero from "@/components/constructores/ConstructoresHero";
import QueOfrecemos from "@/components/constructores/QueOfrecemos";
import ComparisonTable from "@/components/constructores/ComparisonTable";
import ProcesoTrabajo from "@/components/constructores/ProcesoTrabajo";
import ChecklistEntrega from "@/components/constructores/ChecklistEntrega";
import NivelesServicio from "@/components/constructores/NivelesServicio";
import CasosReales from "@/components/constructores/CasosReales";
import BeneficiosMetricos from "@/components/constructores/BeneficiosMetricos";
import StickyCTAPresupuesto from "@/components/constructores/StickyCTAPresupuesto";
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
      <Breadcrumbs />

      <main id="main-content">
        <ConstructoresHero />
        <QueOfrecemos />
        <ComparisonTable />
        <ProcesoTrabajo />
        <ChecklistEntrega />
        <NivelesServicio />
        <CasosReales />
        <BeneficiosMetricos />
        <FormularioPresupuesto />
        <FinalCTA />
      </main>

      <Footer />
      <StickyCTA />
      <StickyCTAPresupuesto />
    </div>
  );
};

export default Constructores;
