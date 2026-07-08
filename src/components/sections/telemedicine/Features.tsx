import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { RevealGroup, RevealItem } from "@/components/motion/Reveal";
import { Icon } from "@/components/ui/Icon";
import { telemedFeatures } from "@/content/data";

export function Features() {
  return (
    <Section tone="light" id="features">
      <Container>
        <SectionHeading
          eyebrow="Everything in one app"
          title={
            <>
              A full clinic, <span className="text-gradient-navy">in your pocket.</span>
            </>
          }
          lede="Verified doctors, AI triage, secure consults, signed prescriptions and chronic-care programs, designed for the way patients in Nigeria actually live."
        />

        <RevealGroup
          className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
          stagger={0.07}
        >
          {telemedFeatures.map((f) => (
            <RevealItem key={f.title}>
              <div className="lift group flex h-full flex-col rounded-3xl border border-line bg-white p-7 shadow-[var(--shadow-soft)] hover:border-trust/30">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-trust-light text-trust-deep transition-colors group-hover:bg-trust group-hover:text-white">
                  <Icon name={f.icon} className="h-6 w-6" />
                </span>
                <h3 className="mt-5 text-lg font-bold text-navy">{f.title}</h3>
                <p className="mt-2 text-[0.9rem] leading-relaxed text-muted">{f.desc}</p>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>
      </Container>
    </Section>
  );
}
