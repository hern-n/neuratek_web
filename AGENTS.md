# NEURATEK — Agent Instructions

## Quick start

```bash
pnpm install     # install dependencies
pnpm dev         # dev server at http://localhost:3000
pnpm build       # production build
pnpm lint        # ESLint
```

- Package manager: **pnpm** (lockfile: `pnpm-lock.yaml`). Do not use npm/yarn.
- TypeScript strict mode, `@/*` path alias maps to repo root.
- TypeScript errors are **ignored at build time** (`next.config.mjs` sets `ignoreBuildErrors: true`).
- Next.js **images are unoptimized** (`unoptimized: true` in config). No sharp required for dev.

## Stack

- **Next.js 16** (App Router, Turbopack, RSC by default, static generation).
- **React 19**, TypeScript 5.7.
- **Tailwind CSS v4** (CSS-based config via `@import 'tailwindcss'` in `globals.css` — no `tailwind.config.ts` is actually used; v4 ignores it).
- **shadcn/ui** (New York style) — components in `components/ui/`. Use `@/components/ui/button` etc.
- **Lucide React** icons (configured in `components.json`).

## Project structure

```
app/              # Next.js App Router pages
  page.tsx        # Homepage (Hero, Services, Pricing, CTA)
  layout.tsx      # Root layout (Exo 2 + Inter fonts, metadata)
  contacto/       # Contact page
  quienes-somos/  # About page
components/
  navbar.tsx      # "use client" — nav with mobile menu
  footer.tsx      # Server component — logo, links, contact info
  ui/*.tsx        # shadcn/ui components (57 files)
lib/utils.ts      # cn() helper (clsx + tailwind-merge)
public/
  logo.webp       # Brand logo (transparent bg)
  CV_Hernan.png   # Team CV images
  CV_Julio.png
```

## Brand colors (Tailwind CSS v4 `@theme inline` + CSS variables)

Use `bg-neuratek-{dark|primary|light|deep|gray-dark|gray-medium|gray-light}` and text equivalents. All defined in `app/globals.css`.

Custom glow utility: `glow-primary` (box-shadow cyan glow).

## Pages & routes

| Route | File | Content |
|---|---|---|
| `/` | `app/page.tsx` | Home — services, pricing (18.000€, 600€/mo, 1.500€), CTA |
| `/contacto` | `app/contacto/page.tsx` | Contact form + info (email, +34 93 123 45 67, Passeig de Gràcia Barcelona) |
| `/quienes-somos` | `app/quienes-somos/page.tsx` | About — values, team members with CV images |

## Hover conventions

All interactive elements use `hover:scale-[1.02] active:scale-[0.98]` for buttons, `hover:scale-[1.02] hover:-translate-y-1` for cards. Applied consistently across all pages.

## Navbar

- `"use client"` (uses `usePathname`, `useState` for mobile menu).
- Active nav link gets `text-neuratek-primary`, hover state gets `hover:text-neuratek-light`.
- Logo rendered as `<Image>` from `/logo.webp`.

## Footer

- Server component (no `"use client"`).
- Contact: `contacto@neuratek.ai`, `www.neuratek.ai`.

## Notes

- No test framework configured.
- No CI/CD config.
- Generated boilerplate likely from v0.dev (`.gitignore` references v0 sandbox files).
