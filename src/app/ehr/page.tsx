import { EhrHero } from "@/components/sections/ehr/EhrHero";
import { EhrThesis } from "@/components/sections/ehr/EhrThesis";
import { EhrClosedLoops } from "@/components/sections/ehr/EhrClosedLoops";
import { EhrModules } from "@/components/sections/ehr/EhrModules";
import { EhrFinance } from "@/components/sections/ehr/EhrFinance";
import { EhrAiBuiltIn } from "@/components/sections/ehr/EhrAiBuiltIn";
import { EhrTrust } from "@/components/sections/ehr/EhrTrust";
import { EhrAfrica } from "@/components/sections/ehr/EhrAfrica";
import { CTASection } from "@/components/sections/CTASection";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "The Hospital OS",
  description:
    "Doctium is an AI-native hospital EHR: every clinical, financial and operational workflow becomes structured data that feeds intelligent loops. 14+ modules, doctor-in-the-loop AI, FHIR R4.",
  path: "/ehr",
});

export default function EhrPage() {
  return (
    <>
      <EhrHero />
      <EhrThesis />
      <EhrClosedLoops />
      <EhrModules />
      <EhrFinance />
      <EhrAiBuiltIn />
      <EhrTrust />
      <EhrAfrica />
      <CTASection
        eyebrow="Get started"
        title="Bring the AI-native OS to your hospital."
        lede="Book a walkthrough of the Hospital OS: see the live finance and insurance modules, the closed loops and the doctor-in-the-loop AI on your own workflows."
        primary={{ label: "Book a demo", href: "/contact" }}
        secondary={{ label: "Talk to our team", href: "/contact" }}
      />
    </>
  );
}
