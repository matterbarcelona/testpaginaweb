import { ArrowRight } from "lucide-react";

const ComoMedimos = () => {
  const etapas = [
    {
      titulo: "Awareness",
      descripcion: "Visibilidad en showroom y contenidos",
      color: "bg-copper/20 border-copper"
    },
    {
      titulo: "Interacciones",
      descripcion: "Consultas, descargas, visitas",
      color: "bg-copper/30 border-copper"
    },
    {
      titulo: "Leads",
      descripcion: "Solicitudes de muestras y contactos",
      color: "bg-copper/40 border-copper"
    },
    {
      titulo: "Especificaciones",
      descripcion: "Materiales especificados en proyectos",
      color: "bg-copper/50 border-copper"
    }
  ];

  return (
    <section className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground text-center">
            Cómo medimos tu éxito
          </h2>
          <p className="text-lg text-muted-foreground text-center mb-16 max-w-2xl mx-auto">
            Un embudo claro para convertir visibilidad en especificaciones reales
          </p>

          {/* Funnel visualization */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-6">
            {etapas.map((etapa, index) => (
              <div key={index} className="flex flex-col items-center">
                <div 
                  className={`w-full border-2 rounded-lg p-6 transition-all duration-300 hover:scale-105 ${etapa.color}`}
                  style={{ minHeight: `${120 + index * 20}px` }}
                >
                  <div className="text-center">
                    <div className="text-4xl font-bold text-foreground mb-2">
                      {index + 1}
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">
                      {etapa.titulo}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {etapa.descripcion}
                    </p>
                  </div>
                </div>
                {index < etapas.length - 1 && (
                  <ArrowRight className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 text-copper" size={24} />
                )}
              </div>
            ))}
          </div>

          <div className="mt-12 p-6 bg-card rounded-lg border border-border">
            <p className="text-center text-muted-foreground">
              <strong className="text-foreground">Reportes mensuales</strong> con métricas detalladas en cada etapa del embudo
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComoMedimos;
