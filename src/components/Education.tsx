import { education } from '../data/portfolio'
import { Reveal } from './Reveal'
import { SectionHeading } from './SectionHeading'

export function Education() {
  const period = education.startYear
    ? `${education.startYear} — ${education.endYear ?? 'Present'}`
    : null

  return (
    <section className="section education" id="education" aria-labelledby="education-title">
      <div className="container">
        <SectionHeading
          index="04"
          label="Education"
          title={
            <span id="education-title">
              The formal
              <br />
              <em>foundation.</em>
            </span>
          }
          note="Where the fundamentals come from. Academic details are limited to what is confirmed."
        />

        <div className="education__grid">
          <Reveal className="education__marker">
            <span className="education__year">03</span>
            <span className="mono">Year of study</span>
          </Reveal>

          <Reveal className="education__entry" delay={100}>
            <div className="education__top">
              <span className="status">{education.status}</span>
              <span className="mono">EDU / 001</span>
            </div>
            <h3>{education.degree}</h3>
            <p className="education__institution">{education.institution}</p>

            <dl className="education__facts">
              <div>
                <dt>Level</dt>
                <dd>{education.level}</dd>
              </div>
              <div>
                <dt>Programme</dt>
                <dd>Undergraduate</dd>
              </div>
              <div>
                <dt>Status</dt>
                <dd>{education.status}</dd>
              </div>
              {period && (
                <div>
                  <dt>Dates</dt>
                  <dd>{period}</dd>
                </div>
              )}
            </dl>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
