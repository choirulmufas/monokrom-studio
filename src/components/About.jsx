import { createElement } from 'react'
import { Blocks, MousePointer2, ShieldCheck, UsersRound } from 'lucide-react'
import Button from './ui/Button.jsx'
import Card from './ui/Card.jsx'
import Container from './ui/Container.jsx'
import Heading from './ui/Heading.jsx'
import Section from './ui/Section.jsx'

const principles = [
  {
    icon: MousePointer2,
    title: 'User focused',
    description: 'We keep real people at the center of every product decision.',
  },
  {
    icon: ShieldCheck,
    title: 'Quality minded',
    description: 'We pair thoughtful design with dependable implementation.',
  },
  {
    icon: UsersRound,
    title: 'Built together',
    description: 'We work openly with clients from first idea to final release.',
  },
  {
    icon: Blocks,
    title: 'Made to grow',
    description: 'We create clear foundations that can evolve with the business.',
  },
]

function AboutVisual() {
  return (
    <div className="about-visual" aria-hidden="true">
      <div className="about-visual-grid" />
      <div className="about-visual-window">
        <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
          <div className="flex items-center gap-2">
            <span className="size-2 rounded-full bg-accent" />
            <span className="size-2 rounded-full bg-white/50" />
            <span className="size-2 rounded-full bg-white/20" />
          </div>
          <span className="text-[10px] font-bold uppercase tracking-[0.16em] text-white/50">
            product lab
          </span>
        </div>
        <div className="grid gap-5 p-5 tablet:grid-cols-[0.75fr_1.25fr]">
          <div className="space-y-3">
            <div className="h-2 w-16 rounded-full bg-white/30" />
            <div className="h-2 w-24 rounded-full bg-white/15" />
            <div className="h-2 w-20 rounded-full bg-primary" />
            <div className="mt-8 space-y-2 border-l border-primary/60 pl-3">
              <div className="h-2 w-20 rounded-full bg-white/40" />
              <div className="h-2 w-14 rounded-full bg-white/20" />
            </div>
          </div>
          <div className="about-visual-screen rounded-md bg-white p-4">
            <div className="mb-5 flex items-end justify-between">
              <div>
                <div className="mb-2 h-2 w-12 rounded-full bg-primary/30" />
                <div className="h-4 w-32 rounded-full bg-navy" />
              </div>
              <span className="grid size-8 place-items-center rounded-md bg-background text-primary">
                <MousePointer2 size={15} />
              </span>
            </div>
            <div className="grid grid-cols-3 items-end gap-2">
              <div className="h-14 rounded-sm bg-primary/20" />
              <div className="h-20 rounded-sm bg-primary" />
              <div className="h-11 rounded-sm bg-accent/70" />
            </div>
            <div className="mt-5 h-2 w-3/4 rounded-full bg-navy/10" />
            <div className="mt-2 h-2 w-1/2 rounded-full bg-navy/10" />
          </div>
        </div>
      </div>
      <div className="about-visual-note">
        <span className="size-2 rounded-full bg-primary" />
        <span>design · build · refine</span>
      </div>
    </div>
  )
}

function About() {
  return (
    <Section id="about" background="white" className="about-section">
      <Container>
        <Heading
          eyebrow="About CM Studio"
          title={
            <>
              Digital work with a clear{' '}
              <span className="text-primary">point of view.</span>
            </>
          }
          description="We bring technology, design, and usability together to help organizations turn useful ideas into digital experiences people can rely on."
        />

        <div className="mt-16 grid items-center gap-14 laptop:grid-cols-[minmax(0,1fr)_minmax(0,0.92fr)] laptop:gap-20">
          <AboutVisual />

          <div>
            <div className="space-y-5">
              <h3 className="type-h3 text-navy">A thoughtful partner for meaningful products.</h3>
              <p className="type-body text-text-secondary">
                CM Studio is a digital studio for teams that want to move from a rough concept to a
                polished, useful product. We shape modern web experiences and technology solutions
                around the people who use them and the goals they need to support.
              </p>
              <p className="type-body text-text-secondary">
                Our approach is practical and collaborative: understand the context, make the
                experience clear, build on a resilient foundation, and keep improving with the
                people closest to the work.
              </p>
            </div>

            <div className="mt-8 grid gap-3 tablet:grid-cols-2">
              {principles.map(({ icon, title, description }) => (
                <Card key={title} className="p-4" as="article">
                  {createElement(icon, {
                    'aria-hidden': true,
                    className: 'mb-4 text-primary',
                    size: 20,
                  })}
                  <h4 className="type-h4 text-navy">{title}</h4>
                  <p className="mt-2 text-body-small text-text-secondary">{description}</p>
                </Card>
              ))}
            </div>

            <Button href="#contact" variant="secondary" className="mt-8">
              Let&apos;s work together
            </Button>
          </div>
        </div>
      </Container>
    </Section>
  )
}

export default About