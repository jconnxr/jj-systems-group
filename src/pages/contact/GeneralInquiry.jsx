import { Link } from 'react-router-dom'
import Hero from '../../components/Hero'
import Section from '../../components/Section'

export default function GeneralInquiry() {
  return (
    <>
      <Hero
        title="General Inquiry"
        subtitle="Have a question or want to get in touch? Send us a message and we’ll respond as soon as we can."
      />
      <Section title="Get in touch">
        <div className="max-w-xl">
          <p className="text-brand-muted leading-relaxed mb-8">
            For general questions, partnership inquiries, or anything that doesn’t fit a scheduled call, use the form below. We typically respond within one to two business days.
          </p>
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-brand-dark mb-1">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full px-4 py-2 border border-brand-dark/20 rounded focus:outline-none focus:ring-2 focus:ring-brand-accent focus:border-transparent"
                placeholder="Your name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-brand-dark mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full px-4 py-2 border border-brand-dark/20 rounded focus:outline-none focus:ring-2 focus:ring-brand-accent focus:border-transparent"
                placeholder="you@example.com"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-brand-dark mb-1">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                className="w-full px-4 py-2 border border-brand-dark/20 rounded focus:outline-none focus:ring-2 focus:ring-brand-accent focus:border-transparent"
                placeholder="How can we help?"
              />
            </div>
            <button
              type="submit"
              className="px-6 py-3 text-base font-medium text-white bg-brand-accent rounded hover:opacity-90 transition-opacity"
            >
              Send message
            </button>
          </form>
          <p className="mt-6 text-sm text-brand-muted">
            Prefer to book a call? <Link to="/contact/book-a-meeting" className="text-brand-accent hover:underline">Book a meeting</Link> instead.
          </p>
        </div>
      </Section>
    </>
  )
}
