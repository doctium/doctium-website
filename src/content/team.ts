export interface TeamMember {
  name: string;
  role: string;
  bio?: string;
  avatarUrl?: string; // e.g. "/team/ada.jpg" (drop photos in public/team/)
  linkedinUrl?: string;
}

/**
 * Replace with the real Doctium team. Until populated, the /team page shows a
 * tasteful "profiles coming soon" state + the values below. Example shape:
 *   { name: "Ada Obi", role: "Founder & CEO", bio: "…", avatarUrl: "/team/ada.jpg", linkedinUrl: "https://linkedin.com/in/…" }
 */
export const teamMembers: TeamMember[] = [];

export const teamValues: { icon: string; title: string; desc: string }[] = [
  {
    icon: "UserCheck",
    title: "Doctor-in-the-loop",
    desc: "AI assists, recommends and monitors. A licensed human owns every final clinical and financial decision. We never ship autonomy where accountability matters.",
  },
  {
    icon: "MapPin",
    title: "Built for Africa, from Africa",
    desc: "We design around how Nigerian hospitals, doctors and patients actually work — real networks, real workflows, real payment rails — then scale across the continent.",
  },
  {
    icon: "Gauge",
    title: "Ship, measure, learn",
    desc: "We put real software in front of real clinicians and improve it with evidence. Structured data in, better outcomes out — for our product as much as for care.",
  },
  {
    icon: "ShieldCheck",
    title: "Earn trust, every time",
    desc: "Health data is sacred. Consent, audit, least-privilege access and interoperability aren't features we bolt on — they're how we build from line one.",
  },
];
