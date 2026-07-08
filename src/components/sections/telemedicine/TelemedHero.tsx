"use client";

import { ArrowRight, Check, BadgeCheck, Star, Bot, Stethoscope } from "lucide-react";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Badge";
import { StoreBadges } from "@/components/ui/StoreBadges";
import { AuroraBackground } from "@/components/motion/AuroraBackground";
import { CursorSpotlight } from "@/components/motion/CursorSpotlight";
import { EASE_OUT } from "@/lib/motion";

const heroChips = [
  "Live on iOS & Android",
  "MDCN-verified doctors",
  "Seven languages",
  "Signed e-prescriptions",
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

function DoctorCard() {
  return (
    <div className="w-[17rem] text-white">
      <div className="flex items-center gap-3">
        <div className="flex h-11 w-11 items-center justify-center rounded-full bg-trust/25 font-display text-sm font-bold text-sky">
          AO
        </div>
        <div className="min-w-0 flex-1">
          <div className="flex items-center gap-1.5">
            <p className="truncate text-[0.92rem] font-semibold">Dr. Amara Okeke</p>
            <BadgeCheck className="h-4 w-4 shrink-0 text-sky" />
          </div>
          <p className="text-[0.72rem] text-white/55">Cardiologist · MDCN verified</p>
        </div>
        <div className="flex items-center gap-0.5 text-[0.72rem] font-semibold">
          <Star className="h-3.5 w-3.5 fill-warning text-warning" />
          4.9
        </div>
      </div>
      <div className="mt-4 flex items-center gap-2 rounded-2xl bg-white/8 px-3 py-2.5">
        <span className="h-2 w-2 animate-pulse rounded-full bg-success" />
        <span className="text-[0.74rem] text-white/75">Available now · chat, voice &amp; video</span>
      </div>
      <button className="mt-3 flex w-full items-center justify-center gap-2 rounded-2xl bg-white py-2.5 text-[0.8rem] font-semibold text-navy">
        <Stethoscope className="h-4 w-4 text-trust" /> Start a consult
      </button>
    </div>
  );
}

function LeenahCard() {
  return (
    <div className="w-[16rem] text-white">
      <div className="flex items-center gap-2">
        <Bot className="h-4 w-4 text-sky" />
        <span className="font-mono text-[0.62rem] uppercase tracking-[0.18em] text-sky">
          Leenah · AI triage
        </span>
      </div>
      <div className="mt-3 space-y-2">
        <p className="w-fit rounded-2xl rounded-tl-md bg-white/10 px-3 py-2 text-[0.76rem] text-white/85">
          I&apos;ve had a headache and fever for two days.
        </p>
        <p className="ml-auto w-fit max-w-[12rem] rounded-2xl rounded-tr-md bg-trust/30 px-3 py-2 text-[0.76rem] text-white">
          Any neck stiffness or rash? I can match you to a doctor now.
        </p>
      </div>
      <div className="mt-3 flex items-center gap-2 border-t border-white/10 pt-3 text-[0.68rem] text-white/60">
        <Check className="h-3.5 w-3.5 text-success" />
        Red-flag safety check passed
      </div>
    </div>
  );
}

export function TelemedHero() {
  return (
    <section className="grain relative isolate flex min-h-[100svh] items-center overflow-hidden bg-navy-cinematic pt-[var(--header-h)] text-white">
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
            <Eyebrow tone="light">Telemedicine</Eyebrow>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.08, ease: EASE_OUT }}
            className="mt-6 text-balance text-[clamp(2.3rem,5.5vw,4rem)] font-extrabold leading-[1.02] tracking-[-0.03em] text-white"
          >
            See a verified doctor in{" "}
            <span className="text-gradient">minutes.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.18, ease: EASE_OUT }}
            className="mt-6 max-w-xl text-lg leading-relaxed text-white/75"
          >
            Doctium is a multi-doctor telemedicine marketplace. Describe your symptoms,
            let Leenah triage you safely, then meet an identity-verified doctor over chat,
            voice or video, with signed prescriptions and chronic-care programs built in,
            in seven languages.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.28, ease: EASE_OUT }}
            className="mt-9 flex flex-col gap-4"
          >
            <StoreBadges />
            <div className="flex flex-col gap-3 sm:flex-row">
              <Button href="/signup/patient" variant="outlineLight" size="lg" iconRight={<ArrowRight className="h-4 w-4" />}>
                Create an account
              </Button>
              <Button href="#how" variant="outlineLight" size="lg">
                How it works
              </Button>
            </div>
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
            <DoctorCard />
          </FloatCard>
          <FloatCard className="absolute -left-2 bottom-6" delay={0.6} drift={10}>
            <LeenahCard />
          </FloatCard>
        </div>
      </Container>

      {/* fade into next section */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-[5] h-32 bg-gradient-to-b from-transparent to-canvas" />
    </section>
  );
}
