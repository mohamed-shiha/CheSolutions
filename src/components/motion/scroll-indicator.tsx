"use client";

import { useEffect, useState } from "react";

const sections = [
  { id: "/", label: "HOME" },
  { id: "/services", label: "SERVICES" },
  { id: "/solutions", label: "SOLUTIONS" },
  { id: "/about", label: "ABOUT" },
  { id: "/contact", label: "CONTACT" },
];

export function ScrollIndicator() {
  const [active, setActive] = useState("/");
  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY + window.innerHeight * 0.3;
      let current = "/";
      for (const s of sections) {
        const el = document.getElementById(s.id);
        if (!el) continue;
        const top = (el as HTMLElement).offsetTop;
        if (y >= top) current = s.id;
      }
      setActive(current);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="pointer-events-none fixed right-4 top-1/2 z-40 hidden -translate-y-1/2 flex-col gap-3 lg:flex">
      {sections.map((s) => {
        const isActive = active === s.id;
        return (
          <a
            key={s.id}
            href={s.id}
            className="group pointer-events-auto flex items-center gap-3"
            aria-label={s.label}
          >
            <span
              className={`text-[10px] font-mono uppercase tracking-[0.25em] transition-all duration-300 ${
                isActive ? "text-brand opacity-100" : "text-muted-foreground opacity-0 group-hover:opacity-100"
              }`}
            >
              {s.label}
            </span>
            <span
              className={`block h-px transition-all duration-300 ${
                isActive ? "w-10 bg-brand" : "w-5 bg-border group-hover:w-8 group-hover:bg-foreground/60"
              }`}
            />
          </a>
        );
      })}
    </div>
  );
}
