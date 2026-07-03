import { type HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

export function Container({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("container relative", className)} {...props} />;
}

export function Section({
  className,
  ...props
}: HTMLAttributes<HTMLElement> & { as?: "section" | "div" }) {
  return <section className={cn("relative py-20 sm:py-28 lg:py-32", className)} {...props} />;
}

export function Eyebrow({ className, ...props }: HTMLAttributes<HTMLSpanElement>) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 text-[11px] font-mono uppercase tracking-[0.25em] text-brand",
        className
      )}
      {...props}
    />
  );
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className,
}: {
  eyebrow?: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  align?: "left" | "center";
  className?: string;
}) {
  return (
    <div
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      {eyebrow ? <Eyebrow className="mb-5">// {eyebrow}</Eyebrow> : null}
      <h2 className="font-display text-3xl font-semibold tracking-tight text-balance sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-5 text-base leading-relaxed text-muted-foreground text-pretty sm:text-lg">
          {description}
        </p>
      ) : null}
    </div>
  );
}
