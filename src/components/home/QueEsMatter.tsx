import { Lightbulb, Users, Truck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { analyticsEvents } from "@/lib/analytics";

const QueEsMatter = () => {
  const pilares = [
    {
      icon: Lightbulb,
      title: "Consultoría & Materiotecas",
      description: "Inspiración y asesoramiento técnico para especificar con seguridad.",
      ariaLabel: "Consultoría técnica y bibliotecas de materiales"
    },
    {
      icon: Users,
      title: "TGMA (The Grey Matter Agency)",
      description: "Visibilidad, contenido y leads de especificación para fabricantes.",
      ariaLabel: "Agencia de marketing para fabricantes de materiales"
    },
    {
      icon: Truck,
      title: "Distribución & Logística",
      description: "Suministro integral y soporte técnico en obra.",
      ariaLabel: "Distribución y logística de materiales"
    }
  ];

  const handleCTAClick = () => {
    analyticsEvents.trackEvent('cta_click', { 
      label: 'Descubre cómo trabajamos',
      location: 'que_es_matter'
    });
    window.location.href = '/prescriptores#proceso';
  };

  return (
    <section 
      id="que-es-matter"
      className="section-spacing bg-surface"
      aria-labelledby="que-es-matter-heading"
    >
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 animate-section">
          <h2 
            id="que-es-matter-heading"
            className="text-h2 font-bold mb-6 text-foreground text-balance"
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
                className="bg-background/50 backdrop-blur-sm border-2 border-line rounded-xl p-8 hover:border-accent/50 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                aria-label={pilar.ariaLabel}
              >
                <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-6 border-2 border-accent/20">
                  <Icon className="w-7 h-7 text-accent" aria-hidden="true" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-foreground">
                  {pilar.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {pilar.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <Button
            variant="outline"
            size="lg"
            onClick={handleCTAClick}
            data-analytics="cta_click"
            data-label="Descubre cómo trabajamos"
            aria-label="Descubrir cómo trabajamos en Matter Group"
          >
            Descubre cómo trabajamos
          </Button>
        </div>
      </div>
    </section>
  );
};

export default QueEsMatter;
