import { useNavigate } from 'react-router-dom'
import { teamMembers } from '../data/teamMembers'
import BioHeader from '../components/BioHeader'
import './Page.css'
import './BioPage.css'
import BioCategoryWrapper from "../components/BioCategoryWrapper.jsx";
import BioPageWrapper from '../components/BioPageWrapper'
import BioImageSection from '../components/BioImageSection.jsx'
import ImageCarousel from '../components/ImageCarousel'

export default function BioEira() {
  const navigate = useNavigate()
  const member = teamMembers.find(m => m.id === 4)

  const eiraImages = [
    `${import.meta.env.BASE_URL}images/eira/IMG_0198.jpg`,
    `${import.meta.env.BASE_URL}images/eira/IMG_2593.jpg`,
    `${import.meta.env.BASE_URL}images/eira/IMG_3687.jpg`,
    `${import.meta.env.BASE_URL}images/eira/IMG_4204.jpg`,
  ]

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
              <BioImageSection title="Mine interesser"
                               image={`${import.meta.env.BASE_URL}images/eira/IMG_0198.jpg`}>
                <p>Jeg er veldig glad i å reise og synes det er spennende å oppleve nye kulturer og utforske lokal mat.
                  Dette semesteret har jeg vært på utveksling i Sør-Korea, hvor jeg har fått et godt innblikk i
                  både kulturen og studiehverdagen der.</p>
                <p>Oppholdet har gjort meg mer åpen, tilpasningsdyktig og gitt meg nye perspektiver. Jeg er også
                  veldig glad i å gå turer og tilbringe tid i naturen. Jeg bruker også mye tid sammen med venner
                  og familie, og er i overkant glad i kaffe. Jeg liker godt å lære nye ting, og motiveres av
                  å føle mestringsfølelse for det jeg gjør.</p>
              </BioImageSection>
              <br />
              <BioImageSection title="Foto galleri">
                <ImageCarousel images={eiraImages} title="Eira" />
                <p>Her er noen bilder fra livet i Seoul.</p>
              </BioImageSection>
            </BioCategoryWrapper>
          </div>
        </BioPageWrapper>
      </div>
    </div>
  )
}

