# Doctium Website — Design & Build Specification

**Domain:** https://doctiumhealth.com
**Repo:** https://github.com/doctium/doctium-website
**Status:** Design locked 2026-06-16. Awaiting build GO.

---

## 1. Understanding Summary

- **What:** A world-class, Awwwards-level marketing website that markets BOTH arms of Doctium —
  (1) the **Telemedicine multi-doctor marketplace** (live; mobile apps shipping to App Store / Play Store; admin at `dashboard.doctiumhealth.com`; API at `api.doctiumhealth.com`) and
  (2) the **Hospital EHR / AI-native hospital operating system** (in active build, 11 more modules to go) — plus the cross-cutting AI story: **Doctium Scribe** (ambient clinical documentation) and **Personalized Medicine** (Sickle Cell / n-of-1).
- **Why:** Position Doctium not as a traditional EHR but as **"An AI-native hospital operating system for African healthcare"** — every clinical, financial, operational, and administrative workflow produces structured artifacts that feed intelligent closed loops (care quality ↑, documentation burden ↓, revenue leakage ↓, operations speed ↑, personalized-medicine readiness). AI assists/recommends/summarizes/routes/monitors; **licensed humans remain responsible for final clinical & financial decisions.**
- **Who:** Two audiences — **Hospitals/health systems** (B2B SaaS buyers: administrators, clinical leads, finance) and **Patients + Doctors** (B2C/marketplace consumers). Plus investors/partners reading the vision.
- **Key constraints:** Must be cinematic + premium + original (parallax, scroll motion, strong typography, layered depth, polished mobile), 2026 design trends, fully responsive, fast on African mobile networks, on-brand (Doctium navy/silver/trust-blue), accessible.
- **Non-goals (now):** No public pricing page (EHR = "talk to sales"); no live app embeds; no CMS/blog backend (static content config, blog can come later); no auth/login on the marketing site.

## 2. Confirmed Decisions (from stakeholder)

| # | Decision | Choice |
|---|----------|--------|
| 1 | Site structure | **Hub + dedicated pages** |
| 2 | Homepage positioning | **AI-native hospital OS first**, telemedicine as strong second pillar |
| 3 | Motion stack | **Framer Motion (`motion`) + Lenis smooth scroll** |
| 4 | Build scope (pass 1) | **Full multi-page site now** |

## 3. Assumptions (flagged — correct me if wrong)

- **Brand canonical source = `doctium_Brand_Assets/`.** Navy `#133157`, Primary Dark `#0B1424`, Primary Light `#EAF2FA`, Clinical Silver `#B2B0B0`, Trust Blue `#2F80ED` (accent), Accent Deep `#1D4ED8`, Accent Light `#DCEBFF`, Off-White `#F8FAFC`, Body `#111827`, Muted `#6B7280`, Border `#E5E7EB`; status green/amber/red.
- **Type pairing:** Plus Jakarta Sans (display/headings) + Inter (body). Product apps already use this; brand README's "Inter-only" treated as the safe fallback.
- **CTAs:** EHR → "Book a demo / Talk to sales" → `/contact`. Telemedicine → App Store + Play Store badges (links TBD by you) + `dashboard.doctiumhealth.com` for clinic/admin sign-in.
- **Deploy:** Vercel (matches the existing admin panel), apex `doctiumhealth.com`.
- **Stack:** Next.js 15 App Router + TypeScript + Tailwind v4 + `motion` + Lenis + lucide-react. npm. Node 20.
- **Content:** Real product capabilities sourced from project memory (both arms). Stats are real where known; otherwise qualitative claims (no invented numbers). Team/testimonials = placeholders until you supply.

## 4. Open Questions (non-blocking — defaults in place)

1. App Store / Play Store URLs (placeholder `#` until provided).
2. Public contact email / phone / address for footer + contact page (defaulting to `hello@doctiumhealth.com` / `biteexpressapp@gmail.com` until told).
3. Any partner/hospital logos, doctor headshots, or real screenshots to use (placeholders + stock specs provided otherwise).
4. Social handles (LinkedIn/X/Instagram) for footer.

---

## 5. Information Architecture

```
/                        Home — AI-native hospital OS vision + both arms
/ehr                     The Hospital OS (EHR): modules, closed loops, artifacts thesis
/scribe                  Doctium Scribe — ambient AI clinical documentation
/personalized-medicine   Personalized Medicine — Sickle Cell / n-of-1 (both arms)
/telemedicine            Telemedicine multi-doctor marketplace (patients + doctors)
/about                   Company, mission, the AI-native OS manifesto
/contact                 Book a demo / talk to sales + support
/privacy  /terms         Legal stubs (footer + app-store requirement)
```

**Header (sticky, glass on scroll):** Logo · **Hospitals ▾** (The Hospital OS, Doctium Scribe, Personalized Medicine) · **Patients ▾** (Telemedicine, Download the app) · **Company ▾** (About, Contact) · CTA buttons (Book a demo / Get the app).

**Footer:** brand + slogan, sitemap columns, contact, social, legal, `api.doctiumhealth.com`, "Built for African healthcare".

## 6. Homepage Section Plan (the centerpiece)

