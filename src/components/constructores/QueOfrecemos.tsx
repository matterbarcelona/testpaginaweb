import { Package, Wrench, Truck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { analyticsEvents } from "@/lib/analytics";

const QueOfrecemos = () => {
  const handleCatalogClick = () => {
    analyticsEvents.trackEvent('cta_click', {
      label: 'Solicitar catálogo profesional',
      location: 'ofrecemos_constructores',
      path: '/biblioteca'
    });
    window.location.href = '/biblioteca';
  };

  const servicios = [
    {
      icon: Package,
      title: "Suministro integral de materiales",
      description: "Consolidamos pedidos de múltiples marcas y gestionamos la entrega coordinada a obra.",
      color: "text-accent"
    },
    {
      icon: Wrench,
      title: "Soporte técnico especializado",
      description: "Asesoramiento en instalación, normativa y mantenimiento.",
      color: "text-accent"
    },
    {
      icon: Truck,
      title: "Logística coordinada y postventa",
      description: "Cumplimos plazos críticos con seguimiento en tiempo real.",
      color: "text-accent"
    }
  ];

  return (
    <section
      id="ofrecemos"
      className="section-spacing bg-surface"
      aria-labelledby="ofrecemos-heading"
    >
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 
            id="ofrecemos-heading"
            className="text-h2 font-bold text-foreground mb-6 text-balance"
          >
            Suministro integral y soporte técnico en cada proyecto
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
          {servicios.map((servicio, index) => (
            <div
              key={index}
              className="bg-background border border-line rounded-lg p-8 text-center hover:border-accent/50 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <servicio.icon className={`w-12 h-12 mx-auto mb-6 ${servicio.color}`} strokeWidth={1.5} aria-hidden="true" />
              <h3 className="text-xl font-bold text-foreground mb-4">
                {servicio.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {servicio.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button
            size="lg"
            variant="outline"
            onClick={handleCatalogClick}
            aria-label="Solicitar catálogo profesional de materiales"
          >
            Solicitar catálogo profesional
          </Button>
        </div>
      </div>
    </section>
  );
};

export default QueOfrecemos;
