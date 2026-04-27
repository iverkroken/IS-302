import { useNavigate } from 'react-router-dom'
import { teamMembers } from '../data/teamMembers'
import BioHeader from '../components/BioHeader'
import BioImageSection from '../components/BioImageSection.jsx'
import BioCategoryWrapper from '../components/BioCategoryWrapper'
import BioPageWrapper from '../components/BioPageWrapper'
import ImageCarouselvertical from '../components/ImageCarouselvertical'
import BioTextSection from '../components/BioTextSection'
import './Page.css'
import './BioPage.css'

export default function BioIver() {
  const navigate = useNavigate()
  const member = teamMembers.find(m => m.id === 1)

  const iverImages = [
    `${import.meta.env.BASE_URL}images/iver/IMG_0389.jpg`,
    `${import.meta.env.BASE_URL}images/iver/IMG_1056.jpg`,
    `${import.meta.env.BASE_URL}images/iver/IMG_6040.jpg`,
    `${import.meta.env.BASE_URL}images/iver/Pizza-diavola.jpg`,
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
                <BioImageSection
                    title="Om meg"
                    image={`${import.meta.env.BASE_URL}images/iver/IMG_5866.jpg`}
                >
                  <p>
                    Jeg er ganske rolig av natur, men samtidig målrettet. Når jeg først bestemmer meg for noe, går jeg ordentlig inn i det.
                    Jeg liker å kjenne progresjon, den rolige følelsen av at ting løsner litt etter litt, og at innsatsen faktisk gir noe tilbake.
                    Det er der jeg trives best.
                  </p>

                  <p>
                    Menneskene rundt meg betyr mye. Jeg har en helt vidunderlig samboer, som er en stor del av det som gjør hverdagen min så bra.
                    Jeg er også veldig glad i å reise og oppleve nye steder. Det å komme seg bort fra det kjente, møte nye kulturer og få nye inntrykk gir meg mye,
                    og jeg prøver å få til én til to utenlandsreiser i året.
                  </p>
                </BioImageSection>

                <BioTextSection>
                  <p>
                    Jeg er glad i å være i fysisk bevegelse gjennom ting som: Padel, frisbeegolf, klatring og sykling som gir meg energi.
                    Samtidig har jeg også en litt mer uventet side. Jeg elsker å danse, noe som startet tidlig med mye inspirasjon fra Michael Jackson.
                    Ved siden av det er jeg også glad i motorsykler og gaming, som gir en helt annen type fokus og avkobling.
                  </p>

                  <p>
                    De roligere stundene setter jeg også stor pris på, spesielt rundt mat. Jeg har brukt mye tid på å lære meg matlaging skikkelig,
                    og har blitt litt opphengt i å perfeksjonere napolitansk pizza. Favoritten er en skikkelig god pizza diavola.
                    Samtidig har jeg fått en sterk interesse for vin, særlig rødviner fra Bordeaux og Burgund.
                  </p>

                  <p>
                    Fellesnevneren i det meste jeg gjør, er at jeg liker å holde det enkelt, men gjøre det ordentlig,
                    med kvalitet i det jeg faktisk velger å bruke tid på.
                  </p>
                </BioTextSection>

                <br />

                <BioImageSection title="Bilder">
                  <ImageCarouselvertical images={iverImages} title="Iver" />
                  <p>
                    Litt snapshots fra ting jeg liker å bruke tid på.
                  </p>
                </BioImageSection>
              </BioCategoryWrapper>
              <br />
              <br />

              <BioImageSection title="Musikk jeg liker">
                <p>Tre sanger jeg alltid kommer tilbake til:</p>

                <iframe
                    style={{ borderRadius: '12px', marginBottom: '12px' }}
                    src="https://open.spotify.com/embed/track/1hu2s7qkm5bo03eODpRQO3"
                    width="100%"
                    height="80"
                    frameBorder="0"
                    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                    loading="lazy"
                ></iframe>

                <iframe
                    style={{ borderRadius: '12px', marginBottom: '12px' }}
                    src="https://open.spotify.com/embed/track/3OHfY25tqY28d16oZczHc8"
                    width="100%"
                    height="80"
                    frameBorder="0"
                    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                    loading="lazy"
                ></iframe>

                <iframe
                    style={{ borderRadius: '12px' }}
                    src="https://open.spotify.com/embed/track/4IRHwIZHzlHT1FQpRa5RdE"
                    width="100%"
                    height="80"
                    frameBorder="0"
                    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                    loading="lazy"
                ></iframe>
              </BioImageSection>
            </div>
          </BioPageWrapper>
        </div>
      </div>
  )
}