import { createElement } from 'react'
import { Blocks, MousePointer2, ShieldCheck, UsersRound } from 'lucide-react'
import Button from './ui/Button.jsx'
import Card from './ui/Card.jsx'
import Container from './ui/Container.jsx'
import Heading from './ui/Heading.jsx'
import Section from './ui/Section.jsx'

const principles = [
  {
    icon: MousePointer2,
    title: {
      en: 'User focused',
      id: 'Berpusat pada pengguna',
    },
    description: {
      en: 'We keep real people at the center of every product decision.',
      id: 'Kami menempatkan orang nyata di pusat setiap keputusan produk.',
    },
  },
  {
    icon: ShieldCheck,
    title: {
      en: 'Quality minded',
      id: 'Berorientasi kualitas',
    },
    description: {
      en: 'We pair thoughtful design with dependable implementation.',
      id: 'Kami memadukan desain yang matang dengan penerapan yang dapat diandalkan.',
    },
  },
  {
    icon: UsersRound,
    title: {
      en: 'Built together',
      id: 'Dibangun bersama',
    },
    description: {
      en: 'We work openly with clients from first idea to final release.',
      id: 'Kami bekerja terbuka dengan klien dari ide pertama hingga rilis akhir.',
    },
  },
  {
    icon: Blocks,
    title: {
      en: 'Made to grow',
      id: 'Dirancang untuk tumbuh',
    },
    description: {
      en: 'We create clear foundations that can evolve with the business.',
      id: 'Kami membangun fondasi yang jelas agar bisa berkembang bersama bisnis.',
    },
  },
]

function AboutVisual({ language = 'en' }) {
  const isIndonesian = language === 'id'

  return (
    <div className="about-visual" aria-hidden="true">
      <div className="about-visual-grid" />
      <div className="about-visual-window">
        <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
          <div className="flex items-center gap-2">
            <span className="size-2 rounded-full bg-accent" />
            <span className="size-2 rounded-full bg-white/50" />
            <span className="size-2 rounded-full bg-white/20" />
          </div>
          <span className="text-[10px] font-bold uppercase tracking-[0.16em] text-white/50">
            {isIndonesian ? 'lab produk' : 'product lab'}
          </span>
        </div>
        <div className="grid gap-5 p-5 tablet:grid-cols-[0.75fr_1.25fr]">
          <div className="space-y-3">
            <div className="h-2 w-16 rounded-full bg-white/30" />
            <div className="h-2 w-24 rounded-full bg-white/15" />
            <div className="h-2 w-20 rounded-full bg-primary" />
            <div className="mt-8 space-y-2 border-l border-primary/60 pl-3">
              <div className="h-2 w-20 rounded-full bg-white/40" />
              <div className="h-2 w-14 rounded-full bg-white/20" />
            </div>
          </div>
          <div className="about-visual-screen rounded-md bg-white p-4">
            <div className="mb-5 flex items-end justify-between">
              <div>
                <div className="mb-2 h-2 w-12 rounded-full bg-primary/30" />
                <div className="h-4 w-32 rounded-full bg-navy" />
              </div>
              <span className="grid size-8 place-items-center rounded-md bg-background text-primary">
                <MousePointer2 size={15} />
              </span>
            </div>
            <div className="grid grid-cols-3 items-end gap-2">
              <div className="h-14 rounded-sm bg-primary/20" />
              <div className="h-20 rounded-sm bg-primary" />
              <div className="h-11 rounded-sm bg-accent/70" />
            </div>
            <div className="mt-5 h-2 w-3/4 rounded-full bg-navy/10" />
            <div className="mt-2 h-2 w-1/2 rounded-full bg-navy/10" />
          </div>
        </div>
      </div>
      <div className="about-visual-note">
        <span className="size-2 rounded-full bg-primary" />
        <span>{isIndonesian ? 'desain · bangun · sempurnakan' : 'design · build · refine'}</span>
      </div>
    </div>
  )
}

function About({ language = 'id' }) {
  const isIndonesian = language === 'id'

  return (
    <Section id="about" background="white" className="about-section">
      <Container>
        <Heading
          eyebrow={isIndonesian ? 'Tentang Monokrom Studio' : 'About Monokrom Studio'}
          title={
            <>
              {isIndonesian ? 'Pekerjaan digital dengan sudut pandang yang ' : 'Digital work with a clear '}{' '}
              <span className="text-primary">{isIndonesian ? 'jelas.' : 'point of view.'}</span>
            </>
          }
          description={
            isIndonesian
              ? 'Kami membawa teknologi, desain, dan kegunaan bersama-sama untuk membantu organisasi mengubah ide yang bermanfaat menjadi pengalaman digital yang dapat diandalkan.'
              : 'We bring technology, design, and usability together to help organizations turn useful ideas into digital experiences people can rely on.'
          }
        />

        <div className="mt-16 grid items-center gap-14 laptop:grid-cols-[minmax(0,1fr)_minmax(0,0.92fr)] laptop:gap-20">
          <AboutVisual language={language} />

          <div>
            <div className="space-y-5">
              <h3 className="type-h3 text-navy">
                {isIndonesian ? 'Mitra yang penuh pertimbangan untuk produk yang bermakna.' : 'A thoughtful partner for meaningful products.'}
              </h3>
              <p className="type-body text-text-secondary">
                {isIndonesian
                  ? 'Monokrom Studio adalah studio digital untuk tim yang ingin bergerak dari konsep kasar menuju produk yang rapi, berguna, dan siap dipakai. Kami merancang pengalaman situs web modern serta solusi teknologi berdasarkan kebutuhan penggunanya dan tujuan yang perlu dicapai.'
                  : 'Monokrom Studio is a digital studio for teams that want to move from a rough concept to a polished, useful product. We shape modern web experiences and technology solutions around the people who use them and the goals they need to support.'}
              </p>
              <p className="type-body text-text-secondary">
                {isIndonesian
                  ? 'Pendekatan kami praktis dan kolaboratif: pahami konteks, perjelas pengalaman, bangun fondasi yang kuat, dan terus melakukan perbaikan bersama orang-orang yang paling dekat dengan pekerjaan.'
                  : 'Our approach is practical and collaborative: understand the context, make the experience clear, build on a resilient foundation, and keep improving with the people closest to the work.'}
              </p>
            </div>

            <div className="mt-8 grid gap-3 tablet:grid-cols-2">
              {principles.map(({ icon, title, description }) => (
                <Card key={title.en} className="p-4" as="article">
                  {createElement(icon, {
                    'aria-hidden': true,
                    className: 'mb-4 text-primary',
                    size: 20,
                  })}
                  <h4 className="type-h4 text-navy">{title[language]}</h4>
                  <p className="mt-2 text-body-small text-text-secondary">{description[language]}</p>
                </Card>
              ))}
            </div>

            <Button href="/contact" variant="secondary" className="mt-8">
              {isIndonesian ? 'Mari bekerja sama' : "Let's work together"}
            </Button>
          </div>
        </div>
      </Container>
    </Section>
  )
}

export default About
