import './Banner.css'

const SWIGGY_URL = 'https://www.swiggy.com/city/kochi/i-deli-cafe-kaloor-rest831935'

export default function Banner() {
  return (
    <section className="banner">
      <div className="banner__inner">
        <div className="banner__text">
          <h2 className="banner__heading">
            Craving i'DELI <em>at home?</em>
          </h2>
          <p className="banner__desc">
            Piping hot dosas, soft steamed idlis, and authentic filter coffee
            delivered fresh to your doorstep across Kochi.
          </p>
        </div>
        <a
          href={SWIGGY_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="banner__btn"
        >
          Order on Swiggy ↗
        </a>
      </div>
    </section>
  )
}
