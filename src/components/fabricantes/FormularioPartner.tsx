import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { CheckCircle2 } from "lucide-react";
import { analyticsEvents } from "@/lib/analytics";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

// Schema con validación segura
const partnerSchema = z.object({
  nombre: z.string()
    .trim()
    .min(2, { message: "El nombre debe tener al menos 2 caracteres" })
    .max(100, { message: "Máximo 100 caracteres" }),
  
  empresa: z.string()
    .trim()
    .min(2, { message: "La empresa debe tener al menos 2 caracteres" })
    .max(100, { message: "Máximo 100 caracteres" }),
  
  email: z.string()
    .trim()
    .email({ message: "Email inválido" })
    .max(255, { message: "Email demasiado largo" }),
  
  telefono: z.string()
    .trim()
    .min(9, { message: "Teléfono inválido" })
    .max(20, { message: "Teléfono demasiado largo" }),
  
  categoria: z.enum(["ceramica", "madera", "textil", "metal", "vidrio", "piedra", "plastico", "otro"], {
    required_error: "Selecciona una categoría",
  }),
  
  paises: z.string()
    .trim()
    .max(200, { message: "Máximo 200 caracteres" })
    .optional(),
  
  mensaje: z.string()
    .trim()
    .max(400, { message: "Máximo 400 caracteres" })
    .optional(),
});

type PartnerFormValues = z.infer<typeof partnerSchema>;

