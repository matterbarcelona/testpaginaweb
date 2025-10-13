import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StickyCTA from "@/components/StickyCTA";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Package, Wrench, Truck } from "lucide-react";

const Constructores = () => {
  const pillars = [
    {
      icon: Package,
      title: "Suministro integral",
      description: "Acceso a +900 fabricantes y gestión completa de pedidos"
    },
    {
      icon: Wrench,
      title: "Soporte técnico",
      description: "Asesoramiento en equivalencias y soluciones alternativas"
    },
    {
      icon: Truck,
      title: "Logística & Postventa",
      description: "Entregas coordinadas a obra y seguimiento completo"
    }
  ];

  const steps = [
    { title: "Brief", description: "Proyecto y necesidades de materiales" },
    { title: "Equivalencias", description: "Propuesta técnica y económica" },
    { title: "Cotización", description: "Presupuesto en menos de 24h" },
    { title: "Entrega", description: "Logística a obra y postventa" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pb-24 md:pb-0">
        {/* Hero */}
        <section className="py-24 bg-gradient-to-b from-background to-card">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
                Materiales de confianza
                <br />
                <span className="text-primary">Logística a tu medida</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-12">
                Distribuimos marcas líderes y gestionamos el suministro completo para obras.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg">Pedir cotización</Button>
                <Button size="lg" variant="secondary">Hablar con un experto</Button>
              </div>
            </div>
          </div>
        </section>

        {/* 3 Pilares */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-foreground mb-12 text-center">
              Nuestro servicio
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pillars.map((pillar, index) => {
                const Icon = pillar.icon;
                return (
                  <Card key={index} className="bg-card border-border">
                    <CardContent className="p-8 text-center">
                      <div className="w-16 h-16 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-6">
                        <Icon className="w-8 h-8 text-primary" />
                      </div>
                      <h3 className="text-xl font-semibold text-foreground mb-3">
                        {pillar.title}
                      </h3>
                      <p className="text-muted-foreground">
                        {pillar.description}
                      </p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Proceso */}
        <section className="py-24 bg-card">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-foreground mb-12 text-center">
              Cómo trabajamos
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
              {steps.map((step, index) => (
                <div key={index} className="text-center">
                  <div className="w-12 h-12 rounded-full bg-primary/20 text-primary font-bold flex items-center justify-center mx-auto mb-4">
                    {index + 1}
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Final */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-4xl font-bold text-foreground mb-6">
              Pide tu cotización en 24h
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Envíanos el listado de materiales y recibe presupuesto rápido
            </p>
            <Button size="lg">Solicitar presupuesto</Button>
          </div>
        </section>
      </main>
      <Footer />
      <StickyCTA />
    </div>
  );
};

export default Constructores;
