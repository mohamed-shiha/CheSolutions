"use client";

import { useState } from "react";
import { toast } from "sonner";
import { Send, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/motion/reveal";

const services = [
  "Custom web apps",
  "Android apps",
  "Machine integration",
  "Custom software",
  "Paper → system",
  "OEE & analytics",
  "Not sure yet",
];

const budgets = ["< €25k", "€25k – €75k", "€75k – €200k", "€200k+", "Not sure yet"];

export function ContactForm() {
  const [submitting, setSubmitting] = useState(false);
  const [service, setService] = useState(services[0]);
  const [budget, setBudget] = useState(budgets[4]);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);
    await new Promise((r) => setTimeout(r, 900));
    setSubmitting(false);
    toast.success("Message sent. We'll reply within two business days.");
    (e.target as HTMLFormElement).reset();
  }

  return (
    <FadeIn>
      <form
        onSubmit={onSubmit}
        className="rounded-3xl border border-border bg-card/50 p-6 sm:p-8"
      >
        <div className="grid gap-5 sm:grid-cols-2">
          <Field label="Your name" name="name" placeholder="Maya Reyes" required />
          <Field
            label="Work email"
            name="email"
            type="email"
            placeholder="maya@plant.example"
            required
          />
          <Field label="Company" name="company" placeholder="Plant name" />
          <Field label="Phone (optional)" name="phone" placeholder="+1 …" />
        </div>

        <div className="mt-5">
          <Label>What do you need?</Label>
          <div className="mt-2 flex flex-wrap gap-1.5">
            {services.map((s) => {
              const active = s === service;
              return (
                <button
                  type="button"
                  key={s}
                  onClick={() => setService(s)}
                  className={`rounded-md border px-3 py-1.5 text-xs transition-colors ${
                    active
                      ? "border-brand bg-brand/15 text-foreground"
                      : "border-border bg-foreground/[0.03] text-muted-foreground hover:border-foreground/30"
                  }`}
                >
                  {s}
                </button>
              );
            })}
          </div>
        </div>

        <div className="mt-5">
          <Label>Budget range</Label>
          <div className="mt-2 flex flex-wrap gap-1.5">
            {budgets.map((b) => {
              const active = b === budget;
              return (
                <button
                  type="button"
                  key={b}
                  onClick={() => setBudget(b)}
                  className={`rounded-md border px-3 py-1.5 text-xs transition-colors ${
                    active
                      ? "border-brand bg-brand/15 text-foreground"
                      : "border-border bg-foreground/[0.03] text-muted-foreground hover:border-foreground/30"
                  }`}
                >
                  {b}
                </button>
              );
            })}
          </div>
        </div>

        <div className="mt-5">
          <Label htmlFor="message">Tell us about the project</Label>
          <textarea
            id="message"
            name="message"
            required
            rows={5}
            placeholder="What does the line look like today? What works, what doesn't, and what would success look like?"
            className="mt-2 w-full rounded-lg border border-input bg-background/50 px-3.5 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 outline-none transition focus:border-brand focus:ring-2 focus:ring-brand/30"
          />
        </div>

        <div className="mt-6 flex flex-col items-start justify-between gap-3 sm:flex-row sm:items-center">
          <p className="text-[11px] text-muted-foreground">
            By submitting you agree to our{" "}
            <a className="text-foreground/80 underline-offset-4 hover:underline" href="#">
              privacy policy
            </a>
            .
          </p>
          <Button type="submit" size="lg" disabled={submitting}>
            {submitting ? (
              <>
                <Loader2 className="h-4 w-4 animate-spin" /> Sending…
              </>
            ) : (
              <>
                Send message <Send className="h-4 w-4" />
              </>
            )}
          </Button>
        </div>
      </form>
    </FadeIn>
  );
}

function Label({ children, htmlFor }: { children: React.ReactNode; htmlFor?: string }) {
  return (
    <label
      htmlFor={htmlFor}
      className="block text-[11px] font-mono uppercase tracking-widest text-muted-foreground"
    >
      {children}
    </label>
  );
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
  required,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
}) {
  return (
    <div>
      <Label htmlFor={name}>{label}</Label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="mt-2 h-11 w-full rounded-lg border border-input bg-background/50 px-3.5 text-sm text-foreground placeholder:text-muted-foreground/60 outline-none transition focus:border-brand focus:ring-2 focus:ring-brand/30"
      />
    </div>
  );
}
