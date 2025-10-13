import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { analyticsEvents } from "@/lib/analytics";

const StickyCTA = () => {
  const location = useLocation();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPercentage = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
      
      // Show on desktop after 25% scroll, always visible on mobile
      if (window.innerWidth >= 768) {
        setIsVisible(scrollPercentage >= 25);
      } else {
        setIsVisible(true);
      }
    };

    handleScroll(); // Initial check
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  const getCtaConfig = () => {
    const path = location.pathname;
    
    if (path === '/fabricantes') {
      return {
        primary: {
          text: "Quiero ser partner TGMA",
          onClick: () => {
            analyticsEvents.ctaSolicitarMuestra('sticky_cta_fabricantes');
            window.location.href = '/contacto';
          }
        },
        secondary: {
          text: "Solicitar reunión",
          onClick: () => {
            analyticsEvents.ctaReservarVisita('sticky_cta_fabricantes');
            window.location.href = '/contacto';
          }
        }
      };
    }
    
    if (path === '/constructores') {
      return {
        primary: {
          text: "Solicitar presupuesto",
          onClick: () => {
            analyticsEvents.ctaSolicitarPresupuesto('sticky_cta_constructores');
            window.location.href = '/contacto';
          }
        },
        secondary: {
          text: "Hablar con técnico",
          onClick: () => {
            analyticsEvents.ctaReservarVisita('sticky_cta_constructores');
            window.location.href = '/contacto';
          }
        }
      };
    }
    
    // Default for home, prescriptores, and other pages
    return {
      primary: {
        text: "Solicitar muestra",
        onClick: () => {
          analyticsEvents.ctaSolicitarMuestra('sticky_cta_default');
          window.location.href = '/biblioteca';
        }
      },
      secondary: {
        text: "Reservar visita",
        onClick: () => {
          analyticsEvents.ctaReservarVisita('sticky_cta_default');
          window.location.href = '/contacto';
        }
      }
    };
  };

  const config = getCtaConfig();

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-card/95 backdrop-blur-md border-t border-border p-4 shadow-2xl animate-slide-in-right">
      <div className="container mx-auto flex gap-3 max-w-4xl">
        <Button 
          className="flex-1 rounded-full shadow-lg hover:shadow-xl transition-all duration-300" 
          size="sm"
          onClick={config.primary.onClick}
          aria-label={config.primary.text}
        >
          {config.primary.text}
        </Button>
        <Button 
          variant="secondary" 
          className="flex-1 rounded-full shadow-lg hover:shadow-xl transition-all duration-300" 
          size="sm"
          onClick={config.secondary.onClick}
          aria-label={config.secondary.text}
        >
          {config.secondary.text}
        </Button>
      </div>
    </div>
  );
};

export default StickyCTA;
