import { Link } from "react-router-dom";
import { ArrowRight, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { analyticsEvents } from "@/lib/analytics";

interface Material {
  nombre: string;
  categoria: string;
  fabricante: string;
}

interface MaterialesMencionadosProps {
  materiales: Material[];
  articleSlug: string;
}

const MaterialesMencionados = ({ materiales, articleSlug }: MaterialesMencionadosProps) => {
  if (!materiales || materiales.length === 0) return null;

  const handleMaterialClick = (materialNombre: string) => {
    analyticsEvents.journalMaterialClick(materialNombre, articleSlug);
  };

  return (
    <section className="py-20 md:py-32 bg-card">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            Materiales mencionados
          </h2>
          <p className="text-lg text-muted-foreground mb-12">
            Explora los materiales destacados en este artículo
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {materiales.map((material, index) => {
              // Create filter URL for biblioteca
              const filterUrl = `/biblioteca?categoria=${encodeURIComponent(material.categoria)}`;
              
              return (
                <Link
                  key={index}
                  to={filterUrl}
                  onClick={() => handleMaterialClick(material.nombre)}
                  className="group p-6 bg-background border border-border rounded-lg hover:border-accent hover:shadow-lg transition-all duration-300"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-accent transition-colors">
                        {material.nombre}
                      </h3>
                      <p className="text-sm text-muted-foreground mb-1">
                        <strong>Categoría:</strong> {material.categoria}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        <strong>Fabricante:</strong> {material.fabricante}
                      </p>
                    </div>
                    <ExternalLink 
                      className="text-muted-foreground group-hover:text-accent transition-colors flex-shrink-0" 
                      size={20} 
                    />
                  </div>
                  
                  <div className="mt-4 pt-4 border-t border-border">
                    <span className="text-sm text-accent font-medium flex items-center gap-2">
                      Ver en biblioteca
                      <ArrowRight size={16} />
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>

          <div className="mt-12 text-center">
            <Link to="/biblioteca">
              <Button variant="outline" size="lg" className="gap-2">
                Explorar toda la biblioteca
                <ArrowRight size={20} />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MaterialesMencionados;
