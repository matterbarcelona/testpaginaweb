import { useState } from "react";
import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import RoleBadge from "@/components/ui/RoleBadge";
import proyectos from "@/data/proyectos.json";

const ProyectosGrid = () => {
  const [selectedTipologia, setSelectedTipologia] = useState<string>("Todos");
  const [selectedRol, setSelectedRol] = useState<string>("Todos");

  const tipologias = ["Todos", ...Array.from(new Set(proyectos.map(p => p.tipologia)))];
  const roles = ["Todos", "Prescripción", "Distribución", "Ambas"];

  const filteredProyectos = proyectos.filter((proyecto) => {
    const matchesTipologia = selectedTipologia === "Todos" || proyecto.tipologia === selectedTipologia;
    const matchesRol = selectedRol === "Todos" || 
      (selectedRol === "Ambas" ? proyecto.rol.length > 1 : proyecto.rol.includes(selectedRol));
    return matchesTipologia && matchesRol;
  });

  const trackFilter = (type: string, value: string) => {
    if (typeof window !== 'undefined') {
      const gtag = (window as any).gtag;
      if (typeof gtag === 'function') {
        gtag('event', 'filter_projects_click', {
          filter_type: type,
          filter_value: value,
        });
      }
    }
  };

  return (
    <section id="proyectos-grid" className="py-20 bg-background scroll-mt-20">
      <div className="container mx-auto px-6">
        {/* Filters */}
        <div className="mb-12 space-y-6">
          {/* Tipología */}
          <div>
            <p className="text-sm text-muted-foreground mb-3 font-medium">Tipología</p>
            <div className="flex flex-wrap gap-2">
              {tipologias.map((tip) => (
                <Badge
                  key={tip}
                  variant={selectedTipologia === tip ? "default" : "outline"}
                  className="cursor-pointer px-4 py-2 hover:scale-105 transition-transform"
                  onClick={() => {
                    setSelectedTipologia(tip);
                    trackFilter('tipologia', tip);
                  }}
                  role="button"
                  aria-pressed={selectedTipologia === tip}
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      setSelectedTipologia(tip);
                      trackFilter('tipologia', tip);
                    }
                  }}
                >
                  {tip}
                </Badge>
              ))}
            </div>
          </div>

          {/* Rol de Matter */}
          <div>
            <p className="text-sm text-muted-foreground mb-3 font-medium">Rol de Matter</p>
            <div className="flex flex-wrap gap-2">
              {roles.map((rol) => (
                <Badge
                  key={rol}
                  variant={selectedRol === rol ? "default" : "outline"}
                  className="cursor-pointer px-4 py-2 hover:scale-105 transition-transform"
                  onClick={() => {
                    setSelectedRol(rol);
                    trackFilter('rol', rol);
                  }}
                  role="button"
                  aria-pressed={selectedRol === rol}
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      setSelectedRol(rol);
                      trackFilter('rol', rol);
                    }
                  }}
                >
                  {rol}
                </Badge>
              ))}
            </div>
          </div>
        </div>

        {/* Results count */}
        <div className="mb-6">
          <p className="text-sm text-muted-foreground">
            {filteredProyectos.length} proyecto{filteredProyectos.length !== 1 ? 's' : ''} encontrado{filteredProyectos.length !== 1 ? 's' : ''}
          </p>
        </div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProyectos.map((proyecto, index) => (
            <Link
              key={proyecto.id}
              to={`/proyectos/${proyecto.slug}`}
              className="group animate-section"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <div className="bg-card border border-border rounded-lg overflow-hidden hover:border-accent transition-smooth">
                {/* Image with overlay */}
                <div className="aspect-[4/3] bg-muted overflow-hidden relative">
                  <div className="w-full h-full bg-gradient-to-br from-muted to-muted/50 group-hover:scale-110 transition-smooth" />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-smooth flex items-end p-6">
                    <span className="text-accent font-medium">Descubrir más →</span>
                  </div>
                </div>
                
                {/* Content */}
                <div className="p-6">
                  <div className="flex flex-wrap gap-2 mb-3">
                    <RoleBadge 
                      roles={proyecto.rol as ("Prescripción" | "Distribución")[]} 
                    />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-foreground group-hover:text-accent transition-smooth">
                    {proyecto.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {proyecto.tipologia} – {proyecto.location}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProyectosGrid;
