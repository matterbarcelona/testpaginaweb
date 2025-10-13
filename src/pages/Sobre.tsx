import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StickyCTA from "@/components/StickyCTA";
import SEO from "@/components/SEO";
import Breadcrumbs from "@/components/Breadcrumbs";
import { Button } from "@/components/ui/button";
import equipo from "@/data/equipo.json";
import { useScrollTracking } from "@/hooks/useScrollTracking";

const Sobre = () => {
  useScrollTracking('sobre');
  
  const metricas = [
    { valor: "+4.000", label: "Proyectos anuales" },
    { valor: "+900", label: "Fabricantes" },
    { valor: "50+", label: "Profesionales" },
    { valor: "3", label: "Sedes" },
  ];

  const sedes = [
    { ciudad: "Barcelona", direccion: "Poblenou, 08018", telefono: "+34 932 000 000" },
    { ciudad: "Madrid", direccion: "Chamberí, 28010", telefono: "+34 912 000 000" },
    { ciudad: "Sotogrande", direccion: "Puerto Deportivo, 11310", telefono: "+34 956 000 000" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Sobre Matter Group | Materiotecas, consultoría y agencia TGMA"
        description="Conectamos materiales, ideas y personas. 3 sedes, +4.000 proyectos/año, +900 fabricantes y 50+ profesionales especializados en materialidad."
        path="/sobre"
      />
      <Navbar />
      <Breadcrumbs />

      {/* Hero */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-foreground">
              Conectamos materiales, ideas y personas
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Desde la inspiración hasta la entrega, somos tu socio en
              materialidad.
            </p>
          </div>
        </div>
      </section>

      {/* Métricas */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {metricas.map((metrica, i) => (
              <div key={i} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-accent mb-2">
                  {metrica.valor}
                </div>
                <div className="text-muted-foreground">{metrica.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Qué hacemos */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-foreground">
            Qué hacemos
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-card border border-border rounded-lg p-8">
              <h3 className="text-2xl font-bold mb-4 text-foreground">
                Materiotecas
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Tres espacios físicos en Barcelona, Madrid y Sotogrande con
                bibliotecas curadas de materiales para arquitectos e
                interioristas.
              </p>
            </div>
            <div className="bg-card border border-border rounded-lg p-8">
              <h3 className="text-2xl font-bold mb-4 text-foreground">
                Consultoría
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Matter Atelier: asesoramiento experto en especificación de
                materiales, sostenibilidad y certificaciones para proyectos.
              </p>
            </div>
            <div className="bg-card border border-border rounded-lg p-8">
              <h3 className="text-2xl font-bold mb-4 text-foreground">TGMA</h3>
              <p className="text-muted-foreground leading-relaxed">
                The Grey Matter Agency: visibilidad, contenidos y eventos para
                fabricantes que quieren conectar con prescriptores.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Equipo */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-foreground">
            Nuestro equipo
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {equipo.map((miembro, i) => (
              <div key={i} className="text-center">
                <div className="w-32 h-32 rounded-full bg-muted mx-auto mb-4"></div>
                <h3 className="font-semibold text-foreground">
                  {miembro.nombre}
                </h3>
                <p className="text-sm text-muted-foreground">{miembro.cargo}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sedes */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-foreground">
            Nuestras sedes
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-12">
            {sedes.map((sede, i) => (
              <div
                key={i}
                className="bg-card border border-border rounded-lg p-6"
              >
                <h3 className="text-xl font-bold mb-3 text-foreground">
                  {sede.ciudad}
                </h3>
                <p className="text-muted-foreground mb-2">{sede.direccion}</p>
                <p className="text-muted-foreground">{sede.telefono}</p>
              </div>
            ))}
          </div>
          <div className="text-center">
            <Button size="lg">Reservar visita</Button>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
            Hablemos de tu proyecto
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Cuéntanos qué necesitas y trabajemos juntos para hacerlo realidad.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg">Contactar</Button>
            <Button variant="secondary" size="lg">
              Ver proyectos
            </Button>
          </div>
        </div>
      </section>

      <Footer />
      <StickyCTA />
    </div>
  );
};

export default Sobre;
