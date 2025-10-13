import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { analyticsEvents } from "@/lib/analytics";

interface PropuestaSimilarCTAProps {
  proyectoSlug: string;
  proyectoTitulo: string;
}

const PropuestaSimilarCTA = ({ proyectoSlug, proyectoTitulo }: PropuestaSimilarCTAProps) => {
  const handleClick = () => {
    analyticsEvents.ctaSolicitarPresupuesto(`proyecto_detalle_${proyectoSlug}`);
  };

  return (
    <section className="py-20 md:py-32 bg-gradient-to-br from-copper/5 to-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            ¿Te inspira este proyecto?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Podemos ayudarte a crear una solución similar adaptada a tus necesidades
          </p>

          <Link to={`/contacto?proyecto=${proyectoSlug}`} onClick={handleClick}>
            <Button size="lg" className="gap-2">
              Solicitar propuesta similar
              <ArrowRight size={20} />
            </Button>
          </Link>

          <p className="text-sm text-muted-foreground mt-6">
            Referencia: <strong className="text-foreground">{proyectoTitulo}</strong>
          </p>
        </div>
      </div>
    </section>
  );
};

export default PropuestaSimilarCTA;
