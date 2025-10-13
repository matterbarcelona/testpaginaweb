import { Package, Clock, Leaf, ArrowRight, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { analyticsEvents } from "@/lib/analytics";

const MaterialBankDemo = () => {
  return (
    <section 
      id="mb-demo" 
      className="py-20 md:py-32 bg-surface scroll-mt-20"
      aria-labelledby="mb-demo-heading"
    >
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 
              id="mb-demo-heading" 
              className="text-3xl md:text-5xl font-bold mb-6 text-foreground"
            >
              Cómo funciona Material Bank x Matter
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Nuestra integración con Material Bank revoluciona la forma de solicitar muestras: más rápido, más sostenible, más eficiente.
            </p>
          </div>

          {/* Proceso visual */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="relative">
              <div className="bg-background border border-line rounded-lg p-8 h-full">
                <div className="w-12 h-12 rounded-full bg-accent text-foreground flex items-center justify-center font-bold text-lg mb-6">
                  1
                </div>
                <h3 className="text-xl font-semibold mb-4 text-foreground">Selecciona tus muestras</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Explora nuestra biblioteca física en Barcelona, Madrid o Sotogrande, o navega el catálogo digital de +900 fabricantes.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2 text-sm text-muted-foreground">
                    <CheckCircle className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                    <span>Acceso a +900 fabricantes</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-muted-foreground">
                    <CheckCircle className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                    <span>Fichas técnicas completas</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-muted-foreground">
                    <CheckCircle className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                    <span>Asesoría personalizada</span>
                  </li>
                </ul>
              </div>
              {/* Arrow connector (hidden on mobile) */}
              <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                <ArrowRight className="w-8 h-8 text-accent" />
              </div>
            </div>

            <div className="relative">
              <div className="bg-background border border-line rounded-lg p-8 h-full">
                <div className="w-12 h-12 rounded-full bg-accent text-foreground flex items-center justify-center font-bold text-lg mb-6">
                  2
                </div>
                <h3 className="text-xl font-semibold mb-4 text-foreground">Consolidamos el envío</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Material Bank centraliza todas tus muestras de diferentes fabricantes en un único paquete, reduciendo impacto logístico.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2 text-sm text-muted-foreground">
                    <CheckCircle className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                    <span>Un solo envío consolidado</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-muted-foreground">
                    <CheckCircle className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                    <span>Reducción de huella de carbono</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-muted-foreground">
                    <CheckCircle className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                    <span>Embalaje optimizado</span>
                  </li>
                </ul>
              </div>
              {/* Arrow connector (hidden on mobile) */}
              <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                <ArrowRight className="w-8 h-8 text-accent" />
              </div>
            </div>

            <div className="bg-background border border-line rounded-lg p-8 h-full">
              <div className="w-12 h-12 rounded-full bg-accent text-foreground flex items-center justify-center font-bold text-lg mb-6">
                3
              </div>
              <h3 className="text-xl font-semibold mb-4 text-foreground">Recibe en 24 horas</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Tu pedido llega al siguiente día laboral directamente a tu estudio, listo para presentar al cliente o especificar.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2 text-sm text-muted-foreground">
                  <CheckCircle className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                  <span>Entrega en 24h laborables</span>
                </li>
                <li className="flex items-start gap-2 text-sm text-muted-foreground">
                  <CheckCircle className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                  <span>Tracking en tiempo real</span>
                </li>
                <li className="flex items-start gap-2 text-sm text-muted-foreground">
                  <CheckCircle className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                  <span>Sin costes de envío</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Beneficios destacados */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="bg-background/50 border border-line rounded-lg p-6 text-center">
              <Clock className="w-10 h-10 text-accent mx-auto mb-4" />
              <div className="text-3xl font-bold text-foreground mb-2">24h</div>
              <p className="text-sm text-muted-foreground">Tiempo de entrega garantizado</p>
            </div>

            <div className="bg-background/50 border border-line rounded-lg p-6 text-center">
              <Package className="w-10 h-10 text-accent mx-auto mb-4" />
              <div className="text-3xl font-bold text-foreground mb-2">1 envío</div>
              <p className="text-sm text-muted-foreground">Todas las muestras consolidadas</p>
            </div>

            <div className="bg-background/50 border border-line rounded-lg p-6 text-center">
              <Leaf className="w-10 h-10 text-accent mx-auto mb-4" />
              <div className="text-3xl font-bold text-foreground mb-2">-60%</div>
              <p className="text-sm text-muted-foreground">Reducción de emisiones de CO₂</p>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <Button 
              size="lg"
              onClick={() => {
                analyticsEvents.ctaSolicitarMuestra('mb_demo_section');
                window.location.href = '/biblioteca#solicitar-muestra';
              }}
              data-analytics="cta_click"
              data-label="Solicitar muestras ahora - MB Demo"
              aria-label="Solicitar muestras de materiales ahora"
            >
              Solicitar muestras ahora
            </Button>
            <p className="text-sm text-muted-foreground mt-4">
              ¿Tienes dudas? <a href="/contacto" className="text-accent hover:underline">Habla con un experto</a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MaterialBankDemo;
