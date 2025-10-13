const Process = () => {
  const steps = [
    {
      number: "01",
      title: "Inspiración",
      description: "Exploramos tu visión y necesidades del proyecto"
    },
    {
      number: "02",
      title: "Selección curada",
      description: "Nuestro equipo propone las mejores opciones"
    },
    {
      number: "03",
      title: "Muestra en 24h",
      description: "Recibe muestras físicas para tomar decisiones"
    },
    {
      number: "04",
      title: "Especificación & Suministro",
      description: "Documentación técnica y entrega a obra"
    }
  ];

  return (
    <section className="py-24 bg-card">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Cómo funciona
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Un proceso simple que ahorra tiempo y reduce riesgos
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="text-6xl font-bold text-primary/20 mb-4">
                {step.number}
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                {step.title}
              </h3>
              <p className="text-muted-foreground">
                {step.description}
              </p>
              
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-border -translate-x-1/2" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
