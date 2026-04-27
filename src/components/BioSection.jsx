import { useReveal } from '../hooks/useReveal'
import './BioSection.css'

export default function BioSection({ title, children, image }) {
  const ref = useReveal()

  return (
    <section className="bio-section" ref={ref}>
      <h2>{title}</h2>
      <div className={image ? 'bio-section__wrapper bio-section__wrapper--with-image' : 'bio-section__wrapper'}>
        <div className="bio-section__content">
          {children}
        </div>
        {image && (
          <div className="bio-section__image-container">
            <img src={image} alt={title} className="bio-section__image" />
          </div>
        )}
      </div>
      <hr className="bio-section__divider" />
    </section>
  )
}

