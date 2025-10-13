import { useState, useEffect } from "react";
import { analyticsEvents } from "@/lib/analytics";

const Testimonios = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

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
    const interval = setInterval(() => {
      const newIndex = (activeTestimonial + 1) % testimonials.length;
      setActiveTestimonial(newIndex);
      analyticsEvents.trackEvent('testimonial_slide', { 
        studio: testimonials[newIndex].autor,
        location: 'testimonios_prescriptores'
      });
    }, 5000);

    return () => clearInterval(interval);
  }, [activeTestimonial, testimonials]);

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
          <div className="bg-surface border border-line rounded-lg p-8 md:p-12">
            <div className="relative min-h-[180px] flex items-center justify-center">
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
