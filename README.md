# Doctium Website

The marketing website for **Doctium** — _an AI-native hospital operating system for African healthcare._
Lives at **https://doctiumhealth.com**.

It markets both arms of Doctium plus the cross-cutting AI story:

- **The Hospital OS** (`/ehr`) — the AI-native EHR
- **Doctium Scribe** (`/scribe`) — ambient AI clinical documentation
- **Personalized Medicine** (`/personalized-medicine`) — sickle-cell / n-of-1
- **Telemedicine** (`/telemedicine`) — the multi-doctor marketplace
- `/about`, `/contact`, `/privacy`, `/terms`

## Tech stack

| | |
|---|---|
| Framework | Next.js 15 (App Router) + React 19 + TypeScript |
| Styling | Tailwind CSS v4 (token-first, `@theme` in `globals.css`) |
| Motion | Framer Motion + Lenis smooth scroll |
| Icons | lucide-react |
| Fonts | Plus Jakarta Sans (display) · Inter (body) · IBM Plex Mono (labels) — via `next/font` |
| Deploy | Vercel (recommended) |

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm run start    # serve the production build
npm run typecheck
```

> Requires Node 20+. Fonts are fetched at build time via `next/font/google` (needs network on first build).

## Project structure

```
src/
  app/                     # routes (home + sub-pages) + sitemap.ts + robots.ts + globals.css
  components/
    layout/                # Header (mega-menu + mobile drawer), Footer
    motion/                # SmoothScroll, Reveal, Parallax, AuroraBackground,
                           #   NeuralField, CursorSpotlight, Marquee, CountUp
    ui/                    # Button, Badge/Eyebrow, Card/GlassCard/FeatureCard,
                           #   Container, Section, SectionHeading, DeviceFrame,
                           #   StoreBadges, Logo, Icon (lucide registry)
    sections/              # CTASection + per-page section components (home/, ehr/, …)
  content/
    site.ts                # nav, footer, social, external links, slogan
    data.ts                # shared product data (modules, loops, features…) — single source of truth
docs/DESIGN.md             # full design + decision spec
public/brand/              # Doctium logos + icons
```

## Design system

All design tokens live in `src/app/globals.css` under `@theme` (colors, fonts, radii, shadows,
easing, keyframes). Brand source of truth = `../doctium_Brand_Assets/`.

- **Colors:** Navy `#133157` (dominant), Trust Blue `#2F80ED` (accent), Sky `#8BBBE9`, Clinical Silver,
  plus a full navy ramp and status colors.
- **Signature classes:** `bg-navy-cinematic`, `aurora`, `glass` / `glass-dark`, `grain`, `dot-grid`,
  `text-gradient` / `text-gradient-navy`, `lift`, `link-underline`, `container-x`.
- **Reduced motion** is respected globally and by every motion primitive.

Editing copy? Most product content is centralized in `src/content/data.ts` and `src/content/site.ts`.

## ⚙️ Before you launch — placeholders to fill

These are intentionally stubbed (`#` or defaults). Search and replace:

1. **App Store / Play Store URLs** — `src/content/site.ts` → `links.appStore`, `links.playStore`.
2. **Contact email / phone** — `src/content/site.ts` → `links.email` (currently `hello@doctiumhealth.com`).
3. **Social handles** — `src/content/site.ts` → `social.linkedin / x / instagram`.
4. **Legal text** — replace the template copy in `/privacy` and `/terms`.
5. **Contact form backend** — the form currently falls back to a prefilled `mailto:`; wire it to your
   provider (Resend, Formspree, an API route, etc.) when ready.
6. **OG/share image** — add `src/app/opengraph-image.(png|tsx)` for rich social previews.

## 🖼️ Stock / generated imagery to add (optional polish)

The site is intentionally built with bespoke CSS/SVG visuals (no stock photos required to ship).
If you want photographic warmth, these are the highest-impact slots — drop files in `public/` and
swap the relevant visual:

| Slot | Suggested image |
|---|---|
| Homepage / EHR hero backdrop | A modern African hospital ward or clinician at a workstation, cool navy tone, shot from a low angle. Dark, cinematic, with negative space on the left for text. |
| Telemedicine "for patients" | A warm, candid photo of an African patient on a video consult on a phone. Bright, hopeful. |
| Doctors (telemedicine) | 2–4 authentic African doctor portraits (diverse specialties) for the doctor cards. Neutral background. |
| Scribe section | A doctor making eye contact with a patient (not typing) — reinforces "back to the exam room". |
| About / team | Founder & team headshots on a clean neutral/off-white background. |

Recommended sources: Unsplash, Pexels, or a commissioned shoot. Keep them in the navy/clinical palette,
export as WebP/AVIF, and serve via `next/image`.

## Deploy (Vercel)

1. Push to `https://github.com/doctium/doctium-website`.
2. Import the repo in Vercel; framework auto-detected (Next.js). No env vars required to ship.
3. Add the domain `doctiumhealth.com` (apex). The app sub-domain (`dashboard.`) and API (`api.`) are
   separate deployments and remain untouched.
