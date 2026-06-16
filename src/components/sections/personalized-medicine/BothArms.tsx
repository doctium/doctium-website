import { Check, ArrowRight } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal, RevealGroup, RevealItem } from "@/components/motion/Reveal";
import { Icon } from "@/components/ui/Icon";

const arms = [
  {
    icon: "Video",
    badge: "Live today",
    badgeTone: "success" as const,
    title: "On the telemedicine app",
    desc: "Built and running for the patient-facing side. Doctors use the full sickle cell toolkit during consultations, and the admin panel tracks outcomes across the program.",
    points: [
      "Doctors see genotype-aware risk in the consult",
      "Patients log crises and daily readings",
      "Admin outcomes dashboards track the cohort",
    ],
  },
  {
    icon: "Stethoscope",
    badge: "Coming next",
    badgeTone: "navy" as const,
    title: "Inside the hospital EHR",
    desc: "We are bringing the same personalized-medicine engine into the Hospital OS — so inpatient and outpatient teams work from one structured record, not a separate tool.",
    points: [
      "Same genotype-aware thresholds and scores",
      "Pre-visit brief ready in the clinical station",
      "Shared longitudinal chart, no double entry",
    ],
  },
];

export function BothArms() {
  return (
    <Section tone="canvas" id="both-arms">
      <Container>
        <SectionHeading
          eyebrow="Both arms, one engine"
          title={
            <>
              Proven on the app. <span className="text-gradient-navy">Coming to the EHR.</span>
            </>
          }
          lede="The same structured patient data drives personalized care in the telemedicine app today and in the hospital EHR next — no separate model, no separate record."
        />

        <RevealGroup className="mt-14 grid gap-6 lg:grid-cols-2" stagger={0.12}>
          {arms.map((arm) => (
            <RevealItem key={arm.title}>
              <div className="lift flex h-full flex-col rounded-[2rem] border border-line bg-white p-7 shadow-[var(--shadow-card)] md:p-8">
                <div className="flex items-center justify-between">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-navy-50 text-navy">
                    <Icon name={arm.icon} className="h-6 w-6" />
                  </span>
                  <span
                    className={
                      arm.badgeTone === "success"
                        ? "rounded-full bg-success/10 px-3 py-1 font-mono text-[0.62rem] font-semibold uppercase tracking-wide text-success"
                        : "rounded-full bg-navy/5 px-3 py-1 font-mono text-[0.62rem] font-semibold uppercase tracking-wide text-navy"
                    }
                  >
                    {arm.badge}
                  </span>
                </div>
                <h3 className="mt-5 text-xl font-bold text-navy">{arm.title}</h3>
                <p className="mt-2 text-[0.95rem] leading-relaxed text-muted">{arm.desc}</p>
                <ul className="mt-5 space-y-2.5 border-t border-line pt-5">
                  {arm.points.map((p) => (
                    <li key={p} className="flex items-start gap-2.5 text-[0.9rem] text-body">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-trust-deep" />
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>

        <Reveal delay={0.1}>
          <div className="mt-10 flex flex-col items-center justify-between gap-4 rounded-3xl border border-line bg-white px-6 py-6 text-center shadow-[var(--shadow-soft)] sm:flex-row sm:text-left">
            <p className="text-balance text-base text-muted">
              <span className="font-semibold text-navy">One profile, two front doors.</span>{" "}
              Cleaner structured data from every encounter is what makes personalized
              medicine possible across both.
            </p>
            <a
              href="/ehr"
              className="link-underline inline-flex items-center gap-1.5 whitespace-nowrap font-display font-semibold text-navy"
            >
              See the Hospital OS <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
