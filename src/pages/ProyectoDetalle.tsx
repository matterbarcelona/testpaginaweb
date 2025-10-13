import { useParams, Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StickyCTA from "@/components/StickyCTA";
import ScrollProgress from "@/components/ScrollProgress";
import SEO from "@/components/SEO";
import Breadcrumbs from "@/components/Breadcrumbs";
import RoleBadge from "@/components/ui/RoleBadge";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";
import AntesDepues from "@/components/proyectos/AntesDepues";
import FichaTecnica from "@/components/proyectos/FichaTecnica";
import ProyectoCarousel from "@/components/proyectos/ProyectoCarousel";
import PropuestaSimilarCTA from "@/components/proyectos/PropuestaSimilarCTA";
import ProyectosRelacionados from "@/components/proyectos/ProyectosRelacionados";
import proyectos from "@/data/proyectos.json";
import { analyticsEvents } from "@/lib/analytics";
import { useScrollTracking } from "@/hooks/useScrollTracking";

const ProyectoDetalle = () => {
  const { slug } = useParams();
  const proyecto = proyectos.find((p) => p.slug === slug);

  useScrollTracking(`proyecto_${slug}`);

  if (!proyecto) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="container mx-auto px-6 py-20 text-center">
          <h1 className="text-4xl font-bold mb-4 text-foreground">
            Proyecto no encontrado
          </h1>
          <Link to="/proyectos">
            <Button>Volver a proyectos</Button>
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title={`${proyecto.title} | Proyectos Matter`}
        description={proyecto.reto}
        path={`/proyectos/${proyecto.slug}`}
        type="article"
      />
      <ScrollProgress />
      <Navbar />
      <Breadcrumbs customItems={[
        { label: "Proyectos", path: "/proyectos" },
        { label: proyecto.title }
      ]} />

      {/* Hero */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-6">
          <div className="aspect-[21/9] md:aspect-[16/6] bg-muted rounded-lg mb-8 overflow-hidden">
            <div className="w-full h-full bg-gradient-to-br from-muted via-muted/70 to-accent/10" />
          </div>
          
          <div className="max-w-4xl">
            <div className="flex flex-wrap gap-2 mb-4">
              <RoleBadge 
                roles={proyecto.rol as ("Prescripción" | "Distribución")[]} 
              />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-foreground">
              {proyecto.title}
            </h1>
            <div className="flex flex-wrap gap-3 text-muted-foreground text-lg">
              <span>{proyecto.tipologia}</span>
              <span>·</span>
              <span>{proyecto.location}</span>
              <span>·</span>
              <span>{proyecto.year}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-12">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl space-y-16">
            {/* Reto */}
            <div className="animate-section">
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-foreground">
                Reto y objetivos
              </h2>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                {proyecto.reto}
              </p>
            </div>

            {/* Estrategia */}
            <div className="animate-section stagger-1">
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-foreground">
                Estrategia material
              </h2>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                {proyecto.estrategia}
              </p>
            </div>

            {/* Soluciones */}
            <div className="animate-section stagger-2">
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-foreground">
                Soluciones implementadas
              </h2>
              <div className="space-y-4">
                {proyecto.soluciones.map((sol, i) => (
                  <div
                    key={i}
                    className="border border-border rounded-lg p-6 bg-card hover:border-accent transition-smooth"
                  >
                    <h3 className="font-semibold text-lg text-foreground mb-2">
                      {sol.material}
                    </h3>
                    <p className="text-muted-foreground">{sol.aplicacion}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Resultados */}
            <div className="animate-section stagger-3">
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-foreground">
                Resultados e impacto
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {proyecto.resultados.map((resultado, i) => (
                  <div
                    key={i}
                    className="bg-card border border-border rounded-lg p-6 hover:border-accent transition-smooth"
                  >
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                      <p className="text-foreground font-medium leading-relaxed">
                        {resultado}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Galería */}
            <div className="animate-section stagger-4">
              <h2 className="text-2xl md:text-3xl font-bold mb-8 text-foreground">
                Galería del proyecto
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {proyecto.gallery.map((img, i) => (
                  <div 
                    key={i} 
                    className="aspect-[4/3] bg-muted rounded-lg overflow-hidden group"
                  >
                    <div className="w-full h-full bg-gradient-to-br from-muted via-muted/70 to-accent/10 group-hover:scale-105 transition-smooth" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Antes / Después */}
      <AntesDepues
        imagenAntes="/placeholder.svg"
        imagenDespues="/placeholder.svg"
      />

      {/* Ficha Técnica */}
      {(proyecto as any).materialesCriticos && (
        <FichaTecnica materialesCriticos={(proyecto as any).materialesCriticos} />
      )}

      {/* Carousel */}
      {(proyecto as any).carouselItems && (
        <ProyectoCarousel items={(proyecto as any).carouselItems} />
      )}

      {/* CTA Propuesta Similar */}
      <PropuestaSimilarCTA
        proyectoSlug={proyecto.slug}
        proyectoTitulo={proyecto.title}
      />

      {/* Related projects */}
      <ProyectosRelacionados 
        currentSlug={proyecto.slug} 
        tipologia={proyecto.tipologia} 
      />

      <Footer />
      <StickyCTA />
    </div>
  );
};

export default ProyectoDetalle;
