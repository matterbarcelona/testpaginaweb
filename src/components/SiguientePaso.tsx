import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface SiguientePasoProps {
  tipo: 'prescriptores' | 'fabricantes' | 'constructores' | 'proyectos' | 'journal' | 'biblioteca';
}

interface Paso {
  titulo: string;
  descripcion: string;
  cta: string;
  link: string;
  ctaSecondary?: string;
  linkSecondary?: string;
  icon: string;
}

const SiguientePaso = ({ tipo }: SiguientePasoProps) => {
  const pasos: Record<SiguientePasoProps['tipo'], Paso> = {
    prescriptores: {
      titulo: "Explora nuestra biblioteca de materiales",
      descripcion: "Descubre más de 900 marcas y miles de referencias organizadas por categoría",
      cta: "Ver biblioteca",
      link: "/biblioteca",
      icon: "📚"
    },
    fabricantes: {
      titulo: "Agenda una reunión con TGMA",
      descripcion: "Hablemos sobre cómo posicionar tu marca ante los prescriptores clave",
      cta: "Contactar TGMA",
      link: "/contacto?tipo=partner",
      icon: "🤝"
    },
    constructores: {
      titulo: "Inspírate con nuestros proyectos",
      descripcion: "Descubre casos reales donde hemos suministrado materiales y solicita presupuesto",
      cta: "Ver proyectos",
      link: "/proyectos",
      ctaSecondary: "Solicitar presupuesto",
      linkSecondary: "/contacto?tipo=presupuesto",
      icon: "🏗️"
    },
    proyectos: {
      titulo: "¿Te gusta lo que ves?",
      descripcion: "Solicita una propuesta similar adaptada a tu proyecto",
      cta: "Contactar",
      link: "/contacto",
      icon: "💡"
    },
    journal: {
      titulo: "Descubre los materiales mencionados",
      descripcion: "Explora nuestra biblioteca para encontrar los productos destacados en el artículo",
      cta: "Ir a biblioteca",
      link: "/biblioteca",
      icon: "🔍"
    },
    biblioteca: {
      titulo: "¿Necesitas asesoría personalizada?",
      descripcion: "Nuestro equipo te ayuda a seleccionar los materiales perfectos para tu proyecto",
      cta: "Solicitar asesoría",
      link: "/contacto?tipo=asesoria",
      icon: "👥"
    }
  };

  const paso = pasos[tipo];

  return (
    <section className="py-20 md:py-32 bg-gradient-to-br from-copper/5 via-background to-accent/5">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="text-5xl mb-6">{paso.icon}</div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            Siguiente paso sugerido
          </h2>
          <h3 className="text-2xl md:text-3xl font-semibold mb-4 text-copper">
            {paso.titulo}
          </h3>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            {paso.descripcion}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to={paso.link}>
              <Button size="lg" className="gap-2 min-w-[200px]">
                {paso.cta}
                <ArrowRight size={20} />
              </Button>
            </Link>
            
            {paso.ctaSecondary && paso.linkSecondary && (
              <Link to={paso.linkSecondary}>
                <Button variant="outline" size="lg" className="gap-2 min-w-[200px]">
                  {paso.ctaSecondary}
                  <ArrowRight size={20} />
                </Button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SiguientePaso;
