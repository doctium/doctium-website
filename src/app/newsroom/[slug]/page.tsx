import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Eyebrow, Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { AuroraBackground } from "@/components/motion/AuroraBackground";
import { CursorSpotlight } from "@/components/motion/CursorSpotlight";
import { Markdown } from "@/components/Markdown";
import { CTASection } from "@/components/sections/CTASection";
import { getNewsPost } from "@/lib/cms";
import { pageMeta, breadcrumbJsonLd, jsonLdScript } from "@/lib/seo";
import { siteConfig } from "@/content/site";

type Params = { params: Promise<{ slug: string }> };

function formatDate(iso: string | null) {
  if (!iso) return null;
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return null;
  return d.toLocaleDateString("en-NG", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const post = await getNewsPost(slug);

  if (!post) {
    return pageMeta({
      title: "Announcement not found",
      description: "This Doctium newsroom item could not be found.",
      path: `/newsroom/${slug}`,
    });
  }

  return pageMeta({
    title: post.metaTitle ?? post.title,
    description:
      post.metaDescription ??
      post.excerpt ??
      `${post.title}, from the Doctium newsroom.`,
    path: `/newsroom/${post.slug}`,
    image: post.ogImageUrl || post.coverImageUrl || undefined,
  });
}

export default async function NewsroomPostPage({ params }: Params) {
  const { slug } = await params;
  const post = await getNewsPost(slug);

  if (!post) notFound();

  const date = formatDate(post.publishedAt);
  const isCoverage = post.kind === "COVERAGE";
  const hasExternal = Boolean(post.externalUrl);
  const url = `${siteConfig.url}/newsroom/${post.slug}`;

  const newsArticleJsonLd = {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    headline: post.title,
    description: post.metaDescription ?? post.excerpt ?? undefined,
    ...(post.coverImageUrl ? { image: [post.coverImageUrl] } : {}),
    ...(post.publishedAt
      ? { datePublished: post.publishedAt, dateModified: post.publishedAt }
      : {}),
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    publisher: {
      "@type": "Organization",
      name: "Doctium",
      url: siteConfig.url,
      logo: {
        "@type": "ImageObject",
        url: `${siteConfig.url}/brand/doctium-logo-2048.png`,
      },
    },
    ...(post.category ? { articleSection: post.category.name } : {}),
    ...(isCoverage && post.outlet
      ? { sourceOrganization: { "@type": "Organization", name: post.outlet } }
      : {}),
    ...(isCoverage && hasExternal ? { url: post.externalUrl } : {}),
  };

  const breadcrumbs = breadcrumbJsonLd([
    { name: "Home", path: "/" },
    { name: "Newsroom", path: "/newsroom" },
    { name: post.title, path: `/newsroom/${post.slug}` },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLdScript(newsArticleJsonLd)}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLdScript(breadcrumbs)}
      />

      {/* ── Dark hero ─────────────────────────────────── */}
      <section className="grain relative isolate overflow-hidden bg-navy-cinematic pt-[var(--header-h)] text-white">
        <AuroraBackground />
        <CursorSpotlight size={560} />

        <Container size="narrow" className="relative z-10 py-20 md:py-28">
          <div className="flex flex-wrap items-center gap-3">
            <Eyebrow tone="light">
              {isCoverage ? "In the press" : "Announcement"}
            </Eyebrow>
            {post.category?.name && (
              <Badge tone="light">{post.category.name}</Badge>
            )}
          </div>

          <h1 className="mt-6 max-w-3xl text-balance text-[clamp(2.1rem,5vw,3.6rem)] font-extrabold leading-[1.04] tracking-[-0.02em] text-white">
            {post.title}
          </h1>

          {post.excerpt && (
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/75">
              {post.excerpt}
            </p>
          )}

          <div className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-3 font-mono text-xs uppercase tracking-[0.2em] text-sky">
            {date && <time dateTime={post.publishedAt ?? undefined}>{date}</time>}
            {isCoverage && post.outlet && (
              <>
                <span aria-hidden className="h-px w-6 bg-sky/50" />
                <span className="text-white/60">via {post.outlet}</span>
              </>
            )}
          </div>

          {isCoverage && hasExternal && (
            <div className="mt-9">
              <Button
                href={post.externalUrl}
                variant="white"
                size="lg"
                magnetic
                iconRight={<ArrowUpRight className="h-4 w-4" />}
              >
                Read at {post.outlet || "the source"}
              </Button>
            </div>
          )}
        </Container>

        <div className="pointer-events-none absolute inset-x-0 bottom-0 z-[5] h-24 bg-gradient-to-b from-transparent to-white" />
      </section>

      {/* ── Article body ──────────────────────────────── */}
      <section className="bg-white py-16 md:py-24">
        <Container size="narrow">
          {post.coverImageUrl && (
            <figure className="-mt-4 mb-12">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={post.coverImageUrl}
                alt={post.title}
                className="w-full rounded-3xl border border-line object-cover shadow-[0_24px_60px_-30px_rgba(15,32,57,0.35)]"
              />
            </figure>
          )}

          {post.bodyMd ? (
            <article>
              <Markdown>{post.bodyMd}</Markdown>
            </article>
          ) : (
            <p className="text-lg leading-relaxed text-muted">
              {post.excerpt ||
                "The full story is published with our media partner."}
            </p>
          )}

          {isCoverage && hasExternal && (
            <div className="mt-12 rounded-3xl border border-line bg-mist/50 p-6 md:p-8">
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-trust">
                Original coverage
              </p>
              <p className="mt-3 text-lg leading-relaxed text-body">
                This story was published
                {post.outlet ? ` by ${post.outlet}` : " externally"}. Read the
                full piece at the source.
              </p>
              <div className="mt-5">
                <Button
                  href={post.externalUrl}
                  variant="primary"
                  size="md"
                  iconRight={<ArrowUpRight className="h-4 w-4" />}
                >
                  Read at {post.outlet || "the source"}
                </Button>
              </div>
            </div>
          )}

          <div className="mt-14 border-t border-line pt-8">
            <Button
              href="/newsroom"
              variant="ghost"
              size="md"
              iconLeft={<ArrowLeft className="h-4 w-4" />}
            >
              Back to newsroom
            </Button>
          </div>
        </Container>
      </section>

      {/* ── Closing CTA ───────────────────────────────── */}
      <CTASection
        eyebrow="Work with Doctium"
        title="Building the AI-native hospital OS for African healthcare"
        lede="Talk to our team about bringing Doctium to your hospital, or follow along as we ship."
        primary={{ label: "Book a demo", href: "/contact" }}
        secondary={{ label: "More from the newsroom", href: "/newsroom" }}
      />
    </>
  );
}
