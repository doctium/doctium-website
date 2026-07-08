/**
 * Single source of truth for product content shared across the homepage and
 * sub-pages. Sourced from the Doctium project memory (both arms). `icon` values
 * map to lucide icons via components/ui/Icon.tsx.
 */

export type IconName = string;

export type Item = {
  icon: IconName;
  title: string;
  desc: string;
  tag?: string;
};

/* ------------------------------------------------------------------ */
/* The thesis                                                          */
/* ------------------------------------------------------------------ */

export const artifactFlow = [
  {
    step: "01",
    title: "Every workflow",
    desc: "Clinical, financial, operational and administrative work happens across the hospital.",
  },
  {
    step: "02",
    title: "Produces a structured artifact",
    desc: "Notes, orders, results, claims, vitals and ledgers, captured as clean, structured data, not free text trapped in PDFs.",
  },
  {
    step: "03",
    title: "Feeds an intelligent loop",
    desc: "AI assists, recommends, summarizes, routes and monitors against those artifacts in real time.",
  },
  {
    step: "04",
    title: "Improves the outcome",
    desc: "Better care quality, lighter documentation, less revenue leakage, faster operations, and readiness for personalized medicine.",
  },
];

/* ------------------------------------------------------------------ */
/* The intelligent closed loops                                        */
/* ------------------------------------------------------------------ */

export const closedLoops: Item[] = [
  {
    icon: "HeartPulse",
    title: "Care quality",
    desc: "Structured clinical artifacts power risk detection, care-gap alerts and guideline nudges, surfaced to the clinician, never acting alone.",
    tag: "Clinical",
  },
  {
    icon: "FileText",
    title: "Documentation burden",
    desc: "Doctium Scribe turns the consultation into a structured, reviewable note so clinicians spend time on patients, not paperwork.",
    tag: "Clinical",
  },
  {
    icon: "Wallet",
    title: "Revenue integrity",
    desc: "Every encounter emits billing artifacts, invoices, receipts, estimates, claims and ledgers, closing the gaps where revenue leaks.",
    tag: "Financial",
  },
  {
    icon: "Gauge",
    title: "Operational speed",
    desc: "Routing, queues, ward and bed state, lab and imaging turnaround, monitored continuously so bottlenecks surface early.",
    tag: "Operational",
  },
];

/* ------------------------------------------------------------------ */
/* The Hospital OS — module ecosystem                                  */
/* ------------------------------------------------------------------ */

export const ehrModules: Item[] = [
  { icon: "Wallet", title: "Billing & Revenue", desc: "Invoices, receipts, estimates, wallets, revenue reports & a live finance dashboard.", tag: "V1" },
  { icon: "ShieldCheck", title: "Insurance / HMO / NHIA", desc: "Capitation, claim batches, point-of-service awareness, NHIA returns & HMO analytics.", tag: "V1" },
  { icon: "BedDouble", title: "Inpatient & Wards", desc: "Ward dashboard, bed state, admissions, ADT and gender-policy enforcement." },
  { icon: "Stethoscope", title: "Clinical Station (OPD)", desc: "Outpatient consultations, encounters and the clinician workspace." },
  { icon: "Pill", title: "Pharmacy", desc: "Dispensing, medication records and the prescription pipeline." },
  { icon: "FlaskConical", title: "Laboratory", desc: "Orders, worklists, results and eligibility checks." },
  { icon: "ScanLine", title: "Imaging & Radiology", desc: "Imaging orders, studies and reporting." },
  { icon: "Syringe", title: "Nursing", desc: "Nursing workflows, observations and care delivery at the bedside." },
  { icon: "Activity", title: "Surgery & Theatre", desc: "Theatre scheduling and the peri-operative record." },
  { icon: "Siren", title: "Emergency", desc: "Emergency intake, triage and rapid clinical capture." },
  { icon: "ClipboardList", title: "Patient Administration", desc: "Registration, identity, encounters and the patient master index." },
  { icon: "Droplets", title: "Blood Bank", desc: "Stock, cross-matching and transfusion records." },
  { icon: "Database", title: "Health Information (HIM)", desc: "The longitudinal chart, coding and records governance." },
  { icon: "FileSignature", title: "Legal & Forms", desc: "Consent templates, digital signing, incidents and printable forms." },
];

/* ------------------------------------------------------------------ */
/* Doctium Scribe — structured note sections                           */
/* ------------------------------------------------------------------ */

export const scribeNoteSections = [
  "History",
  "Examination findings",
  "Assessment",
  "Plan",
  "Referrals",
  "Orders",
  "Billing cues",
  "Patient instructions",
];

