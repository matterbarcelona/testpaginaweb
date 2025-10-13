import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StickyCTA from "@/components/StickyCTA";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2, Clock, Shield, Leaf } from "lucide-react";

const Prescriptores = () => {
  const benefits = [
    {
      icon: CheckCircle2,
      title: "Curaduría experta",
      description: "Selección personalizada basada en tu proyecto"
    },
    {
      icon: Clock,
      title: "Velocidad",
      description: "Muestras en 24h y entregas coordinadas"
    },
    {
      icon: Shield,
      title: "Riesgo bajo",
      description: "Prueba antes de especificar, sin compromiso"
    },
    {
      icon: Leaf,
      title: "Sostenibilidad",
      description: "Certificaciones y materiales responsables"
    }
  ];

  const steps = [
    { title: "Brief", description: "Nos cuentas tu proyecto y necesidades" },
    { title: "Selección", description: "Te proponemos opciones curadas" },
    { title: "Muestras", description: "Recibes muestras físicas en 24h" },
    { title: "Especificación", description: "Documentación técnica completa" }
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
                Tu partner en materialidad
                <br />
                <span className="text-primary">de proyectos</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-12">
                Menos tiempo buscando, más diseño. Muestras en 24h y acompañamiento experto.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg">Solicitar muestra</Button>
                <Button size="lg" variant="secondary">Reservar visita</Button>
              </div>
            </div>
          </div>
        </section>

        {/* Beneficios */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-foreground mb-12 text-center">
              Por qué trabajar con Matter
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => {
                const Icon = benefit.icon;
                return (
                  <Card key={index} className="bg-card border-border">
                    <CardContent className="p-6">
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                      <h3 className="text-lg font-semibold text-foreground mb-2">
                        {benefit.title}
                      </h3>
                      <p className="text-muted-foreground text-sm">
                        {benefit.description}
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
              Empieza tu proyecto hoy
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Únete a más de 4.000 estudios que confían en Matter cada año
            </p>
            <Button size="lg">Quiero empezar ahora</Button>
          </div>
        </section>
      </main>
      <Footer />
      <StickyCTA />
    </div>
  );
};

export default Prescriptores;
