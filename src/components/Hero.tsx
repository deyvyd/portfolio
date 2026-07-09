import { useEffect, useState } from 'react'
import { Terminal } from './Terminal'
import { Counter } from './Counter'
import { stats, meta } from '../data'
import { useTranslation } from '../i18n'
import { useInView } from '../hooks/useInView'
import './Hero.css'

interface HeroProps {
  lang: 'en' | 'pt'
}

export function Hero({ lang }: HeroProps) {
  const { ref, inView } = useInView(0.1)
  const [countersActive, setCountersActive] = useState(false)
  const t = useTranslation(lang)

  useEffect(() => {
    const timer = setTimeout(() => setCountersActive(true), 4000)
    return () => clearTimeout(timer)
  }, [])

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
            <span>{meta.location} · {t.meta.availability}</span>
          </div>

          <span className="hero__name">{meta.name}</span>

          <h1 className="hero__headline">
            <span className="hero__headline-role">{t.hero.rolePrefix}</span>
            <span className="hero__headline-main">
              {t.meta.tagline.split('\n').map((line, i) => (
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
                label={t.stats[i]}
                active={countersActive}
              />
            ))}
          </div>

          <div className="hero__cta">
            <a href="#work" className="hero__cta-primary">{t.hero.ctaPrimary}</a>
            <a href="#contact" className="hero__cta-secondary">{t.hero.ctaSecondary}</a>
          </div>
        </div>

        <div className="hero__right">
          <Terminal lang={lang} />
        </div>
      </div>

      <div className="hero__scroll" aria-label={t.hero.scrollLabel}>
        <span className="hero__scroll-line" aria-hidden="true" />
        <span className="hero__scroll-label">{t.hero.scrollLabel}</span>
      </div>
    </section>
  )
}
