# Command: /new-section

Use this command to scaffold a new page section correctly.

## Usage

```
/new-section [name]
Example: /new-section services
```

## What This Produces

1. A new component at `src/components/sections/[Name]Section.astro`
2. i18n keys added to both `src/i18n/en.ts` and `src/i18n/es.ts`
3. The component imported and placed in the relevant page

## Template to Follow

```astro
---
// src/components/sections/[Name]Section.astro
import { getLangFromUrl, useTranslations } from '@/i18n/utils';

const lang = getLangFromUrl(Astro.url);
const t = useTranslations(lang);
---

<section id="[name]" class="py-16 md:py-24 bg-white">
  <div class="container mx-auto px-4 max-w-6xl">
    <h2 class="text-3xl md:text-4xl font-heading font-bold text-primary text-center mb-4">
      {t('[name].title')}
    </h2>
    <p class="text-lg text-muted text-center max-w-2xl mx-auto mb-12">
      {t('[name].subtitle')}
    </p>
    <!-- Section content here -->
  </div>
</section>
```

## Checklist Before Considering Done

- [ ] Component created in `src/components/sections/`
- [ ] Both `en.ts` and `es.ts` updated with new keys
- [ ] Component added to the correct page
- [ ] Responsive (mobile, tablet, desktop tested)
- [ ] All text uses `t()` — zero hardcoded strings
- [ ] Images have `alt` text
