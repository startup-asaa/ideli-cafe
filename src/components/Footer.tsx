import { Link } from 'react-router-dom'
import './Footer.css'

const SWIGGY_URL = 'https://www.swiggy.com/city/kochi/i-deli-cafe-kaloor-rest831935'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="footer__inner">
        {/* Brand */}
        <div>
          <Link to="/">
            <img
              src="/LogoQ.png"
              alt="i'DELI CAFE"
              className="footer__brand-logo"
            />
          </Link>
          <p className="footer__brand-desc">
            Authentic South Indian pure vegetarian cuisine in Kochi,
            prepared fresh daily with pure ingredients and traditional recipes.
          </p>
        </div>

        {/* Quick links */}
        <div>
          <h4 className="footer__heading">Explore</h4>
          <nav className="footer__links">
            <Link to="/" className="footer__link">Home</Link>
            <a href="/#about" className="footer__link">Our Story</a>
            <Link to="/menu" className="footer__link">Full Menu</Link>
            <a href="/#locations" className="footer__link">Locations</a>
            <a
              href={SWIGGY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="footer__link footer__link--highlight"
            >
              Order on Swiggy ↗
            </a>
          </nav>
        </div>

        {/* Hours & Outlets */}
        <div>
          <h4 className="footer__heading">Hours & Outlets</h4>
          <div className="footer__links">
            <span className="footer__link">
              <strong>Kaloor (Flagship):</strong><br />
              6:30 AM – 11:30 PM (Daily)
            </span>
            <span className="footer__link">
              <strong>Thrippunithura:</strong><br />
              7:00 AM – 10:30 PM (Daily)
            </span>
          </div>
        </div>

        {/* Contact */}
        <div>
          <h4 className="footer__heading">Visit & Connect</h4>
          <div className="footer__contact-item">
            JLN Stadium, Kaloor, Kochi, Kerala 682017
          </div>
          <div className="footer__contact-item" style={{ marginTop: '0.5rem' }}>
            <a href="mailto:hello@idelicafe.com">hello@idelicafe.com</a>
          </div>
          <div className="footer__social">
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="footer__social-link"
              aria-label="Instagram"
            >
              IG
            </a>
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="footer__social-link"
              aria-label="Facebook"
            >
              FB
            </a>
            <a
              href={SWIGGY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="footer__social-link"
              aria-label="Swiggy"
              title="Order on Swiggy"
            >
              🛵
            </a>
          </div>
        </div>
      </div>

      <div className="footer__bottom">
        <span>© {year} i'DELI CAFE. Pure Vegetarian · South Indian.</span>
        <div className="footer__bottom-links">
          <a href="#hero" className="footer__bottom-link">Back to Top ↑</a>
        </div>
      </div>
    </footer>
  )
}
