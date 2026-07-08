import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Banknote } from "lucide-react";
import { getJob } from "@/lib/cms";
import { pageMeta, jsonLdScript } from "@/lib/seo";
import { siteConfig } from "@/content/site";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { Eyebrow } from "@/components/ui/Badge";
import { AuroraBackground } from "@/components/motion/AuroraBackground";
import { CursorSpotlight } from "@/components/motion/CursorSpotlight";
import { Markdown } from "@/components/Markdown";
import { CTASection } from "@/components/sections/CTASection";
import { ApplyForm } from "@/components/sections/careers/ApplyForm";

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

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const job = await getJob(slug);
  if (!job) {
    return pageMeta({
      title: "Role not found",
      description: "This role is no longer available.",
      path: `/careers/${slug}`,
    });
  }
  return pageMeta({
    title: job.metaTitle ?? `${job.title}: Careers at Doctium`,
    description:
      job.metaDescription ??
      job.summary ??
      `Join Doctium as ${job.title}. ${job.location} · ${job.workMode} · ${job.jobType}.`,
    path: `/careers/${job.slug}`,
  });
}

export default async function JobDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const job = await getJob(slug);
  if (!job) notFound();

  const posted = formatDate(job.postedAt);

  const badges = [
    job.team?.name,
    job.jobType,
    job.workMode,
    job.location,
  ].filter((b): b is string => Boolean(b));

  const jobPostingLd = {
    "@context": "https://schema.org",
    "@type": "JobPosting",
    title: job.title,
    description: job.summary || job.bodyMd || job.title,
    ...(job.postedAt ? { datePosted: job.postedAt } : {}),
    ...(job.closesAt ? { validThrough: job.closesAt } : {}),
    employmentType: job.jobType,
    hiringOrganization: {
      "@type": "Organization",
      name: "Doctium",
      sameAs: "https://doctiumhealth.com",
      logo: `${siteConfig.url}/brand/doctium-logo-2048.png`,
    },
    jobLocation: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressCountry: "NG",
        ...(job.location ? { addressLocality: job.location } : {}),
      },
    },
    applicantLocationRequirements: {
      "@type": "Country",
      name: "Nigeria",
    },
    directApply: true,
    ...(job.salaryNote ? { baseSalary: { "@type": "Text", value: job.salaryNote } } : {}),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLdScript(jobPostingLd)}
      />

      {/* ── Dark hero ─────────────────────────────────────── */}
      <section className="grain relative isolate overflow-hidden bg-navy-cinematic pt-[var(--header-h)] text-white">
        <AuroraBackground />
        <CursorSpotlight size={560} />
        <Container className="relative z-10 py-20 md:py-28">
          <Link
            href="/careers"
            className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-sky transition-colors hover:text-white"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            All open roles
          </Link>

          <div className="mt-7">
            <Eyebrow tone="light">Careers at Doctium</Eyebrow>
          </div>

          <h1 className="mt-5 max-w-4xl text-balance text-[clamp(2.1rem,5vw,3.6rem)] font-extrabold leading-[1.04] tracking-[-0.02em] text-white">
            {job.title}
          </h1>

          {job.summary && (
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/75">
              {job.summary}
            </p>
          )}

          {badges.length > 0 && (
            <div className="mt-8 flex flex-wrap gap-2.5">
              {badges.map((b) => (
                <Badge key={b} tone="light">
                  {b}
                </Badge>
              ))}
            </div>
          )}

          {posted && (
            <p className="mt-7 font-mono text-xs uppercase tracking-[0.2em] text-white/55">
              Posted · {posted}
            </p>
          )}
        </Container>
        <div className="pointer-events-none absolute inset-x-0 bottom-0 z-[5] h-24 bg-gradient-to-b from-transparent to-white" />
      </section>

      {/* ── Job body ──────────────────────────────────────── */}
      <Section tone="light">
        <Container size="narrow">
          {job.bodyMd ? (
            <Markdown>{job.bodyMd}</Markdown>
          ) : (
            <p className="text-lg leading-relaxed text-muted">
              Full details for this role are coming soon. Reach out via the form below and we&apos;ll
              be in touch.
            </p>
          )}

          {job.salaryNote && (
            <div className="mt-10 flex items-start gap-3 rounded-2xl border border-line bg-mist/60 p-5">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-trust-light text-trust-deep">
                <Banknote className="h-5 w-5" />
              </span>
              <div>
                <p className="text-sm font-semibold text-navy">Compensation</p>
                <p className="mt-1 leading-relaxed text-body/90">{job.salaryNote}</p>
              </div>
            </div>
          )}
        </Container>
      </Section>

      {/* ── Apply ─────────────────────────────────────────── */}
      <Section tone="mist" id="apply">
        <Container size="narrow">
          <Eyebrow>Apply now</Eyebrow>
          <h2 className="mt-4 text-balance text-[clamp(1.7rem,3.5vw,2.5rem)] font-bold leading-[1.08] text-navy">
            Apply for {job.title}
          </h2>
          <p className="mt-4 max-w-xl text-lg leading-relaxed text-muted">
            Tell us about yourself and attach your CV. We read every application and reply within
            2 weeks.
          </p>
          <div className="mt-10">
            <ApplyForm slug={job.slug} title={job.title} />
          </div>
        </Container>
      </Section>

      {/* ── Back link + CTA ───────────────────────────────── */}
      <Section tone="light" spacing="tight">
        <Container size="narrow">
          <Link
            href="/careers"
            className="inline-flex items-center gap-2 font-medium text-trust-deep link-underline"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to all open roles
          </Link>
        </Container>
      </Section>

      <CTASection
        eyebrow="Not the right role?"
        title={<>Build the AI-native OS for African healthcare.</>}
        lede="We're always glad to meet exceptional people. Explore every open role, or reach out and tell us where you'd make an impact."
        primary={{ label: "See all open roles", href: "/careers" }}
        secondary={{ label: "Talk to our team", href: "/contact" }}
      />
    </>
  );
}
