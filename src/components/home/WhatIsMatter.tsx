import { Building2, TrendingUp, Truck } from "lucide-react";
import { Button } from "@/components/ui/button";

const WhatIsMatter = () => {
  const services = [
    {
      icon: Building2,
      title: "Consultoría & Materiotecas",
      description: "Inspiración y asesoramiento técnico para especificar con seguridad.",
    },
    {
      icon: TrendingUp,
      title: "TGMA Agency",
      description: "Visibilidad y marketing estratégico para marcas de materiales.",
    },
    {
      icon: Truck,
      title: "Distribución & Logística",
      description: "Suministro integral y servicio técnico hasta la entrega en obra.",
    },
  ];

  return (
    <section className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-foreground text-balance">
          Un ecosistema que impulsa la materialidad contemporánea.
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-12">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="text-center group animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-16 h-16 rounded-xl bg-accent/10 flex items-center justify-center mb-6 mx-auto group-hover:bg-accent/20 transition-all duration-300 group-hover:scale-110">
                  <Icon className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-foreground">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="text-center">
          <Button
            variant="secondary"
            size="lg"
            onClick={() => {
              document.getElementById('proceso')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="hover:scale-105 transition-transform duration-300"
          >
            Descubre cómo trabajamos
          </Button>
        </div>
      </div>
    </section>
  );
};

export default WhatIsMatter;
