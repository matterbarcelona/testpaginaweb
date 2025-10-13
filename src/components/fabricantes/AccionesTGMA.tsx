import { useState } from "react";
import { Store, FileText, Calendar, Users, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";

const AccionesTGMA = () => {
  const [openAcciones, setOpenAcciones] = useState<string[]>([]);

  const toggleAccion = (id: string) => {
    setOpenAcciones(prev =>
      prev.includes(id) ? prev.filter(a => a !== id) : [...prev, id]
    );
  };

  const acciones = [
    {
      id: "showroom",
      titulo: "Presencia en showroom",
      icon: Store,
      descripcion: "Tu marca visible en nuestras materiotecas",
      casos: [
        { titulo: "Caso: Marca textil", detalle: "15 muestras rotativas en Madrid y Barcelona. +120 consultas/mes." },
        { titulo: "Ejemplo: Exhibición destacada", detalle: "Display premium con iluminación y señalética personalizada." }
      ]
    },
    {
      id: "contenido",
      titulo: "Contenido editorial",
      icon: FileText,
      descripcion: "Artículos, entrevistas y casos de uso",
      casos: [
        { titulo: "Caso: Fabricante cerámico", detalle: "3 artículos/trimestre en Journal. CTR 4.2%, 89 leads generados." },
        { titulo: "Ejemplo: Guía de especificación", detalle: "E-book técnico descargado 240 veces, 45% tasa de conversión." }
      ]
    },
    {
      id: "eventos",
      titulo: "Eventos y workshops",
      icon: Calendar,
      descripcion: "Presentaciones ante arquitectos e interioristas",
      casos: [
        { titulo: "Caso: Lanzamiento producto", detalle: "Workshop con 35 estudios. 18 solicitudes de muestra inmediatas." },
        { titulo: "Ejemplo: Desayuno showroom", detalle: "Evento trimestral, 25 asistentes/edición, networking cualificado." }
      ]
    },
    {
      id: "visitas",
      titulo: "Visitas a estudios",
      icon: Users,
      descripcion: "Presentaciones personalizadas con muestras",
      casos: [
        { titulo: "Caso: Marca sostenible", detalle: "12 visitas/mes a estudios top. 7 especificaciones confirmadas." },
        { titulo: "Ejemplo: Ruta comercial", detalle: "Coordinación de visitas zonales con portfolio personalizado." }
      ]
    }
  ];

  return (
    <section className="py-20 md:py-32 bg-card">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground text-center">
            Acciones TGMA que generan resultados
          </h2>
          <p className="text-lg text-muted-foreground text-center mb-16 max-w-2xl mx-auto">
            Explora cada servicio y descubre casos reales de éxito
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {acciones.map((accion) => {
              const Icon = accion.icon;
              const isOpen = openAcciones.includes(accion.id);

              return (
                <Collapsible
                  key={accion.id}
                  open={isOpen}
                  onOpenChange={() => toggleAccion(accion.id)}
                  className="border border-border rounded-lg bg-background overflow-hidden transition-all duration-300 hover:shadow-lg"
                >
                  <CollapsibleTrigger asChild>
                    <Button
                      variant="ghost"
                      className="w-full p-6 h-auto flex items-start justify-between text-left hover:bg-muted/50"
                    >
                      <div className="flex items-start gap-4 flex-1">
                        <div className="p-3 bg-copper/10 rounded-lg">
                          <Icon className="text-copper" size={24} />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-lg font-semibold text-foreground mb-1">
                            {accion.titulo}
                          </h3>
                          <p className="text-sm text-muted-foreground">
                            {accion.descripcion}
                          </p>
                        </div>
                      </div>
                      <ChevronDown
                        className={`text-muted-foreground transition-transform duration-300 ${
                          isOpen ? "rotate-180" : ""
                        }`}
                        size={20}
                      />
                    </Button>
                  </CollapsibleTrigger>

                  <CollapsibleContent className="px-6 pb-6">
                    <div className="space-y-4 pt-4 border-t border-border">
                      {accion.casos.map((caso, index) => (
                        <div key={index} className="p-4 bg-muted/30 rounded-lg">
                          <h4 className="font-semibold text-foreground mb-1">
                            {caso.titulo}
                          </h4>
                          <p className="text-sm text-muted-foreground">
                            {caso.detalle}
                          </p>
                        </div>
                      ))}
                    </div>
                  </CollapsibleContent>
                </Collapsible>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AccionesTGMA;
