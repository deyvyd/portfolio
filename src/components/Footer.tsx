import { meta } from '../data'
import { useTranslation } from '../i18n'
import './Footer.css'

interface FooterProps {
  lang: 'en' | 'pt'
}

export function Footer({ lang }: FooterProps) {
  const year = new Date().getFullYear()
  const t = useTranslation(lang)

  return (
    <footer className="footer">
      <div className="footer__inner">
        <span className="footer__logo">
          <span className="footer__bracket">[</span>D<span className="footer__bracket">]</span>
          {' '}{meta.name}
        </span>
        <span className="footer__built">{t.footer.built} · {year}</span>
        <div className="footer__links">
          <a href={meta.github} target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href={meta.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </div>
      </div>
    </footer>
  )
}
