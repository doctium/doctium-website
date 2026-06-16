import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { AuroraBackground } from "@/components/motion/AuroraBackground";
import { CursorSpotlight } from "@/components/motion/CursorSpotlight";
import { Reveal, RevealGroup, RevealItem } from "@/components/motion/Reveal";
import { Icon } from "@/components/ui/Icon";
import { closedLoops } from "@/content/data";

export function EhrClosedLoops() {
  return (
    <Section tone="navy" id="loops">
      <AuroraBackground />
      <CursorSpotlight />
      <Container className="relative z-10">
        <SectionHeading
          tone="dark"
          eyebrow="Intelligent closed loops"
          title={
            <>
              Four loops the OS{" "}
              <span className="text-gradient">closes</span> by default.
            </>
          }
          lede="Care quality, documentation burden, revenue integrity and operational speed — each one fed by the hospital's own structured artifacts, in real time."
        />

        <RevealGroup className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4" stagger={0.1}>
          {closedLoops.map((loop) => (
            <RevealItem key={loop.title}>
              <div className="glass-dark lift flex h-full flex-col rounded-3xl p-6 hover:border-white/25">
                <div className="flex items-center justify-between">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-trust/15 text-sky">
                    <Icon name={loop.icon} className="h-6 w-6" />
                  </span>
                  <span className="font-mono text-[0.62rem] uppercase tracking-[0.16em] text-white/45">
                    {loop.tag}
                  </span>
                </div>
                <h3 className="mt-5 text-lg font-bold text-white">{loop.title}</h3>
                <p className="mt-2 text-[0.9rem] leading-relaxed text-white/65">
                  {loop.desc}
                </p>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>

        <Reveal delay={0.1}>
          <div className="mx-auto mt-12 flex max-w-2xl items-center justify-center gap-3 rounded-full border border-white/12 bg-white/5 px-6 py-3 text-center">
            <span className="h-2 w-2 shrink-0 animate-pulse rounded-full bg-sky" />
            <p className="text-balance text-[0.95rem] text-white/80">
              <span className="font-semibold text-white">AI assists; licensed humans decide.</span>{" "}
              Every loop surfaces to a clinician or administrator — it never acts alone.
            </p>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
