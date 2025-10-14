import { useState, useEffect } from "react";
import { ChevronUp, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const IndiceNavegacion = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  const sections = [
    { id: "ofrecemos", label: "Qué ofrecemos" },
    { id: "comparativa", label: "Comparativa" },
    { id: "proceso-constr", label: "Proceso" },
    { id: "cases-constr", label: "Casos reales" },
    { id: "metricas-constr", label: "Métricas" },
    { id: "budget-form", label: "Presupuesto" },
  ];

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section.id);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80; // navbar height
      const elementPosition = element.offsetTop - offset;
      window.scrollTo({
        top: elementPosition,
        behavior: "smooth",
      });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (!isVisible) return null;

  return (
    <>
      {/* Desktop: Sticky sidebar */}
      <aside
        className="hidden lg:block fixed left-8 top-1/2 -translate-y-1/2 z-40"
        aria-label="Navegación de secciones"
      >
        <nav className="bg-background border border-line rounded-lg p-4 shadow-lg max-w-[200px]">
          <ul className="space-y-2">
            {sections.map((section) => (
              <li key={section.id}>
                <button
                  onClick={() => scrollToSection(section.id)}
                  className={`w-full text-left text-sm px-3 py-2 rounded transition-colors ${
                    activeSection === section.id
                      ? "bg-accent text-background font-medium"
                      : "text-muted-foreground hover:bg-surface hover:text-foreground"
                  }`}
                  aria-label={`Ir a ${section.label}`}
                >
                  {section.label}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </aside>

      {/* Mobile: Bottom sheet + scroll-to-top button */}
      <div className="lg:hidden fixed bottom-6 right-6 z-40 flex flex-col gap-3">
        <Sheet>
          <SheetTrigger asChild>
            <Button
              size="icon"
              className="w-12 h-12 rounded-full shadow-lg"
              aria-label="Abrir navegación de secciones"
            >
              <Menu className="w-5 h-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="bottom" className="max-h-[80vh]">
            <SheetHeader>
              <SheetTitle>Ir a sección</SheetTitle>
            </SheetHeader>
            <nav className="mt-6">
              <ul className="space-y-2">
                {sections.map((section) => (
                  <li key={section.id}>
                    <button
                      onClick={() => scrollToSection(section.id)}
                      className={`w-full text-left px-4 py-3 rounded-lg transition-colors ${
                        activeSection === section.id
                          ? "bg-accent text-background font-medium"
                          : "bg-surface text-foreground hover:bg-surface/80"
                      }`}
                      aria-label={`Ir a ${section.label}`}
                    >
                      {section.label}
                    </button>
                  </li>
                ))}
              </ul>
            </nav>
          </SheetContent>
        </Sheet>

        <Button
          size="icon"
          variant="secondary"
          onClick={scrollToTop}
          className="w-12 h-12 rounded-full shadow-lg"
          aria-label="Volver arriba"
        >
          <ChevronUp className="w-5 h-5" />
        </Button>
      </div>
    </>
  );
};

export default IndiceNavegacion;
