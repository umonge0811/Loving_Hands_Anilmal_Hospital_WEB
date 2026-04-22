# i18n Standards

## How Internationalization Works in This Project

Astro's built-in i18n routing handles language switching via URL prefixes:
- `/en/` → English
- `/es/` → Spanish
- `/` → Redirects to `/en/` (default)

## File Locations

```
src/
├── i18n/
│   ├── en.ts       ← English strings (source of truth)
│   ├── es.ts       ← Spanish strings
│   └── utils.ts    ← getLangFromUrl(), useTranslations()
```

## Adding a New String

1. Add the key + English value to `src/i18n/en.ts`
2. Add the same key + Spanish translation to `src/i18n/es.ts`
3. Use `t('your.key')` in the component

## Key Naming Convention

```
[section].[element].[modifier]

Examples:
  nav.home
  nav.services
  hero.title
  hero.subtitle
  hero.cta
  services.title
  services.emergency.title
  services.emergency.description
  contact.phone.label
  footer.copyright
```

## Translation Quality

- Translations must be natural, not literal/machine-translated
- Medical/veterinary terms should use correct Spanish equivalents
- Maintain brand voice: warm, professional, bilingual community awareness
- When unsure of a translation, mark with `// TODO: verify translation`

## Language Switcher

- Always visible in the navbar
- Should preserve current page path when switching
  - `/en/services` → `/es/services` (not → `/es/`)
- Current language visually indicated

## SEO per Language

Each language version needs its own:
- `<html lang="en">` or `<html lang="es">`
- `<meta name="description">` translated
- `<title>` translated
- `<link rel="alternate" hreflang="...">` tags pointing to both versions
