import { Button } from "@/components/ui/button";
import { analyticsEvents } from "@/lib/analytics";

const FinalCTA = () => {
  const scrollToForm = () => {
    const form = document.getElementById('presupuesto-form');
    if (form) {
      form.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-foreground text-balance">
            La forma más eficiente de gestionar tus materiales.
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground mb-10 leading-relaxed">
            Centraliza tus pedidos, reduce tiempos y garantiza calidad con Matter Group.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="hover:scale-105 transition-transform duration-300"
              onClick={() => {
                analyticsEvents.ctaSolicitarPresupuesto('final_cta_constructores');
                scrollToForm();
              }}
              aria-label="Solicitar presupuesto"
            >
              Solicitar presupuesto
            </Button>
            <Button 
              variant="secondary" 
              size="lg" 
              className="hover:scale-105 transition-transform duration-300"
              onClick={() => {
                window.location.href = '/proyectos';
              }}
              aria-label="Conocer nuestros proyectos"
            >
              Conocer nuestros proyectos
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
