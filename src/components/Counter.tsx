import { useEffect, useState } from 'react'

interface CounterProps {
  value: number
  suffix: string
  label: string
  active: boolean
}

export function Counter({ value, suffix, label, active }: CounterProps) {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    if (!active) return

    const duration = 1400
    const startTime = performance.now()
    const start = 0

    const easeOut = (t: number) => 1 - Math.pow(1 - t, 4)

    const tick = (now: number) => {
      const elapsed = now - startTime
      const progress = Math.min(elapsed / duration, 1)
      const eased = easeOut(progress)
      setCurrent(Math.round(start + (value - start) * eased))
      if (progress < 1) requestAnimationFrame(tick)
    }

    requestAnimationFrame(tick)
  }, [active, value])

  return (
    <div className="counter">
      <div className="counter__value">
        <span className="counter__number">{current}</span>
        <span className="counter__suffix">{suffix}</span>
      </div>
      <p className="counter__label">{label}</p>
    </div>
  )
}
