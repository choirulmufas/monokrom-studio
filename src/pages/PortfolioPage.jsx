import { ArrowUpRight, CheckCircle2, ExternalLink } from 'lucide-react'
import { projects } from '../data/projects.js'
import Badge from '../components/ui/Badge.jsx'
import Card from '../components/ui/Card.jsx'
import Container from '../components/ui/Container.jsx'
import Heading from '../components/ui/Heading.jsx'
import Section from '../components/ui/Section.jsx'

function ProjectVisual({ title, variant, image, language }) {
  const isIndonesian = language === 'id'

  if (image) {
    return (
      <div className="project-visual project-visual-image-wrap" aria-label={isIndonesian ? `Pratinjau proyek ${title}` : `${title} project preview`} role="img">
        <img className="project-visual-image" src={image} alt="" loading="lazy" />
      </div>
    )
  }

  return (
    <div className={`project-visual project-visual-${variant}`} aria-label={isIndonesian ? `Pratinjau proyek ${title}` : `${title} project preview`} role="img">
      <div className="project-visual-topline" aria-hidden="true">
        <span />
        <span />
        <span />
        <span className="project-visual-label">MONOKROM / {isIndonesian ? 'PROYEK' : 'PROJECT'}</span>
      </div>
      <div className="project-visual-content" aria-hidden="true">
        {variant === 'mobile' ? (
          <div className="project-phone">
            <span className="project-phone-notch" />
            <span className="project-phone-line project-phone-line-short" />
            <span className="project-phone-circle" />
            <span className="project-phone-line" />
            <span className="project-phone-line project-phone-line-short" />
          </div>
        ) : null}
        {variant === 'quality' ? (
          <div className="project-quality-list">
            <span><CheckCircle2 size={14} /> {isIndonesian ? 'Rangkaian regresi' : 'Regression suite'}</span>
            <span><CheckCircle2 size={14} /> {isIndonesian ? 'Kandidat rilis' : 'Release candidate'}</span>
            <span><CheckCircle2 size={14} /> {isIndonesian ? 'Siap diluncurkan' : 'Ready to ship'}</span>
          </div>
        ) : null}
        {variant !== 'mobile' && variant !== 'quality' ? (
          <>
            <span className="project-visual-block project-visual-block-large" />
            <span className="project-visual-block project-visual-block-small" />
            <span className="project-visual-line" />
            <span className="project-visual-line project-visual-line-short" />
          </>
        ) : null}
      </div>
      <span className="project-visual-accent" aria-hidden="true" />
    </div>
  )
}

function ProjectCard({ category, categoryEn, description, descriptionEn, technologies, technologiesEn, title, url, visual, image, language }) {
  const isIndonesian = language === 'id'

  return (
    <Card as="article" hover className="project-card portfolio-project-card flex flex-col overflow-hidden p-0">
      <ProjectVisual title={title} variant={visual} image={image} language={language} />
      <div className="flex flex-1 flex-col p-6">
        <Badge variant="blue" className="self-start">{isIndonesian ? category : categoryEn}</Badge>
        <h3 className="mt-5 type-h4 text-navy">{title}</h3>
        <p className="mt-3 text-body-small text-text-secondary">{isIndonesian ? description : descriptionEn}</p>
        <div className="mt-5 flex flex-wrap gap-2" aria-label={isIndonesian ? `Teknologi ${title}` : `${title} technologies`}>
          {(isIndonesian ? technologies : technologiesEn).map((technology) => (
            <span key={technology} className="project-technology">{technology}</span>
          ))}
        </div>
        {url ? (
          <a className="project-link mt-6" href={url} target="_blank" rel="noreferrer">
            {isIndonesian ? 'Lihat proyek' : 'View project'} <ExternalLink aria-hidden="true" size={16} />
          </a>
        ) : (
          <span className="project-status mt-6">
            {isIndonesian ? 'Proyek konsep' : 'Concept project'} <ArrowUpRight aria-hidden="true" size={16} />
          </span>
        )}
      </div>
    </Card>
  )
}

function PortfolioPage({ language = 'id' }) {
  const isIndonesian = language === 'id'

  return (
    <Section background="light" className="portfolio-section portfolio-page">
      <Container>
        <Heading
          eyebrow={isIndonesian ? 'Karya dan konsep terpilih' : 'Selected work and concepts'}
          title={
            <>
              {isIndonesian ? 'Ide dibuat jelas, produk dibuat ' : 'Ideas made clear, products made '}
              <span className="text-primary">{isIndonesian ? 'berguna.' : 'useful.'}</span>
            </>
          }
          description={
            isIndonesian
              ? 'Pilihan konsep portofolio yang menunjukkan bagaimana desain, teknologi, dan kualitas membentuk produk digital yang berguna.'
              : 'A selection of portfolio concepts showing how design, technology, and quality come together in useful digital products.'
          }
          align="center"
          as="h1"
          className="portfolio-page-heading mx-auto"
        />

        <div className="mt-12 grid gap-6 tablet:grid-cols-2 laptop:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} language={language} />
          ))}
        </div>
      </Container>
    </Section>
  )
}

export default PortfolioPage
