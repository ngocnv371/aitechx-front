# AiTechX — aitechx.vn

Marketing site and product showcase for **AiTechX**, an AI-focused software company.
Built with Next.js 15 (App Router), TypeScript, Tailwind CSS v4 and Motion.

## What's inside

| Route                         | Purpose                                                                                                    |
| ----------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `/`                           | Landing page: hero, stats, products, capabilities, solutions, process, testimonials, pricing, FAQ, contact |
| `/products/typing-master`     | Product page for **Typing Master** (web-based typing trainer)                                              |
| `/products/workshop`          | Product page for **Workshop** (manufacturing production management suite)                                  |
| `/about`                      | Company story, values, capabilities, tech stack, leadership                                                |
| `/careers`                    | Benefits, open roles and hiring process                                                                    |
| `/contact`                    | Contact form and company details                                                                           |
| `/sitemap.xml`, `/robots.txt` | SEO routes, generated from `src/lib/i18n/config.ts`                                                        |

Other features: bilingual **Vietnamese / English** with a live language switcher, dark futuristic
theme with animated aurora backgrounds, scroll reveals, typewriter effect, animated counters,
scroll progress bar, marquee, accordion, structured data (JSON-LD) and full metadata/Open Graph.

## Getting started

```bash
npm install
npm run dev        # http://localhost:3000
```

Other scripts:

```bash
npm run build      # production build (also runs type checking + ESLint)
npm run start      # serve the production build
npm run lint       # eslint only
npm run typecheck  # tsc --noEmit
```

Copy `.env.example` to `.env.local` if you want to override the public site URL:

```
NEXT_PUBLIC_SITE_URL=https://aitechx.vn
```

## Project structure

```
src/
├─ app/
│  ├─ layout.tsx            # fonts, metadata, providers, navbar/footer
│  ├─ page.tsx              # landing page composition + Organization JSON-LD
│  ├─ globals.css           # design tokens (@theme), base styles, helpers
│  ├─ about/ careers/ contact/ products/<slug>/   # routes
│  └─ sitemap.ts robots.ts  icon.svg
├─ components/
│  ├─ layout/               # navbar, footer, logo, locale switcher, page hero
│  ├─ pages/                # client "views" that stitch a hero + content per route
│  ├─ providers/            # LocaleProvider (language state + dictionary)
│  ├─ sections/             # page sections (hero, products, pricing, …)
│  ├─ ui/                   # primitives (reveal, counter, typewriter, accordion, …)
│  └─ contact-form.tsx
└─ lib/
   ├─ i18n/                 # config.ts, en.ts, vi.ts, types.ts, index.ts
   ├─ motion.ts             # shared easing / duration constants
   └─ utils.ts              # cn() and number formatting
```

## Editing content

**All copy lives in the dictionaries**, not in components:

- `src/lib/i18n/en.ts` — English (source of truth for the shape)
- `src/lib/i18n/vi.ts` — Vietnamese, typed as `Dictionary` so it must stay in sync

Add a key to `en.ts` and TypeScript will tell you exactly where `vi.ts` is missing it.
Site-wide constants (default locale, locale labels, site URL) are in `src/lib/i18n/config.ts`.

### Language behaviour

Language is stored in `localStorage` (`aitechx.locale`) and can also be forced with a query
parameter, e.g. `https://aitechx.vn/?lang=en`, which is what the `hreflang` alternates point to.
The server always renders Vietnamese first (the default locale), then the client swaps if a
different preference is stored — so there is no hydration mismatch. To make each language
independently indexable, move the routes under a `/[locale]` segment and read the locale
server-side.

## Theme

Design tokens are declared with Tailwind v4 `@theme` inside `src/app/globals.css`:

- Colours: `ink-*` (neutral scale), `neon-*` (cyan), `violet-glow-*`, `magenta-*`, `lime-neon-*`
- Fonts: `font-display` (Space Grotesk), `font-sans` (Inter), `font-mono` (JetBrains Mono)
- Animations: `animate-float`, `animate-marquee`, `animate-blink`, `animate-scan`,
  `animate-aurora`, `animate-pulse-ring`, `animate-shimmer`
- Helpers: `container-page`, `glass-panel`, `hairline-gradient`, `grid-backdrop`,
  `text-gradient`, `noise-overlay`

`prefers-reduced-motion` is respected globally, and the animated wrappers fall back to static
markup when the user asks for reduced motion.

## Before you go live

Placeholder content that should be replaced:

1. **Testimonials** (`testimonials.items`) and the client names in
   `src/components/sections/trust-stats.tsx` are fictional.
2. **Pricing** figures in `pricing.tiers` are indicative placeholders, not real quotes.
3. **Team profiles** (`about.team`) and the **open roles** (`careers.roles`).
4. **Contact details** (`cta.info`): email, phone number and address — the phone number is a
   placeholder. The careers page also references `careers@aitechx.vn`.
5. **Social links** in `src/components/layout/footer.tsx` currently point to `#`.
6. **Images/Open Graph**: add a real 1200×630 OG image at `public/og.png` and reference it in
   `src/app/layout.tsx`.

### Wiring up the contact form

`src/components/contact-form.tsx` validates input and then opens the visitor's mail client with
a prefilled message (no backend required). To submit to a real endpoint instead, replace the
`window.location.href = mailto` block with a `fetch` to your API or form service
(e.g. Resend, Formspree) and keep the existing `sending` / `success` states.

## Deploy

The site is fully static and deploys to any Next.js host. For Vercel:

```bash
npx vercel
```

Set `NEXT_PUBLIC_SITE_URL=https://aitechx.vn` in the project's environment variables and point
the `aitechx.vn` domain at the deployment.

## Known dependency advisory

`npm audit` reports a PostCSS advisory inherited from Next.js's build toolchain. PostCSS is used
only at build time and never processes untrusted CSS in this project, so there is no runtime
exposure. Clearing it requires upgrading to Next.js 16 (`npm audit fix --force`), which is a
breaking-change major.
