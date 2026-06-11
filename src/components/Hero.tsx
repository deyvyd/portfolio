import { useEffect, useState } from 'react'
import { Terminal } from './Terminal'
import { Counter } from './Counter'
import { stats, meta } from '../data'
import { useInView } from '../hooks/useInView'
import './Hero.css'

interface HeroProps {
  lang: 'en' | 'pt'
}

export function Hero({ lang }: HeroProps) {
  const { ref, inView } = useInView(0.1)
  const [countersActive, setCountersActive] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setCountersActive(true), 4000)
    return () => clearTimeout(t)
  }, [])

  const headline = lang === 'en'
    ? { pre: 'Full-Stack Engineer', post: 'who ships products\nthat move numbers.' }
    : { pre: 'Engenheiro Full-Stack', post: 'que entrega produtos\nque movem números.' }

  const scrollLabel = lang === 'en' ? 'Scroll to explore' : 'Role para explorar'

  return (
    <section
      className={`hero ${inView ? 'hero--visible' : ''}`}
      ref={ref as React.RefObject<HTMLElement>}
      id="hero"
      aria-label="Introduction"
    >
      <div className="hero__bg-grid" aria-hidden="true" />

      <div className="hero__content">
        <div className="hero__left">
          <div className="hero__eyebrow">
            <span className="hero__dot" aria-hidden="true" />
            <span>{meta.location} · Available for remote</span>
          </div>

          <h1 className="hero__headline">
            <span className="hero__headline-role">{headline.pre}</span>
            <span className="hero__headline-main">
              {headline.post.split('\n').map((line, i) => (
                <span key={i} className="hero__headline-line">{line}</span>
              ))}
            </span>
          </h1>

          <div className="hero__stats" aria-label="Key metrics">
            {stats.map((s, i) => (
              <Counter
                key={i}
                value={s.value}
                suffix={s.suffix}
                label={s.label}
                active={countersActive}
              />
            ))}
          </div>

          <div className="hero__cta">
            <a href="#work" className="hero__cta-primary">
              {lang === 'en' ? 'See my work' : 'Ver projetos'}
            </a>
            <a href="#contact" className="hero__cta-secondary">
              {lang === 'en' ? 'Get in touch' : 'Entrar em contato'}
            </a>
          </div>
        </div>

        <div className="hero__right">
          <Terminal />
        </div>
      </div>

      <div className="hero__scroll" aria-label={scrollLabel}>
        <span className="hero__scroll-line" aria-hidden="true" />
        <span className="hero__scroll-label">{scrollLabel}</span>
      </div>
    </section>
  )
}
