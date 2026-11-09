import './Banner.css'

export default function Banner() {
  return (
    <section className="banner">
      <div className="banner__inner">
        <div className="banner__text">
          <h2 className="banner__heading">
            Start your morning <em>the South Indian way</em>
          </h2>
          <p className="banner__desc">
            Crispy dosas, fluffy idlis, and a steaming cup of filter coffee
            — breakfast done right, every single day.
          </p>
        </div>
        <a href="#locations" className="banner__btn">
          Find a Cafe →
        </a>
      </div>
    </section>
  )
}
