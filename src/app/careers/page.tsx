import Link from "next/link";
import { ArrowRight, ArrowUpRight, Heart, MapPin } from "lucide-react";
import { pageMeta } from "@/lib/seo";
import { getJobs, getJobTeams, type JobListItem, type Ref } from "@/lib/cms";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Eyebrow, Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { Reveal, RevealGroup, RevealItem } from "@/components/motion/Reveal";
import { AuroraBackground } from "@/components/motion/AuroraBackground";
import { CursorSpotlight } from "@/components/motion/CursorSpotlight";
import { CTASection } from "@/components/sections/CTASection";

export const metadata = pageMeta({
  title: "Careers",
  description:
    "Help build the future of African healthcare. Explore open roles at Doctium across engineering, clinical, product and operations — and join a team rebuilding how care is delivered.",
  path: "/careers",
});

const VALUES = [
  {
    icon: "HeartPulse",
    title: "Patients first, always",
    body: "Every decision routes back to the person on the other side of the screen. Clinical safety is not a feature — it is the floor.",
  },
  {
    icon: "Globe",
    title: "Built for African realities",
    body: "Intermittent power, thin bandwidth, mixed languages. We design for the field as it is, not as a brochure imagines it.",
  },
  {
    icon: "ShieldCheck",
    title: "Trust is earned in the details",
    body: "Consent-gated, access-logged, doctor-approved. We sweat the unglamorous safeguards because the record matters.",
  },
  {
    icon: "TrendingUp",
    title: "Ship, learn, raise the bar",
    body: "Small teams, real ownership, tight feedback loops with the clinicians who use what we build every day.",
  },
];

/** A single open role, rendered as a linked card. */
function RoleCard({ job }: { job: JobListItem }) {
  return (
    <RevealItem as="article">
      <Link
        href={`/careers/${job.slug}`}
        className="lift group flex h-full flex-col rounded-3xl border border-line bg-white p-6 shadow-[var(--shadow-soft)] transition-colors hover:border-navy/15 hover:shadow-[var(--shadow-card)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-trust/40 md:p-7"
      >
        <div className="flex flex-wrap items-center gap-2">
          {job.jobType && <Badge tone="trust">{job.jobType}</Badge>}
          {job.workMode && <Badge tone="outline">{job.workMode}</Badge>}
        </div>

        <h3 className="mt-4 text-xl font-bold leading-snug text-navy">
          {job.title}
        </h3>

        {job.summary && (
          <p className="mt-2 line-clamp-3 text-[0.95rem] leading-relaxed text-muted">
            {job.summary}
          </p>
        )}

        <div className="mt-5 flex flex-wrap items-center gap-x-4 gap-y-2 border-t border-line pt-4 text-sm text-muted">
          {job.team?.name && (
            <span className="font-mono text-[0.72rem] uppercase tracking-[0.14em] text-trust">
              {job.team.name}
            </span>
          )}
          {job.location && (
            <span className="inline-flex items-center gap-1.5">
              <MapPin className="h-3.5 w-3.5 text-trust" aria-hidden />
              {job.location}
            </span>
          )}
        </div>

        <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-navy">
          View role
          <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" aria-hidden />
        </span>
      </Link>
    </RevealItem>
  );
}

/** One team's roles, grouped under a labelled header. */
function TeamGroup({ name, jobs }: { name: string; jobs: JobListItem[] }) {
  return (
    <div>
      <Reveal>
        <div className="flex items-baseline justify-between gap-4 border-b border-line pb-4">
          <h2 className="text-lg font-bold text-navy">{name}</h2>
          <span className="font-mono text-[0.72rem] uppercase tracking-[0.16em] text-muted">
            {jobs.length} {jobs.length === 1 ? "role" : "roles"}
          </span>
        </div>
      </Reveal>
      <RevealGroup className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {jobs.map((job) => (
          <RoleCard key={job.slug} job={job} />
        ))}
      </RevealGroup>
    </div>
  );
}

