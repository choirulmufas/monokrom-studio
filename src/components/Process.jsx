import { createElement } from 'react'
import { ArrowRight } from 'lucide-react'
import { processSteps } from '../data/process.js'
import Badge from './ui/Badge.jsx'
import Card from './ui/Card.jsx'
import Container from './ui/Container.jsx'
import Heading from './ui/Heading.jsx'
import Section from './ui/Section.jsx'

function ProcessStep({ description, icon, number, title }) {
  return (
    <li className="process-step">
      <Card as="article" className="process-card">
        <div className="flex items-center justify-between gap-3">
          <span className="process-number" aria-label={`Step ${number}`}>{number}</span>
          <span className="process-icon" aria-hidden="true">
            {createElement(icon, { size: 20 })}
          </span>
        </div>
        <h3 className="mt-6 type-h4 text-navy">{title}</h3>
        <p className="mt-3 text-body-small text-text-secondary">{description}</p>
      </Card>
      {number !== '06' ? (
        <ArrowRight className="process-connector-icon" aria-hidden="true" size={16} />
      ) : null}
    </li>
  )
}

function Process() {
  return (
    <Section id="process" background="white" className="process-section">
      <Container>
        <div className="flex flex-col gap-6 laptop:flex-row laptop:items-end laptop:justify-between">
          <Heading
            eyebrow="Our working process"
            title={
              <>
                From first conversation to a <span className="text-primary">thoughtful launch.</span>
              </>
            }
            description="A simple, collaborative process keeps priorities clear and turns ideas into digital products with confidence."
          />
          <Badge variant="blue" className="self-start laptop:mb-1 laptop:self-auto">
            Six steps, one shared direction
          </Badge>
        </div>

        <ol className="process-track mt-16">
          {processSteps.map((step) => (
            <ProcessStep key={step.number} {...step} />
          ))}
        </ol>
      </Container>
    </Section>
  )
}

export default Process
