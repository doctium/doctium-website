import { Check, Wallet, ShieldCheck, TrendingUp } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal, RevealGroup, RevealItem } from "@/components/motion/Reveal";

const billing = {
  icon: Wallet,
  eyebrow: "Billing & Revenue",
  title: "Revenue stops leaking.",
  body: "Every encounter emits billing artifacts the moment it happens, so the finance office sees what was actually delivered, not a guess at month-end.",
  points: [
    "Invoices, receipts and estimates from each encounter",
    "Patient wallets & prepayment for cash and deposits",
    "Revenue reports by service, department and period",
    "A live finance dashboard for daily reconciliation",
  ],
};

const insurance = {
  icon: ShieldCheck,
  eyebrow: "Insurance / HMO / NHIA",
  title: "Claims that close cleanly.",
  body: "Capitation, claims and returns are first-class, built around how Nigerian HMOs and the NHIA actually operate, with awareness at the point of service.",
  points: [
    "Capitation management and member rosters",
    "Claim batches with end-to-end tracking",
    "Point-of-service eligibility awareness",
    "NHIA returns and HMO performance analytics",
  ],
};

function SpotlightCard({
  data,
}: {
  data: typeof billing;
}) {
  const Glyph = data.icon;
  return (
    <div className="flex h-full flex-col rounded-[2rem] border border-line bg-white p-8 shadow-[var(--shadow-card)]">
      <div className="flex items-center gap-3">
        <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-navy text-sky">
          <Glyph className="h-6 w-6" strokeWidth={1.75} />
        </span>
        <div>
          <span className="font-mono text-[0.66rem] uppercase tracking-[0.16em] text-trust-deep">
            {data.eyebrow}
          </span>
          <span className="ml-2 rounded-full bg-success/10 px-2 py-0.5 font-mono text-[0.6rem] font-semibold uppercase tracking-wide text-success">
            V1 · live
          </span>
        </div>
      </div>

      <h3 className="mt-6 text-[1.6rem] font-bold leading-tight text-navy">{data.title}</h3>
      <p className="mt-3 text-[0.95rem] leading-relaxed text-muted">{data.body}</p>

      <ul className="mt-6 space-y-3 border-t border-line pt-6">
        {data.points.map((p) => (
          <li key={p} className="flex items-start gap-3">
            <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-md bg-trust-light text-trust-deep">
              <Check className="h-3.5 w-3.5" />
            </span>
            <span className="text-[0.92rem] leading-relaxed text-body">{p}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function EhrFinance() {
  return (
    <Section tone="light" id="finance">
      <Container>
        <SectionHeading
          eyebrow="The complete edge"
          title={
            <>
              The financial spine is{" "}
              <span className="text-gradient-navy">already live.</span>
            </>
          }
          lede="Billing & Revenue and Insurance / HMO / NHIA are the most complete modules in the OS, because a hospital that can't bill cleanly can't run, no matter how good the clinical software is."
        />

        <RevealGroup className="mt-14 grid gap-6 lg:grid-cols-2" stagger={0.12}>
          <RevealItem>
            <SpotlightCard data={billing} />
          </RevealItem>
          <RevealItem>
            <SpotlightCard data={insurance} />
          </RevealItem>
        </RevealGroup>

        <Reveal delay={0.1}>
          <div className="mt-8 flex items-center justify-center gap-3 rounded-3xl border border-trust/20 bg-trust-light/50 px-6 py-5 text-center">
            <TrendingUp className="h-5 w-5 shrink-0 text-trust-deep" />
            <p className="text-balance text-[0.95rem] leading-relaxed text-navy">
              <span className="font-semibold">Because billing is an artifact, not an afterthought,</span>{" "}
              revenue integrity becomes a closed loop; every service rendered is a service that can be billed.
            </p>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
