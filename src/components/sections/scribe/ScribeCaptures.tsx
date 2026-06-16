import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { AuroraBackground } from "@/components/motion/AuroraBackground";
import { CursorSpotlight } from "@/components/motion/CursorSpotlight";
import { Reveal, RevealGroup, RevealItem } from "@/components/motion/Reveal";
import { Icon } from "@/components/ui/Icon";
import { scribeNoteSections, scribeBenefits } from "@/content/data";

export function ScribeCaptures() {
  return (
    <Section tone="navy" id="captures">
      <AuroraBackground />
      <CursorSpotlight />
      <Container className="relative z-10">
        <SectionHeading
          tone="dark"
          eyebrow="What it captures"
          title={
            <>
              One conversation, organised into{" "}
              <span className="text-gradient">eight clinical sections.</span>
            </>
          }
          lede="Scribe doesn't produce a wall of text. It produces a structured draft — every part of the visit in its place, ready for the clinician to review."
        />

        {/* the 8 structured note sections */}
        <RevealGroup
          className="mt-14 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4"
          stagger={0.05}
        >
          {scribeNoteSections.map((s, i) => (
            <RevealItem key={s}>
              <div className="glass-dark lift flex h-full items-center gap-3 rounded-2xl p-4 hover:border-white/25">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-trust/20 font-mono text-[0.7rem] font-semibold text-sky">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="text-[0.9rem] font-medium leading-tight text-white">{s}</span>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>

        {/* the benefits */}
        <RevealGroup
          className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-4"
          stagger={0.08}
        >
          {scribeBenefits.map((b) => (
            <RevealItem key={b.title}>
              <div className="glass-dark lift flex h-full flex-col rounded-3xl p-6 hover:border-white/25">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-trust/15 text-sky">
                  <Icon name={b.icon} className="h-6 w-6" />
                </span>
                <h3 className="mt-5 text-[1.05rem] font-bold text-white">{b.title}</h3>
                <p className="mt-2 text-[0.9rem] leading-relaxed text-white/65">{b.desc}</p>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>
      </Container>
    </Section>
  );
}
