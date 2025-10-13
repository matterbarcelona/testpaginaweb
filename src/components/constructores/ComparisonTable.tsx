import { Check, X } from "lucide-react";

const ComparisonTable = () => {
  const comparisons = [
    {
      feature: "Gestión de múltiples proveedores",
      sinMatter: false,
      conMatter: true,
      description: "Un solo punto de contacto para todos los materiales"
    },
    {
      feature: "Soporte técnico especializado",
      sinMatter: false,
      conMatter: true,
      description: "Asesoramiento continuo en obra"
    },
    {
      feature: "Validación de materiales",
      sinMatter: false,
      conMatter: true,
      description: "Verificación de fichas técnicas y certificaciones"
    },
    {
      feature: "Logística coordinada",
      sinMatter: false,
      conMatter: true,
      description: "Entregas sincronizadas según planning de obra"
    },
    {
      feature: "Muestras físicas en 24h",
      sinMatter: false,
      conMatter: true,
      description: "Validación rápida antes de pedido final"
    },
    {
      feature: "Control de presupuesto",
      sinMatter: false,
      conMatter: true,
      description: "Seguimiento detallado de costes por partida"
    },
    {
      feature: "Documentación completa",
      sinMatter: false,
      conMatter: true,
      description: "Certificados, normativas y fichas al día"
    },
    {
      feature: "Solución de incidencias",
      sinMatter: false,
      conMatter: true,
      description: "Respuesta en menos de 24 horas"
    }
  ];

  return (
    <section className="py-20 md:py-32 bg-surface" aria-labelledby="comparison-heading">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 animate-section">
          <h2 
            id="comparison-heading"
            className="text-3xl md:text-5xl font-bold mb-6 text-foreground"
          >
            Por qué trabajar con Matter marca la diferencia
          </h2>
          <p className="text-body text-muted-foreground leading-relaxed">
            Comparamos el proceso tradicional de suministro con nuestra metodología integral.
          </p>
        </div>

        {/* Comparison Table */}
        <div className="max-w-5xl mx-auto">
          {/* Table Header */}
          <div className="grid grid-cols-3 gap-4 mb-4">
            <div className="col-span-1"></div>
            <div className="text-center p-4 bg-card border border-line rounded-lg animate-section stagger-1">
              <p className="text-small font-semibold text-muted-foreground uppercase tracking-wide">
                Sin Matter
              </p>
            </div>
            <div className="text-center p-4 bg-accent/10 border border-accent rounded-lg animate-section stagger-2">
              <p className="text-small font-semibold text-accent uppercase tracking-wide">
                Con Matter
              </p>
            </div>
          </div>

          {/* Table Rows */}
          <div className="space-y-2">
            {comparisons.map((item, index) => (
              <div
                key={index}
                className="grid grid-cols-3 gap-4 items-center bg-card border border-line rounded-lg p-4 hover:border-accent/50 transition-smooth animate-section"
                style={{ animationDelay: `${(index + 3) * 50}ms` }}
              >
                {/* Feature */}
                <div className="col-span-1">
                  <h3 className="text-small md:text-body font-semibold text-foreground mb-1">
                    {item.feature}
                  </h3>
                  <p className="text-small text-muted-foreground hidden md:block">
                    {item.description}
                  </p>
                </div>

                {/* Sin Matter */}
                <div className="flex justify-center">
                  <div 
                    className="w-10 h-10 rounded-full bg-error/10 flex items-center justify-center"
                    aria-label="No disponible sin Matter"
                  >
                    <X className="w-5 h-5 text-error" aria-hidden="true" />
                  </div>
                </div>

                {/* Con Matter */}
                <div className="flex justify-center">
                  <div 
                    className="w-10 h-10 rounded-full bg-success/10 flex items-center justify-center"
                    aria-label="Disponible con Matter"
                  >
                    <Check className="w-5 h-5 text-success" aria-hidden="true" />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Summary Footer */}
          <div className="mt-8 p-6 bg-accent/5 border border-accent/20 rounded-lg animate-section stagger-5">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                <Check className="w-6 h-6 text-accent" aria-hidden="true" />
              </div>
              <div>
                <h3 className="text-body font-semibold text-foreground mb-2">
                  Resultado: Ahorro de tiempo y costes operativos
                </h3>
                <p className="text-small text-muted-foreground leading-relaxed">
                  Nuestros clientes reportan una reducción del 30% en tiempo de gestión de materiales 
                  y una mejora del 25% en cumplimiento de plazos de entrega.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComparisonTable;
