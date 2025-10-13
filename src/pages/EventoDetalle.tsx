import { useParams, Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StickyCTA from "@/components/StickyCTA";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Calendar, MapPin, ArrowLeft } from "lucide-react";
import eventos from "@/data/eventos.json";

const EventoDetalle = () => {
  const { slug } = useParams();
  const evento = eventos.find((e) => e.slug === slug);

  if (!evento) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="container mx-auto px-6 py-20 text-center">
          <h1 className="text-4xl font-bold mb-4 text-foreground">
            Evento no encontrado
          </h1>
          <Link to="/eventos">
            <Button>Volver a eventos</Button>
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Breadcrumb */}
      <section className="py-6 border-b border-border">
        <div className="container mx-auto px-6">
          <Link
            to="/eventos"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft size={20} />
            Volver a eventos
          </Link>
        </div>
      </section>

      {/* Hero */}
      <section className="py-12">
        <div className="container mx-auto px-6">
          <div className="aspect-[21/9] bg-muted rounded-lg mb-8"></div>
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              {evento.title}
            </h1>
            <div className="flex flex-col sm:flex-row gap-4 text-lg text-muted-foreground">
              <div className="flex items-center gap-2">
                <Calendar size={20} />
                {new Date(evento.date).toLocaleDateString("es-ES", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </div>
              <div className="flex items-center gap-2">
                <MapPin size={20} />
                {evento.place}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contenido */}
      <section className="py-12">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contenido principal */}
            <div className="lg:col-span-2 space-y-12">
              {/* Descripción */}
              <div>
                <h2 className="text-2xl font-bold mb-4 text-foreground">
                  Sobre el evento
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {evento.resumen}
                </p>
              </div>

              {/* Programa */}
              <div>
                <h2 className="text-2xl font-bold mb-6 text-foreground">
                  Programa
                </h2>
                <div className="space-y-4">
                  {evento.programa.map((item, i) => (
                    <div
                      key={i}
                      className="flex gap-4 p-4 border border-border rounded-lg bg-card"
                    >
                      <div className="text-accent font-semibold min-w-[80px]">
                        {item.hora}
                      </div>
                      <div>
                        <p className="font-medium text-foreground">
                          {item.actividad}
                        </p>
                        {item.ponente && (
                          <p className="text-sm text-muted-foreground mt-1">
                            {item.ponente}
                          </p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Ponentes */}
              {evento.ponentes.length > 0 && (
                <div>
                  <h2 className="text-2xl font-bold mb-6 text-foreground">
                    Ponentes
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {evento.ponentes.map((ponente, i) => (
                      <div key={i} className="flex gap-4">
                        <div className="w-16 h-16 rounded-full bg-muted flex-shrink-0"></div>
                        <div>
                          <h3 className="font-semibold text-foreground">
                            {ponente.nombre}
                          </h3>
                          <p className="text-sm text-muted-foreground">
                            {ponente.cargo}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Formulario inscripción */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 bg-card border border-border rounded-lg p-6">
                <h3 className="text-xl font-bold mb-6 text-foreground">
                  Inscríbete
                </h3>
                <form className="space-y-4">
                  <div>
                    <Label htmlFor="nombre">Nombre completo</Label>
                    <Input id="nombre" placeholder="Tu nombre" />
                  </div>
                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="tu@email.com"
                    />
                  </div>
                  <div>
                    <Label htmlFor="empresa">Empresa</Label>
                    <Input id="empresa" placeholder="Tu empresa" />
                  </div>
                  <div>
                    <Label htmlFor="ciudad">Ciudad</Label>
                    <Input id="ciudad" placeholder="Tu ciudad" />
                  </div>
                  <Button className="w-full" size="lg">
                    Confirmar inscripción
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <StickyCTA />
    </div>
  );
};

export default EventoDetalle;
