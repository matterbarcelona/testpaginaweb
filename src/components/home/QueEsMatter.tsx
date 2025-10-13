import { Building2, Megaphone, Truck } from "lucide-react";
import { Button } from "@/components/ui/button";

const QueEsMatter = () => {
  const pilares = [
    {
      icon: Building2,
      title: "Consultoría & Materiotecas",
      description: "Inspiración y asesoramiento técnico: de la idea a la especificación.",
      ariaLabel: "Consultoría técnica y bibliotecas de materiales"
    },
    {
      icon: Megaphone,
      title: "TGMA Agency",
      description: "Visibilidad, contenido y leads de especificación para fabricantes.",
      ariaLabel: "Agencia de marketing para fabricantes de materiales"
    },
    {
      icon: Truck,
      title: "Distribución & Logística",
      description: "Suministro integral y soporte técnico hasta la entrega en obra.",
      ariaLabel: "Distribución y logística de materiales"
    }
  ];

  const handleCTAClick = () => {
    const procesoSection = document.getElementById('proceso-360');
    if (procesoSection) {
      procesoSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      className="py-20 md:py-32 bg-background"
      aria-labelledby="que-es-matter-heading"
    >
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 animate-section">
          <h2 
            id="que-es-matter-heading"
            className="text-3xl md:text-5xl font-bold mb-6 text-foreground"
          >
            Qué es Matter Group
          </h2>
        </div>

        {/* Pilares Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {pilares.map((pilar, index) => {
            const Icon = pilar.icon;
            return (
              <div
                key={index}
                className="bg-card border border-border rounded-lg p-8 hover:border-accent transition-smooth group animate-section"
                style={{ animationDelay: `${index * 50}ms` }}
                aria-label={pilar.ariaLabel}
              >
                <div className="mb-6">
                  <div className="w-14 h-14 rounded-lg bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-button">
                    <Icon 
                      className="w-7 h-7 text-accent" 
                      aria-hidden="true"
                    />
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-4 text-foreground">
                  {pilar.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {pilar.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Métricas */}
        <div className="text-center mb-10 animate-section stagger-3">
          <p className="text-lg font-semibold text-foreground mb-4">
            Por qué confiar en nosotros
          </p>
          <div className="flex flex-wrap justify-center gap-4 md:gap-8 text-muted-foreground">
            <span className="flex items-center gap-2">
              <span className="text-accent font-semibold">+4.000</span> proyectos/año
            </span>
            <span className="hidden md:inline text-border">·</span>
            <span className="flex items-center gap-2">
              <span className="text-accent font-semibold">24h</span> muestras
            </span>
            <span className="hidden md:inline text-border">·</span>
            <span className="flex items-center gap-2">
              <span className="text-accent font-semibold">3</span> sedes
            </span>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button
            size="lg"
            onClick={handleCTAClick}
            aria-label="Descubrir el proceso de trabajo de Matter Group"
          >
            Descubre nuestro proceso
          </Button>
        </div>
      </div>
    </section>
  );
};

export default QueEsMatter;
