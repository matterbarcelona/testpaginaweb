import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

type RoleType = "Prescripción" | "Distribución";

interface RoleBadgeProps {
  roles: RoleType[];
  className?: string;
}

const RoleBadge = ({ roles, className }: RoleBadgeProps) => {
  // Determinar si es "Ambas"
  const isAmbas = roles.length > 1;
  
  // Configuración de colores con contraste AA
  const getRoleConfig = (role: RoleType | "Ambas") => {
    switch (role) {
      case "Prescripción":
        return {
          bg: "bg-[hsl(210_80%_45%)]",      // Azul oscuro - #1565C0
          text: "text-white",
          border: "border-[hsl(210_80%_45%)]",
        };
      case "Distribución":
        return {
          bg: "bg-[hsl(154_54%_38%)]",      // Verde oscuro - #2E7D5B
          text: "text-white",
          border: "border-[hsl(154_54%_38%)]",
        };
      case "Ambas":
        return {
          bg: "bg-accent",                   // Cobre - ya tiene buen contraste
          text: "text-accent-foreground",
          border: "border-accent",
        };
      default:
        return {
          bg: "bg-surface",
          text: "text-foreground",
          border: "border-line",
        };
    }
  };

  if (isAmbas) {
    const config = getRoleConfig("Ambas");
    return (
      <Badge
        className={cn(
          config.bg,
          config.text,
          config.border,
          "border font-semibold",
          className
        )}
        aria-label="Proyecto con servicios de prescripción y distribución"
      >
        Ambas
      </Badge>
    );
  }

  return (
    <>
      {roles.map((role) => {
        const config = getRoleConfig(role);
        return (
          <Badge
            key={role}
            className={cn(
              config.bg,
              config.text,
              config.border,
              "border font-semibold",
              className
            )}
            aria-label={`Servicio de ${role.toLowerCase()}`}
          >
            {role}
          </Badge>
        );
      })}
    </>
  );
};

export default RoleBadge;
