import { Button } from "@/components/ui/button";
import { analyticsEvents } from "@/lib/analytics";

const FinalCTA = () => {
  return (
    <section className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-foreground text-balance">
            Convierte tus ideas en materia.
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground mb-10 leading-relaxed">
            Te acompañamos en cada fase del proyecto: inspiración, especificación y ejecución.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="hover:scale-105 transition-transform duration-300"
              onClick={() => {
                analyticsEvents.ctaSolicitarMuestra('final_cta_prescriptores');
                window.location.href = '/biblioteca';
              }}
              aria-label="Solicitar muestra de materiales"
            >
              Solicitar muestra
            </Button>
            <Button 
              variant="secondary" 
              size="lg" 
              className="hover:scale-105 transition-transform duration-300"
              onClick={() => {
                analyticsEvents.ctaReservarVisita('final_cta_prescriptores');
                window.location.href = '/contacto';
              }}
              aria-label="Agendar visita a materioteca"
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
