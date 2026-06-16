"use client";

import { ArrowRight, Check, ShieldCheck, Dna, Activity } from "lucide-react";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Badge";
import { AuroraBackground } from "@/components/motion/AuroraBackground";
import { CursorSpotlight } from "@/components/motion/CursorSpotlight";
import { EASE_OUT } from "@/lib/motion";

const heroChips = [
  "Genotype-aware",
  "Explainable scores",
  "Doctor-in-the-loop",
  "Starting with sickle cell",
];

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
        className="glass-dark rounded-3xl p-5"
      >
        {children}
      </motion.div>
    </motion.div>
  );
}

const riskFactors: [string, number, string][] = [
  ["Recent crisis", 30, "warning"],
  ["Low hydration", 20, "warning"],
  ["Harmattan season", 12, "sky"],
  ["Low SpO₂", 9, "sky"],
];

function RiskReadout() {
  return (
    <div className="w-[18.5rem] text-white">
      <div className="flex items-center justify-between">
        <span className="inline-flex items-center gap-2 font-mono text-[0.62rem] uppercase tracking-[0.18em] text-sky">
          <ShieldCheck className="h-3.5 w-3.5" /> SCD risk · explainable
        </span>
        <span className="inline-flex items-center gap-1 rounded-full bg-white/10 px-2 py-0.5 text-[0.6rem] text-white/80">
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-success" /> live
        </span>
      </div>

      <div className="mt-4 flex items-baseline gap-2">
        <span className="font-display text-3xl font-bold text-warning">Moderate</span>
        <span className="text-[0.72rem] text-white/55">score 41 · SS genotype</span>
      </div>

      <div className="mt-4 space-y-2.5">
        {riskFactors.map(([label, w, accent]) => (
          <div key={label} className="flex items-center gap-2.5">
            <span className="w-[6.5rem] shrink-0 text-[0.68rem] text-white/70">{label}</span>
            <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-white/10">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${w * 2.6}%` }}
                transition={{ duration: 1, delay: 0.7, ease: EASE_OUT }}
                className={
                  accent === "warning"
                    ? "h-full rounded-full bg-gradient-to-r from-warning/70 to-warning"
                    : "h-full rounded-full bg-gradient-to-r from-trust to-sky"
                }
              />
            </div>
            <span className="w-7 shrink-0 text-right font-mono text-[0.62rem] text-white/50">
              +{w}
            </span>
          </div>
        ))}
      </div>

      <div className="mt-4 flex items-center gap-2 border-t border-white/10 pt-3 text-[0.7rem] text-white/65">
        <Check className="h-3.5 w-3.5 text-success" />
        Surfaced to the clinician — never acts alone
      </div>
    </div>
  );
}

function GenotypeCard() {
  return (
    <div className="flex w-[14rem] items-center gap-3 text-white">
      <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-trust/20">
        <Dna className="h-5 w-5 text-sky" />
      </div>
      <div>
        <p className="font-mono text-[0.6rem] uppercase tracking-[0.16em] text-sky">
          Genotype on profile
        </p>
        <p className="font-display text-lg font-bold">SS · SC · AS</p>
        <p className="text-[0.66rem] text-white/55">thresholds adapt</p>
      </div>
    </div>
  );
}

function TitrationCard() {
  return (
    <div className="w-[13.5rem] text-white">
      <div className="flex items-center gap-2">
        <Activity className="h-4 w-4 text-sky" />
        <span className="font-mono text-[0.6rem] uppercase tracking-[0.16em] text-sky">
          Hydroxyurea
        </span>
      </div>
      <p className="mt-2 font-display text-base font-bold">Dose held</p>
      <p className="text-[0.66rem] leading-snug text-white/60">
        CBC flag · ANC low — guidance sent to the doctor
      </p>
    </div>
  );
}

export function PMHero() {
  return (
    <section className="grain relative isolate flex min-h-[92svh] items-center overflow-hidden bg-navy-cinematic pt-[var(--header-h)] text-white">
      <AuroraBackground grid />
      <CursorSpotlight size={600} />

      <Container className="relative z-10 grid items-center gap-12 py-16 lg:grid-cols-[1.05fr_0.95fr] lg:py-20">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: EASE_OUT }}
          >
            <Eyebrow tone="light">Personalized medicine</Eyebrow>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.08, ease: EASE_OUT }}
            className="mt-6 text-balance text-[clamp(2.3rem,5.5vw,4rem)] font-extrabold leading-[1.03] tracking-[-0.03em] text-white"
          >
            Care that adapts to the <span className="text-gradient">individual.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.18, ease: EASE_OUT }}
            className="mt-6 max-w-xl text-lg leading-relaxed text-white/75"
          >
            Our personalized-medicine agents use structured patient data, diagnostics
            and genetics to guide patient-specific decisions. We started where
            personalization genuinely changes the treatment —{" "}
            <span className="text-white/90">sickle cell disease.</span>
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.28, ease: EASE_OUT }}
            className="mt-9 flex flex-col gap-3 sm:flex-row"
          >
            <Button
              href="/contact"
              variant="white"
              size="lg"
              magnetic
              iconRight={<ArrowRight className="h-4 w-4" />}
            >
              Book a demo
            </Button>
            <Button href="/contact" variant="outlineLight" size="lg">
              Talk to our team
            </Button>
          </motion.div>

          <motion.ul
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="mt-10 flex flex-wrap gap-x-5 gap-y-2"
          >
            {heroChips.map((chip) => (
              <li key={chip} className="flex items-center gap-2 text-[0.82rem] text-white/65">
                <Check className="h-3.5 w-3.5 text-sky" />
                {chip}
              </li>
            ))}
          </motion.ul>
        </div>

        <div className="relative hidden h-[30rem] lg:block">
          <FloatCard className="absolute right-0 top-0" delay={0.4} drift={-12}>
            <RiskReadout />
          </FloatCard>
          <FloatCard className="absolute -left-2 bottom-20" delay={0.6} drift={10}>
            <GenotypeCard />
          </FloatCard>
          <FloatCard className="absolute bottom-0 right-12" delay={0.8} drift={-8}>
            <TitrationCard />
          </FloatCard>
        </div>
      </Container>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-[5] h-32 bg-gradient-to-b from-transparent to-canvas" />
    </section>
  );
}
