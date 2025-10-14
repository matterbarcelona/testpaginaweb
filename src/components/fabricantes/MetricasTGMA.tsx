import { TrendingUp, Users, FileText, Target } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { analyticsEvents } from "@/lib/analytics";

const MetricasTGMA = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [hasTracked, setHasTracked] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasTracked) {
            analyticsEvents.trackEvent('section_view', {
              section: 'metricas_tgma',
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
      icon: Users,
      valor: "2,500+",
      descripcion: "Arquitectos e interioristas en nuestra red activa",
      color: "text-accent"
    },
    {
      icon: FileText,
      valor: "150+",
      descripcion: "Artículos y contenidos publicados al año",
      color: "text-accent"
    },
    {
      icon: Target,
      valor: "85%",
      descripcion: "Tasa de conversión en leads cualificados",
      color: "text-accent"
    },
    {
      icon: TrendingUp,
      valor: "+320%",
      descripcion: "Crecimiento medio en visibilidad de marca (12 meses)",
      color: "text-accent"
    }
  ];

  return (
    <section
      ref={sectionRef}
      id="metricas-tgma"
      className="py-20 md:py-32 bg-background"
      aria-labelledby="metricas-heading"
    >
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 
            id="metricas-heading"
            className="text-3xl md:text-5xl font-bold text-foreground mb-6"
          >
            Resultados que respaldan tu inversión
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Más allá de la visibilidad: medimos cada interacción, lead y oportunidad generada para tu marca
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {metricas.map((metrica, index) => (
            <div
              key={index}
              className="bg-surface border border-line rounded-lg p-8 text-center hover:border-accent/50 transition-all duration-300"
            >
              <metrica.icon className={`w-12 h-12 mx-auto mb-4 ${metrica.color}`} strokeWidth={1.5} />
              <div className="text-4xl font-bold text-foreground mb-3">
                {metrica.valor}
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {metrica.descripcion}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 max-w-4xl mx-auto bg-surface border border-line rounded-lg p-8 md:p-12">
          <h3 className="text-2xl font-bold text-foreground mb-6 text-center">
            Qué incluyen tus reportes mensuales
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                <p className="text-muted-foreground">
                  <strong className="text-foreground">Impresiones totales</strong> — Alcance de tu marca en contenidos
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                <p className="text-muted-foreground">
                  <strong className="text-foreground">Leads generados</strong> — Contactos cualificados y proyectos
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                <p className="text-muted-foreground">
                  <strong className="text-foreground">Muestras solicitadas</strong> — Interés activo por producto
                </p>
              </div>
            </div>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                <p className="text-muted-foreground">
                  <strong className="text-foreground">Especificaciones confirmadas</strong> — Proyectos en los que apareces
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                <p className="text-muted-foreground">
                  <strong className="text-foreground">Participación en eventos</strong> — Asistencia y networking
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                <p className="text-muted-foreground">
                  <strong className="text-foreground">ROI estimado</strong> — Valor proyectado de oportunidades
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MetricasTGMA;
