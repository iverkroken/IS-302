import { NavLink } from 'react-router-dom'
import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__brand">
          <div className="footer__identity">
            <span className="footer__logo-mark" aria-hidden="true" />
            <span className="footer__logo-text">IS-302</span>
          </div>
          <p className="footer__sub">Praksisprosjekt ved Universitetet i Agder</p>
        </div>

        <nav className="footer__nav" aria-label="Fotnav">
          <NavLink to="/om-oss">Om oss</NavLink>
          <NavLink to="/oppgave">Oppgave</NavLink>
          <NavLink to="/team">Team</NavLink>
          <NavLink to="/dagbok">Dagbok</NavLink>
          <NavLink to="/refleksjon">Refleksjon</NavLink>
        </nav>
      </div>

      <div className="container footer__bottom">
        <p className="mono">© {new Date().getFullYear()} IS-302 Gruppe ved UiA</p>
        <p className="mono footer__built">Bygget med React + Vite</p>
      </div>
    </footer>
  )
}
