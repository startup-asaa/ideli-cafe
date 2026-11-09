import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import MenuHighlights from './components/MenuHighlights'
import Banner from './components/Banner'
import Locations from './components/Locations'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <MenuHighlights />
        <Banner />
        <Locations />
      </main>
      <Footer />
    </>
  )
}
