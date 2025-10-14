import { Button } from "@/components/ui/button";
import { analyticsEvents } from "@/lib/analytics";

const FinalCTA = () => {
  return (
    <section id="cta-final" className="py-20 md:py-32 bg-surface" aria-labelledby="cta-final-heading">
      <div className="container mx-auto px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 id="cta-final-heading" className="text-3xl md:text-5xl font-bold mb-6 text-foreground text-balance relative">
            <span className="relative inline-block">
              Convierte la innovación en materia.
              <span className="absolute -bottom-2 left-0 w-full h-0.5 bg-gradient-to-r from-accent/0 via-accent to-accent/0 animate-pulse" aria-hidden="true"></span>
            </span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground mb-10 leading-relaxed max-w-2xl mx-auto">
            Solicita tus muestras, agenda una visita o descubre nuestras materiotecas. 
            <span className="text-accent font-medium block mt-2">Respondemos en menos de 24 horas.</span>
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="hover:scale-105 transition-transform duration-300"
              onClick={() => {
                analyticsEvents.trackEvent('conversion', {
                  type: 'solicitar_muestra',
                  location: 'final_cta_home',
                  label: 'Solicitar muestra (24h)'
                });
                analyticsEvents.ctaSolicitarMuestra('final_cta_home');
                window.location.href = '/biblioteca';
              }}
              aria-label="Solicitar muestra de materiales con respuesta en menos de 24 horas"
            >
              Solicitar muestra <span className="text-sm opacity-80">(24h)</span>
            </Button>
            <Button 
              variant="secondary" 
              size="lg" 
              className="hover:scale-105 transition-transform duration-300"
              onClick={() => {
                analyticsEvents.trackEvent('conversion', {
                  type: 'agendar_visita',
                  location: 'final_cta_home',
                  label: 'Agendar visita'
                });
                analyticsEvents.ctaReservarVisita('final_cta_home');
                window.location.href = '/contacto';
              }}
              aria-label="Agendar visita a materioteca con respuesta en menos de 24 horas"
            >
              Agendar visita
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
