import { useNavigate } from 'react-router-dom'
import { teamMembers } from '../data/teamMembers'
import BioHeader from '../components/BioHeader'
import './Page.css'
import './BioPage.css'

export default function BioTobias() {
  const navigate = useNavigate()
  const member = teamMembers.find(m => m.id === 2)

  if (!member) {
    return <div>Teammedlem ikke funnet</div>
  }

  return (
    <div className="page">
      <div className="container--wide">
        <button className="btn-back" onClick={() => navigate('/team')}>
          ← Tilbake til teamet
        </button>

        <BioHeader member={member} />

        <div className="bio-content">
          <section className="bio-section">
            <h2>Om meg</h2>
            <p>
              Jeg liker å lære og forstå hvordan ting fungerer fra grunnen, slik at problemer kan løses
              på en informert og effektiv måte. Jeg er spesielt interessert i å utvikle løsninger med god
              brukeropplevelse både for brukere og medarbeidere. Veldig interessert i systemprogrammering.
            </p>
          </section>

          <section className="bio-section">
            <h2>Kontakt</h2>
            <div className="contact-links">
              <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="contact-link">
                LinkedIn
              </a>
              <a href={member.github} target="_blank" rel="noopener noreferrer" className="contact-link">
                GitHub
              </a>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}

