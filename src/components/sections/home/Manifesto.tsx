import { ArrowRight } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal, RevealGroup, RevealItem } from "@/components/motion/Reveal";
import { artifactFlow } from "@/content/data";

export function Manifesto() {
  return (
    <Section tone="canvas" id="thesis">
      <Container>
        <SectionHeading
          eyebrow="Not a traditional EHR"
          title={
            <>
              We&apos;re not digitising paperwork. We&apos;re building a{" "}
              <span className="text-gradient-navy">clinical operating system.</span>
            </>
          }
          lede="Every clinical, financial, operational and administrative workflow produces a structured artifact. Those artifacts feed intelligent closed loops, so the hospital gets smarter with every encounter."
        />

        <RevealGroup className="relative mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {/* connecting line (desktop) */}
          <div
            aria-hidden
            className="absolute left-0 right-0 top-[2.15rem] hidden h-px bg-gradient-to-r from-transparent via-navy/15 to-transparent lg:block"
          />
          {artifactFlow.map((node) => (
            <RevealItem key={node.step}>
              <div className="relative flex h-full flex-col rounded-3xl border border-line bg-white p-6 shadow-[var(--shadow-soft)]">
                <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-navy font-mono text-sm font-semibold text-white">
                  {node.step}
                </div>
                <h3 className="text-lg font-bold text-navy">{node.title}</h3>
                <p className="mt-2 text-[0.92rem] leading-relaxed text-muted">
                  {node.desc}
                </p>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>

        <Reveal delay={0.1}>
          <div className="mt-12 flex flex-col items-center gap-4 rounded-3xl bg-navy-cinematic px-6 py-7 text-center text-white sm:flex-row sm:justify-between sm:text-left">
            <p className="max-w-2xl text-balance text-base leading-relaxed text-white/85 sm:text-lg">
              Our first AI workflows solve two painful problems: doctors spending too
              much time documenting, and patients receiving generic care.
            </p>
            <a
              href="/about"
              className="link-underline inline-flex items-center gap-1.5 whitespace-nowrap font-display font-semibold text-sky"
            >
              Read the thesis <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
