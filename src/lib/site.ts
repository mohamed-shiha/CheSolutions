export const siteConfig = {
  name: "CheTechSolutions",
  tagline: "Software that powers the factory floor.",
  description:
    "CheTechSolutions builds custom software for factories — web apps, Android apps, and machine integrations — that replace paper, manual steps, and brittle spreadsheets with reliable automation.",
  url: "https://chetechsolutions.example.com",
  email: "hello@chetechsolutions.example.com",
  phone: "+1 (555) 010-2026",
  address: "Remote-first · Serving factories worldwide",
  social: {
    linkedin: "#",
    github: "#",
    x: "#",
  },
  nav: [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "Solutions", href: "/solutions" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ],
} as const;

export type SiteConfig = typeof siteConfig;
