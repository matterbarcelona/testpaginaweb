import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StickyCTA from "@/components/StickyCTA";
import Breadcrumbs from "@/components/Breadcrumbs";
import FormularioContacto from "@/components/contacto/FormularioContacto";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { MapPin, Phone, Mail } from "lucide-react";
import faqs from "@/data/faqs.json";
import { useScrollTracking } from "@/hooks/useScrollTracking";
import SEO from "@/components/SEO";

const Contacto = () => {
  useScrollTracking('contacto');

  const sedes = [
    {
      ciudad: "Barcelona",
      direccion: "Poblenou, 08018",
      telefono: "+34 932 000 000",
      email: "barcelona@matter.group",
    },
    {
      ciudad: "Madrid",
      direccion: "Chamberí, 28010",
      telefono: "+34 912 000 000",
      email: "madrid@matter.group",
    },
    {
      ciudad: "Sotogrande",
      direccion: "Puerto Deportivo, 11310",
      telefono: "+34 956 000 000",
      email: "sotogrande@matter.group",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Contacto"
        description="Cuéntanos qué necesitas y te responderemos en menos de 24 h. Tres sedes en Barcelona, Madrid y Sotogrande."
        path="/contacto"
      />
      <Navbar />
      <Breadcrumbs />

      {/* Hero */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-foreground">
              Estamos listos para ayudarte
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Envíanos los detalles de tu proyecto. Te responderemos en menos de 24 h.
            </p>
          </div>
        </div>
      </section>

      {/* Formulario y Sedes */}
      <section className="py-12">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Formulario */}
            <div className="lg:col-span-2">
              <FormularioContacto />
            </div>

            {/* Sedes */}
            <div className="lg:col-span-1 space-y-6">
              <h2 className="text-2xl font-bold text-foreground">
                Nuestras sedes
              </h2>
              {sedes.map((sede, i) => (
                <div
                  key={i}
                  className="bg-card border border-border rounded-lg p-6"
                >
                  <h3 className="text-lg font-bold mb-4 text-foreground">
                    {sede.ciudad}
                  </h3>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3 text-muted-foreground">
                      <MapPin size={20} className="flex-shrink-0 mt-0.5" />
                      <span>{sede.direccion}</span>
                    </div>
                    <div className="flex items-center gap-3 text-muted-foreground">
                      <Phone size={20} className="flex-shrink-0" />
                      <span>{sede.telefono}</span>
                    </div>
                    <div className="flex items-center gap-3 text-muted-foreground">
                      <Mail size={20} className="flex-shrink-0" />
                      <span className="break-all">{sede.email}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-foreground">
            Preguntas frecuentes
          </h2>
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible>
              {faqs.general.map((faq, i) => (
                <AccordionItem key={i} value={`item-${i}`}>
                  <AccordionTrigger className="text-left text-foreground">
                    {faq.pregunta}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {faq.respuesta}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      <Footer />
      <StickyCTA />
    </div>
  );
};

export default Contacto;
