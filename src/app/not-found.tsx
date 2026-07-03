import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <section className="relative isolate flex min-h-[80vh] items-center overflow-hidden">
      <div className="absolute inset-0 -z-10 grid-overlay" />
      <div className="absolute inset-0 -z-10 bg-radial-glow" />
      <div className="container text-center">
        <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-brand">
          // 404
        </p>
        <h1 className="mt-4 font-display text-6xl font-semibold tracking-tight sm:text-7xl">
          Off the line.
        </h1>
        <p className="mx-auto mt-4 max-w-md text-muted-foreground">
          The page you're looking for either moved or never made it into production.
        </p>
        <div className="mt-8 flex justify-center">
          <Button asChild size="lg">
            <Link href="/">
              Back to home <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
