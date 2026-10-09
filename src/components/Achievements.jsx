import { createElement } from 'react'
import { achievements } from '../data/achievements.js'
import Card from './ui/Card.jsx'
import Container from './ui/Container.jsx'
import Heading from './ui/Heading.jsx'
import Section from './ui/Section.jsx'

function AchievementCard({ description, descriptionEn, icon, label, labelEn, value, language }) {
  const displayLabel = language === 'id' ? label : labelEn
  const displayDescription = language === 'id' ? description : descriptionEn

  return (
    <Card as="article" className="achievement-card">
      <div className="flex items-start justify-between gap-4">
        <span className="achievement-icon" aria-hidden="true">
          {createElement(icon, { size: 19 })}
        </span>
        <span className="achievement-mark" aria-hidden="true" />
      </div>
      <p className="achievement-value" aria-label={`${value} ${displayLabel}`}>
        {value}
      </p>
      <h3 className="type-h4 text-white">{displayLabel}</h3>
      <p className="mt-2 text-body-small text-white/65">{displayDescription}</p>
    </Card>
  )
}

function Achievements({ language = 'id' }) {
  const isIndonesian = language === 'id'

  return (
    <Section id="achievements" background="navy" className="achievements-section">
      <Container>
        <Heading
          eyebrow={isIndonesian ? 'Snapshot studio saat ini' : 'A current studio snapshot'}
          title={
            <>
              {isIndonesian ? 'Detail di balik ' : 'The details behind our '}{' '}
              <span className="text-primary">{isIndonesian ? 'cara kerja kami.' : 'way of working.'}</span>
            </>
          }
          description={
            isIndonesian
              ? 'Indikator yang berorientasi portofolio ini menggambarkan cakupan profil Monokrom Studio saat ini. Mereka sengaja dibuat mudah diganti saat data proyek terverifikasi tersedia.'
              : 'These portfolio-oriented markers describe the scope of this Monokrom Studio profile today. They are intentionally easy to replace as verified project data becomes available.'
          }
          className="achievements-heading"
        />

        <div className="mt-16 grid gap-4 tablet:grid-cols-2 laptop:grid-cols-4">
          {achievements.map((achievement) => (
            <AchievementCard key={achievement.label} {...achievement} language={language} />
          ))}
        </div>
      </Container>
    </Section>
  )
}

export default Achievements