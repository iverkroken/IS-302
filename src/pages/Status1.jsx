import BioTextSection from '../components/BioTextSection'
import ImageCarousel from '../components/ImageCarousel'
import { useReveal } from '../hooks/useReveal'
import './Page.css'
import './Status1.css'

const placeholderImages = [
  `${import.meta.env.BASE_URL}images/status1/IMG_4788.JPG`,
  `${import.meta.env.BASE_URL}images/status1/IMG_4791.JPG`,
  `${import.meta.env.BASE_URL}images/status1/IMG_4792.JPG`,
  `${import.meta.env.BASE_URL}images/status1/IMG_4794.JPG`,
]

const placeholderVideo = 'https://github.com/iverkroken/IS-302/releases/download/Status1.3/UIA_Status1.mp4'

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
              Vi samarbeider med Kartverket og Norsk Luftambulanse om å utvikle en løsning for enkel rapportering av
              luftfartshindre for helikoptre under flygning. I tillegg undersøker vi hvordan den eksisterende
              backend-løsningen for rapportering kan forbedres, med særlig fokus på sikkerhet, identifisering og videre integrasjon.
            </p>
            <p>
              Kartverket er Norges nasjonale kartmyndighet og statens eldste tekniske etat, etablert i 1773. Kartverket
              arbeider hovedsakelig med å samle inn, forvalte og formidle geografisk informasjon, kartdata og registre
              knyttet til land og sjø.
            </p>
            <p>
              Norsk Luftambulanse er en ideell organisasjon, etablert i 1977. Organisasjonen arbeider for at alvorlig syke
              og skadde skal få rask og kvalifisert medisinsk hjelp, uavhengig av hvor de befinner seg.
            </p>
          </BioTextSection>

          <BioTextSection title="Video fra prosjektet">
            <figure className="status1__video-figure">
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
              <figcaption>Status 1-video</figcaption>
            </figure>
          </BioTextSection>

          <BioTextSection title="Vårt arbeid frem til nå">
            <p>
              Frem til nå har vi arbeidet med å utvikle design for brukergrensesnittet i Figma. Designet bygger på
              erfaringer fra tidligere løsninger, HemsWX og arbeidet vårt fra tredje semester.
            </p>
            <p>
              I samarbeid med Norsk Luftambulanse har vi identifisert hvilke funksjoner og deler av løsningen som er
              viktigst for pilotene. Dette har dannet grunnlaget for utviklingen av et mest mulig brukervennlig og praktisk grensesnitt.
            </p>
            <p>
              Vi arbeider nå med å utvikle en prototype basert på designene, slik at piloter kan teste løsningen i
              praksis. Samtidig utvikler vi ulike varianter av brukergrensesnittet for å kunne brukerteste hvilke
              løsninger pilotene foretrekker.
            </p>
            <div className="status1__prototype-action">
              <a className="status1__prototype-button" href="https://gorilla-mode.github.io/nrlprototype/">
                Åpne prototypen
              </a>
            </div>
            <hr className="status1__divider" />
            <p>
              Vi arbeider også med å planlegge teknologi og arkitektur for backend-løsningen. Foreløpig har vi landet
              på at løsningen skal bygges som et API, slik at Norsk Luftambulanse kan integrere
              rapporteringsfunksjonaliteten direkte i HemsWX.
            </p>
            <p>
              Vi har foreløpig ikke bestemt den endelige tekniske løsningen. En viktig årsak er at vi nylig fikk
              informasjon om at dagens Rett i kartet-løsning skal erstattes av en ny og forbedret løsning, og at vårt
              prosjekt potensielt kan danne grunnlaget for denne nye løsningen.
            </p>
            <p>
              Arbeidet vårt handler derfor ikke bare om å utvikle en separat rapporteringsløsning for Norsk
              Luftambulanse, men også om å undersøke hvordan løsningen vi utvikler kan videreføres som en mulig
              erstatning for dagens Rett i kartet-løsning.
            </p>
            <p>
              Den nye løsningen skal blant annet ha større fokus på sikkerhet og sikker identifisering av brukere,
              slik at det i større grad kan bekreftes hvem som står bak en innrapportering av et luftfartshinder.
            </p>
            <p>
              I de kommende ukene skal vi derfor jobbe tett med NRL-teamet for å kartlegge behov, planlegge arkitekturen
              og undersøke hvordan den nye løsningen kan oppfylle kravene til blant annet sikkerhet, identifisering,
              brukervennlighet og integrasjon.
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
