import { Button } from "@/components/ui/button";
import { FileText, Settings, FileCheck, PackageCheck } from "lucide-react";
import { analyticsEvents } from "@/lib/analytics";

const ProcesoTrabajo = () => {
  const pasos = [
    {
      icon: FileText,
      title: "Brief técnico",
      description: "Cuéntanos los materiales y cantidades que necesitas.",
    },
    {
      icon: Settings,
      title: "Alineación & equivalencias",
      description: "Proponemos alternativas optimizando coste y plazo.",
    },
    {
      icon: FileCheck,
      title: "Cotización unificada",
      description: "Una sola factura, múltiples fabricantes.",
    },
    {
      icon: PackageCheck,
      title: "Entrega & seguimiento",
      description: "Coordinamos la entrega final y el soporte postventa.",
    },
  ];

  const scrollToForm = () => {
    const form = document.getElementById('presupuesto-form');
    if (form) {
      form.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
            Tu cadena de suministro, bajo control.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {pasos.map((paso, index) => {
            const Icon = paso.icon;
            return (
              <div
                key={index}
                className="text-center group animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="inline-flex w-20 h-20 rounded-full bg-accent/10 items-center justify-center mb-6 group-hover:bg-accent/20 transition-all duration-300 group-hover:scale-110">
                  <Icon className="w-10 h-10 text-accent" />
                </div>
                <div className="mb-4">
                  <span className="text-6xl font-bold text-accent/20 group-hover:text-accent/30 transition-colors duration-300">
                    {index + 1}
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-3 group-hover:text-accent transition-colors duration-300">
                  {paso.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {paso.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-16">
          <Button
            size="lg"
            className="hover:scale-105 transition-transform duration-300"
            onClick={() => {
              analyticsEvents.ctaSolicitarPresupuesto('proceso_constructores');
              scrollToForm();
            }}
          >
            Pide tu presupuesto en 24 h
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProcesoTrabajo;
