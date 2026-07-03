/**
 * Signup option catalogs — kept in sync with the mobile apps so a web signup
 * produces identical data. Doctor specialities mirror the doctor app's
 * register screen (apps/doctor-app/app/(auth)/register/index.tsx) and the
 * spoken-language codes mirror apps/doctor-app/src/constants/languages.ts.
 */

export const DOCTOR_SPECIALITIES = [
  "General Practitioner",
  "Resident Doctor",
  "Consultant",
] as const;

export interface SpokenLanguage {
  code: string;
  label: string; // English label
  native: string; // endonym
}

export const SPOKEN_LANGUAGES: SpokenLanguage[] = [
  { code: "en", label: "English", native: "English" },
  { code: "pcm", label: "Nigerian Pidgin", native: "Pidgin" },
  { code: "ha", label: "Hausa", native: "Hausa" },
  { code: "yo", label: "Yoruba", native: "Yorùbá" },
  { code: "ig", label: "Igbo", native: "Igbo" },
  { code: "ar", label: "Arabic", native: "العربية" },
  { code: "fr", label: "French", native: "Français" },
];
