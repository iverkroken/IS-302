import { useNavigate } from 'react-router-dom'
import { teamMembers } from '../data/teamMembers'
import BioHeader from '../components/BioHeader'
import BioSection from '../components/BioSection'
import Projects from '../components/Projects'
import './Page.css'
import './BioPage.css'

export default function BioTobias() {
  const navigate = useNavigate()
  const member = teamMembers.find(m => m.id === 2)

  const tobiasProjects = [
    {
      id: 1,
      title: 'ROC',
      description: 'Resonant orbit calculator laget for spillet Kerbal Space Program, med mål å gjøre det enkelt å sette opp satellitt nettverk. Kalkulerer bane for å plassere antall satellitter i bane rundt et legeme, med nøyaktig seperasjon',
      github: 'https://github.com/Gorilla-Mode/ROC',
      tech: ['c', 'ncurses'],
    },
    {
      id: 2,
      title: 'OSMparser',
      description: 'Enkelt of raskt verktrøy for å parse OSM JSON til postGIS punkter. Brukt primært for å lage datasett for effektiv ruting, ved å unngå API kall til OSM og json serialisering',
      github: 'https://github.com/Gorilla-Mode/OSMparser',
      tech: ['go', 'postgis'],
    },
  ]

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

          <Projects
            projects={tobiasProjects}
            title="Mine prosjekter"
            subtitle="Selv om vi har som gruppe hatt mange prosjekter, holder jeg også på med noen på egenhånd."
            delay={0.3}
          />
        </div>

      </div>
    </div>
  )
}

