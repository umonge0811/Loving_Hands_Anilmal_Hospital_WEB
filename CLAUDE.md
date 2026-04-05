# CLAUDE.md — Loving Hands Animal Hospital Website

> This file is read by Claude at the start of every session.
> Keep it updated as the project evolves.

---

## Project Overview

**Client:** Loving Hands Animal Hospital  
**Owner:** Dr. Darlene O. Sanchez, DVM — Veterinarian / President  
**Address:** 4108 Edison Ave. Suite 111, Chino, CA 91710  
**Phone:** (909) 591-CARE (2273) | Text: (909) 270-7277  
**Email:** lovinghandsanimalhospital@gmail.com  
**Website:** lovinghandsanimalhospital.com  

**Phase 1:** Static informational website (current)  
**Phase 2 (future):** Online appointment booking  
**Phase 3 (future):** Client portal (pet health records)  

---

## Tech Stack

| Layer | Technology | Version |
|-------|-----------|---------|
| Framework | Astro | ^5.x |
| Styling | Tailwind CSS | ^3.x |
| Language | TypeScript | strict mode |
| i18n | Astro built-in i18n routing | — |
| Deployment | TBD (Vercel / Netlify recommended) | — |
| Node | v22+ | — |

**Why Astro?** Zero JS by default → fast static pages. When Phase 2 needs server logic, flip `output: 'server'` and add an adapter. No rewrite needed.

---

## Brand & Design

### Color Palette
```
Primary (Wine/Burgundy): #7B1D1D
Primary Dark:            #5C1515
Primary Light:           #A63232
Secondary (Warm Tan):    #C09070
Accent (Cream):          #F5EFE6
Background:              #FAF8F5
Text Dark:               #1A1A1A
Text Muted:              #6B6B6B
White:                   #FFFFFF
```

### Typography
- **Headings:** `Playfair Display` (serif — warmth, trust)
- **Body:** `Inter` (sans-serif — readability)
- Load via Google Fonts in `src/layouts/BaseLayout.astro`

### Brand Voice
- Warm, professional, compassionate
- Bilingual: English (primary) + Spanish
- Never overly clinical — this is a family-oriented practice

---

## Project Structure

```
/
├── CLAUDE.md                    ← You are here
├── CLAUDE.local.md              ← Personal overrides (gitignored)
├── docs/
│   └── client-questionnaire.md ← Questions for the client
├── claude/
│   ├── rules/                   ← Code standards loaded contextually
│   ├── commands/                ← Slash command shortcuts
│   └── agents/                  ← Specialized subagent prompts
├── public/
│   ├── images/                  ← Optimized images
│   └── fonts/                   ← Self-hosted fonts (if needed)
└── src/
    ├── components/
    │   ├── ui/                  ← Reusable: Button, Card, Badge...
    │   ├── sections/            ← Hero, Services, Team, Contact...
    │   └── layout/              ← Navbar, Footer
    ├── layouts/
    │   └── BaseLayout.astro     ← Root layout (SEO, fonts, global CSS)
    ├── pages/
    │   ├── index.astro          ← Redirects to /en
    │   ├── en/                  ← English pages
    │   └── es/                  ← Spanish pages
    ├── i18n/
    │   ├── en.ts                ← English strings
    │   └── es.ts                ← Spanish strings
    └── styles/
        └── global.css           ← Tailwind base + custom properties
```

---

## Code Conventions

### Astro Components
- Use `.astro` for pages and layout components
- Use TypeScript interfaces for all props
- Keep components under 150 lines — extract if larger
- Props interface always named `Props` (Astro convention)

```astro
---
// ✅ Good
interface Props {
  title: string;
  description?: string;
}
const { title, description = '' } = Astro.props;
---
```

### i18n Rules
- ALL user-facing strings go through the i18n system — never hardcode text
- Use the `t()` helper from `src/i18n/utils.ts`
- English key first, then Spanish equivalent

```astro
---
import { getLangFromUrl, useTranslations } from '@/i18n/utils';
const lang = getLangFromUrl(Astro.url);
const t = useTranslations(lang);
---
<h1>{t('hero.title')}</h1>
```

### Tailwind CSS
- Use Tailwind utility classes directly — no custom CSS unless unavoidable
- Brand colors are defined in `tailwind.config.mjs` under `theme.extend.colors`
- Responsive: mobile-first (`sm:`, `md:`, `lg:`)

### File Naming
- Components: `PascalCase.astro` (e.g., `HeroSection.astro`)
- Pages: `kebab-case.astro` (e.g., `our-team.astro`)
- i18n keys: `section.element` dot notation (e.g., `nav.services`)

---

## Development Commands

```bash
npm run dev      # Start dev server at localhost:4321
npm run build    # Build static output to ./dist
npm run preview  # Preview the production build
```

---

## SEO Requirements

- Every page needs unique `<title>` and `<meta name="description">`
- Use `BaseLayout.astro` props: `title`, `description`, `lang`
- Structured data (JSON-LD) for LocalBusiness on the home page
- `sitemap.xml` via `@astrojs/sitemap` integration
- `robots.txt` in `/public`
- All images must have descriptive `alt` text

---

## Accessibility

- Minimum contrast ratio: 4.5:1 (WCAG AA)
- All interactive elements keyboard-navigable
- Semantic HTML: `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`
- Language attribute must match current locale: `<html lang="en">` or `<html lang="es">`

---

## Git Workflow

- **Main branch:** `main` (production-ready only)
- **Feature branches:** `feature/section-name` (e.g., `feature/hero-section`)
- Commit messages: `type(scope): description` — e.g., `feat(hero): add bilingual hero section`
- Never commit directly to `main`

---

## Current Status

- [x] Project structure initialized
- [x] CLAUDE.md created
- [x] Client questionnaire created
- [ ] Astro + Tailwind scaffolded
- [ ] i18n system implemented
- [ ] Home page sections built
- [ ] Deployed to staging

---

## Important Context for Claude

- The developer is **learning** — explain reasoning, not just code
- Always use the i18n system, never hardcode strings
- Prefer **simple, readable code** over clever abstractions
- When adding a new section, follow the pattern in existing sections
- Check `claude/rules/` for specific standards on code style, testing, and API
