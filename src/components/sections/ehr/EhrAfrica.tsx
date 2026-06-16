import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { RevealGroup, RevealItem } from "@/components/motion/Reveal";
import { Icon } from "@/components/ui/Icon";
import { africaPoints } from "@/content/data";

export function EhrAfrica() {
  return (
    <Section tone="canvas" id="africa">
      <Container>
        <SectionHeading
          eyebrow="Built for Africa"
          title="Designed for how African hospitals actually run."
          lede="Not a Western EHR with the labels changed. Doctium is built Nigeria-first — for real networks, real workflows and real payment rails — then engineered to scale across the continent."
        />

        <RevealGroup className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4" stagger={0.08}>
          {africaPoints.map((p) => (
            <RevealItem key={p.title}>
              <div className="lift flex h-full flex-col rounded-3xl border border-line bg-white p-6 hover:border-navy/15">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-navy text-sky">
                  <Icon name={p.icon} className="h-6 w-6" />
                </span>
                <h3 className="mt-5 text-[1.05rem] font-bold text-navy">{p.title}</h3>
                <p className="mt-2 text-[0.9rem] leading-relaxed text-muted">{p.desc}</p>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>
      </Container>
    </Section>
  );
}
