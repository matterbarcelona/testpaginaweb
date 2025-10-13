import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StickyCTA from "@/components/StickyCTA";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import proyectos from "@/data/proyectos.json";

const Proyectos = () => {
  const [selectedFilter, setSelectedFilter] = useState<string | null>(null);

  const filterOptions = ["Todos", "Prescripción", "Distribución"];

  const filteredProyectos = proyectos.filter((proyecto) => {
    if (!selectedFilter || selectedFilter === "Todos") return true;
    return proyecto.rol.includes(selectedFilter);
  });

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-foreground">
              Proyectos que materializan ideas
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Casos reales donde Matter asesoró o suministró materiales.
            </p>
          </div>
        </div>
      </section>

      {/* Filtros */}
      <section className="py-8 border-t border-border">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap gap-3">
            {filterOptions.map((filter) => (
              <Badge
                key={filter}
                variant={selectedFilter === filter ? "default" : "outline"}
                className="cursor-pointer px-4 py-2"
                onClick={() => setSelectedFilter(filter)}
              >
                {filter}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Grid de Proyectos */}
      <section className="py-12">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProyectos.map((proyecto, index) => (
              <Link
                key={proyecto.id}
                to={`/proyectos/${proyecto.slug}`}
                className="group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="bg-card border border-border rounded-lg overflow-hidden hover:border-accent hover:-translate-y-2 hover:shadow-2xl transition-all duration-300">
                  <div className="aspect-[4/3] bg-muted overflow-hidden">
                    <div className="w-full h-full bg-gradient-to-br from-muted to-muted/50 group-hover:scale-110 transition-transform duration-500" />
                  </div>
                  <div className="p-6">
                    <div className="flex gap-2 mb-3">
                      {proyecto.rol.map((r) => (
                        <Badge key={r} variant="secondary" className="group-hover:bg-accent group-hover:text-accent-foreground transition-colors duration-300">
                          {r}
                        </Badge>
                      ))}
                    </div>
                    <h3 className="text-xl font-semibold mb-2 text-foreground group-hover:text-accent transition-colors duration-300">
                      {proyecto.title}
                    </h3>
                    <p className="text-sm text-[#E2E2E2]">
                      {proyecto.location} · {proyecto.year}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
            Compártenos tu proyecto
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Queremos conocer tu visión y ayudarte a hacerla realidad.
          </p>
          <Button size="lg">Contactar</Button>
        </div>
      </section>

      <Footer />
      <StickyCTA />
    </div>
  );
};

export default Proyectos;
