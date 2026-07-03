export const siteConfig = {
  name: "Doctium",
  domain: "doctiumhealth.com",
  url: "https://doctiumhealth.com",
  slogan: "An AI-native hospital operating system for African healthcare.",
  shortDescription:
    "Doctium is an AI-native hospital operating system for African healthcare — a hospital EHR and a telemedicine marketplace, with ambient clinical documentation and personalized medicine built in.",
  // External destinations
  links: {
    dashboard: "https://dashboard.doctiumhealth.com",
    api: "https://api.doctiumhealth.com",
    signup: "/signup",
    // TEMPORARY store links — swap for the real app listings once published.
    appStore: "https://www.apple.com/app-store/",
    playStore: "https://play.google.com/store/apps",
    demo: "/contact",
    email: "hello@doctiumhealth.com",
  },
  social: {
    linkedin: "#",
    x: "#",
    instagram: "#",
  },
} as const;

export type NavLink = { label: string; href: string; desc?: string };
export type NavGroup = { label: string; links: NavLink[] };

/** Header mega-menu. */
export const navGroups: NavGroup[] = [
  {
    label: "Hospitals",
    links: [
      {
        label: "The Hospital OS",
        href: "/ehr",
        desc: "AI-native EHR — clinical, financial & operational workflows",
      },
      {
        label: "Doctium Scribe",
        href: "/scribe",
        desc: "Ambient AI clinical documentation, doctor-reviewed",
      },
      {
        label: "Personalized Medicine",
        href: "/personalized-medicine",
        desc: "n-of-1 care, starting with sickle cell disease",
      },
    ],
  },
  {
    label: "Patients",
    links: [
      {
        label: "Telemedicine",
        href: "/telemedicine",
        desc: "See a verified doctor in minutes — chat, voice & video",
      },
      {
        label: "Create an account",
        href: "/signup/patient",
        desc: "Sign up to see verified doctors",
      },
      {
        label: "Download the app",
        href: "/telemedicine#download",
        desc: "Doctium for iOS & Android",
      },
    ],
  },
  {
    label: "Company",
    links: [
      { label: "About", href: "/about", desc: "The AI-native OS thesis & mission" },
      { label: "Team", href: "/team", desc: "The people building Doctium" },
      { label: "Careers", href: "/careers", desc: "Open roles — build with us" },
      { label: "Contact", href: "/contact", desc: "Book a demo or talk to our team" },
    ],
  },
  {
    label: "Resources",
    links: [
      { label: "Blog", href: "/blog", desc: "Insights on AI-native healthcare" },
      { label: "Newsroom", href: "/newsroom", desc: "Announcements & press" },
    ],
  },
];

export const footerNav: NavGroup[] = [
  {
    label: "For Hospitals",
    links: [
      { label: "The Hospital OS", href: "/ehr" },
      { label: "Doctium Scribe", href: "/scribe" },
      { label: "Personalized Medicine", href: "/personalized-medicine" },
      { label: "Book a demo", href: "/contact" },
    ],
  },
  {
    label: "For Patients",
    links: [
      { label: "Telemedicine", href: "/telemedicine" },
      { label: "Create an account", href: "/signup/patient" },
      { label: "Join as a doctor", href: "/signup/doctor" },
      { label: "Download the app", href: "/telemedicine#download" },
      { label: "Sign in", href: siteConfig.links.dashboard },
    ],
  },
  {
    label: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Team", href: "/team" },
      { label: "Careers", href: "/careers" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    label: "Resources",
    links: [
      { label: "Blog", href: "/blog" },
      { label: "Newsroom", href: "/newsroom" },
      { label: "Privacy", href: "/privacy" },
      { label: "Terms", href: "/terms" },
    ],
  },
];
