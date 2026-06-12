import { useRef } from 'react'
import { useTranslation } from '../i18n'
import { STACK_ICONS } from '../lib/stackIcons'
import './ProjectCard.css'

interface Project {
  id: 'docgen' | 'moneytalks' | 'homestock'
  title: string
  tags: string[]
  metric: { value: string }
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
  const t = useTranslation(lang)
  const p = t.projects[project.id]

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
          <span className="project-card__eyebrow">{p.eyebrow}</span>
          <div className="project-card__metric">
            <span className="project-card__metric-value" style={{ color: project.accent }}>
              {project.metric.value}
            </span>
            <span className="project-card__metric-label">{p.metricLabel}</span>
          </div>
        </div>
        <h3 className="project-card__title">{project.title}</h3>
      </div>

      <div className="project-card__body">
        <div className="project-card__row">
          <span className="project-card__row-label">{t.projectCard.problem}</span>
          <p className="project-card__row-text">{p.problem}</p>
        </div>
        <div className="project-card__row">
          <span className="project-card__row-label">{t.projectCard.solution}</span>
          <p className="project-card__row-text">{p.solution}</p>
        </div>
        <div className="project-card__row project-card__row--result">
          <span className="project-card__row-label">{t.projectCard.result}</span>
          <p className="project-card__row-text">{p.result}</p>
        </div>
      </div>

      <div className="project-card__footer">
        <div className="project-card__tags">
          {project.tags.map(tag => {
            const icon = STACK_ICONS[tag]
            return (
              <span key={tag} className="project-card__tag">
                {icon && (
                  <span
                    className="project-card__tag-icon"
                    dangerouslySetInnerHTML={{ __html: icon.svg }}
                    aria-hidden="true"
                  />
                )}
                {tag}
              </span>
            )
          })}
        </div>
        <div className="project-card__links">
          {project.live && (
            <a href={project.live} target="_blank" rel="noopener noreferrer" className="project-card__link">
              {t.projectCard.viewLive} ↗
            </a>
          )}
          {project.repo && (
            <a href={project.repo} target="_blank" rel="noopener noreferrer" className="project-card__link project-card__link--secondary">
              {t.projectCard.source}
            </a>
          )}
        </div>
      </div>
    </article>
  )
}
