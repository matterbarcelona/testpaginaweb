import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StickyCTA from "@/components/StickyCTA";
import ScrollProgress from "@/components/ScrollProgress";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { CheckCircle2, Clock, FileText, Award } from "lucide-react";

const Prescriptores = () => {
  const beneficios = [
    {
      icon: CheckCircle2,
      title: "Curaduría experta",
      description: "Solo materiales que encajan con tu idea",
    },
    {
      icon: FileText,
      title: "Fichas técnicas listas",
      description: "Especificaciones y equivalencias para obra",
    },
    {
      icon: Clock,
      title: "Muestras en 24 h",
      description: "Envío rápido para decisiones ágiles",
    },
    {
      icon: Award,
      title: "Soporte en sostenibilidad",
      description: "Normativa y certificaciones aseguradas",
    },
  ];

  const proceso = [
    { step: "1", title: "Brief", desc: "Nos cuentas tu proyecto" },
    { step: "2", title: "Selección", desc: "Proponemos opciones curadas" },
    { step: "3", title: "Muestras", desc: "Recibes físicos en 24 h" },
    { step: "4", title: "Especificación", desc: "Fichas y documentación" },
    { step: "5", title: "Suministro", desc: "Opcional: entrega a obra" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Arquitectos & Interioristas"
        description="Tu partner en materialidad de proyectos. Asesoramiento experto, muestras en 24h y especificación técnica para arquitectos."
        path="/prescriptores"
      />
      <ScrollProgress />
      <Navbar />

      {/* Hero */}
      <section className="py-20 md:py-32 lg:py-40">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl animate-fade-in-up">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-foreground text-balance">
              Tu partner en materialidad de proyectos
            </h1>
            <p className="text-lg md:text-xl text-[#E2E2E2] mb-10 leading-relaxed max-w-3xl">
              Menos tiempo buscando, más diseño. Te ayudamos a especificar materiales innovadores y sostenibles.
            </p>
            <Button size="lg" className="group hover:scale-105 transition-transform duration-300">
              Solicitar muestra gratuita
              <span className="inline-block transition-transform group-hover:translate-x-1 ml-2">→</span>
            </Button>
          </div>
        </div>
      </section>

      {/* Qué ofrecemos */}
      <section className="py-20 md:py-32 bg-card">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-foreground">
            Qué ofrecemos
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {beneficios.map((beneficio, index) => {
              const Icon = beneficio.icon;
              return (
                <div
                  key={index}
                  className="group text-center animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-accent/20 transition-colors duration-300">
                    <Icon className="w-8 h-8 text-accent" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-foreground group-hover:text-accent transition-colors duration-300">
                    {beneficio.title}
                  </h3>
                  <p className="text-[#E2E2E2]">{beneficio.description}</p>
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
              Cómo trabajamos contigo
            </h2>
          </div>
          <div className="flex flex-col md:flex-row justify-center items-center gap-6 max-w-6xl mx-auto">
            {proceso.map((item, index) => (
              <div key={index} className="flex items-center">
                <div className="text-center group">
                  <div className="w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center mx-auto mb-3 group-hover:bg-accent group-hover:text-white transition-all duration-300">
                    <span className="text-2xl font-bold text-accent group-hover:text-white">
                      {item.step}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-1">
                    {item.title}
                  </h3>
                  <p className="text-sm text-[#E2E2E2]">{item.desc}</p>
                </div>
                {index < proceso.length - 1 && (
                  <div className="hidden md:block w-8 h-0.5 bg-border mx-4" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonio */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <blockquote className="text-2xl md:text-3xl font-light italic text-[#E2E2E2] mb-6">
              "Matter nos ahorró semanas de búsqueda y garantizó calidad en obra."
            </blockquote>
            <p className="text-accent font-medium">— Estudio GCA Architects</p>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-foreground text-balance">
              Empieza tu próximo proyecto con nosotros
            </h2>
            <p className="text-lg md:text-xl text-[#E2E2E2] mb-10 leading-relaxed">
              Cuéntanos tu idea y te proponemos materiales en 48 h.
            </p>
            <Button size="lg" className="hover:scale-105 transition-transform duration-300">
              Solicitar muestra gratuita
            </Button>
          </div>
        </div>
      </section>

      <Footer />
      <StickyCTA />
    </div>
  );
};

export default Prescriptores;
