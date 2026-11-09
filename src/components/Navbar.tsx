import { useState, useEffect } from 'react'
import './Navbar.css'

const SWIGGY_URL = 'https://www.swiggy.com/city/kochi/i-deli-cafe-kaloor-rest831935'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  const closeMenu = () => setMenuOpen(false)

  const links = [
    { label: 'Home', href: '#hero' },
    { label: 'About', href: '#about' },
    { label: 'Menu', href: '#menu' },
    { label: 'Locations', href: '#locations' },
  ]

  return (
    <>
      <header
        className={`navbar ${scrolled ? 'navbar--scrolled' : ''} ${
          menuOpen ? 'navbar--menu-open' : ''
        }`}
      >
        <div className="navbar__inner">
          <a href="#hero" className="navbar__logo" onClick={closeMenu}>
            <img
              src="/LogoQ.png"
              alt="i'DELI CAFE logo"
              className="navbar__logo-img"
            />
          </a>

          {/* Desktop nav */}
          <nav className="navbar__nav" aria-label="Main navigation">
            {links.map((link) => (
              <a key={link.href} href={link.href} className="navbar__link">
                {link.label}
              </a>
            ))}
            <a
              href={SWIGGY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="navbar__cta"
            >
              Order Online ↗
            </a>
          </nav>

          {/* Mobile hamburger */}
          <button
            className={`navbar__hamburger ${
              menuOpen ? 'navbar__hamburger--open' : ''
            }`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </header>

      {/* Mobile overlay */}
      <nav
        className={`navbar__overlay ${
          menuOpen ? 'navbar__overlay--open' : ''
        }`}
        aria-label="Mobile navigation"
      >
        <div className="navbar__overlay-content">
          <span className="navbar__overlay-tag">Pure Veg · South Indian</span>
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="navbar__overlay-link"
              onClick={closeMenu}
            >
              {link.label}
            </a>
          ))}
          <a
            href={SWIGGY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="navbar__overlay-cta"
            onClick={closeMenu}
          >
            Order on Swiggy ↗
          </a>
        </div>
      </nav>
    </>
  )
}
