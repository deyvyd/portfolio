import type { Translation } from './types'

export const en: Translation = {
  meta: {
    role: 'Software Engineer | Applied AI Engineer',
    tagline: 'who ships products\nthat move numbers.',
    availability: 'Available for remote',
  },
  stats: [
    'reduction in doc generation time',
    'per month saved at Aiyra',
    'table PostgreSQL schema in prod',
    'live apps deployed',
  ],
  projects: {
    docgen: {
      eyebrow: 'Internal Tool · Aiyra Engenharia de Dados',
      problem: 'Enterprise energy clients (CHESF, Eletrobras, Furnas) required structured functional requirements docs — a manual 40h/month process.',
      solution: 'Self-driven initiative: built a full-stack documentation engine that ingests GitLab MR diffs and Q&A to auto-generate structured RF docs.',
      result: '89% reduction in generation time, ~40h/month saved, direct revenue increase in a function-point billing model. Approved for open-source release.',
      metricLabel: 'faster',
    },
    moneytalks: {
      eyebrow: 'Personal Finance App · Live in Production',
      problem: 'Managing finances in Google Sheets hit its ceiling — no real-time sync, no automation, no room to grow. Needed full ownership of the data and the product.',
      solution: 'Migrated from Firebase — redesigned 45-table PostgreSQL schema with RLS, Google OAuth, and Realtime. OFX/CSV/PDF import, real-time dashboards, Sentry error tracking, CI/CD via GitHub Actions with Playwright E2E blocking deploys on failure.',
      result: 'Replaced Google Sheets entirely. Covers daily transactions, credit cards, salary slips, vacation/13th/meal-voucher tracking, and household employee management. 299 unit tests + Playwright E2E blocking deploys in prod.',
      metricLabel: 'table schema',
    },
    homestock: {
      eyebrow: 'Mobile-first Web App · Barcode Scanning · Early Stage',
      problem: 'No simple app existed for tracking household inventory with barcode scanning for Brazilian product databases.',
      solution: 'Mobile-first web app with a 4-API barcode cascade (Open Food Facts → Open Beauty Facts → Open Products Facts → Cosmos/Bluesoft) and custom dark design system.',
      result: 'Early stage — core barcode lookup and inventory flow working. Solves the BR product coverage gap via 4-API fallback cascade.',
      metricLabel: 'API cascade',
    },
  },
  experience: [
    {
      role: 'Software Engineer',
      summary: 'Led technical execution and backlog prioritization for the dev team. As a self-driven initiative, architected and built a full-stack documentation engine (Vue.js, Python/Flask, Docker) serving clients in the Axia Group (formerly Eletrobras) — 89% reduction in generation time, ~40h/month saved, direct revenue impact. Currently serving CAERN. Coordinated 20–30 monthly demands across Jira and ClickUp.',
    },
    {
      role: 'Software Engineer',
      summary: 'Designed workflow automation and custom UI layers within the Amadeus GDS ecosystem to optimize airline service operations. Built UI flows translating user actions into automated command-line operations, reducing manual entry errors in high-volume environments.',
    },
    {
      role: 'Co-founder & Digital Strategist',
      summary: 'Founded and managed a digital agency for high-stakes product launches. Executed 4+ major launches with measurable ROI, optimized conversion funnels through A/B testing, and deployed high-traffic landing pages with 99.9% uptime during peak traffic.',
    },
    {
      role: 'High-Performance Mentor & Behavioral Consultant',
      summary: 'Applied Systemic Coaching, NLP, and Behavioral Psychology across 100+ individual sessions. Led training programs on communication and conflict resolution. Skills now applied to stakeholder management, agile transitions, and product-user interaction.',
    },
    {
      role: 'Junior Software Engineer',
      summary: 'Developed and maintained features for SIGAA, an enterprise academic platform serving 40,000+ users. Stack: Java (JSF), Hibernate, PostgreSQL. Resolved maintenance tickets, implemented academic module features, and established practices in version control and collaborative development.',
    },
  ],
  stackCategories: {
    Frontend: 'Frontend',
    Language: 'Language',
    Backend: 'Backend',
    Database: 'Database',
    State: 'State',
    Tooling: 'Tooling',
    DevOps: 'DevOps',
    Testing: 'Testing',
  },
  terminalLines: [
    { text: '> initializing deyvyd.portfolio' },
    { text: '> loading projects...' },
    { text: '> 3 live apps found' },
    { text: '> 89% efficiency gain detected' },
    { text: '> stack: React · TypeScript · Python · Supabase' },
    { text: '> status: open to remote opportunities' },
    { text: '> ready.', highlight: true },
  ],
  nav: {
    work: 'Work',
    stack: 'Stack',
    about: 'About',
    contact: 'Contact',
  },
  hero: {
    rolePrefix: 'Full-Stack Engineer',
    scrollLabel: 'Scroll to explore',
    ctaPrimary: 'See my work',
    ctaSecondary: 'Get in touch',
  },
  work: {
    eyebrow: 'Selected work',
    title: 'Projects that\nshipped and stuck.',
    sub: 'Three production apps. Real users. Measured outcomes.',
  },
  stackSection: {
    eyebrow: 'Tech stack',
    title: 'Tools I reach for\nwhen it matters.',
  },
  about: {
    eyebrow: 'About',
    title: 'Engineer who thinks\nlike a strategist.',
    bio1: "Full-Stack Software Engineer and Applied AI Specialist with 5+ years of experience, based in Natal, Brazil. Spent years as the technical bridge between enterprise clients in the Axia Group (formerly Eletrobras) and the dev team. Currently serving CAERN, the state water utility of Rio Grande do Norte.",
    bio2: "B.Eng. in Computer Engineering from UFRN (2014), Master's in Parallel Computing (2016). Sharpened soft skills through coaching, leadership, and communication training. Gained business vision co-founding a digital marketing agency managing real acquisition funnels. That hybrid background — deep technical, business acumen, and human skills — is what makes the difference: I don't just implement requirements, I interrogate them.",
    bio3: "Building software since before it was a career plan — first website in 2002 with Notepad and a Netscape editor at school, first program in 2005 in Pascal. That's when I knew. Now targeting remote engineering roles at the intersection of product thinking, full-stack development, and applied AI.",
    expLabel: 'Experience',
  },
  contact: {
    eyebrow: 'Contact',
    title: "Let's build\nsomething real.",
    sub: "I'm open to remote full-stack, implementation engineering, and AI-adjacent roles. If you're working on something interesting, let's talk.",
    cta: 'Send an email',
    or: 'or find me on',
    copy: 'Copy email',
    copied: 'Copied!',
  },
  footer: {
    built: 'Built with React 19 + TypeScript + Vite',
  },
  projectCard: {
    problem: 'Problem',
    solution: 'Solution',
    result: 'Result',
    viewLive: 'View live',
    source: 'Source',
  },
}
