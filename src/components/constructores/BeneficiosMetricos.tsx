import { useEffect, useRef, useState } from "react";
import { analyticsEvents } from "@/lib/analytics";

const BeneficiosMetricos = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [hasTracked, setHasTracked] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasTracked) {
            analyticsEvents.trackEvent('section_view', {
              section: 'metricas_constructores',
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

  const metricas = [
    {
      valor: "−30 %",
      descripcion: "Reducción media en gestiones administrativas."
    },
    {
      valor: "+25 %",
      descripcion: "Ahorro de tiempo en coordinación."
    },
    {
      valor: "100 %",
      descripcion: "Cumplimiento de plazos de entrega."
    }
  ];

  return (
    <section
      ref={sectionRef}
      id="metricas-constr"
      className="py-20 md:py-32 bg-surface"
      aria-labelledby="metricas-heading"
    >
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2
            id="metricas-heading"
            className="text-3xl md:text-5xl font-bold text-foreground mb-6"
          >
            Resultados medibles en cada proyecto
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-12 max-w-5xl mx-auto">
          {metricas.map((metrica, index) => (
            <div
              key={index}
              className="text-center animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="text-6xl md:text-7xl font-bold text-accent mb-4">
                {metrica.valor}
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {metrica.descripcion}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BeneficiosMetricos;
