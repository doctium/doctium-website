import { ArrowRight, ArrowUpRight, Newspaper } from "lucide-react";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Eyebrow, Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { Reveal, RevealGroup, RevealItem } from "@/components/motion/Reveal";
import { AuroraBackground } from "@/components/motion/AuroraBackground";
import { CursorSpotlight } from "@/components/motion/CursorSpotlight";
import { CTASection } from "@/components/sections/CTASection";
import { getNewsList, type NewsListItem } from "@/lib/cms";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Newsroom",
  description:
    "Announcements and press coverage from Doctium — the AI-powered hospital operating system and telemedicine platform built for Nigeria.",
  path: "/newsroom",
});

function formatDate(iso: string | null): string | null {
  if (!iso) return null;
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return null;
  return d.toLocaleDateString("en-NG", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

/** A Doctium-authored announcement — links into the newsroom detail page. */
function AnnouncementCard({ item }: { item: NewsListItem }) {
  const date = formatDate(item.publishedAt);
  return (
    <Link href={`/newsroom/${item.slug}`} className="group block h-full">
      <Card className="flex h-full flex-col overflow-hidden p-0">
        {item.coverImageUrl ? (
          <div className="relative aspect-[16/9] overflow-hidden bg-mist">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={item.coverImageUrl}
              alt={item.title}
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
              loading="lazy"
            />
          </div>
        ) : (
          <div className="flex aspect-[16/9] items-center justify-center bg-gradient-to-br from-navy-50 to-mist">
            <Newspaper className="h-8 w-8 text-navy/25" aria-hidden />
          </div>
        )}

        <div className="flex flex-1 flex-col p-6 md:p-7">
          <div className="flex flex-wrap items-center gap-2.5 text-xs">
            {item.category?.name && <Badge tone="trust">{item.category.name}</Badge>}
            {date && (
              <time dateTime={item.publishedAt ?? undefined} className="font-mono text-muted">
                {date}
              </time>
            )}
          </div>

          <h3 className="mt-4 text-balance text-xl font-bold leading-snug text-navy">
            {item.title}
          </h3>

          {item.excerpt && (
            <p className="mt-3 line-clamp-3 text-[0.95rem] leading-relaxed text-muted">
              {item.excerpt}
            </p>
          )}

          <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-trust transition-colors group-hover:text-trust-deep">
            Read announcement
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
          </span>
        </div>
      </Card>
    </Link>
  );
}

/** External press coverage — links OUT to the original outlet. */
function CoverageCard({ item }: { item: NewsListItem }) {
  const date = formatDate(item.publishedAt);
  return (
    <a
      href={item.externalUrl || "#"}
      target="_blank"
      rel="noopener noreferrer"
      className="group block h-full"
    >
      <Card className="flex h-full flex-col">
        <div className="flex items-center justify-between gap-3">
          <div className="flex min-w-0 items-center gap-3">
            {item.outletLogoUrl ? (
              <span className="flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-xl border border-line bg-white">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={item.outletLogoUrl}
                  alt={item.outlet ? `${item.outlet} logo` : "Outlet logo"}
                  className="h-full w-full object-contain p-1.5"
                  loading="lazy"
                />
              </span>
            ) : (
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-line bg-mist">
                <Newspaper className="h-4 w-4 text-navy/40" aria-hidden />
              </span>
            )}
            <span className="truncate font-display text-sm font-semibold text-navy">
              {item.outlet || "Press"}
            </span>
          </div>
          <ArrowUpRight className="h-5 w-5 shrink-0 text-muted transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-trust" />
        </div>

        <h3 className="mt-5 text-balance text-lg font-bold leading-snug text-navy">
          {item.title}
        </h3>

        {item.excerpt && (
          <p className="mt-3 line-clamp-3 flex-1 text-[0.95rem] leading-relaxed text-muted">
            {item.excerpt}
          </p>
        )}

        <div className="mt-5 flex flex-wrap items-center gap-2.5 border-t border-line pt-4 text-xs">
          {item.category?.name && <Badge tone="outline">{item.category.name}</Badge>}
          {date && (
            <time dateTime={item.publishedAt ?? undefined} className="font-mono text-muted">
              {date}
            </time>
          )}
        </div>
      </Card>
    </a>
  );
}

function EmptyState() {
  return (
    <Reveal>
      <div className="mx-auto max-w-md rounded-3xl border border-dashed border-line bg-white/60 px-8 py-16 text-center">
        <span className="mx-auto mb-5 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-mist text-navy/40">
          <Newspaper className="h-6 w-6" aria-hidden />
        </span>
        <h2 className="text-xl font-bold text-navy">Nothing here yet</h2>
        <p className="mt-3 text-[0.95rem] leading-relaxed text-muted">
          We&rsquo;re just getting started. Announcements and press coverage will appear here
          soon — check back shortly.
        </p>
      </div>
    </Reveal>
  );
}

export default async function NewsroomPage() {
  const { items } = await getNewsList();

  const announcements = items.filter((i) => i.kind === "ANNOUNCEMENT");
  const coverage = items.filter((i) => i.kind === "COVERAGE");
  const isEmpty = items.length === 0;

  return (
    <>
      {/* ── Dark hero ─────────────────────────────── */}
      <section className="grain relative isolate flex min-h-[58svh] items-center overflow-hidden bg-navy-cinematic pt-[var(--header-h)] text-white">
        <AuroraBackground grid />
        <CursorSpotlight size={560} />

        <Container className="relative z-10 py-20 md:py-28">
          <div className="max-w-3xl">
            <Reveal>
              <Eyebrow tone="light">Newsroom</Eyebrow>
            </Reveal>
            <Reveal delay={0.06}>
              <h1 className="mt-6 text-balance text-[clamp(2.3rem,5.5vw,4rem)] font-extrabold leading-[1.03] tracking-[-0.03em] text-white">
                Doctium in the <span className="text-gradient">news.</span>
              </h1>
            </Reveal>
            <Reveal delay={0.14}>
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/75">
                Official announcements from the team and a running record of where Doctium shows
                up in the press — as we build the AI-powered operating system for healthcare in
                Nigeria.
              </p>
            </Reveal>
          </div>
        </Container>

        <div className="pointer-events-none absolute inset-x-0 bottom-0 z-[5] h-32 bg-gradient-to-b from-transparent to-canvas" />
      </section>

      {isEmpty ? (
        <Section tone="canvas">
          <Container>
            <EmptyState />
          </Container>
        </Section>
      ) : (
        <>
          {/* ── Announcements ───────────────────────── */}
          {announcements.length > 0 && (
            <Section tone="canvas" id="announcements">
              <Container>
                <SectionHeading
                  align="left"
                  eyebrow="Announcements"
                  title="Straight from the team"
                  lede="Product launches, partnerships and milestones — published by Doctium."
                />
                <RevealGroup className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {announcements.map((item) => (
                    <RevealItem key={item.slug} as="article" className="h-full">
                      <AnnouncementCard item={item} />
                    </RevealItem>
                  ))}
                </RevealGroup>
              </Container>
            </Section>
          )}

          {/* ── Press coverage ──────────────────────── */}
          {coverage.length > 0 && (
            <Section tone={announcements.length > 0 ? "mist" : "canvas"} id="press">
              <Container>
                <SectionHeading
                  align="left"
                  eyebrow="Press coverage"
                  title="Doctium in the media"
                  lede="Selected coverage from journalists and publications. Links open on the original outlet."
                />
                <RevealGroup className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {coverage.map((item) => (
                    <RevealItem key={item.slug} as="article" className="h-full">
                      <CoverageCard item={item} />
                    </RevealItem>
                  ))}
                </RevealGroup>
              </Container>
            </Section>
          )}
        </>
      )}

      <CTASection
        eyebrow="Press & media"
        title={<>Working on a story about Doctium?</>}
        lede="We&rsquo;re happy to help with interviews, data, executive commentary and high-resolution brand assets. Reach the team directly."
        primary={{ label: "Media enquiries", href: "/contact" }}
        secondary={{ label: "Read the blog", href: "/blog" }}
      />
    </>
  );
}
