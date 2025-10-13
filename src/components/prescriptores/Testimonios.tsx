const Testimonios = () => {
  const testimonios = [
    {
      quote: "Matter nos ahorró semanas de búsqueda y nos dio seguridad en las especificaciones.",
      author: "GCA Architects",
    },
    {
      quote: "Su conocimiento técnico nos permitió cumplir los estándares WELL.",
      author: "Peris+Toral Arquitectes",
    },
    {
      quote: "Han cambiado nuestra forma de elegir materiales.",
      author: "El Equipo Creativo",
    },
  ];

  return (
    <section className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {testimonios.map((testimonio, index) => (
            <div
              key={index}
              className="text-center animate-fade-in-up"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <blockquote className="text-lg md:text-xl font-light italic text-muted-foreground mb-4">
                "{testimonio.quote}"
              </blockquote>
              <cite className="text-accent font-medium not-italic">
                — {testimonio.author}
              </cite>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonios;
