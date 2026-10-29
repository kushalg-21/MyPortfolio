import { ArrowUpRight } from 'lucide-react'
import { projects, projectsNote, type Project } from '../data/portfolio'
import { ProjectArt } from './ProjectArt'
import { Reveal } from './Reveal'
import { SectionHeading } from './SectionHeading'

const featuredProjects = projects.filter((project) => project.featured)
const otherProjects = projects.filter((project) => !project.featured)

function ProjectLinks({ project }: { project: Project }) {
  if (!project.repoUrl && !project.liveUrl) {
    return (
      <span className="project-link project-link--pending">
        <span aria-hidden="true">↳</span> Repository and demo not linked yet
      </span>
    )
  }

  return (
    <div className="project-links">
      {project.repoUrl && (
        <a
          className="project-link"
          href={project.repoUrl}
          target="_blank"
          rel="noreferrer noopener"
          aria-label={`Open ${project.name} repository on GitHub`}
        >
          Repository
          <ArrowUpRight size={13} strokeWidth={1.7} aria-hidden="true" />
        </a>
      )}
      {project.liveUrl && (
        <a
          className="project-link"
          href={project.liveUrl}
          target="_blank"
          rel="noreferrer noopener"
          aria-label={`Open ${project.name} live demo`}
        >
          Live demo
          <ArrowUpRight size={13} strokeWidth={1.7} aria-hidden="true" />
        </a>
      )}
    </div>
  )
}

function FeaturedProject({ project, index }: { project: Project; index: number }) {
  return (
    <Reveal className={`feature ${index % 2 === 1 ? 'feature--reverse' : ''}`}>
      <div className="feature__visual">
        {project.visual && <ProjectArt variant={project.visual} />}
      </div>
      <div className="feature__content">
        <div className="feature__meta">
          <span className="eyebrow">
            <span className="eyebrow__index">{String(index + 1).padStart(2, '0')}</span>
            <span className="eyebrow__rule" aria-hidden="true" />
            Featured project
          </span>
          {project.status && <span className="status">{project.status}</span>}
        </div>
        <h3 className="feature__title">{project.name}</h3>
        <p className="feature__summary">{project.summary}</p>
        <p className="feature__description">{project.description}</p>
        <div className="feature__footer">
          <ul className="feature__stack" aria-label="Technologies and themes">
            {project.stack.map((item) => (
              <li className="tag" key={item}>
                {item}
              </li>
            ))}
          </ul>
          <ProjectLinks project={project} />
        </div>
      </div>
    </Reveal>
  )
}

export function Work() {
  return (
    <section className="section work" id="work" aria-labelledby="work-title">
      <div className="container">
        <SectionHeading
          index="01"
          label="Selected work"
          title={
            <span id="work-title">
              Built to learn,
              <br />
              <em>shown plainly.</em>
            </span>
          }
          note="Two projects explored in detail, followed by the rest of the workshop. No invented screenshots, metrics, or launch claims."
        />

        <div className="featured">
          {featuredProjects.map((project, index) => (
            <FeaturedProject project={project} index={index} key={project.id} />
          ))}
        </div>

        <Reveal className="work-index">
          <div className="work-index__head">
            <h3>Also in the workshop</h3>
            <span className="mono">{String(otherProjects.length).padStart(2, '0')} projects</span>
          </div>

          <ul className="project-list">
            {otherProjects.map((project, index) => (
              <li className="project-row" key={project.id}>
                <span className="project-row__num" aria-hidden="true">
                  {String(index + 3).padStart(2, '0')}
                </span>
                <div className="project-row__body">
                  <h4>{project.name}</h4>
                  <p>{project.summary}</p>
                </div>
                <ul className="project-row__stack" aria-label="Technologies and themes">
                  {project.stack.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                <div className="project-row__aside">
                  {project.repoUrl ? (
                    <a
                      className="project-row__link"
                      href={project.repoUrl}
                      target="_blank"
                      rel="noreferrer noopener"
                      aria-label={`Open ${project.name} repository on GitHub`}
                    >
                      Repo
                      <ArrowUpRight size={12} strokeWidth={1.7} aria-hidden="true" />
                    </a>
                  ) : project.status ? (
                    <span className="tag tag--accent">{project.status}</span>
                  ) : (
                    <span className="project-row__mark" aria-hidden="true" />
                  )}
                </div>
              </li>
            ))}
          </ul>

          <p className="work-index__note">
            <span className="mono">Note</span>
            {projectsNote}
          </p>
        </Reveal>
      </div>
    </section>
  )
}
