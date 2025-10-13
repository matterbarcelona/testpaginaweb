import { Button } from "@/components/ui/button";
import { Search, Lightbulb, TrendingUp } from "lucide-react";
import { analyticsEvents } from "@/lib/analytics";

const ProcesoTGMA = () => {
  const pasos = [
    {
      icon: Search,
      title: "Diagnóstico de posicionamiento",
      description: "Analizamos tu marca, tus objetivos y tu portafolio.",
    },
    {
      icon: Lightbulb,
      title: "Plan estratégico",
      description: "Definimos las acciones combinadas: exposición, contenidos y eventos.",
    },
    {
      icon: TrendingUp,
      title: "Activación & reporting",
      description: "Ejecutamos y medimos el impacto con reportes periódicos.",
    },
  ];

  return (
    <section className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
            Cómo activamos tu presencia en el ecosistema Matter.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 max-w-5xl mx-auto">
          {pasos.map((paso, index) => {
            const Icon = paso.icon;
            return (
              <div
                key={index}
                className="text-center group animate-fade-in-up"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="inline-flex w-20 h-20 rounded-full bg-accent/10 items-center justify-center mb-6 group-hover:bg-accent/20 transition-all duration-300 group-hover:scale-110">
                  <Icon className="w-10 h-10 text-accent" />
                </div>
                <div className="mb-4">
                  <span className="text-6xl font-bold text-accent/20 group-hover:text-accent/30 transition-colors duration-300">
                    {index + 1}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-accent transition-colors duration-300">
                  {paso.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {paso.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-16">
          <Button
            size="lg"
            variant="secondary"
            className="hover:scale-105 transition-transform duration-300"
            onClick={() => {
              analyticsEvents.ctaReservarVisita('proceso_fabricantes');
              window.location.href = '/contacto';
            }}
          >
            Agendar reunión con TGMA
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProcesoTGMA;
