import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Instagram, Linkedin, MapPin } from "lucide-react";

const Footer = () => {
  const sedes = [
    {
      city: "Barcelona",
      address: "Poblenou, 08018",
      phone: "+34 932 000 000",
    },
    {
      city: "Madrid",
      address: "Chamberí, 28010",
      phone: "+34 912 000 000",
    },
    {
      city: "Sotogrande",
      address: "Puerto Deportivo, 11310",
      phone: "+34 956 000 000",
    },
  ];

  return (
    <footer className="bg-card border-t border-border">
      {/* Newsletter destacado */}
      <div className="border-b border-border bg-background/50">
        <div className="container mx-auto px-6 py-12">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-2xl font-bold text-foreground mb-3">
              Recibe las últimas novedades sobre materiales
            </h3>
            <p className="text-muted-foreground mb-6">
              Proyectos, tendencias y lanzamientos. Una vez al mes.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="tu@email.com"
                className="flex-1 bg-background"
              />
              <Button className="hover:scale-105 transition-transform duration-300">
                Suscribirse
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Sedes */}
          <div>
            <h3 className="text-sm font-semibold text-foreground mb-6 flex items-center gap-2">
              <MapPin size={16} className="text-accent" />
              Nuestras sedes
            </h3>
            <div className="space-y-6">
              {sedes.map((sede) => (
                <div key={sede.city} className="group cursor-pointer">
                  <p className="text-sm font-medium text-foreground group-hover:text-accent transition-colors duration-300">
                    {sede.city}
                  </p>
                  <p className="text-sm text-muted-foreground mt-1">{sede.address}</p>
                  <p className="text-sm text-muted-foreground">{sede.phone}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Enlaces Empresa */}
          <div>
            <h3 className="text-sm font-semibold text-foreground mb-6">Empresa</h3>
            <div className="flex flex-col space-y-3">
              <Link
                to="/sobre"
                className="text-sm text-muted-foreground hover:text-accent transition-colors duration-300 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-accent after:transition-all after:duration-300 hover:after:w-full"
              >
                Sobre Matter
              </Link>
              <Link
                to="/eventos"
                className="text-sm text-muted-foreground hover:text-accent transition-colors duration-300 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-accent after:transition-all after:duration-300 hover:after:w-full"
              >
                Eventos
              </Link>
              <Link
                to="/journal"
                className="text-sm text-muted-foreground hover:text-accent transition-colors duration-300 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-accent after:transition-all after:duration-300 hover:after:w-full"
              >
                Journal
              </Link>
              <Link
                to="/contacto"
                className="text-sm text-muted-foreground hover:text-accent transition-colors duration-300 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-accent after:transition-all after:duration-300 hover:after:w-full"
              >
                Contacto
              </Link>
            </div>
          </div>

          {/* Servicios */}
          <div>
            <h3 className="text-sm font-semibold text-foreground mb-6">Servicios</h3>
            <div className="flex flex-col space-y-3">
              <Link
                to="/prescriptores"
                className="text-sm text-muted-foreground hover:text-accent transition-colors duration-300 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-accent after:transition-all after:duration-300 hover:after:w-full"
              >
                Para Arquitectos
              </Link>
              <Link
                to="/fabricantes"
                className="text-sm text-muted-foreground hover:text-accent transition-colors duration-300 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-accent after:transition-all after:duration-300 hover:after:w-full"
              >
                Para Fabricantes
              </Link>
              <Link
                to="/constructores"
                className="text-sm text-muted-foreground hover:text-accent transition-colors duration-300 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-accent after:transition-all after:duration-300 hover:after:w-full"
              >
                Para Constructores
              </Link>
              <Link
                to="/biblioteca"
                className="text-sm text-muted-foreground hover:text-accent transition-colors duration-300 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-accent after:transition-all after:duration-300 hover:after:w-full"
              >
                Biblioteca
              </Link>
            </div>
          </div>

          {/* Menú rápido */}
          <div>
            <h3 className="text-sm font-semibold text-foreground mb-6">Acceso rápido</h3>
            <div className="flex flex-col space-y-3">
              <Link
                to="/biblioteca"
                className="text-sm text-muted-foreground hover:text-accent transition-colors duration-300"
              >
                Buscar materiales
              </Link>
              <Link
                to="/proyectos"
                className="text-sm text-muted-foreground hover:text-accent transition-colors duration-300"
              >
                Ver proyectos
              </Link>
              <Button size="sm" className="mt-2 hover:scale-105 transition-transform duration-300">
                Solicitar muestra
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-6">
              <Link
                to="/legal/privacidad"
                className="text-xs text-muted-foreground hover:text-accent transition-colors duration-300"
              >
                Política de Privacidad
              </Link>
              <Link
                to="/legal/aviso-legal"
                className="text-xs text-muted-foreground hover:text-accent transition-colors duration-300"
              >
                Aviso Legal
              </Link>
              <Link
                to="/legal/cookies"
                className="text-xs text-muted-foreground hover:text-accent transition-colors duration-300"
              >
                Cookies
              </Link>
            </div>

            <div className="flex items-center space-x-4">
              <a
                href="https://instagram.com/matter_group"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-accent transition-all duration-300 hover:scale-110"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://linkedin.com/company/matter-group"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-accent transition-all duration-300 hover:scale-110"
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
