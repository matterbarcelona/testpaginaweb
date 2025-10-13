import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StickyCTA from "@/components/StickyCTA";
import ScrollProgress from "@/components/ScrollProgress";
import SEO from "@/components/SEO";
import StructuredData from "@/components/StructuredData";
import SkipToContent from "@/components/SkipToContent";
import Breadcrumbs from "@/components/Breadcrumbs";
import FabricantesHero from "@/components/fabricantes/FabricantesHero";
import QueEsTGMA from "@/components/fabricantes/QueEsTGMA";
import BeneficiosTGMA from "@/components/fabricantes/BeneficiosTGMA";
import CasoExitoTGMA from "@/components/fabricantes/CasoExitoTGMA";
import ProcesoTGMANuevo from "@/components/fabricantes/ProcesoTGMANuevo";
import FormularioPartner from "@/components/fabricantes/FormularioPartner";
import FinalCTATGMA from "@/components/fabricantes/FinalCTATGMA";
import { useScrollTracking } from "@/hooks/useScrollTracking";

const Fabricantes = () => {
  useScrollTracking('fabricantes');
  
  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="TGMA | Agencia de visibilidad y leads para fabricantes de materiales | Matter Group"
        description="TGMA, la agencia de Matter Group, posiciona marcas de materiales ante arquitectos e interioristas mediante showroom, contenidos y eventos."
        path="/fabricantes"
        keywords={[
          "TGMA",
          "agencia materiales arquitectura",
          "visibilidad fabricantes",
          "leads arquitectos",
          "marketing materiales construcción",
          "showroom materiales"
        ]}
      />
      <StructuredData
        type="service"
        data={{
          "@context": "https://schema.org",
          "@type": "Service",
          "name": "TGMA - The Grey Matter Agency",
          "provider": { 
            "@type": "Organization", 
            "name": "Matter Group", 
            "url": "https://mattergroup.com" 
          },
          "serviceType": "Brand visibility & lead generation for manufacturers",
          "audience": "Building material manufacturers",
          "description": "TGMA posiciona marcas de materiales ante arquitectos mediante showroom, contenidos y eventos"
        }}
      />
      <SkipToContent />
      <ScrollProgress />
      <Navbar />
      <Breadcrumbs />

      <main id="main-content">
        <FabricantesHero />
        <QueEsTGMA />
        <BeneficiosTGMA />
        <CasoExitoTGMA />
        <ProcesoTGMANuevo />
        <FormularioPartner />
        <FinalCTATGMA />
      </main>

      <Footer />
      <StickyCTA />
    </div>
  );
};

export default Fabricantes;
