import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StickyCTA from "@/components/StickyCTA";
import ScrollProgress from "@/components/ScrollProgress";
import SEO from "@/components/SEO";
import StructuredData from "@/components/StructuredData";
import SkipToContent from "@/components/SkipToContent";
import Breadcrumbs from "@/components/Breadcrumbs";
import PrescriptoresHero from "@/components/prescriptores/PrescriptoresHero";
import KPIsPrescriptores from "@/components/prescriptores/KPIsPrescriptores";
import ProcesoColaboracion from "@/components/prescriptores/ProcesoColaboracion";
import ProyectosPrescriptores from "@/components/prescriptores/ProyectosPrescriptores";
import Testimonios from "@/components/prescriptores/Testimonios";
import FAQ from "@/components/prescriptores/FAQ";
import FinalCTA from "@/components/prescriptores/FinalCTA";
import { useScrollTracking } from "@/hooks/useScrollTracking";

const Prescriptores = () => {
  useScrollTracking('prescriptores');
  
  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Consultoría de materiales para arquitectos e interioristas | Matter Group"
        description="Asesoramiento técnico, materiales sostenibles, muestras en 24 h y apoyo integral a arquitectos e interioristas."
        path="/prescriptores"
        keywords={[
          "consultoría materiales arquitectos",
          "asesoramiento técnico materiales",
          "muestras materiales 24h",
          "especificación materiales",
          "certificación WELL BREEAM",
          "materiales sostenibles arquitectura"
        ]}
      />
      <StructuredData
        type="service"
        data={{
          "@context": "https://schema.org",
          "@type": "Service",
          "name": "Consultoría de materiales para arquitectos e interioristas",
          "provider": { 
            "@type": "Organization", 
            "name": "Matter Group", 
            "url": "https://mattergroup.com" 
          },
          "areaServed": "España",
          "audience": "Architects and interior designers",
          "description": "Asesoramiento técnico, materiales sostenibles, muestras en 24 h y apoyo integral a arquitectos"
        }}
      />
      <SkipToContent />
      <ScrollProgress />
      <Navbar />
      <Breadcrumbs />

      <main id="main-content">
        <PrescriptoresHero />
        <KPIsPrescriptores />
        <ProcesoColaboracion />
        <ProyectosPrescriptores />
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
