import { ArrowRight, Linkedin } from "lucide-react";
import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Badge";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { AuroraBackground } from "@/components/motion/AuroraBackground";
import { CursorSpotlight } from "@/components/motion/CursorSpotlight";
import { Reveal, RevealGroup, RevealItem } from "@/components/motion/Reveal";
import { Icon } from "@/components/ui/Icon";
import { CTASection } from "@/components/sections/CTASection";
import { pageMeta } from "@/lib/seo";
import { teamValues } from "@/content/team";
import { getTeamMembers } from "@/lib/cms";

export const metadata = pageMeta({
  title: "Team",
  description:
    "Meet the team building Doctium — an AI-native hospital operating system for African healthcare. Clinician-led, built for Africa, doctor-in-the-loop.",
  path: "/team",
});

export default async function TeamPage() {
  const teamMembers = await getTeamMembers();
  return (
    <>
      {/* Hero */}
      <section className="grain relative isolate overflow-hidden bg-navy-cinematic pt-[var(--header-h)] text-white">
        <AuroraBackground />
        <CursorSpotlight />
        <Container className="relative z-10 py-20 md:py-28">
          <Eyebrow tone="light">Our team</Eyebrow>
          <h1 className="mt-5 max-w-4xl text-balance text-[clamp(2.3rem,5.5vw,4rem)] font-extrabold leading-[1.03] tracking-[-0.03em] text-white">
            The people building the <span className="text-gradient">AI-native</span> hospital OS.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/75">
            A clinician-led team of engineers, designers and doctors rebuilding how African
            hospitals run — and how patients reach care. We&apos;re small, focused, and hiring.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Button href="/careers" variant="white" size="lg" magnetic iconRight={<ArrowRight className="h-4 w-4" />}>
              See open roles
            </Button>
            <Button href="/about" variant="outlineLight" size="lg">
              Our mission
            </Button>
          </div>
        </Container>
        <div className="pointer-events-none absolute inset-x-0 bottom-0 z-[5] h-32 bg-gradient-to-b from-transparent to-canvas" />
      </section>

      {/* Values */}
      <Section tone="canvas">
        <Container>
          <SectionHeading
            eyebrow="How we work"
            title="The principles we build by."
            lede="The same discipline runs through our product and our team."
          />
          <RevealGroup className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4" stagger={0.08}>
            {teamValues.map((v) => (
              <RevealItem key={v.title}>
                <div className="lift flex h-full flex-col rounded-3xl border border-line bg-white p-6 shadow-[var(--shadow-soft)] hover:border-navy/15">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-navy text-sky">
                    <Icon name={v.icon} className="h-6 w-6" />
                  </span>
                  <h3 className="mt-5 text-[1.05rem] font-bold text-navy">{v.title}</h3>
                  <p className="mt-2 text-[0.9rem] leading-relaxed text-muted">{v.desc}</p>
                </div>
              </RevealItem>
            ))}
          </RevealGroup>
        </Container>
      </Section>

      {/* Team grid (or graceful empty state) */}
      <Section tone="light">
        <Container>
          <SectionHeading
            eyebrow="The team"
            title="Meet the people behind Doctium."
          />
          {teamMembers.length > 0 ? (
            <RevealGroup className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3" stagger={0.08}>
              {teamMembers.map((m) => (
                <RevealItem key={m.name}>
                  <div className="lift flex h-full flex-col rounded-3xl border border-line bg-canvas p-6 hover:border-navy/15 hover:bg-white">
                    <div className="flex items-center gap-4">
                      <div className="grid h-16 w-16 shrink-0 place-items-center overflow-hidden rounded-2xl bg-navy-50 font-display text-xl font-bold text-navy">
                        {m.avatarUrl ? (
                          // eslint-disable-next-line @next/next/no-img-element
                          <img src={m.avatarUrl} alt={m.name} className="h-full w-full object-cover" />
                        ) : (
                          m.name.split(" ").map((p) => p[0]).join("").slice(0, 2)
                        )}
                      </div>
                      <div className="min-w-0">
                        <p className="font-display text-lg font-bold text-navy">{m.name}</p>
                        <p className="text-sm text-trust-deep">{m.role}</p>
                      </div>
                    </div>
                    {m.bioMd && <p className="mt-4 text-[0.92rem] leading-relaxed text-muted">{m.bioMd}</p>}
                    {m.linkedinUrl && (
                      <a
                        href={m.linkedinUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-navy hover:text-trust-deep"
                      >
                        <Linkedin className="h-4 w-4" /> LinkedIn
                      </a>
                    )}
                  </div>
                </RevealItem>
              ))}
            </RevealGroup>
          ) : (
            <Reveal>
              <div className="mt-12 rounded-3xl border border-dashed border-line bg-canvas px-6 py-14 text-center">
                <p className="mx-auto max-w-xl text-balance text-lg text-muted">
                  We&apos;re putting faces to the names. Team profiles are coming soon —
                  in the meantime, the fastest way to meet us is to{" "}
                  <Link href="/careers" className="link-underline font-semibold text-navy">
                    join us
                  </Link>{" "}
                  or{" "}
                  <Link href="/contact" className="link-underline font-semibold text-navy">
                    say hello
                  </Link>
                  .
                </p>
              </div>
            </Reveal>
          )}
        </Container>
      </Section>

      <CTASection
        eyebrow="Join us"
        title="Help us rebuild African healthcare."
        lede="We're hiring across engineering, clinical, design and growth. If the mission resonates, we'd love to meet you."
        primary={{ label: "See open roles", href: "/careers" }}
        secondary={{ label: "Get in touch", href: "/contact" }}
      />
    </>
  );
}
