import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { AuroraBackground } from "@/components/motion/AuroraBackground";
import { CursorSpotlight } from "@/components/motion/CursorSpotlight";
import { RevealGroup, RevealItem } from "@/components/motion/Reveal";
import { Icon } from "@/components/ui/Icon";
import { trustPoints } from "@/content/data";

export function EhrTrust() {
  return (
    <Section tone="navy" id="trust">
      <AuroraBackground />
      <CursorSpotlight />
      <Container className="relative z-10">
        <SectionHeading
          tone="dark"
          eyebrow="Trust & safety"
          title={
            <>
              Powerful AI is only useful if it&apos;s{" "}
              <span className="text-gradient">accountable.</span>
            </>
          }
          lede="An AI-native OS for a hospital has to be safe, auditable and interoperable from the ground up. Doctium is built that way, not bolted onto a legacy core."
        />

        <RevealGroup className="mt-14 grid gap-5 md:grid-cols-2" stagger={0.1}>
          {trustPoints.map((t) => (
            <RevealItem key={t.title}>
              <div className="glass-dark lift flex h-full gap-5 rounded-3xl p-7 hover:border-white/25">
                <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-trust/15 text-sky">
                  <Icon name={t.icon} className="h-6 w-6" />
                </span>
                <div>
                  <h3 className="text-lg font-bold text-white">{t.title}</h3>
                  <p className="mt-2 text-[0.92rem] leading-relaxed text-white/65">
                    {t.desc}
                  </p>
                </div>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>
      </Container>
    </Section>
  );
}
