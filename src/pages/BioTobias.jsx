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
      <div className="container">
        <button className="btn-back" onClick={() => navigate('/team')}>
          ← Tilbake til teamet
        </button>

        <BioHeader member={member} />
        <hr/>
        <div className="bio-content">
          <section className="bio-section">
            <h2>Om meg</h2>
            <p>
              Mega balls
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}

