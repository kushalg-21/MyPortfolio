import { ArrowUp, ArrowUpRight } from 'lucide-react'
import { contactLinks, profile } from '../data/portfolio'

const footerLinks = [
  { id: 'work', label: 'Work' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'education', label: 'Education' },
  { id: 'experience', label: 'Experience' },
  { id: 'beyond', label: 'Off-screen' },
  { id: 'contact', label: 'Contact' },
]

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer__top">
          <div className="footer__identity">
            <a className="footer__brand" href="#top">
              <span aria-hidden="true">{profile.monogram}</span>
              {profile.name}
              <span className="sr-only">— back to top</span>
            </a>
            <p>
              {profile.role} at {profile.university}. Learning, building, and keeping the details
              honest.
            </p>

            <nav className="footer__contact" aria-label="Direct contact">
              {contactLinks.map((link) => {
                const isExternal = !link.href?.startsWith('mailto:')

                return (
                  <a
                    key={link.id}
                    href={link.href ?? undefined}
                    aria-label={
                      link.id === 'email'
                        ? `Email ${profile.name}`
                        : `${link.label} profile for ${profile.name}`
                    }
                    {...(isExternal
                      ? { target: '_blank', rel: 'noreferrer noopener' }
                      : {})}
                  >
                    {link.label}
                    <ArrowUpRight size={11} strokeWidth={1.7} aria-hidden="true" />
                  </a>
                )
              })}
            </nav>
          </div>

          <nav className="footer__nav" aria-label="Footer">
            <ul>
              {footerLinks.map((link) => (
                <li key={link.id}>
                  <a href={`#${link.id}`}>{link.label}</a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="footer__meta">
            <span className="mono">Currently</span>
            <span>{profile.year}</span>
            <span className="mono footer__meta-note">B.Tech CSE / CMR University</span>
          </div>
        </div>

        <div className="footer__bottom">
          <span>© {profile.portfolioYear} {profile.name}</span>
          <span>Built with React, Vite & TypeScript</span>
          <a className="footer__top-link" href="#top">
            Back to top
            <ArrowUp size={12} strokeWidth={1.7} aria-hidden="true" />
          </a>
        </div>
      </div>
    </footer>
  )
}
