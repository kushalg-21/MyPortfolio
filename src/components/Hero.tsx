import { ArrowDown, ArrowUpRight } from 'lucide-react'
import { heroStack, profile } from '../data/portfolio'
import { Monogram } from './Monogram'

const facts = [
  { label: 'Degree', value: 'B.Tech CSE' },
  { label: 'University', value: profile.university },
  { label: 'Year', value: profile.year },
]

export function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="container">
        <div className="hero__top">
          <span className="eyebrow">
            <span className="eyebrow__index">00</span>
            <span className="eyebrow__rule" aria-hidden="true" />
            Portfolio / {profile.portfolioYear}
          </span>
          <span className="hero__top-meta">B.Tech CSE · Third year</span>
          <span className="hero__top-meta hero__top-meta--muted">CMR University</span>
        </div>

        <div className="hero__main">
          <h1 className="hero__title" id="hero-title">
            <span className="hero__line">
              {profile.firstName}
              <span className="hero__asterisk" aria-hidden="true">
                *
              </span>
            </span>
            <span className="hero__line hero__line--indent">{profile.lastName}</span>
          </h1>

          <div className="hero__figure">
            <Monogram />
          </div>

          <div className="hero__tagline-row">
            <p className="hero__tagline">
              {profile.headlineLead} <em>{profile.headlineAccent}</em>
            </p>
            <span className="hero__tagline-note">{profile.disciplines}</span>
          </div>
        </div>

        <div className="hero__lower">
          <div className="hero__intro">
            <p>{profile.intro}</p>
            <div className="hero__actions">
              <a className="btn btn--primary" href="#work">
                Explore selected work
                <ArrowUpRight size={15} strokeWidth={1.8} aria-hidden="true" />
              </a>
              <a className="btn" href="#contact">
                Get in touch
              </a>
            </div>
          </div>

          <div className="hero__note">
            <span className="mono">Currently</span>
            <p>{profile.note}</p>
          </div>

          <dl className="hero__facts">
            {facts.map((fact) => (
              <div className="hero__fact" key={fact.label}>
                <dt>{fact.label}</dt>
                <dd>{fact.value}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="hero__footer">
          <ul className="hero__stack" aria-label="Tools and technologies">
            {heroStack.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <a className="hero__scroll" href="#work">
            <span>Scroll to work</span>
            <ArrowDown size={14} strokeWidth={1.6} aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  )
}
