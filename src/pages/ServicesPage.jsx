import { ArrowRight, CheckCircle2 } from 'lucide-react'
import { services } from '../data/services.js'
import Button from '../components/ui/Button.jsx'
import Card from '../components/ui/Card.jsx'
import Container from '../components/ui/Container.jsx'

function ServicePageCard({ description, descriptionEn, featured, icon, title, titleEn, language }) {
  const Icon = icon
  const isIndonesian = language === 'id'
  const displayTitle = isIndonesian ? title : titleEn
  const displayDescription = isIndonesian ? description : descriptionEn

  return (
    <Card
      as="article"
      hover
      className={`service-page-card flex min-h-[21rem] flex-col ${featured ? 'service-page-card-featured' : ''}`}
    >
      <div className="mb-8 flex items-start justify-between gap-4">
        <span className="service-page-icon grid size-14 place-items-center rounded-xl bg-background text-primary shadow-sm">
          <Icon aria-hidden="true" size={24} />
        </span>
        <ArrowRight aria-hidden="true" className="service-page-arrow text-text-muted" size={20} />
      </div>

      <h3 className="text-2xl font-bold tracking-tight text-navy">{displayTitle}</h3>
      <p className="mt-4 text-base leading-7 text-text-secondary">{displayDescription}</p>

      <div className="mt-auto pt-6">
        <span className="inline-flex items-center gap-2 text-sm font-semibold text-primary">
          <CheckCircle2 aria-hidden="true" size={16} />
          {isIndonesian ? 'Selengkapnya' : 'Learn more'}
        </span>
      </div>
    </Card>
  )
}

function ServicesPage({ language = 'id' }) {
  const isIndonesian = language === 'id'

  return (
    <div className="service-page-shell bg-surface-alt">
      <section className="border-b border-border bg-white/70">
        <Container className="py-20">
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center rounded-full border border-primary/15 bg-primary/5 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-primary">
              {isIndonesian ? 'Layanan kami' : 'Our services'}
            </span>
            <h1 className="mt-6 text-4xl font-black tracking-tight text-navy laptop:text-6xl">
              {isIndonesian ? 'Solusi digital yang ' : 'Digital solutions built for '}
              <span className="text-primary">{isIndonesian ? 'siap tumbuh.' : 'real growth.'}</span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-text-secondary">
              {isIndonesian
                ? 'Kami membantu brand, startup, dan bisnis berkembang dengan strategi, desain, dan teknologi yang jelas, cepat, dan siap dipakai.'
                : 'We help brands, startups, and growing businesses move with clarity through strategy, design, and technology that is fast, reliable, and ready to use.'}
            </p>
          </div>
        </Container>
      </section>

      <section className="py-20">
        <Container>
          <div className="mb-10 flex flex-col gap-4 laptop:flex-row laptop:items-end laptop:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
                {isIndonesian ? 'Apa yang kami tawarkan' : 'What we offer'}
              </p>
              <h2 className="mt-3 text-3xl font-black tracking-tight text-navy">
                {isIndonesian ? 'Layanan yang dirancang untuk hasil yang nyata.' : 'Services designed for measurable outcomes.'}
              </h2>
            </div>
          </div>

          <div className="grid gap-6 tablet:grid-cols-2 laptop:grid-cols-3">
            {services.map((service) => (
              <ServicePageCard key={service.title} {...service} language={language} />
            ))}
          </div>
        </Container>
      </section>

      <section className="pb-20">
        <Container>
          <div className="rounded-3xl border border-border bg-navy p-8 text-white shadow-elevated laptop:p-12">
            <div className="grid gap-8 laptop:grid-cols-[1.2fr_0.8fr] laptop:items-center">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary-light">
                  {isIndonesian ? 'Siap memulai' : 'Ready to begin'}
                </p>
                <h3 className="mt-3 text-3xl font-black tracking-tight text-white">
                  {isIndonesian ? 'Mari bentuk pengalaman digital yang lebih kuat.' : 'Let’s shape a smarter digital experience.'}
                </h3>
              </div>

              <div className="flex justify-start laptop:justify-end">
                <Button href="/contact" className="!bg-primary !text-white hover:!bg-primary/90">
                  {isIndonesian ? 'Konsultasi gratis' : 'Book a consultation'}
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </div>
  )
}

export default ServicesPage
