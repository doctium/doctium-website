import { ShieldAlert, Languages, Mic, Route, CalendarHeart, Bot, Check } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Badge";
import { AuroraBackground } from "@/components/motion/AuroraBackground";
import { CursorSpotlight } from "@/components/motion/CursorSpotlight";
import { Reveal, RevealGroup, RevealItem } from "@/components/motion/Reveal";

const capabilities = [
  {
    icon: ShieldAlert,
    title: "Safety-first by design",
    desc: "A deterministic red-flag engine screens for emergencies and outranks the language model; safety never depends on the LLM getting it right.",
  },
  {
    icon: Languages,
    title: "Seven languages",
    desc: "English, Nigerian Pidgin, Hausa, Yoruba, Igbo, French and Arabic: Leenah meets patients in the language they think in.",
  },
  {
    icon: Mic,
    title: "Voice in, voice out",
    desc: "Speak your symptoms with speech-to-text, and hear Leenah reply, built for low-literacy and on-the-go use.",
  },
  {
    icon: Route,
    title: "Routes to the right care",
    desc: "Leenah asks structured follow-up questions and matches you to the correct specialty and a verified doctor.",
  },
  {
    icon: CalendarHeart,
    title: "Suggests care programs",
    desc: "When a long-term condition shows up, Leenah can recommend the right chronic-care program and enrolment.",
  },
];

const languages = ["English", "Pidgin", "Hausa", "Yoruba", "Igbo", "French", "Arabic"];

function LeenahChat() {
  return (
    <div className="glass-dark rounded-[2rem] p-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-2xl bg-trust/20 text-sky">
            <Bot className="h-5 w-5" />
          </span>
          <div>
            <p className="text-sm font-semibold text-white">Leenah</p>
            <p className="font-mono text-[0.58rem] uppercase tracking-[0.16em] text-sky">
              AI symptom checker
            </p>
          </div>
        </div>
        <span className="inline-flex items-center gap-1 rounded-full bg-white/10 px-2.5 py-1 text-[0.62rem] text-white/75">
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-success" /> online
        </span>
      </div>

      <div className="mt-5 space-y-2.5">
        <p className="w-fit max-w-[16rem] rounded-2xl rounded-tl-md bg-white/8 px-3.5 py-2 text-[0.82rem] text-white/85">
          Belle dey pain me since morning, and I get small fever.
        </p>
        <p className="ml-auto w-fit max-w-[16rem] rounded-2xl rounded-tr-md bg-trust/30 px-3.5 py-2 text-[0.82rem] text-white">
          Sorry to hear that. Where exactly does it hurt, and is the pain sharp or dull?
        </p>
        <p className="w-fit max-w-[16rem] rounded-2xl rounded-tl-md bg-white/8 px-3.5 py-2 text-[0.82rem] text-white/85">
          Lower right side, sharp.
        </p>
      </div>

      {/* red-flag readout */}
      <div className="mt-4 flex items-start gap-2.5 rounded-2xl border border-warning/30 bg-warning/10 px-3.5 py-3">
        <ShieldAlert className="mt-0.5 h-4 w-4 shrink-0 text-warning" />
        <p className="text-[0.78rem] leading-snug text-white/85">
          <span className="font-semibold text-white">Red-flag check:</span> possible appendicitis
          pattern, recommending an urgent in-person review, not self-care.
        </p>
      </div>

      <div className="mt-4 flex items-center justify-between border-t border-white/10 pt-4">
        <div className="flex items-center gap-2 text-[0.72rem] text-white/60">
          <Mic className="h-3.5 w-3.5 text-sky" /> Voice reply ready
        </div>
        <span className="inline-flex items-center gap-1.5 rounded-full bg-success/15 px-2.5 py-1 text-[0.72rem] font-semibold text-success">
          <Check className="h-3.5 w-3.5" /> Routed to a doctor
        </span>
      </div>
    </div>
  );
}

export function LeenahSpotlight() {
  return (
    <Section tone="navy" id="leenah">
      <AuroraBackground />
      <CursorSpotlight />
      <Container className="relative z-10">
        <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
          {/* Copy + capabilities */}
          <div>
            <Reveal>
              <Eyebrow tone="light">Meet Leenah</Eyebrow>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="mt-5 text-balance text-[clamp(1.9rem,4.4vw,3rem)] font-bold leading-[1.05] text-white">
                AI triage that puts{" "}
                <span className="text-gradient">safety first.</span>
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-5 max-w-xl text-lg leading-relaxed text-white/70">
                Leenah is Doctium&apos;s AI symptom checker: a conversational, multilingual
                guide that listens, asks the right questions, and routes you to the right care.
                A deterministic red-flag engine always outranks the model, so emergencies are
                never missed.
              </p>
            </Reveal>

            <Reveal delay={0.16}>
              <div className="mt-6 flex flex-wrap gap-2">
                {languages.map((l) => (
                  <span
                    key={l}
                    className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-[0.78rem] text-white/80"
                  >
                    <Languages className="h-3.5 w-3.5 text-sky" />
                    {l}
                  </span>
                ))}
              </div>
            </Reveal>

            <RevealGroup className="mt-8 grid gap-x-6 gap-y-5 sm:grid-cols-2" stagger={0.06}>
              {capabilities.map((c) => {
                const CapIcon = c.icon;
                return (
                  <RevealItem key={c.title}>
                    <div className="flex gap-3">
                      <span className="mt-0.5 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-trust/15 text-sky">
                        <CapIcon className="h-5 w-5" strokeWidth={1.75} />
                      </span>
                      <div>
                        <p className="text-[0.92rem] font-semibold text-white">{c.title}</p>
                        <p className="text-[0.82rem] leading-snug text-white/60">{c.desc}</p>
                      </div>
                    </div>
                  </RevealItem>
                );
              })}
            </RevealGroup>
          </div>

          {/* Chat instrument */}
          <Reveal delay={0.12}>
            <div className="relative">
              <div className="absolute -inset-6 -z-10 rounded-[2.5rem] bg-gradient-to-br from-trust/30 to-sky/20 blur-3xl" />
              <LeenahChat />
            </div>
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}
