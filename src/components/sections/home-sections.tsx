"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import { ArrowRight, MoveRight, Cpu, Wifi, Cog, Database, Bot, ShieldCheck, Activity, BarChart3, Layers, Boxes } from "lucide-react";
import { Button } from "@/components/ui/button";
import { WordReveal, FadeIn, StaggerIn } from "@/components/motion/reveal";
import { siteConfig } from "@/lib/site";

const services = [
  {
    icon: Layers,
    title: "Custom web apps",
    description:
      "Internal portals, MES dashboards, and operator UIs that match how your factory actually runs.",
    tags: ["Next.js", "React", "Dashboards"],
    accent: "from-brand/30 to-transparent",
  },
  {
    icon: Bot,
    title: "Android apps",
    description:
      "Rugged, glove-friendly Android apps for line-side terminals, scanners, and quality checks.",
    tags: ["Kotlin", "Jetpack", "Offline-first"],
    accent: "from-accent/30 to-transparent",
  },
  {
    icon: Cog,
    title: "Machine integration",
    description:
      "Talk to PLCs, CNC controllers, scales, and barcode printers. Replace paper with real data.",
    tags: ["OPC-UA", "Modbus", "MQTT"],
    accent: "from-emerald-400/30 to-transparent",
  },
  {
    icon: Database,
    title: "Paper → system",
    description:
      "We digitize your forms, logs, and checklists — without forcing your team to learn new software.",
    tags: ["Forms", "Workflow", "Reports"],
    accent: "from-fuchsia-400/25 to-transparent",
  },
  {
    icon: BarChart3,
    title: "OEE & analytics",
    description:
      "Live OEE, downtime reasons, throughput, and quality metrics that managers can actually act on.",
    tags: ["OEE", "BI", "Alerts"],
    accent: "from-sky-400/25 to-transparent",
  },
  {
    icon: ShieldCheck,
    title: "Quality & compliance",
    description:
      "Audit trails, ISO 9001-ready records, batch traceability, and signed PDF reports on demand.",
    tags: ["ISO 9001", "HACCP", "Audit"],
    accent: "from-rose-400/25 to-transparent",
  },
];

const steps = [
  {
    n: "01",
    title: "Discover",
    body: "We walk the floor, watch the work, and map every form, log, and bottleneck to a real process.",
  },
  {
    n: "02",
    title: "Design",
    body: "You get a clickable prototype and a clear data model before a single line of code is written.",
  },
  {
    n: "03",
    title: "Build",
    body: "We ship in two-week increments on a real staging environment, with weekly demos for your team.",
  },
  {
    n: "04",
    title: "Run & evolve",
    body: "We monitor, support, and keep improving the system as your factory grows and changes.",
  },
];

const stats = [
  { v: "120+", l: "Factory workflows digitized" },
  { v: "99.9%", l: "Uptime on managed systems" },
  { v: "< 2 wk", l: "Time to first pilot" },
  { v: "24/7", l: "Support for line-critical apps" },
];

