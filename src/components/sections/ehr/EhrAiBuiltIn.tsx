import { ArrowRight, Mic, Dna } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { AuroraBackground } from "@/components/motion/AuroraBackground";
import { CursorSpotlight } from "@/components/motion/CursorSpotlight";
import { RevealGroup, RevealItem } from "@/components/motion/Reveal";

const teasers = [
  {
    icon: Mic,
    eyebrow: "Doctium Scribe",
    title: "Ambient clinical documentation.",
    desc: "With patient consent, Scribe captures the consultation and drafts a structured, reviewable note: history, exam, assessment, plan, orders and billing cues. The clinician reviews and approves before anything enters the record.",
    href: "/scribe",
    cta: "How Doctium Scribe works",
  },
  {
    icon: Dna,
    eyebrow: "Personalized Medicine",
    title: "Care that adapts to the individual.",
    desc: "Genotype-aware protocols, an explainable risk engine and a daily care agent, starting with sickle cell disease, where personalization genuinely changes the treatment. The same structured record makes it possible.",
    href: "/personalized-medicine",
    cta: "Explore personalized medicine",
  },
];

export function EhrAiBuiltIn() {
  return (
    <Section tone="ink" id="ai">
      <AuroraBackground />
      <CursorSpotlight />
      <Container className="relative z-10">
        <SectionHeading
          tone="dark"
          eyebrow="AI, built in"
          title={
            <>
              Intelligence isn&apos;t bolted on.{" "}
              <span className="text-gradient">It lives in the record.</span>
            </>
          }
          lede="Two flagship AI workflows run on the OS today, ambient documentation and personalized medicine, both designed doctor-in-the-loop from the first line of code."
        />

        <RevealGroup className="mt-14 grid gap-6 md:grid-cols-2" stagger={0.12}>
          {teasers.map((t) => {
            const Glyph = t.icon;
            return (
              <RevealItem key={t.title}>
                <a
                  href={t.href}
                  className="glass-dark lift group flex h-full flex-col rounded-[2rem] p-8 hover:border-white/25"
                >
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-trust/15 text-sky">
                    <Glyph className="h-6 w-6" strokeWidth={1.75} />
                  </span>
                  <span className="mt-6 font-mono text-[0.66rem] uppercase tracking-[0.18em] text-sky">
                    {t.eyebrow}
                  </span>
                  <h3 className="mt-2 text-[1.4rem] font-bold leading-tight text-white">
                    {t.title}
                  </h3>
                  <p className="mt-3 flex-1 text-[0.95rem] leading-relaxed text-white/65">
                    {t.desc}
                  </p>
                  <span className="link-underline mt-6 inline-flex items-center gap-1.5 font-display font-semibold text-sky">
                    {t.cta}
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </a>
              </RevealItem>
            );
          })}
        </RevealGroup>
      </Container>
    </Section>
  );
}
