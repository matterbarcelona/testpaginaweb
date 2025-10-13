import { Button } from "@/components/ui/button";
import { PlusCircle, CheckCircle, Package } from "lucide-react";

const ComoPedirMuestra = () => {
  const pasos = [
    {
      icon: PlusCircle,
      title: "Añade materiales a tu selección",
      description: "Explora el catálogo y selecciona los que más te interesen.",
    },
    {
      icon: CheckCircle,
      title: "Confirma tus datos y dirección",
      description: "Completa el formulario con tu información de envío.",
    },
    {
      icon: Package,
      title: "Recíbelos en 24 h",
      description: "Las muestras llegarán a tu estudio o domicilio.",
    },
  ];

  const scrollToForm = () => {
    const form = document.getElementById('sample-form');
    if (form) {
      form.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-foreground text-balance">
          Solicitar muestras es rápido y gratuito.
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mt-16 max-w-5xl mx-auto">
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
                <h3 className="text-lg font-semibold text-foreground mb-3">
                  {paso.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {paso.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <Button
            size="lg"
            className="hover:scale-105 transition-transform duration-300"
            onClick={scrollToForm}
          >
            Pedir muestra ahora
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ComoPedirMuestra;
