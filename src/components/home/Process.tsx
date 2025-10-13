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
    <section id="proceso-360" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-section">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Un proceso completo, de la idea a la obra.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-4">
          {steps.map((step, index) => (
            <div
              key={index}
              className="relative group animate-section"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <div className="text-6xl md:text-7xl font-bold text-accent/20 mb-4 group-hover:text-accent/30 transition-button">
                {step.number}
              </div>
              <h3 className="text-lg md:text-xl font-semibold text-foreground mb-3 group-hover:text-accent transition-smooth">
                {step.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
                {step.description}
              </p>

              {/* Línea conectora */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-12 left-full w-full h-0.5 bg-gradient-to-r from-border to-transparent -translate-x-1/2 group-hover:from-accent/50 transition-smooth" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
