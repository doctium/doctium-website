import { Star, BadgeCheck, Bot, Video } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Badge";
import { DeviceFrame } from "@/components/ui/DeviceFrame";
import { StoreBadges } from "@/components/ui/StoreBadges";
import { Parallax } from "@/components/motion/Parallax";
import { Reveal, RevealGroup, RevealItem } from "@/components/motion/Reveal";
import { Icon } from "@/components/ui/Icon";
import { telemedFeatures } from "@/content/data";

function AppMock() {
  return (
    <div className="flex h-full flex-col bg-canvas">
      {/* app header */}
      <div className="bg-navy-cinematic px-4 pb-5 pt-6 text-white">
        <p className="text-[0.62rem] text-white/60">Good afternoon</p>
        <p className="font-display text-base font-bold">How are you feeling?</p>
        <div className="mt-3 flex items-center gap-2 rounded-xl bg-white/10 px-3 py-2 text-[0.7rem] text-white/70">
          <Bot className="h-3.5 w-3.5 text-sky" />
          Ask Leenah, AI symptom checker
        </div>
      </div>
      {/* doctor card */}
      <div className="flex-1 space-y-3 p-4">
        <p className="font-mono text-[0.58rem] uppercase tracking-[0.16em] text-trust">
          Top verified doctors
        </p>
        {[
          { n: "Dr. Amara Okeke", s: "Cardiologist", r: "4.9" },
          { n: "Dr. Tunde Bello", s: "Paediatrician", r: "4.8" },
        ].map((d) => (
          <div
            key={d.n}
            className="flex items-center gap-3 rounded-2xl border border-line bg-white p-3 shadow-[var(--shadow-soft)]"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-navy-50 font-display text-sm font-bold text-navy">
              {d.n.split(" ")[1][0]}
            </div>
            <div className="min-w-0 flex-1">
              <div className="flex items-center gap-1">
                <p className="truncate text-[0.78rem] font-semibold text-navy">{d.n}</p>
                <BadgeCheck className="h-3.5 w-3.5 shrink-0 text-trust" />
              </div>
              <p className="text-[0.66rem] text-muted">{d.s}</p>
            </div>
            <div className="flex items-center gap-0.5 text-[0.66rem] font-semibold text-navy">
              <Star className="h-3 w-3 fill-warning text-warning" />
              {d.r}
            </div>
          </div>
        ))}
        <button className="flex w-full items-center justify-center gap-2 rounded-2xl bg-navy py-2.5 text-[0.78rem] font-semibold text-white">
          <Video className="h-3.5 w-3.5 text-sky" /> Start a consult
        </button>
      </div>
    </div>
  );
}

export function TelemedicineSection() {
  return (
    <Section tone="mist" id="telemedicine">
      <Container>
        <div className="grid items-center gap-14 lg:grid-cols-[1.1fr_0.9fr]">
          {/* Copy */}
          <div>
            <Reveal>
              <Eyebrow>Telemedicine marketplace</Eyebrow>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="mt-5 text-balance text-[clamp(1.9rem,4.4vw,3rem)] font-bold leading-[1.05] text-navy">
                See a verified doctor in minutes.
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted">
                The consumer side of Doctium, a multi-doctor marketplace where patients
                meet identity-verified doctors over chat, voice and video, guided by
                AI triage and backed by digital prescriptions and chronic-care programs.
              </p>
            </Reveal>

            <RevealGroup className="mt-8 grid gap-x-6 gap-y-4 sm:grid-cols-2" stagger={0.06}>
              {telemedFeatures.map((f) => (
                <RevealItem key={f.title}>
                  <div className="flex gap-3">
                    <span className="mt-0.5 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-white text-trust shadow-[var(--shadow-soft)]">
                      <Icon name={f.icon} className="h-5 w-5" />
                    </span>
                    <div>
                      <p className="text-[0.92rem] font-semibold text-navy">{f.title}</p>
                      <p className="text-[0.82rem] leading-snug text-muted">{f.desc}</p>
                    </div>
                  </div>
                </RevealItem>
              ))}
            </RevealGroup>

            <Reveal delay={0.2}>
              <div id="download" className="mt-9 scroll-mt-28">
                <div className="inline-flex rounded-2xl bg-navy-cinematic p-1.5">
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
                    <AppMock />
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
