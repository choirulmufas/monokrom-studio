import { useState } from 'react'
import { Mail, MapPin, MessageCircle, MessageSquareText, Send } from 'lucide-react'
import Container from '../components/ui/Container.jsx'

const mapEmbedUrl = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3924.9845005686625!2d112.42723507496568!3d-7.477409992534442!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e780d8787019a01%3A0x3776f9f1c99044e7!2sSinoman%20Gg.%201%2C%20Mergelo%2C%20Miji%2C%20Kec.%20Prajurit%20Kulon%2C%20Kota%20Mojokerto%2C%20Jawa%20Timur%2061322!5e1!3m2!1sen!2sid!4v1791519449232!5m2!1sen!2sid'

function ContactPage({ language = 'id' }) {
  const isIndonesian = language === 'id'
  const [form, setForm] = useState({ name: '', email: '', phone: '', subject: '', message: '' })

  const handleSubmit = (event) => {
    event.preventDefault()
    const body = `${isIndonesian ? 'Nama' : 'Name'}: ${form.name}\n${isIndonesian ? 'Email' : 'Email'}: ${form.email}\n${isIndonesian ? 'Telepon' : 'Phone'}: ${form.phone || '-'}\n\n${form.message}`
    window.location.href = `mailto:choirulmufas@gmail.com?subject=${encodeURIComponent(form.subject)}&body=${encodeURIComponent(body)}`
  }

  const update = (event) => setForm((current) => ({ ...current, [event.target.name]: event.target.value }))
  const fieldClass = 'contact-field w-full rounded-md border border-border bg-white px-4 py-3 text-sm text-text-primary placeholder:text-text-muted'

  return (
    <div className="contact-page-shell">
      <Container className="py-12 laptop:py-16">
        <section id="contact-form" className="contact-card grid overflow-hidden rounded-lg shadow-card laptop:grid-cols-[minmax(250px,0.72fr)_minmax(0,1fr)]" aria-label={isIndonesian ? 'Informasi dan formulir kontak' : 'Contact information and form'}>
          <aside className="contact-information p-7 text-white laptop:p-8">
            <h2 className="text-xl font-bold">{isIndonesian ? 'Informasi Kontak' : 'Contact Information'}</h2>
            <p className="mt-3 max-w-sm text-sm leading-6 text-white/70">{isIndonesian ? 'Punya pertanyaan atau ide proyek? Ceritakan kepada kami.' : 'Have a question or a project idea? Tell us about it.'}</p>
            <div className="mt-10 flex flex-col gap-5">
              <a className="contact-detail-row" href="mailto:choirulmufas@gmail.com">
                <span className="contact-detail-icon"><Mail size={17} aria-hidden="true" /></span>
                <span className="min-w-0"><span className="contact-detail-label">Email</span><span className="contact-detail-value">choirulmufas@gmail.com</span></span>
              </a>
              <a className="contact-detail-row" href="https://wa.me/628993593890" target="_blank" rel="noreferrer">
                <span className="contact-detail-icon"><MessageCircle size={17} aria-hidden="true" /></span>
                <span className="min-w-0"><span className="contact-detail-label">WhatsApp</span><span className="contact-detail-value">08993593890</span></span>
              </a>
              <div className="contact-detail-row">
                <span className="contact-detail-icon"><MapPin size={17} aria-hidden="true" /></span>
                <span className="min-w-0"><span className="contact-detail-label">{isIndonesian ? 'Alamat' : 'Address'}</span><span className="contact-detail-value">Sinoman Gg. 1, Mergelo, Miji, Kec. Prajurit Kulon, Kota Mojokerto, Jawa Timur 61322</span></span>
              </div>
            </div>
          </aside>

          <div className="relative p-6 laptop:p-8">
            <MessageSquareText className="contact-message-icon" aria-hidden="true" />
            <h2 className="text-xl font-bold text-navy">{isIndonesian ? 'Kirim Pesan' : 'Send Us A Message'}</h2>
            <form className="mt-5 grid gap-3 tablet:grid-cols-2" onSubmit={handleSubmit}>
              <label className="sr-only" htmlFor="contact-name">{isIndonesian ? 'Nama' : 'Name'}</label>
              <input id="contact-name" className={fieldClass} name="name" autoComplete="name" placeholder={isIndonesian ? 'Nama *' : 'Name *'} required value={form.name} onChange={update} />
              <label className="sr-only" htmlFor="contact-email">Email</label>
              <input id="contact-email" className={fieldClass} name="email" type="email" autoComplete="email" placeholder="Email *" required value={form.email} onChange={update} />
              <label className="sr-only" htmlFor="contact-phone">{isIndonesian ? 'Telepon' : 'Phone'}</label>
              <input id="contact-phone" className={fieldClass} name="phone" type="tel" autoComplete="tel" placeholder={isIndonesian ? 'Telepon' : 'Phone'} value={form.phone} onChange={update} />
              <label className="sr-only" htmlFor="contact-subject">{isIndonesian ? 'Subjek' : 'Subject'}</label>
              <input id="contact-subject" className={fieldClass} name="subject" placeholder={isIndonesian ? 'Subjek *' : 'Subject *'} required value={form.subject} onChange={update} />
              <label className="sr-only" htmlFor="contact-message">{isIndonesian ? 'Pesan' : 'Message'}</label>
              <textarea id="contact-message" className={`${fieldClass} min-h-32 resize-y tablet:col-span-2`} name="message" placeholder={isIndonesian ? 'Pesan *' : 'Message *'} required value={form.message} onChange={update} />
              <button className="contact-submit mt-2 inline-flex min-h-11 items-center justify-center gap-2 justify-self-start rounded-md bg-accent px-5 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:brightness-95" type="submit">{isIndonesian ? 'Kirim Pesan' : 'Send Message'}<Send size={15} aria-hidden="true" /></button>
            </form>
          </div>
        </section>

        <div className="contact-map mt-10 overflow-hidden rounded-lg border border-border shadow-card">
          <iframe title={isIndonesian ? 'Peta lokasi di Mojokerto' : 'Map location in Mojokerto'} src={mapEmbedUrl} loading="lazy" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen />
        </div>
      </Container>
    </div>
  )
}

export default ContactPage
