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
          <p className="text-lg md:text-xl text-[#E2E2E2] mb-10 leading-relaxed max-w-3xl">
            Unimos a arquitectos, marcas y constructores para que los proyectos fluyan de la idea a la realidad.
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
          <div className="flex flex-wrap gap-6 text-sm text-[#E2E2E2] animate-fade-in pt-8 border-t border-border" style={{ animationDelay: "0.2s" }}>
            <span className="hover:text-accent transition-colors cursor-default">+4.000 proyectos asesorados</span>
            <span className="text-border">·</span>
            <span className="hover:text-accent transition-colors cursor-default">+900 fabricantes representados</span>
            <span className="text-border">·</span>
            <span className="hover:text-accent transition-colors cursor-default">3 sedes: Barcelona · Madrid · Sotogrande</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
