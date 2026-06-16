import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Badge";
import { Reveal } from "@/components/motion/Reveal";

export function ScribeProblem() {
  return (
    <Section tone="canvas">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <Reveal>
              <Eyebrow>The documentation burden</Eyebrow>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="mt-5 text-balance text-[clamp(1.9rem,4.4vw,3rem)] font-bold leading-[1.05] text-navy">
                The hardest part of a consultation shouldn&apos;t be the{" "}
                <span className="text-gradient-navy">typing.</span>
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted">
                Clinicians spend hours every day turning conversations into notes — splitting
                attention between the patient and the keyboard. Charts stay thin, billing cues
                get missed, and the record never quite reflects what happened in the room.
              </p>
            </Reveal>
            <Reveal delay={0.16}>
              <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted">
                Scribe lifts that weight. It listens with consent, drafts the structure, and hands
                a complete, reviewable note back to the doctor — who stays fully in control.
              </p>
            </Reveal>
          </div>

          <Reveal delay={0.12}>
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                { stat: "Eyes up", label: "Attention back on the patient, not the screen." },
                { stat: "One pass", label: "Capture the encounter once, structured from the start." },
                { stat: "Fuller charts", label: "History, exam and plan, consistently documented." },
                { stat: "No leakage", label: "Billing cues surfaced inside the same draft." },
              ].map((c) => (
                <div
                  key={c.stat}
                  className="rounded-2xl border border-line bg-white p-5 shadow-[var(--shadow-soft)]"
                >
                  <p className="font-display text-xl font-bold text-navy">{c.stat}</p>
                  <p className="mt-2 text-[0.88rem] leading-relaxed text-muted">{c.label}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}
