import { Button } from "@/components/ui/button";
import { analyticsEvents } from "@/lib/analytics";
import heroImage from "@/assets/hero-biblioteca.jpg";

const BibliotecaHero = () => {
  const scrollToBuscador = () => {
    const buscador = document.getElementById('buscador');
    if (buscador) {
      buscador.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToMaterialBank = () => {
    const mb = document.getElementById('materialbank');
    if (mb) {
      mb.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      className="relative py-20 md:py-32 lg:py-40 overflow-hidden"
      aria-label="Hero Biblioteca de Materiales"
    >
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Biblioteca de materiales curada" 
          className="w-full h-full object-cover opacity-15"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background/95 to-background/90" />
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl animate-fade-in-up">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-foreground text-balance tracking-tight">
            Explora, selecciona y recibe tus materiales en 24 h.
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-10 leading-relaxed max-w-3xl font-light">
            La biblioteca curada de Matter Group te conecta con Material Bank para descubrir, comparar y solicitar muestras de forma inmediata.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              size="lg" 
              className="group hover:scale-105 transition-transform duration-300"
              onClick={() => {
                analyticsEvents.bibliotecaBusqueda('', { source: 'hero_cta' });
                scrollToBuscador();
              }}
              aria-label="Buscar materiales en la biblioteca"
            >
              Buscar materiales
              <span className="inline-block transition-transform group-hover:translate-x-1 ml-2">→</span>
            </Button>
            <Button 
              variant="secondary" 
              size="lg" 
              className="hover:scale-105 transition-transform duration-300"
              onClick={scrollToMaterialBank}
              aria-label="Cómo funciona Material Bank"
            >
              Cómo funciona
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BibliotecaHero;
