import { LegalLayout } from "@/components/sections/LegalLayout";
import { pageMeta } from "@/lib/seo";
import { PRIVACY } from "@/content/legal";

export const metadata = pageMeta({
  title: "Privacy Policy",
  description:
    "How Doctium collects, uses, protects and shares personal and health information across the Doctium platform.",
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <LegalLayout
      eyebrow="Legal"
      title="Privacy Policy"
      updated="1 June 2026"
      intro="Doctium handles sensitive health information. This policy explains what we collect, why, and the controls that protect it."
      // Skip the source document's own title + effective-date lines (the hero shows them).
      blocks={PRIVACY.slice(2)}
    />
  );
}
