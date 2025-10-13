import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StickyCTA from "@/components/StickyCTA";
import Breadcrumbs from "@/components/Breadcrumbs";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Checkbox } from "@/components/ui/checkbox";
import { MapPin, Phone, Mail, CheckCircle2 } from "lucide-react";
import faqs from "@/data/faqs.json";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactoSchema, type ContactoFormData } from "@/lib/formSchemas";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { analyticsEvents } from "@/lib/analytics";
import { useScrollTracking } from "@/hooks/useScrollTracking";
import SEO from "@/components/SEO";

const Contacto = () => {
  useScrollTracking('contacto');
  const { toast } = useToast();
  const [isSubmitted, setIsSubmitted] = useState(false);

  const form = useForm<ContactoFormData>({
    resolver: zodResolver(contactoSchema),
    defaultValues: {
      nombre: "",
      email: "",
      empresa: "",
      ciudad: "",
      mensaje: "",
      rgpd: false,
    },
  });

  const onSubmit = async (data: ContactoFormData) => {
    console.log("Form submitted:", data);
    
    // Track lead type - map constructor to comprador for analytics
    const leadType = data.perfil === 'constructor' ? 'comprador' : data.perfil;
    if (leadType === 'prescriptor' || leadType === 'fabricante' || leadType === 'comprador') {
      analyticsEvents.leadTag(leadType);
    }
    
    // Track form submission
    analyticsEvents.formSubmitSuccess('contacto', data.perfil);
    
    setIsSubmitted(true);
    
    toast({
      title: "¡Mensaje enviado!",
      description: "Te contactaremos en menos de 24 horas.",
      duration: 4000,
    });
    
    form.reset();
    
    // Reset success state after 5 seconds
    setTimeout(() => setIsSubmitted(false), 5000);
  };

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
              <div className="bg-card border border-border rounded-lg p-8">
                {isSubmitted ? (
                  <div className="text-center py-12 animate-fade-in" role="status" aria-live="polite">
                    <CheckCircle2 className="w-16 h-16 text-accent mx-auto mb-4" />
                    <h2 className="text-2xl font-bold mb-4 text-foreground">
                      ¡Gracias por contactarnos!
                    </h2>
                    <p className="text-muted-foreground mb-8">
                      Hemos recibido tu mensaje. Nuestro equipo te responderá en menos de 24 horas.
                    </p>
                    <div className="flex gap-4 justify-center">
                      <Button onClick={() => window.location.href = '/biblioteca'}>
                        Descubrir materiales
                      </Button>
                      <Button variant="secondary" onClick={() => window.location.href = '/proyectos'}>
                        Ver proyectos
                      </Button>
                    </div>
                  </div>
                ) : (
                  <>
                    <h2 className="text-2xl font-bold mb-6 text-foreground">
                      Envíanos un mensaje
                    </h2>
                    <Form {...form}>
                      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <FormField
                            control={form.control}
                            name="nombre"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Nombre completo</FormLabel>
                                <FormControl>
                                  <Input 
                                    placeholder="Tu nombre" 
                                    {...field} 
                                    aria-required="true"
                                    aria-invalid={!!form.formState.errors.nombre}
                                  />
                                </FormControl>
                                <FormMessage role="alert" />
                              </FormItem>
                            )}
                          />
                          <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Email</FormLabel>
                                <FormControl>
                                  <Input 
                                    type="email"
                                    placeholder="tu@email.com" 
                                    {...field}
                                    aria-required="true"
                                    aria-invalid={!!form.formState.errors.email}
                                  />
                                </FormControl>
                                <FormMessage role="alert" />
                              </FormItem>
                            )}
                          />
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <FormField
                            control={form.control}
                            name="empresa"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Empresa</FormLabel>
                                <FormControl>
                                  <Input 
                                    placeholder="Tu empresa" 
                                    {...field}
                                    aria-required="true"
                                    aria-invalid={!!form.formState.errors.empresa}
                                  />
                                </FormControl>
                                <FormMessage role="alert" />
                              </FormItem>
                            )}
                          />
                          <FormField
                            control={form.control}
                            name="ciudad"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Ciudad</FormLabel>
                                <FormControl>
                                  <Input 
                                    placeholder="Tu ciudad" 
                                    {...field}
                                    aria-required="true"
                                    aria-invalid={!!form.formState.errors.ciudad}
                                  />
                                </FormControl>
                                <FormMessage role="alert" />
                              </FormItem>
                            )}
                          />
                        </div>

                        <FormField
                          control={form.control}
                          name="perfil"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Soy</FormLabel>
                              <Select onValueChange={field.onChange} defaultValue={field.value}>
                                <FormControl>
                                  <SelectTrigger aria-required="true" aria-invalid={!!form.formState.errors.perfil}>
                                    <SelectValue placeholder="Selecciona tu perfil" />
                                  </SelectTrigger>
                                </FormControl>
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
                              <FormMessage role="alert" />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={form.control}
                          name="mensaje"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Mensaje</FormLabel>
                              <FormControl>
                                <Textarea
                                  placeholder="Cuéntanos qué necesitas..."
                                  rows={6}
                                  {...field}
                                  aria-required="true"
                                  aria-invalid={!!form.formState.errors.mensaje}
                                />
                              </FormControl>
                              <FormMessage role="alert" />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={form.control}
                          name="rgpd"
                          render={({ field }) => (
                            <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                              <FormControl>
                                <Checkbox
                                  checked={field.value}
                                  onCheckedChange={field.onChange}
                                  aria-required="true"
                                  aria-invalid={!!form.formState.errors.rgpd}
                                />
                              </FormControl>
                              <div className="space-y-1 leading-none">
                                <FormLabel className="text-sm font-normal">
                                  Acepto la{" "}
                                  <a href="/privacidad" className="text-accent hover:underline">
                                    política de privacidad
                                  </a>{" "}
                                  y el tratamiento de mis datos
                                </FormLabel>
                                <FormMessage role="alert" />
                              </div>
                            </FormItem>
                          )}
                        />

                        <Button 
                          type="submit" 
                          size="lg" 
                          className="w-full"
                          disabled={form.formState.isSubmitting}
                        >
                          {form.formState.isSubmitting ? "Enviando..." : "Enviar mensaje"}
                        </Button>
                      </form>
                    </Form>
                  </>
                )}
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
