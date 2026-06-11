import { meta } from '../data'
import { useInView } from '../hooks/useInView'
import './Section.css'
import './Contact.css'

interface ContactProps {
  lang: 'en' | 'pt'
}

export function Contact({ lang }: ContactProps) {
  const { ref, inView } = useInView(0.15)

  const copy = lang === 'en' ? {
    eyebrow: 'Contact',
    title: "Let's build\nsomething real.",
    sub: "I'm open to remote full-stack, implementation engineering, and AI-adjacent roles. If you're working on something interesting, let's talk.",
    cta: 'Send an email',
    or: 'or find me on',
  } : {
    eyebrow: 'Contato',
    title: 'Vamos construir\nalgo real.',
    sub: 'Estou aberto a vagas remotas de engenharia full-stack, implementation engineering e funções de AI. Se você está trabalhando em algo interessante, vamos conversar.',
    cta: 'Enviar email',
    or: 'ou me encontre no',
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
            <span className="section__eyebrow">{copy.eyebrow}</span>
            <h2 className="section__title">
              {copy.title.split('\n').map((line, i) => <span key={i}>{line}</span>)}
            </h2>
            <p className="contact__sub">{copy.sub}</p>
          </div>

          <div className="contact__right">
            <a href={`mailto:${meta.email}`} className="contact__email-btn">
              <span className="contact__email-label">{copy.cta}</span>
              <span className="contact__email-addr">{meta.email}</span>
              <span className="contact__arrow" aria-hidden="true">↗</span>
            </a>

            <div className="contact__social">
              <span className="contact__or">{copy.or}</span>
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
