import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { CheckCircle2 } from "lucide-react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { analyticsEvents } from "@/lib/analytics";

// Schema de validación con seguridad
const proyectoSchema = z.object({
  nombre: z.string()
    .trim()
    .min(2, { message: "El nombre debe tener al menos 2 caracteres" })
    .max(100, { message: "Máximo 100 caracteres" }),
  
  email: z.string()
    .trim()
    .email({ message: "Email inválido" })
    .max(255, { message: "Email demasiado largo" }),
  
  estudio: z.string()
    .trim()
    .min(2, { message: "Mínimo 2 caracteres" })
    .max(100, { message: "Máximo 100 caracteres" }),
  
  tipologia: z.enum(["residencial", "comercial", "hospitalidad", "oficinas", "retail", "otro"], {
    required_error: "Selecciona una tipología",
  }),
  
  descripcion: z.string()
    .trim()
    .min(20, { message: "Describe tu proyecto con al menos 20 caracteres" })
    .max(500, { message: "Máximo 500 caracteres" }),
  
  rgpd: z.boolean()
    .refine((val) => val === true, {
      message: "Debes aceptar la política de privacidad",
    }),
});

type ProyectoFormData = z.infer<typeof proyectoSchema>;

const FormularioProyecto = () => {
  const { toast } = useToast();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [charCount, setCharCount] = useState(0);

  const form = useForm<ProyectoFormData>({
    resolver: zodResolver(proyectoSchema),
    mode: "onBlur", // Validación onBlur
    defaultValues: {
      nombre: "",
      email: "",
      estudio: "",
      descripcion: "",
      rgpd: false,
    },
  });

  const onSubmit = async (data: ProyectoFormData) => {
    // Validación adicional de seguridad
    const sanitizedData = {
      ...data,
      nombre: data.nombre.trim().slice(0, 100),
      email: data.email.trim().toLowerCase().slice(0, 255),
      estudio: data.estudio.trim().slice(0, 100),
      descripcion: data.descripcion.trim().slice(0, 500),
    };

    console.log("Formulario proyecto prescriptor:", sanitizedData);
    
    // Track GA4
    analyticsEvents.formSubmitPrescriptores(sanitizedData.tipologia);
    analyticsEvents.leadTag('prescriptor');
    
    setIsSubmitted(true);
    
    toast({
      title: "¡Formulario enviado!",
      description: "Te contactaremos en menos de 24 horas.",
      duration: 4000,
    });
    
    form.reset();
    
    // Reset success state after 5 seconds
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  return (
    <section 
      className="py-20 md:py-32 bg-surface" 
      aria-labelledby="formulario-proyecto-heading"
    >
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12 animate-section">
            <h2 
              id="formulario-proyecto-heading"
              className="text-3xl md:text-5xl font-bold mb-6 text-foreground"
            >
              Cuéntanos tu proyecto
            </h2>
            <p className="text-body text-muted-foreground leading-relaxed">
              Completa el formulario y te ayudaremos a encontrar los mejores materiales.
            </p>
            <p className="text-sm text-accent font-medium mt-2">
              ⏱️ Respondemos en &lt; 24h
            </p>
          </div>

          {/* Form */}
          <div className="bg-card border border-line rounded-lg p-8 animate-section stagger-1">
            {isSubmitted ? (
              <div 
                className="text-center py-12 animate-section" 
                role="status" 
                aria-live="polite"
              >
                <CheckCircle2 className="w-16 h-16 text-success mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-4 text-foreground">
                  ¡Gracias por contactarnos!
                </h3>
                <p className="text-muted-foreground mb-8">
                  Hemos recibido tu consulta. Nuestro equipo de prescripción te responderá en menos de 24 horas.
                </p>
                <div className="flex gap-4 justify-center">
                  <Button onClick={() => window.location.href = '/biblioteca'}>
                    Explorar materiales
                  </Button>
                  <Button variant="secondary" onClick={() => window.location.href = '/proyectos'}>
                    Ver proyectos
                  </Button>
                </div>
              </div>
            ) : (
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  {/* Nombre */}
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

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Email */}
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

                    {/* Estudio */}
                    <FormField
                      control={form.control}
                      name="estudio"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Estudio / Empresa</FormLabel>
                          <FormControl>
                            <Input 
                              placeholder="Nombre del estudio" 
                              {...field}
                              aria-required="true"
                              aria-invalid={!!form.formState.errors.estudio}
                            />
                          </FormControl>
                          <FormMessage role="alert" />
                        </FormItem>
                      )}
                    />
                  </div>

                  {/* Tipología */}
                  <FormField
                    control={form.control}
                    name="tipologia"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Tipología del proyecto</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger 
                              aria-required="true" 
                              aria-invalid={!!form.formState.errors.tipologia}
                            >
                              <SelectValue placeholder="Selecciona tipología" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="residencial">Residencial</SelectItem>
                            <SelectItem value="comercial">Comercial</SelectItem>
                            <SelectItem value="hospitalidad">Hospitalidad</SelectItem>
                            <SelectItem value="oficinas">Oficinas</SelectItem>
                            <SelectItem value="retail">Retail</SelectItem>
                            <SelectItem value="otro">Otro</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage role="alert" />
                      </FormItem>
                    )}
                  />

                  {/* Descripción */}
                  <FormField
                    control={form.control}
                    name="descripcion"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Descripción del proyecto</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Cuéntanos sobre tu proyecto, necesidades de materiales, plazos..."
                            rows={5}
                            {...field}
                            onChange={(e) => {
                              field.onChange(e);
                              setCharCount(e.target.value.length);
                            }}
                            aria-required="true"
                            aria-invalid={!!form.formState.errors.descripcion}
                            maxLength={500}
                          />
                        </FormControl>
                        <div className="flex justify-between items-center mt-1">
                          <FormMessage role="alert" />
                          <span className={`text-xs ${charCount > 450 ? 'text-warning' : 'text-muted-foreground'}`}>
                            {charCount}/500 caracteres
                          </span>
                        </div>
                      </FormItem>
                    )}
                  />

                  {/* RGPD */}
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
                    {form.formState.isSubmitting ? "Enviando..." : "Enviar consulta"}
                  </Button>
                </form>
              </Form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FormularioProyecto;
