import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Instagram, Linkedin } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Footer = () => {
  const [email, setEmail] = useState("");
  const { toast } = useToast();

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      toast({
        title: "¡Gracias por suscribirte!",
        description: "Recibirás nuestras novedades mensualmente.",
      });
      setEmail("");
    }
  };

  const sedes = [
    {
      city: "Barcelona",
      address: "C/ Can Segalar 6, 08014",
      phone: "+34 93 333 22 44",
    },
    {
      city: "Madrid",
      address: "C/ Claudio Coello 45, 28001",
      phone: "+34 91 222 11 33",
    },
    {
      city: "Sotogrande",
      address: "Puerto Deportivo, Local 12",
      phone: "+34 95 555 77 11",
    },
  ];

  return (
    <footer className="bg-[#17181A] text-foreground">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Columna 1 - Sedes y contacto */}
          <div className="animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
            <h3 className="text-sm font-semibold text-foreground mb-6">
              Sedes Matter
            </h3>
            <div className="space-y-6">
              {sedes.map((sede, index) => (
                <div 
                  key={sede.city} 
                  className="group cursor-pointer"
                  style={{ animationDelay: `${0.15 + index * 0.05}s` }}
                >
                  <p className="text-sm font-medium text-foreground group-hover:text-accent transition-colors duration-300">
                    {sede.city}
                  </p>
                  <p className="text-sm text-[#9EA3A8] mt-1">{sede.address}</p>
                  <p className="text-sm text-[#9EA3A8]">{sede.phone}</p>
                </div>
              ))}
              <div className="pt-4">
                <p className="text-sm text-[#9EA3A8] mb-3">
                  Email: <a href="mailto:info@matter.group" className="text-foreground hover:text-accent transition-colors">info@matter.group</a>
                </p>
                <Link to="/contacto">
                  <Button 
                    variant="secondary" 
                    size="sm"
                    className="hover:scale-105 transition-transform duration-300"
                  >
                    Agendar visita
                  </Button>
                </Link>
              </div>
            </div>
          </div>

          {/* Columna 2 - Servicios */}
          <div className="animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            <h3 className="text-sm font-semibold text-foreground mb-6">Servicios</h3>
            <div className="flex flex-col space-y-3">
              <Link
                to="/prescriptores"
                className="text-sm text-[#9EA3A8] hover:text-accent transition-colors duration-300 relative inline-block after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-accent after:transition-all after:duration-300 hover:after:w-full"
              >
                Consultoría de materiales
              </Link>
              <Link
                to="/fabricantes"
                className="text-sm text-[#9EA3A8] hover:text-accent transition-colors duration-300 relative inline-block after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-accent after:transition-all after:duration-300 hover:after:w-full"
              >
                TGMA Agency (Fabricantes)
              </Link>
              <Link
                to="/constructores"
                className="text-sm text-[#9EA3A8] hover:text-accent transition-colors duration-300 relative inline-block after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-accent after:transition-all after:duration-300 hover:after:w-full"
              >
                Distribución & Supply
              </Link>
              <Link
                to="/biblioteca"
                className="text-sm text-[#9EA3A8] hover:text-accent transition-colors duration-300 relative inline-block after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-accent after:transition-all after:duration-300 hover:after:w-full"
              >
                Biblioteca & Muestras
              </Link>
            </div>
          </div>

          {/* Columna 3 - Empresa */}
          <div className="animate-fade-in-up" style={{ animationDelay: "0.25s" }}>
            <h3 className="text-sm font-semibold text-foreground mb-6">Empresa</h3>
            <div className="flex flex-col space-y-3">
              <Link
                to="/sobre"
                className="text-sm text-[#9EA3A8] hover:text-accent transition-colors duration-300 relative inline-block after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-accent after:transition-all after:duration-300 hover:after:w-full"
              >
                Sobre Matter
              </Link>
              <Link
                to="/eventos"
                className="text-sm text-[#9EA3A8] hover:text-accent transition-colors duration-300 relative inline-block after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-accent after:transition-all after:duration-300 hover:after:w-full"
              >
                Eventos & Talks
              </Link>
              <Link
                to="/journal"
                className="text-sm text-[#9EA3A8] hover:text-accent transition-colors duration-300 relative inline-block after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-accent after:transition-all after:duration-300 hover:after:w-full"
              >
                Journal
              </Link>
              <Link
                to="/proyectos"
                className="text-sm text-[#9EA3A8] hover:text-accent transition-colors duration-300 relative inline-block after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-accent after:transition-all after:duration-300 hover:after:w-full"
              >
                Proyectos
              </Link>
            </div>
          </div>

          {/* Columna 4 - Recursos y Legal */}
          <div className="animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
            <h3 className="text-sm font-semibold text-foreground mb-6">Recursos y Legal</h3>
            <div className="flex flex-col space-y-3">
              <Link
                to="/legal/aviso-legal"
                className="text-sm text-[#9EA3A8] hover:text-accent transition-colors duration-300 relative inline-block after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-accent after:transition-all after:duration-300 hover:after:w-full"
              >
                Aviso legal
              </Link>
              <Link
                to="/legal/privacidad"
                className="text-sm text-[#9EA3A8] hover:text-accent transition-colors duration-300 relative inline-block after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-accent after:transition-all after:duration-300 hover:after:w-full"
              >
                Política de privacidad
              </Link>
              <Link
                to="/legal/cookies"
                className="text-sm text-[#9EA3A8] hover:text-accent transition-colors duration-300 relative inline-block after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-accent after:transition-all after:duration-300 hover:after:w-full"
              >
                Política de cookies
              </Link>
              <Link
                to="/accesibilidad"
                className="text-sm text-[#9EA3A8] hover:text-accent transition-colors duration-300 relative inline-block after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-accent after:transition-all after:duration-300 hover:after:w-full"
              >
                Accesibilidad
              </Link>
            </div>
          </div>
        </div>

        {/* Fila inferior - Newsletter + Copyright + Social */}
        <div className="pt-8 border-t border-border/50">
          {/* Newsletter */}
          <form onSubmit={handleNewsletterSubmit} className="max-w-md mx-auto mb-8">
            <label htmlFor="newsletter-email" className="block text-sm font-medium text-foreground mb-3 text-center">
              Suscríbete a nuestro newsletter
            </label>
            <div className="flex flex-col sm:flex-row gap-3">
              <Input
                id="newsletter-email"
                type="email"
                placeholder="tu@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 bg-background border-border focus:border-accent"
                required
                aria-label="Email para newsletter"
              />
              <Button 
                type="submit"
                className="hover:scale-105 transition-transform duration-300"
              >
                Suscribirme
              </Button>
            </div>
          </form>

          {/* Copyright + Social */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-center md:text-left">
              <p className="text-xs text-[#9EA3A8] mb-1">
                © 2025 Matter Group — Todos los derechos reservados.
              </p>
              <p className="text-xs text-[#9EA3A8]">
                Conectamos materiales, ideas y personas.
              </p>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-4">
              <a
                href="https://www.linkedin.com/company/matter-group"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#9EA3A8] hover:text-accent transition-all duration-300 hover:scale-105"
                aria-label="LinkedIn de Matter Group"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://www.instagram.com/matter_group"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#9EA3A8] hover:text-accent transition-all duration-300 hover:scale-105"
                aria-label="Instagram de Matter Group"
              >
                <Instagram size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
