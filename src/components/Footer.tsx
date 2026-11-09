import './Footer.css'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="footer__inner">
        {/* Brand */}
        <div>
          <img
            src="/LogoQ.png"
            alt="i'DELI CAFE"
            className="footer__brand-logo"
          />
          <p className="footer__brand-desc">
            Authentic South Indian pure vegetarian cuisine,
            made fresh every day with love and tradition.
          </p>
        </div>

        {/* Quick links */}
        <div>
          <h4 className="footer__heading">Explore</h4>
          <nav className="footer__links">
            <a href="#hero" className="footer__link">Home</a>
            <a href="#about" className="footer__link">About</a>
            <a href="#menu" className="footer__link">Menu</a>
            <a href="#locations" className="footer__link">Locations</a>
          </nav>
        </div>

        {/* Hours */}
        <div>
          <h4 className="footer__heading">Hours</h4>
          <div className="footer__links">
            <span className="footer__link">Mon — Fri: 7am – 10pm</span>
            <span className="footer__link">Saturday: 7am – 11pm</span>
            <span className="footer__link">Sunday: 8am – 10pm</span>
          </div>
        </div>

        {/* Contact */}
        <div>
          <h4 className="footer__heading">Contact</h4>
          <div className="footer__contact-item">
            <a href="mailto:hello@idelicafe.com">hello@idelicafe.com</a>
          </div>
          <div className="footer__contact-item">
            <a href="tel:+919876543210">+91 98765 43210</a>
          </div>
          <div className="footer__social">
            <a href="#" className="footer__social-link" aria-label="Instagram">
              IG
            </a>
            <a href="#" className="footer__social-link" aria-label="Facebook">
              FB
            </a>
            <a href="#" className="footer__social-link" aria-label="Twitter">
              X
            </a>
          </div>
        </div>
      </div>

      <div className="footer__bottom">
        <span>© {year} i'DELI CAFE. All rights reserved.</span>
        <div className="footer__bottom-links">
          <a href="#" className="footer__bottom-link">Privacy Policy</a>
          <a href="#" className="footer__bottom-link">Terms of Service</a>
        </div>
      </div>
    </footer>
  )
}
