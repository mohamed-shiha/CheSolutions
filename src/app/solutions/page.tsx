import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { FadeIn } from "@/components/motion/reveal";
import { SolutionsSections } from "@/components/sections/solutions-sections";

export const metadata: Metadata = {
  title: "Solutions by industry",
  description:
    "Purpose-built software for manufacturing, quality, maintenance, logistics, and inventory — designed around the realities of a working factory.",
};

export default function SolutionsPage() {
  return (
    <>
      <section className="relative isolate overflow-hidden pt-32 sm:pt-40">
        <div className="absolute inset-0 -z-10 grid-overlay" />
        <div className="absolute inset-0 -z-10 bg-radial-glow" />
        <div className="container">
          <FadeIn>
            <Link
              href="/"
              className="inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              <ArrowLeft className="h-3.5 w-3.5" /> Back home
            </Link>
          </FadeIn>
          <FadeIn delay={0.05}>
            <p className="mt-8 inline-flex items-center gap-2 text-[11px] font-mono uppercase tracking-[0.25em] text-brand">
              <span className="h-px w-6 bg-brand" /> Solutions
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="mt-5 max-w-4xl font-display text-5xl font-semibold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl text-balance">
              Software shaped around{" "}
              <span className="text-gradient">your shop floor.</span>
            </h1>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="mt-7 max-w-2xl text-lg leading-relaxed text-muted-foreground text-pretty">
              We work across the operations that actually drive a factory — production,
              quality, maintenance, materials, and shipping. Each solution is delivered
              as a focused system that integrates with the rest of your stack.
            </p>
          </FadeIn>
        </div>
      </section>
      <SolutionsSections />
    </>
  );
}
