import { createElement } from 'react'
import { ArrowRight } from 'lucide-react'
import { processSteps } from '../data/process.js'
import Badge from './ui/Badge.jsx'
import Card from './ui/Card.jsx'
import Container from './ui/Container.jsx'
import Heading from './ui/Heading.jsx'
import Section from './ui/Section.jsx'

function ProcessStep({ description, descriptionEn, icon, number, title, titleEn, language }) {
  const isIndonesian = language === 'id'

  return (
    <li className="process-step">
      <Card as="article" className="process-card">
        <div className="flex items-center justify-between gap-3">
          <span className="process-number" aria-label={`${isIndonesian ? 'Langkah' : 'Step'} ${number}`}>{number}</span>
          <span className="process-icon" aria-hidden="true">
            {createElement(icon, { size: 20 })}
          </span>
        </div>
        <h3 className="mt-6 type-h4 text-navy">{isIndonesian ? title : titleEn}</h3>
        <p className="mt-3 text-body-small text-text-secondary">{isIndonesian ? description : descriptionEn}</p>
      </Card>
      {number !== '06' ? (
        <ArrowRight className="process-connector-icon" aria-hidden="true" size={16} />
      ) : null}
    </li>
  )
}

function Process({ language = 'id' }) {
  const isIndonesian = language === 'id'

  return (
    <Section id="process" background="white" className="process-section">
      <Container>
        <div className="flex flex-col gap-6 laptop:flex-row laptop:items-end laptop:justify-between">
          <Heading
            eyebrow={isIndonesian ? 'Proses kerja kami' : 'Our working process'}
            title={
              <>
                {isIndonesian ? 'Dari percakapan pertama hingga ' : 'From first conversation to a '}{' '}
                <span className="text-primary">{isIndonesian ? 'peluncuran yang matang.' : 'thoughtful launch.'}</span>
              </>
            }
            description={
              isIndonesian
                ? 'Proses yang sederhana dan kolaboratif menjaga prioritas tetap jelas dan mengubah ide menjadi produk digital dengan percaya diri.'
                : 'A simple, collaborative process keeps priorities clear and turns ideas into digital products with confidence.'
            }
          />
          <Badge variant="blue" className="self-start laptop:mb-1 laptop:self-auto">
            {isIndonesian ? 'Enam langkah, satu arah yang sama' : 'Six steps, one shared direction'}
          </Badge>
        </div>

        <ol className="process-track mt-16">
          {processSteps.map((step) => (
            <ProcessStep key={step.number} {...step} language={language} />
          ))}
        </ol>
      </Container>
    </Section>
  )
}

export default Process
