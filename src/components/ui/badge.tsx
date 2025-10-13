import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-3 py-1 text-small font-semibold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2",
  {
    variants: {
      variant: {
        default: "border-transparent bg-accent text-accent-foreground hover:bg-accent/80 hover:scale-105",
        secondary: "border-transparent bg-surface text-foreground hover:bg-muted hover:scale-105",
        destructive: "border-transparent bg-error text-foreground hover:bg-error/80 hover:scale-105",
        outline: "border-line text-foreground hover:bg-surface hover:scale-105",
        success: "border-transparent bg-success text-foreground hover:bg-success/80 hover:scale-105",
        warning: "border-transparent bg-warning text-foreground hover:bg-warning/80 hover:scale-105",
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
