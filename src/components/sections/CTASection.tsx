import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Badge";
import { AuroraBackground } from "@/components/motion/AuroraBackground";
import { CursorSpotlight } from "@/components/motion/CursorSpotlight";
import { Reveal } from "@/components/motion/Reveal";
import { StoreBadges } from "@/components/ui/StoreBadges";

type CTA = { label: string; href: string };

export function CTASection({
  eyebrow = "Get started",
  title,
  lede,
  primary,
  secondary,
  showStore = false,
}: {
  eyebrow?: string;
  title: React.ReactNode;
  lede?: string;
  primary: CTA;
  secondary?: CTA;
  showStore?: boolean;
}) {
  return (
    <section className="relative">
      <Container className="py-6">
        <div className="grain relative isolate overflow-hidden rounded-[2.5rem] bg-navy-cinematic px-6 py-16 text-center md:px-16 md:py-24">
          <AuroraBackground />
          <CursorSpotlight />
          <div className="relative z-10 mx-auto flex max-w-2xl flex-col items-center">
            <Reveal>
              <Eyebrow tone="light">{eyebrow}</Eyebrow>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="mt-5 text-balance text-[clamp(1.9rem,4.5vw,3rem)] font-bold leading-[1.05] text-white">
                {title}
              </h2>
            </Reveal>
            {lede && (
              <Reveal delay={0.1}>
                <p className="mt-5 text-lg leading-relaxed text-white/70">{lede}</p>
              </Reveal>
            )}
            <Reveal delay={0.16}>
              <div className="mt-9 flex flex-col items-center gap-3 sm:flex-row">
                <Button href={primary.href} variant="white" size="lg" magnetic iconRight={<ArrowRight className="h-4 w-4" />}>
                  {primary.label}
                </Button>
                {secondary && (
                  <Button href={secondary.href} variant="outlineLight" size="lg">
                    {secondary.label}
                  </Button>
                )}
              </div>
            </Reveal>
            {showStore && (
              <Reveal delay={0.22}>
                <StoreBadges className="mt-8 justify-center" />
              </Reveal>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
}
