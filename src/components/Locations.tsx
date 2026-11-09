import './Locations.css'

interface Location {
  name: string
  tag: string
  address: string
  hours: string
  icon: string
  mapLink: string
  swiggyLink: string
}

const locations: Location[] = [
  {
    name: 'Kaloor, Kochi',
    tag: 'Flagship Outlet',
    address: 'Ground Floor, GCDA Complex, JLN International Stadium (D-1107), Kaloor, Kochi, Kerala 682017',
    hours: '6:30 AM — 11:30 PM · Open Daily',
    icon: '📍',
    mapLink: 'https://www.google.com/maps/search/?api=1&query=i%27DELI+CAFE+JLN+Stadium+Kaloor+Kochi',
    swiggyLink: 'https://www.swiggy.com/city/kochi/i-deli-cafe-kaloor-rest831935',
  },
  {
    name: 'Thrippunithura',
    tag: 'Metro Walk-In',
    address: 'Ground Floor, Near Vadakkekotta Metro Station, Vakk LHS Street, Thrippunithura, Kochi, Kerala 682301',
    hours: '7:00 AM — 10:30 PM · Open Daily',
    icon: '📍',
    mapLink: 'https://www.google.com/maps/search/?api=1&query=i%27DELI+CAFE+Vadakkekotta+Metro+Station+Thrippunithura',
    swiggyLink: 'https://www.swiggy.com/city/kochi/i-deli-cafe-kaloor-rest831935',
  },
]

export default function Locations() {
  return (
    <section className="locations" id="locations">
      <div className="locations__header container">
        <span className="locations__label">Our Cafes</span>
        <h2 className="locations__title">
          Dine with us in <em>Kochi</em>
        </h2>
        <p className="locations__subtitle">
          Walk in for a steaming cup of filter coffee and crispy dosas, or grab a quick takeaway on the go.
        </p>
      </div>

      <div className="locations__grid">
        {locations.map((loc) => (
          <article className="location-card" key={loc.name}>
            <div className="location-card__top">
              <span className="location-card__tag">{loc.tag}</span>
              <span className="location-card__icon">{loc.icon}</span>
            </div>
            <h3 className="location-card__name">{loc.name}</h3>
            <p className="location-card__address">{loc.address}</p>
            <div className="location-card__hours">
              <span className="location-card__dot" />
              <span>{loc.hours}</span>
            </div>
            <div className="location-card__actions">
              <a
                href={loc.mapLink}
                className="location-card__link location-card__link--primary"
                target="_blank"
                rel="noopener noreferrer"
              >
                Directions ↗
              </a>
              <a
                href={loc.swiggyLink}
                className="location-card__link location-card__link--secondary"
                target="_blank"
                rel="noopener noreferrer"
              >
                Order Online ↗
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
