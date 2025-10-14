import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { analyticsEvents } from "@/lib/analytics";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

const presupuestoSchema = z.object({
  nombre: z.string().trim().min(2, "El nombre debe tener al menos 2 caracteres").max(100),
  empresa: z.string().trim().min(2, "La empresa debe tener al menos 2 caracteres").max(100),
  email: z.string().trim().email("Email inválido").max(255),
  telefono: z.string().trim().min(9, "Teléfono inválido").max(20),
  ciudad: z.string().trim().min(2, "Especifica la ciudad o proyecto").max(100),
  materiales: z.string().trim().min(10, "Describe los materiales requeridos").max(240, "Máximo 240 caracteres"),
});

type PresupuestoFormValues = z.infer<typeof presupuestoSchema>;

const FormularioPresupuesto = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [charCount, setCharCount] = useState(0);
  const { toast } = useToast();
  const maxChars = 240;

  const form = useForm<PresupuestoFormValues>({
    resolver: zodResolver(presupuestoSchema),
    defaultValues: {
      nombre: "",
      empresa: "",
      email: "",
      telefono: "",
      ciudad: "",
      materiales: "",
    },
  });

  const onSubmit = async (data: PresupuestoFormValues) => {
    setIsSubmitting(true);
    
    // Sanitize data
    const sanitizedData = {
      ...data,
      nombre: data.nombre.trim().slice(0, 100),
      empresa: data.empresa.trim().slice(0, 100),
      email: data.email.trim().toLowerCase().slice(0, 255),
      telefono: data.telefono.trim().slice(0, 20),
      ciudad: data.ciudad.trim().slice(0, 100),
      materiales: data.materiales.trim().slice(0, 240),
    };

    console.log("Formulario presupuesto:", sanitizedData);
    
    // Track GA4 events
    analyticsEvents.trackEvent('form_submit_budget', {
      success: true,
      form_name: 'presupuesto_constructores',
      ciudad: sanitizedData.ciudad
    });
    
    analyticsEvents.trackEvent('form_submit_success', {
      form_type: 'budget_constructores',
      ciudad: sanitizedData.ciudad
    });

    analyticsEvents.leadTag('comprador');

    toast({
      title: "¡Solicitud recibida!",
      description: "Nuestro equipo técnico te responderá en menos de 24 h.",
      duration: 4000,
    });

    form.reset();
    setIsSubmitting(false);
  };

  return (
    <section 
      id="budget-form" 
      className="py-20 md:py-32 bg-surface scroll-mt-20"
      aria-labelledby="budget-form-heading"
    >
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2
              id="budget-form-heading"
              className="text-3xl md:text-5xl font-bold text-foreground mb-6 text-balance"
            >
              Solicita tu presupuesto en 24 h
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-4">
              Completa el formulario y nuestro equipo técnico te enviará una propuesta personalizada
            </p>
            <p className="text-sm text-accent font-medium">
              ⏱️ Respondemos en menos de 24 horas
            </p>
          </div>

          <div className="bg-background border border-line rounded-lg p-8 md:p-12">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <FormField
                  control={form.control}
                  name="nombre"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Nombre *</FormLabel>
                      <FormControl>
                        <Input placeholder="Tu nombre" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="empresa"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Empresa / Promotora / Constructora *</FormLabel>
                      <FormControl>
                        <Input placeholder="Nombre de la empresa" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email *</FormLabel>
                      <FormControl>
                        <Input type="email" placeholder="tu@empresa.com" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="telefono"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Teléfono *</FormLabel>
                      <FormControl>
                        <Input type="tel" placeholder="+34 600 000 000" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <FormField
                control={form.control}
                name="ciudad"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Ciudad / Proyecto *</FormLabel>
                    <FormControl>
                      <Input placeholder="Ej: Barcelona, Madrid..." {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="materiales"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="flex items-center justify-between">
                      <span>Materiales requeridos *</span>
                      <span className={`text-xs ${charCount > maxChars ? 'text-red-500' : 'text-muted-foreground'}`}>
                        {charCount}/{maxChars}
                      </span>
                    </FormLabel>
                    <FormControl>
                      <Textarea 
                        placeholder="Describe los materiales que necesitas: pavimentos, revestimientos, cantidades estimadas..."
                        className="resize-none"
                        rows={5}
                        {...field}
                        onChange={(e) => {
                          field.onChange(e);
                          setCharCount(e.target.value.length);
                        }}
                        onBlur={(e) => {
                          field.onBlur();
                          analyticsEvents.trackEvent('form_field_blur', {
                            label: 'materiales',
                            state: form.formState.errors.materiales ? 'error' : 'ok',
                            path: window.location.pathname
                          });
                        }}
                      />
                    </FormControl>
                    <FormMessage />
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
                    disabled={isSubmitting}
                    className="w-full sm:w-auto"
                    aria-label="Enviar solicitud de presupuesto"
                  >
                    {isSubmitting ? "Enviando..." : "Enviar solicitud"}
                  </Button>
                </div>
              </form>
            </Form>

            <p className="text-xs text-muted-foreground text-center mt-6">
              Al enviar este formulario aceptas nuestra política de privacidad. Tus datos solo se usarán para contactarte sobre tu presupuesto.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FormularioPresupuesto;
