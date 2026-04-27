import { useNavigate } from 'react-router-dom'
import { teamMembers } from '../data/teamMembers'
import BioHeader from '../components/BioHeader'
import './Page.css'
import './BioPage.css'
import BioCategoryWrapper from '../components/BioCategoryWrapper'
import BioPageWrapper from '../components/BioPageWrapper'
import BioImageSection from "../components/BioImageSection.jsx";
import BioTextSection from "../components/BioTextSection.jsx";
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
              <BioImageSection title="Mine interesser" image={`${import.meta.env.BASE_URL}images/sivert/klatring.jpg`}>
                <p> Utenom skolearbeid og utviklig er jeg også veldig glad i spill, klarting, fridykking og løping.</p>
                <p>Klatring har steget i interessene mine gjennom årene som student, der det startet rolig i starten av studietiden min
                og utviklet seg til å være en trofast hobby som jeg driver på med hver uke. Det er noe fysisk der du får brukt hele kroppen
                for å gjøre noe utenom det vanlige. Du får en virkelig mestringsfølelse når du stiger i vanskelighetsgradene av
                klatreruter du klarer å håndtere. Mye av tiden når jeg klatrer er det bouldering, som er når du klatrer på mindre vegger som du sikkert
                kan falle ned fra, men som du kan se i bildet har jeg tatt brattkorter mitt som gir meg muligheten å utforde større
                vegger der sikring og tau er nødvendig. Når du er så høyt oppe blir høyden i seg selv et annet problem, og du føler deg virkelig i live.</p>
              </BioImageSection>
              <br/>
              <BioImageSection title="" image={`${import.meta.env.BASE_URL}images/sivert/fridykking.jpg`}>
                <p>Jeg trives også veldig med fridykking, som er nesten det stikk motsatte av klatring.
                Det utfordrer deg på ulike, men også samme arenaer. Der du må klare å holde deg rolig mend du svømmer i havet
                og utforsker noe som ikke mange ser så ofte i livet sitt. Å lette etter akvatisk liv eller utforske korallrev er unikt
                og spennende der du ikke .</p>
              </BioImageSection>
          </div>
        </BioPageWrapper>
      </div>
    </div>
  )
}

