import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Pause, Play } from "lucide-react";
import { analyticsEvents } from "@/lib/analytics";

const Testimonios = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const testimonials = [
    {
      texto: "Matter nos ahorró semanas de búsqueda y nos dio seguridad en las especificaciones.",
      autor: "GCA Architects",
      cargo: "Estudio de Arquitectura"
    },
    {
      texto: "Su conocimiento técnico nos permitió cumplir estándares WELL.",
      autor: "Peris+Toral Arquitectes",
      cargo: "Arquitectura Sostenible"
    },
    {
      texto: "Han cambiado nuestra forma de elegir materiales.",
      autor: "El Equipo Creativo",
      cargo: "Interiorismo y Arquitectura"
    }
  ];

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      const newIndex = (activeTestimonial + 1) % testimonials.length;
      setActiveTestimonial(newIndex);
      analyticsEvents.trackEvent('testimonial_slide', { 
        studio: testimonials[newIndex].autor,
        location: 'testimonios_prescriptores',
        trigger: 'auto'
      });
    }, 5000);

    return () => clearInterval(interval);
  }, [activeTestimonial, testimonials, isPaused]);

  const handlePrevious = () => {
    const newIndex = activeTestimonial === 0 ? testimonials.length - 1 : activeTestimonial - 1;
    setActiveTestimonial(newIndex);
    analyticsEvents.trackEvent('testimonial_slide', { 
      studio: testimonials[newIndex].autor,
      location: 'testimonios_prescriptores',
      trigger: 'previous'
    });
  };

  const handleNext = () => {
    const newIndex = (activeTestimonial + 1) % testimonials.length;
    setActiveTestimonial(newIndex);
    analyticsEvents.trackEvent('testimonial_slide', { 
      studio: testimonials[newIndex].autor,
      location: 'testimonios_prescriptores',
      trigger: 'next'
    });
  };

  return (
    <section 
      id="testimonios-pres"
      className="py-20 md:py-32 bg-background"
      aria-labelledby="testimonios-heading"
    >
      <div className="container mx-auto px-6">
        <h2 
          id="testimonios-heading"
          className="text-3xl md:text-5xl font-bold mb-16 text-foreground text-center text-balance"
        >
          La confianza de los estudios que lideran el diseño
        </h2>

        {/* Testimonials Slider */}
        <div className="max-w-4xl mx-auto">
          <div 
            className="bg-surface border border-line rounded-lg p-8 md:p-12 relative"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            {/* Controls Prev/Next */}
            <div className="absolute top-1/2 -translate-y-1/2 left-4 z-10">
              <button
                onClick={handlePrevious}
                className="w-10 h-10 rounded-full bg-accent/10 hover:bg-accent/20 border border-accent/30 flex items-center justify-center transition-all duration-300 hover:scale-110"
                aria-label="Ver testimonio anterior"
              >
                <ChevronLeft className="w-5 h-5 text-accent" />
              </button>
            </div>
            <div className="absolute top-1/2 -translate-y-1/2 right-4 z-10">
              <button
                onClick={handleNext}
                className="w-10 h-10 rounded-full bg-accent/10 hover:bg-accent/20 border border-accent/30 flex items-center justify-center transition-all duration-300 hover:scale-110"
                aria-label="Ver siguiente testimonio"
              >
                <ChevronRight className="w-5 h-5 text-accent" />
              </button>
            </div>

            {/* Pause/Play */}
            <div className="absolute top-4 right-4">
              <button
                onClick={() => setIsPaused(!isPaused)}
                className="w-8 h-8 rounded-full bg-accent/10 hover:bg-accent/20 border border-accent/30 flex items-center justify-center transition-all duration-300"
                aria-label={isPaused ? "Reanudar rotación automática" : "Pausar rotación automática"}
              >
                {isPaused ? (
                  <Play className="w-4 h-4 text-accent" />
                ) : (
                  <Pause className="w-4 h-4 text-accent" />
                )}
              </button>
            </div>

            <div 
              className="relative min-h-[180px] flex items-center justify-center"
              aria-live="polite"
              aria-atomic="true"
            >
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 flex flex-col items-center justify-center text-center transition-all duration-500 ${
                    index === activeTestimonial
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-4 pointer-events-none"
                  }`}
                >
                  <blockquote className="text-xl md:text-2xl text-foreground mb-4 font-light italic px-12">
                    "{testimonial.texto}"
                  </blockquote>
                  <cite className="not-italic">
                    <div className="text-accent font-semibold">{testimonial.autor}</div>
                    <div className="text-sm text-muted-foreground mt-1">{testimonial.cargo}</div>
                  </cite>
                </div>
              ))}
            </div>

            {/* Dots indicator */}
            <div className="flex justify-center gap-2 mt-8">
              {testimonials.map((testimonial, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setActiveTestimonial(index);
                    analyticsEvents.trackEvent('testimonial_slide', { 
                      studio: testimonial.autor,
                      location: 'testimonios_prescriptores',
                      trigger: 'manual'
                    });
                  }}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === activeTestimonial
                      ? "bg-accent w-8"
                      : "bg-line hover:bg-accent/50"
                  }`}
                  aria-label={`Ver testimonio de ${testimonial.autor}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonios;
