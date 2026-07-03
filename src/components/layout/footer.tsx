import Link from "next/link";
import { Cpu, Github, Linkedin, Twitter, ArrowUpRight } from "lucide-react";
import { siteConfig } from "@/lib/site";

const groups: { title: string; links: { label: string; href: string }[] }[] = [
  {
    title: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Services", href: "/services" },
      { label: "Solutions", href: "/solutions" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Capabilities",
    links: [
      { label: "Web apps", href: "/services#web" },
      { label: "Android apps", href: "/services#android" },
      { label: "Machine integration", href: "/services#machines" },
      { label: "Custom software", href: "/services#custom" },
    ],
  },
  {
    title: "Industries",
    links: [
      { label: "Manufacturing", href: "/solutions#manufacturing" },
      { label: "Quality & compliance", href: "/solutions#quality" },
      { label: "Maintenance", href: "/solutions#maintenance" },
      { label: "Logistics", href: "/solutions#logistics" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="relative mt-24 border-t border-border/60">
      <div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-brand/50 to-transparent" />
      <div className="container relative grid gap-12 py-16 lg:grid-cols-[1.4fr_repeat(3,1fr)]">
        <div>
          <Link href="/" className="inline-flex items-center gap-2.5">
            <span className="grid h-9 w-9 place-items-center rounded-lg border border-border bg-card">
              <Cpu className="h-4 w-4 text-brand" />
            </span>
            <span className="font-display text-base font-semibold">
              Che<span className="text-brand">Tech</span>Solutions
            </span>
          </Link>
          <p className="mt-5 max-w-sm text-sm text-muted-foreground leading-relaxed">
            We build software for factories — web apps, Android apps, and integrations
            with the machines you already run. Replace paper, kill manual steps, and
            keep the line moving.
          </p>
          <div className="mt-6 flex items-center gap-2">
            <Link
              href={siteConfig.social.linkedin}
              aria-label="LinkedIn"
              className="grid h-9 w-9 place-items-center rounded-md border border-border bg-card text-muted-foreground transition-colors hover:border-foreground/30 hover:text-foreground"
            >
              <Linkedin className="h-4 w-4" />
            </Link>
            <Link
              href={siteConfig.social.github}
              aria-label="GitHub"
              className="grid h-9 w-9 place-items-center rounded-md border border-border bg-card text-muted-foreground transition-colors hover:border-foreground/30 hover:text-foreground"
            >
              <Github className="h-4 w-4" />
            </Link>
            <Link
              href={siteConfig.social.x}
              aria-label="X / Twitter"
              className="grid h-9 w-9 place-items-center rounded-md border border-border bg-card text-muted-foreground transition-colors hover:border-foreground/30 hover:text-foreground"
            >
              <Twitter className="h-4 w-4" />
            </Link>
          </div>
        </div>

        {groups.map((g) => (
          <div key={g.title}>
            <h4 className="font-mono text-[11px] uppercase tracking-[0.25em] text-muted-foreground">
              {g.title}
            </h4>
            <ul className="mt-5 space-y-3">
              {g.links.map((l) => (
                <li key={l.label}>
                  <Link
                    href={l.href}
                    className="group inline-flex items-center gap-1 text-sm text-foreground/80 transition-colors hover:text-foreground"
                  >
                    {l.label}
                    <ArrowUpRight className="h-3 w-3 -translate-y-px opacity-0 transition-all group-hover:translate-x-0.5 group-hover:opacity-100" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="hairline" />

      <div className="container flex flex-col items-start justify-between gap-3 py-6 text-xs text-muted-foreground sm:flex-row sm:items-center">
        <p>© {new Date().getFullYear()} {siteConfig.name}. All rights reserved.</p>
        <p className="font-mono">
          Built for the shop floor · <span className="text-brand">v1.0</span>
        </p>
      </div>
    </footer>
  );
}
