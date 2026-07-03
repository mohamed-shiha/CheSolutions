import {
  ArrowRight,
  Factory,
  FlaskConical,
  Wrench,
  Truck,
  Boxes,
  ClipboardCheck,
  ScanLine,
  Activity,
  CheckCircle2,
  ArrowLeft,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

export type SolutionItem = {
  id: string;
  iconName: string;
  title: string;
  summary: string;
  features: string[];
};

export const SOLUTIONS: SolutionItem[] = [
  {
    id: "manufacturing",
    iconName: "Factory",
    title: "Manufacturing execution",
    summary:
      "Run-of-the-mill MES modules rarely fit. We build the parts of MES you actually need: production tracking, shift handovers, exception handling.",
    features: [
      "Order release and consumption tracking",
      "Shift handover with signed notes",
      "Live line status across the plant",
      "Exception-first design (problems, not noise)",
    ],
  },
  {
    id: "quality",
    iconName: "FlaskConical",
    title: "Quality & compliance",
    summary:
      "Replace paper QC logs with auditable digital records. ISO 9001, HACCP, and customer-specific standards — without the bloat.",
    features: [
      "AQL sampling and defect coding",
      "Non-conformance / CAPA workflows",
      "Batch and lot traceability",
      "Signed PDF reports on demand",
    ],
  },
  {
    id: "maintenance",
    iconName: "Wrench",
    title: "Maintenance & reliability",
    summary:
      "Planned, preventive, and reactive maintenance — with the data to actually improve MTBF. Not a glorified ticket queue.",
    features: [
      "PM schedules with auto-generation",
      "Spare parts consumption tracking",
      "Root-cause and 5-why capture",
      "MTBF / MTTR dashboards",
    ],
  },
  {
    id: "logistics",
    iconName: "Truck",
    title: "Logistics & shipping",
    summary:
      "From finished goods to dock door. Picking, packing, ASN, and label printing that talks to the WMS you already use.",
    features: [
      "Pick-pack-ship with barcode verification",
      "Carrier integration and label printing",
      "ASN and EDI where required",
      "Yard and dock visibility",
    ],
  },
  {
    id: "inventory",
    iconName: "Boxes",
    title: "Inventory & materials",
    summary:
      "Raw, WIP, finished. Real-time visibility with the line-side controls that stop the wrong material from reaching the cell.",
    features: [
      "Cycle counts and blind counts",
      "FIFO / FEFO enforcement at the cell",
      "Lot and serial tracking",
      "Low-stock and consumption forecasts",
    ],
  },
];

export const SOLUTION_PLAYBOOKS: { iconName: string; title: string; body: string }[] = [
  {
    iconName: "ClipboardCheck",
    title: "Paper-floor audits",
    body: "Two-week sprint to map every form, log, and clipboard, then deliver a phased plan to digitize it.",
  },
  {
    iconName: "ScanLine",
    title: "Scanning on the line",
    body: "Rugged-handheld and fixed-scanner workflows for parts, units, and operators — offline-safe.",
  },
  {
    iconName: "Activity",
    title: "OEE in 30 days",
    body: "Plug into your existing PLCs and SCADA, get live OEE, downtime reasons, and Pareto in a month.",
  },
];

export const SOLUTION_ICONS: Record<string, LucideIcon> = {
  Factory,
  FlaskConical,
  Wrench,
  Truck,
  Boxes,
  ClipboardCheck,
  ScanLine,
  Activity,
  ArrowRight,
  CheckCircle2,
  ArrowLeft,
};