export default async function CareersPage({
  searchParams,
}: {
  searchParams: Promise<{ team?: string }>;
}) {
  const { team: activeTeam } = await searchParams;
  const [jobs, teams] = await Promise.all([getJobs(activeTeam), getJobTeams()]);

  // Group jobs by team (preserving the team order returned by the CMS), with a
  // trailing bucket for any role that has no team assigned.
  const teamOrder: Ref[] = teams.length
    ? teams
    : // derive a stable order from the jobs themselves if /teams is empty
      Array.from(
        new Map(
          jobs
            .filter((j) => j.team?.slug)
            .map((j) => [j.team!.slug, j.team!]),
        ).values(),
      );

  const grouped = teamOrder
    .map((t) => ({
      team: t,
      jobs: jobs.filter((j) => j.team?.slug === t.slug),
    }))
    .filter((g) => g.jobs.length > 0);

  const untagged = jobs.filter((j) => !j.team?.slug);
  const hasJobs = jobs.length > 0;

  return (
    <>
      {/* ── Dark hero ───────────────────────────────────────── */}
      <section className="grain relative isolate flex min-h-[68svh] items-center overflow-hidden bg-navy-cinematic pt-[var(--header-h)] text-white">
        <AuroraBackground grid />
        <CursorSpotlight size={560} />

        <Container className="relative z-10 py-16 md:py-24">
          <div className="max-w-3xl">
            <Reveal>
              <Eyebrow tone="light">Careers</Eyebrow>
            </Reveal>
            <Reveal delay={0.06}>
              <h1 className="mt-6 text-balance text-[clamp(2.3rem,5.5vw,4rem)] font-extrabold leading-[1.03] tracking-[-0.03em] text-white">
                Build the future of{" "}
                <span className="text-gradient">African healthcare.</span>
              </h1>
            </Reveal>
            <Reveal delay={0.16}>
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/75">
                We are a small, deliberate team rebuilding how care is delivered
                across the continent — telemedicine, the hospital OS, AI clinical
                documentation and personalized medicine, built for African
                realities.{" "}
                <span className="text-white/90">
                  We read every application, and we are always glad to meet people
                  who care about this work.
                </span>
              </p>
            </Reveal>
            {hasJobs && (
              <Reveal delay={0.24}>
                <div className="mt-9">
                  <Button
                    href="#open-roles"
                    variant="outlineLight"
                    size="lg"
                    iconRight={<ArrowRight className="h-4 w-4" />}
                  >
                    See open roles
                  </Button>
                </div>
              </Reveal>
            )}
          </div>
        </Container>

        <div className="pointer-events-none absolute inset-x-0 bottom-0 z-[5] h-32 bg-gradient-to-b from-transparent to-canvas" />
      </section>

      {/* ── Open roles ──────────────────────────────────────── */}
      <Section tone="canvas" id="open-roles">
        <Container>
          <SectionHeading
            eyebrow="Open roles"
            align="left"
            title="Where you could come in"
            lede="Filter by team, or browse everything below. Each role links to the full description and how to apply."
          />

          {/* Team filter chips */}
          {teams.length > 0 && (
            <Reveal delay={0.05}>
              <div className="mt-8 flex flex-wrap gap-2.5">
                <Link
                  href="/careers"
                  className={`inline-flex items-center rounded-full px-4 py-2 text-sm font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-trust/40 ${
                    !activeTeam
                      ? "bg-navy text-white"
                      : "bg-white text-navy hairline hover:border-navy/30 hover:bg-navy-50"
                  }`}
                >
                  All teams
                </Link>
                {teams.map((t) => {
                  const active = activeTeam === t.slug;
                  return (
                    <Link
                      key={t.slug}
                      href={`/careers?team=${t.slug}`}
                      aria-current={active ? "true" : undefined}
                      className={`inline-flex items-center rounded-full px-4 py-2 text-sm font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-trust/40 ${
                        active
                          ? "bg-navy text-white"
                          : "bg-white text-navy hairline hover:border-navy/30 hover:bg-navy-50"
                      }`}
                    >
                      {t.name}
                    </Link>
                  );
                })}
              </div>
            </Reveal>
          )}

          {/* Role list — grouped by team, or empty state */}
          <div className="mt-12">
            {!hasJobs ? (
              <Reveal>
                <div className="mx-auto max-w-xl rounded-3xl border border-line bg-white px-6 py-16 text-center shadow-[var(--shadow-soft)] md:px-12">
                  <div className="mx-auto mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-trust-light text-trust-deep">
                    <Heart className="h-6 w-6" aria-hidden />
                  </div>
                  <h3 className="text-xl font-bold text-navy">
                    {activeTeam
                      ? "No open roles on this team right now"
                      : "No open roles right now"}
                  </h3>
                  <p className="mt-3 text-[0.97rem] leading-relaxed text-muted">
                    But we are always glad to meet people who care about building
                    better healthcare for Africa. Tell us what you would want to
                    work on — we read every note.
                  </p>
                  <div className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row">
                    <Button
                      href="/contact"
                      variant="primary"
                      iconRight={<ArrowRight className="h-4 w-4" />}
                    >
                      Say hello
                    </Button>
                    {activeTeam && (
                      <Button href="/careers" variant="secondary">
                        View all teams
                      </Button>
                    )}
                  </div>
                </div>
              </Reveal>
            ) : grouped.length > 0 || untagged.length > 0 ? (
              <div className="flex flex-col gap-14">
                {grouped.map((g) => (
                  <TeamGroup key={g.team.slug} name={g.team.name} jobs={g.jobs} />
                ))}
                {untagged.length > 0 && (
                  <TeamGroup name="Other openings" jobs={untagged} />
                )}
              </div>
            ) : (
              // jobs exist but none matched grouping (defensive) — flat grid
              <RevealGroup className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {jobs.map((job) => (
                  <RoleCard key={job.slug} job={job} />
                ))}
              </RevealGroup>
            )}
          </div>
        </Container>
      </Section>

      {/* ── Why work here ───────────────────────────────────── */}
      <Section tone="light">
        <Container>
          <SectionHeading
            eyebrow="Why Doctium"
            align="left"
            title="What it's like to build here"
            lede="A mission with real weight, a team small enough to own your work, and clinicians in the loop every step of the way."
          />
          <RevealGroup className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {VALUES.map((v) => (
              <RevealItem
                key={v.title}
                as="article"
                className="lift rounded-3xl border border-line bg-white p-7 shadow-[var(--shadow-soft)] hover:border-navy/15 hover:shadow-[var(--shadow-card)]"
              >
                <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-trust/15 to-trust/0 text-trust ring-1 ring-inset ring-navy/5">
                  <Icon name={v.icon} className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-bold text-navy">{v.title}</h3>
                <p className="mt-2 text-[0.95rem] leading-relaxed text-muted">
                  {v.body}
                </p>
              </RevealItem>
            ))}
          </RevealGroup>

          <Reveal delay={0.1}>
            <p className="mt-10 inline-flex items-center gap-1.5 text-sm text-muted">
              Want to meet the people behind the product?
              <Link
                href="/team"
                className="link-underline inline-flex items-center gap-1 font-semibold text-navy"
              >
                Meet the team
                <ArrowUpRight className="h-3.5 w-3.5" aria-hidden />
              </Link>
            </p>
          </Reveal>
        </Container>
      </Section>

      {/* ── Closing CTA ─────────────────────────────────────── */}
      <CTASection
        eyebrow="Don't see your role?"
        title={<>Let&apos;s talk anyway.</>}
        lede="If you care about the future of African healthcare, we want to hear from you — open role or not. Reach out and tell us how you'd contribute."
        primary={{ label: "Get in touch", href: "/contact" }}
        secondary={{ label: "Our team", href: "/team" }}
      />
    </>
  );
}
