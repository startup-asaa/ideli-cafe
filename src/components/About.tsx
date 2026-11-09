import './About.css'

export default function About() {
  return (
    <section className="about" id="about">
      <div className="about__container">
        {/* Left: Visual */}
        <div className="about__visual">
          <div className="about__image-frame">
            <img
              src="/ideli-cafe-1.jpg"
              alt="i'DELI CAFE storefront with green neon signage and outdoor seating"
              className="about__image"
            />
          </div>
          <div className="about__accent" aria-hidden="true" />
        </div>

        {/* Right: Text */}
        <div className="about__text">
          <span className="about__label">Our Story</span>
          <h2 className="about__heading">
            A taste of <em>South India</em>,<br />
            right at your table
          </h2>
          <p className="about__description">
            At i'DELI CAFE, every dish is a tribute to the rich culinary heritage
            of South India. From the crisp edges of a perfectly golden dosa to
            the soft, pillowy texture of our idlis — we bring you flavours that
            have been perfected over generations.
          </p>
          <p className="about__description">
            We believe in keeping it pure. Fresh ingredients, traditional recipes,
            and a whole lot of heart go into everything we serve.
          </p>

          <div className="about__divider" />

          <div className="about__values">
            <div className="about__value">
              <span className="about__value-title">
                <span className="about__value-dot" /> 100% Vegetarian
              </span>
              <span className="about__value-desc">
                Pure veg, always. No compromises.
              </span>
            </div>
            <div className="about__value">
              <span className="about__value-title">
                <span className="about__value-dot" /> Fresh Daily
              </span>
              <span className="about__value-desc">
                Batters ground & prepared every morning.
              </span>
            </div>
            <div className="about__value">
              <span className="about__value-title">
                <span className="about__value-dot" /> Traditional Recipes
              </span>
              <span className="about__value-desc">
                Authentic flavours from family kitchens.
              </span>
            </div>
            <div className="about__value">
              <span className="about__value-title">
                <span className="about__value-dot" /> Filter Coffee
              </span>
              <span className="about__value-desc">
                Brewed the old-fashioned way, strong & aromatic.
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
