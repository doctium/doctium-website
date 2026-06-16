import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal, RevealGroup, RevealItem } from "@/components/motion/Reveal";
import { Icon } from "@/components/ui/Icon";
import { scribeOutcomes } from "@/content/data";

const outcomeIcons = [
  "FileText",
  "ClipboardList",
  "HeartPulse",
  "Wallet",
  "Dna",
];

export function ScribeOutcomes() {
  return (
    <Section tone="canvas" id="outcomes">
      <Container>
        <SectionHeading
          eyebrow="Outcomes"
          title={
            <>
              Lighter on clinicians.{" "}
              <span className="text-gradient-navy">Richer for the hospital.</span>
            </>
          }
          lede="Better documentation is not just convenience — it compounds into care, revenue and the structured data that future personalized medicine depends on."
        />

        <RevealGroup
          className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
          stagger={0.08}
        >
          {scribeOutcomes.map((o, i) => (
            <RevealItem key={o}>
              <div className="lift group flex h-full items-start gap-4 rounded-3xl border border-line bg-white p-6 shadow-[var(--shadow-soft)] hover:border-navy/15">
                <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-navy-50 text-navy transition-colors group-hover:bg-navy group-hover:text-white">
                  <Icon name={outcomeIcons[i % outcomeIcons.length]} className="h-5 w-5" />
                </span>
                <p className="text-[0.98rem] font-semibold leading-snug text-navy">{o}</p>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>

        <Reveal delay={0.1}>
          <p className="mx-auto mt-12 max-w-3xl text-balance text-center text-lg text-muted">
            Every approved note adds to a clean, structured clinical history —{" "}
            <span className="font-semibold text-navy">the foundation for continuity of care
            and personalized medicine</span> across the whole Doctium platform.
          </p>
        </Reveal>
      </Container>
    </Section>
  );
}
