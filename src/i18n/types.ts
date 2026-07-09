export interface ProjectTranslation {
  eyebrow: string
  problem: string
  solution: string
  result: string
  metricLabel: string
}

export interface ExperienceTranslation {
  role: string
  summary: string
}

export interface Translation {
  meta: {
    role: string
    tagline: string
    availability: string
  }
  stats: string[]
  projects: {
    docgen: ProjectTranslation
    moneytalks: ProjectTranslation
    homestock: ProjectTranslation
  }
  experience: ExperienceTranslation[]
  stackCategories: Record<string, string>
  terminalLines: { text: string; highlight?: boolean }[]
  nav: {
    work: string
    stack: string
    about: string
    contact: string
  }
  hero: {
    rolePrefix: string
    scrollLabel: string
    ctaPrimary: string
    ctaSecondary: string
  }
  work: {
    eyebrow: string
    title: string
    sub: string
  }
  stackSection: {
    eyebrow: string
    title: string
  }
  about: {
    eyebrow: string
    title: string
    bio1: string
    bio2: string
    bio3: string
    expLabel: string
  }
  contact: {
    eyebrow: string
    title: string
    sub: string
    cta: string
    or: string
    copy: string
    copied: string
  }
  footer: {
    built: string
  }
  projectCard: {
    problem: string
    solution: string
    result: string
    viewLive: string
    source: string
  }
}
