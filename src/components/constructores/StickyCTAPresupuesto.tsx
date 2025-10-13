import { useEffect, useState } from "react";
import { Calculator } from "lucide-react";
import { Button } from "@/components/ui/button";
import { analyticsEvents } from "@/lib/analytics";

const StickyCTAPresupuesto = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show sticky CTA after scrolling 400px
      setIsVisible(window.scrollY > 400);
      
      // Hide when form is visible
      const formulario = document.getElementById('presupuesto-form');
      if (formulario) {
        const rect = formulario.getBoundingClientRect();
        const isFormVisible = rect.top < window.innerHeight && rect.bottom > 0;
        if (isFormVisible) {
          setIsVisible(false);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToForm = () => {
    analyticsEvents.ctaSolicitarPresupuesto('sticky_cta_constructores');
    const formulario = document.getElementById('presupuesto-form');
    if (formulario) {
      formulario.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div
      className={`fixed bottom-6 left-1/2 -translate-x-1/2 z-40 transition-all duration-300 ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-16 opacity-0 pointer-events-none"
      }`}
    >
      <Button
        onClick={scrollToForm}
        size="lg"
        className="shadow-2xl gap-2 px-8 py-6 text-base"
      >
        <Calculator size={20} />
        Solicitar presupuesto
      </Button>
    </div>
  );
};

export default StickyCTAPresupuesto;
