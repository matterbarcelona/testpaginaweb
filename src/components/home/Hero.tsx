import { Button } from "@/components/ui/button";
import { analyticsEvents } from "@/lib/analytics";
import heroImageWebP from "@/assets/hero-home.webp";
import heroImage from "@/assets/hero-home.jpg";

const Hero = () => {
  return (
    <section 
      id="hero"
      className="relative min-h-[85vh] flex items-center overflow-hidden" 
      aria-labelledby="hero-heading"
    >
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <picture>
          <source srcSet={heroImageWebP} type="image/webp" />
          <img 
            src={heroImage} 
            alt="Materioteca Matter Group con materiales de arquitectura e interiorismo" 
            className="w-full h-full object-cover opacity-50"
            loading="eager"
            decoding="async"
          />
        </picture>
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-highlight/70 to-background/40" />
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl animate-section">

          <h1 id="hero-heading" className="text-h1 font-bold mb-6 text-foreground text-balance tracking-tight leading-tight">
            Donde los materiales inspiran, conectan y se transforman en proyectos reales.
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-10 leading-relaxed max-w-3xl">
            Somos el hub que une a arquitectos, fabricantes y constructores para que la innovación fluya del concepto a la obra.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Button 
              size="lg" 
              className="group"
              onClick={() => {
                analyticsEvents.trackEvent('cta_click', { 
                  label: 'Explorar materiales (+900)',
                  location: 'hero_home',
                  type: 'primary'
                });
                analyticsEvents.ctaSolicitarMuestra('hero_home');
                window.location.href = '/biblioteca';
              }}
              aria-label="Explorar más de 900 materiales en nuestra biblioteca"
            >
              Explorar materiales <span className="text-sm opacity-80">(+900)</span>
              <span className="inline-block transition-transform group-hover:translate-x-1 ml-2" aria-hidden="true">→</span>
            </Button>
            <Button 
              variant="secondary" 
              size="lg"
              onClick={() => {
                analyticsEvents.trackEvent('cta_click', { 
                  label: 'Experto (24h)',
                  location: 'hero_home',
                  type: 'secondary'
                });
                analyticsEvents.ctaReservarVisita('hero_home');
                window.location.href = '/contacto';
              }}
              aria-label="Hablar con un experto, respuesta en 24 horas"
            >
              Hablar con un experto <span className="text-sm opacity-80">(24h)</span>
            </Button>
          </div>
          
          {/* Métricas */}
          <div className="flex flex-wrap gap-4 md:gap-6 text-sm text-muted-foreground animate-section stagger-2 pt-8 border-t border-line/50">
            <span className="hover:text-accent transition-colors cursor-default">+4.000 proyectos asesorados</span>
            <span className="hidden sm:inline text-line" aria-hidden="true">·</span>
            <span className="hover:text-accent transition-colors cursor-default">+900 fabricantes</span>
            <span className="hidden sm:inline text-line" aria-hidden="true">·</span>
            <span className="hover:text-accent transition-colors cursor-default">3 sedes: Barcelona · Madrid · Sotogrande</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
