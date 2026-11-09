import Hero from '../components/Hero'
import About from '../components/About'
import MenuHighlights from '../components/MenuHighlights'
import Banner from '../components/Banner'
import Locations from '../components/Locations'

export default function HomePage() {
  return (
    <main>
      <Hero />
      <About />
      <MenuHighlights />
      <Banner />
      <Locations />
    </main>
  )
}
