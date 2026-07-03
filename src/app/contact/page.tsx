import type { Metadata } from "next";
import Link from "next/link";
import { Mail, Phone, MapPin, Clock, ArrowLeft, Plus, Minus } from "lucide-react";
import { FadeIn, StaggerIn } from "@/components/motion/reveal";
import { ContactForm } from "@/components/forms/contact-form";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Tell us about your factory, your line, and the bottleneck. We'll come back with a plan within two business days.",
};

const faqs = [
  {
    q: "What size factories do you work with?",
    a: "From 30-person job shops to multi-site enterprises. Most of our projects are at plants with 100–1,500 operators.",
  },
  {
    q: "Do you work on-site?",
    a: "Yes. Discovery and pilot phases often include days on the floor. After that, the bulk of the work is remote with scheduled on-site visits.",
  },
  {
    q: "Can you integrate with our existing PLCs / SCADA / ERP?",
    a: "Almost always yes. We've worked with Siemens, Allen-Bradley, Mitsubishi, Ignition, Kepware, SAP, and a long tail of bespoke internal systems.",
  },
  {
    q: "How long does a typical project take?",
    a: "A focused pilot lands in 2–4 weeks. A full production system is usually 8–16 weeks. Multi-site rollouts run longer.",
  },
  {
    q: "Do we own the code?",
    a: "Always. You own the source, the data, and the documentation. No lock-in, no proprietary runtimes you can't replace.",
  },
  {
    q: "What does it cost?",
    a: "Pilots start around $15k. Typical production systems range from $60k to $300k+. We'll always share a price range before we start.",
  },
];

export default function ContactPage() {
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
              <span className="h-px w-6 bg-brand" /> Contact
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="mt-5 max-w-4xl font-display text-5xl font-semibold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl text-balance">
              Tell us about your{" "}
              <span className="text-gradient">factory floor.</span>
            </h1>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="mt-7 max-w-2xl text-lg leading-relaxed text-muted-foreground text-pretty">
              The more concrete you can be, the more useful our reply will be. We
              respond to every serious enquiry within two business days.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="container">
          <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr]">
            <ContactForm />

            <FadeIn delay={0.1}>
              <div className="space-y-4">
                <InfoCard
                  icon={Mail}
                  label="Email"
                  value={siteConfig.email}
                  href={`mailto:${siteConfig.email}`}
                />
                <InfoCard
                  icon={Phone}
                  label="Phone"
                  value={siteConfig.phone}
                  href={`tel:${siteConfig.phone.replace(/[^+\d]/g, "")}`}
                />
                <InfoCard icon={MapPin} label="Based" value={siteConfig.address} />
                <InfoCard
                  icon={Clock}
                  label="Response time"
                  value="Within 2 business days"
                />
                <div className="rounded-2xl border border-border bg-card/50 p-5 text-sm text-muted-foreground">
                  <p className="font-mono text-[10px] uppercase tracking-widest text-brand">
                    // Currently booking
                  </p>
                  <p className="mt-2 text-foreground">
                    New pilots starting <span className="text-brand">August 2026</span>.
                  </p>
                  <p className="mt-1">
                    If your line is down or your audit is imminent, mention it in the
                    message and we'll prioritize.
                  </p>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      <section className="border-y border-border/60 bg-card/30 py-24 sm:py-32">
        <div className="container">
          <FadeIn>
            <p className="inline-flex items-center gap-2 text-[11px] font-mono uppercase tracking-[0.25em] text-brand">
              <span className="h-px w-6 bg-brand" /> FAQ
            </p>
          </FadeIn>
          <FadeIn delay={0.05}>
            <h2 className="mt-4 max-w-2xl font-display text-4xl font-semibold tracking-tight sm:text-5xl text-balance">
              Things people ask us before signing anything.
            </h2>
          </FadeIn>
          <StaggerIn className="mt-12 grid gap-3" gap={0.05}>
            {faqs.map((f) => (
              <FaqItem key={f.q} q={f.q} a={f.a} />
            ))}
          </StaggerIn>
        </div>
      </section>
    </>
  );
}

function InfoCard({
  icon: Icon,
  label,
  value,
  href,
}: {
  icon: typeof Mail;
  label: string;
  value: string;
  href?: string;
}) {
  const Inner = (
    <div className="flex items-start gap-3 rounded-2xl border border-border bg-card/50 p-4 transition-colors hover:border-foreground/20">
      <span className="grid h-10 w-10 place-items-center rounded-lg border border-border bg-background/40">
        <Icon className="h-4 w-4 text-brand" />
      </span>
      <div>
        <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
          {label}
        </p>
        <p className="mt-0.5 text-sm text-foreground">{value}</p>
      </div>
    </div>
  );
  return href ? (
    <a href={href} className="block">
      {Inner}
    </a>
  ) : (
    Inner
  );
}

function FaqItem({ q, a }: { q: string; a: string }) {
  return (
    <details className="group rounded-2xl border border-border bg-card/50 p-5 transition-colors hover:border-foreground/20">
      <summary className="flex cursor-pointer list-none items-center justify-between gap-4">
        <span className="font-display text-base font-semibold sm:text-lg">{q}</span>
        <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full border border-border bg-background/40 transition-all group-open:rotate-180">
          <Plus className="h-3.5 w-3.5 group-open:hidden" />
          <Minus className="hidden h-3.5 w-3.5 group-open:block" />
        </span>
      </summary>
      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{a}</p>
    </details>
  );
}
