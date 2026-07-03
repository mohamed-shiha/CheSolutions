import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ArrowLeft, Cpu, Heart, Target, Wrench, Globe2, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FadeIn, StaggerIn } from "@/components/motion/reveal";

export const metadata: Metadata = {
  title: "About",
  description:
    "CheTechSolutions is a small software studio that builds custom systems for factories. Web apps, Android apps, and machine integrations — done right.",
};

const values = [
  {
    icon: Heart,
    title: "Operator-first",
    body: "The people on the floor are the customers. If they don't use it, nothing else matters.",
  },
  {
    icon: Target,
    title: "Outcome, not output",
    body: "We measure success by what changes for your business — not by lines of code or tickets closed.",
  },
  {
    icon: Wrench,
    title: "Built to be owned",
    body: "Clean code, real documentation, knowledge transfer. You can run it without us forever — though we hope you won't want to.",
  },
  {
    icon: Globe2,
    title: "Honest about fit",
    body: "If we're not the right team, we'll say so and point you to someone who is.",
  },
  {
    icon: Cpu,
    title: "Engineering rigor",
    body: "Type-safe, tested, observable. Industrial software has no room for guesswork.",
  },
  {
    icon: Sparkles,
    title: "Pragmatic magic",
    body: "We sweat the details so the experience feels effortless. Good software is invisible.",
  },
];

const milestones = [
  { y: "2018", t: "Started building custom tools for a single factory." },
  { y: "2020", t: "Shipped our first line-side Android app, still in use today." },
  { y: "2022", t: "Added machine integration as a first-class capability." },
  { y: "2024", t: "Crossed 100+ factory workflows digitized." },
  { y: "2026", t: "CheTechSolutions — the studio as it is today." },
];

export default function AboutPage() {
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
              <span className="h-px w-6 bg-brand" /> About
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="mt-5 max-w-4xl font-display text-5xl font-semibold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl text-balance">
              A small studio that{" "}
              <span className="text-gradient">lives on factory floors.</span>
            </h1>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="mt-7 max-w-2xl text-lg leading-relaxed text-muted-foreground text-pretty">
              CheTechSolutions is a focused team of engineers and designers who build
              custom software for industrial operators. We don't do consumer apps,
              marketing sites for SaaS, or anything that doesn't make a line move
              faster, safer, or more reliably.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="container">
          <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr]">
            <FadeIn>
              <div className="rounded-3xl border border-border bg-card/50 p-8 sm:p-10">
                <p className="text-[10px] font-mono uppercase tracking-widest text-brand">
                  // Our story
                </p>
                <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight sm:text-4xl text-balance">
                  We started by fixing one paper logbook. Then another. Then a hundred.
                </h2>
                <div className="mt-6 space-y-4 text-base leading-relaxed text-muted-foreground">
                  <p>
                    The studio grew out of a single engagement at a mid-sized
                    manufacturer that was drowning in clipboards. What started as a
                    custom form became a quality module, then a line-side Android
                    app, then a real-time OEE dashboard wired into the PLCs.
                  </p>
                  <p>
                    Word travelled. We kept getting the same brief from different
                    plants: <em className="text-foreground/90">"build us software
                    that actually fits how we work, not the other way around."</em>
                  </p>
                  <p>
                    Today we're a small, senior team that ships web apps, Android
                    apps, and machine integrations end to end — from the first walk
                    on the floor to long-term support of the systems we put in.
                  </p>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.1}>
              <div className="rounded-3xl border border-border bg-card/50 p-8 sm:p-10">
                <p className="text-[10px] font-mono uppercase tracking-widest text-brand">
                  // Timeline
                </p>
                <ol className="mt-6 space-y-5">
                  {milestones.map((m, i) => (
                    <li key={m.y} className="flex gap-4">
                      <div className="flex flex-col items-center">
                        <span className="grid h-6 w-6 place-items-center rounded-full border border-border bg-background font-mono text-[10px] text-brand">
                          {i + 1}
                        </span>
                        {i < milestones.length - 1 ? (
                          <span className="mt-1 w-px flex-1 bg-border" />
                        ) : null}
                      </div>
                      <div className="pb-2">
                        <p className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
                          {m.y}
                        </p>
                        <p className="mt-0.5 text-sm text-foreground/90">{m.t}</p>
                      </div>
                    </li>
                  ))}
                </ol>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      <section className="border-y border-border/60 bg-card/30 py-24 sm:py-32">
        <div className="container">
          <FadeIn>
            <p className="inline-flex items-center gap-2 text-[11px] font-mono uppercase tracking-[0.25em] text-brand">
              <span className="h-px w-6 bg-brand" /> Values
            </p>
          </FadeIn>
          <FadeIn delay={0.05}>
            <h2 className="mt-4 max-w-2xl font-display text-4xl font-semibold tracking-tight sm:text-5xl text-balance">
              What we believe, in six lines.
            </h2>
          </FadeIn>
          <StaggerIn className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3" gap={0.06}>
            {values.map((v) => (
              <div
                key={v.title}
                className="rounded-2xl border border-border bg-card/50 p-6 transition-colors hover:border-foreground/20"
              >
                <div className="grid h-11 w-11 place-items-center rounded-lg border border-border bg-background/40">
                  <v.icon className="h-5 w-5 text-brand" />
                </div>
                <h3 className="mt-5 font-display text-lg font-semibold">{v.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{v.body}</p>
              </div>
            ))}
          </StaggerIn>
        </div>
      </section>

      <section className="py-24 sm:py-32">
        <div className="container">
          <FadeIn>
            <div className="rounded-3xl border border-border bg-card/40 p-8 sm:p-12 text-center">
              <h2 className="mx-auto max-w-2xl font-display text-3xl font-semibold tracking-tight sm:text-4xl text-balance">
                Want to work with us?
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
                We're usually booked 4–6 weeks out, but we always make room for the
                right project. Tell us about yours.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-3">
                <Button asChild size="lg">
                  <Link href="/contact">
                    Get in touch <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="secondary">
                  <Link href="/services">See what we build</Link>
                </Button>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
