import { Button } from "@/components/ui/button";
import { analyticsEvents } from "@/lib/analytics";

const FinalCTA = () => {
  const handleScrollToForm = () => {
    analyticsEvents.trackEvent('cta_click', {
      label: 'Empezar mi solicitud de presupuesto',
      location: 'final_cta_constructores',
      path: window.location.pathname
    });
    document.getElementById('budget-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleViewProjects = () => {
    analyticsEvents.trackEvent('cta_click', {
      label: 'Ver más proyectos de suministro',
      location: 'final_cta_constructores',
      path: '/proyectos?rol=distribucion'
    });
    window.location.href = '/proyectos?rol=distribucion';
  };

  return (
    <section 
      id="cta-constr-final"
      className="section-spacing-lg bg-background"
      aria-labelledby="cta-final-heading"
    >
      <div className="container mx-auto px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 
            id="cta-final-heading"
            className="text-h2 font-bold mb-6 text-foreground text-balance"
          >
            La forma más eficiente de gestionar tus materiales
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground mb-10 leading-relaxed text-balance">
            Centraliza pedidos, reduce tiempos y garantiza calidad con Matter Group.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              onClick={handleScrollToForm}
              aria-label="Empezar solicitud de presupuesto"
            >
              Empezar mi solicitud de presupuesto
            </Button>
            <Button 
              variant="secondary" 
              size="lg" 
              onClick={handleViewProjects}
              aria-label="Ver más proyectos de suministro"
            >
              Ver más proyectos de suministro
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
