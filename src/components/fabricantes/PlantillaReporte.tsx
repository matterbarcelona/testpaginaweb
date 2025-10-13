import { Download, FileText, TrendingUp, Users, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { analyticsEvents } from "@/lib/analytics";

const PlantillaReporte = () => {
  const handleDownload = () => {
    analyticsEvents.reportTemplateDownload('fabricantes_page');
    
    // Create a simple text-based template that simulates a report structure
    const template = `
===========================================
REPORTE MENSUAL TGMA - PLANTILLA
===========================================

MARCA: _______________________________
PERIODO: _____________________________
FECHA DE REPORTE: ____________________


1. ALCANCE (AWARENESS)
===========================================
Impresiones en showroom: ______________
Visualizaciones contenido: ____________
Asistentes eventos: ___________________
Alcance redes sociales: _______________

TOTAL ALCANCE: ________________________


2. LEADS GENERADOS
===========================================
Solicitudes de muestra: _______________
Consultas técnicas: ___________________
Contactos cualificados: _______________
Descargas de información: _____________

TOTAL LEADS: __________________________


3. FOLLOW-UPS REALIZADOS
===========================================
Llamadas de seguimiento: ______________
Visitas a estudios: ___________________
Reuniones programadas: ________________
Propuestas enviadas: __________________

TOTAL FOLLOW-UPS: _____________________


4. ESPECIFICACIONES CONFIRMADAS
===========================================
Proyectos en curso: ___________________
Especificaciones cerradas: ____________
Valor estimado (€): ___________________
Estudios involucrados: ________________

TOTAL ESPECIFICACIONES: _______________


5. OBSERVACIONES Y PRÓXIMOS PASOS
===========================================
_________________________________________
_________________________________________
_________________________________________
_________________________________________


---
Reporte generado por TGMA | Matter Group
Contacto: info@mattergroup.es
`;

    const blob = new Blob([template], { type: 'text/plain' });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'plantilla-reporte-tgma.txt';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    window.URL.revokeObjectURL(url);
  };

  const campos = [
    { icon: TrendingUp, titulo: "Alcance", descripcion: "Impresiones y visualizaciones" },
    { icon: Users, titulo: "Leads", descripcion: "Contactos cualificados generados" },
    { icon: FileText, titulo: "Follow-ups", descripcion: "Seguimientos y acciones comerciales" },
    { icon: CheckCircle, titulo: "Especificaciones", descripcion: "Cierres confirmados en proyectos" }
  ];

  return (
    <section className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-copper/10 rounded-full mb-6">
              <FileText className="text-copper" size={32} />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              Plantilla de reporte mensual
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Descarga nuestra plantilla para visualizar el formato de reporting que recibirás cada mes
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {campos.map((campo, index) => {
              const Icon = campo.icon;
              return (
                <div
                  key={index}
                  className="p-6 bg-card border border-border rounded-lg hover:shadow-md transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-2 bg-copper/10 rounded-lg">
                      <Icon className="text-copper" size={20} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">
                        {campo.titulo}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {campo.descripcion}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="text-center">
            <Button
              onClick={handleDownload}
              size="lg"
              className="gap-2"
            >
              <Download size={20} />
              Descargar plantilla de reporte
            </Button>
            <p className="text-sm text-muted-foreground mt-4">
              Formato .txt • Visualiza el tipo de datos y métricas que rastreamos
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlantillaReporte;
