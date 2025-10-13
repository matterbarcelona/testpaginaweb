import { TrendingDown, TrendingUp, Target } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { analyticsEvents } from "@/lib/analytics";

const KPIsPrescriptores = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          analyticsEvents.kpiView('prescriptores');
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const kpis = [
    {
      icon: TrendingDown,
      cifra: "−30%",
      descripcion: "Tiempo medio en búsqueda y validación de materiales",
      color: "text-green-400"
    },
    {
      icon: TrendingUp,
      cifra: "+25%",
      descripcion: "Eficiencia en procesos de certificación WELL / BREEAM",
      color: "text-accent"
    },
    {
      icon: Target,
      cifra: "3–5",
      descripcion: "Opciones óptimas por partida, seleccionadas por nuestro equipo técnico",
      color: "text-accent"
    }
  ];

  return (
    <section 
      id="kpis-pres"
      ref={sectionRef}
      className="py-20 md:py-32 bg-surface"
      aria-labelledby="kpis-heading"
    >
      <div className="container mx-auto px-6">
        <h2 
          id="kpis-heading"
          className="text-3xl md:text-5xl font-bold mb-16 text-foreground text-center text-balance"
        >
          Resultados que hablan por sí mismos
        </h2>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {kpis.map((kpi, index) => {
            const Icon = kpi.icon;
            return (
              <div
                key={index}
                className={`bg-background border border-line rounded-lg p-8 text-center transition-all duration-500 hover:border-accent/50 hover:-translate-y-2 ${
                  isVisible 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="flex justify-center mb-6">
                  <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center">
                    <Icon className={`w-8 h-8 ${kpi.color}`} aria-hidden="true" />
                  </div>
                </div>
                
                <div className={`text-5xl md:text-6xl font-bold mb-4 ${kpi.color}`}>
                  {kpi.cifra}
                </div>
                
                <p className="text-muted-foreground leading-relaxed">
                  {kpi.descripcion}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default KPIsPrescriptores;
