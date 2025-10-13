import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StickyCTA from "@/components/StickyCTA";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin } from "lucide-react";
import eventos from "@/data/eventos.json";

const Eventos = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-foreground">
              Eventos y Exhibitions
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Charlas, workshops y ferias donde la materialidad cobra vida.
            </p>
          </div>
        </div>
      </section>

      {/* Grid de Eventos */}
      <section className="py-12">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl">
            {eventos.map((evento) => (
              <Link
                key={evento.id}
                to={`/eventos/${evento.slug}`}
                className="group"
              >
                <div className="bg-card border border-border rounded-lg overflow-hidden hover:border-accent transition-colors">
                  <div className="aspect-[16/9] bg-muted"></div>
                  <div className="p-6">
                    <Badge variant="secondary" className="mb-3">
                      {evento.type}
                    </Badge>
                    <h3 className="text-xl font-semibold mb-3 text-foreground group-hover:text-accent transition-colors">
                      {evento.title}
                    </h3>
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Calendar size={16} />
                        {new Date(evento.date).toLocaleDateString("es-ES", {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        })}
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <MapPin size={16} />
                        {evento.place}
                      </div>
                    </div>
                    <p className="text-muted-foreground mb-4">
                      {evento.resumen}
                    </p>
                    <Button size="sm" className="w-full">
                      Más información
                    </Button>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
            ¿Quieres organizar un evento con nosotros?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Nuestras materiotecas están disponibles para workshops, charlas y
            presentaciones de producto.
          </p>
          <Button size="lg">Contactar</Button>
        </div>
      </section>

      <Footer />
      <StickyCTA />
    </div>
  );
};

export default Eventos;
