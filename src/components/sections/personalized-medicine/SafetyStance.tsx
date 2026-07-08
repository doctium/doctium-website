import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal, RevealGroup, RevealItem } from "@/components/motion/Reveal";
import { Icon } from "@/components/ui/Icon";

const stances = [
  {
    icon: "ShieldCheck",
    title: "Rules outrank the model",
    desc: "Hard clinical safety rules take precedence over any LLM output. When a rule and the model disagree, the rule wins, every time.",
  },
  {
    icon: "Lock",
    title: "Safety rails are never personalized",
    desc: "Personalization tunes thresholds and nudges. It never relaxes a safety boundary; those limits are fixed and the same for everyone.",
  },
  {
    icon: "UserCheck",
    title: "Doctor-in-the-loop, always",
    desc: "Every recommendation, hold-dose flag and risk score is surfaced to a licensed clinician. AI assists; the doctor decides.",
  },
  {
    icon: "FileBarChart",
    title: "Research data is reference-only",
    desc: "Anonymized outcomes power dashboards and research, stripped of names and contacts, used for reference and pilots, never to identify a patient.",
  },
];

export function SafetyStance() {
  return (
    <Section tone="light" id="safety">
      <Container>
        <SectionHeading
          eyebrow="Safety stance"
          title={
            <>
              Personalized, but{" "}
              <span className="text-gradient-navy">never unsafe.</span>
            </>
          }
          lede="Personalization changes how care is tuned to the individual. It never changes the safety boundaries, and it never removes the clinician from the decision."
        />

        <RevealGroup className="mt-14 grid gap-5 sm:grid-cols-2" stagger={0.1}>
          {stances.map((s) => (
            <RevealItem key={s.title}>
              <div className="lift flex h-full items-start gap-4 rounded-3xl border border-line bg-white p-6 shadow-[var(--shadow-soft)] hover:border-navy/15">
                <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-navy-50 text-navy">
                  <Icon name={s.icon} className="h-6 w-6" />
                </span>
                <div>
                  <h3 className="text-[1.05rem] font-bold text-navy">{s.title}</h3>
                  <p className="mt-2 text-[0.9rem] leading-relaxed text-muted">{s.desc}</p>
                </div>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>

        <Reveal delay={0.1}>
          <p className="mx-auto mt-12 max-w-3xl text-center text-balance text-lg text-muted">
            The same discipline runs through the whole platform:{" "}
            <span className="font-semibold text-navy">
              AI assists, recommends and monitors
            </span>
            , while licensed humans stay responsible for every final clinical decision.
          </p>
        </Reveal>
      </Container>
    </Section>
  );
}
