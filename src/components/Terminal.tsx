import { useEffect, useRef, useState } from 'react'
import { useTranslation } from '../i18n'
import './Terminal.css'

const DELAYS = [0, 600, 1200, 1800, 2400, 3000, 3600]

interface TerminalProps {
  lang: 'en' | 'pt'
}

export function Terminal({ lang }: TerminalProps) {
  const [visibleLines, setVisibleLines] = useState<number[]>([])
  const [done, setDone] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)
  const t = useTranslation(lang)
  const lines = t.terminalLines

  useEffect(() => {
    const timers: ReturnType<typeof setTimeout>[] = []

    const reset = setTimeout(() => {
      setVisibleLines([])
      setDone(false)

      lines.forEach((_, i) => {
        const timer = setTimeout(() => {
          setVisibleLines(prev => [...prev, i])
          if (i === lines.length - 1) {
            setTimeout(() => setDone(true), 400)
          }
        }, DELAYS[i] ?? i * 600)
        timers.push(timer)
      })
    }, 0)

    return () => {
      clearTimeout(reset)
      timers.forEach(clearTimeout)
    }
  }, [lines])

  return (
    <div ref={containerRef} className="terminal" role="region" aria-label="Terminal introduction">
      <div className="terminal__header">
        <span className="terminal__dot terminal__dot--red" />
        <span className="terminal__dot terminal__dot--yellow" />
        <span className="terminal__dot terminal__dot--green" />
        <span className="terminal__title">deyvyd ~ portfolio</span>
      </div>
      <div className="terminal__body">
        {lines.map((line, i) => (
          <div
            key={i}
            className={`terminal__line ${visibleLines.includes(i) ? 'terminal__line--visible' : ''} ${line.highlight ? 'terminal__line--highlight' : ''}`}
          >
            <span className="terminal__prompt">$</span>
            <TypeWriter key={`${lang}-${i}`} text={line.text} active={visibleLines.includes(i)} />
          </div>
        ))}
        {done && <span className="terminal__cursor" aria-hidden="true">▊</span>}
      </div>
    </div>
  )
}

function TypeWriter({ text, active }: { text: string; active: boolean }) {
  const [displayed, setDisplayed] = useState('')
  const indexRef = useRef(0)

  useEffect(() => {
    if (!active) return
    indexRef.current = 0

    const interval = setInterval(() => {
      if (indexRef.current < text.length) {
        setDisplayed(text.slice(0, indexRef.current + 1))
        indexRef.current++
      } else {
        clearInterval(interval)
      }
    }, 22)

    return () => clearInterval(interval)
  }, [active, text])

  return <span>{displayed}</span>
}
