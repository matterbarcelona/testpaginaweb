import { Button } from "@/components/ui/button";
import { analyticsEvents } from "@/lib/analytics";
import heroImage from "@/assets/hero-prescriptores.jpg";

const PrescriptoresHero = () => {
  return (
    <section 
      className="relative py-20 md:py-32 lg:py-40 overflow-hidden"
      aria-label="Hero Prescriptores"
    >
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Consultoría de materiales para arquitectos" 
          className="w-full h-full object-cover opacity-15"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background/95 to-background/90" />
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl animate-fade-in-up">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-foreground text-balance tracking-tight">
            Tu socio en materialidad y especificación.
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-10 leading-relaxed max-w-3xl font-light">
            Transformamos tus ideas en materiales reales y sostenibles, con asesoramiento técnico experto desde el concepto hasta la obra.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              size="lg" 
              className="group hover:scale-105 transition-transform duration-300"
              onClick={() => {
                analyticsEvents.ctaSolicitarMuestra('hero_prescriptores');
                window.location.href = '/biblioteca';
              }}
              aria-label="Solicitar muestra gratuita de materiales"
            >
              Solicitar muestra gratuita
              <span className="inline-block transition-transform group-hover:translate-x-1 ml-2">→</span>
            </Button>
            <Button 
              variant="secondary" 
              size="lg" 
              className="hover:scale-105 transition-transform duration-300"
              onClick={() => {
                analyticsEvents.ctaReservarVisita('hero_prescriptores');
                window.location.href = '/contacto';
              }}
              aria-label="Reservar visita personalizada a materioteca"
            >
              Reservar visita personalizada
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrescriptoresHero;
