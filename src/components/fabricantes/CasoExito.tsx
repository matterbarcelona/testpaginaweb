import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import casoExitoImg from "@/assets/caso-exito.jpg";

const CasoExito = () => {
  const marcas = [
    "Florim",
    "Finsa",
    "LAMP",
    "Claytec",
    "Mardegan Legno",
    "OLI",
    "Cosentino",
    "Tarkett",
  ];

  return (
    <section className="py-20 md:py-32 bg-card">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-foreground text-balance">
          Historias de marcas que ya confían en TGMA.
        </h2>
        
        {/* Featured case study */}
        <div className="max-w-4xl mx-auto mt-16">
          <div className="bg-background border-2 border-accent/30 rounded-lg overflow-hidden">
            <div className="aspect-[16/9]">
              <img 
                src={casoExitoImg} 
                alt="Transformación de proyecto con Florim en materioteca Matter" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-8 md:p-12">
              <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                Florim Ceramiche
              </h3>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-6">
                6 meses de colaboración → <span className="text-accent font-semibold">+120 leads cualificados</span> y <span className="text-accent font-semibold">14 especificaciones confirmadas</span> en proyectos de alto standing.
              </p>
              <Button 
                variant="secondary"
                className="group hover:scale-105 transition-transform duration-300"
              >
                Ver proyecto
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
        </div>

        {/* Partner logos */}
        <div className="mt-20">
          <p className="text-center text-sm text-muted-foreground mb-8">
            Otras marcas que confían en TGMA
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {marcas.map((marca, index) => (
              <div
                key={index}
                className="flex items-center justify-center p-6 bg-background/50 rounded-lg border border-border hover:border-accent/50 transition-all duration-300 group animate-fade-in-up"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <span className="text-muted-foreground group-hover:text-accent transition-colors duration-300 font-medium">
                  {marca}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CasoExito;
