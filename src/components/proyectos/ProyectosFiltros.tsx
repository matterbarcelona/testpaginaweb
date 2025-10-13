import { useState } from "react";
import { Filter, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

interface ProyectosFiltrosProps {
  certificaciones: string[];
  impactos: string[];
  onCertificacionChange: (cert: string) => void;
  onImpactoChange: (imp: string) => void;
  onLimpiarFiltros: () => void;
  resultadosCount: number;
}

const ProyectosFiltros = ({
  certificaciones,
  impactos,
  onCertificacionChange,
  onImpactoChange,
  onLimpiarFiltros,
  resultadosCount,
}: ProyectosFiltrosProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const opcionesCertificacion = ["LEED", "WELL", "BREEAM"];
  const opcionesImpacto = ["Acústica", "Energía", "Salud"];

  const totalFiltrosActivos = certificaciones.length + impactos.length;

  return (
    <div className="bg-card border-b border-border sticky top-0 z-30">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between gap-4 flex-wrap">
          <div className="flex items-center gap-4">
            <Collapsible open={isOpen} onOpenChange={setIsOpen}>
              <CollapsibleTrigger asChild>
                <Button variant="outline" className="gap-2">
                  <Filter size={16} />
                  Filtrar proyectos
                  {totalFiltrosActivos > 0 && (
                    <Badge variant="secondary" className="ml-1">
                      {totalFiltrosActivos}
                    </Badge>
                  )}
                </Button>
              </CollapsibleTrigger>

              <CollapsibleContent className="absolute top-full left-0 right-0 mt-2 bg-card border border-border rounded-lg shadow-xl p-6 z-50">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {/* Certificaciones */}
                  <div>
                    <h3 className="text-sm font-semibold text-foreground mb-4 flex items-center gap-2">
                      Certificación
                    </h3>
                    <div className="space-y-3">
                      {opcionesCertificacion.map((cert) => (
                        <div key={cert} className="flex items-center space-x-2">
                          <Checkbox
                            id={`cert-${cert}`}
                            checked={certificaciones.includes(cert)}
                            onCheckedChange={() => onCertificacionChange(cert)}
                          />
                          <Label
                            htmlFor={`cert-${cert}`}
                            className="text-sm font-normal cursor-pointer"
                          >
                            {cert}
                          </Label>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Impacto */}
                  <div>
                    <h3 className="text-sm font-semibold text-foreground mb-4 flex items-center gap-2">
                      Impacto
                    </h3>
                    <div className="space-y-3">
                      {opcionesImpacto.map((imp) => (
                        <div key={imp} className="flex items-center space-x-2">
                          <Checkbox
                            id={`imp-${imp}`}
                            checked={impactos.includes(imp)}
                            onCheckedChange={() => onImpactoChange(imp)}
                          />
                          <Label
                            htmlFor={`imp-${imp}`}
                            className="text-sm font-normal cursor-pointer"
                          >
                            {imp}
                          </Label>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </CollapsibleContent>
            </Collapsible>

            {/* Contador de resultados */}
            <div className="text-sm text-muted-foreground">
              <strong className="text-foreground">{resultadosCount}</strong>{" "}
              {resultadosCount === 1 ? "proyecto" : "proyectos"}
            </div>
          </div>

          {/* Limpiar filtros */}
          {totalFiltrosActivos > 0 && (
            <Button
              variant="ghost"
              size="sm"
              onClick={onLimpiarFiltros}
              className="gap-2 text-muted-foreground hover:text-foreground"
            >
              <X size={16} />
              Limpiar filtros
            </Button>
          )}
        </div>

        {/* Filtros activos como badges */}
        {totalFiltrosActivos > 0 && (
          <div className="flex flex-wrap gap-2 mt-4">
            {certificaciones.map((cert) => (
              <Badge
                key={cert}
                variant="secondary"
                className="gap-1 pr-1"
              >
                {cert}
                <button
                  onClick={() => onCertificacionChange(cert)}
                  className="ml-1 hover:bg-muted rounded-full p-0.5"
                  aria-label={`Eliminar filtro ${cert}`}
                >
                  <X size={12} />
                </button>
              </Badge>
            ))}
            {impactos.map((imp) => (
              <Badge
                key={imp}
                variant="secondary"
                className="gap-1 pr-1"
              >
                {imp}
                <button
                  onClick={() => onImpactoChange(imp)}
                  className="ml-1 hover:bg-muted rounded-full p-0.5"
                  aria-label={`Eliminar filtro ${imp}`}
                >
                  <X size={12} />
                </button>
              </Badge>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProyectosFiltros;
