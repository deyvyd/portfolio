import { stack } from '../data'
import { useInView } from '../hooks/useInView'
import './Section.css'
import './Stack.css'

interface StackProps {
  lang: 'en' | 'pt'
}

export function Stack({ lang }: StackProps) {
  const { ref, inView } = useInView(0.15)

  const copy = lang === 'en'
    ? { eyebrow: 'Tech stack', title: 'Tools I reach for\nwhen it matters.' }
    : { eyebrow: 'Stack técnica', title: 'Ferramentas que uso\nquando importa.' }


  return (
    <section
      id="stack"
      className={`section ${inView ? 'section--visible' : ''}`}
      ref={ref as React.RefObject<HTMLElement>}
    >
      <div className="section__inner">
        <div className="section__header">
          <span className="section__eyebrow">{copy.eyebrow}</span>
          <h2 className="section__title">
            {copy.title.split('\n').map((line, i) => <span key={i}>{line}</span>)}
          </h2>
        </div>

        <div className="stack__grid">
          {stack.map((item, i) => (
            <div
              key={item.name}
              className="stack__item"
              style={{ animationDelay: `${i * 0.05}s` }}
            >
              <span className="stack__category">{item.category}</span>
              <span className="stack__name">{item.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
