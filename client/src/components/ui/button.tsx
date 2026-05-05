import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-all duration-200",
  {
    variants: {
      default: "bg-primary text-primary-foreground hover:bg-primary/90 active:bg-primary/80",
      destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90 active:bg-destructive/80",
      outline: "bg-background text-foreground hover:bg-background/90 active:bg-background/80 border border-input",
      ghost: "hover:bg-accent/10 active:bg-accent/20 border-transparent border-input"
    },
    size: {
      default: "h-9 px-4",
      sm: "h-8 rounded-md px-3 text-xs",
      lg: "h-10 rounded-md px-8",
      icon: "h-9 w-9"
    }
  }
)

export type { ButtonProps }

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "default", ...props }, ref) => {
    return (
      <button
        className={buttonVariants({ variant, size }), className}
        ref={ref}
        {...props}
      />
    )
  }
)

Button.displayName = "Button"

export { Button }
