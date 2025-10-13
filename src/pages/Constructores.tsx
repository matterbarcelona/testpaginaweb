import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StickyCTA from "@/components/StickyCTA";
import ScrollProgress from "@/components/ScrollProgress";
import SEO from "@/components/SEO";
import StructuredData from "@/components/StructuredData";
import SkipToContent from "@/components/SkipToContent";
import Breadcrumbs from "@/components/Breadcrumbs";
import ConstructoresHero from "@/components/constructores/ConstructoresHero";
import QueOfrecemos from "@/components/constructores/QueOfrecemos";
import ComparisonTable from "@/components/constructores/ComparisonTable";
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
        title="Distribución y suministro profesional de materiales para constructores | Matter Group"
        description="Suministro integral, soporte técnico y logística coordinada para constructores, promotores y buyers profesionales."
        path="/constructores"
        keywords={[
          "suministro materiales construcción",
          "distribución materiales obra",
          "logística materiales",
          "soporte técnico construcción",
          "gestión proveedores construcción"
        ]}
      />
      <StructuredData
        type="service"
        data={{
          "@context": "https://schema.org",
          "@type": "Service",
          "name": "Distribución y suministro profesional de materiales",
          "serviceType": "Material supply & logistics for construction projects",
          "provider": { 
            "@type": "Organization", 
            "name": "Matter Group", 
            "url": "https://mattergroup.com" 
          },
          "audience": "Construction companies, builders and developers",
          "description": "Suministro integral, soporte técnico y logística coordinada para constructores"
        }}
      />
      <SkipToContent />
      <ScrollProgress />
      <Navbar />
      <Breadcrumbs />

      <main id="main-content">
        <ConstructoresHero />
        <QueOfrecemos />
        <ComparisonTable />
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
