import './Hero.css'

export default function Hero() {
  return (
    <section className="hero" id="hero">
      {/* Background layers */}
      <div className="hero__bg" />

      {/* Decorative leaf shapes */}
      <div className="hero__leaf hero__leaf--1" aria-hidden="true" />
      <div className="hero__leaf hero__leaf--2" aria-hidden="true" />
      <div className="hero__leaf hero__leaf--3" aria-hidden="true" />

      {/* Content */}
      <div className="hero__content">
        <span className="hero__badge">
          <span className="hero__badge-dot" />
          Pure Vegetarian · South Indian
        </span>

        <h1 className="hero__title">
          Where tradition<br />
          meets <em>flavour</em>
        </h1>

        <p className="hero__subtitle">
          Handcrafted dosas, steaming idlis, and aromatic filter coffee —
          served with the warmth of a South Indian home.
        </p>

        <div className="hero__actions">
          <a href="#menu" className="hero__btn hero__btn--primary">
            Explore Menu
          </a>
          <a href="#about" className="hero__btn hero__btn--secondary">
            Our Story
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="hero__scroll" aria-hidden="true">
        <span>Scroll</span>
        <div className="hero__scroll-line" />
      </div>
    </section>
  )
}
