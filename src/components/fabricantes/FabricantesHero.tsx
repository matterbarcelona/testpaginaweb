import { Button } from "@/components/ui/button";
import { analyticsEvents } from "@/lib/analytics";
import heroImage from "@/assets/hero-fabricantes.jpg";

const FabricantesHero = () => {
  const scrollToForm = () => {
    const form = document.getElementById('partner-form');
    if (form) {
      form.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      className="relative py-20 md:py-32 lg:py-40 overflow-hidden"
      aria-label="Hero Fabricantes"
    >
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Evento TGMA con arquitectos" 
          className="w-full h-full object-cover opacity-70"
          loading="eager"
          decoding="async"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-background/40 to-transparent" />
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl animate-fade-in-up">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-foreground text-balance tracking-tight">
            Haz visible tu marca donde se deciden los proyectos.
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-10 leading-relaxed max-w-3xl font-light">
            TGMA, la agencia de Matter Group, conecta tu marca con arquitectos e interioristas que especifican materiales cada día.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              size="lg" 
              className="group hover:scale-105 transition-transform duration-300"
              onClick={() => {
                analyticsEvents.ctaSolicitarMuestra('hero_fabricantes');
                scrollToForm();
              }}
              aria-label="Quiero ser partner TGMA"
            >
              Quiero ser partner TGMA
              <span className="inline-block transition-transform group-hover:translate-x-1 ml-2">→</span>
            </Button>
            <Button 
              variant="secondary" 
              size="lg" 
              className="hover:scale-105 transition-transform duration-300"
              onClick={() => {
                analyticsEvents.ctaReservarVisita('hero_fabricantes');
                window.location.href = '/contacto';
              }}
              aria-label="Solicitar reunión con TGMA"
            >
              Solicitar reunión
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FabricantesHero;
