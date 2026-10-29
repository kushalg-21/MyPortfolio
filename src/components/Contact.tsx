import { ArrowUpRight } from 'lucide-react'
import { contactLinks, hasUnconfiguredLinks, profile } from '../data/portfolio'
import { Reveal } from './Reveal'

function ContactValue({ id, label, value, href }: (typeof contactLinks)[number]) {
  const isExternal = Boolean(href && !href.startsWith('mailto:'))

  if (!href) {
    return (
      <div className={`contact-value contact-value--pending ${id === 'email' ? 'contact-value--large' : ''}`}>
        <span className="contact-value__label">{label}</span>
        <span className="contact-value__text">
          {value}
          <span className="placeholder-badge">Placeholder</span>
        </span>
      </div>
    )
  }

  return (
    <a
      className={`contact-value contact-value--link ${id === 'email' ? 'contact-value--large' : ''}`}
      href={href}
      {...(isExternal ? { target: '_blank', rel: 'noreferrer noopener' } : {})}
    >
      <span className="contact-value__label">{label}</span>
      <span className="contact-value__text">
        {id === 'email' && value.includes('@') ? (
          <>
            {value.slice(0, value.indexOf('@'))}
            <wbr />@{value.slice(value.indexOf('@') + 1)}
          </>
        ) : (
          value
        )}
        <ArrowUpRight size={18} strokeWidth={1.5} aria-hidden="true" />
      </span>
    </a>
  )
}

export function Contact() {
  const email = contactLinks.find((link) => link.id === 'email')
  const socials = contactLinks.filter((link) => link.id !== 'email')

  return (
    <section className="section contact" id="contact" aria-labelledby="contact-title">
      <div className="container">
        <Reveal className="contact__head">
          <span className="eyebrow">
            <span className="eyebrow__index">07</span>
            <span className="eyebrow__rule" aria-hidden="true" />
            Contact
          </span>
          <h2 id="contact-title">
            Let&apos;s build something
            <br />
            <em>worth using.</em>
          </h2>
          <p className="contact__intro">
            I am always glad to talk about software, AI, or a project worth thinking through.
            Write to me, or find me on the platforms below.
          </p>
        </Reveal>

        <Reveal className="contact__details" delay={100}>
          {email && (
            <div className="contact__primary">
              <ContactValue {...email} />
            </div>
          )}

          <div className="contact__secondary">
            {socials.map((link) => (
              <ContactValue key={link.id} {...link} />
            ))}
          </div>
        </Reveal>

        {hasUnconfiguredLinks && (
          <Reveal>
            <p className="contact__setup">
              <span className="mono">Draft</span>
              Contact links and the résumé are placeholders. Update{' '}
              <code>src/data/portfolio.ts</code> and add the PDF to{' '}
              <code>public/resume/</code> before publishing.
            </p>
          </Reveal>
        )}
      </div>

      <div className="contact__signature" aria-hidden="true">
        <span>{profile.monogram}</span>
      </div>
    </section>
  )
}
