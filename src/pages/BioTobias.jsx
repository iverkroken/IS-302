import { useNavigate } from 'react-router-dom'
import { teamMembers } from '../data/teamMembers'
import BioHeader from '../components/BioHeader'
import BioSection from '../components/BioSection'
import './Page.css'
import './BioPage.css'

export default function BioTobias() {
  const navigate = useNavigate()
  const member = teamMembers.find(m => m.id === 2)

  if (!member) {
    return <div>Teammedlem ikke funnet</div>
  }

  return (
    <div className="page" >
      <div className="container" >
        <button className="btn-back" onClick={() => navigate('/team')}>
          ← Tilbake til teamet
        </button>

        <BioHeader member={member} />

        <div className="bio-content">
          <BioSection title="Mine interesser" image='images/tobias-linkedin.jpg'>
            <p>Jeg er liker å lære og forstå hvordan ting fungerer fra grunnen, slik at problemer kan løses på en informert og effektiv måte. Jeg er spesielt interessert i å utvikle løsninger med god en brukeropplevelse både for brukere og medarbeidere. Veldig interessert i systemprogrammering</p>
          </BioSection>
        </div>
      </div>
    </div>
  )
}

