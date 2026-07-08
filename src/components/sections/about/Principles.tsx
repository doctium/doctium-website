import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { AuroraBackground } from "@/components/motion/AuroraBackground";
import { CursorSpotlight } from "@/components/motion/CursorSpotlight";
import { RevealGroup, RevealItem } from "@/components/motion/Reveal";
import { Icon } from "@/components/ui/Icon";

const principles = [
  {
    icon: "UserCheck",
    title: "Doctor-in-the-loop",
    desc: "AI assists, recommends, summarizes, routes and monitors. Licensed humans remain responsible for every final clinical and financial decision.",
  },
  {
    icon: "MapPin",
    title: "Built for Africa, Nigeria-first",
    desc: "Designed around how Nigerian hospitals, doctors and patients actually work, then built to scale across the continent, with seven languages and local payments.",
  },
  {
    icon: "FileJson",
    title: "Interoperable, no lock-in",
    desc: "Patient records export as standards-based FHIR R4 bundles. We build to connect to the wider health system, never to trap your data.",
  },
  {
    icon: "ShieldCheck",
    title: "Safety-first",
    desc: "Recording is consent-gated and audit-logged, with least-privilege access. Deterministic rules outrank the model: guardrails win when they disagree.",
  },
];

export function Principles() {
  return (
    <Section tone="navy" id="principles">
      <AuroraBackground />
      <CursorSpotlight />
      <Container className="relative z-10">
        <SectionHeading
          tone="dark"
          eyebrow="What we believe"
          title={
            <>
              The principles we <span className="text-gradient">won&apos;t bend on.</span>
            </>
          }
          lede="An AI-native platform in healthcare only earns trust if the non-negotiables are clear. These are ours."
        />

        <RevealGroup className="mt-14 grid gap-5 sm:grid-cols-2" stagger={0.1}>
          {principles.map((p) => (
            <RevealItem key={p.title}>
              <div className="glass-dark lift flex h-full gap-5 rounded-3xl p-7 hover:border-white/25">
                <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-trust/15 text-sky">
                  <Icon name={p.icon} className="h-6 w-6" />
                </span>
                <div>
                  <h3 className="font-display text-lg font-bold text-white">{p.title}</h3>
                  <p className="mt-2 text-[0.9rem] leading-relaxed text-white/65">{p.desc}</p>
                </div>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>
      </Container>
    </Section>
  );
}
