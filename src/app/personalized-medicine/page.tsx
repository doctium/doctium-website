import { pageMeta } from "@/lib/seo";
import { PMHero } from "@/components/sections/personalized-medicine/PMHero";
import { WhySickleCell } from "@/components/sections/personalized-medicine/WhySickleCell";
import { Capabilities } from "@/components/sections/personalized-medicine/Capabilities";
import { ExplainableRisk } from "@/components/sections/personalized-medicine/ExplainableRisk";
import { Titration } from "@/components/sections/personalized-medicine/Titration";
import { BothArms } from "@/components/sections/personalized-medicine/BothArms";
import { SafetyStance } from "@/components/sections/personalized-medicine/SafetyStance";
import { CTASection } from "@/components/sections/CTASection";

export const metadata = pageMeta({
  title: "Personalized Medicine",
  description:
    "Doctium's personalized-medicine agents use structured patient data, diagnostics and genetics to guide patient-specific decisions, starting with sickle cell disease, where personalization genuinely changes the treatment.",
  path: "/personalized-medicine",
});

export default function PersonalizedMedicinePage() {
  return (
    <>
      <PMHero />
      <WhySickleCell />
      <Capabilities />
      <ExplainableRisk />
      <Titration />
      <BothArms />
      <SafetyStance />
      <CTASection
        eyebrow="Get started"
        title={<>Personalized medicine, built on structured data.</>}
        lede="See the explainable risk engine, hydroxyurea titration and the daily care agent in a live walkthrough, built for your hospital and your patients."
        primary={{ label: "Book a demo", href: "/contact" }}
        secondary={{ label: "See the Hospital OS", href: "/ehr" }}
      />
    </>
  );
}
