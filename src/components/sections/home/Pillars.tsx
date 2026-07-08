import Link from "next/link";
import { ArrowUpRight, Building2, Smartphone, Check } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal, RevealGroup, RevealItem } from "@/components/motion/Reveal";

const pillars = [
  {
    eyebrow: "For hospitals",
    icon: Building2,
    title: "The Hospital OS",
    desc: "An AI-native EHR that runs clinical, financial and operational workflows, and turns each one into structured data that powers intelligent loops.",
    points: [
      "14+ modules: billing, insurance, wards, pharmacy, lab & more",
      "Doctium Scribe, ambient AI documentation",
      "Personalized medicine, starting with sickle cell",
    ],
    href: "/ehr",
    cta: "Explore the Hospital OS",
    tone: "navy" as const,
  },
  {
    eyebrow: "For patients & doctors",
    icon: Smartphone,
    title: "Telemedicine marketplace",
    desc: "A multi-doctor marketplace that connects patients to identity-verified doctors in minutes, with AI triage, secure video, e-prescriptions and chronic-care programs.",
    points: [
      "MDCN-verified doctors, bookable in minutes",
      "Leenah, AI symptom checker in seven languages",
      "Signed e-prescriptions, secure video & wallets",
    ],
    href: "/telemedicine",
    cta: "See telemedicine",
    tone: "light" as const,
  },
];

export function Pillars() {
  return (
    <Section tone="light" id="products">
      <Container>
        <SectionHeading
          eyebrow="Two arms · one platform"
          title="One platform, built from both ends of care."
          lede="Doctium meets healthcare where it happens, inside the hospital, and in your patient's hand."
        />

        <RevealGroup className="mt-14 grid gap-6 lg:grid-cols-2" stagger={0.12}>
          {pillars.map((p) => {
            const dark = p.tone === "navy";
            return (
              <RevealItem key={p.title}>
                <Link
                  href={p.href}
                  className={`lift group relative flex h-full flex-col overflow-hidden rounded-[2rem] p-8 md:p-10 ${
                    dark
                      ? "grain bg-navy-cinematic text-white"
                      : "border border-line bg-mist text-body"
                  }`}
                >
                  {dark && <div className="aurora opacity-50" aria-hidden />}
                  <div className="relative z-10 flex h-full flex-col">
                    <div className="flex items-center justify-between">
                      <span
                        className={`font-mono text-[0.7rem] uppercase tracking-[0.2em] ${
                          dark ? "text-sky" : "text-trust"
                        }`}
                      >
                        {p.eyebrow}
                      </span>
                      <span
                        className={`inline-flex h-11 w-11 items-center justify-center rounded-2xl ${
                          dark ? "bg-white/10 text-sky" : "bg-white text-navy shadow-[var(--shadow-soft)]"
                        }`}
                      >
                        <p.icon className="h-5 w-5" strokeWidth={1.75} />
                      </span>
                    </div>

                    <h3
                      className={`mt-6 font-display text-[1.7rem] font-bold leading-tight md:text-[2rem] ${
                        dark ? "text-white" : "text-navy"
                      }`}
                    >
                      {p.title}
                    </h3>
                    <p
                      className={`mt-3 max-w-md leading-relaxed ${
                        dark ? "text-white/70" : "text-muted"
                      }`}
                    >
                      {p.desc}
                    </p>

                    <ul className="mt-6 space-y-2.5">
                      {p.points.map((pt) => (
                        <li key={pt} className="flex items-start gap-2.5 text-[0.92rem]">
                          <Check
                            className={`mt-0.5 h-4 w-4 shrink-0 ${dark ? "text-sky" : "text-trust"}`}
                          />
                          <span className={dark ? "text-white/80" : "text-body/80"}>{pt}</span>
                        </li>
                      ))}
                    </ul>

                    <span
                      className={`mt-8 inline-flex items-center gap-1.5 font-display font-semibold ${
                        dark ? "text-white" : "text-navy"
                      }`}
                    >
                      {p.cta}
                      <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </span>
                  </div>
                </Link>
              </RevealItem>
            );
          })}
        </RevealGroup>
      </Container>
    </Section>
  );
}
