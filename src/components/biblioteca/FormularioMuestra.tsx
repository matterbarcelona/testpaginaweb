import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

const sampleSchema = z.object({
  nombre: z.string().min(2, "El nombre debe tener al menos 2 caracteres").max(100),
  email: z.string().email("Email inválido").max(255),
  empresa: z.string().min(2, "La empresa/estudio debe tener al menos 2 caracteres").max(100),
  ciudad: z.string().min(2, "La ciudad debe tener al menos 2 caracteres").max(100),
  materiales: z.string().min(10, "Describe los materiales que deseas recibir").max(1000),
});

type SampleFormValues = z.infer<typeof sampleSchema>;

const FormularioMuestra = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const form = useForm<SampleFormValues>({
    resolver: zodResolver(sampleSchema),
    defaultValues: {
      nombre: "",
      email: "",
      empresa: "",
      ciudad: "",
      materiales: "",
    },
  });

  const onSubmit = async (data: SampleFormValues) => {
    setIsSubmitting(true);
    
    // Track GA4 event
    if (typeof window !== 'undefined') {
      const gtag = (window as any).gtag;
      if (typeof gtag === 'function') {
        gtag('event', 'form_submit_sample', {
          form_name: 'solicitud_muestra',
          empresa: data.empresa,
        });
      }
    }

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));

    toast({
      title: "¡Solicitud recibida!",
      description: "Tus muestras llegarán en 24 h.",
    });

    form.reset();
    setIsSubmitting(false);
  };

  return (
    <section id="sample-form" className="py-20 md:py-32 bg-card scroll-mt-20">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
              Solicita tus muestras ahora.
            </h2>
          </div>

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
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email *</FormLabel>
                      <FormControl>
                        <Input type="email" placeholder="tu@email.com" {...field} />
                      </FormControl>
                      <FormMessage />
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
                      <FormLabel>Empresa / Estudio *</FormLabel>
                      <FormControl>
                        <Input placeholder="Nombre de tu empresa" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="ciudad"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Ciudad *</FormLabel>
                      <FormControl>
                        <Input placeholder="Ej: Barcelona, Madrid..." {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <FormField
                control={form.control}
                name="materiales"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Materiales seleccionados *</FormLabel>
                    <FormControl>
                      <Textarea 
                        placeholder="Describe los materiales que deseas recibir: Porcelánico Natural Series, Madera Técnica Roble..."
                        className="resize-none"
                        rows={5}
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button
                type="submit"
                size="lg"
                className="w-full hover:scale-105 transition-transform duration-300"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Enviando..." : "Enviar solicitud"}
              </Button>
            </form>
          </Form>
        </div>
      </div>
    </section>
  );
};

export default FormularioMuestra;
