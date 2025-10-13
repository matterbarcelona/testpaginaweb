import { Button } from "@/components/ui/button";

const FinalCTA = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-card to-background">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
          ¿Tienes un proyecto?
          <br />
          <span className="text-primary">Cuéntanoslo</span>
        </h2>
        
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-12">
          Nuestro equipo está listo para ayudarte a encontrar los materiales perfectos
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="text-base">
            Solicitar muestra
          </Button>
          <Button size="lg" variant="secondary" className="text-base">
            Solicitar presupuesto
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
