import { interests } from '../data/portfolio'
import { Reveal } from './Reveal'
import { SectionHeading } from './SectionHeading'

export function Interests() {
  return (
    <section className="section interests" id="beyond" aria-labelledby="beyond-title">
      <div className="container">
        <SectionHeading
          index="06"
          label="Off-screen"
          title={
            <span id="beyond-title">
              The rest of
              <br />
              <em>the picture.</em>
            </span>
          }
          note="Not everything worth learning happens in an editor. These are the things that keep the perspective wide."
        />

        <div className="interests__grid">
          {interests.map((interest, index) => (
            <Reveal className="interest" key={interest.name} delay={index * 60}>
              <div className="interest__top">
                <span className="mono">{String(index + 1).padStart(2, '0')}</span>
                <span className="interest__mark" aria-hidden="true" />
              </div>
              <h3>{interest.name}</h3>
              <p>{interest.note}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
