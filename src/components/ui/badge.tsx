import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-3 py-1 text-small font-semibold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2",
  {
    variants: {
      variant: {
        default: "border-transparent bg-accent text-accent-foreground hover:bg-accent/90 hover:scale-105",
        secondary: "border border-line bg-surface text-foreground hover:bg-muted hover:border-accent hover:scale-105",
        destructive: "border-transparent bg-error text-white hover:bg-error/90 hover:scale-105",
        outline: "border-2 border-accent text-accent hover:bg-accent hover:text-accent-foreground hover:scale-105",
        success: "border-transparent bg-success text-white hover:bg-success/90 hover:scale-105",
        warning: "border-transparent bg-warning text-white hover:bg-warning/90 hover:scale-105",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return <div className={cn(badgeVariants({ variant }), className)} {...props} />;
}

export { Badge, badgeVariants };
