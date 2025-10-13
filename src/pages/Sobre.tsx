import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StickyCTA from "@/components/StickyCTA";
import SEO from "@/components/SEO";
import Breadcrumbs from "@/components/Breadcrumbs";
import VisionMision from "@/components/sobre/VisionMision";
import Timeline from "@/components/sobre/Timeline";
import EquipoDirectivo from "@/components/sobre/EquipoDirectivo";
import SedesConMapa from "@/components/sobre/SedesConMapa";
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

      {/* Visión & Misión */}
      <VisionMision />

      {/* Timeline */}
      <Timeline />

      {/* Equipo Directivo */}
      <EquipoDirectivo equipo={equipo} />

      {/* Sedes con Mapa */}
      <SedesConMapa />

      <Footer />
      <StickyCTA />
    </div>
  );
};

export default Sobre;
