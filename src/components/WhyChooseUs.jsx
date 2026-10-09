import { createElement } from 'react'
import { ArrowRight, Sparkles } from 'lucide-react'
import { whyChooseUs } from '../data/whyChooseUs.js'
import Badge from './ui/Badge.jsx'
import Card from './ui/Card.jsx'
import Container from './ui/Container.jsx'
import Heading from './ui/Heading.jsx'
import Section from './ui/Section.jsx'

function WhyChooseUsVisual({ language }) {
  const isIndonesian = language === 'id'

  return (
    <Card as="aside" className="why-choose-us-summary overflow-hidden p-0">
      <div className="border-b border-border px-6 py-5">
        <Badge variant="blue">{isIndonesian ? 'Cara kerja kami' : 'How we work'}</Badge>
        <h3 className="mt-4 type-h3 text-navy">
          {isIndonesian ? 'Proses yang tenang, jelas, dan terus bergerak.' : 'A calm, clear process that keeps moving.'}
        </h3>
        <p className="mt-3 type-body text-text-secondary">
          {isIndonesian
            ? 'Monokrom Studio fokus pada hal yang esensial: pahami masalah, jaga tim tetap selaras, dan hadirkan sesuatu yang praktis, matang, serta siap berkembang.'
            : 'Monokrom Studio focuses on what matters: understanding the problem, keeping teams aligned, and delivering work that is practical, polished, and ready to grow.'}
        </p>
      </div>

      <div className="space-y-4 px-6 py-5">
        <div className="why-choose-us-summary-row">
          <span className="why-choose-us-summary-label">{isIndonesian ? 'Eksplorasi' : 'Explore'}</span>
          <span className="why-choose-us-summary-value">{isIndonesian ? 'Tujuan, pengguna, batasan' : 'Goals, users, constraints'}</span>
        </div>
        <div className="why-choose-us-summary-row">
          <span className="why-choose-us-summary-label">{isIndonesian ? 'Pengiriman' : 'Delivery'}</span>
          <span className="why-choose-us-summary-value">{isIndonesian ? 'Kualitas, kejelasan, konsistensi' : 'Quality, clarity, consistency'}</span>
        </div>
        <div className="why-choose-us-summary-row">
          <span className="why-choose-us-summary-label">{isIndonesian ? 'Hasil' : 'Outcome'}</span>
          <span className="why-choose-us-summary-value">{isIndonesian ? 'Produk yang dibuat untuk tumbuh' : 'Products built to grow'}</span>
        </div>
      </div>

      <div className="flex items-center justify-between border-t border-border bg-background/70 px-6 py-4 text-body-small font-semibold text-navy">
        <span className="inline-flex items-center gap-2">
          <Sparkles aria-hidden="true" className="text-accent" size={16} />
          {isIndonesian ? 'Manusiawi, modern, andal' : 'Human, modern, reliable'}
        </span>
        <span className="inline-flex items-center gap-1.5 text-primary">
          {isIndonesian ? 'Jaga tetap sederhana' : 'Keep it simple'}
          <ArrowRight aria-hidden="true" size={14} />
        </span>
      </div>
    </Card>
  )
}

function WhyChooseUsCard({ description, descriptionEn, icon, title, titleEn, language }) {
  const isIndonesian = language === 'id'

  return (
    <Card as="article" hover className="why-choose-us-card">
      <span className="why-choose-us-icon" aria-hidden="true">
        {createElement(icon, { size: 20 })}
      </span>
      <h3 className="mt-5 type-h4 text-navy">{isIndonesian ? title : titleEn}</h3>
      <p className="mt-3 text-body-small text-text-secondary">{isIndonesian ? description : descriptionEn}</p>
    </Card>
  )
}

function WhyChooseUs({ language = 'id' }) {
  const isIndonesian = language === 'id'

  return (
    <Section id="why-choose-us" background="light" className="why-choose-us-section">
      <Container>
        <Heading
          eyebrow={isIndonesian ? 'Alasan klien memilih Monokrom Studio' : 'Why clients choose Monokrom Studio'}
          title={
            <>
              {isIndonesian ? 'Pemikiran yang jelas, eksekusi praktis, dan ' : 'Clear thinking, practical delivery, and a '}{' '}
              <span className="text-primary">{isIndonesian ? 'proses yang manusiawi.' : 'human process.'}</span>
            </>
          }
          description={
            isIndonesian
              ? 'Kami menjaga fokus pada hasil digital yang berguna: produk yang mudah dipahami, dibuat dengan cermat, dan siap tumbuh bersama bisnis.'
              : 'We keep the focus on useful digital outcomes: products that are easy to understand, carefully built, and ready to grow with the business.'
          }
        />

        <div className="mt-16 grid gap-8 laptop:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)] laptop:items-start laptop:gap-10">
          <WhyChooseUsVisual language={language} />

          <div className="grid gap-4 tablet:grid-cols-2">
            {whyChooseUs.map((item) => (
              <WhyChooseUsCard key={item.title} {...item} language={language} />
            ))}
          </div>
        </div>
      </Container>
    </Section>
  )
}

export default WhyChooseUs