export const scribeBenefits: Item[] = [
  { icon: "Mic", title: "Ambient capture", desc: "With patient consent, Scribe captures the encounter from chat, dictation or a consented recording." },
  { icon: "LayoutList", title: "Structured draft", desc: "It organises the visit into history, exam, assessment, plan, referrals, orders, billing cues and instructions." },
  { icon: "UserCheck", title: "Doctor stays in control", desc: "Every AI note must be reviewed, edited and approved by the clinician before it enters the record." },
  { icon: "ShieldPlus", title: "Audited & private", desc: "Consent-gated, with an access log on every AI read of a recording. Provenance travels with the draft." },
];

export const scribeOutcomes = [
  "Reduces documentation burden",
  "Improves chart completeness",
  "Supports continuity of care",
  "Strengthens billing & insurance documentation",
  "Creates cleaner structured data for personalized medicine",
];

/* ------------------------------------------------------------------ */
/* Personalized medicine — Sickle Cell (n-of-1)                        */
/* ------------------------------------------------------------------ */

export const scdFeatures: Item[] = [
  { icon: "Dna", title: "Genotype-aware protocols", desc: "Care thresholds adapt to SS, SC and AS genotypes: personalization that changes the clinical decision." },
  { icon: "Brain", title: "Explainable risk engine", desc: "Every risk score breaks down into named, weighted factors, including live local weather, so clinicians can see the why." },
  { icon: "NotebookPen", title: "Crisis diary", desc: "Patients log pain, sites, triggers and hospitalizations; clinicians get the trend, not just the moment." },
  { icon: "TestTube", title: "Hydroxyurea titration", desc: "Dose-response tracking with CBC safety flags, hold-dose guidance to the doctor, never self-dosing for the patient." },
  { icon: "Bot", title: "Daily care agent", desc: "A monitoring agent nudges patients and escalates to the care team when risk rises." },
  { icon: "FileBarChart", title: "Outcomes & research data", desc: "Admin outcomes dashboards plus anonymized, reference-only data for research and pilots." },
];

/* ------------------------------------------------------------------ */
/* Telemedicine marketplace                                            */
/* ------------------------------------------------------------------ */

export const telemedFeatures: Item[] = [
  { icon: "BadgeCheck", title: "Verified doctors", desc: "Every doctor is identity- and licence-verified (MDCN KYC) before they are bookable." },
  { icon: "Bot", title: "Leenah, AI triage", desc: "A safety-first AI symptom checker with red-flag detection, in seven languages, that routes patients to the right care." },
  { icon: "Video", title: "Secure chat, voice & video", desc: "Consult from anywhere: text, voice notes and encrypted video calls." },
  { icon: "FileSignature", title: "Digital prescriptions", desc: "Cryptographically signed e-prescriptions with QR verification and pharmacy hand-off." },
  { icon: "CalendarHeart", title: "Chronic care programs", desc: "Enrolment, vitals logging, threshold alerts, goals and adherence for long-term conditions." },
  { icon: "Languages", title: "Built multilingual", desc: "English, Nigerian Pidgin, Hausa, Yoruba, Igbo, French and Arabic across the patient experience." },
];

/* ------------------------------------------------------------------ */
/* Trust & safety                                                      */
/* ------------------------------------------------------------------ */

export const trustPoints: Item[] = [
  { icon: "UserCheck", title: "Doctor-in-the-loop", desc: "AI assists, recommends, summarizes, routes and monitors. Licensed humans remain responsible for every final clinical and financial decision." },
  { icon: "FileJson", title: "FHIR R4 interoperable", desc: "Patient records export as standards-based FHIR R4 bundles, built to connect, not to lock in." },
  { icon: "ShieldCheck", title: "Consent & audit by design", desc: "Recording is consent-gated; every sensitive action is audit-logged; clinical data access is scoped." },
  { icon: "Lock", title: "Hardened & private", desc: "Fail-closed secrets, rate-limited auth, encrypted records and least-privilege role-based access control." },
];

/* ------------------------------------------------------------------ */
/* Built for Africa                                                    */
/* ------------------------------------------------------------------ */

export const africaPoints: Item[] = [
  { icon: "MapPin", title: "Nigeria-first", desc: "Designed around how Nigerian hospitals, doctors and patients actually work, then built to scale across the continent." },
  { icon: "Languages", title: "Multilingual", desc: "Seven languages today, with a localization framework ready for more." },
  { icon: "Banknote", title: "Local payments", desc: "Naira-precise to the kobo, with Paystack, wallets and escrow, multi-currency ready." },
  { icon: "Wifi", title: "Network-aware", desc: "Tuned for real mobile networks and devices, not just fast-office Wi-Fi." },
];

/* ------------------------------------------------------------------ */
/* Headline trust chips                                                */
/* ------------------------------------------------------------------ */

export const trustChips = [
  "Live in production",
  "FHIR R4 interoperable",
  "Doctor-in-the-loop AI",
  "MDCN-verified doctors",
  "Nigeria-first · multi-region ready",
];
