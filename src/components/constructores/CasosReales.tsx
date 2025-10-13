import { Button } from "@/components/ui/button";
import { ArrowRight, Building2, Briefcase } from "lucide-react";

const CasosReales = () => {
  const casos = [
    {
      icon: Building2,
      title: "Hotel Paxton Barcelona",
      description: "Entrega escalonada en 8 semanas. 120 habitaciones.",
      details: "Suministro completo de pavimentos, revestimientos y sanitarios con coordinación logística perfecta.",
    },
    {
      icon: Briefcase,
      title: "Oficinas Tech Madrid",
      description: "Coordinación de 15 proveedores. Plazo de instalación 4 semanas.",
      details: "2.500 m² de oficinas con materiales acústicos y técnicos sin incidencias.",
    },
  ];

  return (
    <section className="py-20 md:py-32 bg-card">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-foreground text-balance">
          Proyectos donde Matter gestionó el suministro completo.
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-16 max-w-5xl mx-auto">
          {casos.map((caso, index) => {
            const Icon = caso.icon;
            return (
              <div
                key={index}
                className="group bg-background border border-border rounded-lg p-8 hover:border-accent transition-all duration-300 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors duration-300">
                      <Icon className="w-7 h-7 text-accent" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-2 text-foreground group-hover:text-accent transition-colors duration-300">
                      {caso.title}
                    </h3>
                    <p className="text-accent font-medium mb-3 text-sm">
                      {caso.description}
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      {caso.details}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <Button
            variant="secondary"
            className="group hover:scale-105 transition-transform duration-300"
            onClick={() => {
              window.location.href = '/proyectos';
            }}
          >
            Ver más proyectos
            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CasosReales;
