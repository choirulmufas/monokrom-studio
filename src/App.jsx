import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Services from './components/Services.jsx'
import Achievements from './components/Achievements.jsx'
import Portfolio from './components/Portfolio.jsx'
import WhyChooseUs from './components/WhyChooseUs.jsx'
import Process from './components/Process.jsx'
import Testimonials from './components/Testimonials.jsx'
import CTA from './components/CTA.jsx'
import Footer from './components/Footer.jsx'

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
        <Process />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </>
  )
}

export default App
