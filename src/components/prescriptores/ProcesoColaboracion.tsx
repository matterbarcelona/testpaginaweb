import { Button } from "@/components/ui/button";
import { MessageSquare, Lightbulb, Package, FileCheck, Truck } from "lucide-react";
import { analyticsEvents } from "@/lib/analytics";

const ProcesoColaboracion = () => {
  const pasos = [
    {
      icon: MessageSquare,
      title: "Brief del proyecto",
      description: "Compartimos tu visión y requisitos técnicos.",
    },
    {
      icon: Lightbulb,
      title: "Selección curada",
      description: "Te presentamos 3–5 opciones óptimas.",
    },
    {
      icon: Package,
      title: "Muestras & mockups",
      description: "Recibe las muestras en 24 h o pruébalas en showroom.",
    },
    {
      icon: FileCheck,
      title: "Especificación final",
      description: "Validamos fichas, equivalencias y presupuesto.",
    },
    {
      icon: Truck,
      title: "Acompañamiento en obra",
      description: "Garantizamos calidad y suministro sin contratiempos.",
    },
  ];

  return (
    <section className="py-20 md:py-32 bg-card">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
            De la inspiración a la instalación.
          </h2>
        </div>

        {/* Desktop: Horizontal timeline */}
        <div className="hidden lg:block">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute top-12 left-0 right-0 h-0.5 bg-border" />
            <div className="absolute top-12 left-0 h-0.5 bg-accent transition-all duration-1000" style={{ width: '100%' }} />
            
            <div className="grid grid-cols-5 gap-4">
              {pasos.map((paso, index) => {
                const Icon = paso.icon;
                return (
                  <div
                    key={index}
                    className="relative animate-fade-in-up"
                    style={{ animationDelay: `${index * 0.15}s` }}
                  >
                    <div className="flex flex-col items-center">
                      <div className="w-24 h-24 rounded-full bg-background border-2 border-accent flex items-center justify-center mb-6 z-10 group-hover:scale-110 transition-transform duration-300">
                        <Icon className="w-10 h-10 text-accent" />
                      </div>
                      <div className="text-center">
                        <h3 className="text-base font-semibold text-foreground mb-2">
                          {paso.title}
                        </h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {paso.description}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Mobile/Tablet: Vertical timeline */}
        <div className="lg:hidden space-y-8">
          {pasos.map((paso, index) => {
            const Icon = paso.icon;
            return (
              <div
                key={index}
                className="flex gap-6 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 rounded-full bg-accent/10 border-2 border-accent flex items-center justify-center">
                    <Icon className="w-8 h-8 text-accent" />
                  </div>
                </div>
                <div className="flex-1 pt-2">
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {paso.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {paso.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-16">
          <Button
            size="lg"
            className="hover:scale-105 transition-transform duration-300"
            onClick={() => {
              analyticsEvents.ctaReservarVisita('proceso_prescriptores');
              window.location.href = '/contacto';
            }}
          >
            Quiero iniciar mi proyecto con Matter
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProcesoColaboracion;
