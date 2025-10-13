import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
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
import { Clock, Users, Briefcase, Calculator } from "lucide-react";

// Schemas por flujo
const asesoriaSchema = z.object({
  nombre: z.string().min(2, "Nombre requerido").max(100),
  email: z.string().email("Email inválido").max(255),
  telefono: z.string().min(9, "Teléfono requerido").max(20),
  estudio: z.string().min(2, "Nombre del estudio requerido").max(100),
  tipologia: z.string().min(1, "Selecciona una tipología"),
  sede: z.string().min(1, "Selecciona una sede"),
  horario: z.string().min(1, "Selecciona un horario"),
  mensaje: z.string().max(500).optional(),
});

const partnerSchema = z.object({
  nombre: z.string().min(2, "Nombre requerido").max(100),
  empresa: z.string().min(2, "Empresa requerida").max(100),
  email: z.string().email("Email inválido").max(255),
  telefono: z.string().min(9, "Teléfono requerido").max(20),
  categoria: z.string().min(1, "Selecciona una categoría"),
  sede: z.string().min(1, "Selecciona una sede"),
  horario: z.string().min(1, "Selecciona un horario"),
  mensaje: z.string().max(500).optional(),
});

const presupuestoSchema = z.object({
  nombre: z.string().min(2, "Nombre requerido").max(100),
  empresa: z.string().min(2, "Empresa requerida").max(100),
  email: z.string().email("Email inválido").max(255),
  telefono: z.string().min(9, "Teléfono requerido").max(20),
  tipoObra: z.string().min(1, "Tipo de obra requerido"),
  plazo: z.string().min(1, "Selecciona un plazo"),
  sede: z.string().min(1, "Selecciona una sede"),
  horario: z.string().min(1, "Selecciona un horario"),
  mensaje: z.string().max(500).optional(),
});

type AsesoriaFormValues = z.infer<typeof asesoriaSchema>;
type PartnerFormValues = z.infer<typeof partnerSchema>;
type PresupuestoFormValues = z.infer<typeof presupuestoSchema>;

const sedes = [
  { value: "barcelona", label: "Barcelona - Poblenou" },
  { value: "madrid", label: "Madrid - Chamberí" },
  { value: "sotogrande", label: "Sotogrande - Puerto Deportivo" },
];

const horarios = [
  { value: "manana", label: "Mañana (9:00 - 13:00)" },
  { value: "tarde", label: "Tarde (14:00 - 18:00)" },
  { value: "indiferente", label: "Indiferente" },
];

