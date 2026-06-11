export const meta = {
  name: 'Deyvyd',
  role: 'Software Engineer | Applied AI Engineer',
  tagline: 'who ships products\nthat move numbers.',
  location: 'São Paulo, BR',
  email: 'deyvyd.dev@gmail.com',
  github: 'https://github.com/deyvyd',
  linkedin: 'https://linkedin.com/in/deyvyd',
  cv: 'https://docs.google.com/document/d/1EYOvIyL7bo-YhZsGUvfgQf5Uq7OofCTQKt6WTQ5Dr0g/export?format=pdf',
}

export const stats = [
  { value: 89, suffix: '%', label: 'reduction in doc generation time' },
  { value: 40, suffix: 'h', label: 'per month saved at Aiyra' },
  { value: 14, suffix: '', label: 'table PostgreSQL schema in prod' },
  { value: 3, suffix: '', label: 'live apps deployed' },
]

export const projects = [
  {
    id: 'docgen',
    title: 'DocGen',
    eyebrow: 'Internal Tool · Aiyra Engenharia de Dados',
    problem: 'Enterprise energy clients (CHESF, Eletrobras, Furnas) required structured functional requirements docs — a manual 40h/month process.',
    solution: 'Self-driven initiative: built a full-stack documentation engine that ingests GitLab MR diffs and Q&A to auto-generate structured RF docs.',
    result: '89% reduction in generation time, ~40h/month saved, direct revenue increase in a function-point billing model. Approved for open-source release.',
    tags: ['Python', 'Flask', 'Vue.js', 'Tailwind CSS', 'Docker', 'Automation'],
    metric: { value: '89%', label: 'faster' },
    accent: '#5B8BF5',
    live: null,
    repo: null,
  },
  {
    id: 'moneytalks',
    title: 'MoneyTalks',
    eyebrow: 'Personal Finance App · Live in Production',
    problem: 'Managing finances in Google Sheets hit its ceiling — no real-time sync, no automation, no room to grow. Needed full ownership of the data and the product.',
    solution: 'Migrated from Firebase — redesigned 14-table PostgreSQL schema with RLS, Google OAuth, and Realtime. OFX/CSV/PDF import, real-time dashboards, Sentry error tracking, CI/CD via GitHub Actions with Playwright E2E blocking deploys on failure.',
    result: 'Replaced Google Sheets entirely. Covers daily transactions, credit cards, salary slips, vacation/13th/meal-voucher tracking, and household employee management. 299 unit tests + Playwright E2E blocking deploys in prod.',
    tags: ['React 19', 'TypeScript', 'Supabase', 'Zustand', 'Tailwind 4', 'Framer Motion', 'Zod', 'Sentry', 'Playwright', 'GitHub Actions'],
    metric: { value: '14', label: 'table schema' },
    accent: '#34D399',
    live: 'https://financeiro.deyvyd.com',
    repo: null,
  },
  {
    id: 'homestock',
    title: 'HomeStock',
    eyebrow: 'Mobile-first Web App · Barcode Scanning · Early Stage',
    problem: 'No simple app existed for tracking household inventory with barcode scanning for Brazilian product databases.',
    solution: 'Mobile-first web app with a 4-API barcode cascade (Open Food Facts → Open Beauty Facts → Open Products Facts → Cosmos/Bluesoft) and custom dark design system.',
    result: 'Early stage — core barcode lookup and inventory flow working. Solves the BR product coverage gap via 4-API fallback cascade.',
    tags: ['React 19', 'PWA', 'Supabase', 'Barcode API'],
    metric: { value: '4', label: 'API cascade' },
    accent: '#F59E0B',
    live: 'https://mercado.deyvyd.com',
    repo: null,
  },
]

export const stack = [
  { name: 'React', category: 'Frontend' },
  { name: 'TypeScript', category: 'Language' },
  { name: 'Python', category: 'Language' },
  { name: 'Java', category: 'Language' },
  { name: 'Node.js', category: 'Backend' },
  { name: 'Express', category: 'Backend' },
  { name: 'Flask', category: 'Backend' },
  { name: 'Supabase', category: 'Database' },
  { name: 'PostgreSQL', category: 'Database' },
  { name: 'Vue.js', category: 'Frontend' },
  { name: 'Tailwind CSS', category: 'Frontend' },
  { name: 'Framer Motion', category: 'Frontend' },
  { name: 'Zustand', category: 'State' },
  { name: 'Zod', category: 'Tooling' },
  { name: 'react-hook-form', category: 'Frontend' },
  { name: 'Vite', category: 'Tooling' },
  { name: 'Docker', category: 'DevOps' },
  { name: 'GitHub Actions', category: 'DevOps' },
  { name: 'Sentry', category: 'DevOps' },
  { name: 'Vitest', category: 'Testing' },
  { name: 'Playwright', category: 'Testing' },
  { name: 'REST APIs', category: 'Backend' },
  { name: 'date-fns', category: 'Tooling' },
]

export const experience = [
  {
    role: 'Software Engineer',
    company: 'Aiyra Engenharia de Dados',
    period: 'Jun 2023 — Present',
    summary: 'Led technical execution and backlog prioritization for the dev team. As a self-driven initiative, architected and built a full-stack documentation engine (Vue.js, Python/Flask, Docker) serving enterprise energy clients (CHESF, Eletrobras, Furnas) — 89% reduction in generation time, ~40h/month saved, direct revenue impact. Coordinated 20–30 monthly demands across Jira and ClickUp.',
  },
  {
    role: 'Software Engineer',
    company: 'Teleperformance',
    period: 'Feb 2023 — Jun 2023',
    summary: 'Designed workflow automation and custom UI layers within the Amadeus GDS ecosystem to optimize airline service operations. Built UI flows translating user actions into automated command-line operations, reducing manual entry errors in high-volume environments.',
  },
  {
    role: 'Co-founder & Digital Strategist',
    company: 'DGT Digital Agency',
    period: 'May 2020 — Feb 2023',
    summary: 'Founded and managed a digital agency for high-stakes product launches. Executed 4+ major launches with measurable ROI, optimized conversion funnels through A/B testing, and deployed high-traffic landing pages with 99.9% uptime during peak traffic.',
  },
  {
    role: 'High-Performance Mentor & Behavioral Consultant',
    company: 'DM Human Development',
    period: 'Jan 2017 — Feb 2021',
    summary: 'Applied Systemic Coaching, NLP, and Behavioral Psychology across 100+ individual sessions. Led training programs on communication and conflict resolution. Skills now applied to stakeholder management, agile transitions, and product-user interaction.',
  },
  {
    role: 'Junior Software Engineer',
    company: 'Superintendência de TI – UFRN',
    period: 'Aug 2012 — Jul 2013',
    summary: 'Developed and maintained features for SIGAA, an enterprise academic platform serving 40,000+ users. Stack: Java (JSF), Hibernate, PostgreSQL. Resolved maintenance tickets, implemented academic module features, and established practices in version control and collaborative development.',
  },
]

export const terminalLines = [
  { text: '> initializing deyvyd.portfolio', delay: 0 },
  { text: '> loading projects...', delay: 600 },
  { text: '> 3 live apps found', delay: 1200 },
  { text: '> 89% efficiency gain detected', delay: 1800 },
  { text: '> stack: React · TypeScript · Python · Supabase', delay: 2400 },
  { text: '> status: open to remote opportunities', delay: 3000 },
  { text: '> ready.', delay: 3600, highlight: true },
]
