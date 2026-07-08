import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Clock } from "lucide-react";

import { getBlogPost } from "@/lib/cms";
import { pageMeta, breadcrumbJsonLd, jsonLdScript } from "@/lib/seo";
import { siteConfig } from "@/content/site";

import { Container } from "@/components/ui/Container";
import { Eyebrow, Badge } from "@/components/ui/Badge";
import { AuroraBackground } from "@/components/motion/AuroraBackground";
import { CursorSpotlight } from "@/components/motion/CursorSpotlight";
import { Reveal } from "@/components/motion/Reveal";
import { Markdown } from "@/components/Markdown";
import { CTASection } from "@/components/sections/CTASection";

/** Format an ISO date (or null) as a readable English date. */
function formatDate(iso: string | null): string | null {
  if (!iso) return null;
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return null;
  return d.toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getBlogPost(slug);

  if (!post) {
    return pageMeta({
      title: "Article not found",
      description: "This article could not be found.",
      path: `/blog/${slug}`,
    });
  }

  const image = post.ogImageUrl || post.coverImageUrl || undefined;
  return pageMeta({
    title: post.metaTitle || post.title,
    description: post.metaDescription || post.excerpt,
    path: `/blog/${post.slug}`,
    ...(image ? { image } : {}),
  });
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getBlogPost(slug);

  if (!post) notFound();

  const published = formatDate(post.publishedAt);
  const author = post.author ?? null;
  const url = `${siteConfig.url}/blog/${post.slug}`;
  const image = post.ogImageUrl || post.coverImageUrl || undefined;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.metaDescription || post.excerpt,
    ...(post.publishedAt ? { datePublished: post.publishedAt } : {}),
    ...(image ? { image: [image] } : {}),
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    url,
    ...(author
      ? {
          author: {
            "@type": "Person",
            name: author.name,
            ...(author.role ? { jobTitle: author.role } : {}),
          },
        }
      : {}),
    publisher: {
      "@type": "Organization",
      name: "Doctium",
      url: siteConfig.url,
      logo: {
        "@type": "ImageObject",
        url: `${siteConfig.url}/brand/doctium-logo-2048.png`,
      },
    },
  };

  const breadcrumb = breadcrumbJsonLd([
    { name: "Home", path: "/" },
    { name: "Blog", path: "/blog" },
    { name: post.title, path: `/blog/${post.slug}` },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLdScript(jsonLd)}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLdScript(breadcrumb)}
      />

      {/* ── Dark hero ─────────────────────────────────── */}
      <section className="grain relative isolate overflow-hidden bg-navy-cinematic pt-[var(--header-h)] text-white">
        <AuroraBackground grid />
        <CursorSpotlight size={560} />

        <Container size="narrow" className="relative z-10 py-20 md:py-28">
          <Reveal>
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 font-mono text-[0.7rem] uppercase tracking-[0.22em] text-sky transition-colors hover:text-white"
            >
              <ArrowLeft className="h-3.5 w-3.5" />
              Back to blog
            </Link>
          </Reveal>

          {post.categories.length > 0 && (
            <Reveal delay={0.04}>
              <div className="mt-6 flex flex-wrap gap-2">
                {post.categories.map((c) => (
                  <Badge key={c.slug} tone="light">
                    {c.name}
                  </Badge>
                ))}
              </div>
            </Reveal>
          )}

          <Reveal delay={0.08}>
            <h1 className="mt-6 text-balance text-[clamp(2.1rem,5vw,3.6rem)] font-extrabold leading-[1.04] tracking-[-0.02em] text-white">
              {post.title}
            </h1>
          </Reveal>

          {post.excerpt && (
            <Reveal delay={0.14}>
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/70">
                {post.excerpt}
              </p>
            </Reveal>
          )}

          {/* Byline + meta */}
          <Reveal delay={0.2}>
            <div className="mt-9 flex flex-wrap items-center gap-x-5 gap-y-3 border-t border-white/10 pt-7">
              {author && (
                <div className="flex items-center gap-3">
                  {author.avatarUrl ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={author.avatarUrl}
                      alt={author.name}
                      className="h-11 w-11 shrink-0 rounded-full object-cover ring-1 ring-white/15"
                    />
                  ) : (
                    <span
                      aria-hidden
                      className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white/10 font-semibold text-sky ring-1 ring-white/15"
                    >
                      {author.name.charAt(0).toUpperCase()}
                    </span>
                  )}
                  <div className="leading-tight">
                    <div className="text-sm font-semibold text-white">
                      {author.name}
                    </div>
                    {author.role && (
                      <div className="text-xs text-white/55">{author.role}</div>
                    )}
                  </div>
                </div>
              )}

              <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5 text-xs text-white/55">
                {published && (
                  <time dateTime={post.publishedAt ?? undefined}>{published}</time>
                )}
                {post.readingMins > 0 && (
                  <span className="inline-flex items-center gap-1.5">
                    <Clock className="h-3.5 w-3.5 text-sky" />
                    {post.readingMins} min read
                  </span>
                )}
              </div>
            </div>
          </Reveal>
        </Container>

        <div className="pointer-events-none absolute inset-x-0 bottom-0 z-[5] h-24 bg-gradient-to-b from-transparent to-canvas" />
      </section>

      {/* ── Article body ──────────────────────────────── */}
      <section className="bg-white py-16 md:py-24">
        <Container size="narrow">
          {post.coverImageUrl && (
            <figure className="mb-12 overflow-hidden rounded-3xl border border-line">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={post.coverImageUrl}
                alt={post.title}
                className="h-auto w-full object-cover"
              />
            </figure>
          )}

          <article>
            <Markdown>{post.bodyMd}</Markdown>
          </article>

          {post.tags.length > 0 && (
            <div className="mt-12 flex flex-wrap gap-2 border-t border-line pt-8">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-mist px-3 py-1 text-xs font-medium text-muted"
                >
                  #{tag}
                </span>
              ))}
            </div>
          )}

          {/* Author bio card */}
          {author?.bioMd && (
            <aside className="mt-14 rounded-3xl border border-line bg-mist/50 p-7 md:p-9">
              <div className="flex items-start gap-4">
                {author.avatarUrl ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={author.avatarUrl}
                    alt={author.name}
                    className="h-14 w-14 shrink-0 rounded-full object-cover ring-1 ring-line"
                  />
                ) : (
                  <span
                    aria-hidden
                    className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-navy font-semibold text-white"
                  >
                    {author.name.charAt(0).toUpperCase()}
                  </span>
                )}
                <div className="min-w-0">
                  <Eyebrow>Written by</Eyebrow>
                  <h2 className="mt-2 text-lg font-bold text-navy">
                    {author.name}
                  </h2>
                  {author.role && (
                    <p className="text-sm text-muted">{author.role}</p>
                  )}
                  <div className="mt-3 text-sm [&_p]:mb-3 [&_p]:text-base [&_p]:text-body/90">
                    <Markdown>{author.bioMd}</Markdown>
                  </div>
                  {(author.linkedinUrl || author.xUrl) && (
                    <div className="mt-3 flex flex-wrap gap-x-5 gap-y-1 text-sm font-medium">
                      {author.linkedinUrl && (
                        <a
                          href={author.linkedinUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-trust-deep link-underline"
                        >
                          LinkedIn
                        </a>
                      )}
                      {author.xUrl && (
                        <a
                          href={author.xUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-trust-deep link-underline"
                        >
                          X
                        </a>
                      )}
                    </div>
                  )}
                </div>
              </div>
            </aside>
          )}

          <div className="mt-14 border-t border-line pt-8">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-sm font-semibold text-trust-deep link-underline"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to all articles
            </Link>
          </div>
        </Container>
      </section>

      <CTASection
        eyebrow="See Doctium in action"
        title={<>Build with an AI-native hospital OS.</>}
        lede="Book a walkthrough of the Doctium platform: the hospital EHR, ambient documentation and the telemedicine marketplace."
        primary={{ label: "Book a demo", href: "/contact" }}
        secondary={{ label: "Read more articles", href: "/blog" }}
      />
    </>
  );
}
