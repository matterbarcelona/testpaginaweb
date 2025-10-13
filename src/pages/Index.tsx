import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StickyCTA from "@/components/StickyCTA";
import ScrollProgress from "@/components/ScrollProgress";
import SEO from "@/components/SEO";
import StructuredData from "@/components/StructuredData";
import SkipToContent from "@/components/SkipToContent";
import Hero from "@/components/home/Hero";
import QueEsMatter from "@/components/home/QueEsMatter";
import MaterialBankIntegracion from "@/components/home/MaterialBankIntegracion";
import Audiences from "@/components/home/Audiences";
import CasosExito from "@/components/home/CasosExito";
import Process from "@/components/home/Process";
import TrustSignals from "@/components/home/TrustSignals";
import FinalCTA from "@/components/home/FinalCTA";
import { useScrollTracking } from "@/hooks/useScrollTracking";

const Index = () => {
  useScrollTracking('home');
  
  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Matter Group | Biblioteca, Consultoría y Distribución de Materiales"
        description="Conectamos arquitectos, marcas y constructores. Biblioteca integrada con Material Bank, consultoría técnica y distribución a obra."
        path="/"
        keywords={[
          "materiales arquitectura",
          "biblioteca materiales",
          "Material Bank",
          "prescripción materiales",
          "consultoría arquitectura",
          "distribución materiales construcción",
          "TGMA",
          "materiotecas"
        ]}
      />
      <StructuredData
        type="organization"
        data={{
          name: "Matter Group",
          url: "https://mattergroup.com",
          logo: "https://mattergroup.com/logo.png",
          description: "Conectamos arquitectos, marcas y constructores con materiales innovadores.",
          sameAs: [
            "https://www.linkedin.com/company/matter-group",
            "https://www.instagram.com/matter.group"
          ]
        }}
      />
      <SkipToContent />
      <ScrollProgress />
      <Navbar />
      <main id="main-content">
        <Hero />
        <QueEsMatter />
        <MaterialBankIntegracion />
        <Audiences />
        <CasosExito />
        <Process />
        <TrustSignals />
        <FinalCTA />
      </main>
      <Footer />
      <StickyCTA />
    </div>
  );
};

export default Index;
