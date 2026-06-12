# deyvyd.com — Personal Portfolio

> Live at [deyvyd.com](https://deyvyd.com)

Personal portfolio built with React 19 + TypeScript + Vite. Zero UI libraries — every component is hand-rolled with CSS custom properties.

## Stack

| Layer | Tech |
|---|---|
| Framework | React 19 + TypeScript |
| Build | Vite |
| Styling | CSS custom properties (design tokens) |
| Animations | GSAP + CSS animations |
| i18n | Custom `useTranslation` hook (EN/PT) |
| Icons | simple-icons |
| Fonts | Space Grotesk · Inter · JetBrains Mono |
| Deploy | Vercel |

## Features

- **Terminal hero** — typewriter effect, replays on language toggle
- **Animated counters** — easeOut via `requestAnimationFrame`, no libs
- **Project cards** — mouse-tracked radial spotlight per card
- **Stack section** — grouped by category with color-coded borders + inline SVG icons
- **Scroll-reveal** — IntersectionObserver, no scroll event listeners
- **Custom cursor** — lag + ring effect
- **EN/PT toggle** — full i18n via typed locale files, TypeScript enforces sync
- `prefers-reduced-motion` respected throughout
- Mobile-responsive

## Project Structure

```
src/
  components/       # UI components (one CSS file per component)
  data/             # Structural data — URLs, colors, tags (no translatable text)
  i18n/
    types.ts        # TypeScript contract for translations
    en.ts           # English strings
    pt.ts           # Portuguese strings
    index.ts        # useTranslation(lang) hook
  lib/
    stackIcons.ts   # simple-icons mapping + category colors
  hooks/
    useInView.ts    # IntersectionObserver hook
```

## Getting Started

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build → dist/
npm run lint     # tsc type-check + ESLint
```

## Customization

All content lives in two places:

**`src/data/index.ts`** — structural data (no translations):
- `meta` — name, email, GitHub, LinkedIn, CV URL
- `projects` — project IDs, tags, accent colors, live/repo links
- `stats` — metric values and suffixes
- `experience` — company names and periods
- `stack` — tech names and categories

**`src/i18n/en.ts` + `src/i18n/pt.ts`** — all translatable text:
- Project descriptions (eyebrow, problem, solution, result)
- Experience summaries and roles
- Section copy, bio, nav labels

TypeScript will error at compile time if a key exists in one locale but not the other.

## Adding an Icon

Icons map in `src/lib/stackIcons.ts`. Find the slug at [simpleicons.org](https://simpleicons.org), add the import and entry:

```ts
import { siYourtool } from 'simple-icons'

export const STACK_ICONS = {
  // ...
  'YourTool': siYourtool,
}
```

## License

MIT
