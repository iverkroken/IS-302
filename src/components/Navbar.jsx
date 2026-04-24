import { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import gsap from 'gsap'
import { navLinks as links } from '../data/navLinks'
import './Navbar.css'

export default function Navbar() {
  const [scrolled, setScrolled]   = useState(false)
  const [menuOpen, setMenuOpen]   = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const tl = gsap.timeline()
    if (menuOpen) {
      document.body.style.overflow = 'hidden'
      tl.to('.nav-mobile', { x: 0, duration: 0.45, ease: 'expo.out' })
        .from('.nav-mobile a', {
          x: 30, opacity: 0, stagger: 0.05, duration: 0.35, ease: 'expo.out',
        }, '-=0.2')
    } else {
      document.body.style.overflow = ''
      tl.to('.nav-mobile', { x: '100%', duration: 0.35, ease: 'expo.in' })
    }
    return () => tl.kill()
  }, [menuOpen])

  const closeMenu = () => setMenuOpen(false)

  return (
    <header className={`navbar${scrolled ? ' navbar--scrolled' : ''}`}>
      <div className="navbar__inner">

        <NavLink to="/" className="navbar__logo" onClick={closeMenu}>
          <span className="navbar__logo-mark" aria-hidden="true" />
          <span className="navbar__logo-text">IS-302</span>
        </NavLink>

        <nav className="navbar__links" aria-label="Primær navigasjon">
          {links.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              end={to === '/'}
              className={({ isActive }) =>
                'navbar__link' + (isActive ? ' navbar__link--active' : '')
              }
            >
              {label}
            </NavLink>
          ))}
        </nav>

        <button
          className={`navbar__burger${menuOpen ? ' navbar__burger--open' : ''}`}
          onClick={() => setMenuOpen(o => !o)}
          aria-label={menuOpen ? 'Lukk meny' : 'Åpne meny'}
          aria-expanded={menuOpen}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      {/* Mobile drawer */}
      <nav className="nav-mobile" aria-label="Mobilmeny" aria-hidden={!menuOpen}>
        {links.map(({ to, label }) => (
          <NavLink
            key={to}
            to={to}
            end={to === '/'}
            className={({ isActive }) =>
              'nav-mobile__link' + (isActive ? ' nav-mobile__link--active' : '')
            }
            onClick={closeMenu}
          >
            {label}
          </NavLink>
        ))}
      </nav>

      {menuOpen && (
        <div className="nav-mobile__backdrop" onClick={closeMenu} aria-hidden="true" />
      )}
    </header>
  )
}
