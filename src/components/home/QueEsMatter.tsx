import { Lightbulb, Users, Truck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { analyticsEvents } from "@/lib/analytics";

const QueEsMatter = () => {
  const pilares = [
    {
      icon: Lightbulb,
      title: "Consultoría & Materiotecas",
      description: "Inspiración y asesoramiento técnico para especificar con seguridad.",
      benefit: "Reduce riesgo y tiempo en especificación.",
      ariaLabel: "Consultoría técnica y bibliotecas de materiales"
    },
    {
      icon: Users,
      title: "TGMA (The Grey Matter Agency)",
      description: "Visibilidad, contenido y leads de especificación para fabricantes.",
      benefit: "Multiplica visibilidad y leads cualificados.",
      ariaLabel: "Agencia de marketing para fabricantes de materiales"
    },
    {
      icon: Truck,
      title: "Distribución & Logística",
      description: "Suministro integral y soporte técnico en obra.",
      benefit: "Entrega coordinada, menos incidencias.",
      ariaLabel: "Distribución y logística de materiales"
    }
  ];

  const handleCTAClick = () => {
    analyticsEvents.trackEvent('cta_click', { 
      label: 'Descubre cómo trabajamos',
      location: 'que_es_matter',
      type: 'outline'
    });
    // Scroll to proceso section
    const procesoSection = document.getElementById('proceso-360');
    if (procesoSection) {
      procesoSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
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

        {/* Pilares Grid - Semantic List */}
        <ul className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 list-none">
          {pilares.map((pilar, index) => {
            const Icon = pilar.icon;
            return (
              <li
                key={index}
                className="bg-background/50 backdrop-blur-sm border border-line rounded-lg p-8 hover:border-accent/50 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                aria-label={pilar.ariaLabel}
              >
                <div className="w-14 h-14 rounded-lg bg-accent/5 flex items-center justify-center mb-6 border border-accent/20">
                  <Icon className="w-8 h-8 text-accent" strokeWidth={1.5} aria-hidden="true" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-foreground">
                  {pilar.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-2">
                  {pilar.description}
                </p>
                <p className="text-sm text-accent font-medium">
                  {pilar.benefit}
                </p>
              </li>
            );
          })}
        </ul>

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
