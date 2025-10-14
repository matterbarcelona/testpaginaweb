import { Button } from "@/components/ui/button";
import { analyticsEvents } from "@/lib/analytics";

const FinalCTATGMA = () => {
  const scrollToForm = () => {
    const form = document.getElementById('partner-form');
    if (form) {
      form.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="cta-tgma-final"
      className="py-20 md:py-32 bg-background"
      aria-labelledby="cta-final-heading"
    >
      <div className="container mx-auto px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 
            id="cta-final-heading"
            className="text-3xl md:text-5xl font-bold mb-6 text-foreground text-balance"
          >
            Tu marca merece estar donde se inspiran los proyectos
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground mb-10 leading-relaxed">
            Únete al ecosistema Matter + TGMA y multiplica tu visibilidad ante arquitectos e interioristas.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="hover:scale-105 transition-transform duration-300"
              onClick={() => {
                analyticsEvents.trackEvent('cta_click', {
                  label: 'Empezar ahora con TGMA',
                  location: 'final_cta_tgma'
                });
                scrollToForm();
              }}
              data-analytics="cta_click"
              data-label="Empezar ahora con TGMA - Final"
              aria-label="Comenzar colaboración con TGMA"
            >
              Empezar ahora con TGMA
            </Button>
            <Button 
              variant="secondary" 
              size="lg" 
              className="hover:scale-105 transition-transform duration-300"
              onClick={() => {
                analyticsEvents.trackEvent('cta_click', {
                  label: 'Explorar casos de éxito',
                  location: 'final_cta_tgma'
                });
                window.location.href = '/proyectos?rol=fabricante';
              }}
              data-analytics="cta_click"
              data-label="Explorar casos de éxito - Final"
              aria-label="Explorar casos de éxito de fabricantes partners"
            >
              Explorar casos de éxito
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTATGMA;
