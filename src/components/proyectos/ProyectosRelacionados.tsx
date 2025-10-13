import { Link } from "react-router-dom";
import proyectos from "@/data/proyectos.json";

interface ProyectosRelacionadosProps {
  currentSlug: string;
  tipologia: string;
}

const ProyectosRelacionados = ({ currentSlug, tipologia }: ProyectosRelacionadosProps) => {
  const relacionados = proyectos
    .filter(p => p.slug !== currentSlug && p.tipologia === tipologia)
    .slice(0, 3);

  if (relacionados.length === 0) return null;

  return (
    <section className="py-20 md:py-32 bg-card">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center text-foreground">
          Explora más proyectos
        </h2>
        <p className="text-center text-muted-foreground mb-12">
          Proyectos similares en {tipologia}
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {relacionados.map((proyecto, index) => (
            <Link
              key={proyecto.id}
              to={`/proyectos/${proyecto.slug}`}
              className="group animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="bg-background border border-border rounded-lg overflow-hidden hover:border-accent hover:-translate-y-2 hover:shadow-xl transition-all duration-300">
                <div className="aspect-[4/3] bg-muted overflow-hidden relative">
                  <div className="w-full h-full bg-gradient-to-br from-muted to-muted/50 group-hover:scale-110 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                    <span className="text-accent font-medium">Ver proyecto →</span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold mb-2 text-foreground group-hover:text-accent transition-colors duration-300">
                    {proyecto.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {proyecto.location} · {proyecto.year}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link to="/proyectos">
            <button className="text-accent hover:text-accent/80 font-medium inline-flex items-center gap-2 group">
              Ver todos los proyectos
              <span className="inline-block transition-transform group-hover:translate-x-1">→</span>
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProyectosRelacionados;
