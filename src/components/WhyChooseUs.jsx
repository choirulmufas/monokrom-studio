import { createElement } from 'react'
import { ArrowRight, Sparkles } from 'lucide-react'
import { whyChooseUs } from '../data/whyChooseUs.js'
import Badge from './ui/Badge.jsx'
import Card from './ui/Card.jsx'
import Container from './ui/Container.jsx'
import Heading from './ui/Heading.jsx'
import Section from './ui/Section.jsx'

function WhyChooseUsVisual() {
  return (
    <Card as="aside" className="why-choose-us-summary overflow-hidden p-0">
      <div className="border-b border-border px-6 py-5">
        <Badge variant="blue">How we work</Badge>
        <h3 className="mt-4 type-h3 text-navy">A calm, clear process that keeps momentum moving.</h3>
        <p className="mt-3 type-body text-text-secondary">
          CM Studio focuses on the essentials: understand the problem, keep the team aligned, and
          deliver something practical, polished, and ready to evolve.
        </p>
      </div>

      <div className="space-y-4 px-6 py-5">
        <div className="why-choose-us-summary-row">
          <span className="why-choose-us-summary-label">Discovery</span>
          <span className="why-choose-us-summary-value">Goals, users, constraints</span>
        </div>
        <div className="why-choose-us-summary-row">
          <span className="why-choose-us-summary-label">Delivery</span>
          <span className="why-choose-us-summary-value">Quality, clarity, consistency</span>
        </div>
        <div className="why-choose-us-summary-row">
          <span className="why-choose-us-summary-label">Outcome</span>
          <span className="why-choose-us-summary-value">A product built to grow</span>
        </div>
      </div>

      <div className="flex items-center justify-between border-t border-border bg-background/70 px-6 py-4 text-body-small font-semibold text-navy">
        <span className="inline-flex items-center gap-2">
          <Sparkles aria-hidden="true" className="text-accent" size={16} />
          Human, modern, reliable
        </span>
        <span className="inline-flex items-center gap-1.5 text-primary">
          Keep it simple
          <ArrowRight aria-hidden="true" size={14} />
        </span>
      </div>
    </Card>
  )
}

function WhyChooseUsCard({ description, icon, title }) {
  return (
    <Card as="article" hover className="why-choose-us-card">
      <span className="why-choose-us-icon" aria-hidden="true">
        {createElement(icon, { size: 20 })}
      </span>
      <h3 className="mt-5 type-h4 text-navy">{title}</h3>
      <p className="mt-3 text-body-small text-text-secondary">{description}</p>
    </Card>
  )
}

function WhyChooseUs() {
  return (
    <Section id="why-choose-us" background="light" className="why-choose-us-section">
      <Container>
        <Heading
          eyebrow="Why clients choose CM Studio"
          title={
            <>
              Clear thinking, practical delivery, and a{' '}
              <span className="text-primary">human process.</span>
            </>
          }
          description="We keep the focus on useful digital outcomes: products that are easy to understand, carefully built, and ready to grow with the business."
        />

        <div className="mt-16 grid gap-8 laptop:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)] laptop:items-start laptop:gap-10">
          <WhyChooseUsVisual />

          <div className="grid gap-4 tablet:grid-cols-2">
            {whyChooseUs.map((item) => (
              <WhyChooseUsCard key={item.title} {...item} />
            ))}
          </div>
        </div>
      </Container>
    </Section>
  )
}

export default WhyChooseUs
