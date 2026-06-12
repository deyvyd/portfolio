import { projects } from '../data'
import { useTranslation } from '../i18n'
import { ProjectCard } from './ProjectCard'
import { useInView } from '../hooks/useInView'
import './Section.css'

interface WorkProps {
  lang: 'en' | 'pt'
}

export function Work({ lang }: WorkProps) {
  const { ref, inView } = useInView(0.1)
  const t = useTranslation(lang)

  return (
    <section
      id="work"
      className={`section ${inView ? 'section--visible' : ''}`}
      ref={ref as React.RefObject<HTMLElement>}
      aria-label={t.work.eyebrow}
    >
      <div className="section__inner">
        <div className="section__header">
          <span className="section__eyebrow">{t.work.eyebrow}</span>
          <h2 className="section__title">
            {t.work.title.split('\n').map((line, i) => <span key={i}>{line}</span>)}
          </h2>
          <p className="section__sub">{t.work.sub}</p>
        </div>

        <div className="work__grid">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} lang={lang} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
