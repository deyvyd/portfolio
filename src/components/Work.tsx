import { projects } from '../data'
import { ProjectCard } from './ProjectCard'
import { useInView } from '../hooks/useInView'
import './Section.css'

interface WorkProps {
  lang: 'en' | 'pt'
}

export function Work({ lang }: WorkProps) {
  const { ref, inView } = useInView(0.1)

  const copy = lang === 'en'
    ? { eyebrow: 'Selected work', title: 'Projects that\nshipped and stuck.', sub: 'Three production apps. Real users. Measured outcomes.' }
    : { eyebrow: 'Trabalhos selecionados', title: 'Projetos que\nfuncionam em produção.', sub: 'Três apps em produção. Usuários reais. Resultados medidos.' }

  return (
    <section
      id="work"
      className={`section ${inView ? 'section--visible' : ''}`}
      ref={ref as React.RefObject<HTMLElement>}
      aria-label={copy.eyebrow}
    >
      <div className="section__inner">
        <div className="section__header">
          <span className="section__eyebrow">{copy.eyebrow}</span>
          <h2 className="section__title">
            {copy.title.split('\n').map((line, i) => <span key={i}>{line}</span>)}
          </h2>
          <p className="section__sub">{copy.sub}</p>
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
