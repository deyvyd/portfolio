import { experience } from '../data'
import { useInView } from '../hooks/useInView'
import './Section.css'
import './About.css'

interface AboutProps {
  lang: 'en' | 'pt'
}

export function About({ lang }: AboutProps) {
  const { ref, inView } = useInView(0.1)

  const copy = lang === 'en' ? {
    eyebrow: 'About',
    title: 'Engineer who thinks\nlike a strategist.',
    bio1: "I'm a Full-Stack Engineer and Requirements Analyst at Aiyra Engenharia de Dados in Natal, Brazil. My day-to-day is the bridge between enterprise energy clients — CHESF, Eletrobras, Furnas — and the dev team shipping their systems.",
    bio2: "Before writing code professionally, I co-founded a digital agency, ran a coaching practice for six years, and managed product launch funnels with real acquisition metrics. That background changes how I build: I don't just implement requirements, I interrogate them.",
    bio3: "B.Eng. in Computer Engineering & Automation from UFRN. Currently targeting remote engineering roles internationally.",
    expLabel: 'Experience',
  } : {
    eyebrow: 'Sobre',
    title: 'Engenheiro que pensa\ncomo estrategista.',
    bio1: 'Sou Engenheiro Full-Stack e Analista de Requisitos na Aiyra Engenharia de Dados, em Natal, RN. No dia a dia, faço a ponte entre clientes do setor energético — CHESF, Eletrobras, Furnas — e o time de desenvolvimento.',
    bio2: 'Antes de atuar como dev, co-fundei uma agência digital, conduzi uma prática de coaching por seis anos e gerenciei funis de lançamento com métricas reais de aquisição. Esse background muda como construo: não só implemento requisitos — questiono eles.',
    bio3: 'Formado em Engenharia de Computação e Automação pela UFRN. Buscando atualmente oportunidades remotas internacionais.',
    expLabel: 'Experiência',
  }

  return (
    <section
      id="about"
      className={`section ${inView ? 'section--visible' : ''}`}
      ref={ref as React.RefObject<HTMLElement>}
    >
      <div className="section__inner">
        <div className="about__layout">
          <div className="about__left">
            <span className="section__eyebrow">{copy.eyebrow}</span>
            <h2 className="section__title">
              {copy.title.split('\n').map((line, i) => <span key={i}>{line}</span>)}
            </h2>
            <div className="about__bio">
              <p>{copy.bio1}</p>
              <p>{copy.bio2}</p>
              <p>{copy.bio3}</p>
            </div>
          </div>

          <div className="about__right">
            <span className="about__exp-label section__eyebrow">{copy.expLabel}</span>
            <div className="about__timeline">
              {experience.map((exp, i) => (
                <div key={i} className="about__exp-item">
                  <div className="about__exp-dot" />
                  <div className="about__exp-content">
                    <div className="about__exp-header">
                      <strong className="about__exp-role">{exp.role}</strong>
                      <span className="about__exp-period">{exp.period}</span>
                    </div>
                    <span className="about__exp-company">{exp.company}</span>
                    <p className="about__exp-summary">{exp.summary}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
