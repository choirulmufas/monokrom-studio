import { ArrowUpRight, CheckCircle2, ExternalLink } from 'lucide-react'
import { projects } from '../data/projects.js'
import Badge from './ui/Badge.jsx'
import Card from './ui/Card.jsx'
import Container from './ui/Container.jsx'
import Heading from './ui/Heading.jsx'
import Section from './ui/Section.jsx'

function ProjectVisual({ title, variant }) {
  return (
    <div className={`project-visual project-visual-${variant}`} aria-label={`${title} project preview`} role="img">
      <div className="project-visual-topline" aria-hidden="true">
        <span />
        <span />
        <span />
        <span className="project-visual-label">CM / PROJECT</span>
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
            <span><CheckCircle2 size={14} /> Regression suite</span>
            <span><CheckCircle2 size={14} /> Release candidate</span>
            <span><CheckCircle2 size={14} /> Ready to ship</span>
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

function ProjectCard({ category, description, technologies, title, url, visual }) {
  return (
    <Card as="article" hover className="project-card flex flex-col overflow-hidden p-0">
      <ProjectVisual title={title} variant={visual} />
      <div className="flex flex-1 flex-col p-6">
        <Badge variant="blue" className="self-start">{category}</Badge>
        <h3 className="mt-5 type-h4 text-navy">{title}</h3>
        <p className="mt-3 text-body-small text-text-secondary">{description}</p>
        <div className="mt-5 flex flex-wrap gap-2" aria-label={`${title} technologies`}>
          {technologies.map((technology) => (
            <span key={technology} className="project-technology">{technology}</span>
          ))}
        </div>
        {url ? (
          <a className="project-link mt-6" href={url} target="_blank" rel="noreferrer">
            View project <ExternalLink aria-hidden="true" size={16} />
          </a>
        ) : (
          <span className="project-status mt-6">Concept project <ArrowUpRight aria-hidden="true" size={16} /></span>
        )}
      </div>
    </Card>
  )
}

function Portfolio() {
  return (
    <Section id="portfolio" background="white" className="portfolio-section">
      <Container>
        <Heading
          eyebrow="Selected work and concepts"
          title={
            <>
              Ideas made clear, products made{' '}
              <span className="text-primary">useful.</span>
            </>
          }
          description="A selection of portfolio and demo concepts that reflect how CM Studio brings design, technology, and quality thinking together."
        />

        <div className="mt-16 grid gap-6 tablet:grid-cols-2 laptop:grid-cols-3">
          {projects.map((project) => <ProjectCard key={project.title} {...project} />)}
        </div>
      </Container>
    </Section>
  )
}

export default Portfolio