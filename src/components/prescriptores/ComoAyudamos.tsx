import { Button } from "@/components/ui/button";
import { Building2, FileCheck, Zap, Leaf } from "lucide-react";
import { analyticsEvents } from "@/lib/analytics";

const ComoAyudamos = () => {
  const beneficios = [
    {
      icon: Building2,
      title: "Curaduría experta",
      description: "Te mostramos solo los materiales que encajan con tu visión.",
    },
    {
      icon: FileCheck,
      title: "Fichas técnicas & equivalencias",
      description: "Información precisa para cumplir normativa y memoria de calidades.",
    },
    {
      icon: Zap,
      title: "Muestras en 24 h",
      description: "Prueba, compara y decide sin perder tiempo.",
    },
    {
      icon: Leaf,
      title: "Sostenibilidad & salud",
      description: "Opciones certificadas para proyectos responsables.",
    },
  ];

  return (
    <section className="py-20 md:py-32 bg-card">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-foreground text-balance">
          Simplificamos la selección de materiales en cada proyecto.
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
          {beneficios.map((beneficio, index) => {
            const Icon = beneficio.icon;
            return (
              <div
                key={index}
                className="group text-center animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-16 h-16 rounded-xl bg-accent/10 flex items-center justify-center mx-auto mb-6 group-hover:bg-accent/20 transition-all duration-300 group-hover:scale-110">
                  <Icon className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-lg font-semibold mb-3 text-foreground group-hover:text-accent transition-colors duration-300">
                  {beneficio.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {beneficio.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <Button
            size="lg"
            variant="secondary"
            className="hover:scale-105 transition-transform duration-300"
            onClick={() => {
              analyticsEvents.ctaSolicitarMuestra('como_ayudamos_prescriptores');
              window.location.href = '/biblioteca';
            }}
          >
            Explorar materiales
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ComoAyudamos;
