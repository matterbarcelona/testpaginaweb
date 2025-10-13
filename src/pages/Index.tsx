import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StickyCTA from "@/components/StickyCTA";
import ScrollProgress from "@/components/ScrollProgress";
import SEO from "@/components/SEO";
import Hero from "@/components/home/Hero";
import Audiences from "@/components/home/Audiences";
import Process from "@/components/home/Process";
import FinalCTA from "@/components/home/FinalCTA";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Matter Group - Materiales para Arquitectura e Interiorismo"
        description="Unimos arquitectos, marcas y constructores con materiales curados. Muestras en 24h, asesoramiento experto y suministro integral."
        path="/"
      />
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <Audiences />
        <Process />
        <FinalCTA />
      </main>
      <Footer />
      <StickyCTA />
    </div>
  );
};

export default Index;
