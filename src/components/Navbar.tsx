import { useEffect, useState } from 'react'
import { meta } from '../data'
import { useTranslation } from '../i18n'
import './Navbar.css'

interface NavbarProps {
  lang: 'en' | 'pt'
  onToggleLang: () => void
}

export function Navbar({ lang, onToggleLang }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false)
  const t = useTranslation(lang)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const links = [
    { label: t.nav.work, href: '#work' },
    { label: t.nav.stack, href: '#stack' },
    { label: t.nav.about, href: '#about' },
    { label: t.nav.contact, href: '#contact' },
  ]

  return (
    <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`} role="navigation">
      <a href="#" className="navbar__logo" aria-label="Home">
        <span className="navbar__logo-bracket">[</span>
        D
        <span className="navbar__logo-bracket">]</span>
      </a>

      <ul className="navbar__links" role="list">
        {links.map(link => (
          <li key={link.href}>
            <a href={link.href} className="navbar__link">{link.label}</a>
          </li>
        ))}
      </ul>

      <div className="navbar__actions">
        <button className="navbar__lang" onClick={onToggleLang} aria-label="Toggle language">
          {lang === 'en' ? 'PT' : 'EN'}
        </button>
        <a href={meta.cv} className="navbar__cv" aria-label="Download CV">
          CV ↗
        </a>
      </div>
    </nav>
  )
}
