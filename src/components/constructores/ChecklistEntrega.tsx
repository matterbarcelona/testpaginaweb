import { CheckCircle2, Calendar, FileText, RefreshCw, Headphones, Package } from "lucide-react";

const ChecklistEntrega = () => {
  const items = [
    {
      icon: Calendar,
      titulo: "Fechas confirmadas",
      descripcion: "Coordinación de entregas con calendario de obra actualizado"
    },
    {
      icon: FileText,
      titulo: "Albaranes digitales",
      descripcion: "Documentación completa y trazabilidad de cada entrega"
    },
    {
      icon: Package,
      titulo: "Verificación en sitio",
      descripcion: "Confirmación de cantidades y estado antes de descarga"
    },
    {
      icon: RefreshCw,
      titulo: "Gestión de sustituciones",
      descripción: "Alternativas homologadas si hay desabastecimiento"
    },
    {
      icon: Headphones,
      titulo: "Soporte postventa",
      descripcion: "Atención directa para incidencias o dudas técnicas"
    },
    {
      icon: CheckCircle2,
      titulo: "Cierre de partida",
      descripcion: "Confirmación final y archivo de documentación"
    }
  ];

  return (
    <section className="py-20 md:py-32 bg-card">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground text-center">
            Checklist de entrega en obra
          </h2>
          <p className="text-lg text-muted-foreground text-center mb-16 max-w-2xl mx-auto">
            Cada fase controlada para garantizar entregas sin contratiempos
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {items.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="p-6 bg-background border border-border rounded-lg hover:shadow-lg transition-all duration-300 group"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-copper/10 rounded-lg group-hover:bg-copper/20 transition-colors">
                      <Icon className="text-copper" size={24} />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-foreground mb-2">
                        {item.titulo}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {item.descripcion}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-12 p-6 bg-copper/5 border border-copper/20 rounded-lg">
            <p className="text-center text-foreground">
              <strong>100% trazabilidad</strong> en cada entrega con sistema de seguimiento en tiempo real
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChecklistEntrega;
