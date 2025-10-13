import { useEffect, useRef } from "react";
import { TrendingDown, TrendingUp, Target } from "lucide-react";
import { analyticsEvents } from "@/lib/analytics";

const ImpactoReal = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const hasTracked = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasTracked.current) {
            analyticsEvents.kpiView('prescriptores_impacto');
            hasTracked.current = true;
          }
        });
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const kpis = [
    {
      icon: TrendingDown,
      value: "-30%",
      label: "Tiempo de búsqueda",
      description: "Ahorra horas en investigación de materiales",
      color: "success"
    },
    {
      icon: TrendingUp,
      value: "+25%",
      label: "Eficiencia en certificación",
      description: "Menos revisiones, más precisión documental",
      color: "accent"
    },
    {
      icon: Target,
      value: "3–5",
      label: "Opciones por partida",
      description: "Alternativas curadas según presupuesto y estética",
      color: "warning"
    }
  ];

  return (
    <section 
      ref={sectionRef}
      className="py-20 md:py-32 bg-surface" 
      aria-labelledby="impacto-heading"
    >
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 animate-section">
          <h2 
            id="impacto-heading"
            className="text-3xl md:text-5xl font-bold mb-6 text-foreground"
          >
            Impacto real en tu día a día
          </h2>
          <p className="text-body text-muted-foreground leading-relaxed">
            Datos de +200 proyectos anuales con prescriptores que confían en Matter.
          </p>
        </div>

        {/* KPIs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {kpis.map((kpi, index) => {
            const Icon = kpi.icon;
            return (
              <div
                key={index}
                className="bg-card border border-line rounded-lg p-8 text-center hover:border-accent transition-smooth animate-section"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                {/* Icon */}
                <div className="flex justify-center mb-6">
                  <div className={`w-16 h-16 rounded-full bg-${kpi.color}/10 flex items-center justify-center`}>
                    <Icon 
                      className={`w-8 h-8 text-${kpi.color}`} 
                      aria-hidden="true"
                    />
                  </div>
                </div>

                {/* Value */}
                <div className="text-5xl md:text-6xl font-bold mb-4" 
                     style={{ 
                       color: kpi.color === 'success' ? 'hsl(var(--success))' : 
                              kpi.color === 'warning' ? 'hsl(var(--warning))' : 
                              'hsl(var(--accent))' 
                     }}>
                  {kpi.value}
                </div>

                {/* Label */}
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {kpi.label}
                </h3>

                {/* Description */}
                <p className="text-small text-muted-foreground leading-relaxed">
                  {kpi.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Footer note */}
        <div className="mt-12 text-center animate-section stagger-3">
          <p className="text-small text-muted-foreground">
            <span className="font-semibold text-foreground">Metodología:</span> Promedio de proyectos residenciales y comerciales de 500-2000m² en 2024.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ImpactoReal;
