import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const CasosReales = () => {
  const casos = [
    {
      title: "Hotel Paxton Barcelona",
      description: "Selección de revestimientos sostenibles y porcelánicos técnicos.",
      slug: "hotel-paxton-barcelona",
      image: "/placeholder.svg",
    },
    {
      title: "Oficinas Tech Madrid",
      description: "Optimización acústica con materiales certificados.",
      slug: "oficinas-tech-madrid",
      image: "/placeholder.svg",
    },
    {
      title: "Vivienda Costa Brava",
      description: "Materialidad cálida y contemporánea.",
      slug: "vivienda-costa-brava",
      image: "/placeholder.svg",
    },
  ];

  return (
    <section className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-foreground text-balance">
          Por qué arquitectos confían en Matter
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          {casos.map((caso, index) => (
            <Link
              key={index}
              to={`/proyectos/${caso.slug}`}
              className="group bg-card border border-border rounded-lg overflow-hidden hover:border-accent hover:-translate-y-2 transition-all duration-300 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="aspect-[4/3] bg-muted relative overflow-hidden">
                <img 
                  src={caso.image} 
                  alt={caso.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-foreground group-hover:text-accent transition-colors duration-300">
                  {caso.title}
                </h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {caso.description}
                </p>
                <div className="flex items-center gap-2 text-accent group-hover:gap-3 transition-all duration-300">
                  <span className="text-sm font-medium">Ver proyecto</span>
                  <ArrowRight size={16} />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CasosReales;
