import { experience } from '../data'
import { useTranslation } from '../i18n'
import { useInView } from '../hooks/useInView'
import './Section.css'
import './About.css'

interface AboutProps {
  lang: 'en' | 'pt'
}

export function About({ lang }: AboutProps) {
  const { ref, inView } = useInView(0.1)
  const t = useTranslation(lang)

  return (
    <section
      id="about"
      className={`section ${inView ? 'section--visible' : ''}`}
      ref={ref as React.RefObject<HTMLElement>}
    >
      <div className="section__inner">
        <div className="about__layout">
          <div className="about__left">
            <span className="section__eyebrow">{t.about.eyebrow}</span>
            <h2 className="section__title">
              {t.about.title.split('\n').map((line, i) => <span key={i}>{line}</span>)}
            </h2>
            <div className="about__bio">
              <p>{t.about.bio1}</p>
              <p>{t.about.bio2}</p>
              <p>{t.about.bio3}</p>
            </div>
          </div>

          <div className="about__right">
            <span className="about__exp-label section__eyebrow">{t.about.expLabel}</span>
            <div className="about__timeline">
              {experience.map((exp, i) => (
                <div key={i} className="about__exp-item">
                  <div className="about__exp-dot" />
                  <div className="about__exp-content">
                    <div className="about__exp-header">
                      <strong className="about__exp-role">{t.experience[i].role}</strong>
                      <span className="about__exp-period">{exp.period}</span>
                    </div>
                    <span className="about__exp-company">{exp.company}</span>
                    <p className="about__exp-summary">{t.experience[i].summary}</p>
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
