import { createElement } from 'react'
import { achievements } from '../data/achievements.js'
import Card from './ui/Card.jsx'
import Container from './ui/Container.jsx'
import Heading from './ui/Heading.jsx'
import Section from './ui/Section.jsx'

function AchievementCard({ description, icon, label, value }) {
  return (
    <Card as="article" className="achievement-card">
      <div className="flex items-start justify-between gap-4">
        <span className="achievement-icon" aria-hidden="true">
          {createElement(icon, { size: 19 })}
        </span>
        <span className="achievement-mark" aria-hidden="true" />
      </div>
      <p className="achievement-value" aria-label={`${value} ${label}`}>
        {value}
      </p>
      <h3 className="type-h4 text-white">{label}</h3>
      <p className="mt-2 text-body-small text-white/65">{description}</p>
    </Card>
  )
}

function Achievements() {
  return (
    <Section id="achievements" background="navy" className="achievements-section">
      <Container>
        <Heading
          eyebrow="A current studio snapshot"
          title={
            <>
              The details behind our{' '}
              <span className="text-primary">way of working.</span>
            </>
          }
          description="These portfolio-oriented markers describe the scope of this CM Studio profile today. They are intentionally easy to replace as verified project data becomes available."
          className="achievements-heading"
        />

        <div className="mt-16 grid gap-4 tablet:grid-cols-2 laptop:grid-cols-4">
          {achievements.map((achievement) => (
            <AchievementCard key={achievement.label} {...achievement} />
          ))}
        </div>
      </Container>
    </Section>
  )
}

export default Achievements