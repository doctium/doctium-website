import Link from "next/link";
import { ShieldCheck, Wallet, CalendarClock } from "lucide-react";
import { pageMeta } from "@/lib/seo";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { AuroraBackground } from "@/components/motion/AuroraBackground";
import { DoctorSignupForm } from "@/components/sections/signup/DoctorSignupForm";
import { siteConfig } from "@/content/site";

export const metadata = pageMeta({
  title: "Join Doctium as a doctor",
  description:
    "Register as a doctor on Doctium — consult patients by chat, voice and video, set your own availability, and get paid. New registrations are reviewed before going live.",
  path: "/signup/doctor",
});

const points = [
  { icon: CalendarClock, text: "Set your own hours and consult from anywhere." },
  { icon: Wallet, text: "Transparent earnings, paid to your Doctium wallet." },
  { icon: ShieldCheck, text: "A clinician-led platform — reviewed and verified." },
];

export default function DoctorSignupPage() {
  return (
    <>
      <section className="grain relative isolate overflow-hidden bg-navy-cinematic pt-[var(--header-h)] text-white">
        <AuroraBackground grid />
        <Container className="relative z-10 py-14 lg:py-16">
          <SectionHeading
            as="h1"
            tone="dark"
            eyebrow="For doctors"
            title="Join Doctium as a doctor"
            lede="Create your account and verify your email and phone. Our team reviews new registrations before you go live — you'll finish verification in the doctor app."
          />
        </Container>
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-b from-transparent to-canvas" />
      </section>

      <Section tone="canvas" spacing="tight">
        <Container>
          <div className="grid items-start gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="flex flex-col gap-5">
              <h2 className="font-display text-xl font-bold text-navy">
                Practice on your terms
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
                Looking for care instead?{" "}
                <Link
                  href="/signup/patient"
                  className="font-semibold text-trust-deep hover:underline"
                >
                  Sign up as a patient
                </Link>
                .
              </div>
            </div>

            <div>
              <DoctorSignupForm />
              <p className="mt-5 text-center text-[0.9rem] text-muted">
                Already registered?{" "}
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
