import type { Translation } from './types'

export const pt: Translation = {
  meta: {
    role: 'Engenheiro de Software | Engenheiro de IA Aplicada',
    tagline: 'que entrega produtos\nque movem números.',
    availability: 'Disponível para remoto',
  },
  stats: [
    'de redução no tempo de geração de docs',
    'por mês economizadas na Aiyra',
    'tabelas no schema PostgreSQL em prod',
    'apps em produção',
  ],
  projects: {
    docgen: {
      eyebrow: 'Ferramenta Interna · Aiyra Engenharia de Dados',
      problem: 'Clientes do setor energético (CHESF, Eletrobras, Furnas) exigiam documentos de requisitos funcionais estruturados — um processo manual de 40h/mês.',
      solution: 'Iniciativa própria: construí um motor de documentação full-stack que ingere diffs de MR do GitLab e Q&A para gerar documentos RF estruturados automaticamente.',
      result: '89% de redução no tempo de geração, ~40h/mês economizadas, aumento direto de receita num modelo de faturamento por pontos de função. Aprovado para lançamento open-source.',
      metricLabel: 'mais rápido',
    },
    moneytalks: {
      eyebrow: 'App de Finanças Pessoais · Em Produção',
      problem: 'Gerenciar finanças no Google Sheets chegou ao limite — sem sync em tempo real, sem automação, sem espaço para crescer. Precisava de controle total sobre os dados e o produto.',
      solution: 'Migrado do Firebase — schema PostgreSQL de 45 tabelas redesenhado com RLS, Google OAuth e Realtime. Importação OFX/CSV/PDF, dashboards em tempo real, rastreamento de erros com Sentry, CI/CD via GitHub Actions com E2E Playwright bloqueando deploys em caso de falha.',
      result: 'Substituiu o Google Sheets por completo. Cobre transações do dia a dia, cartões de crédito, holerites, controle de férias/13º/VA e gestão de funcionárias. 299 testes unitários + pipeline E2E bloqueando deploys em prod.',
      metricLabel: 'tabelas no schema',
    },
    homestock: {
      eyebrow: 'App Web Mobile-first · Leitura de Código de Barras · Em desenvolvimento',
      problem: 'Não existia um app simples para controle de estoque doméstico com leitura de código de barras para bases de produtos brasileiros.',
      solution: 'App web mobile-first com cascata de 4 APIs de código de barras (Open Food Facts → Open Beauty Facts → Open Products Facts → Cosmos/Bluesoft) e design system dark customizado.',
      result: 'Em desenvolvimento — fluxo de leitura de código de barras e controle de estoque funcionando. Resolve o problema de cobertura de produtos BR via cascata de 4 APIs.',
      metricLabel: 'APIs em cascata',
    },
  },
  experience: [
    {
      role: 'Engenheiro de Software',
      summary: 'Liderou execução técnica e priorização de backlog para o time de desenvolvimento. Como iniciativa própria, arquitetou e construiu um motor de documentação full-stack (Vue.js, Python/Flask, Docker) para clientes do Grupo Axia (antiga Eletrobras) — 89% de redução no tempo de geração, ~40h/mês economizadas, impacto direto na receita. Atualmente atende a CAERN. Coordenou 20–30 demandas mensais no Jira e ClickUp.',
    },
    {
      role: 'Engenheiro de Software',
      summary: 'Projetou soluções de automação de fluxo de trabalho e camadas de interface customizadas no ecossistema Amadeus GDS para otimizar operações de serviços aéreos. Construiu fluxos de UI traduzindo ações do usuário em operações automatizadas de linha de comando, reduzindo erros de entrada manual em ambientes de alto volume.',
    },
    {
      role: 'Co-fundador & Estrategista Digital',
      summary: 'Fundou e gerenciou uma agência digital para lançamentos de produtos de alto impacto. Executou 4+ lançamentos com ROI mensurável, otimizou funis de conversão via testes A/B e implantou landing pages de alto tráfego com 99,9% de uptime nos picos.',
    },
    {
      role: 'Mentor de Alta Performance & Consultor Comportamental',
      summary: 'Aplicou Coaching Sistêmico, PNL e Psicologia Comportamental em 100+ sessões individuais. Liderou programas de treinamento em comunicação e resolução de conflitos. Habilidades aplicadas hoje em gestão de stakeholders, transições ágeis e interação produto-usuário.',
    },
    {
      role: 'Engenheiro de Software Júnior',
      summary: 'Desenvolveu e manteve funcionalidades do SIGAA, plataforma acadêmica corporativa com mais de 40.000 usuários. Stack: Java (JSF), Hibernate, PostgreSQL. Resolveu tickets de manutenção, implementou funcionalidades de módulos acadêmicos e estabeleceu práticas de controle de versão e desenvolvimento colaborativo.',
    },
  ],
  stackCategories: {
    Frontend: 'Frontend',
    Language: 'Linguagem',
    Backend: 'Backend',
    Database: 'Banco de Dados',
    State: 'Estado',
    Tooling: 'Ferramentas',
    DevOps: 'DevOps',
    Testing: 'Testes',
  },
  terminalLines: [
    { text: '> iniciando deyvyd.portfolio' },
    { text: '> carregando projetos...' },
    { text: '> 3 apps em produção encontrados' },
    { text: '> 89% de ganho de eficiência detectado' },
    { text: '> stack: React · TypeScript · Python · Supabase' },
    { text: '> status: aberto a oportunidades remotas' },
    { text: '> pronto.', highlight: true },
  ],
  nav: {
    work: 'Projetos',
    stack: 'Stack',
    about: 'Sobre',
    contact: 'Contato',
  },
  hero: {
    rolePrefix: 'Engenheiro Full-Stack',
    scrollLabel: 'Role para explorar',
    ctaPrimary: 'Ver projetos',
    ctaSecondary: 'Entrar em contato',
  },
  work: {
    eyebrow: 'Trabalhos selecionados',
    title: 'Projetos que\nfuncionam em produção.',
    sub: 'Três apps em produção. Usuários reais. Resultados medidos.',
  },
  stackSection: {
    eyebrow: 'Stack técnica',
    title: 'Ferramentas que uso\nquando importa.',
  },
  about: {
    eyebrow: 'Sobre',
    title: 'Engenheiro que pensa\ncomo estrategista.',
    bio1: 'Engenheiro de Software Full-Stack e Especialista em IA Aplicada com 5+ anos de experiência, baseado em Natal, RN. Atuei por vários anos como ponte técnica entre clientes do Grupo Axia (antiga Eletrobras) e o time de desenvolvimento. Atualmente atendo a CAERN, empresa de saneamento do estado do RN.',
    bio2: 'Engenharia de Computação pela UFRN (2014), Mestrado em Computação Paralela (2016). Desenvolvi soft skills por meio de coaching, treinamentos de liderança, comunicação e relacionamentos. Adquiri visão de negócio co-fundando uma agência de marketing digital, gerenciando funis de lançamento com métricas reais de aquisição. Esse background híbrido — técnico profundo, visão de negócio e habilidades humanas — é o que me diferencia: não só implemento requisitos, os questiono.',
    bio3: 'Construindo software antes de saber que era uma carreira — primeiro site em 2002 com Bloco de Notas e um editor do Netscape na escola, primeiro programa em 2005 em Pascal, também na escola. Foi aí que descobri o quanto gostava disso. Hoje busco oportunidades remotas na interseção de product thinking, desenvolvimento full-stack e IA aplicada.',
    expLabel: 'Experiência',
  },
  contact: {
    eyebrow: 'Contato',
    title: 'Vamos construir\nalgo real.',
    sub: 'Estou aberto a vagas remotas de engenharia full-stack, implementation engineering e funções de IA. Se você está trabalhando em algo interessante, vamos conversar.',
    cta: 'Enviar email',
    or: 'ou me encontre no',
    copy: 'Copiar email',
    copied: 'Copiado!',
  },
  footer: {
    built: 'Construído com React 19 + TypeScript + Vite',
  },
  projectCard: {
    problem: 'Problema',
    solution: 'Solução',
    result: 'Resultado',
    viewLive: 'Ver live',
    source: 'Código',
  },
}
