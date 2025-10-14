import { Button } from "@/components/ui/button";
import { Search, Target, TrendingUp } from "lucide-react";
import { analyticsEvents } from "@/lib/analytics";

const ProcesoTGMA = () => {
  const pasos = [
    {
      numero: "1",
      icon: Search,
      titulo: "Diagnóstico de posicionamiento",
      descripcion: "Analizamos tus objetivos de negocio, portafolio de productos y posicionamiento actual en el mercado."
    },
    {
      numero: "2",
      icon: Target,
      titulo: "Plan estratégico",
      descripcion: "Definimos exposición en materiotecas, calendario de contenidos, eventos y acciones de networking."
    },
    {
      numero: "3",
      icon: TrendingUp,
      titulo: "Activación & reporting",
      descripcion: "Ejecutamos el plan y te enviamos reportes mensuales con leads, interacciones y resultados medibles."
    }
  ];

  return (
    <section 
      id="proceso-tgma"
      className="py-20 md:py-32 bg-background"
      aria-labelledby="proceso-heading"
    >
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 
            id="proceso-heading"
            className="text-3xl md:text-5xl font-bold mb-6 text-foreground text-balance"
          >
            Cómo activamos tu presencia en el ecosistema Matter
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Un proceso estratégico diseñado para maximizar resultados desde el día uno
          </p>
        </div>

        {/* Timeline */}
        <div className="max-w-5xl mx-auto">
          {/* Desktop: Horizontal */}
          <div className="hidden lg:block">
            <div className="relative">
              {/* Line */}
              <div className="absolute top-16 left-0 right-0 h-0.5 bg-line" />
              <div className="absolute top-16 left-0 h-0.5 bg-accent transition-all duration-1000" style={{ width: '100%' }} />
              
              <div className="grid grid-cols-3 gap-8">
                {pasos.map((paso, index) => {
                  const Icon = paso.icon;
                  return (
                    <div
                      key={index}
                      className="relative"
                      onMouseEnter={() => {
                        analyticsEvents.trackEvent('timeline_step_view', {
                          step: paso.titulo,
                          position: index + 1,
                          location: 'proceso_tgma'
                        });
                      }}
                    >
                      <div className="flex flex-col items-center text-center">
                        {/* Circle with number */}
                        <div className="w-32 h-32 rounded-full bg-accent text-background flex items-center justify-center mb-6 z-10 relative group hover:scale-110 transition-transform duration-300 cursor-pointer">
                          <div className="flex flex-col items-center">
                            <Icon className="w-10 h-10 mb-2" />
                            <span className="text-sm font-bold">Paso {paso.numero}</span>
                          </div>
                        </div>

                        <h3 className="text-xl font-semibold text-foreground mb-3">
                          {paso.titulo}
                        </h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {paso.descripcion}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Mobile: Vertical */}
          <div className="lg:hidden space-y-8">
            {pasos.map((paso, index) => {
              const Icon = paso.icon;
              return (
                <div key={index} className="flex gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-20 h-20 rounded-full bg-accent text-background flex flex-col items-center justify-center">
                      <Icon className="w-6 h-6 mb-1" />
                      <span className="text-xs font-bold">Paso {paso.numero}</span>
                    </div>
                  </div>
                  <div className="flex-1 pt-2">
                    <h3 className="text-lg font-semibold text-foreground mb-2">
                      {paso.titulo}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {paso.descripcion}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Infografía descargable */}
        <div className="mt-16 max-w-2xl mx-auto">
          <div className="bg-surface border border-line rounded-lg p-8 text-center hover:border-accent/50 transition-all duration-300">
            <h3 className="text-lg font-semibold text-foreground mb-3">
              Infografía: Proceso TGMA en 3 pasos
            </h3>
            <p className="text-sm text-muted-foreground mb-4">
              Descarga el resumen visual del proceso completo
            </p>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-highlight border border-accent/20 rounded-lg text-sm text-muted-foreground">
              <span className="w-2 h-2 rounded-full bg-warning animate-pulse" />
              TODO CMS: Subir infografía (SVG/PDF) — "Proceso TGMA en 3 pasos"
            </div>
          </div>
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-12">
          <Button
            size="lg"
            onClick={() => {
              analyticsEvents.trackEvent('cta_click', {
                label: 'Solicitar calendario de acciones',
                location: 'proceso_tgma'
              });
              window.location.href = '/contacto';
            }}
            data-analytics="cta_click"
            data-label="Solicitar calendario - Proceso"
            aria-label="Solicitar calendario personalizado de acciones TGMA"
          >
            Solicitar calendario de acciones
          </Button>
          <Button
            variant="secondary"
            size="lg"
            onClick={() => {
              analyticsEvents.trackEvent('cta_click', {
                label: 'Agendar reunión TGMA',
                location: 'proceso_tgma'
              });
              window.location.href = '/contacto';
            }}
            data-analytics="cta_click"
            data-label="Agendar reunión TGMA - Proceso"
            aria-label="Agendar reunión con el equipo TGMA"
          >
            Agendar reunión
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProcesoTGMA;
