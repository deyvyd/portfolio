# Deyvyd Portfolio

Personal portfolio site built with React 19 + TypeScript + Vite.

## Stack
- React 19 + TypeScript
- Vite
- GSAP (animations)
- CSS custom properties (design tokens)
- Google Fonts: Space Grotesk, Inter, JetBrains Mono

## Features
- Terminal hero with typewriter effect (signature element)
- Animated counters with easeOut (requestAnimationFrame, no libs)
- Project cards with mouse-tracked spotlight effect
- Scroll-reveal via IntersectionObserver
- Custom cursor with lag/ring
- EN/PT language toggle
- `prefers-reduced-motion` respected throughout
- Mobile-responsive

## Setup

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Deploy

Drag `/dist` to [Netlify Drop](https://app.netlify.com/drop) or push to Vercel.

## Personalizar

Edite `src/data/index.ts` para atualizar:
- `meta` — nome, email, GitHub, LinkedIn, CV URL
- `projects` — seus projetos reais com links
- `stats` — suas métricas
- `experience` — histórico profissional
