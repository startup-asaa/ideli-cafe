import './Locations.css'

interface Location {
  name: string
  address: string
  hours: string
  icon: string
  mapLink: string
}

const locations: Location[] = [
  {
    name: 'Koramangala',
    address: '4th Block, Koramangala, Bengaluru, Karnataka 560034',
    hours: '7:00 AM — 10:00 PM',
    icon: '📍',
    mapLink: '#',
  },
  {
    name: 'Indiranagar',
    address: '12th Main Road, Indiranagar, Bengaluru, Karnataka 560038',
    hours: '7:00 AM — 10:00 PM',
    icon: '📍',
    mapLink: '#',
  },
  {
    name: 'Jayanagar',
    address: '4th T Block, Jayanagar, Bengaluru, Karnataka 560041',
    hours: '7:00 AM — 10:00 PM',
    icon: '📍',
    mapLink: '#',
  },
]

export default function Locations() {
  return (
    <section className="locations" id="locations">
      <div className="locations__header container">
        <span className="locations__label">Find Us</span>
        <h2 className="locations__title">
          Visit <em>i'DELI</em> near you
        </h2>
      </div>

      <div className="locations__grid">
        {locations.map((loc) => (
          <article className="location-card" key={loc.name}>
            <div className="location-card__icon">{loc.icon}</div>
            <h3 className="location-card__name">{loc.name}</h3>
            <p className="location-card__address">{loc.address}</p>
            <div className="location-card__hours">
              <span className="location-card__dot" />
              {loc.hours}
            </div>
            <a
              href={loc.mapLink}
              className="location-card__link"
              target="_blank"
              rel="noopener noreferrer"
            >
              Get Directions <span>→</span>
            </a>
          </article>
        ))}
      </div>
    </section>
  )
}
