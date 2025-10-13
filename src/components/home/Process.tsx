const Process = () => {
  const steps = [
    {
      number: "01",
      title: "Inspírate",
      description: "Explora la biblioteca o Material Bank",
    },
    {
      number: "02",
      title: "Selecciona",
      description: "Con nuestro equipo técnico",
    },
    {
      number: "03",
      title: "Recibe en 24 h",
      description: "Tus muestras físicas listas",
    },
    {
      number: "04",
      title: "Especifica y suministramos",
      description: "Documentación técnica y entrega",
    },
  ];

  return (
    <section className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Cómo funciona
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-6">
          {steps.map((step, index) => (
            <div
              key={index}
              className="relative group animate-fade-in-up"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="text-6xl md:text-7xl font-bold text-accent/20 mb-4 group-hover:text-accent/30 transition-colors duration-500">
                {step.number}
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-accent transition-colors duration-300">
                {step.title}
              </h3>
              <p className="text-[#E2E2E2] leading-relaxed">
                {step.description}
              </p>

              {/* Línea conectora */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-12 left-full w-full h-0.5 bg-gradient-to-r from-border to-transparent -translate-x-1/2 group-hover:from-accent/50 transition-colors duration-500" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
