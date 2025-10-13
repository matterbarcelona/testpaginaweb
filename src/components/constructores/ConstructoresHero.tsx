import { Button } from "@/components/ui/button";
import { analyticsEvents } from "@/lib/analytics";
import heroImage from "@/assets/hero-constructores.jpg";

const ConstructoresHero = () => {
  const scrollToForm = () => {
    const form = document.getElementById('presupuesto-form');
    if (form) {
      form.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      className="relative py-20 md:py-32 lg:py-40 overflow-hidden"
      aria-label="Hero Constructores"
    >
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Obra con materiales premium" 
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-background/70" />
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl animate-fade-in-up">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-foreground text-balance tracking-tight">
            Materiales de confianza. Servicio técnico garantizado.
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-10 leading-relaxed max-w-3xl font-light">
            Simplificamos la gestión de materiales: cotización, suministro y entrega a obra, todo desde un único interlocutor.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              size="lg" 
              className="group hover:scale-105 transition-transform duration-300"
              onClick={() => {
                analyticsEvents.ctaSolicitarPresupuesto('hero_constructores');
                scrollToForm();
              }}
              aria-label="Solicitar presupuesto de materiales"
            >
              Solicitar presupuesto
              <span className="inline-block transition-transform group-hover:translate-x-1 ml-2">→</span>
            </Button>
            <Button 
              variant="secondary" 
              size="lg" 
              className="hover:scale-105 transition-transform duration-300"
              onClick={() => {
                analyticsEvents.ctaReservarVisita('hero_constructores');
                window.location.href = '/contacto';
              }}
              aria-label="Hablar con un técnico especializado"
            >
              Hablar con un técnico
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConstructoresHero;
