import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { AuroraBackground } from "@/components/motion/AuroraBackground";
import { Reveal, RevealGroup, RevealItem } from "@/components/motion/Reveal";
import { Icon } from "@/components/ui/Icon";
import { scdFeatures } from "@/content/data";

export function Capabilities() {
  return (
    <Section tone="ink" id="capabilities">
      <AuroraBackground />
      <Container className="relative z-10">
        <SectionHeading
          tone="dark"
          eyebrow="What the agents do"
          title={
            <>
              A complete <span className="text-gradient">sickle cell</span> care system.
            </>
          }
          lede="Built and running for the telemedicine side today, doctors use it, the admin panel tracks outcomes, and being brought into the hospital EHR next."
        />

        <RevealGroup
          className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
          stagger={0.08}
        >
          {scdFeatures.map((f) => (
            <RevealItem key={f.title}>
              <div className="glass-dark lift flex h-full flex-col rounded-3xl p-6 hover:border-white/25">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-trust/15 text-sky">
                  <Icon name={f.icon} className="h-6 w-6" />
                </span>
                <h3 className="mt-5 text-[1.05rem] font-bold text-white">{f.title}</h3>
                <p className="mt-2 text-[0.9rem] leading-relaxed text-white/65">{f.desc}</p>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>

        <Reveal delay={0.1}>
          <p className="mx-auto mt-12 max-w-3xl text-center text-balance text-lg text-white/70">
            One structured patient profile drives all of it:{" "}
            <span className="text-white">
              genotype, diagnostics, crisis history and daily readings
            </span>{" "}
            feed every agent, score and brief.
          </p>
        </Reveal>
      </Container>
    </Section>
  );
}
