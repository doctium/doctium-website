import { ArrowRight, Check, Sparkles, Mic } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Badge";
import { Reveal, RevealGroup, RevealItem } from "@/components/motion/Reveal";
import { scribeNoteSections, scribeOutcomes } from "@/content/data";

export function ScribeSection() {
  return (
    <Section tone="light" id="scribe">
      <Container>
        <div className="grid items-center gap-14 lg:grid-cols-2">
          {/* Copy */}
          <div>
            <Reveal>
              <Eyebrow>Doctium Scribe</Eyebrow>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="mt-5 text-balance text-[clamp(1.9rem,4.4vw,3rem)] font-bold leading-[1.05] text-navy">
                Give doctors back the exam room.
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted">
                An ambient clinical documentation assistant built into the EHR.
                With patient consent, Scribe captures the encounter and generates a
                structured, reviewable draft — so clinicians can focus fully on the
                patient, not the keyboard.
              </p>
            </Reveal>

            <Reveal delay={0.16}>
              <div className="mt-7 flex items-start gap-3 rounded-2xl border border-trust/20 bg-trust-light/50 p-4">
                <Check className="mt-0.5 h-5 w-5 shrink-0 text-trust-deep" />
                <p className="text-[0.92rem] leading-relaxed text-navy">
                  <span className="font-semibold">The doctor stays in control.</span> Every
                  AI-generated note must be reviewed, edited and approved by the clinician
                  before it becomes part of the official patient record.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.22}>
              <a
                href="/scribe"
                className="link-underline mt-7 inline-flex items-center gap-1.5 font-display font-semibold text-navy"
              >
                How Doctium Scribe works <ArrowRight className="h-4 w-4" />
              </a>
            </Reveal>
          </div>

          {/* Visual: conversation → structured note */}
          <Reveal delay={0.1}>
            <div className="relative">
              <div className="absolute -inset-6 -z-10 rounded-[2.5rem] bg-gradient-to-br from-mist to-trust-light/40 blur-2xl" />
              <div className="rounded-[2rem] border border-line bg-white p-6 shadow-[var(--shadow-card)]">
                {/* transcript */}
                <div className="flex items-center gap-2 text-xs font-medium text-muted">
                  <Mic className="h-4 w-4 text-trust" />
                  <span className="font-mono uppercase tracking-[0.16em] text-trust">
                    Consultation · consented
                  </span>
                </div>
                <div className="mt-3 space-y-2">
                  <p className="w-fit rounded-2xl rounded-tl-md bg-mist px-3.5 py-2 text-[0.82rem] text-body">
                    &ldquo;I&apos;ve had a cough for three days and a mild fever…&rdquo;
                  </p>
                  <p className="ml-auto w-fit rounded-2xl rounded-tr-md bg-navy px-3.5 py-2 text-[0.82rem] text-white">
                    &ldquo;Any chest pain or breathlessness?&rdquo;
                  </p>
                </div>

                {/* divider */}
                <div className="my-5 flex items-center gap-3">
                  <div className="h-px flex-1 bg-line" />
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-navy px-3 py-1 text-[0.7rem] font-semibold text-white">
                    <Sparkles className="h-3.5 w-3.5 text-sky" /> Structured by Scribe
                  </span>
                  <div className="h-px flex-1 bg-line" />
                </div>

                {/* structured sections */}
                <RevealGroup className="grid grid-cols-2 gap-2" stagger={0.05}>
                  {scribeNoteSections.map((s) => (
                    <RevealItem key={s}>
                      <div className="flex items-center gap-2 rounded-xl border border-line bg-canvas px-3 py-2">
                        <Check className="h-3.5 w-3.5 shrink-0 text-success" />
                        <span className="text-[0.78rem] font-medium text-navy">{s}</span>
                      </div>
                    </RevealItem>
                  ))}
                </RevealGroup>

                <div className="mt-4 flex items-center justify-between border-t border-line pt-4">
                  <span className="text-[0.72rem] text-muted">
                    Draft · awaiting clinician review
                  </span>
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-success/10 px-2.5 py-1 text-[0.72rem] font-semibold text-success">
                    <Check className="h-3.5 w-3.5" /> Review &amp; approve
                  </span>
                </div>
              </div>
            </div>
          </Reveal>
        </div>

        {/* outcomes strip */}
        <RevealGroup className="mt-14 flex flex-wrap justify-center gap-3" stagger={0.06}>
          {scribeOutcomes.map((o) => (
            <RevealItem key={o}>
              <span className="inline-flex items-center gap-2 rounded-full border border-line bg-white px-4 py-2 text-[0.85rem] text-body shadow-[var(--shadow-soft)]">
                <span className="h-1.5 w-1.5 rounded-full bg-trust" />
                {o}
              </span>
            </RevealItem>
          ))}
        </RevealGroup>
      </Container>
    </Section>
  );
}
