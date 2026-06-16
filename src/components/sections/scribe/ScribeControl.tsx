import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Badge";
import { Reveal, RevealGroup, RevealItem } from "@/components/motion/Reveal";
import { Icon } from "@/components/ui/Icon";

const provenance = [
  { icon: "Mic", label: "Captured", sub: "Consent recorded · source logged" },
  { icon: "Sparkles", label: "Drafted by AI", sub: "Structured, never autonomous" },
  { icon: "UserCheck", label: "Reviewed & edited", sub: "Clinician corrects and adds judgement" },
  { icon: "Check", label: "Approved", sub: "Enters the official record" },
];

export function ScribeControl() {
  return (
    <Section tone="light">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-[0.95fr_1.05fr]">
          <div>
            <Reveal>
              <Eyebrow>The doctor stays in control</Eyebrow>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="mt-5 text-balance text-[clamp(1.9rem,4.4vw,3rem)] font-bold leading-[1.05] text-navy">
                No AI note becomes a record until a{" "}
                <span className="text-gradient-navy">clinician approves it.</span>
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted">
                Scribe is an assistant, not an author. Every AI-generated note must be reviewed,
                edited and approved by the clinician before it enters the official patient record.
                Provenance travels with the draft — so it&apos;s always clear what was captured,
                what the AI proposed, and what the doctor decided.
              </p>
            </Reveal>
            <Reveal delay={0.16}>
              <div className="mt-7 flex items-start gap-3 rounded-2xl border border-trust/20 bg-trust-light/50 p-4">
                <Icon name="UserCheck" className="mt-0.5 h-5 w-5 shrink-0 text-trust-deep" />
                <p className="text-[0.92rem] leading-relaxed text-navy">
                  <span className="font-semibold">AI assists; the licensed clinician decides.</span>{" "}
                  The same doctor-in-the-loop principle that runs across the whole Doctium platform.
                </p>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.12}>
            <div className="relative">
              <div className="absolute -inset-6 -z-10 rounded-[2.5rem] bg-gradient-to-br from-mist to-trust-light/40 blur-2xl" />
              <div className="rounded-[2rem] border border-line bg-white p-6 shadow-[var(--shadow-card)]">
                <p className="font-mono text-[0.7rem] uppercase tracking-[0.18em] text-trust">
                  Provenance trail
                </p>
                <RevealGroup className="mt-5 space-y-3" stagger={0.08}>
                  {provenance.map((p, i) => (
                    <RevealItem key={p.label}>
                      <div className="flex items-center gap-4">
                        <div className="flex flex-col items-center">
                          <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-navy-50 text-navy">
                            <Icon name={p.icon} className="h-5 w-5" />
                          </span>
                          {i < provenance.length - 1 && (
                            <span className="mt-1 h-5 w-px bg-line" aria-hidden />
                          )}
                        </div>
                        <div className="pb-1">
                          <p className="text-[0.95rem] font-semibold text-navy">{p.label}</p>
                          <p className="text-[0.8rem] text-muted">{p.sub}</p>
                        </div>
                      </div>
                    </RevealItem>
                  ))}
                </RevealGroup>
                <div className="mt-5 flex items-center justify-between border-t border-line pt-4">
                  <span className="text-[0.72rem] text-muted">Draft · awaiting clinician review</span>
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-success/10 px-2.5 py-1 text-[0.72rem] font-semibold text-success">
                    <Icon name="Check" className="h-3.5 w-3.5" /> Review &amp; approve
                  </span>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}
