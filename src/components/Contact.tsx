import { meta } from '../data'
import { useTranslation } from '../i18n'
import { useInView } from '../hooks/useInView'
import './Section.css'
import './Contact.css'

interface ContactProps {
  lang: 'en' | 'pt'
}

export function Contact({ lang }: ContactProps) {
  const { ref, inView } = useInView(0.15)
  const t = useTranslation(lang)

  return (
    <section
      id="contact"
      className={`section ${inView ? 'section--visible' : ''}`}
      ref={ref as React.RefObject<HTMLElement>}
    >
      <div className="section__inner">
        <div className="contact__layout">
          <div className="contact__left">
            <span className="section__eyebrow">{t.contact.eyebrow}</span>
            <h2 className="section__title">
              {t.contact.title.split('\n').map((line, i) => <span key={i}>{line}</span>)}
            </h2>
            <p className="contact__sub">{t.contact.sub}</p>
          </div>

          <div className="contact__right">
            <a href={`mailto:${meta.email}`} className="contact__email-btn">
              <span className="contact__email-label">{t.contact.cta}</span>
              <span className="contact__email-addr">{meta.email}</span>
              <span className="contact__arrow" aria-hidden="true">↗</span>
            </a>

            <div className="contact__social">
              <span className="contact__or">{t.contact.or}</span>
              <div className="contact__links">
                <a href={meta.github} target="_blank" rel="noopener noreferrer" className="contact__link">
                  GitHub
                </a>
                <a href={meta.linkedin} target="_blank" rel="noopener noreferrer" className="contact__link">
                  LinkedIn
                </a>
                <a href={meta.cv} className="contact__link">
                  CV / Résumé
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
