import { Button } from "@/components/ui/button";
import { analyticsEvents } from "@/lib/analytics";

const FinalCTA = () => {
  return (
    <section className="py-20 md:py-32 bg-card">
      <div className="container mx-auto px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-foreground text-balance">
            ¿Tienes un proyecto? Cuéntanoslo
          </h2>
          <p className="text-lg md:text-xl text-[#E2E2E2] mb-10 leading-relaxed">
            Más de 900 fabricantes internacionales confían en Matter para conectar con los mejores proyectos.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="hover:scale-105 transition-transform duration-300"
              onClick={() => {
                analyticsEvents.ctaSolicitarMuestra('final_cta_home');
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
                analyticsEvents.ctaSolicitarPresupuesto('final_cta_home');
                window.location.href = '/contacto';
              }}
              aria-label="Solicitar presupuesto para tu proyecto"
            >
              Solicitar presupuesto
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
