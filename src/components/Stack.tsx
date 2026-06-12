import { stack } from '../data'
import { useTranslation } from '../i18n'
import { STACK_ICONS, CATEGORY_COLORS } from '../lib/stackIcons'
import { useInView } from '../hooks/useInView'
import './Section.css'
import './Stack.css'

interface StackProps {
  lang: 'en' | 'pt'
}

const CATEGORY_ORDER = ['Frontend', 'Language', 'Backend', 'Database', 'State', 'Tooling', 'DevOps', 'Testing']

export function Stack({ lang }: StackProps) {
  const { ref, inView } = useInView(0.15)
  const t = useTranslation(lang)

  const grouped = CATEGORY_ORDER.reduce<Record<string, string[]>>((acc, cat) => {
    const items = stack.filter(s => s.category === cat).map(s => s.name)
    if (items.length) acc[cat] = items
    return acc
  }, {})

  return (
    <section
      id="stack"
      className={`section ${inView ? 'section--visible' : ''}`}
      ref={ref as React.RefObject<HTMLElement>}
    >
      <div className="section__inner">
        <div className="section__header">
          <span className="section__eyebrow">{t.stackSection.eyebrow}</span>
          <h2 className="section__title">
            {t.stackSection.title.split('\n').map((line, i) => <span key={i}>{line}</span>)}
          </h2>
        </div>

        <div className="stack__groups">
          {Object.entries(grouped).map(([cat, items], i) => {
            const color = CATEGORY_COLORS[cat] ?? 'var(--accent)'
            return (
              <div
                key={cat}
                className="stack__group"
                style={{ '--group-color': color, animationDelay: `${i * 0.07}s` } as React.CSSProperties}
              >
                <span className="stack__group-label">
                  {t.stackCategories[cat] ?? cat}
                </span>
                <div className="stack__group-items">
                  {items.map(name => {
                    const icon = STACK_ICONS[name]
                    return (
                      <span key={name} className="stack__chip">
                        {icon && (
                          <span
                            className="stack__chip-icon"
                            dangerouslySetInnerHTML={{ __html: icon.svg }}
                            aria-hidden="true"
                          />
                        )}
                        {name}
                      </span>
                    )
                  })}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
