import { Button } from "@/components/ui/button";
import { Truck, Wrench, Clock } from "lucide-react";
import { analyticsEvents } from "@/lib/analytics";

const QueOfrecemos = () => {
  const servicios = [
    {
      icon: Truck,
      title: "Suministro integral de materiales",
      description: "Consolidamos pedidos de múltiples marcas y gestionamos la entrega coordinada a obra.",
    },
    {
      icon: Wrench,
      title: "Soporte técnico especializado",
      description: "Acompañamos cada fase: prescripción, equivalencias, instalación y postventa.",
    },
    {
      icon: Clock,
      title: "Logística coordinada",
      description: "Cumplimos plazos críticos con seguimiento en tiempo real.",
    },
  ];

  return (
    <section className="py-20 md:py-32 bg-card">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-foreground text-balance">
          Suministro integral y soporte técnico en cada proyecto.
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mt-16 max-w-5xl mx-auto">
          {servicios.map((servicio, index) => {
            const Icon = servicio.icon;
            return (
              <div
                key={index}
                className="group text-center animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-16 h-16 rounded-xl bg-accent/10 flex items-center justify-center mx-auto mb-6 group-hover:bg-accent/20 transition-all duration-300 group-hover:scale-110">
                  <Icon className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-foreground group-hover:text-accent transition-colors duration-300">
                  {servicio.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {servicio.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <Button
            size="lg"
            variant="secondary"
            className="hover:scale-105 transition-transform duration-300"
            onClick={() => {
              analyticsEvents.ctaSolicitarMuestra('que_ofrecemos_constructores');
              window.location.href = '/biblioteca';
            }}
          >
            Solicitar catálogo de materiales
          </Button>
        </div>
      </div>
    </section>
  );
};

export default QueOfrecemos;
