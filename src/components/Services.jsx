import { createElement } from 'react'
import { ArrowUpRight } from 'lucide-react'
import { services } from '../data/services.js'
import Card from './ui/Card.jsx'
import Container from './ui/Container.jsx'
import Heading from './ui/Heading.jsx'
import Section from './ui/Section.jsx'

function ServiceCard({ description, descriptionEn, featured, icon, title, titleEn, language }) {
  return (
    <Card
      as="article"
      hover
      className={`service-card flex min-h-64 flex-col ${featured ? 'service-card-featured' : ''}`}
    >
      <div className="mb-8 flex items-start justify-between gap-4">
        <span className="service-icon grid size-12 place-items-center rounded-md bg-background text-primary">
          {createElement(icon, { 'aria-hidden': true, size: 23 })}
        </span>
        <ArrowUpRight aria-hidden="true" className="service-arrow text-text-muted" size={19} />
      </div>
      <h3 className="type-h4 text-navy">{language === 'id' ? title : titleEn}</h3>
      <p className="mt-3 text-body-small text-text-secondary">{language === 'id' ? description : descriptionEn}</p>
    </Card>
  )
}

function Services({ language = 'id' }) {
  const isIndonesian = language === 'id'

  return (
    <Section id="services" background="light" className="services-section">
      <Container>
        <Heading
          eyebrow={isIndonesian ? 'Yang kami bangun' : 'What we build'}
          title={
            <>
              {isIndonesian ? 'Kapabilitas yang dibentuk untuk ' : 'Capabilities shaped around your '}{' '}
              <span className="text-primary">{isIndonesian ? 'langkah berikutnya.' : 'next move.'}</span>
            </>
          }
          description={
            isIndonesian
              ? 'Dari keputusan produk awal hingga eksekusi yang andal, Monokrom Studio membawa kombinasi desain, engineering, dan pemikiran kualitas yang tepat di setiap proyek.'
              : 'From first product decisions to dependable delivery, Monokrom Studio brings the right mix of design, engineering, and quality thinking to each engagement.'
          }
        />

        <div className="mt-16 grid gap-4 tablet:grid-cols-2 laptop:grid-cols-3">
            {services.map((service) => (
              <ServiceCard key={service.title} {...service} language={language} />
          ))}
        </div>
      </Container>
    </Section>
  )
}

export default Services