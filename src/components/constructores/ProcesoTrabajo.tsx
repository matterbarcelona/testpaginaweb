import { FileText, Search, FileCheck, Truck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { analyticsEvents } from "@/lib/analytics";
import { useEffect, useRef, useState } from "react";

const ProcesoTrabajo = () => {
  const [hoveredStep, setHoveredStep] = useState<number | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && hoveredStep === null) {
            // Track first view
          }
        });
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [hoveredStep]);

  const handleStepHover = (index: number, title: string) => {
    if (hoveredStep !== index) {
      setHoveredStep(index);
      analyticsEvents.trackEvent('timeline_step_view', {
        label: title,
        step: index + 1,
        path: window.location.pathname
      });
    }
  };

  const handleScrollToForm = () => {
    analyticsEvents.trackEvent('cta_click', {
      label: 'Solicitar propuesta personalizada',
      location: 'proceso_constructores',
      path: window.location.pathname
    });
    document.getElementById('budget-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  const pasos = [
    {
      icon: FileText,
      numero: "1",
      titulo: "Brief técnico",
      descripcion: "Cuéntanos los materiales, cantidades y plazos."
    },
    {
      icon: Search,
      numero: "2",
      titulo: "Alineación & equivalencias",
      descripcion: "Buscamos alternativas para optimizar coste y tiempos."
    },
    {
      icon: FileCheck,
      numero: "3",
      titulo: "Cotización unificada",
      descripcion: "Una sola factura, múltiples fabricantes."
    },
    {
      icon: Truck,
      numero: "4",
      titulo: "Entrega & seguimiento",
      descripcion: "Logística coordinada, postventa garantizada."
    }
  ];

  return (
    <section
      ref={sectionRef}
      id="proceso-constr"
      className="section-spacing bg-surface"
      aria-labelledby="proceso-heading"
    >
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2
            id="proceso-heading"
            className="text-h2 font-bold text-foreground mb-6 text-balance"
          >
            Tu cadena de suministro, bajo control
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto mb-12">
          {pasos.map((paso, index) => (
            <div
              key={index}
              className="relative flex flex-col items-center text-center animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
              onMouseEnter={() => handleStepHover(index, paso.titulo)}
            >
              {/* Connector line */}
              {index < pasos.length - 1 && (
                <div className="hidden lg:block absolute top-10 left-1/2 w-full h-0.5 bg-accent/20 z-0" aria-hidden="true" />
              )}

              {/* Icon Circle */}
              <div className="relative z-10 w-20 h-20 rounded-full bg-accent/10 flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-all duration-300 border-2 border-line hover:border-accent/50">
                <paso.icon className="w-10 h-10 text-accent" aria-hidden="true" />
              </div>

              {/* Number */}
              <div className="text-sm font-bold text-accent mb-3">
                Paso {paso.numero}
              </div>

              {/* Title */}
              <h3 className="text-lg font-bold text-foreground mb-3">
                {paso.titulo}
              </h3>

              {/* Description */}
              <p className="text-sm text-muted-foreground leading-relaxed">
                {paso.descripcion}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button
            size="lg"
            onClick={handleScrollToForm}
            aria-label="Solicitar propuesta personalizada"
          >
            Solicitar propuesta personalizada
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProcesoTrabajo;
