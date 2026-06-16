import { BadgeCheck, FileSignature, Lock, UserCheck, QrCode } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { AuroraBackground } from "@/components/motion/AuroraBackground";
import { CursorSpotlight } from "@/components/motion/CursorSpotlight";
import { Reveal, RevealGroup, RevealItem } from "@/components/motion/Reveal";

const trust = [
  {
    icon: BadgeCheck,
    title: "MDCN-verified doctors",
    desc: "Every doctor passes identity and licence verification (MDCN KYC) before they can be booked. No anonymous advice — only accountable, registered clinicians.",
  },
  {
    icon: FileSignature,
    title: "Signed e-prescriptions",
    desc: "Prescriptions are cryptographically signed with Ed25519 and carry a QR code that pharmacies can verify — tamper-evident from doctor to dispense.",
  },
  {
    icon: Lock,
    title: "Encrypted video & chat",
    desc: "Consultations run over encrypted channels, and sensitive actions are scoped and audit-logged. Your health conversations stay private.",
  },
  {
    icon: UserCheck,
    title: "Doctor-in-the-loop AI",
    desc: "Leenah triages and routes; it never diagnoses or prescribes alone. A licensed clinician remains responsible for every clinical decision.",
  },
];

function VerifyCard() {
  return (
    <div className="glass-dark mx-auto mt-14 flex max-w-2xl flex-col items-center gap-5 rounded-3xl p-7 text-center sm:flex-row sm:text-left">
      <span className="inline-flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-white/10 text-sky">
        <QrCode className="h-8 w-8" strokeWidth={1.5} />
      </span>
      <div>
        <p className="font-mono text-[0.62rem] uppercase tracking-[0.18em] text-sky">
          Prescription verification
        </p>
        <p className="mt-2 text-balance text-[0.98rem] leading-relaxed text-white/80">
          Scan the QR on any Doctium prescription to confirm the issuing doctor, the
          signature and that nothing has been altered — before a single tablet is dispensed.
        </p>
      </div>
    </div>
  );
}

export function Trust() {
  return (
    <Section tone="ink" id="trust">
      <AuroraBackground />
      <CursorSpotlight />
      <Container className="relative z-10">
        <SectionHeading
          tone="dark"
          eyebrow="Trust & safety"
          title={
            <>
              Real doctors. <span className="text-gradient">Real safeguards.</span>
            </>
          }
          lede="Telemedicine only works if you can trust who is on the other end — and what happens to your data. Doctium is built so you can."
        />

        <RevealGroup className="mt-14 grid gap-5 sm:grid-cols-2" stagger={0.08}>
          {trust.map((t) => {
            const TIcon = t.icon;
            return (
              <RevealItem key={t.title}>
                <div className="glass-dark lift flex h-full gap-4 rounded-3xl p-6 hover:border-white/25">
                  <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-trust/15 text-sky">
                    <TIcon className="h-6 w-6" strokeWidth={1.75} />
                  </span>
                  <div>
                    <h3 className="text-lg font-bold text-white">{t.title}</h3>
                    <p className="mt-2 text-[0.9rem] leading-relaxed text-white/65">{t.desc}</p>
                  </div>
                </div>
              </RevealItem>
            );
          })}
        </RevealGroup>

        <Reveal delay={0.1}>
          <VerifyCard />
        </Reveal>
      </Container>
    </Section>
  );
}
