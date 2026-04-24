import { useReveal } from '../hooks/useReveal'
import './Page.css'

export default function Status1() {
  const headRef = useReveal()
  const bodyRef = useReveal({ delay: 0.1 })

  return (
    <div className="page">
      <div className="container">
        <div className="page__header" ref={headRef}>
          <p className="page__tag mono">Delrapport</p>
          <h1 className="page__title">Status 1</h1>
        </div>
        <div className="page__body" ref={bodyRef}>
          <p>
            Første statusrapport: hva vi har gjort, hva vi har lært og hva
            som er neste steg i praksis.
          </p>
          <p className="page__placeholder mono">[ Innhold legges til ]</p>
        </div>
      </div>
    </div>
  )
}
