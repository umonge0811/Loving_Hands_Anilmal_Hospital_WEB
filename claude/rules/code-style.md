# Code Style Rules

These rules apply to all code in this project.

## General

- TypeScript strict mode — no `any`, no implicit types
- Prefer `const` over `let`; never use `var`
- Max line length: 100 characters
- Use meaningful variable names — `isMenuOpen` not `flag`

## Astro Components

- Always define a `Props` interface when the component accepts props
- Destructure props at the top of the frontmatter
- Provide default values for optional props

```astro
---
interface Props {
  variant?: 'primary' | 'secondary';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
}
const { variant = 'primary', size = 'md', href } = Astro.props;
---
```

## Tailwind

- Order classes: layout → spacing → typography → color → effects
- Extract repeated class combinations into a local `const` or component
- Never use inline `style=""` for colors that exist in the theme

```astro
<!-- ✅ Good -->
<button class="flex items-center px-6 py-3 text-sm font-semibold text-white bg-primary rounded-lg hover:bg-primary-dark transition-colors">

<!-- ❌ Avoid -->
<button style="background-color: #7B1D1D; padding: 12px 24px;">
```

## i18n

- Every string visible to the user MUST come from i18n keys
- Keys use dot notation: `section.element.modifier`
- Keep keys in alphabetical order within each section

```typescript
// ✅ Good
'contact.form.submit': 'Book Appointment',
'contact.form.email': 'Email address',

// ❌ Never hardcode
<p>Book Appointment</p>
```

## Images

- All images go in `public/images/`
- Use descriptive filenames: `dr-sanchez-with-patient.jpg` not `IMG_001.jpg`
- Always include `alt` text that describes the image for screen readers
- Prefer `.webp` format for photos, `.svg` for icons/logos
