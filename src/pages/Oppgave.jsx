import { useReveal } from '../hooks/useReveal'
import './Page.css'

export default function Oppgave() {
  const headRef = useReveal()
  const bodyRef = useReveal({ delay: 0.1 })

  return (
    <div className="page">
      <div className="container">
        <div className="page__header" ref={headRef}>
          <p className="page__tag mono">Oppgave</p>
          <h1 className="page__title">Hva skal vi gjøre?</h1>
        </div>
        <div className="page__body" ref={bodyRef}>
          <p>
            Her beskrives praksisoppgaven vi har fått tildelt som vi inneholde mål, scope,
            forventninger og leveranser gjennom semesteret.
          </p>
          <p className="page__placeholder mono">[ Innhold legges til ]</p>
        </div>
      </div>
    </div>
  )
}
