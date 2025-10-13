import { Clock, Zap, CheckCircle2, Phone } from "lucide-react";

const NivelesServicio = () => {
  const niveles = [
    {
      nombre: "Standard",
      descripcion: "Para proyectos con planificación estándar",
      color: "border-border",
      bgColor: "bg-background",
      sla: [
        { icon: Clock, label: "Cotización", tiempo: "48-72h" },
        { icon: Phone, label: "Respuesta consultas", tiempo: "24h" },
        { icon: CheckCircle2, label: "Entrega", tiempo: "10-15 días" }
      ]
    },
    {
      nombre: "Priority",
      descripcion: "Para obras con plazos ajustados",
      color: "border-copper",
      bgColor: "bg-copper/5",
      destacado: true,
      sla: [
        { icon: Zap, label: "Cotización express", tiempo: "24h" },
        { icon: Phone, label: "Soporte prioritario", tiempo: "4h" },
        { icon: CheckCircle2, label: "Entrega rápida", tiempo: "5-7 días" }
      ]
    }
  ];

  return (
    <section className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground text-center">
            Niveles de servicio
          </h2>
          <p className="text-lg text-muted-foreground text-center mb-16 max-w-2xl mx-auto">
            Elige el SLA que mejor se adapte a las necesidades de tu obra
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {niveles.map((nivel, index) => (
              <div
                key={index}
                className={`border-2 ${nivel.color} ${nivel.bgColor} rounded-lg p-8 relative transition-all duration-300 hover:shadow-xl ${
                  nivel.destacado ? "md:scale-105" : ""
                }`}
              >
                {nivel.destacado && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-copper text-white px-4 py-1 rounded-full text-sm font-semibold">
                    Recomendado
                  </div>
                )}

                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-foreground mb-2">
                    {nivel.nombre}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {nivel.descripcion}
                  </p>
                </div>

                <div className="space-y-6">
                  {nivel.sla.map((item, idx) => {
                    const Icon = item.icon;
                    return (
                      <div key={idx} className="flex items-center gap-4">
                        <div className={`p-2 rounded-lg ${nivel.destacado ? "bg-copper/10" : "bg-muted"}`}>
                          <Icon 
                            className={nivel.destacado ? "text-copper" : "text-muted-foreground"} 
                            size={20} 
                          />
                        </div>
                        <div className="flex-1">
                          <p className="text-sm text-muted-foreground mb-1">
                            {item.label}
                          </p>
                          <p className="font-semibold text-foreground">
                            {item.tiempo}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>

                <div className="mt-8 pt-6 border-t border-border">
                  <p className="text-xs text-center text-muted-foreground">
                    SLA garantizado en condiciones normales de stock
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default NivelesServicio;
