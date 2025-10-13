import { Button } from "@/components/ui/button";
import { analyticsEvents } from "@/lib/analytics";

const FinalCTA = () => {
  const scrollToForm = () => {
    const form = document.getElementById('partner-form');
    if (form) {
      form.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-foreground text-balance">
            Tu marca merece estar donde se inspiran los proyectos.
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground mb-10 leading-relaxed">
            Únete al ecosistema Matter + TGMA y multiplica tu visibilidad ante arquitectos e interioristas.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="hover:scale-105 transition-transform duration-300"
              onClick={() => {
                analyticsEvents.ctaSolicitarMuestra('final_cta_fabricantes');
                scrollToForm();
              }}
              aria-label="Solicitar propuesta TGMA"
            >
              Solicitar propuesta TGMA
            </Button>
            <Button 
              variant="secondary" 
              size="lg" 
              className="hover:scale-105 transition-transform duration-300"
              onClick={() => {
                window.location.href = '/proyectos';
              }}
              aria-label="Conocer casos de éxito"
            >
              Conocer casos de éxito
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
