import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { analyticsEvents } from "@/lib/analytics";

const StickyCTA = () => {
  const location = useLocation();
  const params = useParams();
  const [isVisible, setIsVisible] = useState(false);
  const [hasTrackedVisible, setHasTrackedVisible] = useState(false);
  const [isKeyboardVisible, setIsKeyboardVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPercentage = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
      
      // Show on desktop after 20% scroll, always visible on mobile
      if (window.innerWidth >= 768) {
        setIsVisible(scrollPercentage >= 20);
      } else {
        setIsVisible(true);
      }
    };

    // Detect keyboard on mobile (hides sticky CTA)
    const handleResize = () => {
      if (window.innerWidth < 768) {
        const isSmaller = window.innerHeight < window.screen.height * 0.75;
        setIsKeyboardVisible(isSmaller);
      }
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleResize, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Track visibility after 2s
  useEffect(() => {
    if (isVisible && !hasTrackedVisible) {
      const timer = setTimeout(() => {
        const gtag = (window as any).gtag;
        if (typeof gtag === 'function') {
          gtag('event', 'cta_visible', {
            page_path: location.pathname,
          });
        }
        setHasTrackedVisible(true);
      }, 2000);
      
      return () => clearTimeout(timer);
    }
  }, [isVisible, hasTrackedVisible, location.pathname]);

  const trackClick = (label: string) => {
    const gtag = (window as any).gtag;
    if (typeof gtag === 'function') {
      gtag('event', 'cta_sticky_click', {
        label: label,
        page_path: location.pathname,
      });
    }
  };

  const getCtaConfig = () => {
    const path = location.pathname;
    
    // Fabricantes
    if (path === '/fabricantes') {
      return {
        primary: {
          text: "Quiero ser partner TGMA",
          onClick: () => {
            trackClick('Quiero ser partner TGMA - /fabricantes');
            analyticsEvents.ctaSolicitarMuestra('sticky_cta_fabricantes');
            const form = document.getElementById('partner-form');
            if (form) {
              form.scrollIntoView({ behavior: 'smooth' });
            } else {
              window.location.href = '/contacto';
            }
          },
          ariaLabel: "Formulario para ser partner TGMA",
        },
        secondary: {
          text: "Solicitar reunión",
          onClick: () => {
            trackClick('Solicitar reunión - /fabricantes');
            analyticsEvents.ctaReservarVisita('sticky_cta_fabricantes');
            window.location.href = '/contacto';
          },
          ariaLabel: "Solicitar reunión con nuestro equipo",
        }
      };
    }
    
    // Constructores
    if (path === '/constructores') {
      return {
        primary: {
          text: "Solicitar presupuesto",
          onClick: () => {
            trackClick('Solicitar presupuesto - /constructores');
            analyticsEvents.ctaSolicitarPresupuesto('sticky_cta_constructores');
            const form = document.getElementById('presupuesto-form');
            if (form) {
              form.scrollIntoView({ behavior: 'smooth' });
            } else {
              window.location.href = '/contacto';
            }
          },
          ariaLabel: "Solicitar presupuesto para tu proyecto",
        },
        secondary: {
          text: "Hablar con técnico",
          onClick: () => {
            trackClick('Hablar con técnico - /constructores');
            analyticsEvents.ctaReservarVisita('sticky_cta_constructores');
            window.location.href = '/contacto';
          },
          ariaLabel: "Contactar con técnico especializado",
        }
      };
    }
    
    // Biblioteca
    if (path === '/biblioteca') {
      return {
        primary: {
          text: "Pedir muestra",
          onClick: () => {
            trackClick('Pedir muestra - /biblioteca');
            analyticsEvents.ctaSolicitarMuestra('sticky_cta_biblioteca');
            const form = document.getElementById('muestra-form');
            if (form) {
              form.scrollIntoView({ behavior: 'smooth' });
            }
          },
          ariaLabel: "Pedir muestra de material",
        },
        secondary: {
          text: "Ver Material Bank",
          onClick: () => {
            trackClick('Ver Material Bank - /biblioteca');
            window.location.href = '/biblioteca#materialbank';
          },
          ariaLabel: "Ver cómo funciona Material Bank",
        }
      };
    }
    
    // Proyectos (lista y detalle)
    if (path === '/proyectos' || path.startsWith('/proyectos/')) {
      const slug = params.slug || '';
      return {
        primary: {
          text: "Solicitar propuesta similar",
          onClick: () => {
            trackClick(`Solicitar propuesta similar - ${path}`);
            analyticsEvents.ctaSolicitarPresupuesto('sticky_cta_proyectos');
            window.location.href = `/contacto?tipo=proyecto&slug=${slug}`;
          },
          ariaLabel: "Solicitar propuesta similar a este proyecto",
        },
        secondary: {
          text: "Explorar más proyectos",
          onClick: () => {
            trackClick('Explorar más proyectos');
            window.location.href = '/proyectos';
          },
          ariaLabel: "Ver más proyectos",
        }
      };
    }
    
    // Journal (lista y detalle)
    if (path === '/journal' || path.startsWith('/journal/')) {
      return {
        primary: {
          text: "Ver materiales",
          onClick: () => {
            trackClick(`Ver materiales - ${path}`);
            analyticsEvents.ctaSolicitarMuestra('sticky_cta_journal');
            window.location.href = '/biblioteca';
          },
          ariaLabel: "Ver materiales mencionados",
        },
        secondary: {
          text: "Suscribirme al Journal",
          onClick: () => {
            trackClick('Suscribirme al Journal');
            const newsletter = document.querySelector('footer form');
            if (newsletter) {
              newsletter.scrollIntoView({ behavior: 'smooth' });
            }
          },
          ariaLabel: "Suscribirse al newsletter",
        }
      };
    }
    
    // Sobre y Contacto
    if (path === '/sobre' || path === '/contacto') {
      return {
        primary: {
          text: "Agendar visita",
          onClick: () => {
            trackClick(`Agendar visita - ${path}`);
            analyticsEvents.ctaReservarVisita('sticky_cta_sobre_contacto');
            window.location.href = '/contacto';
          },
          ariaLabel: "Agendar visita a materioteca",
        },
        secondary: {
          text: "Descubrir materiotecas",
          onClick: () => {
            trackClick('Descubrir materiotecas');
            window.location.href = '/biblioteca';
          },
          ariaLabel: "Explorar nuestras materiotecas",
        }
      };
    }
    
    // Default (Home, Prescriptores, etc.)
    return {
      primary: {
        text: "Solicitar muestra",
        onClick: () => {
          trackClick(`Solicitar muestra - ${path}`);
          analyticsEvents.ctaSolicitarMuestra('sticky_cta_default');
          window.location.href = '/biblioteca';
        },
        ariaLabel: "Solicitar muestra de materiales",
      },
      secondary: {
        text: "Reservar visita",
        onClick: () => {
          trackClick(`Reservar visita - ${path}`);
          analyticsEvents.ctaReservarVisita('sticky_cta_default');
          window.location.href = '/contacto';
        },
        ariaLabel: "Reservar visita a materioteca",
      }
    };
  };

  const config = getCtaConfig();

  if (!isVisible || isKeyboardVisible) return null;

  return (
    <div 
      className="fixed bottom-0 md:bottom-6 md:right-6 left-0 md:left-auto right-0 md:right-6 z-40 transition-opacity duration-300 ease-in-out motion-reduce:transition-none"
      role="region"
      aria-label="Barra de acciones rápidas"
    >
      {/* Mobile: Bottom bar */}
      <div className="md:hidden bg-[rgba(15,15,16,0.9)] backdrop-blur-md border-t-2 border-accent p-4 shadow-2xl">
        <div className="flex gap-3">
          <Button 
            className="flex-1 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 active:scale-97 hover:scale-105 focus-visible:outline-accent focus-visible:outline-2 focus-visible:outline-offset-2" 
            onClick={config.primary.onClick}
            aria-label={config.primary.ariaLabel}
          >
            {config.primary.text}
          </Button>
          <Button 
            variant="secondary" 
            className="flex-1 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 active:scale-97 hover:scale-105 focus-visible:outline-accent focus-visible:outline-2 focus-visible:outline-offset-2" 
            onClick={config.secondary.onClick}
            aria-label={config.secondary.ariaLabel}
          >
            {config.secondary.text}
          </Button>
        </div>
      </div>

      {/* Desktop: Side panel */}
      <div className="hidden md:flex flex-col gap-3 w-64 bg-[rgba(15,15,16,0.9)] backdrop-blur-md border-t-2 border-accent rounded-xl p-4 shadow-2xl animate-fade-in">
        <Button 
          className="w-full rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 active:scale-97 hover:scale-105 focus-visible:outline-accent focus-visible:outline-2 focus-visible:outline-offset-2" 
          onClick={config.primary.onClick}
          aria-label={config.primary.ariaLabel}
        >
          {config.primary.text}
        </Button>
        <Button 
          variant="secondary" 
          className="w-full rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 active:scale-97 hover:scale-105 focus-visible:outline-accent focus-visible:outline-2 focus-visible:outline-offset-2" 
          onClick={config.secondary.onClick}
          aria-label={config.secondary.ariaLabel}
        >
          {config.secondary.text}
        </Button>
      </div>
    </div>
  );
};

export default StickyCTA;
