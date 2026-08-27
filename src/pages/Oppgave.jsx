import { useReveal } from '../hooks/useReveal'
import './Page.css'
import './Oppgave.css'

export default function Oppgave() {
  const headRef = useReveal()
  const boxRef = useReveal({ delay: 0.1 })

  return (
      <div className="page">
        <div className="container">
          <div className="page__header" ref={headRef}>
            <p className="page__tag mono">Oppgave</p>
            <h1 className="page__title">Hva skal vi gjøre?</h1>
          </div>

          <div className="oppgave-box" ref={boxRef}>
            <h2 className="oppgave-box__title">Oppdragsgiver: Kartverket</h2>

            <p className="oppgave-box__text">
              Vi videreutvikler en løsning som gjør det enklere for piloter og flybesetning
              å melde inn luftfartshindre, som kraftlinjer, master og stolper, direkte i kart.
              Slike hindre kan være kritiske ved lavtflyging, spesielt for helikoptre i
              utrykning hos Norsk Luftambulanse, Luftforsvaret og Politiets helikoptertjeneste.
              Kartverket forvalter Nasjonalt register over luftfartshindre (NRL), og
              prosjektet bygger videre på arbeid fra et tidligere studentprosjekt.
            </p>

            <p className="oppgave-box__text">
              Målet er å utvikle en MVP av en webapplikasjon der brukere raskt kan registrere hindre
              som punkt eller linje i kart, legge ved bilder og kommentarer, og der
              løsningen fungerer godt på nettbrett også i krevende feltsituasjoner.
              Vi jobber med brukeropplevelse, kartløsninger, database og systemutvikling,
              i tett samarbeid med fagpersoner fra Kartverket og Norsk Luftambulanse.
            </p>
          </div>
        </div>
      </div>
  )
}