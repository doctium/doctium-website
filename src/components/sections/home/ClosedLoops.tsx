import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { AuroraBackground } from "@/components/motion/AuroraBackground";
import { CursorSpotlight } from "@/components/motion/CursorSpotlight";
import { Reveal, RevealGroup, RevealItem } from "@/components/motion/Reveal";
import { Icon } from "@/components/ui/Icon";
import { closedLoops } from "@/content/data";

export function ClosedLoops() {
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
              Structured artifacts in.{" "}
              <span className="text-gradient">Better outcomes</span> out.
            </>
          }
          lede="AI assists, recommends, summarizes, routes and monitors against the hospital's own data — while licensed humans stay responsible for every final clinical and financial decision."
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
          <p className="mx-auto mt-12 max-w-3xl text-center text-balance text-lg text-white/70">
            Together these loops help hospitals{" "}
            <span className="text-white">improve care quality, reduce documentation burden,
            prevent revenue leakage, speed up operations</span>{" "}
            — and prepare for personalized medicine.
          </p>
        </Reveal>
      </Container>
    </Section>
  );
}
