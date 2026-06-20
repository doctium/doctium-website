import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Badge";
import { AuroraBackground } from "@/components/motion/AuroraBackground";
import type { LegalBlock } from "@/content/legal";

/**
 * Shared layout for the legal pages (/privacy, /terms). Dark hero (header
 * legibility) + a clean prose column rendered from structured LegalBlock[]
 * (h2 section headings + paragraphs), sourced from src/content/legal.ts.
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
  blocks: LegalBlock[];
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
          {blocks.map((b, i) =>
            b.h === 1 ? (
              <h2 key={i} className="mt-10 mb-3 text-2xl font-bold text-navy">
                {b.text}
              </h2>
            ) : b.h === 2 ? (
              <h2 key={i} className="mt-9 mb-2 text-xl font-bold text-navy first:mt-0">
                {b.text}
              </h2>
            ) : (
              <p key={i} className="mt-3 leading-relaxed text-muted">
                {b.text}
              </p>
            ),
          )}
        </Container>
      </section>
    </>
  );
}
