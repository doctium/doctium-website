import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal, RevealGroup, RevealItem } from "@/components/motion/Reveal";
import { Icon } from "@/components/ui/Icon";

const reasons = [
  {
    icon: "MapPin",
    title: "Nigeria is the global epicenter",
    desc: "More people live with sickle cell disease in Nigeria than anywhere else on earth. The need is concentrated exactly where we build.",
  },
  {
    icon: "FlaskConical",
    title: "Genotype testing is cheap & normalized",
    desc: "SS, SC and AS genotyping is routine and affordable — so genotype-aware care is realistic at scale, not aspirational.",
  },
  {
    icon: "TestTube",
    title: "Hydroxyurea titration is truly n-of-1",
    desc: "The right dose is found per patient through dose-response and CBC monitoring — the textbook definition of personalized medicine.",
  },
  {
    icon: "Database",
    title: "The data already exists",
    desc: "Genotype already lives on the patient health profile, so the same structured record powers both the app and the hospital EHR.",
  },
];

export function WhySickleCell() {
  return (
    <Section tone="canvas" id="why-sickle-cell">
      <Container>
        <SectionHeading
          align="left"
          eyebrow="Why we started here"
          title={
            <>
              Sickle cell is where personalization{" "}
              <span className="text-gradient-navy">changes the treatment.</span>
            </>
          }
          lede="Personalized medicine only matters when the individual's data genuinely alters the decision. Sickle cell disease is one of the clearest cases — and in Nigeria, it is also the most urgent."
        />

        <RevealGroup
          className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4"
          stagger={0.08}
        >
          {reasons.map((r) => (
            <RevealItem key={r.title}>
              <div className="lift flex h-full flex-col rounded-3xl border border-line bg-white p-6 shadow-[var(--shadow-soft)] hover:border-navy/15">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-navy-50 text-navy">
                  <Icon name={r.icon} className="h-6 w-6" />
                </span>
                <h3 className="mt-5 text-[1.05rem] font-bold leading-tight text-navy">
                  {r.title}
                </h3>
                <p className="mt-2 text-[0.9rem] leading-relaxed text-muted">{r.desc}</p>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>

        <Reveal delay={0.1}>
          <div className="grain relative isolate mt-12 overflow-hidden rounded-3xl bg-navy-cinematic p-7 md:p-8">
            <p className="font-mono text-[0.7rem] uppercase tracking-[0.2em] text-sky">
              The principle
            </p>
            <p className="mt-3 text-balance text-lg leading-relaxed text-white/85 md:text-xl">
              We do not personalize for its own sake. We personalize{" "}
              <span className="font-semibold text-white">
                only where the individual&apos;s genetics, diagnostics and history
                should move the clinical decision
              </span>{" "}
              — and we prove the case before we expand to the next condition.
            </p>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
