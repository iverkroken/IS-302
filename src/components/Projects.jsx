import { useReveal } from '../hooks/useReveal'
import './Projects.css'

// Tech icon map - can be emoji string or SVG component
const techIcons = {
  postgresql: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="tech-icon-svg">
      {/* Elephant head */}
      <circle cx="10" cy="8" r="2.5" fill="#336791" />
      {/* Elephant body */}
      <ellipse cx="12" cy="14" rx="3.5" ry="4" fill="#336791" />
      {/* Elephant trunk */}
      <path d="M10 10 Q8 12 7 15" stroke="#336791" strokeWidth="1.5" fill="none" strokeLinecap="round" />
      {/* Elephant ears */}
      <ellipse cx="8.5" cy="10" rx="1.5" ry="2.5" fill="#336791" opacity="0.8" />
      <ellipse cx="15.5" cy="10" rx="1.5" ry="2.5" fill="#336791" opacity="0.8" />
    </svg>
  ),
  postgis: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="tech-icon-svg">
      {/* Globe */}
      <circle cx="12" cy="12" r="9" fill="none" stroke="#336791" strokeWidth="1.5" />
      {/* Longitude lines */}
      <path d="M12 3 Q12 12 12 21" stroke="#336791" strokeWidth="0.8" />
      <path d="M15 6 Q12 12 15 18" stroke="#336791" strokeWidth="0.8" />
      <path d="M9 6 Q12 12 9 18" stroke="#336791" strokeWidth="0.8" />
      {/* Latitude lines */}
      <ellipse cx="12" cy="12" rx="9" ry="4" fill="none" stroke="#336791" strokeWidth="0.8" />
      <ellipse cx="12" cy="8" rx="7" ry="2.5" fill="none" stroke="#336791" strokeWidth="0.8" />
      <ellipse cx="12" cy="16" rx="7" ry="2.5" fill="none" stroke="#336791" strokeWidth="0.8" />
    </svg>
  ),
  typescript: (
    <svg viewBox="0 0 24 24" fill="#3178c6" className="tech-icon-svg">
      <rect x="2" y="2" width="20" height="20" rx="2" />
      <text x="12" y="17" textAnchor="middle" fill="white" fontSize="10" fontWeight="bold">TS</text>
    </svg>
  ),
  c: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="tech-icon-svg">
      {/* Top face of hexagon - larger */}
      <path d="M2 9 L12 2 L22 9 L12 16 Z" fill="#5B9BD5" />
      {/* Left face of hexagon - larger */}
      <path d="M2 9 L12 16 L12 22 L2 15 Z" fill="#4A90C9" />
      {/* Right face of hexagon - larger */}
      <path d="M12 16 L22 9 L22 15 L12 22 Z" fill="#2E5FA3" />
      {/* Large white C shape - outer arc */}
      <circle cx="12" cy="12" r="4.5" fill="none" stroke="white" strokeWidth="3.5" />
      {/* Center circle to create C shape */}
      <circle cx="12" cy="12" r="2" fill="#2E5FA3" />
      {/* Cut out right side to show C */}
      <rect x="14.5" y="8.5" width="4" height="7" fill="#2E5FA3" />
    </svg>
  ),
  go: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="tech-icon-svg">
      {/* Gopher body */}
      <ellipse cx="12" cy="14" rx="5" ry="6" fill="#00ADD8" />
      {/* Gopher head */}
      <circle cx="12" cy="8" r="4" fill="#00ADD8" />
      {/* Left ear */}
      <circle cx="9.5" cy="5" r="1.2" fill="#00ADD8" />
      {/* Right ear */}
      <circle cx="14.5" cy="5" r="1.2" fill="#00ADD8" />
      {/* Left eye */}
      <circle cx="10.5" cy="7.5" r="0.8" fill="white" />
      <circle cx="10.5" cy="7.5" r="0.4" fill="black" />
      {/* Right eye */}
      <circle cx="13.5" cy="7.5" r="0.8" fill="white" />
      <circle cx="13.5" cy="7.5" r="0.4" fill="black" />
      {/* Nose */}
      <ellipse cx="12" cy="9" rx="0.5" ry="0.6" fill="black" />
      {/* Mouth - happy smile */}
      <path d="M11.2 9.8 Q12 10.3 12.8 9.8" fill="none" stroke="black" strokeWidth="0.3" strokeLinecap="round" />
      {/* Front teeth */}
      <rect x="11.3" y="10" width="0.6" height="0.4" fill="white" stroke="black" strokeWidth="0.2" />
      <rect x="12.1" y="10" width="0.6" height="0.4" fill="white" stroke="black" strokeWidth="0.2" />
      {/* Left paw */}
      <ellipse cx="8.5" cy="17" rx="1" ry="1.5" fill="#00ADD8" />
      {/* Right paw */}
      <ellipse cx="15.5" cy="17" rx="1" ry="1.5" fill="#00ADD8" />
      {/* Tail */}
      <path d="M14 16 Q16 15 16.5 12" fill="none" stroke="#00ADD8" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  ),
  'c#': (
    <svg viewBox="0 0 24 24" fill="#239120" className="tech-icon-svg">
      <rect x="2" y="2" width="20" height="20" rx="2" fill="#239120" />
      <text x="12" y="17" textAnchor="middle" fill="white" fontSize="10" fontWeight="bold">C#</text>
    </svg>
  ),
  python: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="tech-icon-svg">
      {/* Blue top vertical bar */}
      <rect x="10" y="5" width="4" height="7" fill="#3776AB" />
      {/* Blue left horizontal bar */}
      <rect x="4" y="10" width="6" height="4" fill="#3776AB" />
      {/* Yellow bottom vertical bar */}
      <rect x="10" y="12" width="4" height="7" fill="#FFD43B" />
      {/* Yellow right horizontal bar */}
      <rect x="14" y="10" width="6" height="4" fill="#FFD43B" />
    </svg>
  ),
  react: (
    <svg viewBox="0 0 24 24" fill="#61DAFB" className="tech-icon-svg">
      <circle cx="12" cy="12" r="2" fill="#61DAFB" />
      <ellipse cx="12" cy="12" rx="8" ry="4" fill="none" stroke="currentColor" strokeWidth="1" />
      <ellipse cx="12" cy="12" rx="8" ry="4" fill="none" stroke="currentColor" strokeWidth="1" transform="rotate(60 12 12)" />
      <ellipse cx="12" cy="12" rx="8" ry="4" fill="none" stroke="currentColor" strokeWidth="1" transform="rotate(120 12 12)" />
    </svg>
  ),
  docker: (
    <svg viewBox="0 0 24 24" fill="#2496ED" className="tech-icon-svg">
      {/* Whale body */}
      <ellipse cx="12" cy="13" rx="6" ry="5" fill="#2496ED" />
      {/* Whale head */}
      <circle cx="7" cy="10" r="3" fill="#2496ED" />
      {/* Whale tail flukes */}
      <path d="M18 12 L21 8 L20 13 Z" fill="#2496ED" />
      <path d="M18 14 L21 18 L20 13 Z" fill="#2496ED" />
      {/* Whale eye */}
      <circle cx="6" cy="9" r="0.8" fill="white" />
      {/* Water splash details */}
      <path d="M10 8 L11 6 M12 8 L13 6 M14 8 L15 6" stroke="#2496ED" strokeWidth="0.8" opacity="0.6" strokeLinecap="round" />
    </svg>
  ),
  javascript: (
    <svg viewBox="0 0 24 24" fill="#F7DF1E" className="tech-icon-svg">
      <rect x="2" y="2" width="20" height="20" rx="2" fill="#F7DF1E" />
      <text x="12" y="17" textAnchor="middle" fill="black" fontSize="10" fontWeight="bold">JS</text>
    </svg>
  ),
  sql: (
    <svg viewBox="0 0 24 24" fill="#336791" className="tech-icon-svg">
      <rect x="2" y="2" width="20" height="20" rx="2" fill="#336791" />
      <text x="12" y="17" textAnchor="middle" fill="white" fontSize="9" fontWeight="bold">SQL</text>
    </svg>
  ),
  tailwind: (
    <svg viewBox="0 0 24 24" fill="#06B6D4" className="tech-icon-svg">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-3 13c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm6 0c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm0-7c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z" />
    </svg>
  ),
  maplibre: (
    <svg viewBox="0 0 24 24" fill="#1FBAD6" className="tech-icon-svg">
      <rect x="2" y="2" width="20" height="20" rx="2" fill="#1FBAD6" />
      <path d="M12 5L8 10h2v8h4v-8h2l-4-5z" fill="white" />
    </svg>
  ),
  'asp.net': (
    <svg viewBox="0 0 24 24" fill="#512BD4" className="tech-icon-svg">
      <rect x="2" y="2" width="20" height="20" rx="2" fill="#512BD4" />
      <text x="12" y="18" textAnchor="middle" fill="white" fontSize="7" fontWeight="bold">.NET</text>
    </svg>
  ),
  ncurses: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="tech-icon-svg">
      {/* Terminal background */}
      <rect x="3" y="4" width="18" height="16" rx="2" fill="#1a1a1a" stroke="#00FF00" strokeWidth="1" />
      {/* Top bar */}
      <rect x="3" y="4" width="18" height="2" fill="#004400" />
      {/* N character in green ASCII style */}
      <text x="12" y="15" textAnchor="middle" fill="#00FF00" fontSize="8" fontFamily="monospace" fontWeight="bold">N</text>
    </svg>
  ),
}

function TechTag({ tech }) {
  const iconOrEmoji = techIcons[tech.toLowerCase()] || '⚙️'
  const isSVG = typeof iconOrEmoji === 'object' && iconOrEmoji.type

  return (
    <span className="tech-tag" title={tech}>
      <span className="tech-tag__icon">
        {isSVG ? iconOrEmoji : <span>{iconOrEmoji}</span>}
      </span>
      <span className="tech-tag__text">{tech}</span>
    </span>
  )
}

export default function Projects({ projects, title = 'Prosjekter', subtitle, delay = 0 }) {
  const ref = useReveal({ delay })

  return (
    <section className="projects-section" ref={ref}>
      <h2 className="projects-section__heading">{title}</h2>
      {subtitle && <p className="projects-section__sub">{subtitle}</p>}
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
              {p.tech && (
                <div className="project-card__tech">
                  {p.tech.map(t => (
                    <TechTag key={t} tech={t} />
                  ))}
                </div>
              )}
              <p className="project-card__desc">{p.description}</p>
            </div>
            <div className="project-card__footer">
              <span className="project-card__cta mono">Se på GitHub →</span>
            </div>
          </a>
        ))}
      </div>
    </section>
  )
}

