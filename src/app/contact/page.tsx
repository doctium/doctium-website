import { pageMeta } from "@/lib/seo";
import Link from "next/link";
import { Mail, LogIn, Server, ArrowUpRight, ShieldCheck, Globe } from "lucide-react";
import { ContactHero } from "@/components/sections/contact/ContactHero";
import { ContactForm } from "@/components/sections/contact/ContactForm";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { StoreBadges } from "@/components/ui/StoreBadges";
import { Reveal } from "@/components/motion/Reveal";
import { CTASection } from "@/components/sections/CTASection";
import { siteConfig } from "@/content/site";

export const metadata = pageMeta({
  title: "Contact",
  description:
    "Book a demo of the Doctium Hospital OS, talk to our team, or get support for the Doctium app.",
  path: "/contact",
});

const reachLinks = [
  {
    icon: Mail,
    label: "Email us",
    value: siteConfig.links.email,
    href: `mailto:${siteConfig.links.email}`,
    note: "Hospitals & patients — a real human replies.",
  },
  {
    icon: LogIn,
    label: "Sign in",
    value: "dashboard.doctiumhealth.com",
    href: siteConfig.links.dashboard,
    note: "Clinic & admin access to the Doctium platform.",
  },
  {
    icon: Server,
    label: "Developers",
    value: "api.doctiumhealth.com",
    href: siteConfig.links.api,
    note: "The Doctium API.",
  },
];

export default function ContactPage() {
  return (
    <>
      <ContactHero />

      {/* Form + ways to reach us */}
      <Section tone="light" id="form">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr]">
            <ContactForm />

            <div className="flex flex-col gap-4">
              <Reveal>
                <h2 className="font-display text-xl font-bold text-navy">
                  Other ways to reach us
                </h2>
              </Reveal>

              {reachLinks.map((r, i) => (
                <Reveal key={r.label} delay={0.05 * (i + 1)}>
                  <Link
                    href={r.href}
                    target={r.href.startsWith("http") ? "_blank" : undefined}
                    rel={r.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="lift group flex items-start gap-4 rounded-2xl border border-line bg-white p-5 shadow-[var(--shadow-soft)] hover:border-navy/15"
                  >
                    <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-navy-50 text-navy">
                      <r.icon className="h-5 w-5" strokeWidth={1.75} />
                    </span>
                    <div className="min-w-0">
                      <div className="flex items-center gap-1 font-display font-semibold text-navy">
                        {r.label}
                        <ArrowUpRight className="h-3.5 w-3.5 -translate-x-1 opacity-0 transition-all group-hover:translate-x-0 group-hover:opacity-100" />
                      </div>
                      <p className="truncate text-[0.9rem] text-trust-deep">{r.value}</p>
                      <p className="mt-0.5 text-[0.82rem] leading-snug text-muted">{r.note}</p>
                    </div>
                  </Link>
                </Reveal>
              ))}

              <Reveal delay={0.25}>
                <div className="rounded-2xl border border-trust/20 bg-trust-light/40 p-5">
                  <div className="flex items-center gap-2 text-navy">
                    <ShieldCheck className="h-4 w-4 text-trust-deep" />
                    <span className="font-display text-sm font-semibold">
                      Clinician-led, built for Africa
                    </span>
                  </div>
                  <p className="mt-2 text-[0.85rem] leading-relaxed text-navy/80">
                    Doctium keeps a doctor in the loop on every AI decision. Tell us about
                    your hospital and patients — we&apos;ll bring the right person to the
                    conversation.
                  </p>
                </div>
              </Reveal>
            </div>
          </div>
        </Container>
      </Section>

      {/* Patient support */}
      <Section tone="canvas">
        <Container>
          <SectionHeading
            eyebrow="For patients"
            title="Get the Doctium app."
            lede="See a verified doctor in minutes, ask Leenah, and manage your care — on iOS and Android."
          />
          <Reveal delay={0.1}>
            <div className="mt-10 flex flex-col items-center gap-5">
              <div className="rounded-2xl bg-navy-cinematic p-1.5">
                <StoreBadges />
              </div>
              <p className="flex items-center gap-2 text-[0.9rem] text-muted">
                <Globe className="h-4 w-4 text-trust" />
                Need help in the app? Use in-app support, or email {siteConfig.links.email}.
              </p>
            </div>
          </Reveal>
        </Container>
      </Section>

      <CTASection
        eyebrow="Ready when you are"
        title="Ready when you are."
        lede="Reach out and we'll get back quickly — with the right person for what you need."
        primary={{ label: "Email us", href: `mailto:${siteConfig.links.email}` }}
        secondary={{ label: "For patients", href: "/telemedicine" }}
      />
    </>
  );
}
