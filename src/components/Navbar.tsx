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
  const [activeId, setActiveId] = useState<string | null>(null)
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

  useEffect(() => {
    const sectionIds = links.map(link => link.href.slice(1))
    const sections = sectionIds
      .map(id => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null)

    if (sections.length === 0) return

    const observer = new IntersectionObserver(
      entries => {
        const visible = entries
          .filter(entry => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)
        if (visible[0]) setActiveId(visible[0].target.id)
      },
      { rootMargin: '-40% 0px -50% 0px', threshold: [0, 0.25, 0.5, 0.75, 1] }
    )

    sections.forEach(section => observer.observe(section))
    return () => observer.disconnect()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lang])

  return (
    <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`} role="navigation">
      <a href="#" className="navbar__logo" aria-label="Home">
        <span className="navbar__logo-bracket">[</span>
        D
        <span className="navbar__logo-bracket">]</span>
      </a>

      <ul className="navbar__links" role="list">
        {links.map(link => {
          const isActive = activeId === link.href.slice(1)
          return (
            <li key={link.href}>
              <a
                href={link.href}
                className={`navbar__link ${isActive ? 'navbar__link--active' : ''}`}
                aria-current={isActive ? 'true' : undefined}
              >
                {link.label}
              </a>
            </li>
          )
        })}
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
