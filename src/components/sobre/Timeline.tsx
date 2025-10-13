import { CheckCircle } from "lucide-react";

const Timeline = () => {
  const hitos = [
    {
      year: "2019",
      titulo: "Nacimiento de Matter",
      descripcion: "Fundación en Barcelona con la primera materioteca especializada en arquitectura e interiorismo."
    },
    {
      year: "2020",
      titulo: "Expansión a Madrid",
      descripcion: "Apertura del segundo showroom y consolidación del servicio de consultoría Matter Atelier."
    },
    {
      year: "2022",
      titulo: "Alianza Material Bank",
      descripcion: "Partnership estratégico con Material Bank para ampliar el catálogo y mejorar la logística."
    },
    {
      year: "2023",
      titulo: "Lanzamiento TGMA",
      descripcion: "Creación de The Grey Matter Agency para visibilidad y marketing de fabricantes."
    },
    {
      year: "2024",
      titulo: "Sede Sotogrande",
      descripcion: "Nueva materioteca en la Costa del Sol para atender el mercado residencial de lujo."
    },
    {
      year: "2025",
      titulo: "Expansión digital",
      descripcion: "Plataforma online integrada y servicios de especificación virtual para alcance internacional."
    }
  ];

  return (
    <section className="py-20 md:py-32 bg-card">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground text-center">
            Nuestra historia
          </h2>
          <p className="text-lg text-muted-foreground text-center mb-16">
            De una materioteca local a un ecosistema completo de materialidad
          </p>

          <div className="relative">
            {/* Timeline line */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-border -translate-x-1/2" />

            <div className="space-y-12">
              {hitos.map((hito, index) => (
                <div
                  key={index}
                  className={`relative flex flex-col md:flex-row gap-8 ${
                    index % 2 === 0 ? "md:flex-row-reverse" : ""
                  }`}
                >
                  {/* Content */}
                  <div className={`flex-1 ${index % 2 === 0 ? "md:text-right" : ""}`}>
                    <div className="inline-block p-6 bg-background border border-border rounded-lg hover:shadow-lg transition-all duration-300">
                      <div className="text-copper font-bold text-xl mb-2">
                        {hito.year}
                      </div>
                      <h3 className="text-xl font-semibold text-foreground mb-2">
                        {hito.titulo}
                      </h3>
                      <p className="text-muted-foreground">
                        {hito.descripcion}
                      </p>
                    </div>
                  </div>

                  {/* Dot marker */}
                  <div className="hidden md:flex items-center justify-center flex-shrink-0">
                    <div className="w-4 h-4 bg-copper rounded-full border-4 border-card shadow-lg" />
                  </div>

                  {/* Spacer */}
                  <div className="hidden md:block flex-1" />

                  {/* Mobile marker */}
                  <div className="md:hidden absolute left-0 top-0">
                    <CheckCircle className="text-copper" size={24} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
