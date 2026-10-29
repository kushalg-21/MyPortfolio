import { experience } from '../data/portfolio'
import { Reveal } from './Reveal'
import { SectionHeading } from './SectionHeading'

const categories = ['Internships', 'Hackathons', 'Certifications', 'Awards']

export function Experience() {
  const hasEntries = experience.entries.length > 0

  return (
    <section
      className="section section--tight experience"
      id="experience"
      aria-labelledby="experience-title"
    >
      <div className="container">
        <SectionHeading
          index="05"
          label="Experience & achievements"
          title={
            <span id="experience-title">
              A record,
              <br />
              <em>still being written.</em>
            </span>
          }
          note={
            hasEntries
              ? 'Verified internships, hackathons, certifications, and awards.'
              : 'No placeholder awards. No borrowed milestones. This section stays empty until there is something verified to put in it.'
          }
        />

        <div className="experience__grid">
          <Reveal className="experience__intro">
            <p>{experience.intro}</p>
          </Reveal>

          {hasEntries ? (
            <Reveal className="experience__entries" delay={100}>
              {experience.entries.map((entry) => (
                <article className="experience-entry" key={`${entry.title}-${entry.organisation}`}>
                  <div className="experience-entry__top">
                    <h3>{entry.title}</h3>
                    <span className="mono">{entry.period}</span>
                  </div>
                  <p className="experience-entry__org">{entry.organisation}</p>
                  <p className="experience-entry__description">{entry.description}</p>
                </article>
              ))}
            </Reveal>
          ) : (
            <Reveal className="experience__ledger" delay={100}>
              <div className="experience__ledger-head">
                <span className="mono">Record</span>
                <span className="mono">Status</span>
              </div>
              {categories.map((category) => (
                <div className="experience__row" key={category}>
                  <span>{category}</span>
                  <span className="experience__dash" aria-hidden="true">
                    —
                  </span>
                  <span className="mono">Awaiting verified entry</span>
                </div>
              ))}
            </Reveal>
          )}
        </div>
      </div>
    </section>
  )
}
