import { skillGroups } from '../data/portfolio'
import { Reveal } from './Reveal'
import { SectionHeading } from './SectionHeading'

export function Skills() {
  const total = skillGroups.reduce((count, group) => count + group.items.length, 0)

  return (
    <section className="section skills" id="skills" aria-labelledby="skills-title">
      <div className="container">
        <SectionHeading
          index="03"
          label="Technical skills"
          title={
            <span id="skills-title">
              The toolkit,
              <br />
              <em>without the theatre.</em>
            </span>
          }
          note="Tools grouped by how I use them. No percentage bars, no invented proficiency scores — just work in progress."
        />

        <div className="skills__grid">
          <Reveal className="skills__aside">
            <span className="mono">Stack index</span>
            <p>
              A working set that grows with each project. The categories overlap on purpose:
              software, hardware, and AI rarely stay in separate boxes.
            </p>
            <div className="skills__count">
              <span>{String(skillGroups.length).padStart(2, '0')}</span>
              <span className="mono">Groups</span>
              <span>{String(total).padStart(2, '0')}</span>
              <span className="mono">Entries</span>
            </div>
          </Reveal>

          <div className="skills__rows">
            {skillGroups.map((group, index) => (
              <Reveal key={group.label} delay={index * 50}>
                <div className="skill-row">
                  <div className="skill-row__label">
                    <span className="skill-row__num" aria-hidden="true">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <div>
                      <h3>{group.label}</h3>
                      <p>{group.note}</p>
                    </div>
                  </div>
                  <ul className="skill-row__items">
                    {group.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
