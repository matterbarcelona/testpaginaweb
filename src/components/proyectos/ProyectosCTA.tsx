import { Button } from "@/components/ui/button";
import { analyticsEvents } from "@/lib/analytics";

const ProyectosCTA = () => {
  return (
    <section className="py-20 md:py-32 bg-card">
      <div className="container mx-auto px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-foreground text-balance">
            ¿Tienes un proyecto en marcha?
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground mb-10 leading-relaxed">
            Te ayudamos a definir materiales y asegurar su entrega a tiempo.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="hover:scale-105 transition-transform duration-300"
              onClick={() => {
                analyticsEvents.ctaReservarVisita('proyectos_cta');
                window.location.href = '/contacto';
              }}
              aria-label="Solicitar asesoramiento"
            >
              Solicitar asesoramiento
            </Button>
            <Button 
              variant="secondary" 
              size="lg" 
              className="hover:scale-105 transition-transform duration-300"
              onClick={() => {
                window.location.href = '/biblioteca';
              }}
              aria-label="Explorar materiales"
            >
              Explorar materiales
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProyectosCTA;
