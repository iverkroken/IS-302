import BioTextSection from '../components/BioTextSection'
import ImageCarousel from '../components/ImageCarousel'
import { useReveal } from '../hooks/useReveal'
import './Page.css'
import './Status2.css'

const placeholderImages = [
  `${import.meta.env.BASE_URL}images/eira/IMG_0198.jpg`,
  `${import.meta.env.BASE_URL}images/eira/IMG_2593.jpg`,
  `${import.meta.env.BASE_URL}images/eira/IMG_3687.jpg`,
  `${import.meta.env.BASE_URL}images/eira/IMG_4204.jpg`,
]

const placeholderVideo = 'https://github.com/iverkroken/IS-302/releases/download/vid2.0/Timeline.1compress.mp4'

export default function Status2() {
  const headRef = useReveal()

  return (
    <div className="page">
      <div className="container">
        <div className="page__header" ref={headRef}>
          <p className="page__tag mono">Delrapport</p>
          <h1 className="page__title">Status 2</h1>
        </div>

        <div className="status2__sections">
          <BioTextSection title="Foreløpig overskrift">
            <p>
              Her kommer en introduksjon til den andre statusrapporten.
              Denne eksempelteksten erstattes med en beskrivelse av arbeidet,
              målene og fremdriften i prosjektet.
            </p>
          </BioTextSection>

          <BioTextSection title="Video fra prosjektet">
            <video
              className="status2__video"
              controls
              playsInline
              preload="metadata"
              aria-label="Eksempelvideo for Status 2"
            >
              <source src={placeholderVideo} type="video/mp4" />
              Nettleseren din støtter ikke videoavspilling.
              {' '}<a href={placeholderVideo}>Åpne videoen her.</a>
            </video>
          </BioTextSection>

          <BioTextSection title="Videre arbeid">
            <p>
              Her kommer mer informasjon om erfaringene så langt og planene
              for neste fase. Denne eksempelteksten erstattes med refleksjoner,
              utfordringer og oppgaver vi skal jobbe videre med.
            </p>
          </BioTextSection>

          <BioTextSection title="Bilder fra prosjektet">
            <ImageCarousel images={placeholderImages} title="Eksempelbilder for Status 2" />
          </BioTextSection>
        </div>
      </div>
    </div>
  )
}
