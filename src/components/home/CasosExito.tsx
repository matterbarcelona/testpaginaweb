import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";
import { analyticsEvents } from "@/lib/analytics";

const CasosExito = () => {
  const casos = [
    {
      id: "hotel-paxton",
      slug: "hotel-paxton-barcelona",
      titulo: "Hotel Paxton Barcelona",
      imagen: "/placeholder.svg",
      roles: ["Prescripción", "Distribución"],
      dato: "120 habitaciones suministradas en 8 semanas",
      descripcion: "Coordinación integral de materiales premium para un hotel boutique en el centro de Barcelona."
    },
    {
      id: "oficinas-tech",
      slug: "oficinas-tech-madrid",
      titulo: "Oficinas Tech Madrid",
      imagen: "/placeholder.svg",
      roles: ["Distribución"],
      dato: "Coordinación de 15 proveedores; −25% tiempo de instalación",
      descripcion: "Suministro y logística optimizada para espacios de trabajo flexibles y modernos."
    },
    {
      id: "vivienda-costa",
      slug: "vivienda-costa-brava",
      titulo: "Vivienda Costa Brava",
      imagen: "/placeholder.svg",
      roles: ["Prescripción"],
      dato: "Materialidad cálida y sostenible; maderas certificadas",
      descripcion: "Curaduría de materiales naturales y sostenibles para una vivienda unifamiliar."
    }
  ];

  return (
    <section 
      id="cases" 
      className="py-20 md:py-32 bg-background"
      aria-labelledby="cases-heading"
    >
      <div className="container mx-auto px-6">
        <h2 
          id="cases-heading" 
          className="text-3xl md:text-5xl font-bold mb-16 text-foreground text-center"
        >
          Casos de éxito
        </h2>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {casos.map((caso) => (
            <article
              key={caso.id}
              className="group bg-surface border border-line rounded-lg overflow-hidden hover:shadow-lg hover:shadow-accent/10 hover:-translate-y-1 transition-all duration-300"
            >
              {/* Image */}
              <div className="relative aspect-[4/3] overflow-hidden bg-muted">
                <img 
                  src={caso.imagen} 
                  alt={`Proyecto ${caso.titulo}`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Role badges */}
                <div className="flex flex-wrap gap-2 mb-3">
                  {caso.roles.map((rol) => (
                    <Badge 
                      key={rol} 
                      variant="secondary" 
                      className="text-xs"
                    >
                      {rol}
                    </Badge>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-3 text-foreground">
                  {caso.titulo}
                </h3>

                <p className="text-accent font-medium mb-3 text-sm">
                  {caso.dato}
                </p>

                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                  {caso.descripcion}
                </p>

                <Button
                  variant="ghost"
                  className="group/btn p-0 h-auto hover:bg-transparent"
                  onClick={() => {
                    analyticsEvents.trackEvent('case_card_click', { 
                      project: caso.titulo,
                      location: 'home_cases'
                    });
                    window.location.href = `/proyectos/${caso.slug}`;
                  }}
                  data-analytics="case_card_click"
                  data-label={caso.titulo}
                  aria-label={`Ver proyecto ${caso.titulo}`}
                >
                  <span className="text-accent group-hover/btn:underline">Ver proyecto</span>
                  <ArrowRight className="w-4 h-4 ml-1 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CasosExito;
