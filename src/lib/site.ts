export const siteConfig = {
  name: "CheTechSolutions",
  tagline: "Software that powers the factory floor.",
  description:
    "CheTechSolutions builds custom software for factories — web apps, Android apps, and machine integrations — that replace paper, manual steps, and brittle spreadsheets with reliable automation.",
  url: "https://chetechsolutions.ie",
  email: "inof@chetechsolutions.ie",
  phone: "+353860869970",
  address: "Ireland, CO.Mayo",
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
