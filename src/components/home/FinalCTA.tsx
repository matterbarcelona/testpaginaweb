import { Button } from "@/components/ui/button";

const FinalCTA = () => {
  return (
    <section className="py-20 md:py-32 bg-card">
      <div className="container mx-auto px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-foreground text-balance">
            ¿Tienes un proyecto? Cuéntanoslo
          </h2>
          <p className="text-lg md:text-xl text-[#E2E2E2] mb-10 leading-relaxed">
            Más de 900 fabricantes internacionales confían en Matter para conectar con los mejores proyectos.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="hover:scale-105 transition-transform duration-300">
              Solicitar muestra
            </Button>
            <Button variant="secondary" size="lg" className="hover:scale-105 transition-transform duration-300">
              Solicitar presupuesto
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
