const Process = () => {
  const steps = [
    {
      number: "01",
      title: "Inspiración",
      description: "Exploramos tu visión y necesidades del proyecto",
    },
    {
      number: "02",
      title: "Selección curada",
      description: "Nuestro equipo propone las mejores opciones",
    },
    {
      number: "03",
      title: "Muestra en 24h",
      description: "Recibe muestras físicas para tomar decisiones",
    },
    {
      number: "04",
      title: "Especificación & Suministro",
      description: "Documentación técnica y entrega a obra",
    },
  ];

  return (
    <section className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Cómo funciona
          </h2>
          <p className="text-lg md:text-xl text-[#E2E2E2] max-w-2xl mx-auto">
            Un proceso simple que ahorra tiempo y reduce riesgos
          </p>
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