const FormularioContacto = () => {
  const [activeTab, setActiveTab] = useState("asesoria");
  const { toast } = useToast();

  // Form for Asesoría
  const asesoriaForm = useForm<AsesoriaFormValues>({
    resolver: zodResolver(asesoriaSchema),
    defaultValues: {
      nombre: "",
      email: "",
      telefono: "",
      estudio: "",
      tipologia: "",
      sede: "",
      horario: "",
      mensaje: "",
    },
  });

  // Form for Partnership
  const partnerForm = useForm<PartnerFormValues>({
    resolver: zodResolver(partnerSchema),
    defaultValues: {
      nombre: "",
      empresa: "",
      email: "",
      telefono: "",
      categoria: "",
      sede: "",
      horario: "",
      mensaje: "",
    },
  });

  // Form for Presupuesto
  const presupuestoForm = useForm<PresupuestoFormValues>({
    resolver: zodResolver(presupuestoSchema),
    defaultValues: {
      nombre: "",
      empresa: "",
      email: "",
      telefono: "",
      tipoObra: "",
      plazo: "",
      sede: "",
      horario: "",
      mensaje: "",
    },
  });

  const onSubmitAsesoria = async (data: AsesoriaFormValues) => {
    console.log("Asesoría form:", data);
    analyticsEvents.formSubmitAsesoria(data.tipologia);
    
    toast({
      title: "¡Solicitud enviada!",
      description: "Nos pondremos en contacto contigo en menos de 24h.",
    });
    
    asesoriaForm.reset();
  };

  const onSubmitPartner = async (data: PartnerFormValues) => {
    console.log("Partner form:", data);
    analyticsEvents.formSubmitPartner(data.categoria);
    
    toast({
      title: "¡Solicitud enviada!",
      description: "Nos pondremos en contacto contigo en menos de 24h.",
    });
    
    partnerForm.reset();
  };

  const onSubmitPresupuesto = async (data: PresupuestoFormValues) => {
    console.log("Presupuesto form:", data);
    analyticsEvents.formSubmitPresupuesto(data.tipoObra);
    
    toast({
      title: "¡Solicitud enviada!",
      description: "Nos pondremos en contacto contigo en menos de 24h.",
    });
    
    presupuestoForm.reset();
  };

  return (
    <div className="bg-card rounded-lg border border-border p-8">
      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid w-full grid-cols-3 mb-8">
          <TabsTrigger value="asesoria" className="gap-2">
            <Users size={16} />
            <span className="hidden sm:inline">Asesoría</span>
          </TabsTrigger>
          <TabsTrigger value="partner" className="gap-2">
            <Briefcase size={16} />
            <span className="hidden sm:inline">Partnership</span>
          </TabsTrigger>
          <TabsTrigger value="presupuesto" className="gap-2">
            <Calculator size={16} />
            <span className="hidden sm:inline">Presupuesto</span>
          </TabsTrigger>
        </TabsList>

        {/* Asesoría Tab */}
        <TabsContent value="asesoria">
          <div className="mb-6">
            <h3 className="text-xl font-semibold text-foreground mb-2">
              Asesoría para prescriptores
            </h3>
            <p className="text-muted-foreground">
              Cuéntanos sobre tu proyecto y te ayudaremos con la especificación de materiales
            </p>
          </div>

          <Form {...asesoriaForm}>
            <form onSubmit={asesoriaForm.handleSubmit(onSubmitAsesoria)} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FormField
                  control={asesoriaForm.control}
                  name="nombre"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Nombre completo</FormLabel>
                      <FormControl>
                        <Input placeholder="Tu nombre" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={asesoriaForm.control}
                  name="estudio"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Estudio / Empresa</FormLabel>
                      <FormControl>
                        <Input placeholder="Nombre del estudio" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={asesoriaForm.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input type="email" placeholder="tu@email.com" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={asesoriaForm.control}
                  name="telefono"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Teléfono</FormLabel>
                      <FormControl>
                        <Input placeholder="+34 600 000 000" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={asesoriaForm.control}
                  name="tipologia"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Tipología del proyecto</FormLabel>
                      <Select onValueChange={field.onChange} value={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Selecciona tipología" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="residencial">Residencial</SelectItem>
                          <SelectItem value="oficinas">Oficinas</SelectItem>
                          <SelectItem value="hospitalidad">Hospitalidad</SelectItem>
                          <SelectItem value="retail">Retail</SelectItem>
                          <SelectItem value="salud">Salud</SelectItem>
                          <SelectItem value="otro">Otro</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={asesoriaForm.control}
                  name="sede"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Sede preferida</FormLabel>
                      <Select onValueChange={field.onChange} value={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Selecciona sede" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {sedes.map((sede) => (
                            <SelectItem key={sede.value} value={sede.value}>
                              {sede.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={asesoriaForm.control}
                  name="horario"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Horario preferente</FormLabel>
                      <Select onValueChange={field.onChange} value={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Selecciona horario" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {horarios.map((horario) => (
                            <SelectItem key={horario.value} value={horario.value}>
                              {horario.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <FormField
                control={asesoriaForm.control}
                name="mensaje"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Mensaje (opcional)</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Cuéntanos más sobre tu proyecto..."
                        className="min-h-[100px]"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button type="submit" size="lg" className="w-full">
                Solicitar asesoría
              </Button>
            </form>
          </Form>
        </TabsContent>

        {/* Partnership Tab */}
        <TabsContent value="partner">
          <div className="mb-6">
            <h3 className="text-xl font-semibold text-foreground mb-2">
              Partnership para fabricantes
            </h3>
            <p className="text-muted-foreground">
              Presenta tu marca en nuestras materiotecas y conecta con prescriptores
            </p>
          </div>

          <Form {...partnerForm}>
            <form onSubmit={partnerForm.handleSubmit(onSubmitPartner)} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FormField
                  control={partnerForm.control}
                  name="nombre"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Nombre completo</FormLabel>
                      <FormControl>
                        <Input placeholder="Tu nombre" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={partnerForm.control}
                  name="empresa"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Empresa / Marca</FormLabel>
                      <FormControl>
                        <Input placeholder="Nombre de la empresa" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={partnerForm.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input type="email" placeholder="tu@email.com" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={partnerForm.control}
                  name="telefono"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Teléfono</FormLabel>
                      <FormControl>
                        <Input placeholder="+34 600 000 000" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={partnerForm.control}
                  name="categoria"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Categoría de producto</FormLabel>
                      <Select onValueChange={field.onChange} value={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Selecciona categoría" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="pavimentos">Pavimentos</SelectItem>
                          <SelectItem value="revestimientos">Revestimientos</SelectItem>
                          <SelectItem value="textiles">Textiles</SelectItem>
                          <SelectItem value="iluminacion">Iluminación</SelectItem>
                          <SelectItem value="mobiliario">Mobiliario</SelectItem>
                          <SelectItem value="otro">Otro</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={partnerForm.control}
                  name="sede"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Sede preferida</FormLabel>
                      <Select onValueChange={field.onChange} value={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Selecciona sede" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {sedes.map((sede) => (
                            <SelectItem key={sede.value} value={sede.value}>
                              {sede.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={partnerForm.control}
                  name="horario"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Horario preferente</FormLabel>
                      <Select onValueChange={field.onChange} value={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Selecciona horario" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {horarios.map((horario) => (
                            <SelectItem key={horario.value} value={horario.value}>
                              {horario.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <FormField
                control={partnerForm.control}
                name="mensaje"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Mensaje (opcional)</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Cuéntanos sobre tus productos..."
                        className="min-h-[100px]"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button type="submit" size="lg" className="w-full">
                Solicitar partnership
              </Button>
            </form>
          </Form>
        </TabsContent>

        {/* Presupuesto Tab */}
        <TabsContent value="presupuesto">
          <div className="mb-6">
            <h3 className="text-xl font-semibold text-foreground mb-2">
              Presupuesto para constructores
            </h3>
            <p className="text-muted-foreground">
              Solicita presupuesto para tu obra con entrega y logística coordinada
            </p>
          </div>

          <Form {...presupuestoForm}>
            <form onSubmit={presupuestoForm.handleSubmit(onSubmitPresupuesto)} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FormField
                  control={presupuestoForm.control}
                  name="nombre"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Nombre completo</FormLabel>
                      <FormControl>
                        <Input placeholder="Tu nombre" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={presupuestoForm.control}
                  name="empresa"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Empresa</FormLabel>
                      <FormControl>
                        <Input placeholder="Nombre de la empresa" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={presupuestoForm.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input type="email" placeholder="tu@email.com" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={presupuestoForm.control}
                  name="telefono"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Teléfono</FormLabel>
                      <FormControl>
                        <Input placeholder="+34 600 000 000" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={presupuestoForm.control}
                  name="tipoObra"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Tipo de obra</FormLabel>
                      <Select onValueChange={field.onChange} value={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Selecciona tipo" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="nueva">Obra nueva</SelectItem>
                          <SelectItem value="reforma">Reforma</SelectItem>
                          <SelectItem value="rehabilitacion">Rehabilitación</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={presupuestoForm.control}
                  name="plazo"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Plazo estimado</FormLabel>
                      <Select onValueChange={field.onChange} value={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Selecciona plazo" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="urgente">Urgente (&lt; 2 semanas)</SelectItem>
                          <SelectItem value="corto">Corto plazo (2-4 semanas)</SelectItem>
                          <SelectItem value="medio">Medio plazo (1-2 meses)</SelectItem>
                          <SelectItem value="largo">Largo plazo (&gt; 2 meses)</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={presupuestoForm.control}
                  name="sede"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Sede preferida</FormLabel>
                      <Select onValueChange={field.onChange} value={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Selecciona sede" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {sedes.map((sede) => (
                            <SelectItem key={sede.value} value={sede.value}>
                              {sede.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={presupuestoForm.control}
                  name="horario"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Horario preferente</FormLabel>
                      <Select onValueChange={field.onChange} value={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Selecciona horario" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {horarios.map((horario) => (
                            <SelectItem key={horario.value} value={horario.value}>
                              {horario.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <FormField
                control={presupuestoForm.control}
                name="mensaje"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Detalles del proyecto (opcional)</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Describe los materiales que necesitas..."
                        className="min-h-[100px]"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button type="submit" size="lg" className="w-full">
                Solicitar presupuesto
              </Button>
            </form>
          </Form>
        </TabsContent>
      </Tabs>

      {/* SLA Message */}
      <div className="mt-6 p-4 bg-copper/5 border border-copper/20 rounded-lg flex items-center gap-3">
        <Clock className="text-copper flex-shrink-0" size={24} />
        <p className="text-sm text-foreground">
          <strong>Respondemos en menos de 24h</strong> en días laborables
        </p>
      </div>
    </div>
  );
};

export default FormularioContacto;
