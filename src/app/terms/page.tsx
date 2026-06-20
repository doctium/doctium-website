import { LegalLayout } from "@/components/sections/LegalLayout";
import { pageMeta } from "@/lib/seo";
import { TERMS } from "@/content/legal";

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
      updated="1 June 2026"
      intro="These terms govern your access to and use of the Doctium platform. By using Doctium, you agree to them."
      // Skip the source document's own title + date lines (the hero shows them).
      blocks={TERMS.slice(2)}
    />
  );
}
