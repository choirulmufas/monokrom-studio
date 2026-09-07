import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Services from './components/Services.jsx'
import Achievements from './components/Achievements.jsx'
import Portfolio from './components/Portfolio.jsx'
import WhyChooseUs from './components/WhyChooseUs.jsx'

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Achievements />
        <Portfolio />
        <WhyChooseUs />
      </main>
    </>
  )
}

export default App
