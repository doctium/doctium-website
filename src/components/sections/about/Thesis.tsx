import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Badge";
import { AuroraBackground } from "@/components/motion/AuroraBackground";
import { CursorSpotlight } from "@/components/motion/CursorSpotlight";
import { Reveal } from "@/components/motion/Reveal";

export function Thesis() {
  return (
    <Section tone="navy" id="thesis">
      <AuroraBackground />
      <CursorSpotlight />
      <Container size="narrow" className="relative z-10">
        <div className="flex flex-col items-center text-center">
          <Reveal>
            <Eyebrow tone="light">The thesis</Eyebrow>
          </Reveal>

          <Reveal delay={0.05}>
            <p className="mt-8 font-display text-balance text-[clamp(1.7rem,3.6vw,2.8rem)] font-bold leading-[1.18] tracking-[-0.01em] text-white">
              Doctium is <span className="text-gradient">not just building an EHR.</span> We are
              building an AI-native clinical operating system for African hospitals.
            </p>
          </Reveal>
        </div>

        <Reveal delay={0.12}>
          <div className="mx-auto mt-12 max-w-3xl space-y-6 text-lg leading-relaxed text-white/75">
            <p>
              Our first AI workflows solve two painful problems: doctors spending too much time
              documenting, and patients receiving generic care.{" "}
              <span className="text-white">Doctium Scribe</span> gives doctors back the exam room
              by turning consultations into structured clinical notes, while our{" "}
              <span className="text-white">personalized-medicine agents</span> use structured
              patient data, diagnostics and genetics to guide patient-specific treatment decisions.
            </p>
            <p>
              Every clinical, financial, operational and administrative workflow will produce a
              structured artifact. These artifacts feed{" "}
              <span className="text-white">intelligent closed loops</span> that help hospitals
              improve care quality, reduce documentation burden, prevent revenue leakage, speed up
              operations, and prepare for personalized medicine.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.18}>
          <div className="mx-auto mt-12 max-w-3xl rounded-3xl border-l-2 border-sky/60 bg-white/[0.04] px-7 py-7">
            <p className="font-display text-balance text-xl font-semibold leading-relaxed text-white">
              &ldquo;AI will assist, recommend, summarize, route and monitor — while licensed
              humans remain responsible for final clinical and financial decisions.&rdquo;
            </p>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
