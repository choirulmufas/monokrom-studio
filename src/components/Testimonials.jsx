import { Quote } from 'lucide-react'
import { testimonials } from '../data/testimonials.js'
import Badge from './ui/Badge.jsx'
import Card from './ui/Card.jsx'
import Container from './ui/Container.jsx'
import Heading from './ui/Heading.jsx'
import Section from './ui/Section.jsx'

function TestimonialCard({ company, initials, name, quote, role, status }) {
  return (
    <Card as="article" className="testimonial-card">
      <div className="flex items-start justify-between gap-4">
        <Quote className="testimonial-quote-mark" aria-hidden="true" size={34} strokeWidth={1.5} />
        <Badge variant="blue" className="testimonial-status">
          {status}
        </Badge>
      </div>

      <blockquote className="mt-6 type-body testimonial-quote">“{quote}”</blockquote>

      <footer className="mt-8 flex items-center gap-3">
        <span className="testimonial-avatar" aria-hidden="true">
          {initials}
        </span>
        <div>
          <cite className="block not-italic font-semibold text-navy">{name}</cite>
          <p className="mt-1 text-body-small text-text-secondary">
            {role} · {company}
          </p>
        </div>
      </footer>
    </Card>
  )
}

function Testimonials() {
  return (
    <Section id="testimonials" background="light" className="testimonials-section">
      <Container>
        <Heading
          eyebrow="Client feedback"
          title={
            <>
              What people say about our <span className="text-primary">way of working.</span>
            </>
          }
          description="Strong collaboration makes better digital work. These demo testimonials show the kind of clear, thoughtful partnership this section is designed to present."
        />

        <div className="mt-16 grid gap-5 tablet:grid-cols-2 laptop:grid-cols-3">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.name} {...testimonial} />
          ))}
        </div>
      </Container>
    </Section>
  )
}

export default Testimonials
