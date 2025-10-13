import { useState, useMemo } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StickyCTA from "@/components/StickyCTA";
import ScrollProgress from "@/components/ScrollProgress";
import SEO from "@/components/SEO";
import Breadcrumbs from "@/components/Breadcrumbs";
import ProyectosHero from "@/components/proyectos/ProyectosHero";
import ProyectosFiltros from "@/components/proyectos/ProyectosFiltros";
import ProyectosGrid from "@/components/proyectos/ProyectosGrid";
import ProyectosCTA from "@/components/proyectos/ProyectosCTA";
import { useScrollTracking } from "@/hooks/useScrollTracking";
import proyectosData from "@/data/proyectos.json";

const Proyectos = () => {
  useScrollTracking('proyectos');
  
  const [certificacionesFiltro, setCertificacionesFiltro] = useState<string[]>([]);
  const [impactosFiltro, setImpactosFiltro] = useState<string[]>([]);

  const handleCertificacionToggle = (cert: string) => {
    setCertificacionesFiltro(prev =>
      prev.includes(cert) ? prev.filter(c => c !== cert) : [...prev, cert]
    );
  };

  const handleImpactoToggle = (imp: string) => {
    setImpactosFiltro(prev =>
      prev.includes(imp) ? prev.filter(i => i !== imp) : [...prev, imp]
    );
  };

  const handleLimpiarFiltros = () => {
    setCertificacionesFiltro([]);
    setImpactosFiltro([]);
  };

  // Filtrar proyectos
  const proyectosFiltrados = useMemo(() => {
    return proyectosData.filter((proyecto: any) => {
      // Filtro certificaciones
      const pasaCertificacion = certificacionesFiltro.length === 0 || 
        certificacionesFiltro.some(cert => 
          proyecto.certificaciones?.includes(cert)
        );

      // Filtro impacto
      const pasaImpacto = impactosFiltro.length === 0 || 
        impactosFiltro.some(imp => 
          proyecto.impacto?.includes(imp)
        );

      return pasaCertificacion && pasaImpacto;
    });
  }, [certificacionesFiltro, impactosFiltro]);
  
  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Proyectos arquitectónicos con materiales Matter | Inspiración y resultados"
        description="Descubre proyectos reales donde Matter participó en la selección, suministro y asesoramiento técnico de materiales."
        path="/proyectos"
      />
      <ScrollProgress />
      <Navbar />
      <Breadcrumbs />

      <main id="main-content">
        <ProyectosHero />
        <ProyectosFiltros
          certificaciones={certificacionesFiltro}
          impactos={impactosFiltro}
          onCertificacionChange={handleCertificacionToggle}
          onImpactoChange={handleImpactoToggle}
          onLimpiarFiltros={handleLimpiarFiltros}
          resultadosCount={proyectosFiltrados.length}
        />
        <ProyectosGrid proyectos={proyectosFiltrados} />
        <ProyectosCTA />
      </main>

      <Footer />
      <StickyCTA />
    </div>
  );
};

export default Proyectos;
