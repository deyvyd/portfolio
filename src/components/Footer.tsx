import { meta } from '../data'
import './Footer.css'

interface FooterProps {
  lang: 'en' | 'pt'
}

export function Footer({ lang }: FooterProps) {
  const year = new Date().getFullYear()
  const built = lang === 'en'
    ? `Built with React 19 + TypeScript + Vite · ${year}`
    : `Construído com React 19 + TypeScript + Vite · ${year}`

  return (
    <footer className="footer">
      <div className="footer__inner">
        <span className="footer__logo">
          <span className="footer__bracket">[</span>D<span className="footer__bracket">]</span>
          {' '}{meta.name}
        </span>
        <span className="footer__built">{built}</span>
        <div className="footer__links">
          <a href={meta.github} target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href={meta.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </div>
      </div>
    </footer>
  )
}
