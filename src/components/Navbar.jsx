import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import Button from './ui/Button.jsx'
import Container from './ui/Container.jsx'

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Process', href: '#process' },
  { label: 'Contact', href: '#contact' },
]

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeHref, setActiveHref] = useState(() => window.location.hash || '#home')

  useEffect(() => {
    const handleHashChange = () => {
      setActiveHref(window.location.hash || '#home')
    }

    window.addEventListener('hashchange', handleHashChange)
    return () => window.removeEventListener('hashchange', handleHashChange)
  }, [])

  const handleNavigation = (href) => {
    setActiveHref(href)
    setIsMenuOpen(false)
  }

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-surface">
      <Container as="nav" aria-label="Main navigation" className="relative">
        <div className="flex min-h-20 items-center justify-between gap-6">
          <a
            href="#home"
            className="group inline-flex shrink-0 items-center gap-3 rounded-sm text-navy focus-visible:outline-offset-4"
            onClick={() => handleNavigation('#home')}
          >
            <span
              aria-hidden="true"
              className="grid size-9 place-items-center rounded-md bg-primary text-sm font-extrabold text-white transition duration-200 group-hover:bg-navy"
            >
              CM
            </span>
            <span className="text-base font-extrabold tracking-normal">CM Studio</span>
          </a>

          <div className="hidden items-center gap-8 laptop:flex">
            <ul className="flex items-center gap-6" role="list">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className={`relative inline-flex min-h-11 items-center rounded-sm px-1 text-body-small font-medium transition duration-200 focus-visible:outline-offset-4 ${
                      activeHref === item.href
                        ? 'text-primary'
                        : 'text-text-secondary hover:text-primary'
                    }`}
                    aria-current={activeHref === item.href ? 'page' : undefined}
                    onClick={() => handleNavigation(item.href)}
                  >
                    {item.label}
                    {activeHref === item.href ? (
                      <span
                        aria-hidden="true"
                        className="absolute inset-x-1 bottom-1 h-0.5 rounded-full bg-primary"
                      />
                    ) : null}
                  </a>
                </li>
              ))}
            </ul>
            <Button href="#contact" size="sm" onClick={() => handleNavigation('#contact')}>
              Let's Talk
            </Button>
          </div>

          <button
            type="button"
            className="inline-flex size-11 items-center justify-center rounded-md text-navy transition duration-200 hover:bg-background hover:text-primary laptop:hidden"
            aria-controls="mobile-navigation"
            aria-expanded={isMenuOpen}
            aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            onClick={() => setIsMenuOpen((open) => !open)}
          >
            {isMenuOpen ? <X aria-hidden="true" size={24} /> : <Menu aria-hidden="true" size={24} />}
          </button>
        </div>

        <div
          id="mobile-navigation"
          className={`overflow-hidden transition-[max-height,opacity] duration-200 laptop:hidden motion-reduce:transition-none ${
            isMenuOpen
              ? 'max-h-[28rem] opacity-100'
              : 'pointer-events-none max-h-[0px] opacity-0'
          }`}
          aria-hidden={!isMenuOpen}
        >
          <div className="border-t border-border py-4">
            <ul className="flex flex-col gap-1" role="list">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className={`flex min-h-11 items-center rounded-md px-3 text-body font-medium transition duration-200 focus-visible:outline-offset-2 ${
                      activeHref === item.href
                        ? 'bg-background text-primary'
                        : 'text-text-secondary hover:bg-background hover:text-primary'
                    }`}
                    aria-current={activeHref === item.href ? 'page' : undefined}
                    tabIndex={isMenuOpen ? 0 : -1}
                    onClick={() => handleNavigation(item.href)}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
            <Button
              href="#contact"
              className="mt-3 w-full"
              tabIndex={isMenuOpen ? 0 : -1}
              onClick={() => handleNavigation('#contact')}
            >
              Let's Talk
            </Button>
          </div>
        </div>
      </Container>
    </header>
  )
}

export default Navbar
