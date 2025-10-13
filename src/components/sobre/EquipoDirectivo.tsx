import { Quote } from "lucide-react";

interface EquipoDirectivoProps {
  equipo: Array<{
    nombre: string;
    cargo: string;
    aporte: string;
    avatar: string;
  }>;
}

const EquipoDirectivo = ({ equipo }: EquipoDirectivoProps) => {
  return (
    <section className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground text-center">
            Equipo directivo
          </h2>
          <p className="text-lg text-muted-foreground text-center mb-16">
            Liderazgo con experiencia en arquitectura, distribución y marketing
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {equipo.map((miembro, index) => (
              <div
                key={index}
                className="group text-center"
              >
                {/* Avatar */}
                <div className="relative mb-6 mx-auto w-48 h-48">
                  <div className="w-full h-full rounded-full bg-gradient-to-br from-muted to-muted/50 overflow-hidden border-4 border-border group-hover:border-copper transition-all duration-300">
                    <div className="w-full h-full flex items-center justify-center">
                      <span className="text-4xl font-bold text-muted-foreground">
                        {miembro.nombre.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Info */}
                <h3 className="text-xl font-bold text-foreground mb-1">
                  {miembro.nombre}
                </h3>
                <p className="text-sm text-copper font-medium mb-4">
                  {miembro.cargo}
                </p>

                {/* Aporte */}
                <div className="relative p-4 bg-card border border-border rounded-lg">
                  <Quote className="absolute top-2 left-2 text-copper/20" size={20} />
                  <p className="text-sm text-muted-foreground italic leading-relaxed">
                    {miembro.aporte}
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

export default EquipoDirectivo;
