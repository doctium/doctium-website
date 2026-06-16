import { LegalLayout } from "@/components/sections/LegalLayout";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Terms of Service",
  description:
    "The terms that govern access to and use of the Doctium platform, including the hospital operating system and the telemedicine marketplace.",
  path: "/terms",
});

export default function TermsPage() {
  return (
    <LegalLayout
      eyebrow="Legal"
      title="Terms of Service"
      updated="June 2026"
      intro="These terms govern your access to and use of the Doctium platform. By using Doctium, you agree to them."
      blocks={[
        {
          heading: "Using Doctium",
          body: [
            "Doctium provides software for hospitals and a telemedicine marketplace connecting patients with verified, licensed doctors. You agree to use the platform lawfully and as intended.",
          ],
        },
        {
          heading: "Not a medical provider in itself",
          body: [
            "Doctium is a technology platform. Clinical decisions, diagnoses and prescriptions are made by licensed clinicians. AI features are assistive only and do not replace professional medical judgement. In an emergency, contact local emergency services.",
          ],
        },
        {
          heading: "Accounts & responsibilities",
          body: [
            "You are responsible for the accuracy of the information you provide and for keeping your credentials secure. Hospitals and clinicians are responsible for the clinical content they create and approve.",
          ],
        },
        {
          heading: "Payments",
          body: [
            "Where the platform facilitates payments, those are processed by third-party payment providers under their own terms.",
          ],
        },
        {
          heading: "Changes & contact",
          body: [
            "We may update these terms; material changes will be communicated through the service. Questions? Contact hello@doctiumhealth.com.",
          ],
        },
      ]}
    />
  );
}
