import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StickyCTA from "@/components/StickyCTA";
import ScrollProgress from "@/components/ScrollProgress";
import SEO from "@/components/SEO";
import Breadcrumbs from "@/components/Breadcrumbs";
import FabricantesHero from "@/components/fabricantes/FabricantesHero";
import QueEsTGMA from "@/components/fabricantes/QueEsTGMA";
import BeneficiosTGMA from "@/components/fabricantes/BeneficiosTGMA";
import CasoExito from "@/components/fabricantes/CasoExito";
import ProcesoTGMA from "@/components/fabricantes/ProcesoTGMA";
import FormularioPartner from "@/components/fabricantes/FormularioPartner";
import FinalCTA from "@/components/fabricantes/FinalCTA";
import { useScrollTracking } from "@/hooks/useScrollTracking";

const Fabricantes = () => {
  useScrollTracking('fabricantes');
  
  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="TGMA | Agencia de visibilidad y leads para fabricantes de materiales"
        description="TGMA, la agencia de Matter Group, posiciona marcas de materiales ante arquitectos e interioristas a través de showroom, contenidos y eventos."
        path="/fabricantes"
      />
      <ScrollProgress />
      <Navbar />
      <Breadcrumbs />

      <main id="main-content">
        <FabricantesHero />
        <QueEsTGMA />
        <BeneficiosTGMA />
        <CasoExito />
        <ProcesoTGMA />
        <FormularioPartner />
        <FinalCTA />
      </main>

      <Footer />
      <StickyCTA />
    </div>
  );
};

export default Fabricantes;
