"use client";

import { TestTube, ShieldCheck, UserCheck, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Badge";
import { AuroraBackground } from "@/components/motion/AuroraBackground";
import { CursorSpotlight } from "@/components/motion/CursorSpotlight";
import { Reveal, RevealGroup, RevealItem } from "@/components/motion/Reveal";
import { EASE_OUT } from "@/lib/motion";

const steps = [
  {
    icon: TrendingUp,
    title: "Track the dose-response",
    desc: "Each patient's response to hydroxyurea is followed over time; the dose that works for one is rarely the dose for another.",
  },
  {
    icon: TestTube,
    title: "Watch the CBC safety flags",
    desc: "Counts are monitored against safe ranges, and the agent raises a flag the moment a value crosses a safety threshold.",
  },
  {
    icon: UserCheck,
    title: "Guidance goes to the doctor",
    desc: "When a hold-dose is indicated, the recommendation is surfaced to the clinician, who makes the call. Patients never self-dose.",
  },
];

function TitrationChart() {
  const points = [22, 26, 30, 34, 38, 36, 40];
  const max = 44;
  return (
    <div className="glass-dark rounded-[2rem] p-6 md:p-7">
      <div className="flex items-center justify-between">
        <span className="inline-flex items-center gap-2 font-mono text-[0.66rem] uppercase tracking-[0.16em] text-sky">
          <TestTube className="h-3.5 w-3.5" /> Hydroxyurea · titration
        </span>
        <span className="rounded-full bg-warning/15 px-2.5 py-0.5 font-mono text-[0.62rem] font-semibold uppercase tracking-wide text-warning">
          dose held
        </span>
      </div>

      <div className="mt-6 flex items-end gap-2.5">
        {points.map((p, i) => {
          const held = i === points.length - 1;
          return (
            <div key={i} className="flex flex-1 flex-col items-center gap-2">
              <motion.div
                initial={{ height: 0 }}
                whileInView={{ height: `${(p / max) * 8.5}rem` }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.7, delay: i * 0.07, ease: EASE_OUT }}
                className={
                  held
                    ? "w-full rounded-t-md bg-gradient-to-t from-warning/40 to-warning"
                    : "w-full rounded-t-md bg-gradient-to-t from-trust/40 to-sky"
                }
              />
              <span className="font-mono text-[0.58rem] text-white/40">
                w{i + 1}
              </span>
            </div>
          );
        })}
      </div>

      <div className="mt-5 flex items-start gap-2.5 rounded-2xl border border-warning/20 bg-warning/5 p-3.5">
        <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-warning" />
        <p className="text-[0.8rem] leading-snug text-white/80">
          <span className="font-semibold text-white">Week 7, CBC flag:</span> ANC low.
          Hold-dose guidance sent to the treating doctor for review.
        </p>
      </div>
    </div>
  );
}

export function Titration() {
  return (
    <Section tone="navy" id="titration">
      <AuroraBackground />
      <CursorSpotlight />
      <Container className="relative z-10">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          <Reveal delay={0.1} className="order-2 lg:order-1">
            <TitrationChart />
          </Reveal>

          <div className="order-1 lg:order-2">
            <Reveal>
              <Eyebrow tone="light">Hydroxyurea titration</Eyebrow>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="mt-5 text-balance text-[clamp(1.9rem,4.4vw,3rem)] font-bold leading-[1.05] text-white">
                n-of-1 medicine, <span className="text-gradient">in practice.</span>
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-5 max-w-xl text-lg leading-relaxed text-white/70">
                Finding the right hydroxyurea dose is the clearest example of personalized
                medicine in sickle cell care. Doctium tracks the response and the safety
                signals, but the doctor always decides, and the patient is told, plainly,
                never to self-dose.
              </p>
            </Reveal>

            <RevealGroup className="mt-8 space-y-3" stagger={0.08}>
              {steps.map((s) => (
                <RevealItem key={s.title}>
                  <div className="glass-dark lift flex items-start gap-4 rounded-2xl p-4 hover:border-white/25">
                    <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-trust/15 text-sky">
                      <s.icon className="h-5 w-5" strokeWidth={1.75} />
                    </span>
                    <div>
                      <p className="text-[0.98rem] font-bold text-white">{s.title}</p>
                      <p className="mt-1 text-[0.86rem] leading-relaxed text-white/65">
                        {s.desc}
                      </p>
                    </div>
                  </div>
                </RevealItem>
              ))}
            </RevealGroup>
          </div>
        </div>
      </Container>
    </Section>
  );
}
