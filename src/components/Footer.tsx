import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  const sedes = [
    {
      city: "Barcelona",
      address: "C/ Aragó 277, 08009",
      phone: "+34 932 721 212",
    },
    {
      city: "Madrid",
      address: "C/ Velázquez 94, 28006",
      phone: "+34 914 314 314",
    },
    {
      city: "Sotopalacios",
      address: "P.I. Villalonquéjar, 09001",
      phone: "+34 947 123 456",
    },
  ];

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Sedes */}
          <div>
            <h3 className="text-sm font-semibold text-foreground mb-6">Sedes</h3>
            <div className="space-y-6">
              {sedes.map((sede) => (
                <div key={sede.city}>
                  <p className="text-sm font-medium text-foreground">{sede.city}</p>
                  <p className="text-sm text-muted-foreground mt-1">{sede.address}</p>
                  <p className="text-sm text-muted-foreground">{sede.phone}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Enlaces */}
          <div>
            <h3 className="text-sm font-semibold text-foreground mb-6">Empresa</h3>
            <div className="flex flex-col space-y-3">
              <Link to="/sobre" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Sobre Matter
              </Link>
              <Link to="/eventos" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Eventos
              </Link>
              <Link to="/contacto" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Contacto
              </Link>
            </div>
          </div>

          {/* Servicios */}
          <div>
            <h3 className="text-sm font-semibold text-foreground mb-6">Servicios</h3>
            <div className="flex flex-col space-y-3">
              <Link to="/prescriptores" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Para Arquitectos
              </Link>
              <Link to="/fabricantes" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Para Fabricantes
              </Link>
              <Link to="/constructores" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Para Constructores
              </Link>
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-sm font-semibold text-foreground mb-6">Newsletter</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Recibe novedades sobre materiales y proyectos
            </p>
            <div className="flex flex-col space-y-2">
              <Input 
                type="email" 
                placeholder="tu@email.com"
                className="bg-background"
              />
              <Button size="sm" variant="secondary">
                Suscribirse
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-6">
              <Link to="/legal/privacidad" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
                Política de Privacidad
              </Link>
              <Link to="/legal/aviso-legal" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
                Aviso Legal
              </Link>
              <Link to="/legal/cookies" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
                Cookies
              </Link>
            </div>

            <div className="flex items-center space-x-4">
              <a 
                href="https://instagram.com/matter_group" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a 
                href="https://linkedin.com/company/matter-group" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          <p className="text-xs text-muted-foreground text-center md:text-left mt-6">
            © 2025 Matter Atelier SL. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
