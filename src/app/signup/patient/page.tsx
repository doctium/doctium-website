import Link from "next/link";
import { ShieldCheck, Clock, MessageSquare } from "lucide-react";
import { pageMeta } from "@/lib/seo";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { AuroraBackground } from "@/components/motion/AuroraBackground";
import { PatientSignupForm } from "@/components/sections/signup/PatientSignupForm";
import { siteConfig } from "@/content/site";

export const metadata = pageMeta({
  title: "Create your patient account",
  description:
    "Sign up for Doctium to see verified doctors in minutes — chat, voice and video consultations, prescriptions and follow-up care, on iOS and Android.",
  path: "/signup/patient",
});

const points = [
  { icon: Clock, text: "See a verified doctor in minutes — no waiting rooms." },
  { icon: MessageSquare, text: "Chat, voice or video — and ask Leenah anytime." },
  { icon: ShieldCheck, text: "Your health data is encrypted and private to you." },
];

export default function PatientSignupPage() {
  return (
    <>
      <section className="grain relative isolate overflow-hidden bg-navy-cinematic pt-[var(--header-h)] text-white">
        <AuroraBackground grid />
        <Container className="relative z-10 py-14 lg:py-16">
          <SectionHeading
            as="h1"
            tone="dark"
            eyebrow="For patients"
            title="Create your Doctium account"
            lede="Sign up with your phone number to get started, then download the app to see verified doctors and manage your care."
          />
        </Container>
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-b from-transparent to-canvas" />
      </section>

      <Section tone="canvas" spacing="tight">
        <Container>
          <div className="grid items-start gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="flex flex-col gap-5">
              <h2 className="font-display text-xl font-bold text-navy">
                Care that comes to you
              </h2>
              <ul className="flex flex-col gap-4">
                {points.map((p) => (
                  <li key={p.text} className="flex items-start gap-3.5">
                    <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-navy-50 text-navy">
                      <p.icon className="h-5 w-5" strokeWidth={1.75} />
                    </span>
                    <p className="pt-1.5 text-[0.95rem] leading-snug text-body">
                      {p.text}
                    </p>
                  </li>
                ))}
              </ul>
              <div className="mt-2 rounded-2xl border border-trust/20 bg-trust-light/40 p-5 text-[0.85rem] leading-relaxed text-navy/80">
                Are you a doctor?{" "}
                <Link
                  href="/signup/doctor"
                  className="font-semibold text-trust-deep hover:underline"
                >
                  Join as a doctor
                </Link>{" "}
                instead.
              </div>
            </div>

            <div>
              <PatientSignupForm />
              <p className="mt-5 text-center text-[0.9rem] text-muted">
                Already have an account?{" "}
                <a
                  href={siteConfig.links.dashboard}
                  className="font-medium text-trust-deep hover:underline"
                >
                  Sign in
                </a>
              </p>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
