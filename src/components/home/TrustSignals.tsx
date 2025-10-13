import { useState, useEffect } from "react";

const TrustSignals = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const logos = [
    { name: "Florim", alt: "Florim - Fabricante de cerámica" },
    { name: "Finsa", alt: "Finsa - Tableros y madera" },
    { name: "LAMP", alt: "LAMP - Iluminación" },
    { name: "Claytec", alt: "Claytec - Materiales naturales" },
    { name: "Mardegan Legno", alt: "Mardegan Legno - Carpintería" },
    { name: "OLI", alt: "OLI - Sistemas sanitarios" },
    { name: "Cosentino", alt: "Cosentino - Superficies" },
    { name: "Tarkett", alt: "Tarkett - Pavimentos" },
  ];

  const testimonials = [
    {
      quote: "Matter nos ahorró semanas y garantizó calidad en obra.",
      author: "GCA Architects",
    },
    {
      quote: "La curaduría fue impecable: rápida, rigurosa y estética.",
      author: "Estudio Mesura",
    },
    {
      quote: "Nuestro showroom cambió nuestra forma de elegir materiales.",
      author: "El Equipo Creativo",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <section className="py-20 md:py-32 bg-card">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Confían en Matter Group.
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Más de 900 fabricantes y cientos de estudios trabajan con nosotros cada año.
          </p>
        </div>

        {/* Logos Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 mb-20 max-w-5xl mx-auto">
          {logos.map((logo, index) => (
            <div
              key={index}
              className="flex items-center justify-center p-6 bg-background/50 rounded-lg border border-border hover:border-accent/50 transition-all duration-300 group animate-fade-in-up"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <span className="text-muted-foreground group-hover:text-accent transition-colors duration-300 font-medium">
                {logo.name}
              </span>
            </div>
          ))}
        </div>

        {/* Testimonials Slider */}
        <div className="max-w-3xl mx-auto">
          <div className="relative min-h-[120px] flex items-center justify-center">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className={`absolute inset-0 flex flex-col items-center justify-center text-center transition-all duration-500 ${
                  index === activeTestimonial
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-4 pointer-events-none"
                }`}
              >
                <blockquote className="text-xl md:text-2xl text-foreground mb-4 font-light italic">
                  "{testimonial.quote}"
                </blockquote>
                <cite className="text-accent font-medium not-italic">
                  — {testimonial.author}
                </cite>
              </div>
            ))}
          </div>

          {/* Dots indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveTestimonial(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === activeTestimonial
                    ? "bg-accent w-8"
                    : "bg-border hover:bg-accent/50"
                }`}
                aria-label={`Ver testimonio ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustSignals;
