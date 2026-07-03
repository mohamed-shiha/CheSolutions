"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Cpu } from "lucide-react";
import { siteConfig } from "@/lib/site";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled
          ? "border-b border-border/60 bg-background/70 backdrop-blur-xl"
          : "bg-transparent"
      )}
    >
      <div className="container flex h-16 items-center justify-between gap-6">
        <Link
          href="/"
          className="group flex items-center gap-2.5"
          aria-label={siteConfig.name}
        >
          <span className="relative grid h-9 w-9 place-items-center overflow-hidden rounded-lg border border-border bg-card/80">
            <span className="absolute inset-0 bg-gradient-to-br from-brand/20 to-accent/10" />
            <Cpu className="relative h-4 w-4 text-brand" strokeWidth={2.2} />
            <span className="absolute inset-x-0 -bottom-px h-px bg-gradient-to-r from-transparent via-brand to-transparent" />
          </span>
          <span className="flex flex-col leading-none">
            <span className="font-display text-[15px] font-semibold tracking-tight">
              Che<span className="text-brand">Tech</span>Solutions
            </span>
            <span className="mt-0.5 text-[10px] font-mono uppercase tracking-[0.2em] text-muted-foreground">
              Software · Automation
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {siteConfig.nav.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "relative rounded-md px-3 py-2 text-sm transition-colors",
                  active ? "text-foreground" : "text-muted-foreground hover:text-foreground"
                )}
              >
                {item.label}
                {active ? (
                  <span className="absolute inset-x-3 -bottom-0.5 h-px bg-brand" />
                ) : null}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-2 md:flex">
          <Button asChild variant="ghost" size="sm">
            <Link href="/contact">Talk to us</Link>
          </Button>
          <Button asChild size="sm">
            <Link href="/contact">Start a project</Link>
          </Button>
        </div>

        <button
          aria-label="Toggle menu"
          onClick={() => setOpen((o) => !o)}
          className="grid h-10 w-10 place-items-center rounded-lg border border-border bg-card/60 md:hidden"
        >
          {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={cn(
          "md:hidden overflow-hidden border-b border-border/60 bg-background/95 backdrop-blur-xl transition-[max-height,opacity] duration-500",
          open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <nav className="container flex flex-col gap-1 py-4">
          {siteConfig.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "rounded-md px-3 py-3 text-sm transition-colors",
                pathname === item.href
                  ? "bg-foreground/5 text-foreground"
                  : "text-muted-foreground hover:bg-foreground/5 hover:text-foreground"
              )}
            >
              {item.label}
            </Link>
          ))}
          <div className="mt-2 flex gap-2 px-1">
            <Button asChild size="md" className="flex-1">
              <Link href="/contact">Start a project</Link>
            </Button>
          </div>
        </nav>
      </div>
    </header>
  );
}
