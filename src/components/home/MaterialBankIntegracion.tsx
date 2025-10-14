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
          <p className="text-xl text-muted-foreground mb-12 text-center max-w-3xl mx-auto leading-relaxed">
            Solicita muestras en 24 h gracias a nuestra integración con Material Bank: un único envío, menor impacto y máxima eficiencia.
          </p>

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
              onClick={() => {
                analyticsEvents.ctaSolicitarMuestra('material_bank_section');
                window.location.href = '/biblioteca';
              }}
              data-analytics="cta_click"
              data-label="Explorar biblioteca - Material Bank"
              aria-label="Explorar biblioteca de materiales"
            >
              Explorar biblioteca
            </Button>
            <Button 
              variant="secondary" 
              size="lg"
              onClick={() => {
                analyticsEvents.trackEvent('mb_info_teaser_click', { location: 'home_material_bank' });
                window.location.href = '/biblioteca#mb-demo';
              }}
              data-analytics="cta_click"
              data-label="Cómo funciona Material Bank"
              aria-label="Ver cómo funciona Material Bank"
            >
              Cómo funciona
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MaterialBankIntegracion;
