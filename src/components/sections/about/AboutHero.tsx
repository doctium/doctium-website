"use client";

import { ArrowRight, Check, Cpu, FileJson, UserCheck } from "lucide-react";
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
        className="glass-dark rounded-3xl p-5"
      >
        {children}
      </motion.div>
    </motion.div>
  );
}

function ThesisCard() {
  const flow = [
    { icon: Cpu, label: "Workflow runs" },
    { icon: FileJson, label: "Structured artifact" },
    { icon: ArrowRight, label: "Intelligent loop" },
    { icon: UserCheck, label: "Human decides" },
  ];
  return (
    <div className="w-[19rem] text-white">
      <div className="flex items-center justify-between">
        <span className="font-mono text-[0.62rem] uppercase tracking-[0.18em] text-sky">
          The OS thesis
        </span>
        <span className="inline-flex items-center gap-1 rounded-full bg-white/10 px-2 py-0.5 text-[0.62rem] text-white/80">
          <span className="h-1.5 w-1.5 rounded-full bg-success" /> AI-native
        </span>
      </div>
      <div className="mt-4 space-y-2.5">
        {flow.map((f, i) => (
          <div key={f.label} className="flex items-center gap-2.5">
            <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-trust/20 text-sky">
              <f.icon className="h-3.5 w-3.5" />
            </span>
            <span className="text-[0.82rem] text-white/80">{f.label}</span>
            {i < flow.length - 1 && (
              <span className="ml-auto font-mono text-[0.6rem] text-white/30">
                {String(i + 1).padStart(2, "0")}
              </span>
            )}
          </div>
        ))}
      </div>
      <div className="mt-4 flex items-center gap-2 border-t border-white/10 pt-3 text-[0.7rem] text-white/65">
        <Check className="h-3.5 w-3.5 text-success" />
        Licensed humans stay responsible
      </div>
    </div>
  );
}

function StatusCard() {
  return (
    <div className="w-[15rem] text-white">
      <span className="font-mono text-[0.62rem] uppercase tracking-[0.18em] text-sky">
        Status · live
      </span>
      <div className="mt-3 space-y-2">
        {[
          ["Telemedicine", "Live now"],
          ["Patient apps", "iOS · Android"],
        ].map(([k, v]) => (
          <div key={k} className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-success" />
            <span className="font-mono text-[0.6rem] uppercase tracking-wide text-white/45">
              {k}
            </span>
            <span className="truncate text-[0.72rem] text-white/75">{v}</span>
          </div>
        ))}
      </div>
      <p className="mt-3 border-t border-white/10 pt-3 text-[0.66rem] text-white/55">
        Hospital OS rolling out module by module.
      </p>
    </div>
  );
}

export function AboutHero() {
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
            <Eyebrow tone="light">About Doctium</Eyebrow>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.08, ease: EASE_OUT }}
            className="mt-6 text-balance text-[clamp(2.3rem,5.8vw,4.3rem)] font-extrabold leading-[1.03] tracking-[-0.03em] text-white"
          >
            We&apos;re building the <span className="text-gradient">AI-native</span> hospital OS
            for <span className="text-gradient">African</span> healthcare.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.18, ease: EASE_OUT }}
            className="mt-6 max-w-xl text-lg leading-relaxed text-white/75"
          >
            Not a traditional EHR. Every clinical, financial, operational and administrative
            workflow produces structured artifacts that feed intelligent closed loops —{" "}
            <span className="text-white/90">while licensed humans remain responsible for
            final clinical and financial decisions.</span>
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.28, ease: EASE_OUT }}
            className="mt-9 flex flex-col gap-3 sm:flex-row"
          >
            <Button href="/contact" variant="white" size="lg" magnetic iconRight={<ArrowRight className="h-4 w-4" />}>
              Talk to us
            </Button>
            <Button href="/ehr" variant="outlineLight" size="lg">
              See the platform
            </Button>
          </motion.div>
        </div>

        <div className="relative hidden h-[28rem] lg:block">
          <FloatCard className="absolute right-0 top-2" delay={0.4} drift={-12}>
            <ThesisCard />
          </FloatCard>
          <FloatCard className="absolute bottom-4 left-0" delay={0.7} drift={9}>
            <StatusCard />
          </FloatCard>
        </div>
      </Container>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-[5] h-32 bg-gradient-to-b from-transparent to-navy" />
    </section>
  );
}
