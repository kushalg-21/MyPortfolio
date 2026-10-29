import { Menu, X } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import { contactNavItem, navItems, profile } from '../data/portfolio'
import { useActiveSection } from '../hooks/useActiveSection'
import { ScrollProgress } from './ScrollProgress'

const sectionIds = [...navItems, contactNavItem].map((item) => item.id)
const mobileItems = [...navItems, contactNavItem]

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const activeId = useActiveSection(sectionIds)
  const panelRef = useRef<HTMLDivElement>(null)
  const toggleRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    const update = () => setIsScrolled(window.scrollY > 24)
    update()
    window.addEventListener('scroll', update, { passive: true })
    return () => window.removeEventListener('scroll', update)
  }, [])

  useEffect(() => {
    const query = window.matchMedia('(min-width: 861px)')
    const onChange = () => {
      if (query.matches) setIsOpen(false)
    }

    query.addEventListener('change', onChange)
    return () => query.removeEventListener('change', onChange)
  }, [])

  useEffect(() => {
    if (!isOpen) return

    const previousFocus = document.activeElement as HTMLElement | null
    document.body.classList.add('is-locked')

    const panel = panelRef.current
    const panelLinks = panel ? Array.from(panel.querySelectorAll<HTMLElement>('a[href]')) : []
    const focusable = toggleRef.current ? [toggleRef.current, ...panelLinks] : panelLinks
    panelLinks[0]?.focus()

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsOpen(false)
        return
      }

      if (event.key !== 'Tab' || focusable.length === 0) return

      const first = focusable[0]
      const last = focusable[focusable.length - 1]

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault()
        last?.focus()
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault()
        first?.focus()
      }
    }

    document.addEventListener('keydown', onKeyDown)
    return () => {
      document.body.classList.remove('is-locked')
      document.removeEventListener('keydown', onKeyDown)
      previousFocus?.focus()
    }
  }, [isOpen])

  return (
    <>
      <header className={`site-header ${isScrolled ? 'is-scrolled' : ''}`}>
        <div className="container header__inner">
          <a className="brand" href="#top" onClick={() => setIsOpen(false)}>
            <span className="brand__mark" aria-hidden="true">
              K
            </span>
            <span className="brand__name">{profile.name}</span>
            <span className="sr-only">— back to top</span>
          </a>

          <nav className="nav" aria-label="Primary">
            <ul className="nav__list">
              {navItems.map((item) => (
                <li key={item.id}>
                  <a
                    className="nav__link"
                    href={`#${item.id}`}
                    aria-current={activeId === item.id ? 'true' : undefined}
                  >
                    <span className="nav__index" aria-hidden="true">
                      {item.index}
                    </span>
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="header__actions">
            <a
              className="header__cta"
              href="#contact"
              aria-current={activeId === 'contact' ? 'true' : undefined}
              onClick={() => setIsOpen(false)}
            >
              Contact
            </a>
            <button
              type="button"
              className="menu-toggle"
              ref={toggleRef}
              aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={isOpen}
              aria-controls="mobile-navigation"
              onClick={() => setIsOpen((open) => !open)}
            >
              {isOpen ? (
                <X size={19} strokeWidth={1.6} aria-hidden="true" />
              ) : (
                <Menu size={19} strokeWidth={1.6} aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
        <ScrollProgress />
      </header>

      {isOpen && (
        <div
          className="mobile-nav"
          id="mobile-navigation"
          role="dialog"
          aria-modal="true"
          aria-label="Site navigation"
          ref={panelRef}
        >
          <nav aria-label="Mobile">
            <ul className="mobile-nav__list">
              {mobileItems.map((item) => (
                <li className="mobile-nav__item" key={item.id}>
                  <a
                    className="mobile-nav__link"
                    href={`#${item.id}`}
                    onClick={() => setIsOpen(false)}
                    aria-current={activeId === item.id ? 'true' : undefined}
                  >
                    {item.label}
                    <span aria-hidden="true">{item.index}</span>
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <div className="mobile-nav__footer">
            <span>{profile.degree}</span>
            <span>{profile.university}</span>
            <span>{profile.year}</span>
          </div>
        </div>
      )}
    </>
  )
}
