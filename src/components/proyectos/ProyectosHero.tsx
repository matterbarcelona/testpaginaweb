import { Button } from "@/components/ui/button";
import heroImage from "@/assets/proyecto-1.jpg";

const ProyectosHero = () => {
  const scrollToGrid = () => {
    const grid = document.getElementById('proyectos-grid');
    if (grid) {
      grid.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      className="relative py-20 md:py-32 lg:py-40 overflow-hidden"
      aria-label="Proyectos Matter"
    >
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Proyectos arquitectónicos con materiales innovadores" 
          className="w-full h-full object-cover opacity-50"
          loading="eager"
          decoding="async"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/85 via-background/50 to-transparent" />
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl animate-fade-in-up">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-foreground text-balance tracking-tight">
            Proyectos que materializan ideas.
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-10 leading-relaxed max-w-3xl font-light">
            Cada proyecto es una historia donde la innovación material se convierte en realidad arquitectónica.
          </p>
          <Button 
            size="lg" 
            className="group hover:scale-105 transition-transform duration-300"
            onClick={scrollToGrid}
            aria-label="Ver todos los proyectos"
          >
            Ver todos los proyectos
            <span className="inline-block transition-transform group-hover:translate-x-1 ml-2">→</span>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProyectosHero;
