"use client";

import { Brain, ShieldCheck, Lock } from "lucide-react";
import { motion } from "framer-motion";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Badge";
import { Reveal, RevealGroup, RevealItem } from "@/components/motion/Reveal";
import { EASE_OUT } from "@/lib/motion";

type Factor = {
  label: string;
  detail: string;
  weight: number;
  tone: "warn" | "trust";
};

const factors: Factor[] = [
  { label: "Recent pain crisis", detail: "logged 4 days ago · long bones", weight: 30, tone: "warn" },
  { label: "Low hydration", detail: "below personal baseline", weight: 20, tone: "warn" },
  { label: "Harmattan season", detail: "live local weather · dry & dusty", weight: 12, tone: "trust" },
  { label: "Low SpO₂ reading", detail: "94% · trending down", weight: 9, tone: "trust" },
  { label: "Quiet: no readings", detail: "3 days without a check-in", weight: 6, tone: "trust" },
];

const total = factors.reduce((s, f) => s + f.weight, 0);

function FactorBar({ f, i }: { f: Factor; i: number }) {
  return (
    <div>
      <div className="flex items-baseline justify-between">
        <span className="text-[0.86rem] font-semibold text-navy">{f.label}</span>
        <span className="font-mono text-[0.72rem] text-muted">+{f.weight}</span>
      </div>
      <p className="mt-0.5 text-[0.74rem] text-muted">{f.detail}</p>
      <div className="mt-1.5 h-2 overflow-hidden rounded-full bg-mist">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${(f.weight / 30) * 100}%` }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.9, delay: 0.1 + i * 0.08, ease: EASE_OUT }}
          className={
            f.tone === "warn"
              ? "h-full rounded-full bg-gradient-to-r from-warning/70 to-warning"
              : "h-full rounded-full bg-gradient-to-r from-trust to-sky"
          }
        />
      </div>
    </div>
  );
}

export function ExplainableRisk() {
  return (
    <Section tone="light" id="explainable-risk">
      <Container>
        <div className="grid items-center gap-14 lg:grid-cols-2">
          {/* Copy */}
          <div>
            <Reveal>
              <Eyebrow>Explainable risk engine</Eyebrow>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="mt-5 text-balance text-[clamp(1.9rem,4.4vw,3rem)] font-bold leading-[1.05] text-navy">
                Every score breaks into{" "}
                <span className="text-gradient-navy">named factors.</span>
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted">
                There is no black box. A patient&apos;s risk level is the sum of named,
                weighted factors, including live local weather such as the harmattan
                season, so the clinician can always see exactly why the number moved.
              </p>
            </Reveal>

            <Reveal delay={0.16}>
              <div className="mt-7 flex items-start gap-3 rounded-2xl border border-trust/20 bg-trust-light/50 p-4">
                <Lock className="mt-0.5 h-5 w-5 shrink-0 text-trust-deep" />
                <p className="text-[0.92rem] leading-relaxed text-navy">
                  <span className="font-semibold">Safety rails are never personalized.</span>{" "}
                  Personalization tunes thresholds and nudges, but the hard safety
                  boundaries are fixed rules that the model cannot move.
                </p>
              </div>
            </Reveal>

            <RevealGroup className="mt-7 grid gap-3 sm:grid-cols-2" stagger={0.06}>
              {[
                { icon: Brain, t: "Weighted, not opaque", d: "Each factor carries a visible weight." },
                { icon: ShieldCheck, t: "Clinician-facing", d: "The why travels with the score." },
              ].map((c) => (
                <RevealItem key={c.t}>
                  <div className="flex h-full items-start gap-3 rounded-2xl border border-line bg-white p-4 shadow-[var(--shadow-soft)]">
                    <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-navy-50 text-navy">
                      <c.icon className="h-4 w-4" strokeWidth={1.75} />
                    </span>
                    <div>
                      <p className="text-[0.9rem] font-semibold text-navy">{c.t}</p>
                      <p className="mt-0.5 text-[0.8rem] leading-snug text-muted">{c.d}</p>
                    </div>
                  </div>
                </RevealItem>
              ))}
            </RevealGroup>
          </div>

          {/* Instrument visual */}
          <Reveal delay={0.1}>
            <div className="relative">
              <div className="absolute -inset-6 -z-10 rounded-[2.5rem] bg-gradient-to-br from-mist to-trust-light/40 blur-2xl" />
              <div className="rounded-[2rem] border border-line bg-white p-6 shadow-[var(--shadow-card)] md:p-7">
                <div className="flex items-center justify-between">
                  <span className="inline-flex items-center gap-2 font-mono text-[0.66rem] uppercase tracking-[0.16em] text-trust">
                    <ShieldCheck className="h-3.5 w-3.5" /> SCD risk · explainable
                  </span>
                  <span className="rounded-full bg-warning/10 px-2.5 py-0.5 font-mono text-[0.62rem] font-semibold uppercase tracking-wide text-warning">
                    SS genotype
                  </span>
                </div>

                <div className="mt-5 flex items-end justify-between border-b border-line pb-5">
                  <div>
                    <p className="text-[0.72rem] uppercase tracking-wide text-muted">
                      Current level
                    </p>
                    <p className="font-display text-3xl font-bold text-navy">Moderate</p>
                  </div>
                  <div className="text-right">
                    <p className="text-[0.72rem] uppercase tracking-wide text-muted">Score</p>
                    <p className="font-display text-3xl font-bold text-warning">{total}</p>
                  </div>
                </div>

                <div className="mt-5 space-y-4">
                  {factors.map((f, i) => (
                    <FactorBar key={f.label} f={f} i={i} />
                  ))}
                </div>

                <div className="mt-5 flex items-center justify-between border-t border-line pt-4">
                  <span className="text-[0.74rem] text-muted">Reviewed by care team</span>
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-success/10 px-2.5 py-1 text-[0.72rem] font-semibold text-success">
                    <ShieldCheck className="h-3.5 w-3.5" /> Doctor-in-the-loop
                  </span>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}
