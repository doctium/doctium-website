import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Badge";
import { AuroraBackground } from "@/components/motion/AuroraBackground";
import { CursorSpotlight } from "@/components/motion/CursorSpotlight";
import { Markdown } from "@/components/Markdown";
import { CTASection } from "@/components/sections/CTASection";
import { getLanding } from "@/lib/cms";
import { pageMeta, jsonLdScript, breadcrumbJsonLd } from "@/lib/seo";
import { siteConfig } from "@/content/site";

/**
 * Root-level catch-all for programmatic SEO landing pages (clean URLs like
 * `/telemedicine-lagos`). Static routes (`/blog`, `/ehr`, …) take precedence;
 * this only runs for slugs that don't match a real route. Content is published
 * from the admin via the CMS and is fail-soft — an unknown slug 404s cleanly.
 */

type PageProps = { params: Promise<{ slug: string }> };

/** Title-cases a CMS `kind` token ("PRODUCT_GUIDE" / "use-case" → "Product Guide"). */
function titleCase(kind: string): string {
  return kind
    .replace(/[_-]+/g, " ")
    .trim()
    .toLowerCase()
    .replace(/\b\w/g, (c) => c.toUpperCase());
}

/**
 * Adds a gradient accent to the last natural word/phrase of the H1 so the dark
 * hero matches the site's "one gradient word" pattern — without mangling copy.
 */
function gradientH1(h1: string) {
  const trimmed = h1.trim();
  const lastSpace = trimmed.lastIndexOf(" ");
  if (lastSpace === -1) {
    return <span className="text-gradient">{trimmed}</span>;
  }
  return (
    <>
      {trimmed.slice(0, lastSpace + 1)}
      <span className="text-gradient">{trimmed.slice(lastSpace + 1)}</span>
    </>
  );
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const page = await getLanding(slug);
  if (!page) {
    return { title: "Not found", robots: { index: false, follow: false } };
  }
  return pageMeta({
    title: page.metaTitle ?? page.h1,
    description: page.metaDescription ?? page.intro,
    path: `/${slug}`,
    image: page.ogImageUrl,
  });
}

export default async function LandingPage({ params }: PageProps) {
  const { slug } = await params;
  const page = await getLanding(slug);
  if (!page) notFound();

  const path = `/${slug}`;
  const url = `${siteConfig.url}${path}`;
  const description = page.metaDescription ?? page.intro;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "MedicalWebPage",
    name: page.h1,
    headline: page.h1,
    description,
    url,
    inLanguage: "en-NG",
    isPartOf: { "@type": "WebSite", name: "Doctium", url: siteConfig.url },
    publisher: { "@type": "Organization", name: "Doctium", url: siteConfig.url },
    ...(page.ogImageUrl ? { image: page.ogImageUrl } : {}),
  };

  const breadcrumb = breadcrumbJsonLd([
    { name: "Home", path: "/" },
    { name: page.h1, path },
  ]);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLdScript(jsonLd)} />
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLdScript(breadcrumb)} />

      {/* Dark hero — clears the fixed header so the white transparent nav stays legible. */}
      <section className="grain relative isolate overflow-hidden bg-navy-cinematic pt-[var(--header-h)] text-white">
        <AuroraBackground grid />
        <CursorSpotlight size={620} />
        <Container className="relative z-10 py-20 md:py-28">
          <div className="max-w-3xl">
            <Eyebrow tone="light">{titleCase(page.kind)}</Eyebrow>
            <h1 className="mt-6 text-balance text-[clamp(2.3rem,5.5vw,4rem)] font-extrabold leading-[1.03] tracking-[-0.03em] text-white">
              {gradientH1(page.h1)}
            </h1>
            {page.intro && (
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/75">
                {page.intro}
              </p>
            )}
          </div>
        </Container>
        <div className="pointer-events-none absolute inset-x-0 bottom-0 z-[5] h-32 bg-gradient-to-b from-transparent to-canvas" />
      </section>

      {/* Light body — branded CMS markdown in a narrow reading column. */}
      <section className="bg-white py-16 md:py-24">
        <Container size="narrow">
          {page.bodyMd ? (
            <Markdown>{page.bodyMd}</Markdown>
          ) : (
            <p className="text-lg leading-relaxed text-muted">
              More detail on this is on the way; check back soon.
            </p>
          )}
        </Container>
      </section>

      <CTASection
        eyebrow="Get started"
        title={<>Bring Doctium to your practice.</>}
        lede="See the AI-native hospital operating system in action, or get the Doctium app and connect with clinicians today."
        primary={{ label: "Book a demo", href: "/contact" }}
        secondary={{ label: "Get the app", href: "/telemedicine" }}
      />
    </>
  );
}
