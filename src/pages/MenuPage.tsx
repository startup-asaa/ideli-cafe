import { useState, useMemo, useEffect } from 'react'
import { menuCategories, menuItems, type MenuItem } from '../data/menuData'
import './MenuPage.css'

const SWIGGY_URL = 'https://www.swiggy.com/city/kochi/i-deli-cafe-kaloor-rest831935'

export default function MenuPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all')

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  // Calculate item count per category
  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = { all: menuItems.length }
    menuItems.forEach((item) => {
      counts[item.categoryId] = (counts[item.categoryId] || 0) + 1
    })
    return counts
  }, [])

  // Filtered dishes based on category
  const filteredItems = useMemo(() => {
    if (selectedCategory === 'all') return menuItems
    return menuItems.filter((item: MenuItem) => item.categoryId === selectedCategory)
  }, [selectedCategory])

  // Category label helper
  const getCategoryName = (catId: string) => {
    const found = menuCategories.find((c) => c.id === catId)
    return found ? found.name : catId
  }

  return (
    <div className="menu-page">
      {/* Header - dark green, starts from top behind navbar */}
      <section className="menu-page__hero">
        <div className="menu-page__hero-content">
          <h1 className="menu-page__title">
            The <em>i'DELI</em> Menu
          </h1>

          <p className="menu-page__desc">
            Handcrafted dosas, steaming soft thattu idlis, authentic Kerala meals,
            crispy snacks, and traditional filter coffee — prepared fresh every day.
          </p>
        </div>
      </section>

      {/* Sticky Category Chips */}
      <nav className="menu-page__nav" aria-label="Menu categories">
        <div className="menu-page__nav-inner">
          <button
            type="button"
            className={`menu-page__chip ${
              selectedCategory === 'all' ? 'menu-page__chip--active' : ''
            }`}
            onClick={() => setSelectedCategory('all')}
          >
            All Dishes
            <span className="menu-page__chip-count">
              ({categoryCounts['all'] || 0})
            </span>
          </button>

          {menuCategories.map((cat) => {
            const count = categoryCounts[cat.id] || 0
            if (count === 0) return null
            return (
              <button
                type="button"
                key={cat.id}
                className={`menu-page__chip ${
                  selectedCategory === cat.id ? 'menu-page__chip--active' : ''
                }`}
                onClick={() => setSelectedCategory(cat.id)}
              >
                {cat.name}
                <span className="menu-page__chip-count">({count})</span>
              </button>
            )
          })}
        </div>
      </nav>

      {/* Main Grid */}
      <main className="menu-page__main">
        <div className="menu-page__status">
          <span className="menu-page__status-text">
            Showing <strong>{filteredItems.length}</strong> {filteredItems.length === 1 ? 'dish' : 'dishes'}
            {selectedCategory !== 'all' && ` in ${getCategoryName(selectedCategory)}`}
          </span>

          <a
            href={SWIGGY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="menu-page__swiggy-pill"
          >
            Order Live on Swiggy ↗
          </a>
        </div>

        <div className="menu-page__grid">
          {filteredItems.map((item) => (
            <article className="menu-item-card" key={item.id}>
              <div className="menu-item-card__media">
                <img
                  src={item.image}
                  alt={item.name}
                  className="menu-item-card__img"
                  loading="lazy"
                />
                <div className="menu-item-card__veg" title="100% Pure Vegetarian">
                  <span className="menu-item-card__veg-dot" />
                </div>
                <span className="menu-item-card__category">
                  {getCategoryName(item.categoryId)}
                </span>
              </div>

              <div className="menu-item-card__body">
                <h2 className="menu-item-card__name">{item.name}</h2>
                <p className="menu-item-card__desc">{item.description}</p>
              </div>
            </article>
          ))}
        </div>
      </main>
    </div>
  )
}
