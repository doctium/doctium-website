import { ArrowRight } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal, RevealGroup, RevealItem } from "@/components/motion/Reveal";
import { Icon } from "@/components/ui/Icon";
import { artifactFlow, closedLoops } from "@/content/data";

export function ArtifactModel() {
  return (
    <Section tone="light" id="model">
      <Container>
        <SectionHeading
          eyebrow="The model"
          title={
            <>
              Structured artifacts in.{" "}
              <span className="text-gradient-navy">Intelligent loops</span> out.
            </>
          }
          lede="The whole platform runs on one idea: turn every workflow into clean, structured data, then let AI assist against it, while licensed humans decide."
        />

        {/* The 4-step flow */}
        <RevealGroup
          className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
          stagger={0.08}
        >
          {artifactFlow.map((s, i) => (
            <RevealItem key={s.step}>
              <div className="lift group relative flex h-full flex-col rounded-3xl border border-line bg-white p-6 shadow-[var(--shadow-soft)] hover:border-navy/15">
                <span className="font-mono text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-trust">
                  {s.step}
                </span>
                <h3 className="mt-3 font-display text-base font-bold leading-tight text-navy">
                  {s.title}
                </h3>
                <p className="mt-2 text-[0.85rem] leading-relaxed text-muted">{s.desc}</p>
                {i < artifactFlow.length - 1 && (
                  <span className="absolute -right-3 top-1/2 hidden h-7 w-7 -translate-y-1/2 items-center justify-center rounded-full border border-line bg-white text-navy shadow-[var(--shadow-soft)] lg:flex">
                    <ArrowRight className="h-3.5 w-3.5" />
                  </span>
                )}
              </div>
            </RevealItem>
          ))}
        </RevealGroup>

        {/* The four loops */}
        <Reveal delay={0.1}>
          <p className="mx-auto mt-16 max-w-2xl text-center font-display text-lg font-semibold text-navy">
            Those artifacts feed four intelligent closed loops.
          </p>
        </Reveal>

        <RevealGroup
          className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4"
          stagger={0.08}
        >
          {closedLoops.map((loop) => (
            <RevealItem key={loop.title}>
              <div className="lift group flex h-full flex-col rounded-2xl border border-line bg-canvas p-6 hover:border-navy/15">
                <div className="flex items-center justify-between">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-navy-50 text-navy transition-colors group-hover:bg-navy group-hover:text-white">
                    <Icon name={loop.icon} className="h-5 w-5" />
                  </span>
                  <span className="font-mono text-[0.6rem] uppercase tracking-[0.16em] text-muted">
                    {loop.tag}
                  </span>
                </div>
                <h3 className="mt-4 font-display text-base font-bold text-navy">
                  {loop.title}
                </h3>
                <p className="mt-1.5 text-[0.82rem] leading-relaxed text-muted">{loop.desc}</p>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>

        <Reveal delay={0.1}>
          <div className="mx-auto mt-12 max-w-2xl rounded-3xl border border-trust/20 bg-trust-light/50 px-7 py-6 text-center">
            <p className="text-[0.95rem] leading-relaxed text-navy">
              <span className="font-semibold">AI assists, recommends, summarizes, routes and
              monitors.</span>{" "}
              Licensed humans remain responsible for every final clinical and financial decision.
            </p>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
