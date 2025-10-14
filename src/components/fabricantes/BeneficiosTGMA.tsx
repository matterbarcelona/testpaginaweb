import { Button } from "@/components/ui/button";
import { Building2, Megaphone, Users, BarChart3 } from "lucide-react";
import { analyticsEvents } from "@/lib/analytics";

const BeneficiosTGMA = () => {
  const beneficios = [
    {
      icon: Building2,
      title: "Presencia curada en materiotecas",
      description: "Tus productos exhibidos y recomendados por nuestro equipo en BCN, MAD y SOT.",
    },
    {
      icon: Megaphone,
      title: "Contenido editorial & campañas",
      description: "Artículos, redes y newsletter para posicionar tu marca ante la comunidad Matter.",
    },
    {
      icon: Users,
      title: "Eventos & charlas",
      description: "Conexión directa con arquitectos e interioristas en Talks & Sessions.",
    },
    {
      icon: BarChart3,
      title: "Leads y resultados medibles",
      description: "Reportes mensuales de interacciones, contactos y proyectos generados.",
    },
  ];

  const scrollToForm = () => {
    const form = document.getElementById('partner-form');
    if (form) {
      form.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="beneficios-tgma"
      className="py-20 md:py-32 bg-background"
      aria-labelledby="beneficios-heading"
    >
      <div className="container mx-auto px-6">
        <h2 
          id="beneficios-heading"
          className="text-3xl md:text-5xl font-bold text-center mb-6 text-foreground text-balance"
        >
          Qué obtiene tu marca al formar parte del ecosistema TGMA
        </h2>
        <p className="text-lg text-muted-foreground text-center mb-16 max-w-2xl mx-auto">
          Cuatro pilares estratégicos para maximizar tu visibilidad y generar leads cualificados
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16 max-w-5xl mx-auto">
          {beneficios.map((beneficio, index) => {
            const Icon = beneficio.icon;
            return (
              <div
                key={index}
                className="group bg-surface border border-line rounded-lg p-8 hover:border-accent/50 hover:-translate-y-1 transition-all duration-300 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-14 h-14 rounded-lg bg-accent/5 flex items-center justify-center mb-6 group-hover:bg-accent/10 transition-all duration-300 group-hover:scale-105">
                  <Icon className="w-8 h-8 text-accent" strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-foreground group-hover:text-accent transition-colors duration-300">
                  {beneficio.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {beneficio.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <Button
            size="lg"
            className="hover:scale-105 transition-transform duration-300"
            onClick={() => {
              analyticsEvents.trackEvent('cta_click', {
                label: 'Solicitar propuesta TGMA',
                location: 'beneficios_fabricantes'
              });
              scrollToForm();
            }}
            data-analytics="cta_click"
            data-label="Solicitar propuesta TGMA - Beneficios"
            aria-label="Solicitar propuesta comercial TGMA"
          >
            Solicitar propuesta TGMA
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BeneficiosTGMA;
