export const meta = {
  name: 'Deyvyd Moura',
  location: 'Natal, BR',
  email: 'deyvyd.dev@gmail.com',
  github: 'https://github.com/deyvyd',
  linkedin: 'https://linkedin.com/in/deyvyd',
  cv: 'https://docs.google.com/document/d/1EYOvIyL7bo-YhZsGUvfgQf5Uq7OofCTQKt6WTQ5Dr0g/export?format=pdf',
}

export const stats = [
  { value: 89, suffix: '%' },
  { value: 40, suffix: 'h' },
  { value: 45, suffix: '' },
  { value: 3, suffix: '' },
]

export const projects: Array<{
  id: 'docgen' | 'moneytalks' | 'homestock'
  title: string
  tags: string[]
  metric: { value: string }
  accent: string
  logo?: string
  live: string | null
  livePt?: string
  repo: string | null
}> = [
  {
    id: 'docgen',
    title: 'DocGen',
    logo: '/logo-docgen.svg',
    tags: ['Python', 'Flask', 'Vue.js', 'Tailwind CSS', 'Docker', 'Automation'],
    metric: { value: '89%' },
    accent: '#5B8BF5',
    live: 'https://docgen.ferramentas.deyvyd.com',
    repo: null,
  },
  {
    id: 'moneytalks',
    title: 'MoneyTalks',
    logo: '/logo-moneytalks.svg',
    tags: ['React 19', 'TypeScript', 'Supabase', 'Zustand', 'Tailwind 4', 'Framer Motion', 'Zod', 'Sentry', 'Playwright', 'GitHub Actions'],
    metric: { value: '45' },
    accent: '#34D399',
    live: 'https://finance.deyvyd.com',
    livePt: 'https://financeiro.deyvyd.com',
    repo: null,
  },
  {
    id: 'homestock',
    title: 'HomeStock',
    logo: '/logo-homestock.svg',
    tags: ['React 19', 'PWA', 'Supabase', 'Barcode API'],
    metric: { value: '4' },
    accent: '#F59E0B',
    live: 'https://market.deyvyd.com',
    livePt: 'https://mercado.deyvyd.com',
    repo: null,
  },
]

export const stack = [
  // Languages
  { name: 'TypeScript', category: 'Languages' },
  { name: 'Python', category: 'Languages' },
  { name: 'Java', category: 'Languages' },

  // Frontend
  { name: 'React', category: 'Frontend' },
  { name: 'Vue.js', category: 'Frontend' },
  { name: 'Tailwind CSS', category: 'Frontend' },
  { name: 'Framer Motion', category: 'Frontend' },
  { name: 'react-hook-form', category: 'Frontend' },
  { name: 'Zustand', category: 'Frontend' },

  // Backend & Data
  { name: 'Node.js', category: 'Backend & Data' },
  { name: 'Express', category: 'Backend & Data' },
  { name: 'Flask', category: 'Backend & Data' },
  { name: 'REST APIs', category: 'Backend & Data' },
  { name: 'Supabase', category: 'Backend & Data' },
  { name: 'PostgreSQL', category: 'Backend & Data' },
  { name: 'Edge Functions', category: 'Backend & Data' },
  { name: 'Row-Level Security (RLS)', category: 'Backend & Data' },
  { name: 'OCR', category: 'Backend & Data' },

  // Tooling & Quality
  { name: 'Zod', category: 'Tooling & Quality' },
  { name: 'Vite', category: 'Tooling & Quality' },
  { name: 'date-fns', category: 'Tooling & Quality' },
  { name: 'Docker', category: 'Tooling & Quality' },
  { name: 'GitHub Actions', category: 'Tooling & Quality' },
  { name: 'Sentry', category: 'Tooling & Quality' },
  { name: 'Vitest', category: 'Tooling & Quality' },
  { name: 'Playwright', category: 'Tooling & Quality' },
  { name: 'BDD', category: 'Tooling & Quality' },

  // AI & Agentic Engineering
  { name: 'Claude Code Subagents', category: 'AI & Agentic Engineering' },
  { name: 'Prompt Engineering', category: 'AI & Agentic Engineering' },
  { name: 'LLM Integration', category: 'AI & Agentic Engineering' },
  { name: 'AI-Agentic Engineering', category: 'AI & Agentic Engineering' },
]

export const experience = [
  { company: 'Aiyra Engenharia de Dados', period: 'Jun 2023 — Present' },
  { company: 'Teleperformance', period: 'Feb 2023 — Jun 2023' },
  { company: 'DGT Digital Agency', period: 'May 2020 — Feb 2023' },
  { company: 'DM Human Development', period: 'Jan 2017 — Feb 2021' },
  { company: 'Superintendência de TI – UFRN', period: 'Aug 2012 — Jul 2013' },
]
