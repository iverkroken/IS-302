import { useReveal } from '../hooks/useReveal'
import './Page.css'

export default function OmOss() {
  const headRef = useReveal()
  const bodyRef = useReveal({ delay: 0.1 })

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
          <p className="page__placeholder mono">[ Innhold legges til ]</p>
        </div>
      </div>
    </div>
  )
}