1. **Hero** — deep-navy animated gradient-mesh + constellation/neural network (lightweight canvas/SVG). H1: *"An AI-native hospital operating system for African healthcare."* Sub: the thesis. Dual CTA. Floating glass UI cards (a SOAP note drafting, an explainable risk badge, a vitals sparkline) with parallax + cursor spotlight. Trust strip.
2. **Manifesto / thesis** — "Not a traditional EHR." Scroll-driven diagram: *workflow → structured artifact → intelligent closed loop → outcome.*
3. **Two pillars** — Hospital OS (EHR) ↔ Telemedicine marketplace (bento split; each → its page).
4. **Doctium Scribe** — ambient documentation; animated assembly of a conversation into structured note (history, exam, assessment, plan, referrals, orders, billing cues, instructions). "Doctor reviews, edits, approves — always."
5. **Personalized Medicine (SCD)** — n-of-1, genotype protocols, explainable risk engine, hydroxyurea titration; "Nigeria is the global epicenter of sickle cell." Both arms.
6. **The intelligent closed loops** — bento of 4: care quality, documentation burden, revenue leakage, operations speed → personalized-medicine readiness. "AI assists; licensed humans decide."
7. **Module ecosystem** — EHR breadth marquee/bento (Billing & Revenue, Insurance/HMO/NHIA, Inpatient/Ward, Pharmacy, Lab, Imaging, Nursing, Surgery, Emergency, Patient Admin, Clinical Station, HIM, Legal & Forms, Blood Bank…). "More modules shipping continuously."
8. **Telemedicine highlights** — see a verified doctor in minutes (MDCN-KYC), Leenah AI triage, e-prescriptions, secure video, chronic-care programs, multilingual (EN/Pidgin/Hausa/Yoruba/Igbo). App badges + device mockups.
9. **Trust & safety / compliance** — doctor-in-the-loop, FHIR R4 export, consent-based recording + access logs, security hardening, data residency.
10. **Built for Africa** — Nigeria-first, multilingual, naira/kobo precision, local payments (Paystack), multi-region-ready.
11. **CTA band** — "Bring the AI-native OS to your hospital" + "Download Doctium".
12. **Footer.**

## 7. Design System

- **Tokens** (Tailwind v4 `@theme`): brand palette above; spacing scale; radii (xl/2xl/3xl + pill); shadows (soft clinical + navy glow CTA); gradients (`aurora` navy→trust-blue→sky, `hero`, `glass`); container max-width 1280; fluid type scale (`clamp()`).
- **Type:** Plus Jakarta Sans (display, 600/700/800) + Inter (body, 400/500/600), via `next/font` (no CLS). Fluid display sizes for hero (clamp up to ~88px desktop).
- **Surfaces:** light "clinical canvas" sections (`#F8FAFC`/white) interleaved with deep-navy cinematic sections; glassmorphism cards (`backdrop-blur`, hairline borders, soft inner light); subtle grain/noise overlay on dark.
- **Components:** Button (primary navy-glow / secondary outline / ghost), Pill/Badge, Card, GlassCard, BentoGrid, SectionHeading (eyebrow + title + lede), StatCounter, LogoMarquee, FeatureRow, DeviceFrame (phone mockup), Footer, Header/MegaMenu, MobileNav, CTASection, Reveal (scroll), Parallax, AuroraBackground, NeuralField (canvas), CursorSpotlight.
- **Logo:** SVG (silver H/cross + navy D) for light; reversed white for dark sections. Favicon from assets.

## 8. Motion Plan (Framer Motion + Lenis)

- Lenis smooth scroll (guarded by `prefers-reduced-motion`).
- `Reveal` (fade + rise via `whileInView`), staggered groups.
- Parallax layers (`useScroll` + `useTransform`) in hero + section dividers.
- Pinned/scrubbed sequences for the manifesto diagram + Scribe note assembly.
- Count-up stats, magnetic buttons, marquee, animated gradient mesh, dark-hero cursor spotlight.
- Mobile: simplified parallax, reveals retained, target 60fps; everything degrades gracefully with reduced motion.

## 9. Non-Functional Requirements

- **Performance:** Lighthouse mobile ≥ 90; `next/image`; `next/font`; code-split heavy motion; lazy below-fold; no layout shift. Tuned for low-bandwidth.
- **SEO:** per-page metadata + OpenGraph + Twitter cards; JSON-LD (Organization, MedicalBusiness/SoftwareApplication); `sitemap.ts`, `robots.ts`; semantic headings.
- **Accessibility:** WCAG AA contrast, full keyboard nav, visible focus, alt text, reduced-motion, skip-link, aria on menus.
- **Responsive:** mobile-first; verified 360 / 768 / 1024 / 1440.
- **Maintainability:** copy in typed content config (`/content/*`); reusable section components; clear file structure.
- **Analytics:** env-gated provider hook (no-op without key).

## 10. Decision Log

| Decision | Chosen | Alternatives | Why |
|---|---|---|---|
| IA | Hub + dedicated pages | Two hubs; single page | SEO + per-audience depth + scalability |
| Positioning | AI-native OS first | 50/50; telemed-first | Matches slogan & ambition; telemed still strongly featured |
| Motion | Framer Motion + Lenis | GSAP; R3F 3D | Perf/reliability on African mobile; cinematic without 3D risk |
| Scope | Full multi-page now | Landing-first; 3-page | Stakeholder chose full build |
| Framework | Next.js 15 App Router + TS | — | Matches admin stack; SSG/SSR + great DX |
| Styling | Tailwind v4 (token-first) | CSS Modules; v3 | Token-driven design system, fast iteration |
| Type | Plus Jakarta Sans + Inter | Inter-only (README) | Product-brand pairing; more distinctive display |
| Deploy | Vercel | — | Matches existing admin deployment |
```