const logos = [
  "Northforge Metals",
  "Atriox Polymers",
  "Veridian Foods",
  "Halberd Textiles",
  "Solent Chemicals",
  "Brightline Auto",
  "Kestrel CNC",
  "Onyx Pharma",
];

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const yBg = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacityHero = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section
      ref={ref}
      className="relative isolate min-h-[100svh] overflow-hidden pt-28 sm:pt-32"
    >
      {/* Background layers */}
      <motion.div style={{ y: yBg }} className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 grid-overlay" />
        <div className="absolute inset-0 bg-radial-glow" />
        <div className="absolute inset-0 bg-noise opacity-40 mix-blend-overlay" />
        <div className="absolute -top-32 left-1/2 h-[40rem] w-[60rem] -translate-x-1/2 rounded-full bg-gradient-to-b from-brand/15 to-transparent blur-3xl" />
      </motion.div>

      {/* Scan line */}
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-px overflow-hidden">
        <div className="h-px w-1/2 bg-gradient-to-r from-transparent via-brand/70 to-transparent animate-scan" />
      </div>

      <motion.div style={{ opacity: opacityHero }} className="container relative">
        <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_1fr]">
          <div>
            <FadeIn>
              <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-3 py-1.5 text-[11px] font-mono uppercase tracking-[0.2em] text-muted-foreground backdrop-blur">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand/60" />
                  <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-brand" />
                </span>
                Available for Q3 / Q4 engagements
              </div>
            </FadeIn>

            <h1 className="mt-6 font-display text-[clamp(2.5rem,6.5vw,5.25rem)] font-semibold leading-[0.95] tracking-tight text-balance">
              <WordReveal text="Software that" />{" "}
              <span className="relative inline-block">
                <WordReveal text="powers" delay={0.15} className="text-gradient" />
                <svg
                  aria-hidden
                  className="absolute -bottom-1 left-0 w-full text-brand"
                  viewBox="0 0 300 8"
                  fill="none"
                >
                  <path
                    d="M2 6 Q 150 -2, 298 6"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    className="opacity-70"
                  />
                </svg>
              </span>
              <br />
              <WordReveal text="the factory floor." delay={0.3} />
            </h1>

            <FadeIn delay={0.4}>
              <p className="mt-7 max-w-xl text-lg leading-relaxed text-muted-foreground text-pretty">
                {siteConfig.description}
              </p>
            </FadeIn>

            <FadeIn delay={0.55}>
              <div className="mt-9 flex flex-wrap items-center gap-3">
                <Button asChild size="lg">
                  <Link href="/contact">
                    Start a project <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="secondary">
                  <Link href="/services">
                    Explore services <MoveRight className="h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </FadeIn>

            <FadeIn delay={0.7}>
              <dl className="mt-12 grid max-w-lg grid-cols-3 divide-x divide-border rounded-xl border border-border bg-card/40 backdrop-blur-sm">
                {stats.slice(0, 3).map((s) => (
                  <div key={s.l} className="px-4 py-4">
                    <dt className="font-display text-2xl font-semibold text-foreground">
                      {s.v}
                    </dt>
                    <dd className="mt-0.5 text-[11px] font-mono uppercase tracking-wider text-muted-foreground">
                      {s.l}
                    </dd>
                  </div>
                ))}
              </dl>
            </FadeIn>
          </div>

          {/* Visual: schematic factory panel */}
          <FadeIn delay={0.2} y={32} className="relative">
            <FactoryPanel />
          </FadeIn>
        </div>

        {/* Logo strip */}
        <div className="mt-20 sm:mt-28">
          <p className="text-center text-[11px] font-mono uppercase tracking-[0.3em] text-muted-foreground">
            Trusted by operators & plant managers at
          </p>
          <div
            className="mt-6 overflow-hidden"
            style={{
              maskImage:
                "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
              WebkitMaskImage:
                "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
            }}
          >
            <div className="flex w-max items-center gap-12 py-3 animate-marquee">
              {[...logos, ...logos].map((logo, i) => (
                <span
                  key={i}
                  className="whitespace-nowrap font-display text-base font-medium text-foreground/40"
                >
                  {logo}
                </span>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

function FactoryPanel() {
  return (
    <div className="relative">
      <div className="absolute -inset-6 -z-10 rounded-3xl bg-gradient-to-br from-brand/20 via-accent/10 to-transparent blur-2xl" />
      <div className="relative overflow-hidden rounded-3xl border border-border bg-gradient-to-b from-card/80 to-card/40 p-1 shadow-card">
        {/* Window chrome */}
        <div className="flex items-center justify-between border-b border-border/60 bg-card/60 px-4 py-2.5">
          <div className="flex items-center gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-rose-400/70" />
            <span className="h-2.5 w-2.5 rounded-full bg-amber-300/70" />
            <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/70" />
          </div>
          <div className="font-mono text-[11px] text-muted-foreground">
            line-03 · cell-b · live
          </div>
          <div className="flex items-center gap-1.5 text-[10px] font-mono text-emerald-400">
            <span className="h-1.5 w-1.5 animate-pulse-glow rounded-full bg-emerald-400" />
            SYNCED
          </div>
        </div>

        <div className="grid grid-cols-2 gap-px bg-border/60">
          {/* OEE card */}
          <div className="col-span-2 bg-card/80 p-5">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground">
                  OEE · last shift
                </p>
                <p className="mt-1 font-display text-3xl font-semibold">
                  84.6<span className="text-brand">%</span>
                </p>
              </div>
              <div className="flex items-center gap-4 text-[10px] font-mono text-muted-foreground">
                <span>A 96.2%</span>
                <span>P 91.4%</span>
                <span>Q 96.0%</span>
              </div>
            </div>
            <div className="mt-4 flex h-2 overflow-hidden rounded-full bg-muted">
              <div className="h-full w-[62%] bg-gradient-to-r from-brand to-amber-300" />
              <div className="h-full w-[20%] bg-gradient-to-r from-accent to-sky-300" />
              <div className="h-full w-[10%] bg-gradient-to-r from-emerald-400 to-emerald-300" />
            </div>
          </div>

          {/* Line status */}
          <div className="bg-card/80 p-5">
            <p className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground">
              Line status
            </p>
            <ul className="mt-3 space-y-2.5">
              {[
                { id: "L-01", name: "Stamping", state: "RUN", color: "bg-emerald-400" },
                { id: "L-02", name: "Welding", state: "RUN", color: "bg-emerald-400" },
                { id: "L-03", name: "Paint", state: "IDLE", color: "bg-amber-300" },
                { id: "L-04", name: "QC", state: "RUN", color: "bg-emerald-400" },
              ].map((m) => (
                <li
                  key={m.id}
                  className="flex items-center justify-between text-[12px]"
                >
                  <span className="flex items-center gap-2">
                    <span className={`h-1.5 w-1.5 rounded-full ${m.color}`} />
                    <span className="font-mono text-muted-foreground">{m.id}</span>
                    <span className="text-foreground/90">{m.name}</span>
                  </span>
                  <span className="font-mono text-foreground/70">{m.state}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Throughput chart */}
          <div className="bg-card/80 p-5">
            <p className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground">
              Throughput · units / hr
            </p>
            <div className="mt-3 flex h-20 items-end gap-1.5">
              {[42, 55, 48, 70, 64, 80, 72, 88, 75, 92, 84, 96].map((h, i) => (
                <div
                  key={i}
                  className="flex-1 rounded-sm bg-gradient-to-t from-brand/30 to-brand"
                  style={{ height: `${h}%` }}
                />
              ))}
            </div>
            <div className="mt-2 flex items-center justify-between text-[10px] font-mono text-muted-foreground">
              <span>08:00</span>
              <span>12:00</span>
              <span>16:00</span>
            </div>
          </div>

          {/* Integration status */}
          <div className="col-span-2 bg-card/80 p-5">
            <p className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground">
              Connected systems
            </p>
            <div className="mt-3 grid grid-cols-2 gap-2 sm:grid-cols-4">
              {[
                { name: "OPC-UA · PLC-7", icon: Cpu, ok: true },
                { name: "MQTT · SCADA", icon: Wifi, ok: true },
                { name: "ERP · SAP", icon: Boxes, ok: true },
                { name: "Scanner · Zebra", icon: Activity, ok: true },
              ].map((d) => (
                <div
                  key={d.name}
                  className="flex items-center gap-2 rounded-md border border-border bg-background/40 px-2.5 py-2"
                >
                  <d.icon className="h-3.5 w-3.5 text-brand" />
                  <span className="text-[11px]">{d.name}</span>
                  <span className="ml-auto h-1.5 w-1.5 rounded-full bg-emerald-400" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Floating chip */}
      <div className="pointer-events-none absolute -right-4 -top-4 hidden rotate-3 sm:block">
        <div className="rounded-lg border border-border bg-card/80 px-3 py-2 text-[11px] font-mono shadow-card backdrop-blur">
          <span className="text-muted-foreground">latency</span>{" "}
          <span className="text-foreground">12 ms</span>
        </div>
      </div>
    </div>
  );
}

export function Services() {
  return (
    <section id="services" className="relative py-24 sm:py-32">
      <div className="container">
        <div className="grid items-end gap-8 sm:grid-cols-[1fr_auto]">
          <div>
            <FadeIn>
              <p className="inline-flex items-center gap-2 text-[11px] font-mono uppercase tracking-[0.25em] text-brand">
                <span className="h-px w-6 bg-brand" /> What we build
              </p>
            </FadeIn>
            <FadeIn delay={0.05}>
              <h2 className="mt-4 max-w-2xl font-display text-4xl font-semibold tracking-tight sm:text-5xl text-balance">
                Software that fits your factory — not the other way around.
              </h2>
            </FadeIn>
          </div>
          <FadeIn delay={0.1}>
            <Button asChild variant="outline">
              <Link href="/services">
                All services <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </FadeIn>
        </div>

        <StaggerIn className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3" gap={0.06}>
          {services.map((s) => (
            <ServiceCard key={s.title} {...s} />
          ))}
        </StaggerIn>
      </div>
    </section>
  );
}

function ServiceCard({
  icon: Icon,
  title,
  description,
  tags,
  accent,
}: {
  icon: typeof Cpu;
  title: string;
  description: string;
  tags: string[];
  accent: string;
}) {
  return (
    <div className="group relative overflow-hidden rounded-2xl border border-border bg-card/50 p-6 transition-all duration-500 hover:-translate-y-1 hover:border-foreground/20">
      <div
        className={`pointer-events-none absolute -right-12 -top-12 h-40 w-40 rounded-full bg-gradient-to-br ${accent} opacity-60 blur-2xl transition-opacity duration-500 group-hover:opacity-100`}
      />
      <div className="relative">
        <div className="grid h-11 w-11 place-items-center rounded-lg border border-border bg-background/40">
          <Icon className="h-5 w-5 text-brand" />
        </div>
        <h3 className="mt-5 font-display text-lg font-semibold tracking-tight">
          {title}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
          {description}
        </p>
        <div className="mt-5 flex flex-wrap gap-1.5">
          {tags.map((t) => (
            <span
              key={t}
              className="rounded-md border border-border bg-foreground/[0.03] px-2 py-0.5 text-[10px] font-mono text-muted-foreground"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
      <div className="absolute bottom-5 right-5 text-foreground/30 transition-all duration-500 group-hover:text-brand group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
        <ArrowRight className="h-4 w-4" />
      </div>
    </div>
  );
}

export function Process() {
  return (
    <section className="relative border-y border-border/60 bg-card/30 py-24 sm:py-32">
      <div className="container">
        <FadeIn>
          <p className="inline-flex items-center gap-2 text-[11px] font-mono uppercase tracking-[0.25em] text-brand">
            <span className="h-px w-6 bg-brand" /> How we work
          </p>
        </FadeIn>
        <FadeIn delay={0.05}>
          <h2 className="mt-4 max-w-2xl font-display text-4xl font-semibold tracking-tight sm:text-5xl text-balance">
            A proven path from clipboard to connected line.
          </h2>
        </FadeIn>

        <div className="relative mt-16">
          {/* Vertical line */}
          <div className="absolute left-[1.625rem] top-0 bottom-0 hidden w-px bg-gradient-to-b from-brand/0 via-border to-brand/0 sm:block" />
          <ol className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((s, i) => (
              <FadeIn key={s.n} delay={i * 0.08}>
                <li className="group relative rounded-2xl border border-border bg-card/50 p-6 transition-all duration-500 hover:border-foreground/20">
                  <div className="flex items-center gap-3">
                    <span className="grid h-9 w-9 place-items-center rounded-full border border-border bg-background font-mono text-xs text-brand">
                      {s.n}
                    </span>
                    <h3 className="font-display text-lg font-semibold">{s.title}</h3>
                  </div>
                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                    {s.body}
                  </p>
                </li>
              </FadeIn>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

export function Cta() {
  return (
    <section className="relative py-24 sm:py-32">
      <div className="container">
        <FadeIn>
          <div className="relative overflow-hidden rounded-3xl border border-border bg-gradient-to-br from-card/80 via-card/40 to-card/80 p-8 sm:p-14">
            <div className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full bg-brand/20 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-24 -left-24 h-80 w-80 rounded-full bg-accent/15 blur-3xl" />
            <div className="relative grid items-center gap-10 lg:grid-cols-[1.4fr_1fr]">
              <div>
                <p className="inline-flex items-center gap-2 text-[11px] font-mono uppercase tracking-[0.25em] text-brand">
                  <span className="h-px w-6 bg-brand" /> Ready when you are
                </p>
                <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl text-balance">
                  Stop running your factory on paper. Start running it on{" "}
                  <span className="text-gradient">software that fits.</span>
                </h2>
                <p className="mt-5 max-w-xl text-base text-muted-foreground leading-relaxed">
                  Tell us about your floor, your lines, and the bottleneck that
                  keeps you up at night. We'll come back with a realistic plan —
                  not a sales pitch.
                </p>
              </div>
              <div className="flex flex-col gap-3 lg:items-end">
                <Button asChild size="lg">
                  <Link href="/contact">
                    Book a 30-min discovery call <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="secondary">
                  <Link href="/services">See what we build</Link>
                </Button>
                <p className="mt-1 text-[11px] font-mono text-muted-foreground">
                  or email <span className="text-foreground">{siteConfig.email}</span>
                </p>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
