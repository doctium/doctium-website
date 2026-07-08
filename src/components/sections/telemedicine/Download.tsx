import { Bot, BadgeCheck, Star, Video, MessageCircle, Phone, PlayCircle, Check, ArrowRight } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { DeviceFrame } from "@/components/ui/DeviceFrame";
import { StoreBadges } from "@/components/ui/StoreBadges";
import { Parallax } from "@/components/motion/Parallax";
import { Reveal, RevealGroup, RevealItem } from "@/components/motion/Reveal";

const highlights = [
  "Free to download on iOS & Android",
  "Ask Leenah and book in minutes",
  "Pay securely with your in-app wallet",
  "Watch MediGram health-education reels",
];

function AppHome() {
  return (
    <div className="flex h-full flex-col bg-canvas">
      {/* header */}
      <div className="bg-navy-cinematic px-4 pb-5 pt-7 text-white">
        <p className="text-[0.6rem] text-white/60">Good morning, Ada</p>
        <p className="font-display text-base font-bold">How can we help today?</p>
        <div className="mt-3 flex items-center gap-2 rounded-xl bg-white/10 px-3 py-2 text-[0.7rem] text-white/75">
          <Bot className="h-3.5 w-3.5 text-sky" />
          Ask Leenah, AI symptom checker
        </div>
      </div>

      {/* quick actions */}
      <div className="grid grid-cols-3 gap-2 px-4 pt-4">
        {[
          { icon: MessageCircle, l: "Chat" },
          { icon: Phone, l: "Voice" },
          { icon: Video, l: "Video" },
        ].map((a) => {
          const AIcon = a.icon;
          return (
            <div
              key={a.l}
              className="flex flex-col items-center gap-1 rounded-2xl border border-line bg-white py-2.5 shadow-[var(--shadow-soft)]"
            >
              <AIcon className="h-4 w-4 text-trust" />
              <span className="text-[0.62rem] font-medium text-navy">{a.l}</span>
            </div>
          );
        })}
      </div>

      {/* doctor */}
      <div className="flex-1 space-y-3 px-4 pt-4">
        <p className="font-mono text-[0.56rem] uppercase tracking-[0.16em] text-trust">
          Available now
        </p>
        <div className="flex items-center gap-3 rounded-2xl border border-line bg-white p-3 shadow-[var(--shadow-soft)]">
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-navy-50 font-display text-xs font-bold text-navy">
            TB
          </div>
          <div className="min-w-0 flex-1">
            <div className="flex items-center gap-1">
              <p className="truncate text-[0.76rem] font-semibold text-navy">Dr. Tunde Bello</p>
              <BadgeCheck className="h-3.5 w-3.5 shrink-0 text-trust" />
            </div>
            <p className="text-[0.62rem] text-muted">Paediatrician</p>
          </div>
          <div className="flex items-center gap-0.5 text-[0.62rem] font-semibold text-navy">
            <Star className="h-3 w-3 fill-warning text-warning" />
            4.8
          </div>
        </div>

        {/* medigram teaser */}
        <div className="relative overflow-hidden rounded-2xl bg-navy-cinematic p-3 text-white">
          <div className="flex items-center gap-2">
            <PlayCircle className="h-4 w-4 text-sky" />
            <span className="text-[0.66rem] font-semibold">MediGram</span>
          </div>
          <p className="mt-1 text-[0.62rem] text-white/65">
            Short health-education reels, reviewed for accuracy.
          </p>
        </div>
      </div>

      <div className="px-4 pb-5">
        <button className="flex w-full items-center justify-center gap-2 rounded-2xl bg-navy py-2.5 text-[0.76rem] font-semibold text-white">
          <Video className="h-3.5 w-3.5 text-sky" /> Start a consult
        </button>
      </div>
    </div>
  );
}

export function Download() {
  return (
    <Section tone="canvas" id="download" className="scroll-mt-24">
      <Container>
        <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
          {/* Copy */}
          <div>
            <Reveal>
              <Eyebrow>Get the app</Eyebrow>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="mt-5 text-balance text-[clamp(1.9rem,4.4vw,3rem)] font-bold leading-[1.05] text-navy">
                Download Doctium <span className="text-gradient-navy">today.</span>
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted">
                The full marketplace lives in your pocket: verified doctors, Leenah triage,
                secure consults, signed prescriptions, wallets and MediGram health reels.
                Available now on the App Store and Google Play.
              </p>
            </Reveal>

            <RevealGroup className="mt-7 space-y-3" stagger={0.06}>
              {highlights.map((h) => (
                <RevealItem key={h}>
                  <div className="flex items-center gap-3">
                    <span className="inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-success/10 text-success">
                      <Check className="h-3.5 w-3.5" />
                    </span>
                    <span className="text-[0.95rem] text-body">{h}</span>
                  </div>
                </RevealItem>
              ))}
            </RevealGroup>

            <Reveal delay={0.2}>
              <div className="mt-9 flex flex-col gap-5">
                <Button
                  href="/signup/patient"
                  variant="primary"
                  size="lg"
                  className="self-start"
                  iconRight={<ArrowRight className="h-4 w-4" />}
                >
                  Create your account
                </Button>
                <div className="inline-flex self-start rounded-2xl bg-navy-cinematic p-1.5">
                  <StoreBadges />
                </div>
              </div>
            </Reveal>
          </div>

          {/* Device */}
          <Reveal delay={0.1}>
            <div className="flex justify-center lg:justify-end">
              <Parallax amount={36}>
                <div className="relative">
                  <div className="absolute -inset-8 -z-10 rounded-full bg-gradient-to-br from-trust-light to-sky-soft/40 blur-3xl" />
                  <DeviceFrame>
                    <AppHome />
                  </DeviceFrame>
                </div>
              </Parallax>
            </div>
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}
