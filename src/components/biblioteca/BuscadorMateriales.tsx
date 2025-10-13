import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import { analyticsEvents } from "@/lib/analytics";
import materiales from "@/data/materiales.json";

const BuscadorMateriales = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);

  const filterOptions = {
    "Tipo": ["Interior", "Exterior"],
    "Características": ["Acústica", "Antideslizante", "Reciclado"],
    "Certificaciones": ["LEED", "WELL", "BREEAM", "FSC", "Cradle to Cradle"],
  };

  const allFilters = Object.values(filterOptions).flat();

  const toggleFilter = (filter: string) => {
    const newFilters = selectedFilters.includes(filter)
      ? selectedFilters.filter((f) => f !== filter)
      : [...selectedFilters, filter];
    
    setSelectedFilters(newFilters);
    analyticsEvents.bibliotecaBusqueda(searchTerm, { filters: newFilters });
  };

  const handleSearch = (value: string) => {
    setSearchTerm(value);
    if (value.length >= 3) {
      analyticsEvents.bibliotecaBusqueda(value, { filters: selectedFilters });
    }
  };

  const filteredMateriales = materiales.filter((material) => {
    const matchesSearch = searchTerm.length === 0 || 
      material.nombre.toLowerCase().includes(searchTerm.toLowerCase()) ||
      material.tipo.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesFilters = selectedFilters.length === 0 ||
      selectedFilters.some((filter) =>
        material.uso.includes(filter) ||
        material.certificaciones.includes(filter) ||
        material.atributos.some((attr) => attr.toLowerCase().includes(filter.toLowerCase()))
      );
    
    return matchesSearch && matchesFilters;
  });

  return (
    <section id="buscador" className="py-20 bg-card scroll-mt-20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-foreground text-balance">
          Encuentra el material perfecto para tu proyecto.
        </h2>
        
        {/* Search input */}
        <div className="max-w-3xl mx-auto mt-12 mb-8">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground w-5 h-5" />
            <Input
              type="text"
              placeholder="Busca por tipo, uso o certificación..."
              className="pl-12 h-14 text-lg bg-background"
              value={searchTerm}
              onChange={(e) => handleSearch(e.target.value)}
              aria-label="Buscar materiales"
            />
          </div>
        </div>

        {/* Filters */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="space-y-4">
            {Object.entries(filterOptions).map(([category, filters]) => (
              <div key={category}>
                <p className="text-sm text-muted-foreground mb-2 font-medium">{category}</p>
                <div className="flex flex-wrap gap-2">
                  {filters.map((filter) => (
                    <Badge
                      key={filter}
                      variant={selectedFilters.includes(filter) ? "default" : "outline"}
                      className="cursor-pointer px-4 py-2 hover:scale-105 transition-transform"
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
            ))}
          </div>
        </div>

        {/* Results count */}
        <div className="max-w-6xl mx-auto mb-6">
          <p className="text-sm text-muted-foreground">
            {filteredMateriales.length} materiales encontrados
          </p>
        </div>

        {/* Materials grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {filteredMateriales.map((material, index) => (
            <div
              key={material.id}
              className="group bg-background border border-border rounded-lg overflow-hidden hover:border-accent hover:-translate-y-1 hover:shadow-xl transition-all duration-300 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <div className="aspect-square bg-muted overflow-hidden relative">
                <div className="w-full h-full bg-gradient-to-br from-muted to-muted/50 group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute top-3 right-3">
                  {material.certificaciones.slice(0, 1).map((cert) => (
                    <Badge key={cert} variant="secondary" className="text-xs">
                      {cert}
                    </Badge>
                  ))}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold mb-2 text-foreground group-hover:text-accent transition-colors duration-300">
                  {material.nombre}
                </h3>
                <div className="space-y-1 mb-4 text-sm text-muted-foreground">
                  <p>Tipo: {material.tipo}</p>
                  <p>Uso: {material.uso}</p>
                  {material.atributos[0] && <p>• {material.atributos[0]}</p>}
                </div>
                <Button 
                  className="w-full group/btn hover:scale-105 transition-transform duration-300" 
                  size="sm"
                  onClick={() => {
                    analyticsEvents.ctaSolicitarMuestra(`material_${material.id}`);
                    const form = document.getElementById('sample-form');
                    if (form) form.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  <span>Pedir muestra</span>
                  <span className="inline-block transition-transform group-hover/btn:translate-x-1 ml-1">→</span>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BuscadorMateriales;
