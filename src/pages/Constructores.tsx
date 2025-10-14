import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StickyCTA from "@/components/StickyCTA";
import ScrollProgress from "@/components/ScrollProgress";
import SEO from "@/components/SEO";
import StructuredData from "@/components/StructuredData";
import SkipToContent from "@/components/SkipToContent";
import Breadcrumbs from "@/components/Breadcrumbs";
import ConstructoresHero from "@/components/constructores/ConstructoresHero";
import VideoConstructores from "@/components/constructores/VideoConstructores";
import QueOfrecemos from "@/components/constructores/QueOfrecemos";
import ComparisonTable from "@/components/constructores/ComparisonTable";
import ProcesoTrabajo from "@/components/constructores/ProcesoTrabajo";
import CasosReales from "@/components/constructores/CasosReales";
import IndiceNavegacion from "@/components/constructores/IndiceNavegacion";
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
        image="/og/constructores.jpg"
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
      
      {/* ItemList Schema for case studies */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ItemList",
          "name": "Proyectos de distribución Matter Group",
          "itemListElement": [
            {
              "@type": "ListItem",
              "position": 1,
              "name": "Hotel Paxton Barcelona",
              "url": "https://mattergroup.com/proyectos/hotel-paxton-barcelona"
            },
            {
              "@type": "ListItem",
              "position": 2,
              "name": "Oficinas Tech Madrid",
              "url": "https://mattergroup.com/proyectos/oficinas-tech-madrid"
            },
            {
              "@type": "ListItem",
              "position": 3,
              "name": "Vivienda Costa Brava",
              "url": "https://mattergroup.com/proyectos/vivienda-costa-brava"
            }
          ]
        })}
      </script>
      <SkipToContent />
      <ScrollProgress />
      <Navbar />
      <Breadcrumbs />

      <main id="main-content">
        <ConstructoresHero />
        <VideoConstructores />
        <QueOfrecemos />
        <ComparisonTable />
        <ProcesoTrabajo />
        <CasosReales />
        <IndiceNavegacion />
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