const FormularioPartner = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [utmData, setUtmData] = useState<Record<string, string>>({});
  const { toast } = useToast();

  const form = useForm<PartnerFormValues>({
    resolver: zodResolver(partnerSchema),
    defaultValues: {
      nombre: "",
      empresa: "",
      email: "",
      telefono: "",
      paises: "",
      mensaje: "",
    },
  });

  // Capturar UTM parameters al montar
  useState(() => {
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      const utm: Record<string, string> = {};
      ['utm_source', 'utm_medium', 'utm_campaign', 'utm_content', 'utm_term'].forEach(key => {
        const value = params.get(key);
        if (value) utm[key] = value;
      });
      setUtmData(utm);
    }
  });

  const onSubmit = async (data: PartnerFormValues) => {
    // Sanitización adicional
    const sanitizedData = {
      ...data,
      nombre: data.nombre.trim().slice(0, 100),
      empresa: data.empresa.trim().slice(0, 100),
      email: data.email.trim().toLowerCase().slice(0, 255),
      telefono: data.telefono.trim().slice(0, 20),
      paises: data.paises?.trim().slice(0, 200) || "",
      mensaje: data.mensaje?.trim().slice(0, 400) || "",
      utm: utmData, // Incluir UTMs capturados
    };

    console.log("Formulario partner TGMA:", sanitizedData);
    
    // Analytics
    analyticsEvents.formSubmitPartner(sanitizedData.categoria);
    analyticsEvents.trackEvent('form_submit_success', {
      form_type: 'partner_tgma',
      categoria: sanitizedData.categoria,
      has_utm: Object.keys(utmData).length > 0
    });
    analyticsEvents.leadTag('fabricante');
    
    setIsSubmitted(true);
    
    toast({
      title: "¡Gracias por tu interés!",
      description: "Nuestro equipo TGMA te contactará en menos de 24 horas.",
      duration: 4000,
    });
    
    form.reset();
    
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  return (
    <section 
      id="partner-form" 
      className="py-20 md:py-32 bg-surface scroll-mt-20"
      aria-labelledby="partner-form-heading"
    >
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 
              id="partner-form-heading"
              className="text-3xl md:text-5xl font-bold text-foreground mb-6 text-balance"
            >
              Empieza a conectar tu marca con los prescriptores
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-4">
              Completa el formulario y descubre cómo TGMA puede potenciar la visibilidad de tu marca
            </p>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-highlight border border-accent/20 rounded-lg text-sm">
              <span className="w-2 h-2 rounded-full bg-success animate-pulse" />
              <span className="text-foreground font-medium">Respondemos en menos de 24 horas</span>
            </div>
          </div>

          {/* Form */}
          <div className="bg-background border border-line rounded-lg p-8 md:p-12">
            {isSubmitted ? (
              <div 
                className="text-center py-12" 
                role="status" 
                aria-live="polite"
              >
                <CheckCircle2 className="w-16 h-16 text-accent mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-4 text-foreground">
                  ¡Mensaje recibido!
                </h3>
                <p className="text-muted-foreground mb-8">
                  Nuestro equipo TGMA revisará tu solicitud y te contactará en las próximas 24 horas para agendar una reunión.
                </p>
                <div className="flex gap-4 justify-center flex-wrap">
                  <Button onClick={() => window.location.href = '/proyectos?rol=fabricante'}>
                    Ver casos de éxito
                  </Button>
                  <Button variant="secondary" onClick={() => window.location.href = '/biblioteca'}>
                    Conocer materiotecas
                  </Button>
                </div>
              </div>
            ) : (
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    {/* Nombre */}
                    <FormField
                      control={form.control}
                      name="nombre"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Nombre completo <span className="text-accent">*</span></FormLabel>
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

                    {/* Empresa */}
                    <FormField
                      control={form.control}
                      name="empresa"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Empresa / Marca <span className="text-accent">*</span></FormLabel>
                          <FormControl>
                            <Input 
                              placeholder="Nombre de la empresa" 
                              {...field}
                              aria-required="true"
                              aria-invalid={!!form.formState.errors.empresa}
                            />
                          </FormControl>
                          <FormMessage role="alert" />
                        </FormItem>
                      )}
                    />

                    {/* Email */}
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email <span className="text-accent">*</span></FormLabel>
                          <FormControl>
                            <Input 
                              type="email"
                              placeholder="tu@empresa.com" 
                              {...field}
                              aria-required="true"
                              aria-invalid={!!form.formState.errors.email}
                            />
                          </FormControl>
                          <FormMessage role="alert" />
                        </FormItem>
                      )}
                    />

                    {/* Teléfono */}
                    <FormField
                      control={form.control}
                      name="telefono"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Teléfono <span className="text-accent">*</span></FormLabel>
                          <FormControl>
                            <Input 
                              type="tel"
                              placeholder="+34 600 000 000" 
                              {...field}
                              aria-required="true"
                              aria-invalid={!!form.formState.errors.telefono}
                            />
                          </FormControl>
                          <FormMessage role="alert" />
                        </FormItem>
                      )}
                    />
                  </div>

                  {/* Categoría de producto */}
                  <FormField
                    control={form.control}
                    name="categoria"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Categoría de producto <span className="text-accent">*</span></FormLabel>
                        <Select 
                          onValueChange={(value) => {
                            field.onChange(value);
                            analyticsEvents.trackEvent('form_field_blur', {
                              field: 'categoria',
                              state: 'ok',
                              value: value
                            });
                          }} 
                          defaultValue={field.value}
                        >
                          <FormControl>
                            <SelectTrigger
                              aria-required="true"
                              aria-invalid={!!form.formState.errors.categoria}
                            >
                              <SelectValue placeholder="Selecciona una categoría" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="ceramica">Cerámica / Porcelánico</SelectItem>
                            <SelectItem value="madera">Madera / Derivados</SelectItem>
                            <SelectItem value="textil">Textiles / Tapicería</SelectItem>
                            <SelectItem value="metal">Metales</SelectItem>
                            <SelectItem value="vidrio">Vidrio</SelectItem>
                            <SelectItem value="piedra">Piedra Natural</SelectItem>
                            <SelectItem value="plastico">Plásticos / Resinas</SelectItem>
                            <SelectItem value="otro">Otro</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage role="alert" />
                      </FormItem>
                    )}
                  />

                  {/* País/es objetivo (opcional) */}
                  <FormField
                    control={form.control}
                    name="paises"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>País/es objetivo (opcional)</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="Ej: España, Portugal, Francia"
                            {...field}
                            onBlur={(e) => {
                              field.onBlur();
                              if (e.target.value) {
                                analyticsEvents.trackEvent('form_field_blur', {
                                  field: 'paises',
                                  state: 'ok'
                                });
                              }
                            }}
                          />
                        </FormControl>
                        <p className="text-xs text-muted-foreground mt-1">
                          Indica los mercados donde quieres aumentar tu visibilidad
                        </p>
                        <FormMessage role="alert" />
                      </FormItem>
                    )}
                  />

                  {/* Mensaje */}
                  <FormField
                    control={form.control}
                    name="mensaje"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Mensaje (opcional, máx. 400 caracteres)</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Cuéntanos más sobre tu marca y objetivos..."
                            rows={4}
                            maxLength={400}
                            {...field}
                            onBlur={(e) => {
                              field.onBlur();
                              if (e.target.value) {
                                analyticsEvents.trackEvent('form_field_blur', {
                                  field: 'mensaje',
                                  state: 'ok'
                                });
                              }
                            }}
                          />
                        </FormControl>
                        <FormMessage role="alert" />
                        {field.value && (
                          <p className="text-xs text-muted-foreground mt-1">
                            {field.value.length}/400 caracteres
                          </p>
                        )}
                      </FormItem>
                    )}
                  />

                  <div className="flex flex-col sm:flex-row gap-4 items-center justify-between pt-4">
                    <p className="text-sm text-muted-foreground">
                      <span className="text-accent">*</span> Campos obligatorios
                    </p>
                    <Button
                      type="submit"
                      size="lg"
                      disabled={form.formState.isSubmitting}
                      className="w-full sm:w-auto"
                      data-analytics="form_submit"
                      data-label="Formulario partner TGMA"
                    >
                      {form.formState.isSubmitting ? "Enviando..." : "Enviar propuesta"}
                    </Button>
                  </div>
                </form>
              </Form>
            )}
          </div>

          <p className="text-xs text-muted-foreground text-center mt-6">
            Al enviar este formulario aceptas nuestra política de privacidad. Tus datos solo se usarán para contactarte sobre TGMA.
          </p>
        </div>
      </div>
    </section>
  );
};

export default FormularioPartner;
