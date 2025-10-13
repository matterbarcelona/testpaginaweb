import { useState, useEffect } from "react";
import { analyticsEvents } from "@/lib/analytics";

const TrustSignals = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const logos = [
    { nombre: "GCA Architects", logo: "/placeholder.svg" },
    { nombre: "Estudio Mesura", logo: "/placeholder.svg" },
    { nombre: "El Equipo Creativo", logo: "/placeholder.svg" },
    { nombre: "Barozzi Veiga", logo: "/placeholder.svg" },
    { nombre: "Flores & Prats", logo: "/placeholder.svg" },
    { nombre: "Stone Designs", logo: "/placeholder.svg" },
    { nombre: "Florim Ceramiche", logo: "/placeholder.svg" },
    { nombre: "Cosentino", logo: "/placeholder.svg" },
    { nombre: "Porcelanosa", logo: "/placeholder.svg" },
    { nombre: "Laminam", logo: "/placeholder.svg" },
    { nombre: "Kerakoll", logo: "/placeholder.svg" },
    { nombre: "FMG", logo: "/placeholder.svg" }
  ];

  const testimonials = [
    {
      texto: "Matter nos ahorró semanas y garantizó calidad en obra.",
      autor: "GCA Architects"
    },
    {
      texto: "Curaduría impecable y rápida.",
      autor: "Estudio Mesura"
    },
    {
      texto: "Suministro y soporte técnico de primer nivel.",
      autor: "El Equipo Creativo"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <section id="confian" className="py-20 md:py-32 bg-background" aria-labelledby="confian-heading">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 id="confian-heading" className="text-3xl md:text-5xl font-bold mb-16 text-foreground text-center text-balance">
            Confían en Matter Group
          </h2>

          {/* Logo wall */}
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 mb-16">
            {logos.map((logo, idx) => (
              <div
                key={idx}
                className="flex items-center justify-center p-6 bg-surface rounded-lg border border-line hover:border-accent/50 transition-all duration-300 hover:-translate-y-1 cursor-default"
                data-analytics="logo_wall_interaction"
                data-label={logo.nombre}
                onClick={() => {
                  analyticsEvents.trackEvent('logo_wall_interaction', { 
                    brand: logo.nombre,
                    location: 'home_confian'
                  });
                }}
              >
                <img
                  src={logo.logo}
                  alt={`Logo ${logo.nombre}`}
                  className="max-w-full h-10 object-contain opacity-60 hover:opacity-100 transition-opacity"
                  loading="lazy"
                />
              </div>
            ))}
          </div>

          {/* Testimonials Slider */}
          <div className="bg-surface border border-line rounded-lg p-8 md:p-12">
            <div className="relative min-h-[140px] flex items-center justify-center">
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
                    "{testimonial.texto}"
                  </blockquote>
                  <cite className="text-accent font-medium not-italic">
                    — {testimonial.autor}
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
                      : "bg-line hover:bg-accent/50"
                  }`}
                  aria-label={`Ver testimonio ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustSignals;
