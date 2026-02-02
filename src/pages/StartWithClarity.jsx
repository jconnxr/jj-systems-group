import Hero from '../components/Hero'
import Section from '../components/Section'
import { START_WITH_CLARITY_URL } from '../constants'

export default function StartWithClarity() {
  return (
    <>
      <Hero
        title="Start With Clarity"
        subtitle="This is a guided starting point designed for businesses that need direction — not more noise. Before committing to systems, tools, or complexity, this process helps you understand what your business actually needs."
      />
      <Section title="What this process does">
        <ul className="space-y-3 text-brand-muted max-w-2xl leading-relaxed">
          <li>Guides you through a short series of structured questions</li>
          <li>Helps classify your business and website needs</li>
          <li>Produces a clear, structured foundation you can act on</li>
        </ul>
      </Section>
      <Section title="What this process is NOT" className="bg-brand-light/30">
        <ul className="space-y-3 text-brand-muted max-w-2xl leading-relaxed">
          <li>It is not a DIY website builder</li>
          <li>It is not a replacement for systems work</li>
          <li>It is not a commitment to services</li>
        </ul>
      </Section>
      <Section>
        <div className="max-w-xl">
          <p className="text-sm text-brand-muted mb-4">
            (You'll be guided step-by-step. No commitment required.)
          </p>
          <a
            href={START_WITH_CLARITY_URL}
            className="inline-flex justify-center px-6 py-3 text-base font-medium text-white bg-brand-accent rounded hover:opacity-90 transition-opacity"
          >
            Continue to the clarity process
          </a>
        </div>
      </Section>
    </>
  )
}
