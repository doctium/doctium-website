"use client";

import { ArrowRight, Check, BedDouble, Wallet, Activity } from "lucide-react";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Badge";
import { AuroraBackground } from "@/components/motion/AuroraBackground";
import { CursorSpotlight } from "@/components/motion/CursorSpotlight";
import { EASE_OUT } from "@/lib/motion";

const heroChips = [
  "14+ modules",
  "Doctor-in-the-loop AI",
  "FHIR R4 interoperable",
  "Billing & Insurance live",
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
        className="glass-dark rounded-3xl p-4"
      >
        {children}
      </motion.div>
    </motion.div>
  );
}

function WardCard() {
  const beds = [
    { label: "Occupied", value: 34, tone: "bg-trust" },
    { label: "Free", value: 9, tone: "bg-success" },
    { label: "Cleaning", value: 3, tone: "bg-warning" },
  ];
  return (
    <div className="w-[18rem] text-white">
      <div className="flex items-center justify-between">
        <span className="inline-flex items-center gap-2 font-mono text-[0.62rem] uppercase tracking-[0.18em] text-sky">
          <BedDouble className="h-3.5 w-3.5" /> Ward state · live
        </span>
        <span className="inline-flex items-center gap-1 rounded-full bg-white/10 px-2 py-0.5 text-[0.62rem] text-white/80">
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-success" /> sync
        </span>
      </div>
      <div className="mt-4 grid grid-cols-7 gap-1.5">
        {Array.from({ length: 28 }).map((_, i) => {
          const state = i < 18 ? "bg-trust/70" : i < 23 ? "bg-success/70" : "bg-white/12";
          return <span key={i} className={`h-5 rounded-md ${state}`} />;
        })}
      </div>
      <div className="mt-4 flex items-center justify-between border-t border-white/10 pt-3">
        {beds.map((b) => (
          <div key={b.label} className="flex items-center gap-1.5">
            <span className={`h-2 w-2 rounded-full ${b.tone}`} />
            <span className="text-[0.66rem] text-white/65">
              {b.label} <span className="font-semibold text-white">{b.value}</span>
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

function BillingCard() {
  return (
    <div className="w-[15.5rem] text-white">
      <div className="flex items-center gap-2">
        <Wallet className="h-4 w-4 text-sky" />
        <span className="font-mono text-[0.62rem] uppercase tracking-[0.18em] text-sky">
          Revenue integrity
        </span>
      </div>
      <div className="mt-3 flex items-baseline gap-2">
        <span className="font-display text-2xl font-bold text-white">No leakage</span>
      </div>
      <div className="mt-3 space-y-1.5">
        {[
          ["Invoice", "emitted"],
          ["Claim", "batched"],
          ["Receipt", "reconciled"],
        ].map(([k, v]) => (
          <div key={k} className="flex items-center justify-between text-[0.72rem]">
            <span className="text-white/65">{k}</span>
            <span className="inline-flex items-center gap-1 text-success">
              <Check className="h-3 w-3" /> {v}
            </span>
          </div>
        ))}
      </div>
      <p className="mt-3 border-t border-white/10 pt-2.5 text-[0.66rem] text-white/55">
        every encounter emits billing artifacts
      </p>
    </div>
  );
}

function ThroughputCard() {
  return (
    <div className="flex w-[13rem] items-center gap-3 text-white">
      <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-trust/20">
        <Activity className="h-5 w-5 text-sky" />
      </div>
      <div>
        <p className="font-mono text-[0.6rem] uppercase tracking-[0.16em] text-sky">
          Lab turnaround
        </p>
        <p className="font-display text-lg font-bold">Monitored</p>
        <p className="text-[0.66rem] text-white/55">bottlenecks surface early</p>
      </div>
    </div>
  );
}

export function EhrHero() {
  return (
    <section className="grain relative isolate flex min-h-[100svh] items-center overflow-hidden bg-navy-cinematic pt-[var(--header-h)] text-white">
      <AuroraBackground grid />
      <CursorSpotlight size={620} />

      <Container className="relative z-10 grid items-center gap-12 py-16 lg:grid-cols-[1.05fr_0.95fr] lg:py-20">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: EASE_OUT }}
          >
            <Eyebrow tone="light">The Hospital OS</Eyebrow>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.08, ease: EASE_OUT }}
            className="mt-6 text-balance text-[clamp(2.3rem,5.5vw,4rem)] font-extrabold leading-[1.02] tracking-[-0.03em] text-white"
          >
            The hospital, running on one{" "}
            <span className="text-gradient">intelligent</span> record.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.18, ease: EASE_OUT }}
            className="mt-6 max-w-xl text-lg leading-relaxed text-white/75"
          >
            Doctium is an AI-native hospital EHR. Every clinical, financial,
            operational and administrative workflow produces structured artifacts
            that feed intelligent closed loops.{" "}
            <span className="text-white/90">AI assists; licensed humans decide.</span>
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.28, ease: EASE_OUT }}
            className="mt-9 flex flex-col gap-3 sm:flex-row"
          >
            <Button href="/contact" variant="white" size="lg" magnetic iconRight={<ArrowRight className="h-4 w-4" />}>
              Book a demo
            </Button>
            <Button href="#modules" variant="outlineLight" size="lg">
              See the modules
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

        {/* Floating instruments */}
        <div className="relative hidden h-[30rem] lg:block">
          <FloatCard className="absolute right-0 top-2" delay={0.4} drift={-12}>
            <WardCard />
          </FloatCard>
          <FloatCard className="absolute -left-2 top-44" delay={0.6} drift={10}>
            <BillingCard />
          </FloatCard>
          <FloatCard className="absolute bottom-2 right-12" delay={0.8} drift={-8}>
            <ThroughputCard />
          </FloatCard>
        </div>
      </Container>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-[5] h-32 bg-gradient-to-b from-transparent to-canvas" />
    </section>
  );
}
