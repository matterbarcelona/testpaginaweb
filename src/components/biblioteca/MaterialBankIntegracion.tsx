import { Button } from "@/components/ui/button";
import { Globe, Zap, Library } from "lucide-react";
import { ExternalLink } from "lucide-react";

const MaterialBankIntegracion = () => {
  const beneficios = [
    {
      icon: Globe,
      title: "Sostenible",
      description: "Envíos agrupados con bajo impacto.",
    },
    {
      icon: Zap,
      title: "Eficiente",
      description: "Entrega en 24 h.",
    },
    {
      icon: Library,
      title: "Completa",
      description: "Catálogo internacional de más de 900 fabricantes.",
    },
  ];

  return (
    <section id="materialbank" className="py-20 md:py-32 bg-card scroll-mt-20">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-foreground text-balance">
            Innovación y sostenibilidad, ahora al alcance de un clic.
          </h2>
          
          <p className="text-lg md:text-xl text-muted-foreground text-center mb-12 leading-relaxed">
            La integración con Material Bank permite consolidar pedidos de muestras de múltiples marcas en un solo envío, reduciendo residuos y tiempos. En 24 horas tendrás en tu mesa los materiales seleccionados.
          </p>

          {/* Benefits grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {beneficios.map((beneficio, index) => {
              const Icon = beneficio.icon;
              return (
                <div
                  key={index}
                  className="text-center group animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-16 h-16 rounded-xl bg-accent/10 flex items-center justify-center mx-auto mb-6 group-hover:bg-accent/20 transition-all duration-300 group-hover:scale-110">
                    <Icon className="w-8 h-8 text-accent" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-foreground group-hover:text-accent transition-colors duration-300">
                    {beneficio.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {beneficio.description}
                  </p>
                </div>
              );
            })}
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-12">
            <Button
              size="lg"
              variant="secondary"
              className="hover:scale-105 transition-transform duration-300"
              onClick={() => {
                // Open modal with Material Bank info (to be implemented)
                alert('Modal con información de Material Bank próximamente');
              }}
            >
              Ver cómo funciona Material Bank
            </Button>
            <Button
              size="lg"
              className="group hover:scale-105 transition-transform duration-300"
              onClick={() => {
                window.open('https://www.materialbank.eu', '_blank');
              }}
            >
              Acceder a Material Bank
              <ExternalLink className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MaterialBankIntegracion;
