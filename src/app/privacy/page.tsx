import type { Metadata } from "next";
import { LegalLayout } from "@/components/sections/LegalLayout";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How Doctium collects, uses, protects and shares personal and health information across the Doctium platform.",
};

export default function PrivacyPage() {
  return (
    <LegalLayout
      eyebrow="Legal"
      title="Privacy Policy"
      updated="June 2026"
      intro="Doctium handles sensitive health information. This policy explains, in plain language, what we collect, why, and the controls that protect it."
      blocks={[
        {
          heading: "Information we process",
          body: [
            "Depending on how you use Doctium, we may process account and contact details, clinical and health information you or your clinicians enter, and technical data such as device and usage information.",
            "Health information is processed on behalf of the patient and the treating hospital or clinician, under appropriate consent and legal bases.",
          ],
        },
        {
          heading: "How we use information",
          body: [
            "To provide and operate the Doctium platform (the hospital operating system and the telemedicine marketplace), to deliver care-related features, to secure the service, and to meet legal and regulatory obligations.",
            "AI features assist, recommend, summarize, route and monitor. Licensed clinicians remain responsible for final clinical decisions, and AI-generated clinical documentation must be reviewed and approved by a clinician.",
          ],
        },
        {
          heading: "Consent & recordings",
          body: [
            "Where consultations are recorded for documentation, recording is consent-gated, and access to recordings is logged.",
          ],
        },
        {
          heading: "Data protection & your rights",
          body: [
            "We apply least-privilege access, encryption, audit logging and other safeguards. Records can be exported in standards-based formats (FHIR R4).",
            "Subject to applicable law, you may request access to, correction of, or deletion of your personal data.",
          ],
        },
        {
          heading: "Contact",
          body: [
            "For privacy questions or requests, contact hello@doctiumhealth.com.",
          ],
        },
      ]}
    />
  );
}
