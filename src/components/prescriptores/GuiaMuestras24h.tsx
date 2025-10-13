import { useEffect, useRef } from "react";
import { FileSearch, Package, Truck } from "lucide-react";
import { analyticsEvents } from "@/lib/analytics";

const GuiaMuestras24h = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const hasTracked = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasTracked.current) {
            analyticsEvents.guideView('muestras_24h');
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

  const steps = [
    {
      icon: FileSearch,
      number: "01",
      title: "Solicita online o por teléfono",
      description: "Indica material, acabado y destino de envío. Podemos asesorarte sobre alternativas."
    },
    {
      icon: Package,
      number: "02",
      title: "Preparamos y etiquetamos",
      description: "Todas las muestras llevan ficha técnica y referencia para fácil identificación."
    },
    {
      icon: Truck,
      number: "03",
      title: "Recíbelas en 24h",
      description: "Envío urgente garantizado. Si necesitas más, solo tienes que pedir."
    }
  ];

  return (
    <section 
      ref={sectionRef}
      className="py-20 md:py-32 bg-background" 
      aria-labelledby="guia-muestras-heading"
    >
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 animate-section">
          <h2 
            id="guia-muestras-heading"
            className="text-3xl md:text-5xl font-bold mb-6 text-foreground"
          >
            Cómo funcionan las muestras en 24h
          </h2>
          <p className="text-body text-muted-foreground leading-relaxed">
            Un proceso sencillo para que tomes decisiones rápidas y acertadas.
          </p>
        </div>

        {/* Steps */}
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div
                  key={index}
                  className="relative animate-section"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  {/* Connector line (desktop only) */}
                  {index < steps.length - 1 && (
                    <div 
                      className="hidden md:block absolute top-20 left-full w-full h-0.5 bg-gradient-to-r from-accent to-transparent -translate-x-1/2 z-0"
                      aria-hidden="true"
                    />
                  )}

                  {/* Card */}
                  <div className="bg-card border border-line rounded-lg p-8 text-center hover:border-accent transition-smooth relative z-10">
                    {/* Number badge */}
                    <div className="absolute -top-4 -right-4 w-12 h-12 rounded-full bg-accent text-accent-foreground flex items-center justify-center font-bold text-small shadow-md">
                      {step.number}
                    </div>

                    {/* Icon */}
                    <div className="flex justify-center mb-6">
                      <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center">
                        <Icon 
                          className="w-8 h-8 text-accent" 
                          aria-hidden="true"
                        />
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-semibold text-foreground mb-4">
                      {step.title}
                    </h3>

                    {/* Description */}
                    <p className="text-small text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 text-center animate-section stagger-3">
          <p className="text-body text-muted-foreground mb-4">
            ¿Necesitas muestras ahora?
          </p>
          <a 
            href="/biblioteca" 
            className="inline-flex items-center gap-2 text-accent hover:text-accent/80 font-semibold transition-smooth"
          >
            Explorar biblioteca de materiales
            <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default GuiaMuestras24h;
