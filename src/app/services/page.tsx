import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ArrowLeft, Layers, Bot, Cog, Database, BarChart3, ShieldCheck, Code2, Wrench, Sparkles, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FadeIn, StaggerIn } from "@/components/motion/reveal";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Web apps, Android apps, machine integration, and custom software built for factories. End-to-end delivery from discovery to support.",
};

const services = [
  {
    id: "web",
    icon: Layers,
    title: "Custom web apps",
    short: "Internal portals, MES dashboards, and operator UIs.",
    long: "Modern web apps built around how your team actually works — not around a vendor's idea of best practice. We design and ship production dashboards, work-order portals, shift handovers, and analytics tools that your operators will actually open every day.",
    bullets: [
      "Production & OEE dashboards",
      "Work-order and shift management",
      "Role-based access and audit trails",
      "SSO, SAML, and on-prem deployment",
    ],
    stack: ["Next.js", "React", "TypeScript", "PostgreSQL", "tRPC"],
  },
  {
    id: "android",
    icon: Bot,
    title: "Android apps",
    short: "Rugged, glove-friendly apps for the line and the warehouse.",
    long: "Native and cross-platform Android apps for line-side terminals, rugged handhelds, and tablets. Designed to work in bad light, with gloves on, and with intermittent connectivity. We harden them for industrial use from day one.",
    bullets: [
      "Line-side quality checks",
      "Picking, packing, and shipping",
      "Offline-first data sync",
      "Barcode / RFID / NFC integration",
    ],
    stack: ["Kotlin", "Jetpack Compose", "Flutter", "SQLite", "WorkManager"],
  },
  {
    id: "machines",
    icon: Cog,
    title: "Machine integration",
    short: "Talk to PLCs, CNCs, scales, and printers.",
    long: "We connect your software to the equipment you already run. Whether it's a PLC on OPC-UA, a CNC over Modbus, a weigh scale on serial, or a label printer — we turn machine data into reliable software events, with proper buffering and replay when the network drops.",
    bullets: [
      "OPC-UA, Modbus, MQTT, Ethernet/IP",
      "Custom protocols over TCP / serial",
      "Edge gateways (Linux & industrial PCs)",
      "Buffered, replay-safe ingestion",
    ],
    stack: ["Node.js", "Go", "Mosquitto", "Kepware", "Ignition"],
  },
  {
    id: "custom",
    icon: Code2,
    title: "Custom software",
    short: "If you can describe it, we can build it.",
    long: "When off-the-shelf tools hit a wall, we design the tool that fits. Internal tools, workflow engines, configurators, custom ERPs, and the weird one-off systems that only make sense inside your four walls. You own the code, the data, and the roadmap.",
    bullets: [
      "Internal tools & admin panels",
      "Workflow engines & approvals",
      "Custom ERP / MES modules",
      "Migration from legacy systems",
    ],
    stack: ["Next.js", "Node.js", "Go", "PostgreSQL", "Redis"],
  },
  {
    id: "paper",
    icon: Database,
    title: "Paper → system",
    short: "Digitize the forms your team still fills out by hand.",
    long: "We don't just throw a tablet at a paper form. We redesign the workflow, remove steps that exist only because of paper, and make sure the data flows to where it's actually needed — ERP, QMS, BI, regulatory.",
    bullets: [
      "Logbooks and checklists",
      "Non-conformance and CAPA",
      "Operator rounds and inspections",
      "Digital signatures and PDF reports",
    ],
    stack: ["React", "Kotlin", "PostgreSQL", "S3", "PDF"],
  },
  {
    id: "analytics",
    icon: BarChart3,
    title: "OEE & analytics",
    short: "Live metrics your managers can actually act on.",
    long: "We build live OEE, downtime reason tracking, throughput, and quality dashboards. Alerting is opinionated — no one needs a Slack ping every 30 seconds — and reports are configurable for shift, line, product, and customer.",
    bullets: [
      "Live OEE, A/P/Q breakdown",
      "Downtime reason Pareto",
      "Configurable reports and exports",
      "Smart alerting with thresholds",
    ],
    stack: ["ClickHouse", "TimescaleDB", "Apache Superset", "Grafana"],
  },
];

