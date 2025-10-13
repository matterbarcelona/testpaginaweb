import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center bg-gradient-to-b from-background to-card">
      <div className="container mx-auto px-6 py-24 text-center">
        <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6 leading-tight">
          La nueva forma de trabajar
          <br />
          <span className="text-primary">con materiales</span>
        </h1>
        
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-12">
          Unimos a arquitectos, marcas y constructores para proyectos mejores, más rápidos y sostenibles.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <Button size="lg" className="text-base">
            Solicitar muestra
          </Button>
          <Button size="lg" variant="secondary" className="text-base">
            Reservar visita
          </Button>
        </div>

        {/* Métricas */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto pt-8 border-t border-border">
          <div>
            <p className="text-3xl font-bold text-primary">+4.000</p>
            <p className="text-sm text-muted-foreground mt-2">proyectos/año</p>
          </div>
          <div>
            <p className="text-3xl font-bold text-primary">+900</p>
            <p className="text-sm text-muted-foreground mt-2">fabricantes</p>
          </div>
          <div>
            <p className="text-3xl font-bold text-primary">3</p>
            <p className="text-sm text-muted-foreground mt-2">sedes (BCN · MAD · SOT)</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
