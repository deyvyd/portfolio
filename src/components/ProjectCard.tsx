import { useRef } from 'react'
import './ProjectCard.css'

interface Project {
  id: string
  title: string
  eyebrow: string
  problem: string
  solution: string
  result: string
  tags: string[]
  metric: { value: string; label: string }
  accent: string
  live: string | null
  repo: string | null
}

interface ProjectCardProps {
  project: Project
  lang: 'en' | 'pt'
  index: number
}

export function ProjectCard({ project, lang, index }: ProjectCardProps) {
  const cardRef = useRef<HTMLDivElement>(null)

  const onMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current
    if (!card) return
    const rect = card.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    card.style.setProperty('--spotlight-x', `${x}px`)
    card.style.setProperty('--spotlight-y', `${y}px`)
    card.style.setProperty('--spotlight-color', project.accent + '18')
  }

  const onMouseLeave = () => {
    const card = cardRef.current
    if (!card) return
    card.style.setProperty('--spotlight-color', 'transparent')
  }

  const labels = lang === 'en'
    ? { problem: 'Problem', solution: 'Solution', result: 'Result', view: 'View live', code: 'Source' }
    : { problem: 'Problema', solution: 'Solução', result: 'Resultado', view: 'Ver live', code: 'Código' }

  return (
    <article
      ref={cardRef}
      className="project-card"
      style={{ '--accent-color': project.accent, animationDelay: `${index * 0.12}s` } as React.CSSProperties}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
    >
      <div className="project-card__spotlight" aria-hidden="true" />

      <div className="project-card__header">
        <div className="project-card__meta">
          <span className="project-card__eyebrow">{project.eyebrow}</span>
          <div className="project-card__metric">
            <span className="project-card__metric-value" style={{ color: project.accent }}>
              {project.metric.value}
            </span>
            <span className="project-card__metric-label">{project.metric.label}</span>
          </div>
        </div>
        <h3 className="project-card__title">{project.title}</h3>
      </div>

      <div className="project-card__body">
        <div className="project-card__row">
          <span className="project-card__row-label">{labels.problem}</span>
          <p className="project-card__row-text">{project.problem}</p>
        </div>
        <div className="project-card__row">
          <span className="project-card__row-label">{labels.solution}</span>
          <p className="project-card__row-text">{project.solution}</p>
        </div>
        <div className="project-card__row project-card__row--result">
          <span className="project-card__row-label">{labels.result}</span>
          <p className="project-card__row-text">{project.result}</p>
        </div>
      </div>

      <div className="project-card__footer">
        <div className="project-card__tags">
          {project.tags.map(tag => (
            <span key={tag} className="project-card__tag">{tag}</span>
          ))}
        </div>
        <div className="project-card__links">
          {project.live && (
            <a href={project.live} target="_blank" rel="noopener noreferrer" className="project-card__link">
              {labels.view} ↗
            </a>
          )}
          {project.repo && (
            <a href={project.repo} target="_blank" rel="noopener noreferrer" className="project-card__link project-card__link--secondary">
              {labels.code}
            </a>
          )}
        </div>
      </div>
    </article>
  )
}
