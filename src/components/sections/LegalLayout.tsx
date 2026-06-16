import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Badge";
import { AuroraBackground } from "@/components/motion/AuroraBackground";

type Block = { heading: string; body: string[] };

/**
 * Shared layout for the simple legal stub pages (/privacy, /terms).
 * Dark hero (header legibility) + a clean prose column. The copy is a
 * placeholder template — replace with reviewed legal text before launch.
 */
export function LegalLayout({
  eyebrow,
  title,
  intro,
  updated,
  blocks,
}: {
  eyebrow: string;
  title: string;
  intro: string;
  updated: string;
  blocks: Block[];
}) {
  return (
    <>
      <section className="grain relative isolate overflow-hidden bg-navy-cinematic pt-[var(--header-h)] text-white">
        <AuroraBackground />
        <Container className="relative z-10 py-20 md:py-28">
          <Eyebrow tone="light">{eyebrow}</Eyebrow>
          <h1 className="mt-5 max-w-3xl text-balance text-[clamp(2.1rem,5vw,3.4rem)] font-extrabold leading-[1.04] text-white">
            {title}
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-white/70">{intro}</p>
          <p className="mt-6 font-mono text-xs uppercase tracking-[0.2em] text-sky">
            Last updated · {updated}
          </p>
        </Container>
      </section>

      <section className="bg-white py-16 md:py-24">
        <Container size="narrow">
          <div className="rounded-2xl border border-warning/30 bg-warning/5 p-4 text-sm text-body">
            <strong className="font-semibold text-navy">Template notice:</strong> This is a
            placeholder document to be replaced with your organization&apos;s reviewed legal
            text before launch.
          </div>
          <div className="mt-10 space-y-10">
            {blocks.map((b) => (
              <div key={b.heading}>
                <h2 className="text-xl font-bold text-navy">{b.heading}</h2>
                {b.body.map((p, i) => (
                  <p key={i} className="mt-3 leading-relaxed text-muted">
                    {p}
                  </p>
                ))}
              </div>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
