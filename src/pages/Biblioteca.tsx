import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StickyCTA from "@/components/StickyCTA";
import ScrollProgress from "@/components/ScrollProgress";
import SEO from "@/components/SEO";
import Breadcrumbs from "@/components/Breadcrumbs";
import BibliotecaHero from "@/components/biblioteca/BibliotecaHero";
import BuscadorMateriales from "@/components/biblioteca/BuscadorMateriales";
import ComoPedirMuestra from "@/components/biblioteca/ComoPedirMuestra";
import MaterialBankIntegracion from "@/components/biblioteca/MaterialBankIntegracion";
import MaterialBankDemo from "@/components/biblioteca/MaterialBankDemo";
import CategoriasDestacadas from "@/components/biblioteca/CategoriasDestacadas";
import FormularioMuestra from "@/components/biblioteca/FormularioMuestra";
import FinalCTA from "@/components/biblioteca/FinalCTA";
import { useScrollTracking } from "@/hooks/useScrollTracking";

const Biblioteca = () => {
  useScrollTracking('biblioteca');
  
  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Biblioteca de materiales para arquitectura"
        description="Explora, compara y solicita materiales en 24 h. Biblioteca Matter integrada con Material Bank para arquitectos e interioristas."
        path="/biblioteca"
      />
      <ScrollProgress />
      <Navbar />
      <Breadcrumbs />

      <main id="main-content">
        <BibliotecaHero />
        <BuscadorMateriales />
        <ComoPedirMuestra />
        <MaterialBankIntegracion />
        <MaterialBankDemo />
        <CategoriasDestacadas />
        <FormularioMuestra />
        <FinalCTA />
      </main>

      <Footer />
      <StickyCTA />
    </div>
  );
};

export default Biblioteca;
