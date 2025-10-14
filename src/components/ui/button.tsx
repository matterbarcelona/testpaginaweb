import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-small font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-50 active:scale-97 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-accent text-accent-foreground hover:bg-[hsl(var(--accent-hover))] shadow-sm hover:shadow-md hover:scale-105",
        destructive: "bg-error text-white hover:bg-error/90 shadow-sm hover:scale-105",
        outline: "border border-line bg-transparent text-foreground hover:bg-highlight hover:border-accent hover:text-accent hover:scale-105",
        secondary: "bg-surface text-foreground hover:bg-highlight border border-line hover:border-accent/40 hover:scale-105",
        ghost: "hover:bg-surface hover:text-accent",
        link: "text-accent underline-offset-4 hover:underline hover:text-[hsl(var(--accent-hover))]",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 px-3 text-small",
        lg: "h-12 px-6 text-body",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />;
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
