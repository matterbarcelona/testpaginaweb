import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";
import { analyticsEvents } from "@/lib/analytics";

const CasosGridTGMA = () => {
  // Casos reales o placeholders hasta tener contenido en CMS
  const casos = [
    {
      id: "florim-ceramica",
      slug: "florim-ceramica-tgma",
      title: "Florim Cerámica",
      categoria: "Cerámica Premium",
      imagen: "/placeholder.svg", // TODO: Sustituir con imagen real
      kpi: "+180 leads / 6 meses",
      destacado: "14 especificaciones confirmadas",
      disponible: true
    },
    {
      id: "madera-tech-europe",
      slug: "madera-tech-tgma",
      title: "Wood Tech Europe",
      categoria: "Madera Técnica",
      imagen: "/placeholder.svg", // TODO: Sustituir con imagen real
      kpi: "+120 leads / 6 meses",
      destacado: "8 proyectos hospitality",
      disponible: false // Placeholder
    },
    {
      id: "textile-innovations",
      slug: "textile-innovations-tgma",
      title: "Textile Innovations",
      categoria: "Textil Contract",
      imagen: "/placeholder.svg", // TODO: Sustituir con imagen real
      kpi: "+95 leads / 4 meses",
      destacado: "Presencia en 12 estudios top",
      disponible: false // Placeholder
    }
  ];

  const handleCaseClick = (caso: typeof casos[0]) => {
    analyticsEvents.trackEvent('case_card_click', {
      label: caso.slug,
      location: 'casos_grid_tgma'
    });

    if (!caso.disponible) {
      // Scroll to form if case is not ready
      const form = document.getElementById('partner-form');
      if (form) {
        form.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <section
      id="casos-tgma-grid"
      className="py-20 md:py-32 bg-background"
      aria-labelledby="casos-grid-heading"
    >
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2
            id="casos-grid-heading"
            className="text-3xl md:text-5xl font-bold text-foreground mb-6 text-balance"
          >
            Más casos de éxito
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Fabricantes que ya confían en TGMA para generar visibilidad y leads cualificados ante arquitectos
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {casos.map((caso, index) => (
            <article
              key={caso.id}
              className="group bg-surface border border-line rounded-lg overflow-hidden hover:border-accent/50 hover:-translate-y-1 transition-all duration-300 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Imagen */}
              <div className="relative aspect-[4/3] overflow-hidden bg-highlight">
                <img
                  src={caso.imagen}
                  alt={`Caso de éxito: ${caso.title}`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                {!caso.disponible && (
                  <div className="absolute top-3 right-3">
                    <Badge variant="secondary" className="bg-warning/90 text-foreground border-0">
                      Próximamente
                    </Badge>
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                <div>
                  <Badge variant="outline" className="mb-3">
                    {caso.categoria}
                  </Badge>
                  <h3 className="text-xl font-semibold text-foreground group-hover:text-accent transition-colors duration-300 mb-2">
                    {caso.title}
                  </h3>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                    <p className="text-sm font-medium text-foreground">
                      {caso.kpi}
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                    <p className="text-sm text-muted-foreground">
                      {caso.destacado}
                    </p>
                  </div>
                </div>

                <button
                  onClick={() => handleCaseClick(caso)}
                  className="inline-flex items-center gap-2 text-accent hover:gap-3 transition-all duration-300 text-sm font-medium group/btn"
                  aria-label={`Ver detalles del caso ${caso.title}`}
                >
                  {caso.disponible ? 'Ver caso completo' : 'Solicitar información'}
                  <ArrowRight className="w-4 h-4" strokeWidth={1.5} />
                </button>
              </div>
            </article>
          ))}
        </div>

        {/* CMS TODO note */}
        <div className="mt-12 max-w-2xl mx-auto">
          <div className="bg-highlight border border-line rounded-lg p-6 text-center">
            <p className="text-sm text-muted-foreground">
              <strong className="text-foreground">TODO CMS:</strong> Completar con 2-3 casos reales adicionales (diversidad sectorial: madera, textil, iluminación, etc.). Filtrar desde{" "}
              <code className="px-2 py-1 bg-surface rounded text-xs">proyectos.rol="fabricante"</code> o tag{" "}
              <code className="px-2 py-1 bg-surface rounded text-xs">tgma</code>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CasosGridTGMA;
