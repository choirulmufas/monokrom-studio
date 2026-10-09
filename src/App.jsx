import { useEffect, useState } from 'react'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Services from './components/Services.jsx'
import Achievements from './components/Achievements.jsx'
import WhyChooseUs from './components/WhyChooseUs.jsx'
import Process from './components/Process.jsx'
import Testimonials from './components/Testimonials.jsx'
import CTA from './components/CTA.jsx'
import Footer from './components/Footer.jsx'
import ServicesPage from './pages/ServicesPage.jsx'
import PortfolioPage from './pages/PortfolioPage.jsx'
import ContactPage from './pages/ContactPage.jsx'

function App() {
  const [language, setLanguage] = useState(() => {
    if (typeof window === 'undefined') {
      return 'id'
    }

    return window.localStorage.getItem('monokrom-language') || 'id'
  })
  const [currentPath, setCurrentPath] = useState(() => {
    if (typeof window === 'undefined') {
      return '/'
    }

    return window.location.pathname
  })

  useEffect(() => {
    window.localStorage.setItem('monokrom-language', language)
    document.documentElement.lang = language
  }, [language])

  useEffect(() => {
    const handleLocationChange = () => {
      setCurrentPath(window.location.pathname)
    }

    window.addEventListener('popstate', handleLocationChange)
    return () => window.removeEventListener('popstate', handleLocationChange)
  }, [])

  useEffect(() => {
    const root = document.documentElement
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    if (prefersReducedMotion || !('IntersectionObserver' in window)) {
      return undefined
    }

    root.classList.add('motion-ready')

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { rootMargin: '0px 0px -8% 0px', threshold: 0.12 },
    )

    document.querySelectorAll('[data-reveal]').forEach((element) => observer.observe(element))

    return () => {
      observer.disconnect()
      root.classList.remove('motion-ready')
    }
  }, [])

  const isServicePage = currentPath === '/service'
  const isPortfolioPage = currentPath === '/portfolio'
  const isContactPage = currentPath === '/contact'

  return (
    <>
      <Navbar language={language} onLanguageChange={setLanguage} currentPath={currentPath} />
      <main>
        {isServicePage ? (
          <ServicesPage language={language} />
        ) : isPortfolioPage ? (
          <PortfolioPage language={language} />
        ) : isContactPage ? (
          <ContactPage language={language} />
        ) : (
          <>
            <Hero language={language} />
            <About language={language} />
            <Achievements language={language} />
            <WhyChooseUs language={language} />
            <Process language={language} />
            <Testimonials language={language} />
            <CTA language={language} />
          </>
        )}
      </main>
      <Footer language={language} />
    </>
  )
}

export default App
