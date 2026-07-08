import { ArrowRight } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Badge";
import { AuroraBackground } from "@/components/motion/AuroraBackground";
import { Reveal, RevealGroup, RevealItem } from "@/components/motion/Reveal";
import { Icon } from "@/components/ui/Icon";
import { scdFeatures } from "@/content/data";

export function PersonalizedMedicine() {
  return (
    <Section tone="ink" id="personalized-medicine">
      <AuroraBackground />
      <Container className="relative z-10">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:items-end">
          <div>
            <Reveal>
              <Eyebrow tone="light">Personalized medicine</Eyebrow>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="mt-5 text-balance text-[clamp(1.9rem,4.4vw,3rem)] font-bold leading-[1.05] text-white">
                Care that adapts to the <span className="text-gradient">individual.</span>
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-5 max-w-xl text-lg leading-relaxed text-white/70">
                Our personalized-medicine agents use structured patient data,
                diagnostics and genetics to guide patient-specific decisions. We started
                where personalization genuinely changes the treatment: sickle cell disease.
              </p>
            </Reveal>
          </div>

          <Reveal delay={0.12}>
            <div className="glass-dark rounded-3xl p-7">
              <p className="font-mono text-[0.7rem] uppercase tracking-[0.2em] text-sky">
                Why sickle cell
              </p>
              <p className="mt-3 text-balance text-lg leading-relaxed text-white/85">
                Nigeria is the global epicenter of sickle cell disease. Genotype testing is
                cheap and normalized, and hydroxyurea titration is genuinely{" "}
                <span className="font-semibold text-white">n-of-1</span>; the same data that
                drives our telemedicine care also drives it inside the hospital EHR.
              </p>
            </div>
          </Reveal>
        </div>

        <RevealGroup className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3" stagger={0.08}>
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
          <div className="mt-12 text-center">
            <a
              href="/personalized-medicine"
              className="link-underline inline-flex items-center gap-1.5 font-display text-lg font-semibold text-sky"
            >
              Explore personalized medicine <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
