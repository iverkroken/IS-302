import { useNavigate } from 'react-router-dom'
import { teamMembers } from '../data/teamMembers'
import BioHeader from '../components/BioHeader'
import './Page.css'
import './BioPage.css'
import BioCategoryWrapper from '../components/BioCategoryWrapper'
import BioPageWrapper from '../components/BioPageWrapper'

export default function BioSivert() {
  const navigate = useNavigate()
  const member = teamMembers.find(m => m.id === 3)

  if (!member) {
    return <div>Teammedlem ikke funnet</div>
  }

  return (
    <div className="page">
      <div className="container">
        <BioPageWrapper>
          <button className="btn-back" onClick={() => navigate('/team')}>
            ← Tilbake til teamet
          </button>

          <BioHeader member={member} />

          <div className="bio-content">
            <BioCategoryWrapper>

            </BioCategoryWrapper>
          </div>
        </BioPageWrapper>
      </div>
    </div>
  )
}

