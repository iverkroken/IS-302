import { useNavigate } from 'react-router-dom'
import { teamMembers } from '../data/teamMembers'
import BioHeader from '../components/BioHeader'
import BioImageSection from '../components/BioImageSection.jsx'
import BioCategoryWrapper from '../components/BioCategoryWrapper'
import ImageCarousel from '../components/ImageCarousel'
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

  const tobiasImages = [
    `${import.meta.env.BASE_URL}images/tobias/R1-02449-032A.JPG`,
    `${import.meta.env.BASE_URL}images/tobias/R1-02063-022A.JPG`,
    `${import.meta.env.BASE_URL}images/tobias/R1-02064-025A.JPG`,
    `${import.meta.env.BASE_URL}images/tobias/R1-04998-016A.JPG`,
    `${import.meta.env.BASE_URL}images/tobias/R1-04997-0031.JPG`,
    `${import.meta.env.BASE_URL}images/tobias/C004321-R1-32-33.JPG`,
    `${import.meta.env.BASE_URL}images/tobias/C004321-R1-25-26.JPG`,
    `${import.meta.env.BASE_URL}images/tobias/C004061-R1-32-33.JPG`,


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
          <BioCategoryWrapper>
            <BioImageSection title="Mine interesser" image={`${import.meta.env.BASE_URL}images/tobias-linkedin.jpg`}>
              <p>Jeg er liker å lære og forstå hvordan ting fungerer fra grunnen, slik at problemer kan løses på en informert og effektiv måte. Jeg er spesielt interessert i å utvikle løsninger med god en brukeropplevelse både for brukere og medarbeidere. Veldig interessert i systemprogrammering</p>
            </BioImageSection>
            <br/>
            <br/>
            <BioImageSection title="Foto galleri">
              <ImageCarousel images={tobiasImages} title="Tobias" />
              <p>Her er noen av favoritt bildene jeg har tatt med ulike motiver.</p>
            </BioImageSection>
          </BioCategoryWrapper>
          <Projects
            projects={tobiasProjects}
            title="Mine prosjekter"
            subtitle="Selv om vi har som gruppe hatt mange prosjekter, holder jeg også på med noen på egenhånd."
            delay={0}
          />
        </div>
      </div>
    </div>
  )
}

