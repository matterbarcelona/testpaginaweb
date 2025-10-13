import { Button } from "@/components/ui/button";
import { analyticsEvents } from "@/lib/analytics";

const Hero = () => {
  return (
    <section 
      className="relative min-h-[80vh] flex items-center overflow-hidden hero-gradient" 
      aria-label="Inicio"
    >
      <div className="container mx-auto px-6 relative">
        <div className="max-w-4xl animate-section">

          <h1 className="text-[2rem] md:text-5xl lg:text-6xl font-semibold mb-6 text-foreground text-balance tracking-tight">
            Donde los materiales inspiran, conectan y se transforman en proyectos reales.
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-10 leading-relaxed max-w-3xl font-light">
            Somos el hub que une a arquitectos, fabricantes y constructores para que la innovación fluya del concepto a la obra.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Button 
              size="lg" 
              className="group"
              onClick={() => {
                analyticsEvents.ctaSolicitarMuestra('hero_home');
                window.location.href = '/biblioteca';
              }}
              aria-label="Explorar biblioteca de materiales"
            >
              Explorar materiales
              <span className="inline-block transition-transform group-hover:translate-x-1 ml-2">→</span>
            </Button>
            <Button 
              variant="secondary" 
              size="lg"
              onClick={() => {
                analyticsEvents.ctaReservarVisita('hero_home');
                window.location.href = '/contacto';
              }}
              aria-label="Hablar con un experto en materiales"
            >
              Hablar con un experto
            </Button>
          </div>
          
          {/* Métricas */}
          <div className="flex flex-wrap gap-4 md:gap-6 text-sm text-muted-foreground animate-section stagger-2 pt-8 border-t border-border">
            <span className="hover:text-accent transition-colors cursor-default">+4.000 proyectos asesorados</span>
            <span className="hidden sm:inline text-border">·</span>
            <span className="hover:text-accent transition-colors cursor-default">+900 fabricantes</span>
            <span className="hidden sm:inline text-border">·</span>
            <span className="hover:text-accent transition-colors cursor-default">3 sedes: Barcelona · Madrid · Sotogrande</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
