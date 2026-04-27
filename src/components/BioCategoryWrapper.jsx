import { useReveal } from '../hooks/useReveal'
import './BioCategoryWrapper.css'

export default function BioCategoryWrapper({ children, delay = 0 }) {
  const ref = useReveal({ delay })

  return (
    <div className="bio-category-wrapper" ref={ref}>
      <div className="bio-category-wrapper__content">
        {children}
      </div>
      <hr className="bio-category-wrapper__divider" />
    </div>
  )
}

