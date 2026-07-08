import { MessageSquareText, UserCheck, Video } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal, RevealGroup, RevealItem } from "@/components/motion/Reveal";

const steps = [
  {
    n: "01",
    icon: MessageSquareText,
    title: "Describe it, or ask Leenah",
    desc: "Tell Leenah, our AI symptom checker, what's going on in your own words or by voice. A safety-first red-flag engine screens for emergencies before anything else.",
  },
  {
    n: "02",
    icon: UserCheck,
    title: "Match with a verified doctor",
    desc: "Leenah routes you to the right specialty. Every doctor you can book is identity- and licence-verified through MDCN KYC before they ever appear.",
  },
  {
    n: "03",
    icon: Video,
    title: "Consult, prescribe, follow up",
    desc: "Meet by secure chat, voice notes or encrypted video. Walk away with a signed e-prescription, a pharmacy hand-off and a care plan when you need one.",
  },
];

export function HowItWorks() {
  return (
    <Section tone="canvas" id="how">
      <Container>
        <SectionHeading
          eyebrow="How it works · for patients"
          title={
            <>
              Care in three steps: <span className="text-gradient-navy">no waiting room.</span>
            </>
          }
          lede="From the first symptom to a signed prescription, the whole journey lives in one app."
        />

        <RevealGroup className="mt-14 grid gap-6 md:grid-cols-3" stagger={0.1}>
          {steps.map((s, i) => {
            const StepIcon = s.icon;
            return (
              <RevealItem key={s.n}>
                <div className="lift relative flex h-full flex-col rounded-3xl border border-line bg-white p-7 shadow-[var(--shadow-soft)] hover:border-navy/15">
                  <div className="flex items-center justify-between">
                    <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-navy-50 text-navy">
                      <StepIcon className="h-6 w-6" strokeWidth={1.75} />
                    </span>
                    <span className="font-mono text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-trust">
                      {s.n}
                    </span>
                  </div>
                  <h3 className="mt-6 text-xl font-bold text-navy">{s.title}</h3>
                  <p className="mt-2.5 text-[0.92rem] leading-relaxed text-muted">{s.desc}</p>
                  {i < steps.length - 1 && (
                    <span
                      aria-hidden
                      className="pointer-events-none absolute -right-3 top-1/2 hidden h-6 w-6 -translate-y-1/2 items-center justify-center rounded-full bg-white text-navy/30 shadow-[var(--shadow-soft)] md:flex"
                    >
                      →
                    </span>
                  )}
                </div>
              </RevealItem>
            );
          })}
        </RevealGroup>

        <Reveal delay={0.1}>
          <p className="mx-auto mt-12 max-w-2xl text-balance text-center text-base text-muted">
            <span className="font-semibold text-navy">AI assists; a licensed doctor decides.</span>{" "}
            Leenah never prescribes or diagnoses on its own; it triages and routes you to a real,
            verified clinician.
          </p>
        </Reveal>
      </Container>
    </Section>
  );
}
