import { useState } from 'react'
import './MenuHighlights.css'

const SWIGGY_URL = 'https://www.swiggy.com/city/kochi/i-deli-cafe-kaloor-rest831935'

interface MenuItem {
  name: string
  price: string
  description: string
  emoji: string
  tag?: string
  category: string
}

const items: MenuItem[] = [
  {
    name: 'Ghee Podi Masala Dosa',
    price: '₹130',
    description: 'Crispy golden dosa roasted in pure ghee and spiced gunpowder podi with potato masala.',
    emoji: '🥞',
    tag: 'Bestseller',
    category: 'Dosa',
  },
  {
    name: 'Thattu Idli Sambar',
    price: '₹75',
    description: 'Signature steaming soft thattu idlis served with hot sambar and fresh coconut chutney.',
    emoji: '🍚',
    tag: 'Must Try',
    category: 'Tiffin',
  },
  {
    name: 'Filter Coffee',
    price: '₹40',
    description: 'Strong, aromatic South Indian filter coffee brewed with freshly roasted beans and frothed milk.',
    emoji: '☕',
    tag: 'Signature',
    category: 'Beverages',
  },
  {
    name: 'Ghee Pongal',
    price: '₹95',
    description: 'Creamy rice and moong lentil dish generously tempered with cashews, cumin, and pepper.',
    emoji: '🍲',
    category: 'Tiffin',
  },
  {
    name: 'Garlic Masala Dosa',
    price: '₹140',
    description: 'Crisp crepe layered with rich garlic chutney spread and spiced potato stuffing.',
    emoji: '🌶️',
    tag: 'Chef Special',
    category: 'Dosa',
  },
  {
    name: 'Crispy Medu Vada',
    price: '₹55',
    description: 'Golden-fried spiced lentil donuts — crackling crisp outside, cloud-soft inside.',
    emoji: '🍩',
    category: 'Tiffin',
  },
]

const categories = ['All', 'Dosa', 'Tiffin', 'Beverages']

export default function MenuHighlights() {
  const [active, setActive] = useState('All')

  const filtered = active === 'All'
    ? items
    : items.filter((item) => item.category === active)

  return (
    <section className="menu-highlights" id="menu">
      <div className="menu-highlights__header container">
        <span className="menu-highlights__label">Our Menu</span>
        <h2 className="menu-highlights__title">
          Crafted with <em>care</em>,<br />served with soul
        </h2>
      </div>

      <div className="menu-highlights__categories">
        {categories.map((cat) => (
          <button
            key={cat}
            className={`menu-highlights__category ${
              active === cat ? 'menu-highlights__category--active' : ''
            }`}
            onClick={() => setActive(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="menu-highlights__grid">
        {filtered.map((item) => (
          <article className="menu-card" key={item.name}>
            <div className="menu-card__image">
              <span className="menu-card__emoji">{item.emoji}</span>
              {item.tag && <span className="menu-card__tag">{item.tag}</span>}
            </div>
            <div className="menu-card__body">
              <div className="menu-card__row">
                <h3 className="menu-card__name">{item.name}</h3>
                <span className="menu-card__price">{item.price}</span>
              </div>
              <p className="menu-card__desc">{item.description}</p>
            </div>
          </article>
        ))}
      </div>

      <div className="menu-highlights__cta">
        <a
          href={SWIGGY_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="menu-highlights__btn"
        >
          View Full Menu on Swiggy
          <span className="menu-highlights__btn-arrow">↗</span>
        </a>
      </div>
    </section>
  )
}
