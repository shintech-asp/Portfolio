import useParallax from './useParallax'
import ProjectArt from './ProjectArt'
import { me, links, projects, practice } from './content'
import portrait from './sheen.webp'

function DepthField() {
  const grid = useParallax(0.16, 'page')
  const glow = useParallax(0.34, 'page')
  const dust = useParallax(0.07, 'page')
  return (
    <div className="field" aria-hidden="true">
      <div className="field-glow" ref={glow} />
      <div className="field-grid" ref={grid} />
      <div className="field-dust" ref={dust} />
    </div>
  )
}

function Portrait() {
  const face = useParallax(-0.06)
  const lit = useParallax(0.12)
  const ring = useParallax(-0.16)
  return (
    <div className="portrait">
      <div className="portrait-lit" ref={lit} aria-hidden="true" />
      <div className="portrait-ring" ref={ring} aria-hidden="true" />
      <img ref={face} src={portrait} alt={me.name} width="760" height="720" />
    </div>
  )
}

function Project({ project, index }) {
  const art = useParallax(index % 2 === 0 ? -0.12 : 0.12)
  return (
    <article className={`project${index % 2 === 1 ? ' flip' : ''}`}>
      <div>
        <div className="project-head">
          <h3>{project.name}</h3>
          <span className="project-org">
            {project.org}, {project.year} — {project.role}
          </span>
        </div>
        <p className="project-summary">{project.summary}</p>
        <p className="project-detail">{project.detail}</p>
        <ul className="stack">
          {project.stack.map((t) => (
            <li key={t}>{t}</li>
          ))}
        </ul>
        <a className="visit" href={project.url} target="_blank" rel="noreferrer noopener">
          Open {project.name}
        </a>
      </div>
      <div className="project-art" ref={art}>
        <ProjectArt kind={project.art} />
      </div>
    </article>
  )
}

export default function App() {
  return (
    <>
      <DepthField />
      <div className="page">
        <header className="shell hero">
          <div className="hero-grid">
            <div>
              <p className="hero-name">{me.name}</p>
              <h1>{me.headline}</h1>
              <p className="hero-intro">{me.intro}</p>
              <div className="hero-meta">
                <span>
                  <i className="dot" aria-hidden="true" />
                  {me.available}
                </span>
                <span>{me.location}</span>
              </div>
            </div>
            <Portrait />
          </div>
        </header>

        <hr className="rule" />

        <section className="shell" id="work">
          <h2 className="section-head">Three things I built and still maintain</h2>
          <div className="work-list">
            {projects.map((p, i) => (
              <Project key={p.id} project={p} index={i} />
            ))}
          </div>
        </section>

        <hr className="rule" />

        <section className="shell">
          <h2 className="section-head">How I work</h2>
          <div className="practice">
            {practice.map((item) => (
              <div key={item.label}>
                <h3>{item.label}</h3>
                <p>{item.body}</p>
              </div>
            ))}
          </div>
        </section>

        <hr className="rule" />

        <section className="shell contact" id="contact">
          <h2>Tell me what you are trying to build.</h2>
          <p>
            Send me the site or the problem. I will tell you honestly whether I am the right person
            for it, and what it would take.
          </p>
          <div className="contact-links">
            <a href={`mailto:${links.email}`}>{links.email}</a>
            <a href={`tel:${links.phone.replace(/[^+\d]/g, '')}`}>{links.phone}</a>
            <a href={links.github} target="_blank" rel="noreferrer noopener">
              GitHub
            </a>
            <a href={links.linkedin} target="_blank" rel="noreferrer noopener">
              LinkedIn
            </a>
            <a href={links.facebook} target="_blank" rel="noreferrer noopener">
              Facebook
            </a>
          </div>
        </section>

        <footer className="shell">Built in React. {me.location}.</footer>
      </div>
    </>
  )
}
