import { type HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

export function Badge({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border border-border bg-card/60 px-2.5 py-1 text-[11px] font-mono uppercase tracking-wider text-muted-foreground",
        className
      )}
      {...props}
    />
  );
}

export function Tag({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-md border border-border bg-foreground/5 px-2 py-0.5 text-[11px] font-mono text-muted-foreground",
        className
      )}
    >
      {children}
    </span>
  );
}
