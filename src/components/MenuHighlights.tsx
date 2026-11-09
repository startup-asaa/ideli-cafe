import { useState } from 'react'
import { Link } from 'react-router-dom'
import './MenuHighlights.css'

interface HighlightItem {
  id: string
  name: string
  price: string
  description: string
  image: string
  tag?: string
  category: string
}

const items: HighlightItem[] = [
  {
    id: '1',
    name: 'Ghee Podi Masala Dosa',
    price: '₹130',
    description: 'Golden-crisp dosa roasted in aromatic ghee and spiced gunpowder podi, folded with potato masala.',
    image: '/assets/categories/dosanew/ghee_podi_masala_dosa.jpg',
    tag: 'Bestseller',
    category: 'Dosa',
  },
  {
    id: '2',
    name: 'Ghee Podi Thattu Idli',
    price: '₹75',
    description: 'Steaming hot thattu idli bathed in pure desi ghee and fiery karam podi, served with chutneys.',
    image: '/assets/categories/idli/ghee_podi_thattu_idli.jpg',
    tag: 'Must Try',
    category: 'Idli',
  },
  {
    id: '3',
    name: 'South Indian Filter Coffee',
    price: '₹40',
    description: 'Signature decoction brewed with fresh chicory blend and frothy milk in traditional davarah.',
    image: '/assets/categories/hotbeve/Coffee.jpg',
    tag: 'Signature',
    category: 'Beverages',
  },
  {
    id: '4',
    name: 'Benne Masala Dosa',
    price: '₹140',
    description: 'Crisp Davangere-style butter dosa with spicy red chutney spread and soft potato filling.',
    image: '/assets/categories/dosanew/benne_masala_dosa.jpg',
    tag: 'Special',
    category: 'Dosa',
  },
  {
    id: '5',
    name: 'Crispy Medu Vada Set',
    price: '₹60',
    description: 'Crunchy golden urad dal fritters served with hot vegetable sambar and coconut chutney.',
    image: '/assets/categories/snacks/vadaset.jpg',
    category: 'Snacks',
  },
  {
    id: '6',
    name: 'South Indian Mini Meals',
    price: '₹120',
    description: 'Wholesome pure veg platter with rice, sambar, rasam, curd, thoran, pickle, and papadam.',
    image: '/assets/categories/meals/Minimeals.jpg',
    tag: 'Lunch Hit',
    category: 'Meals',
  },
  {
    id: '7',
    name: 'Mini Ghee Idli Sambar Dip',
    price: '₹85',
    description: 'Bite-sized button idlis soaked in bubbling hot spiced sambar with a spoonful of pure ghee.',
    image: '/assets/categories/idli/mini_idli_sambar.jpg',
    category: 'Idli',
  },
  {
    id: '8',
    name: 'Golden Pazham Pori',
    price: '₹45',
    description: 'Traditional Kerala-style ripe banana fritters — crisp on edges, sweet and melt-in-mouth inside.',
    image: '/assets/categories/snacks/pazhampori.jpg',
    tag: 'Evening Favorite',
    category: 'Snacks',
  },
  {
    id: '9',
    name: 'Aromatic Badam Milk',
    price: '₹65',
    description: 'Rich, warming saffron-infused almond milk garnished with crunchy crushed nuts.',
    image: '/assets/categories/hotbeve/Badammilk.jpg',
    category: 'Beverages',
  },
]

const categories = ['All', 'Dosa', 'Idli', 'Meals', 'Snacks', 'Beverages']

export default function MenuHighlights() {
  const [active, setActive] = useState('All')

  const filtered = active === 'All'
    ? items
    : items.filter((item) => item.category === active)

  return (
    <section className="menu-highlights" id="menu">
      <div className="menu-highlights__header container">
        <span className="menu-highlights__label">Chef Highlights</span>
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
          <article className="menu-card" key={item.id}>
            <div className="menu-card__image">
              <img
                src={item.image}
                alt={item.name}
                className="menu-card__img"
                loading="lazy"
              />
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
        <Link to="/menu" className="menu-highlights__btn">
          Explore Full Menu (130+ Dishes)
          <span className="menu-highlights__btn-arrow">→</span>
        </Link>
      </div>
    </section>
  )
}
