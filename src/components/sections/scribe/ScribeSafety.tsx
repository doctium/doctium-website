import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { AuroraBackground } from "@/components/motion/AuroraBackground";
import { CursorSpotlight } from "@/components/motion/CursorSpotlight";
import { RevealGroup, RevealItem } from "@/components/motion/Reveal";
import { Icon } from "@/components/ui/Icon";

const safety = [
  {
    icon: "ShieldCheck",
    title: "Consent-gated capture",
    desc: "Scribe only records or processes an encounter with explicit patient consent; consent is captured before anything else.",
  },
  {
    icon: "Lock",
    title: "Access-logged",
    desc: "Every AI read of a recording is access-logged, so it's always auditable who, or what, touched a sensitive encounter.",
  },
  {
    icon: "FileSignature",
    title: "Rules outrank the model",
    desc: "Clinical and policy rules take precedence over the AI. The model proposes; deterministic safeguards constrain it.",
  },
  {
    icon: "UserCheck",
    title: "No autonomous prescribing",
    desc: "Scribe never prescribes, orders or acts on its own. It drafts, and the clinician approves every clinical action.",
  },
];

export function ScribeSafety() {
  return (
    <Section tone="navy" id="safety">
      <AuroraBackground />
      <CursorSpotlight />
      <Container className="relative z-10">
        <SectionHeading
          tone="dark"
          eyebrow="Safety & privacy"
          title={
            <>
              Built to be{" "}
              <span className="text-gradient">trusted with the encounter.</span>
            </>
          }
          lede="Ambient documentation only works if it is private, auditable and firmly under clinical control. That is the default, not an add-on."
        />

        <RevealGroup
          className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4"
          stagger={0.08}
        >
          {safety.map((s) => (
            <RevealItem key={s.title}>
              <div className="glass-dark lift flex h-full flex-col rounded-3xl p-6 hover:border-white/25">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-trust/15 text-sky">
                  <Icon name={s.icon} className="h-6 w-6" />
                </span>
                <h3 className="mt-5 text-[1.05rem] font-bold text-white">{s.title}</h3>
                <p className="mt-2 text-[0.9rem] leading-relaxed text-white/65">{s.desc}</p>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>

        <RevealGroup className="mt-12 flex flex-wrap justify-center gap-3" stagger={0.06}>
          {[
            "Doctor approval required",
            "Provenance on every draft",
            "Least-privilege access",
            "Encrypted records",
          ].map((chip) => (
            <RevealItem key={chip}>
              <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-[0.85rem] text-white/80">
                <span className="h-1.5 w-1.5 rounded-full bg-sky" />
                {chip}
              </span>
            </RevealItem>
          ))}
        </RevealGroup>
      </Container>
    </Section>
  );
}
