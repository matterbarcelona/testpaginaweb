import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StickyCTA from "@/components/StickyCTA";
import ScrollProgress from "@/components/ScrollProgress";
import SEO from "@/components/SEO";
import StructuredData from "@/components/StructuredData";
import Hero from "@/components/home/Hero";
import WhatIsMatter from "@/components/home/WhatIsMatter";
import Audiences from "@/components/home/Audiences";
import Process from "@/components/home/Process";
import TrustSignals from "@/components/home/TrustSignals";
import FinalCTA from "@/components/home/FinalCTA";
import { useScrollTracking } from "@/hooks/useScrollTracking";

const Index = () => {
  useScrollTracking('home');
  
  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Matter Group - Biblioteca, Consultoría y Distribución de Materiales"
        description="Matter conecta a arquitectos, marcas y constructores. Biblioteca física y digital, consultoría técnica y logística integral de materiales."
        path="/"
        keywords={[
          "materiales arquitectura",
          "biblioteca materiales",
          "Material Bank",
          "prescripción materiales",
          "consultoría arquitectura",
          "distribución materiales construcción"
        ]}
      />
      <StructuredData
        type="organization"
        data={{}}
      />
      <ScrollProgress />
      <Navbar />
      <main id="main-content">
        <Hero />
        <WhatIsMatter />
        <Audiences />
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
