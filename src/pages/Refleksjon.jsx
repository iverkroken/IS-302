import { useEffect, useState } from 'react'
import BioTextSection from '../components/BioTextSection'
import { useReveal } from '../hooks/useReveal'
import { teamMembers } from '../data/teamMembers'
import { refleksjoner } from '../data/refleksjoner'
import './Page.css'
import '../components/TeamCard.css'
import './Refleksjon.css'

function RefleksjonModal({ member, onClose }) {
  useEffect(() => {
    const onKey = e => e.key === 'Escape' && onClose()
    document.addEventListener('keydown', onKey)
    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = prevOverflow
    }
  }, [onClose])

  return (
    <div className="refleksjon-modal" onClick={onClose}>
      <div
        className="refleksjon-modal__box"
        role="dialog"
        aria-modal="true"
        aria-labelledby="refleksjon-modal-title"
        onClick={e => e.stopPropagation()}
      >
        <button className="refleksjon-modal__close" onClick={onClose} aria-label="Lukk">×</button>
        <div className="refleksjon-modal__head">
          <img src={member.image} alt={member.name} className="refleksjon-modal__img" />
          <div>
            <p className="page__tag mono">Refleksjon</p>
            <h2 id="refleksjon-modal-title" className="refleksjon-modal__name">{member.name}</h2>
          </div>
        </div>
        <div className="refleksjon-modal__text">
          {refleksjoner[member.id].map((avsnitt, i) => <p key={i}>{avsnitt}</p>)}
        </div>
      </div>
    </div>
  )
}


export default function Refleksjon() {
  const headRef = useReveal()
  const [valgt, setValgt] = useState(null)
  const medlemmer = teamMembers.filter(m => refleksjoner[m.id])

  return (
      <div className="page">
        <div className="container">
          <div className="page__header" ref={headRef}>
            <p className="page__tag mono">Avslutning</p>
            <h1 className="page__title">Refleksjon</h1>
          </div>

          <div className="status1__sections">
            <BioTextSection title="Praksis hos Kartverket">
              <p>
                Gjennom høsten har vi hatt praksis hos Kartverket. Der har vi fått bruke kunnskap fra studiet i et
                virkelig prosjekt, og det har vært givende å bidra til noe med tydelig samfunnsnytte.
              </p>
            </BioTextSection>

            <BioTextSection title="Oppgaven">
              <p>
                Vi har utviklet en prototype som skal gjøre det tryggere, raskere og enklere for piloter å rapportere
                luftfartshinder enn med dagens løsning. Hindre som ikke er registrert i kartet, kan i verste fall føre
                til alvorlige ulykker. At arbeidet handler om å redde liv, har gjort oppgaven ekstra motiverende.
              </p>
            </BioTextSection>

            <BioTextSection title="Arbeidsprosessen">
              <p>
                En av de viktigste lærdommene har vært å jobbe iterativt. Målet har ligget fast, men veien dit har
                endret seg underveis. Nye innspill til prototypene og nye prioriteringer fra vår kontaktperson Lars
                Fredrik i Kartverket gjorde at vi stadig måtte justere planen. I starten kunne det føles krevende, men
                vi har lært at endringer er en naturlig del av utviklingsarbeid, og at evnen til å tilpasse seg er en
                styrke.
              </p>
              <p>
                Vi har brukt verktøy vi kjente fra før, og satt oss inn i nye. Prototypene ble utformet i Figma.
                Deretter laget vi en klikkbar versjon med React, slik at piloter kunne teste løsningen. Brukertestene ga
                oss verdifulle tilbakemeldinger. De viste også hvor viktig det er å involvere sluttbrukerne tidlig i
                stedet for å bygge på egne antakelser. Innsikten fra testene danner grunnlaget for neste steg, som er en
                MVP-applikasjon. Arkitekturen er påbegynt, og vi fortsetter arbeidet på nyåret som bachelorprosjekt.
              </p>
            </BioTextSection>

            <BioTextSection title="Hva vi har lært">
              <p>
                Praksisperioden har vist oss hvordan et prosjekt gjennomføres i en virksomhet. Vi har brukt scrummøter og
                sprint reviews, og erfart at faste rutiner gir struktur, gjør fremdriften synlig og sikrer at
                oppdragsgiver blir hørt underveis. Like verdifullt er det at vi har blitt kjent med hverandre som team.
                Vi vet nå mer om hverandres styrker, hvordan vi liker å jobbe og hvordan vi utfyller hverandre.
              </p>
            </BioTextSection>

            <BioTextSection title="Hva vi ville gjort annerledes">
              <p>
                Vi skulle ha bestemt oss for backend-løsning tidligere i prosjektet. Det hadde spart oss tid og mye av
                ekstraarbeidet.
              </p>
            </BioTextSection>

            <BioTextSection title="Veien videre">
              <p>
                Vi tar med oss erfaringene fra praksisen inn i bacheloroppgaven. Vi kjenner allerede oppgaven,
                oppdragsgiveren og hverandre godt. Derfor står vi godt rustet til å videreutvikle løsningen til noe som
                faktisk kan tas i bruk.
              </p>
            </BioTextSection>
          </div>

          <section className="refleksjon-team">
            <h2 className="refleksjon-team__title">Hva vi har fått ut av praksis</h2>
            <p className="team-subtext mono">Klikk på bildene for å lese hver enkelt sin refleksjon!</p>
            <div className="refleksjon-grid">
              {medlemmer.map(m => (
                <button key={m.id} className="team-card refleksjon-card" onClick={() => setValgt(m)}>
                  <div className="team-card__img-wrap">
                    <img src={m.image} alt={m.name} className="team-card__img" />
                  </div>
                  <div className="team-card__body">
                    <h3 className="team-card__name">{m.name}</h3>
                    <span className="refleksjon-card__cta mono">Les refleksjon →</span>
                  </div>
                </button>
              ))}
            </div>
          </section>
        </div>

        {valgt && <RefleksjonModal member={valgt} onClose={() => setValgt(null)} />}
      </div>
  )
}