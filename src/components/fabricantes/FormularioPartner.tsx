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

const partnerSchema = z.object({
  nombre: z.string().min(2, "El nombre debe tener al menos 2 caracteres").max(100),
  empresa: z.string().min(2, "La empresa debe tener al menos 2 caracteres").max(100),
  email: z.string().email("Email inválido").max(255),
  telefono: z.string().min(9, "Teléfono inválido").max(20),
  producto: z.string().min(2, "Especifica el producto o categoría").max(100),
  mensaje: z.string().max(1000).optional(),
});

type PartnerFormValues = z.infer<typeof partnerSchema>;

const FormularioPartner = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const form = useForm<PartnerFormValues>({
    resolver: zodResolver(partnerSchema),
    defaultValues: {
      nombre: "",
      empresa: "",
      email: "",
      telefono: "",
      producto: "",
      mensaje: "",
    },
  });

  const onSubmit = async (data: PartnerFormValues) => {
    setIsSubmitting(true);
    
    // Track GA4 event
    if (typeof window !== 'undefined') {
      const gtag = (window as any).gtag;
      if (typeof gtag === 'function') {
        gtag('event', 'form_submit_success', {
          form_name: 'partner_tgma',
          empresa: data.empresa,
        });
      }
    }

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));

    toast({
      title: "¡Gracias por tu interés!",
      description: "Nuestro equipo TGMA te contactará en 24 h.",
    });

    form.reset();
    setIsSubmitting(false);
  };

  return (
    <section id="partner-form" className="py-20 md:py-32 bg-card scroll-mt-20">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
              Empieza a conectar tu marca con los prescriptores.
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
                  name="empresa"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Empresa / Marca *</FormLabel>
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
                name="producto"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Producto o categoría *</FormLabel>
                    <FormControl>
                      <Input placeholder="Ej: Cerámica técnica, pavimentos de madera..." {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="mensaje"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Mensaje (opcional)</FormLabel>
                    <FormControl>
                      <Textarea 
                        placeholder="Cuéntanos más sobre tu marca y objetivos..."
                        className="resize-none"
                        rows={4}
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
                {isSubmitting ? "Enviando..." : "Enviar propuesta"}
              </Button>
            </form>
          </Form>
        </div>
      </div>
    </section>
  );
};

export default FormularioPartner;
