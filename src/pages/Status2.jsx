import BioTextSection from '../components/BioTextSection'
import ImageCarousel from '../components/ImageCarousel'
import { useReveal } from '../hooks/useReveal'
import './Page.css'
import './Status2.css'

const placeholderImages = [
    `${import.meta.env.BASE_URL}images/status1/IMG_4788.JPG`,
    `${import.meta.env.BASE_URL}images/status1/IMG_4791.JPG`,
    `${import.meta.env.BASE_URL}images/status1/IMG_4792.JPG`,
    `${import.meta.env.BASE_URL}images/status1/IMG_4794.JPG`,
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
                    <BioTextSection title="Arbeidet siden sist">
                        <p>
                            Siden forrige status har vi jobbet videre med flere deler av
                            prosjektet. Vi har gradvis gått fra idé og prototypefasen over
                            til den mer tekniske delen av løsningen.
                        </p>
                        <p>
                            En av hovedoppgavene våre har vært å utvikle programmer som kan
                            konvertere GML-filer til FGB-filer. Dette har gitt oss muligheten
                            til å jobbe mer praktisk med den tekniske siden av prosjektet.
                            Dette har gjort at vi har fått en bedre forståelse for hvordan de
                            ulike filformatene fungerer og hvordan dataene kan behandles. Vi
                            har også brukt tid på å lese oss opp på sikkerhet og FGB slik at
                            vi har et bedre teknisk grunnlag før vi går videre med
                            utviklingen.
                        </p>
                        <p>
                            Parallelt har vi jobbet videre med løsningen vår for Obstacle
                            Reporting. Her har vi hatt mye fokus på prototypen og hvordan vi
                            kan utvikle en løsning som fungerer godt for brukerne. Vi har
                            derfor jobbet med å gjøre prototypen klar for brukertesting.
                            Prototypen er sendt til Emilie som er UX-designer for NRL-teamet
                            og Edvard Murr som jobber i Luftambulansen. Målet med
                            brukertestingen er å få innspill fra pilotene som kjenner til
                            behovene og arbeidshverdagen. Dermed kan vi se hva som fungerer
                            godt og hva som eventuelt bør forbedres før vi begynner å bygge
                            den endelige løsningen.
                        </p>
                    </BioTextSection>

                    <BioTextSection title="Video fra prosjektet">
                        <video
                            className="status2__video"
                            controls
                            playsInline
                            preload="metadata"
                            aria-label="Video for Status 2"
                        >
                            <source src={placeholderVideo} type="video/mp4" />
                            Nettleseren din støtter ikke videoavspilling.
                            {' '}<a href={placeholderVideo}>Åpne videoen her.</a>
                        </video>
                    </BioTextSection>

                    <BioTextSection title="Utfordringer og ting vi har lært">
                        <p>
                            En utfordring vi har opplevd underveis er kommunikasjon og
                            tilgjengelighet. Vi er avhengige av tilbakemeldinger fra personer
                            utenfor prosjektgruppen. Problemet har vært at det kan gå lang
                            tid før vi får svar på e-poster og henvendelser. Dette gjør at
                            enkelte oppgaver kan bli forsinket, og at vi må jobbe videre med
                            andre deler av prosjektet mens vi venter på avklaringer.
                        </p>
                        <p>
                            Vi har også opplevd at vi ikke alltid har hatt så mye tid til
                            veiledning som vi kunne ønsket. Det har derfor vært viktig for
                            oss å bli mer selvstendige og forsøke å finne svar og løsninger
                            på egen hånd. Dette har samtidig lært oss mye om å undersøke
                            problemstillinger selv, lese dokumentasjon og prøve ut ulike
                            løsninger før vi ber om hjelp.
                        </p>
                        <p>
                            En annen utfordring er at det jevnlig kommer nye innspill,
                            oppgaver og forslag til løsninger mens vi allerede er i gang med
                            arbeidet. Noen ganger får vi nye beskjeder mens vi sitter og
                            jobber, da må vi endre planen eller arbeidsmåten vår underveis.
                            Dette kan gjøre det vanskelig å vite hva vi bør prioritere. Dette
                            kan til tider skape usikkerhet rundt hvilken retning vi skal gå.
                        </p>
                        <p>
                            Samtidig har dette lært oss hvor viktig det er å være fleksibel i
                            et prosjekt. Vi har blitt mer bevisste på at en prosjektplan ikke
                            nødvendigvis kan følges helt fra start til slutt. Vi ser også at
                            det kunne vært nyttig å samle flere av disse innspillene i faste
                            møter eller avklaringer. På den måten kan vi diskutere flere ting
                            samlet og få en tydeligere forståelse av hva som skal prioriteres
                            videre.
                        </p>
                    </BioTextSection>

                    <BioTextSection title="Videre arbeid">
                        <p>
                            Fremover vil hovedfokuset vårt være å fortsette utviklingen av
                            selve webapplikasjonen. Vi har nå brukt mye tid på å forstå
                            problemet, undersøke tekniske løsninger og utvikle en prototype.
                            Neste steg er derfor å gå fra prototype til en faktisk fungerende
                            løsning.
                        </p>
                        <p>
                            Vi vil samtidig bruke tilbakemeldingene fra brukertestingen til å
                            gjøre nødvendige forbedringer i løsningen. Det blir viktig å se
                            på tilbakemeldingene fra brukerne og vurdere hvilke endringer som
                            faktisk vil gi størst verdi.
                        </p>
                    </BioTextSection>

                    <BioTextSection title="Bilder fra prosjektet">
                        <ImageCarousel images={placeholderImages} title="Bilder fra Status 2" />
                    </BioTextSection>
                </div>
            </div>
        </div>
    )
}
