import { useState } from 'react'
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
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(meta.email)
    } catch {
      const input = document.createElement('textarea')
      input.value = meta.email
      input.style.position = 'fixed'
      input.style.opacity = '0'
      document.body.appendChild(input)
      input.select()
      document.execCommand('copy')
      document.body.removeChild(input)
    }
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

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
            <div className="contact__email-card">
              <a
                href={`mailto:${meta.email}`}
                className="contact__email-btn"
                aria-label={`${t.contact.cta}: ${meta.email}`}
              />

              <div className="contact__email-visual">
                <span className="contact__email-label">{t.contact.cta}</span>
                <span className="contact__email-row">
                  <span className="contact__email-addr">{meta.email}</span>
                  <button
                    type="button"
                    className={`contact__copy-icon ${copied ? 'contact__copy-icon--copied' : ''}`}
                    onClick={handleCopy}
                    aria-label={copied ? t.contact.copied : t.contact.copy}
                    title={copied ? t.contact.copied : t.contact.copy}
                  >
                    {copied ? (
                      <svg width="15" height="15" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                        <path d="M4 10.5l4 4L16 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    ) : (
                      <svg width="15" height="15" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                        <rect x="7" y="7" width="10" height="10" rx="2" stroke="currentColor" strokeWidth="1.6" />
                        <path d="M4.5 12.5H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h7.5a1 1 0 0 1 1 1v.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                      </svg>
                    )}
                  </button>
                </span>
              </div>

              <span className="contact__arrow" aria-hidden="true">↗</span>
            </div>

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
