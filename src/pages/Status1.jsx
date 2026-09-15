import BioTextSection from '../components/BioTextSection'
import ImageCarousel from '../components/ImageCarousel'
import { useReveal } from '../hooks/useReveal'
import './Page.css'
import './Status1.css'

const placeholderImages = [
  `${import.meta.env.BASE_URL}images/eira/IMG_0198.jpg`,
  `${import.meta.env.BASE_URL}images/eira/IMG_2593.jpg`,
  `${import.meta.env.BASE_URL}images/eira/IMG_3687.jpg`,
  `${import.meta.env.BASE_URL}images/eira/IMG_4204.jpg`,
]

const placeholderVideo = 'https://github.com/iverkroken/IS-302/releases/download/vid2.0/Timeline.1compress.mp4'

export default function Status1() {
  const headRef = useReveal()

  return (
    <div className="page">
      <div className="container">
        <div className="page__header" ref={headRef}>
          <p className="page__tag mono">Delrapport</p>
          <h1 className="page__title">Status 1</h1>
        </div>

        <div className="status1__sections">
          <BioTextSection title="Kartverket og Norsk Luftambulanse">
            <p>
              Vi jobber i sammarbeid med Norsk Luftambulanse og Karverket, med å utvikle en løsning for enkel rapportering
              av luftfartshindre for helikoptre under flygning. Videre undersøker vi hvordan den nåværende backend løsningen
              for rapportering kan forbedres, spesielt med tanke på sikkerhet.
            </p>
            <p>
              Kartverket er statens eldste tenkniske organ som ble etablert i 1773.
              Kartverket jobber i hovvesak med å formidle nasjonal kart, kartdata og sjø og land registre.
            </p>
            <p>
              Norsk Luftambulanse er en ideell organisasjon, etablert i 1977. Luftambulansen har som formål å tilby raskest
              mulig hjelp til akutt skadde eller syke, uansett hvor en bor eller befinner seg.
            </p>
          </BioTextSection>

          <BioTextSection title="Video fra prosjektet">
            <video
              className="status1__video"
              controls
              playsInline
              preload="metadata"
              aria-label="Status 1 video"
            >
              <source src={placeholderVideo} type="video/mp4" />
              Nettleseren din støtter ikke videoavspilling.
              {' '}<a href={placeholderVideo}>Åpne videoen her.</a>
            </video>
          </BioTextSection>

          <BioTextSection title="Vårt arbeid frem til nå">
            <p>
              Frem til nå har vi jobbet med å utvikle et brukergrensesnitt design i figma, basert på det beste fra tidligre
              løsninger, samt HemsWX og oppgavene fra 3. semester. Vi har jobbet sammen med Luftambulansen med å trekke frem
              de viktigste delene for å skape et brukervennlig design.
            </p>
            <p>
              Vi jobber også nå med å skape en prototype utifra designene, slik at piloter kan teste det. Vi jobber også nå
              med å utvikle ulike versjoner av brukergrensesnittet, for å kunne brukerteste hva pilotene foretrekker.
            </p>
            <p>
              <a href={"https://gorilla-mode.github.io/nrlprototype/"}>Klikk her for å åpne prototypen!</a>
            </p>
            <hr/>
            <br/>
            <p>
              Vi jobber også med å planlegge hvordan backend løsningens tekonologi og arkitektur skal bli. Vi har nå landet
              på at dette blir en form for API slik at Luftambulansen kan integrere det inn i deres HemsWX app.
            </p>
            <p>
              Vi har ikke landet på noe mer spesifkt en det, og grunnen til det er at vi fikk vite nylig at hele den nåværende
              rett i kartet løsningen skulle byttes ut med en ny, og forbedret løsning. Der den nye løsningen skal ha
              ett stort fokus på sikkerhet og identifisering, slik at en kan bekrefte at de som legger inn ett hinder er
              den de utgir seg for å være.
            </p>
            <p>
              I de kommende ukene kommer vi til å jobbe tett med NRL temaet for å kartlegge, planlegge og undersøke
              hvordan den nye løsningen kan oppfylle de forventede kravene.
            </p>
          </BioTextSection>

          <BioTextSection title="Bilder fra prosjektet">
            <ImageCarousel images={placeholderImages} title="Eksempelbilder for Status 1" />
          </BioTextSection>
        </div>
      </div>
    </div>
  )
}
