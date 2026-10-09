import { useEffect, useState } from 'react'
import { Menu, Moon, Sun, X } from 'lucide-react'
import Button from './ui/Button.jsx'
import Container from './ui/Container.jsx'

const navItemsByLanguage = {
  en: [
    { label: 'Home', href: '/' },
    { label: 'Services', href: '/service' },
    { label: 'Portfolio', href: '/portfolio' },
    { label: 'Contact', href: '/contact' },
  ],
  id: [
    { label: 'Beranda', href: '/' },
    { label: 'Layanan', href: '/service' },
    { label: 'Portofolio', href: '/portfolio' },
    { label: 'Kontak', href: '/contact' },
  ],
}

function getInitialTheme() {
  return document.documentElement.dataset.theme === 'dark' ? 'dark' : 'light'
}

function ThemeToggle({ theme, onToggle, language }) {
  const isDark = theme === 'dark'
  const label = language === 'id'
    ? (isDark ? 'Aktifkan mode siang' : 'Aktifkan mode malam')
    : (isDark ? 'Switch to light mode' : 'Switch to dark mode')

  return (
    <button
      type="button"
      className="theme-toggle"
      aria-label={label}
      title={label}
      onClick={onToggle}
    >
      {isDark ? <Sun aria-hidden="true" size={18} /> : <Moon aria-hidden="true" size={18} />}
    </button>
  )
}

function LanguageToggle({ language, onLanguageChange }) {
  const isIndonesian = language === 'id'

  return (
    <button
      type="button"
      className="language-toggle"
      aria-label={isIndonesian ? 'Ganti ke bahasa Inggris' : 'Switch to Indonesian'}
      title={isIndonesian ? 'Ganti ke bahasa Inggris' : 'Switch to Indonesian'}
      onClick={() => onLanguageChange(isIndonesian ? 'en' : 'id')}
    >
      {isIndonesian ? 'IN' : 'EN'}
    </button>
  )
}

function Navbar({ language = 'id', onLanguageChange = () => {}, currentPath = '/' }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeHref, setActiveHref] = useState(() => (['/service', '/portfolio', '/contact'].includes(window.location.pathname) ? window.location.pathname : window.location.hash || '#home'))
  const [theme, setTheme] = useState(getInitialTheme)
  const navItems = navItemsByLanguage[language]

  useEffect(() => {
    const handleHashChange = () => {
      setActiveHref(['/service', '/portfolio', '/contact'].includes(window.location.pathname) ? window.location.pathname : window.location.hash || '#home')
    }

    window.addEventListener('hashchange', handleHashChange)
    window.addEventListener('popstate', handleHashChange)
    return () => {
      window.removeEventListener('hashchange', handleHashChange)
      window.removeEventListener('popstate', handleHashChange)
    }
  }, [])

  useEffect(() => {
    setActiveHref(['/service', '/portfolio', '/contact'].includes(currentPath) ? currentPath : window.location.hash || '#home')
  }, [currentPath])

  const handleNavigation = (href) => {
    setActiveHref(href)
    setIsMenuOpen(false)

    if (href.startsWith('/')) {
      window.location.assign(href)
      return
    }

    const basePath = window.location.pathname === '/service' ? '/' : window.location.pathname || '/'
    const nextUrl = `${basePath}${href}`

    if (window.location.pathname !== basePath || window.location.hash !== href) {
      window.history.pushState({}, '', nextUrl)
      window.dispatchEvent(new PopStateEvent('popstate'))
    }

    requestAnimationFrame(() => {
      const target = document.querySelector(href)
      target?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    })
  }

  const toggleTheme = () => {
    const nextTheme = theme === 'dark' ? 'light' : 'dark'
    document.documentElement.dataset.theme = nextTheme
    window.localStorage.setItem('cm-studio-theme', nextTheme)
    setTheme(nextTheme)
  }

  return (
    <header className="navbar sticky top-0 z-50 border-b border-border bg-surface shadow-subtle">
      <Container as="nav" aria-label={language === 'id' ? 'Navigasi utama' : 'Main navigation'} className="relative">
        <div className="flex min-h-20 items-center justify-between gap-6">
          <a
            href="/"
            className="group inline-flex shrink-0 items-center gap-3 rounded-sm text-navy focus-visible:outline-offset-4"
            onClick={(event) => {
              event.preventDefault()
              handleNavigation('/')
            }}
          >
            <span
              aria-hidden="true"
              className="grid size-9 place-items-center rounded-md bg-primary text-sm font-extrabold text-white transition duration-200 group-hover:bg-navy"
            >
              MS
            </span>
            <span className="text-base font-extrabold tracking-normal">Monokrom Studio</span>
          </a>

          <div className="hidden items-center gap-8 laptop:flex">
            <ul className="flex items-center gap-6" role="list">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    data-nav-item="true"
                    className={`relative inline-flex min-h-11 items-center rounded-sm px-1 text-body-small font-medium transition duration-200 focus-visible:outline-offset-4 ${
                      activeHref === item.href
                        ? 'text-primary'
                        : 'text-text-secondary hover:text-primary'
                    }`}
                    aria-current={activeHref === item.href ? 'page' : undefined}
                    onClick={(event) => {
                      event.preventDefault()
                      handleNavigation(item.href)
                    }}
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
            <LanguageToggle language={language} onLanguageChange={onLanguageChange} />
            <ThemeToggle theme={theme} onToggle={toggleTheme} language={language} />
            <Button href={currentPath === '/contact' ? '#contact-form' : '/contact'} size="sm" onClick={() => handleNavigation(currentPath === '/contact' ? '#contact-form' : '/contact')}>
              {language === 'id' ? 'Mau Konsultasi' : "Let's Talk"}
            </Button>
          </div>

          <div className="flex items-center gap-2 laptop:hidden">
            <LanguageToggle language={language} onLanguageChange={onLanguageChange} />
            <ThemeToggle theme={theme} onToggle={toggleTheme} language={language} />
            <button
              type="button"
              className="inline-flex size-11 items-center justify-center rounded-md text-navy transition duration-200 hover:bg-background hover:text-primary"
              aria-controls="mobile-navigation"
              aria-expanded={isMenuOpen}
              aria-label={language === 'id'
                ? (isMenuOpen ? 'Tutup menu navigasi' : 'Buka menu navigasi')
                : (isMenuOpen ? 'Close navigation menu' : 'Open navigation menu')}
              onClick={() => setIsMenuOpen((open) => !open)}
            >
              {isMenuOpen ? <X aria-hidden="true" size={24} /> : <Menu aria-hidden="true" size={24} />}
            </button>
          </div>
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
                    data-nav-item="true"
                    className={`flex min-h-11 items-center rounded-md px-3 text-body font-medium transition duration-200 focus-visible:outline-offset-2 ${
                      activeHref === item.href
                        ? 'bg-background text-primary'
                        : 'text-text-secondary hover:bg-background hover:text-primary'
                    }`}
                    aria-current={activeHref === item.href ? 'page' : undefined}
                    tabIndex={isMenuOpen ? 0 : -1}
                    onClick={(event) => {
                      event.preventDefault()
                      handleNavigation(item.href)
                    }}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
            <Button
              href={currentPath === '/contact' ? '#contact-form' : '/contact'}
              className="mt-3 w-full"
              tabIndex={isMenuOpen ? 0 : -1}
              onClick={() => handleNavigation(currentPath === '/contact' ? '#contact-form' : '/contact')}
            >
              {language === 'id' ? 'Mau Konsultasi' : "Let's Talk"}
            </Button>
          </div>
        </div>
      </Container>
    </header>
  )
}

export default Navbar
