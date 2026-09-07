import { ArrowRight, ArrowUp } from 'lucide-react'
import { services } from '../data/services.js'
import Button from './ui/Button.jsx'
import Container from './ui/Container.jsx'
import Section from './ui/Section.jsx'

const navigationLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Process', href: '#process' },
  { label: 'Testimonials', href: '#testimonials' },
]

function FooterLink({ children, href }) {
  return (
    <a className="footer-link" href={href}>
      {children}
    </a>
  )
}

function Footer() {
  return (
    <Section as="footer" background="navy" className="footer-section">
      <Container>
        <div className="footer-grid">
          <div className="footer-brand">
            <a href="#home" className="inline-flex items-center gap-3 text-white">
              <span aria-hidden="true" className="footer-logo">CM</span>
              <span className="text-base font-extrabold">CM Studio</span>
            </a>
            <p className="mt-5 max-w-xs text-body-small text-white/65">
              We build digital experiences that matter through thoughtful design, reliable technology, and clear collaboration.
            </p>
            <Button href="#contact" variant="primary" size="sm" className="mt-6">
              Start a conversation
              <ArrowRight aria-hidden="true" size={16} />
            </Button>
          </div>

          <nav aria-label="Footer navigation">
            <h2 className="footer-heading">Explore</h2>
            <ul className="footer-link-list" role="list">
              {navigationLinks.map((link) => (
                <li key={link.href}>
                  <FooterLink href={link.href}>{link.label}</FooterLink>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="footer-heading">Services</h2>
            <ul className="footer-link-list" role="list">
              {services.map((service) => (
                <li key={service.title}>
                  <span className="footer-service">{service.title}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="footer-heading">Let&apos;s connect</h2>
            <p className="text-body-small text-white/65">
              Ready to explore an idea? The CTA above is the current starting point for a project conversation.
            </p>
            <a className="footer-action-link mt-5" href="#contact">
              Go to contact CTA
              <ArrowRight aria-hidden="true" size={16} />
            </a>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="text-body-small text-white/55">
            © {new Date().getFullYear()} CM Studio. All rights reserved.
          </p>
          <a className="footer-top-link" href="#home">
            Back to top
            <ArrowUp aria-hidden="true" size={15} />
          </a>
        </div>
      </Container>
    </Section>
  )
}

export default Footer
