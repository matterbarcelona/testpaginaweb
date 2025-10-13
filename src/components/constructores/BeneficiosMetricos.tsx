const BeneficiosMetricos = () => {
  const metricas = [
    {
      valor: "-30%",
      descripcion: "Reducción media de gestiones administrativas",
    },
    {
      valor: "+25%",
      descripcion: "Ahorro de tiempo en coordinación de pedidos",
    },
    {
      valor: "100%",
      descripcion: "Cumplimiento de plazos comprometidos",
    },
  ];

  return (
    <section className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-foreground text-balance">
          Qué ganan nuestros clientes.
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-16 max-w-5xl mx-auto">
          {metricas.map((metrica, index) => (
            <div
              key={index}
              className="text-center group animate-fade-in-up"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="mb-6">
                <span className="text-6xl md:text-7xl font-bold text-accent group-hover:scale-110 inline-block transition-transform duration-300">
                  {metrica.valor}
                </span>
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
