import Link from "next/link";
import { ArrowRight, Clock, NotebookPen } from "lucide-react";
import { getBlogList, getBlogCategories } from "@/lib/cms";
import type { BlogListItem, Ref } from "@/lib/cms";
import { pageMeta } from "@/lib/seo";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Eyebrow } from "@/components/ui/Badge";
import { AuroraBackground } from "@/components/motion/AuroraBackground";
import { CursorSpotlight } from "@/components/motion/CursorSpotlight";
import { Reveal, RevealGroup, RevealItem } from "@/components/motion/Reveal";
import { CTASection } from "@/components/sections/CTASection";

export const metadata = pageMeta({
  title: "Blog",
  description:
    "Doctium insights on AI-native healthcare, telemedicine and hospital operations across Africa — from the team building the operating system for African hospitals.",
  path: "/blog",
});

function formatDate(value: string | null): string | null {
  if (!value) return null;
  const d = new Date(value);
  if (Number.isNaN(d.getTime())) return null;
  return d.toLocaleDateString("en-NG", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

/** A single blog post card linking through to /blog/[slug]. */
function PostCard({ post }: { post: BlogListItem }) {
  const date = formatDate(post.publishedAt);
  const primaryCats = post.categories.slice(0, 2);

  return (
    <RevealItem as="article" className="h-full">
      <Link
        href={`/blog/${post.slug}`}
        className="lift group flex h-full flex-col overflow-hidden rounded-3xl border border-line bg-white shadow-[var(--shadow-soft)] transition-colors hover:border-navy/15 hover:shadow-[var(--shadow-card)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-trust/50"
      >
        {/* Cover */}
        <div className="relative aspect-[16/10] overflow-hidden bg-navy-cinematic">
          {post.coverImageUrl ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={post.coverImageUrl}
              alt={`Cover image for “${post.title}”`}
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
              loading="lazy"
            />
          ) : (
            <div className="grain relative flex h-full w-full items-center justify-center bg-[linear-gradient(135deg,#13315780,#1f477480)]">
              <AuroraBackground />
              <NotebookPen className="relative z-10 h-9 w-9 text-white/40" strokeWidth={1.5} aria-hidden />
            </div>
          )}
        </div>

        {/* Body */}
        <div className="flex flex-1 flex-col p-6">
          {primaryCats.length > 0 && (
            <div className="mb-3 flex flex-wrap gap-2">
              {primaryCats.map((c) => (
                <span
                  key={c.slug}
                  className="inline-flex items-center rounded-full bg-trust-light px-2.5 py-1 font-mono text-[0.62rem] font-semibold uppercase tracking-[0.12em] text-trust-deep"
                >
                  {c.name}
                </span>
              ))}
            </div>
          )}

          <h3 className="text-balance text-lg font-bold leading-snug text-navy transition-colors group-hover:text-trust">
            {post.title}
          </h3>

          {post.excerpt && (
            <p className="mt-2.5 line-clamp-3 text-[0.92rem] leading-relaxed text-muted">
              {post.excerpt}
            </p>
          )}

          {/* Meta */}
          <div className="mt-auto flex items-center gap-3 pt-5 text-xs text-muted">
            {post.author?.name && (
              <span className="font-semibold text-body">{post.author.name}</span>
            )}
            {post.readingMins > 0 && (
              <span className="inline-flex items-center gap-1">
                <Clock className="h-3.5 w-3.5 text-trust" aria-hidden />
                {post.readingMins} min read
              </span>
            )}
            {date && (
              <time dateTime={post.publishedAt ?? undefined} className="ml-auto">
                {date}
              </time>
            )}
          </div>
        </div>
      </Link>
    </RevealItem>
  );
}

/** Category filter chips — each links to /blog?category=slug. */
function CategoryFilter({
  categories,
  active,
}: {
  categories: Ref[];
  active?: string;
}) {
  const chip =
    "inline-flex items-center rounded-full border px-4 py-1.5 text-sm font-medium transition-colors";
  return (
    <Reveal delay={0.05}>
      <nav aria-label="Filter posts by category" className="flex flex-wrap justify-center gap-2.5">
        <Link
          href="/blog"
          aria-current={!active ? "page" : undefined}
          className={`${chip} ${
            !active
              ? "border-navy bg-navy text-white"
              : "border-line bg-white text-body hover:border-navy/30 hover:bg-navy-50"
          }`}
        >
          All posts
        </Link>
        {categories.map((c) => {
          const isActive = active === c.slug;
          return (
            <Link
              key={c.slug}
              href={`/blog?category=${c.slug}`}
              aria-current={isActive ? "page" : undefined}
              className={`${chip} ${
                isActive
                  ? "border-navy bg-navy text-white"
                  : "border-line bg-white text-body hover:border-navy/30 hover:bg-navy-50"
              }`}
            >
              {c.name}
            </Link>
          );
        })}
      </nav>
    </Reveal>
  );
}

/** Graceful empty state when the CMS has no published posts (or none in a category). */
function EmptyState({ filtered }: { filtered: boolean }) {
  return (
    <Reveal>
      <div className="mx-auto flex max-w-md flex-col items-center rounded-3xl border border-dashed border-line bg-mist/50 px-8 py-16 text-center">
        <span className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-trust-light text-trust-deep">
          <NotebookPen className="h-6 w-6" strokeWidth={1.6} aria-hidden />
        </span>
        <h2 className="text-xl font-bold text-navy">
          {filtered ? "No posts in this category yet" : "Nothing here yet"}
        </h2>
        <p className="mt-3 text-[0.95rem] leading-relaxed text-muted">
          {filtered
            ? "We haven’t published anything in this category yet. Browse all posts or check back soon."
            : "We’re putting the finishing touches on our first pieces. Check back soon for insights on AI-native healthcare across Africa."}
        </p>
        {filtered && (
          <Link
            href="/blog"
            className="mt-7 inline-flex items-center gap-1.5 text-sm font-semibold text-trust link-underline"
          >
            View all posts
            <ArrowRight className="h-4 w-4" aria-hidden />
          </Link>
        )}
      </div>
    </Reveal>
  );
}

export default async function BlogIndexPage({
  searchParams,
}: {
  searchParams: Promise<{ category?: string }>;
}) {
  const { category } = await searchParams;

  const [{ items }, categories] = await Promise.all([
    getBlogList({ category }),
    getBlogCategories(),
  ]);

  const hasPosts = items.length > 0;

  return (
    <>
      {/* ── Dark hero ───────────────────────────────────── */}
      <section className="grain relative isolate flex min-h-[62svh] items-center overflow-hidden bg-navy-cinematic pt-[var(--header-h)] text-white">
        <AuroraBackground grid />
        <CursorSpotlight size={560} />

        <Container className="relative z-10 py-20 md:py-28">
          <div className="max-w-3xl">
            <Reveal>
              <Eyebrow tone="light">Doctium Blog</Eyebrow>
            </Reveal>
            <Reveal delay={0.06}>
              <h1 className="mt-6 text-balance text-[clamp(2.2rem,5.2vw,3.9rem)] font-extrabold leading-[1.04] tracking-[-0.03em] text-white">
                Insights on <span className="text-gradient">AI-native</span> healthcare.
              </h1>
            </Reveal>
            <Reveal delay={0.14}>
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/75">
                Field notes from the team building the operating system for African hospitals —
                on telemedicine, clinical AI, hospital operations and the future of care across
                the continent.
              </p>
            </Reveal>
          </div>
        </Container>

        <div className="pointer-events-none absolute inset-x-0 bottom-0 z-[5] h-32 bg-gradient-to-b from-transparent to-canvas" />
      </section>

      {/* ── Posts grid ──────────────────────────────────── */}
      <Section tone="canvas">
        <Container size="wide">
          {categories.length > 0 && (
            <div className="mb-12">
              <CategoryFilter categories={categories} active={category} />
            </div>
          )}

          {hasPosts ? (
            <RevealGroup className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
              {items.map((post) => (
                <PostCard key={post.slug} post={post} />
              ))}
            </RevealGroup>
          ) : (
            <EmptyState filtered={Boolean(category)} />
          )}
        </Container>
      </Section>

      {/* ── Closing CTA ─────────────────────────────────── */}
      <CTASection
        eyebrow="Stay in the loop"
        title={
          <>
            Care is changing fast. <span className="text-gradient">Keep up.</span>
          </>
        }
        lede="See how Doctium runs hospitals end to end, or get the patient app to consult a verified doctor from anywhere in Nigeria."
        primary={{ label: "Book a demo", href: "/contact" }}
        secondary={{ label: "For patients", href: "/telemedicine" }}
      />
    </>
  );
}
