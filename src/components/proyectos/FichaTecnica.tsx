import { FileCheck, Package, Shield } from "lucide-react";

interface FichaTecnicaProps {
  materialesCriticos: Array<{
    material: string;
    fabricante: string;
    norma?: string;
  }>;
}

const FichaTecnica = ({ materialesCriticos }: FichaTecnicaProps) => {
  return (
    <section className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground text-center">
            Ficha técnica resumida
          </h2>
          <p className="text-lg text-muted-foreground text-center mb-12">
            Materiales críticos especificados en este proyecto
          </p>

          <div className="space-y-4">
            {materialesCriticos.map((item, index) => (
              <div
                key={index}
                className="border border-border rounded-lg p-6 bg-card hover:shadow-md transition-all duration-300"
              >
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {/* Material */}
                  <div className="flex items-start gap-3">
                    <div className="p-2 bg-copper/10 rounded-lg">
                      <Package className="text-copper" size={20} />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground mb-1">Material</p>
                      <p className="font-semibold text-foreground">{item.material}</p>
                    </div>
                  </div>

                  {/* Fabricante */}
                  <div className="flex items-start gap-3">
                    <div className="p-2 bg-copper/10 rounded-lg">
                      <FileCheck className="text-copper" size={20} />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground mb-1">Fabricante</p>
                      <p className="font-semibold text-foreground">{item.fabricante}</p>
                    </div>
                  </div>

                  {/* Norma */}
                  {item.norma && (
                    <div className="flex items-start gap-3">
                      <div className="p-2 bg-copper/10 rounded-lg">
                        <Shield className="text-copper" size={20} />
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground mb-1">Normativa</p>
                        <p className="font-semibold text-foreground">{item.norma}</p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 p-6 bg-muted/30 rounded-lg border border-border">
            <p className="text-sm text-muted-foreground text-center">
              <strong className="text-foreground">Todos los materiales</strong> fueron verificados y validados según normativa vigente
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FichaTecnica;
