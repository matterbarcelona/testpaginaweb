import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StickyCTA from "@/components/StickyCTA";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { MapPin, Phone, Mail } from "lucide-react";
import faqs from "@/data/faqs.json";

const Contacto = () => {
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
      <Navbar />

      {/* Hero */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-foreground">
              Estamos listos para ayudarte
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Cuéntanos qué necesitas y te respondemos en 24 h.
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
              <div className="bg-card border border-border rounded-lg p-8">
                <h2 className="text-2xl font-bold mb-6 text-foreground">
                  Envíanos un mensaje
                </h2>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="empresa">Empresa</Label>
                      <Input id="empresa" placeholder="Tu empresa" />
                    </div>
                    <div>
                      <Label htmlFor="ciudad">Ciudad</Label>
                      <Input id="ciudad" placeholder="Tu ciudad" />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="perfil">Soy</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Selecciona tu perfil" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="prescriptor">
                          Arquitecto/Interiorista
                        </SelectItem>
                        <SelectItem value="fabricante">Fabricante/Marca</SelectItem>
                        <SelectItem value="constructor">
                          Constructor/Comprador
                        </SelectItem>
                        <SelectItem value="otro">Otro</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="mensaje">Mensaje</Label>
                    <Textarea
                      id="mensaje"
                      placeholder="Cuéntanos qué necesitas..."
                      rows={6}
                    />
                  </div>

                  <Button size="lg" className="w-full">
                    Enviar mensaje
                  </Button>
                </form>
              </div>
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
