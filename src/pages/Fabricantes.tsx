import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StickyCTA from "@/components/StickyCTA";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Library, FileText, Calendar, Users } from "lucide-react";

const Fabricantes = () => {
  const benefits = [
    {
      icon: Library,
      title: "Biblioteca curada",
      description: "Visibilidad en nuestra red de +4.000 proyectos/año"
    },
    {
      icon: FileText,
      title: "Contenido estratégico",
      description: "Documentación técnica y casos de éxito"
    },
    {
      icon: Calendar,
      title: "Eventos exclusivos",
      description: "Acceso directo a prescriptores clave"
    },
    {
      icon: Users,
      title: "Leads cualificados",
      description: "Contacto con estudios activos"
    }
  ];

  const process = [
    { title: "Diagnóstico", description: "Analizamos tu posicionamiento actual" },
    { title: "Plan TGMA", description: "Estrategia de contenidos y eventos" },
    { title: "Resultados", description: "Medimos impacto y generación de leads" }
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
                Haz que arquitectos
                <br />
                <span className="text-primary">usen tus productos</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-12">
                Visibilidad curada, contenidos estratégicos y eventos para generar leads cualificados.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg">Solicitar propuesta TGMA</Button>
                <Button size="lg" variant="secondary">Reservar reunión</Button>
              </div>
            </div>
          </div>
        </section>

        {/* Beneficios */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-foreground mb-12 text-center">
              Qué ofrecemos
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
              Cómo trabajamos (TGMA)
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {process.map((step, index) => (
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

        {/* Partners */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Más de 900 fabricantes confían en nosotros
              </h2>
              <p className="text-muted-foreground">
                Marcas líderes en pavimentos, revestimientos, iluminación, mobiliario y más
              </p>
            </div>
            {/* Aquí iría el LogoWall component */}
          </div>
        </section>

        {/* CTA Final */}
        <section className="py-24 bg-card">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-4xl font-bold text-foreground mb-6">
              ¿Listo para crecer?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Solicita una propuesta personalizada de TGMA
            </p>
            <Button size="lg">Solicitar propuesta</Button>
          </div>
        </section>
      </main>
      <Footer />
      <StickyCTA />
    </div>
  );
};

export default Fabricantes;
