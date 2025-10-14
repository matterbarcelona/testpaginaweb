import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";
import { analyticsEvents } from "@/lib/analytics";
import hotelPaxton from "@/assets/caso-hotel-paxton.jpg";
import oficinasTech from "@/assets/caso-oficinas-tech.jpg";
import viviendaCosta from "@/assets/caso-vivienda-costa.jpg";

const ProyectosPrescriptores = () => {
  const proyectos = [
    {
      id: "hotel-bcn",
      slug: "hotel-paxton-barcelona",
      titulo: "Hotel boutique BCN",
      ciudad: "Barcelona",
      tipologia: "Hospitality",
      imagen: hotelPaxton,
      descripcion: "Revestimientos sostenibles y porcelánicos técnicos",
      rol: "Prescripción"
    },
    {
      id: "oficinas-tech",
      slug: "oficinas-tech-madrid",
      titulo: "Oficinas Tech Madrid",
      ciudad: "Madrid",
      tipologia: "Offices",
      imagen: oficinasTech,
      descripcion: "Optimización acústica con materiales certificados",
      rol: "Prescripción"
    },
    {
      id: "vivienda-costa",
      slug: "vivienda-costa-brava",
      titulo: "Vivienda Costa Brava",
      ciudad: "Girona",
      tipologia: "Residential",
      imagen: viviendaCosta,
      descripcion: "Materialidad cálida y sostenible",
      rol: "Prescripción"
    }
  ];

  return (
    <section 
      id="projects-pres"
      className="py-20 md:py-32 bg-surface"
      aria-labelledby="projects-heading"
    >
      <div className="container mx-auto px-6">
        <h2 
          id="projects-heading"
          className="text-3xl md:text-5xl font-bold mb-6 text-foreground text-center text-balance"
        >
          Proyectos donde la materialidad marca la diferencia
        </h2>
        <p className="text-lg text-muted-foreground text-center mb-16 max-w-2xl mx-auto">
          Cada proyecto es único, pero todos comparten nuestra búsqueda de excelencia material
        </p>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
          {proyectos.map((proyecto) => (
            <article
              key={proyecto.id}
              className="group bg-background border border-line rounded-lg overflow-hidden hover:shadow-lg hover:shadow-accent/10 hover:-translate-y-1 transition-all duration-300"
            >
              {/* Image */}
              <div className="relative aspect-[4/3] overflow-hidden bg-muted">
                <img 
                  src={proyecto.imagen} 
                  alt={`Proyecto ${proyecto.titulo} - ${proyecto.descripcion}`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Badge Rol */}
                <div className="absolute top-4 right-4">
                  <Badge variant="secondary" className="bg-accent text-background font-medium">
                    {proyecto.rol}
                  </Badge>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3 text-sm text-muted-foreground">
                  <span>{proyecto.tipologia}</span>
                  <span>·</span>
                  <span>{proyecto.ciudad}</span>
                </div>

                <h3 className="text-xl font-semibold mb-3 text-foreground">
                  {proyecto.titulo}
                </h3>

                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                  {proyecto.descripcion}
                </p>

                <Button
                  variant="ghost"
                  className="group/btn p-0 h-auto hover:bg-transparent"
                  onClick={() => {
                    analyticsEvents.trackEvent('project_card_click', { 
                      label: proyecto.slug,
                      location: 'projects_pres'
                    });
                    window.location.href = `/proyectos/${proyecto.slug}`;
                  }}
                  data-analytics="project_card_click"
                  data-label={proyecto.slug}
                  aria-label={`Ver proyecto ${proyecto.titulo} - ${proyecto.descripcion}`}
                >
                  <span className="text-accent group-hover/btn:underline">Ver proyecto {proyecto.titulo}</span>
                  <ArrowRight className="w-4 h-4 ml-1 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </div>
            </article>
          ))}
        </div>

        {/* CTA global */}
        <div className="text-center">
          <Button
            variant="outline"
            size="lg"
            onClick={() => {
              analyticsEvents.trackEvent('cta_click', {
                label: 'Ver todos los proyectos',
                location: 'projects_pres'
              });
              window.location.href = '/proyectos?rol=prescripcion';
            }}
            data-analytics="cta_click"
            data-label="Ver todos los proyectos"
            aria-label="Ver todos los proyectos de prescripción"
          >
            Ver todos los proyectos
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProyectosPrescriptores;
