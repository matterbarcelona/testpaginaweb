import { Button } from "@/components/ui/button";
import { Package, Clock, Leaf } from "lucide-react";
import { analyticsEvents } from "@/lib/analytics";

const MaterialBankIntegracion = () => {
  return (
    <section 
      id="material-bank" 
      className="section-spacing bg-background"
      aria-labelledby="material-bank-heading"
    >
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 
            id="material-bank-heading" 
            className="text-h2 font-bold mb-6 text-foreground text-center text-balance"
          >
            Material Bank x Matter
          </h2>
          <p className="text-xl text-muted-foreground mb-6 text-center max-w-3xl mx-auto leading-relaxed">
            Solicita muestras en 24 h gracias a nuestra integración con Material Bank: un único envío, menor impacto y máxima eficiencia.
          </p>
          
          {/* Callout */}
          <div className="flex flex-wrap items-center justify-center gap-3 md:gap-4 px-6 py-3 mb-12 bg-accent/10 border border-accent/30 rounded-xl text-sm font-medium text-accent mx-auto max-w-2xl">
            <span className="flex items-center gap-1.5">⚡ Entrega 24h</span>
            <span className="w-1 h-1 rounded-full bg-accent/50 hidden sm:block" aria-hidden="true"></span>
            <span className="flex items-center gap-1.5">📦 Un único envío</span>
            <span className="w-1 h-1 rounded-full bg-accent/50 hidden sm:block" aria-hidden="true"></span>
            <span className="flex items-center gap-1.5">🌱 Menor impacto</span>
          </div>

          {/* Visual representation */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="flex flex-col items-center text-center p-8 bg-surface border-2 border-line rounded-xl hover:border-accent/50 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mb-4 border-2 border-accent/20">
                <Clock className="w-8 h-8 text-accent" aria-hidden="true" />
              </div>
              <h3 className="text-lg font-bold mb-2 text-foreground">24 horas</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">Muestras en tu estudio al día siguiente</p>
            </div>

            <div className="flex flex-col items-center text-center p-8 bg-surface border-2 border-line rounded-xl hover:border-accent/50 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mb-4 border-2 border-accent/20">
                <Package className="w-8 h-8 text-accent" aria-hidden="true" />
              </div>
              <h3 className="text-lg font-bold mb-2 text-foreground">Un único envío</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">Consolidamos todas tus muestras</p>
            </div>

            <div className="flex flex-col items-center text-center p-8 bg-surface border-2 border-line rounded-xl hover:border-accent/50 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mb-4 border-2 border-accent/20">
                <Leaf className="w-8 h-8 text-accent" aria-hidden="true" />
              </div>
              <h3 className="text-lg font-bold mb-2 text-foreground">Menor impacto</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">Máxima eficiencia y sostenibilidad</p>
            </div>
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg"
              className="hover:scale-105 transition-transform duration-300"
              onClick={() => {
                analyticsEvents.trackEvent('cta_click', { 
                  label: 'Explorar biblioteca MB',
                  location: 'material_bank',
                  type: 'primary'
                });
                analyticsEvents.ctaSolicitarMuestra('material_bank_section');
                window.location.href = '/biblioteca';
              }}
              aria-label="Explorar biblioteca de materiales de Material Bank"
            >
              Explorar biblioteca
            </Button>
            <Button 
              variant="secondary" 
              size="lg"
              className="hover:scale-105 transition-transform duration-300"
              onClick={() => {
                analyticsEvents.trackEvent('cta_click', { 
                  label: 'Ver cómo funciona MB (30s)',
                  location: 'material_bank',
                  type: 'secondary'
                });
                window.location.href = '/biblioteca#mb-demo';
              }}
              aria-label="Ver demostración de cómo funciona Material Bank en 30 segundos"
            >
              Cómo funciona <span className="text-sm opacity-80">(30s)</span>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MaterialBankIntegracion;
