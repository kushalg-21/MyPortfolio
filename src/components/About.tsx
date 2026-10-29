import { FileText } from 'lucide-react'
import { aboutParagraphs, principles, profile, resume } from '../data/portfolio'
import { Reveal } from './Reveal'
import { SectionHeading } from './SectionHeading'

const facts = [
  { label: 'Degree', value: profile.degree },
  { label: 'University', value: profile.university },
  { label: 'Year', value: profile.year },
  { label: 'Focus', value: 'Software & AI' },
  { label: 'Approach', value: 'Learn by building' },
]

export function About() {
  return (
    <section className="section about" id="about" aria-labelledby="about-title">
      <div className="container">
        <SectionHeading
          index="02"
          label="About"
          title={
            <span id="about-title">
              Curiosity, turned into
              <br />
              <em>practice.</em>
            </span>
          }
          note="A short version: I learn by building, and I build to understand."
        />

        <div className="about__grid">
          <Reveal className="about__body">
            {aboutParagraphs.map((paragraph, index) => (
              <p className={index === 0 ? 'about__lead' : 'about__text'} key={paragraph.slice(0, 24)}>
                {paragraph}
              </p>
            ))}

            <ol className="principles" aria-label="Working principles">
              {principles.map((principle, index) => (
                <li className="principle" key={principle.title}>
                  <span className="principle__num" aria-hidden="true">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <div>
                    <h3>{principle.title}</h3>
                    <p>{principle.body}</p>
                  </div>
                </li>
              ))}
            </ol>
          </Reveal>

          <Reveal className="about__aside" delay={120}>
            <aside className="profile-panel" aria-label="Profile summary">
              <div className="profile-panel__head">
                <span className="mono">Profile / {profile.monogram}</span>
                <span className="profile-panel__dot" aria-hidden="true" />
              </div>

              <dl className="profile-panel__facts">
                {facts.map((fact) => (
                  <div className="profile-panel__fact" key={fact.label}>
                    <dt>{fact.label}</dt>
                    <dd>{fact.value}</dd>
                  </div>
                ))}
              </dl>

              <div className="resume-card">
                <div className="resume-card__head">
                  <FileText size={15} strokeWidth={1.5} aria-hidden="true" />
                  <span>{resume.label}</span>
                </div>
                {resume.available ? (
                  <a
                    className="resume-card__action"
                    href={`${import.meta.env.BASE_URL}${resume.path}`}
                    download="Kushal-Gowda-G-Resume.pdf"
                    aria-label="Download Kushal Gowda G.'s résumé as a PDF"
                  >
                    Download PDF
                  </a>
                ) : (
                  <span
                    className="resume-card__pending"
                    title="Add the PDF to public/resume/ to enable this action."
                  >
                    PDF not added yet
                  </span>
                )}
              </div>
            </aside>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
