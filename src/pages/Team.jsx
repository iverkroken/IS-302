import { useReveal } from '../hooks/useReveal'
import TeamCard from '../components/TeamCard'
import { teamMembers } from '../data/teamMembers'
import './Page.css'
import './Team.css'

export default function Team() {
  const headRef = useReveal()
  const gridRef = useReveal({ delay: 0.1 })

  return (
    <div className="page">
      <div className="container--wide">
        <div className="page__header" ref={headRef}>
          <p className="page__tag mono">Teamet</p>
          <h1 className="page__title">Møt gruppen</h1>
        </div>
        <div className="team-grid" ref={gridRef}>
          {teamMembers.map(m => <TeamCard key={m.id} member={m} />)}
        </div>
      </div>
    </div>
  )
}
