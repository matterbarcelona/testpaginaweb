import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { analyticsEvents } from "@/lib/analytics";
import materiales from "@/data/materiales.json";

interface MaterialesMencionadosProps {
  materialNames?: string[];
  articleSlug: string;
}

const MaterialesMencionados = ({ materialNames = [], articleSlug }: MaterialesMencionadosProps) => {
  // Filter materials mentioned in the article
  const materialesFiltrados = materiales
    .filter(m => materialNames.includes(m.nombre))
    .slice(0, 3);

  if (materialesFiltrados.length === 0) return null;

  return (
    <section className="py-12 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-foreground">
            Materiales mencionados en este artículo
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {materialesFiltrados.map((material) => (
              <div
                key={material.id}
                className="bg-card border border-border rounded-lg overflow-hidden hover:border-accent transition-colors duration-300"
              >
                <div className="aspect-square bg-muted">
                  <div className="w-full h-full bg-gradient-to-br from-muted via-muted/70 to-accent/10" />
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-foreground mb-2">
                    {material.nombre}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    {material.tipo}
                  </p>
                  <Link to="/biblioteca">
                    <Button 
                      variant="outline" 
                      size="sm"
                      className="w-full"
                      onClick={() => analyticsEvents.journalMaterialClick(material.nombre, articleSlug)}
                    >
                      Ver en Biblioteca
                    </Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MaterialesMencionados;
