import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { analyticsEvents } from "@/lib/analytics";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navLinks = [
    { label: "Prescriptores", href: "/prescriptores" },
    { label: "Fabricantes", href: "/fabricantes" },
    { label: "Constructores", href: "/constructores" },
    { label: "Biblioteca", href: "/biblioteca" },
    { label: "Proyectos", href: "/proyectos" },
    { label: "Journal", href: "/journal" },
    { label: "Sobre", href: "/sobre" },
    { label: "Contacto", href: "/contacto" },
  ];

  const handleCtaClick = () => {
    analyticsEvents.ctaSolicitarMuestra('navbar');
    window.location.href = '/biblioteca';
  };

  return (
    <nav
      className={`sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border transition-all duration-300 ${
        scrolled ? "shadow-lg" : ""
      }`}
      aria-label="Navegación principal"
    >
      <div className="container mx-auto px-6">
        <div className={`flex items-center justify-between transition-all duration-300 ${scrolled ? "h-16" : "h-20"}`}>
          {/* Logo */}
          <Link
            to="/"
            className="text-2xl font-bold text-foreground hover:text-accent transition-colors duration-300 focus-visible:outline-accent"
            aria-label="Matter Group - Ir a inicio"
          >
            Matter
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={`text-sm text-muted-foreground hover:text-accent transition-colors duration-300 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:bg-accent after:transition-all after:duration-300 focus-visible:outline-accent ${
                  location.pathname === link.href
                    ? "text-accent after:w-full"
                    : "after:w-0 hover:after:w-full"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* CTA Desktop */}
          <div className="hidden lg:block">
            <Button 
              className="hover:scale-105 transition-transform duration-300"
              onClick={handleCtaClick}
              aria-label="Solicitar muestra de materiales"
            >
              Solicitar muestra
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-accent hover:text-accent/80 transition-colors duration-300 focus-visible:outline-accent"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={isOpen}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isOpen ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="py-6 border-t border-border animate-fade-in">
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className={`text-sm transition-colors duration-300 focus-visible:outline-accent ${
                    location.pathname === link.href
                      ? "text-accent font-medium"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <Button 
                className="w-full mt-4 hover:scale-105 transition-transform duration-300"
                onClick={() => {
                  handleCtaClick();
                  setIsOpen(false);
                }}
                aria-label="Solicitar muestra de materiales"
              >
                Solicitar muestra
              </Button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
