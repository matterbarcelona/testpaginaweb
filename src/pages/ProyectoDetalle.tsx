import { useParams, Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StickyCTA from "@/components/StickyCTA";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft } from "lucide-react";
import proyectos from "@/data/proyectos.json";

const ProyectoDetalle = () => {
  const { slug } = useParams();
  const proyecto = proyectos.find((p) => p.slug === slug);

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
      <Navbar />

      {/* Breadcrumb */}
      <section className="py-6 border-b border-border">
        <div className="container mx-auto px-6">
          <Link
            to="/proyectos"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft size={20} />
            Volver a proyectos
          </Link>
        </div>
      </section>

      {/* Hero */}
      <section className="py-12">
        <div className="container mx-auto px-6">
          <div className="aspect-[21/9] bg-muted rounded-lg mb-8"></div>
          <div className="max-w-4xl">
            <div className="flex gap-2 mb-4">
              {proyecto.rol.map((r) => (
                <Badge key={r}>{r}</Badge>
              ))}
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
              {proyecto.title}
            </h1>
            <div className="flex flex-wrap gap-4 text-muted-foreground">
              <span>{proyecto.location}</span>
              <span>•</span>
              <span>{proyecto.studio}</span>
              <span>•</span>
              <span>{proyecto.year}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Contenido */}
      <section className="py-12">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl space-y-16">
            {/* Reto */}
            <div>
              <h2 className="text-2xl font-bold mb-4 text-foreground">
                Reto y objetivos
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {proyecto.reto}
              </p>
            </div>

            {/* Estrategia */}
            <div>
              <h2 className="text-2xl font-bold mb-4 text-foreground">
                Estrategia material
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {proyecto.estrategia}
              </p>
            </div>

            {/* Soluciones */}
            <div>
              <h2 className="text-2xl font-bold mb-4 text-foreground">
                Soluciones aplicadas
              </h2>
              <div className="space-y-4">
                {proyecto.soluciones.map((sol, i) => (
                  <div
                    key={i}
                    className="border border-border rounded-lg p-6 bg-card"
                  >
                    <h3 className="font-semibold text-foreground mb-2">
                      {sol.material}
                    </h3>
                    <p className="text-muted-foreground">{sol.aplicacion}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Resultados */}
            <div>
              <h2 className="text-2xl font-bold mb-4 text-foreground">
                Resultados
              </h2>
              <ul className="space-y-3">
                {proyecto.resultados.map((resultado, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3 text-lg text-muted-foreground"
                  >
                    <span className="text-accent mt-1">✓</span>
                    {resultado}
                  </li>
                ))}
              </ul>
            </div>

            {/* Galería */}
            <div>
              <h2 className="text-2xl font-bold mb-6 text-foreground">
                Galería
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {proyecto.gallery.map((img, i) => (
                  <div key={i} className="aspect-[4/3] bg-muted rounded-lg"></div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
            ¿Quieres algo similar?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Cuéntanos tu proyecto y trabajemos juntos para hacerlo realidad.
          </p>
          <Button size="lg">Contactar</Button>
        </div>
      </section>

      <Footer />
      <StickyCTA />
    </div>
  );
};

export default ProyectoDetalle;
