"use client";

import { ArrowRight, Check, Activity, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Badge";
import { NeuralField } from "@/components/motion/NeuralField";
import { AuroraBackground } from "@/components/motion/AuroraBackground";
import { CursorSpotlight } from "@/components/motion/CursorSpotlight";
import { EASE_OUT } from "@/lib/motion";
import { trustChips } from "@/content/data";

/* --- floating "clinical instrument" cards — the differentiation anchor --- */

function FloatCard({
  children,
  className,
  delay = 0,
  drift = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  drift?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.96 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 1, delay, ease: EASE_OUT }}
      className={className}
    >
      <motion.div
        animate={{ y: [0, drift, 0] }}
        transition={{ duration: 7 + Math.abs(drift), repeat: Infinity, ease: "easeInOut" }}
        className="glass-dark rounded-3xl p-4"
      >
        {children}
      </motion.div>
    </motion.div>
  );
}

function ScribeCard() {
  const lines = [
    { k: "S", t: "Patient reports 3-day cough, mild fever." },
    { k: "O", t: "Temp 37.9°C · Chest clear · SpO₂ 98%" },
    { k: "A", t: "Likely viral upper-respiratory infection." },
    { k: "P", t: "Supportive care · review in 5 days." },
  ];
  return (
    <div className="w-[19rem] text-white">
      <div className="flex items-center justify-between">
        <span className="font-mono text-[0.62rem] uppercase tracking-[0.18em] text-sky">
          Doctium Scribe · draft
        </span>
        <span className="inline-flex items-center gap-1 rounded-full bg-white/10 px-2 py-0.5 text-[0.62rem] text-white/80">
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-success" /> live
        </span>
      </div>
      <div className="mt-3 space-y-2">
        {lines.map((l) => (
          <div key={l.k} className="flex gap-2.5">
            <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-md bg-trust/25 font-mono text-[0.6rem] font-semibold text-sky">
              {l.k}
            </span>
            <p className="text-[0.78rem] leading-snug text-white/80">{l.t}</p>
          </div>
        ))}
      </div>
      <div className="mt-3 flex items-center gap-2 border-t border-white/10 pt-3 text-[0.7rem] text-white/65">
        <Check className="h-3.5 w-3.5 text-success" />
        Reviewed & approved by clinician
      </div>
    </div>
  );
}

function RiskCard() {
  return (
    <div className="w-[15rem] text-white">
      <div className="flex items-center gap-2">
        <ShieldCheck className="h-4 w-4 text-sky" />
        <span className="font-mono text-[0.62rem] uppercase tracking-[0.18em] text-sky">
          SCD risk · explainable
        </span>
      </div>
      <div className="mt-3 flex items-baseline gap-2">
        <span className="font-display text-2xl font-bold text-warning">Moderate</span>
        <span className="text-[0.7rem] text-white/55">score 41</span>
      </div>
      <div className="mt-3 space-y-1.5">
        {[
          ["Recent crisis", 30],
          ["Low hydration", 20],
          ["Harmattan season", 10],
        ].map(([label, w]) => (
          <div key={label as string} className="flex items-center gap-2">
            <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-white/10">
              <div
                className="h-full rounded-full bg-gradient-to-r from-trust to-sky"
                style={{ width: `${(w as number) * 2}%` }}
              />
            </div>
            <span className="w-24 shrink-0 text-[0.66rem] text-white/65">{label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function VitalsCard() {
  return (
    <div className="flex w-[13rem] items-center gap-3 text-white">
      <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-trust/20">
        <Activity className="h-5 w-5 text-sky" />
      </div>
      <div>
        <p className="font-mono text-[0.6rem] uppercase tracking-[0.16em] text-sky">
          Revenue captured
        </p>
        <p className="font-display text-lg font-bold">No leakage</p>
        <p className="text-[0.66rem] text-white/55">every encounter billed</p>
      </div>
    </div>
  );
}

export function Hero() {
  return (
    <section className="grain relative isolate flex min-h-[100svh] items-center overflow-hidden bg-navy-cinematic pt-[var(--header-h)] text-white">
      <NeuralField className="opacity-70" />
      <AuroraBackground grid />
      <CursorSpotlight size={620} />

      <Container className="relative z-10 grid items-center gap-12 py-16 lg:grid-cols-[1.05fr_0.95fr] lg:py-20">
        {/* Copy */}
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: EASE_OUT }}
          >
            <Eyebrow tone="light">An AI-native hospital OS</Eyebrow>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.08, ease: EASE_OUT }}
            className="mt-6 text-balance text-[clamp(2.4rem,6.2vw,4.7rem)] font-extrabold leading-[1.02] tracking-[-0.03em] text-white"
          >
            The <span className="text-gradient">AI-native</span> operating system for{" "}
            <span className="text-gradient">African</span> healthcare.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.18, ease: EASE_OUT }}
            className="mt-6 max-w-xl text-lg leading-relaxed text-white/75"
          >
            Doctium turns every clinical, financial and operational workflow into
            structured data that feeds intelligent AI loops — while a telemedicine
            marketplace connects patients to verified doctors in minutes.{" "}
            <span className="text-white/90">AI assists; licensed clinicians decide.</span>
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.28, ease: EASE_OUT }}
            className="mt-9 flex flex-col gap-3 sm:flex-row"
          >
            <Button href="/ehr" variant="white" size="lg" magnetic iconRight={<ArrowRight className="h-4 w-4" />}>
              Explore the Hospital OS
            </Button>
            <Button href="/telemedicine" variant="outlineLight" size="lg">
              For patients
            </Button>
          </motion.div>

          <motion.ul
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="mt-10 flex flex-wrap gap-x-5 gap-y-2"
          >
            {trustChips.map((chip) => (
              <li key={chip} className="flex items-center gap-2 text-[0.82rem] text-white/65">
                <Check className="h-3.5 w-3.5 text-sky" />
                {chip}
              </li>
            ))}
          </motion.ul>
        </div>

        {/* Floating instruments */}
        <div className="relative hidden h-[30rem] lg:block">
          <FloatCard className="absolute right-0 top-2" delay={0.4} drift={-12}>
            <ScribeCard />
          </FloatCard>
          <FloatCard className="absolute -left-2 top-40" delay={0.6} drift={10}>
            <RiskCard />
          </FloatCard>
          <FloatCard className="absolute bottom-2 right-10" delay={0.8} drift={-8}>
            <VitalsCard />
          </FloatCard>
        </div>
      </Container>

      {/* fade into next section */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-[5] h-32 bg-gradient-to-b from-transparent to-canvas" />
    </section>
  );
}
