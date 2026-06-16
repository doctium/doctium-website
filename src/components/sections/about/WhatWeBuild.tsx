import { ArrowRight } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { RevealGroup, RevealItem } from "@/components/motion/Reveal";
import { Icon } from "@/components/ui/Icon";

const products = [
  {
    icon: "Database",
    title: "Hospital OS (EHR)",
    desc: "An AI-native EHR uniting clinical, financial, operational and administrative workflows — shipping module by module.",
    href: "/ehr",
  },
  {
    icon: "Video",
    title: "Telemedicine marketplace",
    desc: "Patients reach MDCN-verified doctors in minutes over secure chat, voice and video — with AI triage and signed e-prescriptions.",
    href: "/telemedicine",
  },
  {
    icon: "Mic",
    title: "Doctium Scribe",
    desc: "Ambient clinical documentation that turns consented consultations into structured, doctor-reviewed notes.",
    href: "/scribe",
  },
  {
    icon: "Dna",
    title: "Personalized medicine",
    desc: "n-of-1 care agents that adapt treatment to the individual, starting with sickle cell disease.",
    href: "/personalized-medicine",
  },
];

export function WhatWeBuild() {
  return (
    <Section tone="canvas" id="platform">
      <Container>
        <SectionHeading
          eyebrow="What we're building"
          title={
            <>
              One platform, <span className="text-gradient-navy">four ways</span> in.
            </>
          }
          lede="The Hospital OS and a patient-facing telemedicine marketplace, with ambient documentation and personalized medicine built in — all sharing one structured record."
        />

        <RevealGroup className="mt-14 grid gap-6 md:grid-cols-2" stagger={0.08}>
          {products.map((p) => (
            <RevealItem key={p.title}>
              <a
                href={p.href}
                className="lift group flex h-full items-start gap-5 rounded-3xl border border-line bg-white p-7 shadow-[var(--shadow-soft)] hover:border-navy/15 hover:shadow-[var(--shadow-card)]"
              >
                <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-navy-50 text-navy transition-colors group-hover:bg-navy group-hover:text-white">
                  <Icon name={p.icon} className="h-6 w-6" />
                </span>
                <div>
                  <h3 className="flex items-center gap-1.5 font-display text-lg font-bold text-navy">
                    {p.title}
                    <ArrowRight className="h-4 w-4 text-muted transition-transform group-hover:translate-x-0.5 group-hover:text-navy" />
                  </h3>
                  <p className="mt-2 text-[0.95rem] leading-relaxed text-muted">{p.desc}</p>
                </div>
              </a>
            </RevealItem>
          ))}
        </RevealGroup>
      </Container>
    </Section>
  );
}
