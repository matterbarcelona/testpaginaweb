import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StickyCTA from "@/components/StickyCTA";
import ScrollProgress from "@/components/ScrollProgress";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Package, Wrench, Truck } from "lucide-react";

const Constructores = () => {
  const servicios = [
    {
      icon: Package,
      title: "Suministro integral",
      description: "Pavimentos, revestimientos, iluminación y acabados en un solo pedido",
    },
    {
      icon: Wrench,
      title: "Soporte técnico",
      description: "Asesoría de instalación y resolución de dudas en obra",
    },
    {
      icon: Truck,
      title: "Logística coordinada",
      description: "Entregas planificadas y servicio postventa garantizado",
    },
  ];

  const proceso = [
    { step: "1", title: "Brief técnico", desc: "Nos cuentas el proyecto" },
    { step: "2", title: "Optimización", desc: "Alineamos con prescriptor y coste" },
    { step: "3", title: "Cotización", desc: "Presupuesto unificado" },
    { step: "4", title: "Entrega", desc: "Seguimiento en obra" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Constructores & Buyers"
        description="Suministro integral de materiales de confianza. Logística coordinada, soporte técnico y servicio postventa para obras profesionales."
        path="/constructores"
      />
      <ScrollProgress />
      <Navbar />

      {/* Hero */}
      <section className="py-20 md:py-32 lg:py-40">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl animate-fade-in-up">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-foreground text-balance">
              Materiales de confianza. Logística y servicio a tu medida
            </h1>
            <p className="text-lg md:text-xl text-[#E2E2E2] mb-10 leading-relaxed max-w-3xl">
              Distribuimos marcas líderes y gestionamos el suministro completo para obras profesionales.
            </p>
            <Button size="lg" className="group hover:scale-105 transition-transform duration-300">
              Solicitar presupuesto en 24 h
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
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {servicios.map((servicio, index) => {
              const Icon = servicio.icon;
              return (
                <div
                  key={index}
                  className="group text-center animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-accent/20 transition-colors duration-300">
                    <Icon className="w-8 h-8 text-accent" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-foreground group-hover:text-accent transition-colors duration-300">
                    {servicio.title}
                  </h3>
                  <p className="text-[#E2E2E2] leading-relaxed">{servicio.description}</p>
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
              Cómo trabajamos
            </h2>
          </div>
          <div className="flex flex-col md:flex-row justify-center items-center gap-6 max-w-5xl mx-auto">
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

      {/* Casos */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">
            Casos reales
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-background border border-border rounded-lg p-6 hover:border-accent transition-colors duration-300">
              <h3 className="text-xl font-semibold text-foreground mb-3">Hotel Paxton</h3>
              <p className="text-[#E2E2E2] leading-relaxed">
                Suministro completo de pavimentos, revestimientos y sanitarios para 120 habitaciones con entrega escalonada en 8 semanas.
              </p>
            </div>
            <div className="bg-background border border-border rounded-lg p-6 hover:border-accent transition-colors duration-300">
              <h3 className="text-xl font-semibold text-foreground mb-3">Oficinas Tech Madrid</h3>
              <p className="text-[#E2E2E2] leading-relaxed">
                Coordinación de 15 proveedores para 2.500 m² de oficinas con plazo ajustado y sin incidencias.
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
              Pide tu presupuesto ahora
            </h2>
            <p className="text-lg md:text-xl text-[#E2E2E2] mb-10 leading-relaxed">
              Te respondemos en menos de 24 h con cotización unificada.
            </p>
            <Button size="lg" className="hover:scale-105 transition-transform duration-300">
              Solicitar presupuesto
            </Button>
          </div>
        </div>
      </section>

      <Footer />
      <StickyCTA />
    </div>
  );
};

export default Constructores;
