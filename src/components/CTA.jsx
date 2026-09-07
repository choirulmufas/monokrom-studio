import { ArrowRight, Sparkles } from 'lucide-react'
import Button from './ui/Button.jsx'
import Container from './ui/Container.jsx'
import Heading from './ui/Heading.jsx'
import Section from './ui/Section.jsx'

function CTA() {
  return (
    <Section id="contact" background="navy" className="cta-section">
      <Container>
        <div className="cta-panel">
          <span className="cta-glow cta-glow-left" aria-hidden="true" />
          <span className="cta-glow cta-glow-right" aria-hidden="true" />
          <div className="relative z-10 mx-auto flex max-w-3xl flex-col items-center text-center">
            <span className="cta-eyebrow">
              <Sparkles aria-hidden="true" size={16} />
              Let&apos;s build something great
            </span>
            <Heading
              align="center"
              className="cta-heading mt-6"
              title={
                <>
                  Have a project <span className="text-primary">in mind?</span>
                </>
              }
              description="Whether you need a website, mobile application, UI/UX direction, software quality support, or a digital product, CM Studio is ready to start the conversation."
            />
            <div className="mt-8 flex w-full flex-col justify-center gap-3 tablet:w-auto tablet:flex-row">
              <Button href="#contact" variant="primary" size="lg" className="w-full tablet:w-auto">
                Let&apos;s work together
                <ArrowRight aria-hidden="true" size={18} />
              </Button>
              <Button href="#portfolio" variant="secondary" size="lg" className="w-full tablet:w-auto">
                View our work
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  )
}

export default CTA
