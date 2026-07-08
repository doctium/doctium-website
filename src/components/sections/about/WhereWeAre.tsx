import { Stethoscope, FileText, Smartphone, Boxes } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal, RevealGroup, RevealItem } from "@/components/motion/Reveal";
import { StoreBadges } from "@/components/ui/StoreBadges";

const status = [
  {
    icon: Stethoscope,
    state: "Live",
    title: "Telemedicine marketplace",
    desc: "Patients see verified doctors by chat, voice and video, and manage their care.",
    detail: "Live now",
  },
  {
    icon: Smartphone,
    state: "Shipping",
    title: "Patient & doctor apps",
    desc: "The Doctium mobile apps are shipping to the App Store and Google Play.",
    detail: "iOS · Android",
  },
  {
    icon: FileText,
    state: "Shipping",
    title: "Doctium Scribe",
    desc: "Ambient AI clinical documentation that turns consultations into reviewable notes.",
    detail: "Doctor-reviewed",
  },
  {
    icon: Boxes,
    state: "Rolling out",
    title: "Hospital EHR",
    desc: "The AI-native Hospital OS is rolling out module by module, with more shipping continuously.",
    detail: "Module by module",
  },
];

export function WhereWeAre() {
  return (
    <Section tone="light" id="status">
      <Container>
        <SectionHeading
          eyebrow="Where we are"
          title={
            <>
              Live, and shipping{" "}
              <span className="text-gradient-navy">continuously.</span>
            </>
          }
          lede="An honest snapshot of what is in production today, and what is rolling out next."
        />

        <RevealGroup
          className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4"
          stagger={0.08}
        >
          {status.map((s) => (
            <RevealItem key={s.title}>
              <div className="lift flex h-full flex-col rounded-3xl border border-line bg-white p-6 shadow-[var(--shadow-soft)] hover:border-navy/15">
                <div className="flex items-center justify-between">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-navy-50 text-navy">
                    <s.icon className="h-5 w-5" strokeWidth={1.75} />
                  </span>
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-success/10 px-2.5 py-1 font-mono text-[0.6rem] font-semibold uppercase tracking-wide text-success">
                    <span className="h-1.5 w-1.5 rounded-full bg-success" />
                    {s.state}
                  </span>
                </div>
                <h3 className="mt-4 font-display text-base font-bold leading-tight text-navy">
                  {s.title}
                </h3>
                <p className="mt-1.5 flex-1 text-[0.85rem] leading-relaxed text-muted">{s.desc}</p>
                <span className="mt-4 border-t border-line pt-3 font-mono text-[0.72rem] text-trust-deep">
                  {s.detail}
                </span>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>

        <Reveal delay={0.1}>
          <div className="grain relative isolate mt-10 flex flex-col items-center justify-between gap-5 overflow-hidden rounded-3xl bg-navy-cinematic px-7 py-7 text-center sm:flex-row sm:text-left">
            <p className="relative z-10 text-balance text-base text-white/80">
              <span className="font-semibold text-white">Get the Doctium app.</span>{" "}
              See a verified doctor from your phone, available on iOS and Android.
            </p>
            <StoreBadges className="relative z-10 shrink-0 justify-center" />
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
