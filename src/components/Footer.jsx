import { createElement } from 'react'
import { ArrowRight, ArrowUp, Linkedin } from 'lucide-react'
import { SiDribbble, SiInstagram, SiMedium } from 'react-icons/si'
import { services } from '../data/services.js'
import Container from './ui/Container.jsx'
import Section from './ui/Section.jsx'

const navigationLinks = [
  { label: { id: 'Beranda', en: 'Home' }, href: '/' },
  { label: { id: 'Layanan', en: 'Services' }, href: '/service' },
  { label: { id: 'Portofolio', en: 'Portfolio' }, href: '/portfolio' },
  { label: { id: 'Kontak', en: 'Contact' }, href: '/contact' },
]

const socialLinks = [
  { label: 'Instagram', href: 'https://www.instagram.com/', Icon: SiInstagram },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/', Icon: Linkedin },
  { label: 'Medium', href: 'https://medium.com/', Icon: SiMedium },
  { label: 'Dribbble', href: 'https://dribbble.com/', Icon: SiDribbble },
]

function FooterLink({ children, href }) {
  return (
    <a className="footer-link" href={href}>
      {children}
    </a>
  )
}

function Footer({ language = 'id' }) {
  const isIndonesian = language === 'id'

  return (
    <Section as="footer" background="navy" className="footer-section">
      <Container>
        <div className="footer-grid">
          <div className="footer-brand">
            <a href="#home" className="inline-flex items-center gap-3 text-white">
              <span aria-hidden="true" className="footer-logo">MS</span>
              <span className="text-base font-extrabold">Monokrom Studio</span>
            </a>
            <p className="mt-5 max-w-xs text-body-small text-white/65">
              {isIndonesian
                ? 'Kami membangun pengalaman digital yang bermakna melalui desain yang matang, teknologi yang andal, dan kolaborasi yang jelas.'
                : 'We build digital experiences that matter through thoughtful design, reliable technology, and clear collaboration.'}
            </p>
            <nav className="footer-social-links" aria-label={isIndonesian ? 'Media sosial' : 'Social media'}>
              {socialLinks.map((socialLink) => {
                const socialIcon = createElement(socialLink.Icon, { 'aria-hidden': true, size: 18 })

                return (
                  <a
                    key={socialLink.label}
                    className="footer-social-link"
                    href={socialLink.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={socialLink.label}
                    title={socialLink.label}
                  >
                    {socialIcon}
                  </a>
                )
              })}
            </nav>
          </div>

          <nav aria-label="Footer navigation">
            <h2 className="footer-heading">{isIndonesian ? 'Jelajahi' : 'Explore'}</h2>
            <ul className="footer-link-list" role="list">
              {navigationLinks.map((link) => (
                <li key={link.href}>
                  <FooterLink href={link.href}>{link.label[language]}</FooterLink>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="footer-heading">{isIndonesian ? 'Layanan' : 'Services'}</h2>
            <ul className="footer-link-list" role="list">
              {services.map((service) => (
                <li key={service.title}>
                  <span className="footer-service">{isIndonesian ? service.title : service.titleEn}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="footer-heading">{isIndonesian ? 'Mari terhubung' : "Let's connect"}</h2>
            <p className="text-body-small text-white/65">
              {isIndonesian
                ? 'Siap mengeksplorasi ide? Mari mulai percakapan tentang proyek Anda.'
                : 'Have an idea to explore? Start a conversation about your project.'}
            </p>
            <a className="footer-action-link mt-5" href="/contact">
              {isIndonesian ? 'Konsultasi proyek' : 'Discuss a project'}
              <ArrowRight aria-hidden="true" size={16} />
            </a>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="text-body-small text-white/55">
            {isIndonesian
              ? `© ${new Date().getFullYear()} Monokrom Studio. Semua hak dilindungi.`
              : `© ${new Date().getFullYear()} Monokrom Studio. All rights reserved.`}
          </p>
          <a className="footer-top-link" href="#home">
            {isIndonesian ? 'Kembali ke atas' : 'Back to top'}
            <ArrowUp aria-hidden="true" size={15} />
          </a>
        </div>
      </Container>
    </Section>
  )
}

export default Footer
