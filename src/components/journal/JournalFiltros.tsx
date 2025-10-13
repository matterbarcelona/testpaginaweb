import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { analyticsEvents } from "@/lib/analytics";

interface JournalFiltrosProps {
  selectedCategoria: string | null;
  onCategoriaChange: (categoria: string | null) => void;
  selectedSerie: string | null;
  onSerieChange: (serie: string | null) => void;
  searchQuery: string;
  onSearchChange: (query: string) => void;
}

const categorias = ["Todos", "Productos", "Proyectos", "Entrevistas", "Eventos", "Tendencias"];
const series = ["Todas", "Tendencias 2025", "Best Practices", "Entrevistas Estudio"];

const JournalFiltros = ({ 
  selectedCategoria, 
  onCategoriaChange,
  selectedSerie,
  onSerieChange,
  searchQuery,
  onSearchChange 
}: JournalFiltrosProps) => {
  
  const handleCategoriaClick = (cat: string) => {
    const newCategoria = cat === "Todos" ? null : cat;
    onCategoriaChange(newCategoria);
    analyticsEvents.journalFilterClick(cat);
  };

  const handleSerieClick = (serie: string) => {
    const newSerie = serie === "Todas" ? null : serie;
    onSerieChange(newSerie);
    analyticsEvents.journalFilterClick(serie);
  };

  return (
    <section className="py-8 border-t border-b border-border bg-card/50">
      <div className="container mx-auto px-6">
        <div className="flex flex-col gap-6">
          {/* Search */}
          <div className="relative max-w-md">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Busca por tema, estudio o material..."
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              className="pl-10"
            />
          </div>

          {/* Categories */}
          <div>
            <p className="text-sm text-muted-foreground mb-3 font-medium">Categoría</p>
            <div className="flex flex-wrap gap-3">
              {categorias.map((cat) => (
                <Badge
                  key={cat}
                  variant={
                    (selectedCategoria === null && cat === "Todos") || 
                    selectedCategoria === cat 
                      ? "default" 
                      : "outline"
                  }
                  className="cursor-pointer px-4 py-2 text-sm"
                  onClick={() => handleCategoriaClick(cat)}
                >
                  {cat}
                </Badge>
              ))}
            </div>
          </div>

          {/* Series */}
          <div>
            <p className="text-sm text-muted-foreground mb-3 font-medium">Serie</p>
            <div className="flex flex-wrap gap-3">
              {series.map((serie) => (
                <Badge
                  key={serie}
                  variant={
                    (selectedSerie === null && serie === "Todas") || 
                    selectedSerie === serie 
                      ? "default" 
                      : "outline"
                  }
                  className="cursor-pointer px-4 py-2 text-sm"
                  onClick={() => handleSerieClick(serie)}
                >
                  {serie}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JournalFiltros;
