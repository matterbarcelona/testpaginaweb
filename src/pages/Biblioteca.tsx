import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StickyCTA from "@/components/StickyCTA";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Search } from "lucide-react";
import materiales from "@/data/materiales.json";
import { analyticsEvents } from "@/lib/analytics";
import { useScrollTracking } from "@/hooks/useScrollTracking";
import SEO from "@/components/SEO";

const Biblioteca = () => {
  useScrollTracking('biblioteca');
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);

  const filterOptions = [
    "Interior",
    "Exterior",
    "Reciclado",
    "LEED",
    "BREEAM",
    "FSC",
  ];

  const toggleFilter = (filter: string) => {
    const newFilters = selectedFilters.includes(filter)
      ? selectedFilters.filter((f) => f !== filter)
      : [...selectedFilters, filter];
    
    setSelectedFilters(newFilters);
    
    // Track filter usage
    analyticsEvents.bibliotecaBusqueda(searchTerm, { 
      filters: newFilters,
      filter_added: !selectedFilters.includes(filter) ? filter : undefined,
      filter_removed: selectedFilters.includes(filter) ? filter : undefined
    });
  };

  const handleSearch = (value: string) => {
    setSearchTerm(value);
    
    // Track search with debouncing (only track after 500ms of no typing)
    if (value.length >= 3) {
      const timeoutId = setTimeout(() => {
        analyticsEvents.bibliotecaBusqueda(value, { filters: selectedFilters });
      }, 500);
      return () => clearTimeout(timeoutId);
    }
  };

  const filteredMateriales = materiales.filter((material) => {
    const matchesSearch = material.nombre
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesFilters =
      selectedFilters.length === 0 ||
      selectedFilters.some(
        (filter) =>
          material.uso.includes(filter) ||
          material.certificaciones.includes(filter) ||
          material.atributos.some((attr) => attr.includes("Reciclado"))
      );
    return matchesSearch && matchesFilters;
  });

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Biblioteca de Materiales"
        description="Explora nuestra biblioteca curada de materiales sostenibles e innovadores. Muestras en 24h con Material Bank."
        path="/biblioteca"
      />
      <Navbar />

      {/* Hero */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-foreground">
              Muestra, compara y elige
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Explora nuestra biblioteca curada integrada con Material Bank para
              muestras en 24 h.
            </p>
          </div>
        </div>
      </section>

      {/* Buscador y Filtros */}
      <section className="py-12 border-t border-border">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto space-y-6">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Buscar por nombre, tipo o certificación..."
                className="pl-12 h-14 text-lg"
                value={searchTerm}
                onChange={(e) => handleSearch(e.target.value)}
                aria-label="Buscar materiales"
              />
            </div>

            <div className="flex flex-wrap gap-2">
              {filterOptions.map((filter) => (
                <Badge
                  key={filter}
                  variant={
                    selectedFilters.includes(filter) ? "default" : "outline"
                  }
                  className="cursor-pointer px-4 py-2"
                  onClick={() => toggleFilter(filter)}
                  role="button"
                  aria-pressed={selectedFilters.includes(filter)}
                  aria-label={`Filtrar por ${filter}`}
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      toggleFilter(filter);
                    }
                  }}
                >
                  {filter}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Grid de Materiales */}
      <section className="py-12">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredMateriales.map((material, index) => (
              <div
                key={material.id}
                className="group bg-card border border-border rounded-lg overflow-hidden hover:border-accent hover:-translate-y-1 hover:shadow-2xl transition-all duration-300"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <div className="aspect-square bg-muted overflow-hidden">
                  <div className="w-full h-full bg-gradient-to-br from-muted to-muted/50 group-hover:scale-110 transition-transform duration-500" />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold mb-2 text-foreground group-hover:text-accent transition-colors duration-300">
                    {material.nombre}
                  </h3>
                  <div className="space-y-2 mb-4">
                    {material.atributos.slice(0, 3).map((attr, i) => (
                      <p key={i} className="text-sm text-[#E2E2E2]">
                        • {attr}
                      </p>
                    ))}
                  </div>
                  <Button className="w-full group/btn" size="sm">
                    <span>Pedir muestra</span>
                    <span className="inline-block transition-transform group-hover/btn:translate-x-1 ml-1">→</span>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cómo pedir muestra */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-foreground">
            Cómo pedir muestra
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-accent/10 text-accent flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="text-xl font-semibold mb-2 text-foreground">
                Selecciona
              </h3>
              <p className="text-muted-foreground">
                Elige los materiales que necesitas desde nuestro catálogo
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-accent/10 text-accent flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="text-xl font-semibold mb-2 text-foreground">
                Confirma
              </h3>
              <p className="text-muted-foreground">
                Completa tu solicitud con datos de envío
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-accent/10 text-accent flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="text-xl font-semibold mb-2 text-foreground">
                Recibe en 24 h
              </h3>
              <p className="text-muted-foreground">
                Tu muestra llega lista para evaluar
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Material Bank */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
              Integración Material Bank
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Accede a miles de materiales adicionales con entrega en 24 h
              gracias a nuestra integración con Material Bank.
            </p>
            <Button size="lg">Explorar Material Bank</Button>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
            ¿Necesitas asesoramiento?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Nuestro equipo puede ayudarte a elegir los materiales perfectos para
            tu proyecto.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg">Solicitar muestra</Button>
            <Button variant="secondary" size="lg">
              Reservar visita
            </Button>
          </div>
        </div>
      </section>

      <Footer />
      <StickyCTA />
    </div>
  );
};

export default Biblioteca;
