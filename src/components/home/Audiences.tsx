import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Lightbulb, Building2, HardHat } from "lucide-react";

const Audiences = () => {
  const audiences = [
    {
      icon: Lightbulb,
      title: "Arquitectos & Interioristas",
      description: "Asesoramiento experto y muestras en 24h para tus proyectos.",
      href: "/prescriptores",
      benefits: ["Curaduría personalizada", "Entregas rápidas", "Soporte técnico"]
    },
    {
      icon: Building2,
      title: "Fabricantes & Marcas",
      description: "Visibilidad curada, contenidos y leads cualificados.",
      href: "/fabricantes",
      benefits: ["Estrategia TGMA", "Eventos exclusivos", "Red de prescriptores"]
    },
    {
      icon: HardHat,
      title: "Constructores & Buyers",
      description: "Distribución integral y logística a obra.",
      href: "/constructores",
      benefits: ["Suministro completo", "Soporte técnico", "Gestión logística"]
    }
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Para quién trabajamos
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Conectamos todos los actores del proceso constructivo
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {audiences.map((audience, index) => {
            const Icon = audience.icon;
            return (
              <Card key={index} className="bg-card border-border hover:border-primary/50 transition-colors">
                <CardContent className="p-8">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    {audience.title}
                  </h3>
                  
                  <p className="text-muted-foreground mb-6">
                    {audience.description}
                  </p>

                  <ul className="space-y-2 mb-6">
                    {audience.benefits.map((benefit, i) => (
                      <li key={i} className="text-sm text-muted-foreground flex items-center">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary mr-2"></span>
                        {benefit}
                      </li>
                    ))}
                  </ul>

                  <Button variant="secondary" className="w-full" asChild>
                    <Link to={audience.href}>Saber más</Link>
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Audiences;
