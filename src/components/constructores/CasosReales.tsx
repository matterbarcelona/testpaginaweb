import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { analyticsEvents } from "@/lib/analytics";
import hotelPaxton from "@/assets/caso-hotel-paxton.jpg";
import oficinasTech from "@/assets/caso-oficinas-tech.jpg";

const CasosReales = () => {
  const handleCaseClick = (proyecto: string) => {
    analyticsEvents.trackEvent('case_card_click', {
      label: proyecto,
      path: window.location.pathname
    });
  };

  const handleViewMore = () => {
    analyticsEvents.trackEvent('cta_click', {
      label: 'Ver más proyectos',
      location: 'casos_constructores',
      path: '/proyectos?rol=distribucion'
    });
    window.location.href = '/proyectos?rol=distribucion';
  };

  const casos = [
    {
      imagen: hotelPaxton,
      titulo: "Hotel Paxton Barcelona",
      descripcion: "Entrega escalonada de materiales en 8 semanas para 120 habitaciones.",
      badge: "Distribución",
      alt: "Proyecto Hotel Paxton Barcelona - Gestión integral de materiales"
    },
    {
      imagen: oficinasTech,
      titulo: "Oficinas Tech Madrid",
      descripcion: "Coordinación de 15 proveedores en instalación acústica y pavimentos.",
      badge: "Distribución",
      alt: "Proyecto Oficinas Tech Madrid - Coordinación de múltiples proveedores"
    }
  ];

  return (
    <section
      id="cases-constr"
      className="py-20 md:py-32 bg-background"
      aria-labelledby="cases-heading"
    >
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 
            id="cases-heading"
            className="text-3xl md:text-5xl font-bold text-foreground mb-6"
          >
            Proyectos donde gestionamos el suministro completo
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-12">
          {casos.map((caso, index) => (
            <div
              key={index}
              className="group bg-surface border border-line rounded-lg overflow-hidden hover:border-accent/50 transition-all duration-300 cursor-pointer animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
              onClick={() => handleCaseClick(caso.titulo)}
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={caso.imagen}
                  alt={caso.alt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute top-4 left-4">
                  <Badge variant="secondary" className="bg-accent/90 text-background">
                    {caso.badge}
                  </Badge>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-3">
                  {caso.titulo}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {caso.descripcion}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button
            size="lg"
            variant="outline"
            onClick={handleViewMore}
            aria-label="Ver todos los proyectos de distribución"
          >
            Ver más proyectos
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CasosReales;
