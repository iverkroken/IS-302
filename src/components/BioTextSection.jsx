import { useReveal } from '../hooks/useReveal'
import './BioImageSection.css'

export default function BioTextSection({ title, children }) {
  const ref = useReveal()

  return (
    <section className="bio-section" ref={ref}>
      <h2>{title}</h2>
      <div className="bio-section__wrapper">
        <div className="bio-section__content">
          {children}
        </div>
      </div>
    </section>
  )
}

