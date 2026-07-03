import Link from "next/link";
import { HeartPulse, Stethoscope, ArrowRight } from "lucide-react";
import { pageMeta } from "@/lib/seo";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { AuroraBackground } from "@/components/motion/AuroraBackground";

export const metadata = pageMeta({
  title: "Sign up",
  description:
    "Create your Doctium account — sign up as a patient to see verified doctors in minutes, or join as a doctor to consult patients and grow your practice.",
  path: "/signup",
});

const roles = [
  {
    href: "/signup/patient",
    icon: HeartPulse,
    label: "I'm a patient",
    desc: "See verified doctors in minutes — chat, voice and video, prescriptions and follow-up care.",
    cta: "Sign up as a patient",
  },
  {
    href: "/signup/doctor",
    icon: Stethoscope,
    label: "I'm a doctor",
    desc: "Consult patients on your own schedule, set your availability, and get paid — reviewed and verified.",
    cta: "Join as a doctor",
  },
];

export default function SignupPage() {
  return (
    <>
      <section className="grain relative isolate overflow-hidden bg-navy-cinematic pt-[var(--header-h)] text-white">
        <AuroraBackground grid />
        <Container className="relative z-10 py-14 lg:py-16">
          <SectionHeading
            as="h1"
            tone="dark"
            eyebrow="Get started"
            title="Create your Doctium account"
            lede="Choose how you'll use Doctium. You'll finish setup and use the full service in the Doctium app."
          />
        </Container>
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-b from-transparent to-canvas" />
      </section>

      <Section tone="canvas" spacing="tight">
        <Container size="narrow">
          <div className="grid gap-6 sm:grid-cols-2">
            {roles.map((r) => (
              <Link
                key={r.href}
                href={r.href}
                className="lift group flex flex-col rounded-[2rem] border border-line bg-white p-7 shadow-[var(--shadow-card)] transition-colors hover:border-navy/20"
              >
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-navy-50 text-navy">
                  <r.icon className="h-6 w-6" strokeWidth={1.75} />
                </span>
                <h2 className="mt-5 font-display text-xl font-bold text-navy">
                  {r.label}
                </h2>
                <p className="mt-2 flex-1 text-[0.92rem] leading-relaxed text-muted">
                  {r.desc}
                </p>
                <span className="mt-5 inline-flex items-center gap-1.5 font-display text-[0.95rem] font-semibold text-trust-deep">
                  {r.cta}
                  <ArrowRight className="h-4 w-4 -translate-x-1 opacity-0 transition-all group-hover:translate-x-0 group-hover:opacity-100" />
                </span>
              </Link>
            ))}
          </div>

          <p className="mt-8 text-center text-[0.9rem] text-muted">
            Already have an account?{" "}
            <Link
              href="/telemedicine#download"
              className="font-medium text-trust-deep hover:underline"
            >
              Get the app to sign in
            </Link>
          </p>
        </Container>
      </Section>
    </>
  );
}
