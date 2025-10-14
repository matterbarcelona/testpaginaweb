import { Button } from "@/components/ui/button";
import { analyticsEvents } from "@/lib/analytics";
import heroImageJpg from "@/assets/hero-constructores.jpg";
import { useEffect } from "react";

const ConstructoresHero = () => {
  // Preload critical resources
  useEffect(() => {
    const preloadLink = document.createElement('link');
    preloadLink.rel = 'preload';
    preloadLink.as = 'image';
    preloadLink.href = heroImageJpg;
    document.head.appendChild(preloadLink);

    return () => {
      document.head.removeChild(preloadLink);
    };
  }, []);

  const handleScrollToForm = () => {
    analyticsEvents.trackEvent('cta_click', {
      label: 'Solicitar presupuesto',
      location: 'hero_constructores',
      path: window.location.pathname
    });
    document.getElementById('budget-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleContactClick = () => {
    analyticsEvents.trackEvent('cta_click', {
      label: 'Hablar con un técnico',
      location: 'hero_constructores',
      path: '/contacto'
    });
    window.location.href = '/contacto';
  };

  return (
    <section
      id="hero-constr"
      className="relative min-h-[85vh] flex items-center justify-center overflow-hidden bg-background"
      aria-label="Hero Constructores"
    >
      {/* Background Image with picture element for WebP support */}
      <div className="absolute inset-0 z-0">
        <picture>
          <source srcSet={heroImageJpg} type="image/jpeg" />
          <img
            src={heroImageJpg}
            alt="Materiales profesionales de construcción en almacén, listos para entrega coordinada a obra"
            className="w-full h-full object-cover opacity-40"
            loading="eager"
            fetchPriority="high"
            width={1920}
            height={1080}
          />
        </picture>
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/85 to-background" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-h1 font-bold text-foreground mb-6 animate-fade-in text-balance">
            Materiales de confianza. Servicio técnico garantizado.
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 leading-relaxed animate-fade-in [animation-delay:100ms] text-balance">
            Simplificamos la gestión de materiales: cotización, suministro y entrega a obra, todo desde un único interlocutor.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in [animation-delay:200ms]">
            <Button
              size="lg"
              onClick={handleScrollToForm}
              className="w-full sm:w-auto text-lg px-8"
              aria-label="Solicitar presupuesto personalizado"
            >
              Solicitar presupuesto
            </Button>
            <Button
              size="lg"
              variant="secondary"
              onClick={handleContactClick}
              className="w-full sm:w-auto text-lg px-8"
              aria-label="Hablar con un técnico especializado"
            >
              Hablar con un técnico
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConstructoresHero;
