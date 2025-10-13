import { Check, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { analyticsEvents } from "@/lib/analytics";
import { useEffect, useRef, useState } from "react";

const ComparisonTable = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [hasTracked, setHasTracked] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasTracked) {
            analyticsEvents.trackEvent('section_view', {
              section: 'comparativa_constructores',
              path: window.location.pathname
            });
            setHasTracked(true);
          }
        });
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [hasTracked]);

  const handleInteraction = (fila: string) => {
    analyticsEvents.trackEvent('compare_interaction', {
      label: fila,
      path: window.location.pathname
    });
  };

  const handleScrollToForm = () => {
    analyticsEvents.trackEvent('cta_click', {
      label: 'Solicitar presupuesto',
      location: 'comparativa',
      path: window.location.pathname
    });
    document.getElementById('budget-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  const comparisons = [
    { 
      aspecto: "Proveedores", 
      conMatter: "1 interlocutor único", 
      sinMatter: ">10 proveedores" 
    },
    { 
      aspecto: "Tiempo de gestión", 
      conMatter: "−30 %", 
      sinMatter: "Descoordinación habitual" 
    },
    { 
      aspecto: "Plazos", 
      conMatter: "100 % cumplimiento", 
      sinMatter: "Retrasos frecuentes" 
    },
    { 
      aspecto: "Incidencias", 
      conMatter: "Mínimas, trazables", 
      sinMatter: "Sin control centralizado" 
    },
    { 
      aspecto: "Soporte técnico", 
      conMatter: "Continuo", 
      sinMatter: "Limitado / inexistente" 
    }
  ];

  return (
    <section
      ref={sectionRef}
      id="comparativa"
      className="py-20 md:py-32 bg-background"
      aria-labelledby="comparativa-heading"
    >
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 
            id="comparativa-heading"
            className="text-3xl md:text-5xl font-bold text-foreground mb-6"
          >
            ¿Por qué trabajar con Matter?
          </h2>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Mobile: Cards */}
          <div className="md:hidden space-y-6">
            {comparisons.map((item, index) => (
              <div
                key={index}
                className="bg-surface border border-line rounded-lg p-6"
                onClick={() => handleInteraction(item.aspecto)}
              >
                <h3 className="text-lg font-bold text-foreground mb-4">
                  {item.aspecto}
                </h3>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm font-medium text-muted-foreground mb-1">Con Matter</p>
                      <p className="text-foreground">{item.conMatter}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <X className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm font-medium text-muted-foreground mb-1">Sin Matter</p>
                      <p className="text-foreground">{item.sinMatter}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Desktop: Table */}
          <div className="hidden md:block overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-surface">
                  <th className="text-left p-6 border border-line text-foreground font-bold">
                    Aspecto
                  </th>
                  <th className="text-center p-6 border border-line text-foreground font-bold">
                    <span className="flex items-center justify-center gap-2">
                      <Check className="w-5 h-5 text-accent" />
                      Con Matter
                    </span>
                  </th>
                  <th className="text-center p-6 border border-line text-foreground font-bold">
                    <span className="flex items-center justify-center gap-2">
                      <X className="w-5 h-5 text-red-500" />
                      Sin Matter
                    </span>
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparisons.map((item, index) => (
                  <tr
                    key={index}
                    className="hover:bg-surface/50 transition-colors cursor-pointer"
                    onClick={() => handleInteraction(item.aspecto)}
                  >
                    <td className="p-6 border border-line text-foreground font-medium">
                      {item.aspecto}
                    </td>
                    <td className="p-6 border border-line text-center text-foreground">
                      {item.conMatter}
                    </td>
                    <td className="p-6 border border-line text-center text-muted-foreground">
                      {item.sinMatter}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-12 text-center">
            <Button
              size="lg"
              onClick={handleScrollToForm}
              aria-label="Solicitar presupuesto personalizado"
            >
              Solicitar presupuesto
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComparisonTable;
