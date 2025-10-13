import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import { analyticsEvents } from "@/lib/analytics";

const FinalCTA = () => {
  const scrollToBuscador = () => {
    const buscador = document.getElementById('buscador');
    if (buscador) {
      buscador.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-foreground text-balance">
            De la inspiración a la especificación, en un solo lugar.
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground mb-10 leading-relaxed">
            Explora, compara y solicita tus materiales desde la plataforma más completa del mercado.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="hover:scale-105 transition-transform duration-300"
              onClick={() => {
                analyticsEvents.bibliotecaBusqueda('', { source: 'final_cta' });
                scrollToBuscador();
              }}
              aria-label="Buscar materiales"
            >
              Buscar materiales
            </Button>
            <Button 
              variant="secondary" 
              size="lg" 
              className="group hover:scale-105 transition-transform duration-300"
              onClick={() => {
                window.open('https://www.materialbank.eu', '_blank');
              }}
              aria-label="Descubrir Material Bank"
            >
              Descubrir Material Bank
              <ExternalLink className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
