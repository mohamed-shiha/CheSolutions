"use client";

import { forwardRef, type ButtonHTMLAttributes, type ReactNode } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import Link from "next/link";

const buttonVariants = cva(
  "relative inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium tracking-tight transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-50 select-none",
  {
    variants: {
      variant: {
        primary:
          "bg-brand text-brand-foreground hover:brightness-110 active:brightness-95 shadow-[0_0_0_1px_rgba(255,176,32,0.25),0_8px_24px_-8px_rgba(255,176,32,0.5)] hover:shadow-[0_0_0_1px_rgba(255,176,32,0.5),0_12px_36px_-10px_rgba(255,176,32,0.7)]",
        secondary:
          "bg-foreground/5 text-foreground border border-border hover:bg-foreground/10 hover:border-foreground/20",
        ghost: "text-foreground/80 hover:text-foreground hover:bg-foreground/5",
        outline:
          "border border-border bg-transparent text-foreground hover:bg-foreground/5 hover:border-foreground/30",
        link: "text-brand underline-offset-4 hover:underline",
      },
      size: {
        sm: "h-9 px-3.5 text-sm rounded-md",
        md: "h-11 px-5 text-sm rounded-lg",
        lg: "h-12 px-6 text-[15px] rounded-lg",
        xl: "h-14 px-7 text-base rounded-xl",
        icon: "h-10 w-10 rounded-lg",
      },
    },
    defaultVariants: { variant: "primary", size: "md" },
  }
);

export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, leftIcon, rightIcon, children, asChild, ...props }, ref) => {
    const computed = cn(buttonVariants({ variant, size, className }), "group");

    if (asChild) {
      return (
        <Link href={(props as { href?: string }).href ?? "#"} className={computed}>
          {leftIcon ? <span className="-ml-0.5 transition-transform duration-300 group-hover:-translate-x-0.5">{leftIcon}</span> : null}
          <span className="relative">{children}</span>
          {rightIcon ? <span className="-mr-0.5 transition-transform duration-300 group-hover:translate-x-0.5">{rightIcon}</span> : null}
        </Link>
      );
    }

    return (
      <button
        ref={ref}
        className={computed}
        {...props}
      >
        {leftIcon ? <span className="-ml-0.5 transition-transform duration-300 group-hover:-translate-x-0.5">{leftIcon}</span> : null}
        <span className="relative">{children}</span>
        {rightIcon ? <span className="-mr-0.5 transition-transform duration-300 group-hover:translate-x-0.5">{rightIcon}</span> : null}
      </button>
    );
  }
);
Button.displayName = "Button";

export { buttonVariants };
