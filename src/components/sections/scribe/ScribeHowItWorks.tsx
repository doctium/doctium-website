import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal, RevealGroup, RevealItem } from "@/components/motion/Reveal";
import { Icon } from "@/components/ui/Icon";

const steps = [
  {
    n: "01",
    icon: "Mic",
    title: "Consent & capture",
    desc: "With explicit patient consent, Scribe captures the encounter: from chat, dictation or a consented recording.",
  },
  {
    n: "02",
    icon: "LayoutList",
    title: "Structured draft generated",
    desc: "The visit is organised into history, examination, assessment, plan, referrals, orders, billing cues and patient instructions.",
  },
  {
    n: "03",
    icon: "UserCheck",
    title: "Clinician reviews & edits",
    desc: "The doctor reads the draft, corrects anything, and adds clinical judgement the AI cannot make on its own.",
  },
  {
    n: "04",
    icon: "Check",
    title: "Approved into the record",
    desc: "Only once the clinician approves does the note become part of the official patient record, with provenance attached.",
  },
];

export function ScribeHowItWorks() {
  return (
    <Section tone="light" id="how">
      <Container>
        <SectionHeading
          eyebrow="How it works"
          title={
            <>
              From conversation to{" "}
              <span className="text-gradient-navy">approved note</span>, in four steps.
            </>
          }
          lede="Scribe drafts; the clinician decides. The doctor is in the loop at every step that matters."
        />

        <div className="relative mt-16">
          {/* connecting line */}
          <div
            className="absolute left-0 right-0 top-[2.1rem] hidden h-px bg-gradient-to-r from-transparent via-line to-transparent lg:block"
            aria-hidden
          />
          <RevealGroup className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4" stagger={0.1}>
            {steps.map((s) => (
              <RevealItem key={s.n}>
                <div className="relative flex h-full flex-col">
                  <div className="flex items-center gap-4">
                    <span className="relative z-10 inline-flex h-[4.2rem] w-[4.2rem] shrink-0 items-center justify-center rounded-2xl border border-line bg-white text-navy shadow-[var(--shadow-soft)]">
                      <Icon name={s.icon} className="h-6 w-6 text-trust-deep" />
                    </span>
                    <span className="font-mono text-sm font-semibold tracking-[0.18em] text-faint">
                      {s.n}
                    </span>
                  </div>
                  <h3 className="mt-5 text-[1.05rem] font-bold leading-tight text-navy">
                    {s.title}
                  </h3>
                  <p className="mt-2 text-[0.9rem] leading-relaxed text-muted">{s.desc}</p>
                </div>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>

        <Reveal delay={0.1}>
          <div className="mt-12 flex items-start gap-3 rounded-2xl border border-trust/20 bg-trust-light/50 p-5">
            <Icon name="ShieldCheck" className="mt-0.5 h-5 w-5 shrink-0 text-trust-deep" />
            <p className="text-[0.95rem] leading-relaxed text-navy">
              <span className="font-semibold">Built into the EHR, not bolted on.</span> Scribe lives
              inside the Doctium Hospital OS, so the structured draft flows straight into the chart,
              the orders and the billing pipeline the moment the clinician approves it.
            </p>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