const promises = [
  {
    icon: Wrench,
    title: "Built to be maintained",
    body: "Clean code, type-safe, tested, documented. Your team can extend it without calling us for every change.",
  },
  {
    icon: ShieldCheck,
    title: "Production-grade by default",
    body: "Observability, logging, error tracking, and proper auth from day one — not a v2 promise.",
  },
  {
    icon: Sparkles,
    title: "Designed for operators",
    body: "We test on the floor with the people who'll use it. If it's confusing at 6am in a noisy plant, it's wrong.",
  },
];

export default function ServicesPage() {
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
              <span className="h-px w-6 bg-brand" /> Services
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="mt-5 max-w-4xl font-display text-5xl font-semibold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl text-balance">
              Whatever you need built for the factory,{" "}
              <span className="text-gradient">we build it.</span>
            </h1>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="mt-7 max-w-2xl text-lg leading-relaxed text-muted-foreground text-pretty">
              Web apps, Android apps, integrations with the machines you already run —
              and the bespoke systems that exist nowhere else. Six core capabilities,
              one team, end to end.
            </p>
          </FadeIn>
        </div>
      </section>

      <div className="container space-y-24 py-24 sm:py-32">
        {services.map((s, i) => {
          const Icon = s.icon;
          const flip = i % 2 === 1;
          return (
            <section key={s.id} id={s.id} className="scroll-mt-24">
              <div
                className={`grid items-center gap-10 lg:grid-cols-2 ${
                  flip ? "lg:[&>*:first-child]:order-2" : ""
                }`}
              >
                <FadeIn>
                  <div>
                    <div className="flex items-center gap-3">
                      <span className="grid h-12 w-12 place-items-center rounded-xl border border-border bg-card/60">
                        <Icon className="h-5 w-5 text-brand" />
                      </span>
                      <span className="font-mono text-[11px] uppercase tracking-[0.25em] text-muted-foreground">
                        {String(i + 1).padStart(2, "0")} / {String(services.length).padStart(2, "0")}
                      </span>
                    </div>
                    <h2 className="mt-6 font-display text-3xl font-semibold tracking-tight sm:text-4xl text-balance">
                      {s.title}
                    </h2>
                    <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                      {s.long}
                    </p>
                    <ul className="mt-6 grid gap-2.5 sm:grid-cols-2">
                      {s.bullets.map((b) => (
                        <li
                          key={b}
                          className="flex items-start gap-2 text-sm text-foreground/85"
                        >
                          <Check className="mt-0.5 h-4 w-4 shrink-0 text-brand" />
                          {b}
                        </li>
                      ))}
                    </ul>
                    <div className="mt-6 flex flex-wrap gap-1.5">
                      {s.stack.map((t) => (
                        <span
                          key={t}
                          className="rounded-md border border-border bg-foreground/[0.03] px-2 py-0.5 text-[11px] font-mono text-muted-foreground"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </FadeIn>

                <FadeIn delay={0.1}>
                  <ServiceVisual id={s.id} title={s.title} />
                </FadeIn>
              </div>
            </section>
          );
        })}
      </div>

      <section className="border-y border-border/60 bg-card/30 py-24 sm:py-32">
        <div className="container">
          <FadeIn>
            <p className="inline-flex items-center gap-2 text-[11px] font-mono uppercase tracking-[0.25em] text-brand">
              <span className="h-px w-6 bg-brand" /> Our promises
            </p>
          </FadeIn>
          <FadeIn delay={0.05}>
            <h2 className="mt-4 max-w-2xl font-display text-4xl font-semibold tracking-tight sm:text-5xl text-balance">
              Software that earns its place on the shop floor.
            </h2>
          </FadeIn>
          <StaggerIn className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3" gap={0.06}>
            {promises.map((p) => (
              <div
                key={p.title}
                className="rounded-2xl border border-border bg-card/50 p-6 transition-colors hover:border-foreground/20"
              >
                <div className="grid h-11 w-11 place-items-center rounded-lg border border-border bg-background/40">
                  <p.icon className="h-5 w-5 text-brand" />
                </div>
                <h3 className="mt-5 font-display text-lg font-semibold">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.body}</p>
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
                Have a project in mind?
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
                Tell us what you need and we'll come back with a plan, a price range, and a
                realistic timeline — within two business days.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-3">
                <Button asChild size="lg">
                  <Link href="/contact">
                    Start a project <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="secondary">
                  <Link href="/solutions">See industry solutions</Link>
                </Button>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}

function ServiceVisual({ id, title }: { id: string; title: string }) {
  if (id === "web") {
    return (
      <div className="relative overflow-hidden rounded-2xl border border-border bg-card/50 p-5">
        <div className="grid gap-4 sm:grid-cols-[1fr_1.2fr]">
          <div className="rounded-lg border border-border bg-background/40 p-3">
            <p className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground">Shift A</p>
            <p className="mt-1 font-display text-2xl font-semibold">L-03 · Paint</p>
            <div className="mt-3 space-y-1.5 text-xs">
              {["Run", "Run", "Idle", "Run", "Run"].map((s, i) => (
                <div key={i} className="flex items-center gap-2">
                  <span className={`h-1.5 w-1.5 rounded-full ${s === "Run" ? "bg-emerald-400" : "bg-amber-300"}`} />
                  <span className="font-mono text-muted-foreground">08:{String(i*12+4).padStart(2,"0")}</span>
                  <span className="text-foreground/85">{s}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-lg border border-border bg-background/40 p-3">
            <p className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground">OEE</p>
            <p className="mt-1 font-display text-2xl font-semibold">86.4%</p>
            <div className="mt-3 flex h-16 items-end gap-1">
              {[50,65,48,72,80,68,90,82,95,78,88,92].map((h,i) => (
                <div key={i} className="flex-1 rounded-sm bg-gradient-to-t from-brand/30 to-brand" style={{height:`${h}%`}} />
              ))}
            </div>
          </div>
        </div>
        <p className="mt-3 text-[10px] font-mono uppercase tracking-widest text-muted-foreground">{title} preview</p>
      </div>
    );
  }
  if (id === "android") {
    return (
      <div className="relative grid place-items-center">
        <div className="relative h-[420px] w-[220px] rounded-[2.25rem] border-[10px] border-foreground/10 bg-background p-3 shadow-2xl">
          <div className="absolute left-1/2 top-1.5 z-10 h-4 w-20 -translate-x-1/2 rounded-full bg-foreground/10" />
          <div className="h-full w-full overflow-hidden rounded-[1.4rem] bg-card">
            <div className="flex items-center justify-between bg-card/80 px-4 py-2 text-[10px] text-muted-foreground">
              <span>09:14</span>
              <span>● ● ●</span>
            </div>
            <div className="px-4">
              <p className="text-[10px] font-mono uppercase tracking-widest text-brand">QC Check</p>
              <p className="mt-1 font-display text-lg font-semibold">Widget A-19</p>
              <div className="mt-3 space-y-2 text-xs">
                {["Visual", "Diameter", "Weight", "Hardness"].map((c) => (
                  <label key={c} className="flex items-center gap-2 rounded-md border border-border bg-background/40 px-2 py-1.5">
                    <span className="h-3.5 w-3.5 rounded border border-brand bg-brand/30" />
                    {c}
                  </label>
                ))}
              </div>
              <div className="mt-3 flex gap-2">
                <button className="flex-1 rounded-md bg-rose-400/20 py-1.5 text-[11px] text-rose-300">Reject</button>
                <button className="flex-1 rounded-md bg-emerald-400/20 py-1.5 text-[11px] text-emerald-300">Approve</button>
              </div>
              <div className="mt-3 rounded-md border border-border bg-background/40 p-2 text-[10px] font-mono text-muted-foreground">
                scanner: ok · offline
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  if (id === "machines") {
    return (
      <div className="relative overflow-hidden rounded-2xl border border-border bg-card/50 p-5 font-mono text-xs">
        <p className="text-[10px] uppercase tracking-widest text-muted-foreground">machine stream</p>
        <pre className="mt-3 space-y-1 leading-relaxed text-foreground/80">
{`opc.tcp://plc-7:4840
  state        : OPERATING
  cycle_time   : 12.4s
  last_event   : cycle_complete
  units_today  : 1284

mqtt://scada/line-03
  status       : running
  speed_pct    : 92
  fault_code   : 0

modbus://scale-2
  weight_kg    : 2.418
  stable       : true
  ts           : 09:14:22Z`}
        </pre>
      </div>
    );
  }
  if (id === "paper") {
    return (
      <div className="grid gap-3 sm:grid-cols-2">
        {[
          { t: "Daily start-up check", f: "6 fields · 1 signature" },
          { t: "Downtime log", f: "Reason picker · photo" },
          { t: "Quality inspection", f: "AQL sampling · photos" },
          { t: "Maintenance request", f: "Auto-routes to supervisor" },
        ].map((c) => (
          <div key={c.t} className="rounded-lg border border-border bg-card/50 p-3">
            <p className="font-display text-sm font-semibold">{c.t}</p>
            <p className="mt-1 text-[11px] text-muted-foreground">{c.f}</p>
            <div className="mt-3 h-1.5 w-full overflow-hidden rounded-full bg-muted">
              <div className="h-full w-2/3 bg-gradient-to-r from-brand to-amber-300" />
            </div>
          </div>
        ))}
      </div>
    );
  }
  if (id === "analytics") {
    return (
      <div className="overflow-hidden rounded-2xl border border-border bg-card/50 p-5">
        <div className="grid grid-cols-3 gap-3 text-center">
          {[
            { v: "86%", l: "Availability" },
            { v: "92%", l: "Performance" },
            { v: "99%", l: "Quality" },
          ].map((s) => (
            <div key={s.l} className="rounded-lg border border-border bg-background/40 p-3">
              <p className="font-display text-2xl font-semibold text-brand">{s.v}</p>
              <p className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground">{s.l}</p>
            </div>
          ))}
        </div>
        <div className="mt-4 rounded-lg border border-border bg-background/40 p-3">
          <p className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground">Downtime reasons · 7d</p>
          <div className="mt-2 space-y-1.5">
            {[
              { l: "Material change", w: 78 },
              { l: "Sensor fault", w: 46 },
              { l: "Operator break", w: 22 },
              { l: "Quality hold", w: 12 },
            ].map((r) => (
              <div key={r.l} className="flex items-center gap-2 text-[11px]">
                <span className="w-24 text-muted-foreground">{r.l}</span>
                <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-muted">
                  <div className="h-full bg-gradient-to-r from-brand to-amber-300" style={{ width: `${r.w}%` }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className="overflow-hidden rounded-2xl border border-border bg-card/50 p-5">
      <div className="rounded-lg border border-border bg-background/40 p-3 font-mono text-[11px] leading-relaxed">
        <p className="text-muted-foreground">// workflow.config.ts</p>
        <p><span className="text-accent">export const</span> <span className="text-foreground">approval</span> = &#123;</p>
        <p className="pl-4">levels: [<span className="text-brand">"supervisor"</span>, <span className="text-brand">"qa-lead"</span>, <span className="text-brand">"plant-mgr"</span>],</p>
        <p className="pl-4">slaHours: <span className="text-emerald-300">24</span>,</p>
        <p className="pl-4">onReject: <span className="text-amber-300">"return-to-origin"</span>,</p>
        <p>&#125;</p>
      </div>
      <p className="mt-3 text-[10px] font-mono uppercase tracking-widest text-muted-foreground">{title} preview</p>
    </div>
  );
}
