import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative py-20 md:py-32 lg:py-40 overflow-hidden">
      {/* Subtle gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-transparent pointer-events-none" />
      
      <div className="container mx-auto px-6 relative">
        <div className="max-w-4xl animate-fade-in-up">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-foreground text-balance">
            La nueva forma de trabajar con materiales
          </h1>
          <p className="text-lg md:text-xl text-[#E2E2E2] mb-10 leading-relaxed max-w-2xl">
            Unimos a arquitectos, marcas y constructores para proyectos mejores,
            más rápidos y sostenibles.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mb-16">
            <Button size="lg" className="group hover:scale-105 transition-transform duration-300">
              Solicitar muestra
              <span className="inline-block transition-transform group-hover:translate-x-1 ml-2">→</span>
            </Button>
            <Button variant="secondary" size="lg" className="hover:scale-105 transition-transform duration-300">
              Reservar visita
            </Button>
          </div>
          
          {/* Métricas */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8 border-t border-border animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <div className="group cursor-default">
              <p className="text-3xl md:text-4xl font-bold text-accent group-hover:scale-110 transition-transform duration-300">+4.000</p>
              <p className="text-sm text-muted-foreground mt-2">proyectos/año</p>
            </div>
            <div className="group cursor-default">
              <p className="text-3xl md:text-4xl font-bold text-accent group-hover:scale-110 transition-transform duration-300">+900</p>
              <p className="text-sm text-muted-foreground mt-2">fabricantes</p>
            </div>
            <div className="group cursor-default">
              <p className="text-3xl md:text-4xl font-bold text-accent group-hover:scale-110 transition-transform duration-300">3</p>
              <p className="text-sm text-muted-foreground mt-2">sedes (BCN · MAD · SOT)</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
