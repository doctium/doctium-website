import { ArrowRight, Wallet, TrendingUp } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Reveal, RevealGroup, RevealItem } from "@/components/motion/Reveal";
import { Icon } from "@/components/ui/Icon";
import { siteConfig } from "@/content/site";

const doctorBenefits = [
  {
    icon: "BadgeCheck",
    title: "Verified profile",
    desc: "Pass MDCN KYC once and present a trusted, identity-verified profile that patients can book with confidence.",
  },
  {
    icon: "CalendarHeart",
    title: "Bookings & schedule",
    desc: "Accept consults over chat, voice and video on your own availability — no front desk required.",
  },
  {
    icon: "Wallet",
    title: "Earnings & payouts",
    desc: "A clear earnings dashboard with secure wallet balances and direct bank payouts in naira.",
  },
  {
    icon: "Network",
    title: "Specialist referrals",
    desc: "Refer within the verified network when a case needs another specialty — and receive referrals back.",
  },
  {
    icon: "FileBarChart",
    title: "Premium analytics",
    desc: "Understand your practice with consultation, patient and revenue insights on a premium tier.",
  },
  {
    icon: "FileSignature",
    title: "Signed prescriptions",
    desc: "Issue cryptographically signed e-prescriptions with QR verification and pharmacy hand-off.",
  },
];

function EarningsPanel() {
  return (
    <div className="rounded-[2rem] border border-line bg-white p-6 shadow-[var(--shadow-card)]">
      <div className="flex items-center justify-between">
        <span className="font-mono text-[0.62rem] uppercase tracking-[0.18em] text-trust">
          Earnings · this month
        </span>
        <span className="inline-flex items-center gap-1 rounded-full bg-success/10 px-2.5 py-1 text-[0.66rem] font-semibold text-success">
          <TrendingUp className="h-3.5 w-3.5" /> Paid out
        </span>
      </div>
      <div className="mt-4 flex items-baseline gap-2">
        <span className="font-display text-3xl font-bold text-navy">₦ 842,500</span>
        <span className="text-[0.74rem] text-muted">available</span>
      </div>

      {/* tiny bar chart */}
      <div className="mt-5 flex items-end gap-2">
        {[40, 62, 48, 78, 56, 88, 70].map((h, i) => (
          <div key={i} className="flex-1">
            <div
              className="w-full rounded-t-md bg-gradient-to-t from-trust to-sky"
              style={{ height: `${h * 0.7}px` }}
            />
          </div>
        ))}
      </div>
      <div className="mt-2 flex justify-between font-mono text-[0.58rem] uppercase tracking-wide text-faint">
        <span>Mon</span>
        <span>Sun</span>
      </div>

      <div className="mt-5 flex items-center gap-3 rounded-2xl bg-navy-50 px-4 py-3">
        <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-navy text-white">
          <Wallet className="h-4 w-4" />
        </span>
        <div>
          <p className="text-[0.78rem] font-semibold text-navy">Direct bank payout</p>
          <p className="text-[0.68rem] text-muted">Naira-precise, escrow-backed</p>
        </div>
      </div>
    </div>
  );
}

export function ForDoctors() {
  return (
    <Section tone="light" id="for-doctors">
      <Container>
        <div className="grid items-center gap-14 lg:grid-cols-[0.95fr_1.05fr]">
          {/* Visual */}
          <Reveal delay={0.1} className="order-2 lg:order-1">
            <div className="relative">
              <div className="absolute -inset-6 -z-10 rounded-[2.5rem] bg-gradient-to-br from-mist to-trust-light/50 blur-2xl" />
              <EarningsPanel />
            </div>
          </Reveal>

          {/* Copy */}
          <div className="order-1 lg:order-2">
            <Reveal>
              <Eyebrow>For doctors</Eyebrow>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="mt-5 text-balance text-[clamp(1.9rem,4.4vw,3rem)] font-bold leading-[1.05] text-navy">
                Grow your practice on <span className="text-gradient-navy">Doctium.</span>
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted">
                Reach verified patients, run consultations on your terms, and get paid
                reliably. Doctium handles the bookings, payments and prescriptions so you can
                focus on care.
              </p>
            </Reveal>

            <RevealGroup className="mt-8 grid gap-x-6 gap-y-5 sm:grid-cols-2" stagger={0.06}>
              {doctorBenefits.map((b) => (
                <RevealItem key={b.title}>
                  <div className="flex gap-3">
                    <span className="mt-0.5 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-navy-50 text-navy">
                      <Icon name={b.icon} className="h-5 w-5" />
                    </span>
                    <div>
                      <p className="text-[0.92rem] font-semibold text-navy">{b.title}</p>
                      <p className="text-[0.82rem] leading-snug text-muted">{b.desc}</p>
                    </div>
                  </div>
                </RevealItem>
              ))}
            </RevealGroup>

            <Reveal delay={0.2}>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <Button
                  href="/signup/doctor"
                  variant="primary"
                  size="lg"
                  iconRight={<ArrowRight className="h-4 w-4" />}
                >
                  Join as a doctor
                </Button>
                <Button href={siteConfig.links.dashboard} variant="secondary" size="lg">
                  Sign in to your dashboard
                </Button>
              </div>
            </Reveal>
          </div>
        </div>
      </Container>
    </Section>
  );
}
