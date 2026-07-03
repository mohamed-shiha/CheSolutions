"use client";

import Link from "next/link";
import { SOLUTIONS, SOLUTION_PLAYBOOKS, SOLUTION_ICONS } from "@/data/solutions";
import { Button } from "@/components/ui/button";
import { FadeIn, StaggerIn } from "@/components/motion/reveal";

export function SolutionsSections() {
  return (
    <>
      <section className="container space-y-20 py-16">
        <StaggerIn className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3" gap={0.06}>
          {SOLUTIONS.map((s) => {
            const Icon = SOLUTION_ICONS[s.iconName];
            return (
              <a
                key={s.id}
                href={`#${s.id}`}
                className="group relative overflow-hidden rounded-2xl border border-border bg-card/50 p-6 transition-all duration-500 hover:-translate-y-1 hover:border-foreground/20"
              >
                <div className="pointer-events-none absolute -right-12 -top-12 h-40 w-40 rounded-full bg-gradient-to-br from-brand/20 to-transparent opacity-50 blur-2xl transition-opacity group-hover:opacity-100" />
                <div className="relative">
                  <div className="flex items-center justify-between">
                    <span className="grid h-11 w-11 place-items-center rounded-lg border border-border bg-background/40">
                      <Icon className="h-5 w-5 text-brand" />
                    </span>
                    <SOLUTION_ICONS.ArrowRight className="h-4 w-4 text-foreground/30 transition-all group-hover:translate-x-0.5 group-hover:text-brand" />
                  </div>
                  <h3 className="mt-5 font-display text-lg font-semibold">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {s.summary}
                  </p>
                </div>
              </a>
            );
          })}
        </StaggerIn>

        {SOLUTIONS.map((s, i) => {
          const Icon = SOLUTION_ICONS[s.iconName];
          const flip = i % 2 === 1;
          return (
            <section key={s.id} id={s.id} className="scroll-mt-24">
              <div
                className={`grid items-center gap-10 lg:grid-cols-[1.1fr_1fr] ${
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
                        Industry · {String(i + 1).padStart(2, "0")}
                      </span>
                    </div>
                    <h2 className="mt-6 font-display text-3xl font-semibold tracking-tight sm:text-4xl text-balance">
                      {s.title}
                    </h2>
                    <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                      {s.summary}
                    </p>
                    <ul className="mt-6 space-y-2.5">
                      {s.features.map((f) => (
                        <li
                          key={f}
                          className="flex items-start gap-2 text-sm text-foreground/85"
                        >
                          <SOLUTION_ICONS.CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand" />
                          {f}
                        </li>
                      ))}
                    </ul>
                  </div>
                </FadeIn>
                <FadeIn delay={0.1}>
                  <SolutionVisual id={s.id} />
                </FadeIn>
              </div>
            </section>
          );
        })}
      </section>

      <section className="border-y border-border/60 bg-card/30 py-24 sm:py-32">
        <div className="container">
          <FadeIn>
            <p className="inline-flex items-center gap-2 text-[11px] font-mono uppercase tracking-[0.25em] text-brand">
              <span className="h-px w-6 bg-brand" /> Quick wins
            </p>
          </FadeIn>
          <FadeIn delay={0.05}>
            <h2 className="mt-4 max-w-2xl font-display text-4xl font-semibold tracking-tight sm:text-5xl text-balance">
              Three playbooks that pay for themselves in a quarter.
            </h2>
          </FadeIn>
          <StaggerIn className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3" gap={0.06}>
            {SOLUTION_PLAYBOOKS.map((p) => {
              const Icon = SOLUTION_ICONS[p.iconName];
              return (
                <div
                  key={p.title}
                  className="rounded-2xl border border-border bg-card/50 p-6 transition-colors hover:border-foreground/20"
                >
                  <div className="grid h-11 w-11 place-items-center rounded-lg border border-border bg-background/40">
                    <Icon className="h-5 w-5 text-brand" />
                  </div>
                  <h3 className="mt-5 font-display text-lg font-semibold">{p.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.body}</p>
                </div>
              );
            })}
          </StaggerIn>
        </div>
      </section>

      <section className="py-24 sm:py-32">
        <div className="container">
          <FadeIn>
            <div className="rounded-3xl border border-border bg-card/40 p-8 sm:p-12 text-center">
              <h2 className="mx-auto max-w-2xl font-display text-3xl font-semibold tracking-tight sm:text-4xl text-balance">
                See it in your environment.
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
                We run a paid 2-week pilot on your data, on your machines, in your
                environment. If it does not prove value, you keep the code.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-3">
                <Button asChild size="lg">
                  <Link href="/contact">
                    Start a pilot <SOLUTION_ICONS.ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="secondary">
                  <Link href="/services">See how we build</Link>
                </Button>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}

function SolutionVisual({ id }: { id: string }) {
  if (id === "manufacturing") {
    return (
      <div className="rounded-2xl border border-border bg-card/50 p-5">
        <p className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground">
          Order · WO-2026-0184
        </p>
        <div className="mt-3 grid grid-cols-2 gap-3 text-xs">
          {[
            { l: "Product", v: "Widget A-19" },
            { l: "Qty", v: "1,200" },
            { l: "Line", v: "L-03" },
            { l: "Due", v: "Today 16:00" },
          ].map((c) => (
            <div key={c.l} className="rounded-md border border-border bg-background/40 p-2">
              <p className="text-[9px] uppercase tracking-widest text-muted-foreground">{c.l}</p>
              <p className="font-display text-sm font-semibold">{c.v}</p>
            </div>
          ))}
        </div>
        <div className="mt-3 rounded-md border border-border bg-background/40 p-3">
          <div className="flex items-center justify-between text-[11px]">
            <span>Progress</span>
            <span className="font-mono">682 / 1,200</span>
          </div>
          <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-muted">
            <div className="h-full w-[57%] bg-gradient-to-r from-brand to-amber-300" />
          </div>
        </div>
      </div>
    );
  }
  if (id === "quality") {
    return (
      <div className="rounded-2xl border border-border bg-card/50 p-5">
        <p className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground">
          NC-2026-041
        </p>
        <p className="mt-1 font-display text-lg font-semibold">Cosmetic · blemish</p>
        <div className="mt-3 space-y-2 text-xs">
          {[
            ["Detected", "Line 03 · Cell B"],
            ["Operator", "M. Reyes"],
            ["Severity", "Minor"],
            ["Disposition", "Rework"],
            ["CAPA", "Open · due 03/08"],
          ].map(([k, v]) => (
            <div key={k} className="flex justify-between border-b border-border/60 pb-1.5 last:border-0">
              <span className="text-muted-foreground">{k}</span>
              <span className="font-mono">{v}</span>
            </div>
          ))}
        </div>
      </div>
    );
  }
  if (id === "maintenance") {
    return (
      <div className="rounded-2xl border border-border bg-card/50 p-5">
        <p className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground">
          PM schedule · press-2
        </p>
        <div className="mt-3 space-y-2 text-xs">
          {[
            { t: "Lubrication", w: 100, s: "Done" },
            { t: "Belt inspection", w: 60, s: "In progress" },
            { t: "Calibration", w: 0, s: "Scheduled" },
            { t: "Filter change", w: 0, s: "Scheduled" },
          ].map((m) => (
            <div key={m.t} className="rounded-md border border-border bg-background/40 p-2">
              <div className="flex items-center justify-between">
                <span>{m.t}</span>
                <span className="font-mono text-muted-foreground">{m.s}</span>
              </div>
              <div className="mt-1.5 h-1 overflow-hidden rounded-full bg-muted">
                <div className="h-full bg-gradient-to-r from-brand to-amber-300" style={{ width: `${m.w}%` }} />
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
  if (id === "logistics") {
    return (
      <div className="rounded-2xl border border-border bg-card/50 p-5">
        <div className="grid grid-cols-3 gap-2 text-center text-xs">
          {[
            { l: "Picked", v: "184" },
            { l: "Packed", v: "172" },
            { l: "Loaded", v: "120" },
          ].map((c) => (
            <div key={c.l} className="rounded-md border border-border bg-background/40 p-2">
              <p className="font-display text-lg font-semibold text-brand">{c.v}</p>
              <p className="text-[9px] uppercase tracking-widest text-muted-foreground">{c.l}</p>
            </div>
          ))}
        </div>
        <div className="mt-3 rounded-md border border-border bg-background/40 p-3 text-xs">
          <p className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground">Dock 04</p>
          <p className="mt-1 font-display text-sm font-semibold">Trailer TR-2210 · 24 pallets</p>
          <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-muted">
            <div className="h-full w-[70%] bg-gradient-to-r from-accent to-sky-300" />
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className="rounded-2xl border border-border bg-card/50 p-5">
      <p className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground">
        Cell B · materials
      </p>
      <div className="mt-3 space-y-2 text-xs">
        {[
          { l: "Steel coil · 1.2mm", s: "OK", v: "OK" },
          { l: "Lubricant · 20L", s: "LOW", v: "Low" },
          { l: "Bolts · M8", s: "OK", v: "OK" },
          { l: "Paint · white", s: "CRIT", v: "Critical" },
        ].map((m) => (
          <div
            key={m.l}
            className="flex items-center justify-between rounded-md border border-border bg-background/40 px-2 py-1.5"
          >
            <span>{m.l}</span>
            <span
              className={`font-mono ${
                m.s === "OK"
                  ? "text-emerald-300"
                  : m.s === "LOW"
                  ? "text-amber-300"
                  : "text-rose-300"
              }`}
            >
              {m.v}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
