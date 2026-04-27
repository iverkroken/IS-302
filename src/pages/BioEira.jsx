import { useNavigate } from 'react-router-dom'
import { teamMembers } from '../data/teamMembers'
import BioHeader from '../components/BioHeader'
import './Page.css'
import './BioPage.css'
import BioCategoryWrapper from "../components/BioCategoryWrapper.jsx";
import BioPageWrapper from '../components/BioPageWrapper'

export default function BioEira() {
  const navigate = useNavigate()
  const member = teamMembers.find(m => m.id === 4)

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
              {/* bruk denne hvis du skal ha mer i ting i bion, passer basically på at seperator linja er på bunnen */}
            </BioCategoryWrapper>
          </div>
        </BioPageWrapper>
      </div>
    </div>
  )
}

