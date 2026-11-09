import { useState } from 'react'
import './MenuHighlights.css'

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
    name: 'Masala Dosa',
    price: '₹120',
    description: 'Crisp golden crepe filled with spiced potato masala, served with sambar & chutneys.',
    emoji: '🥞',
    tag: 'Bestseller',
    category: 'Dosa',
  },
  {
    name: 'Idli Sambar',
    price: '₹80',
    description: 'Soft steamed rice cakes with piping hot sambar and fresh coconut chutney.',
    emoji: '🍚',
    category: 'Tiffin',
  },
  {
    name: 'Filter Coffee',
    price: '₹60',
    description: 'Strong, aromatic South Indian filter coffee brewed with freshly ground beans.',
    emoji: '☕',
    tag: 'Signature',
    category: 'Beverages',
  },
  {
    name: 'Ghee Pongal',
    price: '₹100',
    description: 'Creamy rice and lentil dish tempered with cumin, pepper, and generous ghee.',
    emoji: '🍲',
    category: 'Tiffin',
  },
  {
    name: 'Mysore Masala Dosa',
    price: '₹140',
    description: 'Dosa brushed with spicy red chutney and filled with seasoned potato masala.',
    emoji: '🌶️',
    tag: 'Spicy',
    category: 'Dosa',
  },
  {
    name: 'Medu Vada',
    price: '₹70',
    description: 'Crispy, golden urad dal fritters — crunchy outside, fluffy inside.',
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
        <a href="#menu" className="menu-highlights__btn">
          View Full Menu
          <span className="menu-highlights__btn-arrow">→</span>
        </a>
      </div>
    </section>
  )
}
