import { useReveal } from '../hooks/useReveal'
import { projects } from '../data/projects'
import './Page.css'
import './OmOss.css'

export default function OmOss() {
  const headRef  = useReveal()
  const bodyRef  = useReveal({ delay: 0.1 })
  const videoRef = useReveal({ delay: 0.15 })
  const projRef  = useReveal({ delay: 0.2 })

  return (
    <div className="page">
      <div className="container">

        <div className="page__header" ref={headRef}>
          <p className="page__tag mono">Om oss</p>
          <h1 className="page__title">Hvem er vi?</h1>
        </div>

        <div className="page__body" ref={bodyRef}>
          <p>
            Vi er en gruppe med fem IT-studenter ved Universitetet i Agder som tar
            praksisemnet IS-302. Her presenterer vi gruppen gjennom en kort introduksjonsvideo.
            Mer informasjon om hvert gruppemedlem finner du på Team-siden.
          </p>
        </div>

        {/*
          Video placeholder — bytt ut <div className="video-placeholder"> med:
          <video controls src="/videos/intro.mp4" className="video-embed" />
          eller en YouTube/Vimeo <iframe> når videoen er klar.
        */}
        <div className="video-wrap" ref={videoRef}>
          <div className="video-placeholder">
            <div className="video-placeholder__icon" aria-hidden="true">
              <svg width="52" height="52" viewBox="0 0 52 52" fill="none">
                <circle cx="26" cy="26" r="25" stroke="rgba(232,255,71,0.35)" strokeWidth="1.5"/>
                <path d="M21 18l16 8-16 8V18z" fill="rgba(232,255,71,0.75)"/>
              </svg>
            </div>
            <p className="video-placeholder__label mono">Introduksjonsvideo kommer</p>
          </div>
        </div>

        <section className="projects-section" ref={projRef}>
          <h2 className="projects-section__heading">Tidligere prosjekter</h2>
          <p className="projects-section__sub">
            Et utvalg av prosjekter vi har jobbet med tidligere i studiet.
          </p>
          <div className="projects-grid">
            {projects.map(p => (
              <a
                key={p.id}
                href={p.github}
                target="_blank"
                rel="noreferrer"
                className="project-card"
              >
                <div className="project-card__body">
                  <h3 className="project-card__title">{p.title}</h3>
                  <p className="project-card__desc">{p.description}</p>
                </div>
                <div className="project-card__footer">
                  <span className="project-card__cta mono">Se på GitHub →</span>
                </div>
              </a>
            ))}
          </div>
        </section>

      </div>
    </div>
  )
}
