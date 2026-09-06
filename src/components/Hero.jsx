import { ArrowUpRight, Code2, Layers3, Sparkles } from 'lucide-react'
import Button from './ui/Button.jsx'
import Container from './ui/Container.jsx'
import Heading from './ui/Heading.jsx'
import Section from './ui/Section.jsx'

function HeroVisual() {
  return (
    <div className="hero-visual motion-safe:animate-hero-float" aria-hidden="true">
      <div className="hero-visual-grid" />
      <div className="hero-orbit hero-orbit-one" />
      <div className="hero-orbit hero-orbit-two" />

      <div className="hero-panel hero-panel-browser">
        <div className="flex items-center justify-between border-b border-border px-4 py-3">
          <div className="flex items-center gap-1.5">
            <span className="size-2 rounded-full bg-accent" />
            <span className="size-2 rounded-full bg-primary" />
            <span className="size-2 rounded-full bg-navy/30" />
          </div>
          <span className="text-[10px] font-semibold uppercase tracking-[0.14em] text-text-muted">
            cm / studio
          </span>
        </div>
        <div className="space-y-5 p-5">
          <div className="space-y-2">
            <div className="h-2.5 w-2/5 rounded-full bg-primary/20" />
            <div className="h-5 w-4/5 rounded-full bg-navy" />
            <div className="h-5 w-3/5 rounded-full bg-primary" />
          </div>
          <div className="grid grid-cols-[1.2fr_0.8fr] gap-3">
            <div className="h-24 rounded-md bg-background p-3">
              <div className="mb-3 flex items-center gap-2 text-primary">
                <Code2 size={14} strokeWidth={2.5} />
                <span className="text-[10px] font-bold uppercase tracking-wider">build</span>
              </div>
              <div className="space-y-2">
                <div className="h-1.5 w-full rounded-full bg-primary/30" />
                <div className="h-1.5 w-4/5 rounded-full bg-navy/20" />
                <div className="h-1.5 w-3/5 rounded-full bg-accent/50" />
              </div>
            </div>
            <div className="flex h-24 flex-col justify-between rounded-md bg-navy p-3 text-white">
              <Layers3 size={16} />
              <span className="text-[10px] font-semibold uppercase tracking-wider text-white/70">
                digital
              </span>
            </div>
          </div>
          <div className="flex items-center justify-between rounded-md border border-primary/15 bg-white px-3 py-2.5">
            <span className="text-[11px] font-semibold text-text-secondary">Experience score</span>
            <span className="text-sm font-extrabold text-primary">98%</span>
          </div>
        </div>
      </div>

      <div className="hero-float-card hero-float-card-top">
        <Sparkles size={16} className="text-accent" />
        <span>ideas → impact</span>
      </div>
      <div className="hero-float-card hero-float-card-bottom">
        <span className="size-2 rounded-full bg-primary" />
        <span>systems online</span>
      </div>
      <span className="hero-red-dot hero-red-dot-one" />
      <span className="hero-red-dot hero-red-dot-two" />
    </div>
  )
}

function Hero() {
  return (
    <Section id="home" background="light" className="hero-section overflow-hidden">
      <Container>
        <div className="grid items-center gap-16 laptop:grid-cols-[minmax(0,0.92fr)_minmax(420px,1.08fr)] laptop:gap-12 desktop:gap-20">
          <div className="relative z-10 flex max-w-2xl flex-col items-start">
            <span className="mb-6 inline-flex items-center gap-2 rounded-md border border-primary/20 bg-white px-3 py-1.5 text-body-small font-semibold uppercase tracking-[0.12em] text-primary shadow-subtle">
              <span className="size-1.5 rounded-full bg-accent" aria-hidden="true" />
              Digital solutions studio
            </span>
            <Heading
              as="h1"
              className="gap-5"
              title={
                <>
                  We build digital experiences that{' '}
                  <span className="text-primary">matter.</span>
                </>
              }
              description="CM Studio turns ideas into thoughtful websites, digital products, and technology solutions built for real people and lasting momentum."
            />
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Button href="#contact" size="lg">
                Start a Project
                <ArrowUpRight aria-hidden="true" size={18} />
              </Button>
              <Button href="#portfolio" variant="secondary" size="lg">
                View Our Work
              </Button>
            </div>
          </div>

          <HeroVisual />
        </div>
      </Container>
    </Section>
  )
}

export default Hero