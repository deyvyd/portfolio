import { useEffect, useRef, useState } from 'react'
import { terminalLines } from '../data'
import './Terminal.css'

export function Terminal() {
  const [visibleLines, setVisibleLines] = useState<number[]>([])
  const [done, setDone] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const timers: ReturnType<typeof setTimeout>[] = []

    terminalLines.forEach((line, i) => {
      const t = setTimeout(() => {
        setVisibleLines(prev => [...prev, i])
        if (i === terminalLines.length - 1) {
          setTimeout(() => setDone(true), 400)
        }
      }, line.delay)
      timers.push(t)
    })

    return () => timers.forEach(clearTimeout)
  }, [])

  return (
    <div ref={containerRef} className="terminal" role="region" aria-label="Terminal introduction">
      <div className="terminal__header">
        <span className="terminal__dot terminal__dot--red" />
        <span className="terminal__dot terminal__dot--yellow" />
        <span className="terminal__dot terminal__dot--green" />
        <span className="terminal__title">deyvyd ~ portfolio</span>
      </div>
      <div className="terminal__body">
        {terminalLines.map((line, i) => (
          <div
            key={i}
            className={`terminal__line ${visibleLines.includes(i) ? 'terminal__line--visible' : ''} ${line.highlight ? 'terminal__line--highlight' : ''}`}
          >
            <span className="terminal__prompt">$</span>
            <TypeWriter text={line.text} active={visibleLines.includes(i)} />
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
    setDisplayed('')

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
