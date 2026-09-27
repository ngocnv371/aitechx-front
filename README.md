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
npm run build      # static export into ./out (also runs type checking + ESLint)
npm run start      # serve the exported ./out locally
npm run lint       # eslint only
npm run typecheck  # tsc --noEmit
```

`next.config.ts` uses `output: "export"` plus `trailingSlash: true`, so the build emits a
fully static `out/` directory (`/about` → `out/about/index.html`). There is no Node server at
runtime — that is what makes the GitHub Pages deployment possible.

Copy `.env.example` to `.env.local` if you want to override the public site URL:

```
NEXT_PUBLIC_SITE_URL=https://aitechx.vn
```

## Project structure

```
.github/workflows/deploy-pages.yml   #build + publish to GitHub Pages
public/.nojekyll                     #stops GitHub Pages from running Jekyll
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

## Deploy to GitHub Pages

The build is a fully static export, so `.github/workflows/deploy-pages.yml` can build it and
publish it to GitHub Pages on every push to `main` or `master` (edit the `branches` list in the
workflow to match your default branch).

### One-time setup

1. Push the repository to GitHub.
2. Go to **Settings → Pages → Build and deployment** and set **Source** to **GitHub Actions**.
   The workflow passes `enablement: true` so it can turn Pages on for you, but the source must
   be "GitHub Actions" for the deploy job to publish.

That's all — the site is served from `https://<owner>.github.io/<repo>/`.

### How the path prefix works

GitHub Pages serves project sites from `/<repo>/`, so every asset and internal link needs that
prefix. The workflow reads `base_path` from `actions/configure-pages`, passes it to the build as
`PAGES_BASE_PATH`, and `next.config.ts` maps it onto Next's `basePath`. Nothing needs editing in
the source when you rename the repository.

### Serving from a custom domain (aitechx.vn)

1. Add a `public/CNAME` file containing just the bare domain:

   ```
   aitechx.vn
   ```

   The workflow detects this file and drops the path prefix, because a custom domain is served
   from the root.

2. Add a repository variable `SITE_URL` = `https://aitechx.vn`
   (**Settings → Secrets and variables → Actions → Variables**). Canonical URLs, Open Graph tags
   and the sitemap then use the real domain instead of the `github.io` origin.
3. Point DNS at GitHub Pages — four `A` records for `aitechx.vn` to
   `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`, plus a `CNAME`
   record for `www` pointing at `<owner>.github.io`.
4. Back in **Settings → Pages**, tick **Enforce HTTPS** once the certificate is issued.

### Other hosts

`out/` is a plain static directory, so it also drops straight onto Netlify, Cloudflare Pages,
S3 or any web server — run `npm run build` and publish `out/`. Set `NEXT_PUBLIC_SITE_URL` to the
public origin and leave `PAGES_BASE_PATH` unset when the site is served from the domain root.

### Previewing the export locally

```bash
npm run build
npm run start                       # serves ./out on http://localhost:3000
```

To rehearse a project-page deployment (site under `/<repo>/`), build with the prefix and stage
it inside a directory with that name:

```bash
# bash
PAGES_BASE_PATH=/my-repo npm run build

# PowerShell
$env:PAGES_BASE_PATH = "/my-repo"; npm run build
```

### Trade-off to be aware of

Static hosting has no server, so the HTTP security headers that a Node deployment could set are
not applied. If you need `CSP`, `X-Frame-Options` or similar, set them at a CDN or proxy in
front of Pages.

## Deploying elsewhere (Node runtime)

Everything here is prerendered, so the site also runs on Vercel, Netlify or any Node host. If you
prefer that, drop `output: "export"` from `next.config.ts`, restore `"start": "next start"` in
`package.json`, and set `NEXT_PUBLIC_SITE_URL=https://aitechx.vn`.

## Known dependency advisory

`npm audit` reports a PostCSS advisory inherited from Next.js's build toolchain. PostCSS is used
only at build time and never processes untrusted CSS in this project, so there is no runtime
exposure. Clearing it requires upgrading to Next.js 16 (`npm audit fix --force`), which is a
breaking-change major.
