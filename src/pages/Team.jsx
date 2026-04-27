import { useNavigate } from 'react-router-dom'
import { useReveal } from '../hooks/useReveal'
import TeamCard from '../components/TeamCard'
import { teamMembers } from '../data/teamMembers'
import './Page.css'
import './Team.css'

export default function Team() {
  const navigate = useNavigate()
  const headRef = useReveal()
  const gridRef = useReveal({ delay: 0.1 })

  return (
    <div className="page">
      <div className="container--wide">
        <div className="page__header" ref={headRef}>
          <p className="page__tag mono">Teamet</p>
          <h1 className="page__title">Møt gruppen</h1>
          <p className={"team-subtext mono"}>Klikk på oss for mer informasjon!</p>
        </div>
        <div className="team-grid" ref={gridRef}>
          {teamMembers.map(m => (
            <div
              key={m.id}
              className="team-card-wrapper"
              onClick={() => navigate(`/team/${m.id}`)}
            >
              <TeamCard member={m} />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
