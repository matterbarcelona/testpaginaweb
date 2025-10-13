import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StickyCTA from "@/components/StickyCTA";
import ScrollProgress from "@/components/ScrollProgress";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Library, FileText, Users, TrendingUp } from "lucide-react";

const Fabricantes = () => {
  const ventajas = [
    {
      icon: Library,
      title: "Presencia curada",
      description: "Tu marca en nuestras materiotecas de Barcelona, Madrid y Sotogrande",
    },
    {
      icon: FileText,
      title: "Contenido editorial",
      description: "Campañas digitales y artículos en It Matters Journal",
    },
    {
      icon: Users,
      title: "Eventos exclusivos",
      description: "Participación en talks, workshops y exhibiciones",
    },
    {
      icon: TrendingUp,
      title: "Leads medibles",
      description: "Especificaciones reales con arquitectos e interioristas",
    },
  ];

  const proceso = [
    { title: "Diagnóstico", desc: "Analizamos tu posicionamiento y objetivos" },
    { title: "Estrategia", desc: "Plan TGMA personalizado" },
    { title: "Resultados", desc: "Leads cualificados y especificaciones" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Fabricantes & Marcas (TGMA)"
        description="Conecta con arquitectos que deciden materialidad. Visibilidad curada, contenido editorial y leads de especificación medibles."
        path="/fabricantes"
      />
      <ScrollProgress />
      <Navbar />

      {/* Hero */}
      <section className="py-20 md:py-32 lg:py-40">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl animate-fade-in-up">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-foreground text-balance">
              Haz que arquitectos usen tus productos
            </h1>
            <p className="text-lg md:text-xl text-[#E2E2E2] mb-10 leading-relaxed max-w-3xl">
              TGMA te conecta con quienes deciden la materialidad de los proyectos.
            </p>
            <Button size="lg" className="group hover:scale-105 transition-transform duration-300">
              Solicitar propuesta TGMA
              <span className="inline-block transition-transform group-hover:translate-x-1 ml-2">→</span>
            </Button>
          </div>
        </div>
      </section>

      {/* Ventajas TGMA */}
      <section className="py-20 md:py-32 bg-card">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-foreground">
            Ventajas TGMA
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {ventajas.map((ventaja, index) => {
              const Icon = ventaja.icon;
              return (
                <div
                  key={index}
                  className="group animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors duration-300">
                    <Icon className="w-8 h-8 text-accent" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-foreground group-hover:text-accent transition-colors duration-300">
                    {ventaja.title}
                  </h3>
                  <p className="text-[#E2E2E2] leading-relaxed">{ventaja.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Proceso */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Cómo funciona TGMA
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {proceso.map((item, index) => (
              <div
                key={index}
                className="text-center group animate-fade-in-up"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="text-6xl font-bold text-accent/20 mb-4 group-hover:text-accent/30 transition-colors duration-500">
                  0{index + 1}
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-accent transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="text-[#E2E2E2]">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Caso de éxito */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="bg-accent/5 border border-accent/20 rounded-lg p-8 md:p-12">
              <h3 className="text-2xl font-bold text-foreground mb-4">Caso de éxito</h3>
              <p className="text-lg text-[#E2E2E2] leading-relaxed">
                En seis meses, una marca cerámica premium obtuvo <strong className="text-accent">+120 leads cualificados</strong> y <strong className="text-accent">14 especificaciones reales</strong> en proyectos residenciales y contract de alto standing.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-foreground text-balance">
              Hagamos crecer tu marca juntos
            </h2>
            <p className="text-lg md:text-xl text-[#E2E2E2] mb-10 leading-relaxed">
              Solicita una propuesta personalizada TGMA sin compromiso.
            </p>
            <Button size="lg" className="hover:scale-105 transition-transform duration-300">
              Solicitar propuesta TGMA
            </Button>
          </div>
        </div>
      </section>

      <Footer />
      <StickyCTA />
    </div>
  );
};

export default Fabricantes;
