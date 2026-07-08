import { ArrowRight, FileText, Dna } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal, RevealGroup, RevealItem } from "@/components/motion/Reveal";

const problems = [
  {
    icon: FileText,
    accent: "from-trust/15 to-trust/0 text-trust",
    eyebrow: "Problem 01",
    problem: "Doctors spend too much time documenting.",
    answer: "Doctium Scribe",
    desc: "With patient consent, Scribe turns the consultation into a structured, reviewable clinical note, so clinicians focus fully on the patient, not the keyboard.",
    href: "/scribe",
    cta: "How Scribe works",
  },
  {
    icon: Dna,
    accent: "from-sky/25 to-sky/0 text-navy",
    eyebrow: "Problem 02",
    problem: "Patients receive generic care.",
    answer: "Personalized-medicine agents",
    desc: "Our agents use structured patient data, diagnostics and genetics to guide patient-specific treatment decisions, starting with sickle cell disease, where personalization genuinely changes the treatment.",
    href: "/personalized-medicine",
    cta: "Explore personalized medicine",
  },
];

export function TwoProblems() {
  return (
    <Section tone="canvas" id="two-problems">
      <Container>
        <SectionHeading
          eyebrow="Two problems first"
          title={
            <>
              We started where AI{" "}
              <span className="text-gradient-navy">changes the outcome.</span>
            </>
          }
          lede="Two painful, universal problems in clinical care, and the first AI workflows we built to solve them."
        />

        <RevealGroup className="mt-14 grid gap-6 md:grid-cols-2" stagger={0.1}>
          {problems.map((p) => (
            <RevealItem key={p.answer}>
              <a
                href={p.href}
                className="lift group flex h-full flex-col rounded-3xl border border-line bg-white p-8 shadow-[var(--shadow-soft)] hover:border-navy/15 hover:shadow-[var(--shadow-card)]"
              >
                <div className="flex items-center justify-between">
                  <span
                    className={`inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br ring-1 ring-inset ring-navy/5 ${p.accent}`}
                  >
                    <p.icon className="h-6 w-6" strokeWidth={1.75} />
                  </span>
                  <span className="font-mono text-[0.62rem] uppercase tracking-[0.16em] text-muted">
                    {p.eyebrow}
                  </span>
                </div>
                <p className="mt-6 font-display text-lg font-semibold text-navy">
                  {p.problem}
                </p>
                <div className="mt-4 flex items-center gap-2">
                  <span className="h-px w-6 bg-trust" />
                  <span className="font-display text-base font-bold text-trust-deep">
                    {p.answer}
                  </span>
                </div>
                <p className="mt-3 flex-1 text-[0.95rem] leading-relaxed text-muted">
                  {p.desc}
                </p>
                <span className="link-underline mt-6 inline-flex items-center gap-1.5 font-display font-semibold text-navy">
                  {p.cta}
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </span>
              </a>
            </RevealItem>
          ))}
        </RevealGroup>
      </Container>
    </Section>
  );
}
