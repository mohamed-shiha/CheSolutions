import type { Metadata } from "next";
import { Hero, Services, Process, Cta } from "@/components/sections/home-sections";
import { ScrollIndicator } from "@/components/motion/scroll-indicator";

export const metadata: Metadata = {
  title: "Software that powers the factory floor",
  description:
    "CheTechSolutions builds custom software for factories — web apps, Android apps, and machine integrations — that replace paper and manual steps with reliable automation.",
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <Services />
      <Process />
      <Cta />
      <ScrollIndicator />
    </>
  );
}
