import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { analyticsEvents } from "@/lib/analytics";
import logosEstudios from "@/assets/logos-estudios.jpg";
import logosFabricantes from "@/assets/logos-fabricantes.jpg";

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
    <section id="confian" className="section-spacing bg-background" aria-labelledby="confian-heading">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 id="confian-heading" className="text-h2 font-bold mb-16 text-foreground text-center text-balance">
            Confían en Matter Group
          </h2>

          {/* Logo wall con imágenes generadas */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div 
              className="bg-surface rounded-lg border border-line p-8 hover:border-accent/50 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-default"
              data-analytics="logo_wall_interaction"
              data-label="Estudios de arquitectura"
              onClick={() => {
                analyticsEvents.trackEvent('logo_wall_interaction', { 
                  category: 'estudios',
                  location: 'home_confian'
                });
              }}
            >
              <h3 className="text-sm font-semibold text-muted-foreground mb-4 uppercase tracking-wider">Estudios de arquitectura</h3>
              <img
                src={logosEstudios}
                alt="Logos de estudios de arquitectura que confían en Matter Group: GCA Architects, Estudio Mesura, El Equipo Creativo, Barozzi Veiga, Flores & Prats, Stone Designs"
                className="w-full h-auto opacity-80 hover:opacity-100 transition-opacity"
                loading="lazy"
              />
            </div>
            
            <div 
              className="bg-surface rounded-lg border border-line p-8 hover:border-accent/50 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-default"
              data-analytics="logo_wall_interaction"
              data-label="Fabricantes de materiales"
              onClick={() => {
                analyticsEvents.trackEvent('logo_wall_interaction', { 
                  category: 'fabricantes',
                  location: 'home_confian'
                });
              }}
            >
              <h3 className="text-sm font-semibold text-muted-foreground mb-4 uppercase tracking-wider">Fabricantes de materiales</h3>
              <img
                src={logosFabricantes}
                alt="Logos de fabricantes de materiales que confían en Matter Group: Florim Ceramiche, Cosentino, Porcelanosa, Laminam, Kerakoll, FMG"
                className="w-full h-auto opacity-80 hover:opacity-100 transition-opacity"
                loading="lazy"
              />
            </div>
          </div>

          {/* Testimonials Slider with accessible controls */}
          <div className="bg-surface border border-line rounded-lg p-8 md:p-12 hover:border-accent/30 transition-all duration-300">
            <div className="relative min-h-[140px] flex items-center justify-center" role="region" aria-label="Testimonios de clientes" aria-live="polite">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 flex flex-col items-center justify-center text-center transition-all duration-500 ${
                    index === activeTestimonial
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-4 pointer-events-none"
                  }`}
                  aria-hidden={index !== activeTestimonial}
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

            {/* Navigation controls */}
            <div className="flex justify-center items-center gap-4 mt-8">
              <button
                onClick={() => {
                  const newIndex = activeTestimonial === 0 ? testimonials.length - 1 : activeTestimonial - 1;
                  setActiveTestimonial(newIndex);
                  analyticsEvents.trackEvent('slider_nav', {
                    location: 'trust_signals',
                    direction: 'previous',
                    testimonial: testimonials[newIndex].autor
                  });
                }}
                className="w-8 h-8 flex items-center justify-center rounded-full border border-line hover:border-accent hover:text-accent transition-all duration-300 focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
                aria-label="Testimonio anterior"
                aria-controls="testimonials-slider"
              >
                <ChevronLeft className="w-4 h-4" strokeWidth={1.5} aria-hidden="true" />
              </button>

              {/* Dots indicator */}
              <div className="flex gap-2" id="testimonials-slider">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setActiveTestimonial(index);
                      analyticsEvents.trackEvent('slider_nav', {
                        location: 'trust_signals',
                        direction: 'direct',
                        testimonial: testimonials[index].autor,
                        position: index + 1
                      });
                    }}
                    className={`h-2 rounded-full transition-all duration-300 focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 ${
                      index === activeTestimonial
                        ? "bg-accent w-8"
                        : "bg-line hover:bg-accent/50 w-2"
                    }`}
                    aria-label={`Ver testimonio ${index + 1} de ${testimonials.length}`}
                    aria-current={index === activeTestimonial}
                  />
                ))}
              </div>

              <button
                onClick={() => {
                  const newIndex = activeTestimonial === testimonials.length - 1 ? 0 : activeTestimonial + 1;
                  setActiveTestimonial(newIndex);
                  analyticsEvents.trackEvent('slider_nav', {
                    location: 'trust_signals',
                    direction: 'next',
                    testimonial: testimonials[newIndex].autor
                  });
                }}
                className="w-8 h-8 flex items-center justify-center rounded-full border border-line hover:border-accent hover:text-accent transition-all duration-300 focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
                aria-label="Testimonio siguiente"
                aria-controls="testimonials-slider"
              >
                <ChevronRight className="w-4 h-4" strokeWidth={1.5} aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustSignals;
