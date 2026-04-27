import { useNavigate } from 'react-router-dom'
import { teamMembers } from '../data/teamMembers'
import BioHeader from '../components/BioHeader'
import BioImageSection from '../components/BioImageSection.jsx'
import BioCategoryWrapper from '../components/BioCategoryWrapper'
import ImageCarousel from '../components/ImageCarousel'
import Projects from '../components/Projects'
import BioPageWrapper from '../components/BioPageWrapper'
import BioTextSection from '../components/BioTextSection'
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
        <BioPageWrapper>
          <button className="btn-back" onClick={() => navigate('/team')}>
            ← Tilbake til teamet
          </button>

          <BioHeader member={member} />

          <div className="bio-content">
            <BioCategoryWrapper>
              <BioImageSection title="Mine interesser" image={`${import.meta.env.BASE_URL}images/tobias/9e529c5b-f66c-4eb5-8f65-aec4f91d0773.jpg`}>
                <p>Jeg har mange i interesser, men en av de største er interessen min i teknologi. Den dekker egentlig alt fra spill til programmering,
                  og er noe som jeg alltid har vært veldig interessert i.</p>
                <p> Utenom teknologi er jeg også veldig glad i matlaging, fordi jeg liker mat og da er det jo ganske nødvendig
                  å ta seg tid til å lage god mat. Jeg er spesielt glad i det franske og italienske kjøkkenet,
                  fra det franske kjøkkenet ville jeg sagt at det er biffrettene og sausene som er mine favoritter,
                  det er lite som slår en entrecote med en madeirasaus(fiananciere). Fra Italia er absolutt napolitansk pizza
                  og carbonara som er favoritten, og da mener jeg carbonara laget med pecorino, egg og guanciale.</p>
              </BioImageSection>
              <BioTextSection>
                <p>Jeg er også veldig glad i fotografi, og har som regel med meg kamera når jeg på tur eller fisker, men
                det er også ofte jeg drar ut med mål å bare ta bilder. Jeg pleier å ta bilder først og fremst på en analog
                Nikon F3 fordi jeg syntes det er lite som kan måle seg med tonene en får fra film. Men jeg tar også mye
                bilder på digtal.</p>
              </BioTextSection>
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
        </BioPageWrapper>
      </div>
    </div>
  )
}

