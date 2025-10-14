import { Button } from "@/components/ui/button";
import { Check, Clock, Package, Truck } from "lucide-react";
import { analyticsEvents } from "@/lib/analytics";

const GuiaMuestras = () => {
  const pasos = [
    {
      numero: "1",
      titulo: "Selecciona",
      descripcion: "Explora nuestra biblioteca digital o visita nuestras materiotecas en Barcelona, Madrid o Sotogrande.",
      icon: Package
    },
    {
      numero: "2",
      titulo: "Solicita",
      descripcion: "Elige hasta 10 muestras por pedido. Sin límite de solicitudes.",
      icon: Check
    },
    {
      numero: "3",
      titulo: "Recibe en 24h",
      descripcion: "Material Bank consolida el envío y lo entrega al día siguiente laboral.",
      icon: Clock
    },
    {
      numero: "4",
      titulo: "Especifica",
      descripcion: "Muestra a tu cliente, valida y especifica con seguridad.",
      icon: Truck
    }
  ];

  return (
    <section 
      id="guia-muestras"
      className="py-20 md:py-32 bg-surface"
      aria-labelledby="guia-muestras-heading"
    >
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 
              id="guia-muestras-heading"
              className="text-3xl md:text-5xl font-bold mb-6 text-foreground text-balance"
            >
              Muestras en 24 horas
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Gracias a nuestra integración con Material Bank, recibe muestras físicas al día siguiente sin coste de envío.
            </p>
          </div>

          {/* Grid de pasos */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {pasos.map((paso, index) => {
              const Icon = paso.icon;
              return (
                <div
                  key={index}
                  className="relative bg-background border border-line rounded-lg p-6 hover:border-accent/50 transition-all duration-300 hover:-translate-y-1"
                >
                  {/* Número */}
                  <div className="absolute -top-3 -left-3 w-12 h-12 rounded-full bg-accent text-background flex items-center justify-center font-bold text-lg shadow-lg">
                    {paso.numero}
                  </div>

                  {/* Icono */}
                  <div className="flex justify-center mb-4 mt-4">
                    <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center">
                      <Icon className="w-8 h-8 text-accent" aria-hidden="true" />
                    </div>
                  </div>

                  {/* Contenido */}
                  <h3 className="text-xl font-semibold text-foreground mb-3 text-center">
                    {paso.titulo}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed text-center">
                    {paso.descripcion}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Beneficios destacados - Callout */}
          <div className="bg-accent/5 border-2 border-accent/30 rounded-lg p-8 mb-8">
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-4xl font-bold text-accent mb-2">24h</div>
                <p className="text-sm text-muted-foreground font-medium">Entrega garantizada</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-accent mb-2">€0</div>
                <p className="text-sm text-muted-foreground font-medium">Sin coste de envío</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-accent mb-2">+900</div>
                <p className="text-sm text-muted-foreground font-medium">Fabricantes disponibles</p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <Button
              size="lg"
              onClick={() => {
                analyticsEvents.ctaSolicitarMuestra('guia_muestras_prescriptores');
                window.location.href = '/biblioteca';
              }}
              data-analytics="cta_click"
              data-label="Explorar biblioteca - Guía muestras"
              aria-label="Explorar biblioteca de materiales"
            >
              Explorar biblioteca
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GuiaMuestras;
