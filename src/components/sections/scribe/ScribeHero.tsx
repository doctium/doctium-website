"use client";

import { ArrowRight, Check, Mic, ShieldCheck, UserCheck } from "lucide-react";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Badge";
import { AuroraBackground } from "@/components/motion/AuroraBackground";
import { CursorSpotlight } from "@/components/motion/CursorSpotlight";
import { EASE_OUT } from "@/lib/motion";

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

/** Mini SOAP draft — the hero anchor instrument. */
function DraftCard() {
  const lines = [
    { k: "S", t: "3-day cough, mild fever. No chest pain." },
    { k: "O", t: "Temp 37.9°C · Chest clear · SpO₂ 98%" },
    { k: "A", t: "Likely viral upper-respiratory infection." },
    { k: "P", t: "Supportive care · review in 5 days." },
  ];
  return (
    <div className="w-[20rem] text-white">
      <div className="flex items-center justify-between">
        <span className="font-mono text-[0.62rem] uppercase tracking-[0.18em] text-sky">
          Doctium Scribe · draft
        </span>
        <span className="inline-flex items-center gap-1 rounded-full bg-white/10 px-2 py-0.5 text-[0.62rem] text-white/80">
          <Mic className="h-3 w-3 text-sky" /> consented
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
        Reviewed &amp; approved by clinician
      </div>
    </div>
  );
}

function ControlCard() {
  return (
    <div className="w-[15.5rem] text-white">
      <div className="flex items-center gap-2">
        <UserCheck className="h-4 w-4 text-sky" />
        <span className="font-mono text-[0.62rem] uppercase tracking-[0.18em] text-sky">
          Doctor in control
        </span>
      </div>
      <p className="mt-3 text-[0.8rem] leading-relaxed text-white/75">
        Nothing reaches the official record until the clinician reviews, edits and approves it.
      </p>
      <div className="mt-3 flex items-center gap-2 border-t border-white/10 pt-3 text-[0.68rem] text-white/55">
        <ShieldCheck className="h-3.5 w-3.5 text-sky" />
        Consent-gated · access-logged
      </div>
    </div>
  );
}

export function ScribeHero() {
  return (
    <section className="grain relative isolate flex min-h-[92svh] items-center overflow-hidden bg-navy-cinematic pt-[var(--header-h)] text-white">
      <AuroraBackground grid />
      <CursorSpotlight size={620} />

      <Container className="relative z-10 grid items-center gap-12 py-16 lg:grid-cols-[1.05fr_0.95fr] lg:py-20">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: EASE_OUT }}
          >
            <Eyebrow tone="light">Doctium Scribe</Eyebrow>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.08, ease: EASE_OUT }}
            className="mt-6 text-balance text-[clamp(2.3rem,5.5vw,4rem)] font-extrabold leading-[1.03] tracking-[-0.03em] text-white"
          >
            Give doctors back the <span className="text-gradient">exam room.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.18, ease: EASE_OUT }}
            className="mt-6 max-w-xl text-lg leading-relaxed text-white/75"
          >
            Doctium Scribe is an ambient clinical documentation assistant built directly into
            the Doctium EHR. With patient consent, it turns the consultation into a structured,
            reviewable draft note, so clinicians can focus fully on the patient, not the keyboard.{" "}
            <span className="text-white/90">AI drafts; the clinician reviews, edits and approves.</span>
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
            <Button href="#how" variant="outlineLight" size="lg">
              See how it works
            </Button>
          </motion.div>

          <motion.ul
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="mt-10 flex flex-wrap gap-x-5 gap-y-2"
          >
            {[
              "Ambient capture",
              "Structured draft",
              "Doctor-approved",
              "Consent-gated & audited",
            ].map((chip) => (
              <li key={chip} className="flex items-center gap-2 text-[0.82rem] text-white/65">
                <Check className="h-3.5 w-3.5 text-sky" />
                {chip}
              </li>
            ))}
          </motion.ul>
        </div>

        <div className="relative hidden h-[30rem] lg:block">
          <FloatCard className="absolute right-0 top-2" delay={0.4} drift={-12}>
            <DraftCard />
          </FloatCard>
          <FloatCard className="absolute -left-2 bottom-4" delay={0.65} drift={10}>
            <ControlCard />
          </FloatCard>
        </div>
      </Container>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-[5] h-32 bg-gradient-to-b from-transparent to-canvas" />
    </section>
  );
}
