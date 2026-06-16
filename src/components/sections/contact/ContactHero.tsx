"use client";

import { motion } from "framer-motion";
import { Check, Mail, Calendar, MessageSquare } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Badge";
import { AuroraBackground } from "@/components/motion/AuroraBackground";
import { CursorSpotlight } from "@/components/motion/CursorSpotlight";
import { EASE_OUT } from "@/lib/motion";

const replyChips = [
  "Demos for hospitals",
  "Partnerships",
  "Patient app support",
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

function DemoCard() {
  return (
    <div className="w-[18rem] text-white">
      <div className="flex items-center justify-between">
        <span className="font-mono text-[0.62rem] uppercase tracking-[0.18em] text-sky">
          Hospital demo · scheduled
        </span>
        <span className="inline-flex items-center gap-1 rounded-full bg-white/10 px-2 py-0.5 text-[0.62rem] text-white/80">
          <Calendar className="h-3 w-3 text-sky" /> 30 min
        </span>
      </div>
      <div className="mt-3 space-y-2">
        {[
          "Walkthrough of the Hospital OS",
          "Doctium Scribe, live",
          "Your workflows & questions",
        ].map((t) => (
          <div key={t} className="flex items-center gap-2.5">
            <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-md bg-trust/25">
              <Check className="h-3 w-3 text-sky" />
            </span>
            <p className="text-[0.8rem] leading-snug text-white/80">{t}</p>
          </div>
        ))}
      </div>
      <div className="mt-3 flex items-center gap-2 border-t border-white/10 pt-3 text-[0.7rem] text-white/65">
        <MessageSquare className="h-3.5 w-3.5 text-sky" />
        A real human replies — not a bot.
      </div>
    </div>
  );
}

function ReachCard() {
  return (
    <div className="flex w-[15rem] items-center gap-3 text-white">
      <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-trust/20">
        <Mail className="h-5 w-5 text-sky" />
      </div>
      <div>
        <p className="font-mono text-[0.6rem] uppercase tracking-[0.16em] text-sky">
          Talk to the team
        </p>
        <p className="font-display text-lg font-bold">hello@doctium</p>
        <p className="text-[0.66rem] text-white/55">hospitals & patients</p>
      </div>
    </div>
  );
}

export function ContactHero() {
  return (
    <section
      id="top"
      className="grain relative isolate flex min-h-[72svh] items-center overflow-hidden bg-navy-cinematic pt-[var(--header-h)] text-white"
    >
      <AuroraBackground grid />
      <CursorSpotlight size={560} />

      <Container className="relative z-10 grid items-center gap-12 py-16 lg:grid-cols-[1.05fr_0.95fr] lg:py-24">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: EASE_OUT }}
          >
            <Eyebrow tone="light">Contact</Eyebrow>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.08, ease: EASE_OUT }}
            className="mt-6 text-balance text-[clamp(2.3rem,5.5vw,4rem)] font-extrabold leading-[1.03] tracking-[-0.03em]"
          >
            Talk to the team building the{" "}
            <span className="text-gradient">AI-native</span> hospital OS.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.18, ease: EASE_OUT }}
            className="mt-6 max-w-xl text-lg leading-relaxed text-white/75"
          >
            Hospitals — book a walkthrough of the Hospital OS and Doctium Scribe.
            Patients — get the app and reach support. Tell us a little about you and
            we&apos;ll come back with the right person.{" "}
            <span className="text-white/90">A real clinician-led team replies.</span>
          </motion.p>

          <motion.ul
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.45 }}
            className="mt-9 flex flex-wrap gap-x-5 gap-y-2"
          >
            {replyChips.map((chip) => (
              <li key={chip} className="flex items-center gap-2 text-[0.82rem] text-white/65">
                <Check className="h-3.5 w-3.5 text-sky" />
                {chip}
              </li>
            ))}
          </motion.ul>
        </div>

        <div className="relative hidden h-[26rem] lg:block">
          <FloatCard className="absolute right-0 top-4" delay={0.4} drift={-11}>
            <DemoCard />
          </FloatCard>
          <FloatCard className="absolute bottom-6 -left-2" delay={0.6} drift={9}>
            <ReachCard />
          </FloatCard>
        </div>
      </Container>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-[5] h-32 bg-gradient-to-b from-transparent to-white" />
    </section>
  );
}
