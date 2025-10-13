import { Link } from "react-router-dom";
import { Lightbulb, Building2, HardHat } from "lucide-react";
import { analyticsEvents } from "@/lib/analytics";

const Audiences = () => {
  const audiences = [
    {
      icon: Lightbulb,
      title: "Arquitectos & Interioristas",
      description: "Te ayudamos a materializar ideas con soluciones innovadoras y sostenibles.",
      link: "/prescriptores",
      cta: "Soy prescriptor/a",
    },
    {
      icon: Building2,
      title: "Fabricantes & Marcas",
      description: "Conecta con arquitectos y obtén leads de especificación reales.",
      link: "/fabricantes",
      cta: "Soy fabricante",
    },
    {
      icon: HardHat,
      title: "Constructores & Buyers",
      description: "Simplifica tu cadena de suministro con materiales fiables y soporte técnico.",
      link: "/constructores",
      cta: "Soy comprador/constructora",
    },
  ];

  return (
    <section 
      id="audiences"
      className="py-20 md:py-32 bg-surface"
      aria-labelledby="audiences-heading"
    >
      <div className="container mx-auto px-6">
        <h2 
          id="audiences-heading"
          className="text-3xl md:text-5xl font-bold text-center mb-6 text-foreground text-balance"
        >
          Trabajamos junto a quienes construyen el futuro de la arquitectura
        </h2>
        <p className="text-lg text-muted-foreground text-center mb-16 max-w-2xl mx-auto">
          Soluciones específicas para cada perfil profesional
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {audiences.map((audience, index) => {
            const Icon = audience.icon;
            return (
              <div
                key={index}
                className="group bg-background border border-line rounded-lg p-8 hover:border-accent/50 hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-all duration-300 group-hover:scale-110">
                  <Icon className="w-7 h-7 text-accent" aria-hidden="true" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-foreground group-hover:text-accent transition-colors duration-300">
                  {audience.title}
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {audience.description}
                </p>
                <Link
                  to={audience.link}
                  onClick={() => {
                    analyticsEvents.trackEvent('audience_card_click', {
                      audience: audience.title,
                      location: 'home_audiences',
                      destination: audience.link
                    });
                  }}
                  className="inline-flex items-center gap-2 text-accent hover:text-accent/80 font-medium group/link transition-colors"
                  aria-label={`Ir a página de ${audience.title}`}
                >
                  <span>Saber más</span>
                  <span className="inline-block transition-transform group-hover/link:translate-x-2 duration-300">→</span>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Audiences;
