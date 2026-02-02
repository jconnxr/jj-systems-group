import { Link } from 'react-router-dom'
import Hero from '../../components/Hero'
import Section from '../../components/Section'

export default function BookMeeting() {
  return (
    <>
      <Hero
        title="Book a Meeting"
        subtitle="We start with a conversation. Tell us about your business and what you want to improve."
      />
      <Section title="Schedule a call">
        <div className="max-w-xl">
          <p className="text-brand-muted leading-relaxed mb-8">
            Use the link below to choose a time that works for you. We’ll send a calendar invite and, if helpful, a short questionnaire so we can make the most of our time together.
          </p>
          <a
            href="https://calendly.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex justify-center px-6 py-3 text-base font-medium text-white bg-brand-accent rounded hover:opacity-90 transition-opacity"
          >
            Open scheduling link
          </a>
          <p className="mt-6 text-sm text-brand-muted">
            Don’t see a time that works? <Link to="/contact/general-inquiry" className="text-brand-accent hover:underline">Send us a message</Link> and we’ll find another option.
          </p>
        </div>
      </Section>
    </>
  )
}
