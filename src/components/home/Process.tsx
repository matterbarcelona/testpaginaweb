import { analyticsEvents } from "@/lib/analytics";

const Process = () => {
  const steps = [
    {
      number: "01",
      title: "Inspírate",
      description: "Explora la biblioteca física y digital",
    },
    {
      number: "02",
      title: "Selecciona",
      description: "Asesoramiento técnico personalizado",
    },
    {
      number: "03",
      title: "Prueba",
      description: "Recibe muestras en 24 h",
    },
    {
      number: "04",
      title: "Especifica",
      description: "Validación de materiales y fichas técnicas",
    },
    {
      number: "05",
      title: "Entregamos",
      description: "Suministro y soporte logístico a obra",
    },
  ];

  return (
    <section 
      id="proceso-360" 
      className="py-20 md:py-32 bg-background"
      aria-labelledby="proceso-heading"
    >
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 
            id="proceso-heading"
            className="text-3xl md:text-5xl font-bold text-foreground mb-4 text-balance"
          >
            Un proceso completo, de la idea a la obra
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Te acompañamos en cada fase del proyecto con expertise técnico y soporte integral
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-4">
          {steps.map((step, index) => (
            <div
              key={index}
              className="relative group"
              onMouseEnter={() => {
                analyticsEvents.trackEvent('process_step_view', {
                  step: step.title,
                  position: index + 1,
                  location: 'home_proceso'
                });
              }}
            >
              <div className="text-6xl md:text-7xl font-bold text-accent/20 mb-4 group-hover:text-accent/40 transition-colors duration-300">
                {step.number}
              </div>
              <h3 className="text-lg md:text-xl font-semibold text-foreground mb-3 group-hover:text-accent transition-colors duration-300">
                {step.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
                {step.description}
              </p>

              {/* Línea conectora */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-12 left-full w-full h-0.5 bg-gradient-to-r from-line to-transparent -translate-x-1/2 group-hover:from-accent/50 transition-colors duration-300" 
                  aria-hidden="true"
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
