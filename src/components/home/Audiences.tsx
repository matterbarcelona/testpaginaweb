import { Link } from "react-router-dom";
import { Lightbulb, Building2, HardHat } from "lucide-react";

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
    <section className="py-20 md:py-32 bg-card">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-foreground text-balance">
          Trabajamos junto a quienes construyen el futuro de la arquitectura.
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          {audiences.map((audience, index) => {
            const Icon = audience.icon;
            return (
              <div
                key={index}
                className="group bg-background border border-border rounded-lg p-8 hover:border-accent hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors duration-300">
                  <Icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-foreground group-hover:text-accent transition-colors duration-300">
                  {audience.title}
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {audience.description}
                </p>
                <Link
                  to={audience.link}
                  className="text-accent hover:text-accent/80 font-medium inline-flex items-center gap-2 group/link"
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
