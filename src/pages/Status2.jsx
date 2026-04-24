import { useReveal } from '../hooks/useReveal'
import './Page.css'

export default function Status2() {
  const headRef = useReveal()
  const bodyRef = useReveal({ delay: 0.1 })

  return (
    <div className="page">
      <div className="container">
        <div className="page__header" ref={headRef}>
          <p className="page__tag mono">Delrapport</p>
          <h1 className="page__title">Status 2</h1>
        </div>
        <div className="page__body" ref={bodyRef}>
          <p>
            Andre statusrapport: oppdatert status, utfordringer og fremgang
            midtveis i semesteret.
          </p>
          <p className="page__placeholder mono">[ Innhold legges til ]</p>
        </div>
      </div>
    </div>
  )
}
