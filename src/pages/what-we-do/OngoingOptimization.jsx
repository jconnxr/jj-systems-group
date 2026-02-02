import Hero from '../../components/Hero'
import Section from '../../components/Section'
import CTA from '../../components/CTA'

export default function OngoingOptimization() {
  return (
    <>
      <Hero
        title="Ongoing Optimization"
        subtitle="We help you keep systems aligned with your goals through continuous improvement."
      />
      <Section title="What it means">
        <p className="text-brand-muted leading-relaxed max-w-2xl">
          Systems are not set-and-forget. As your business grows and changes, your systems need to evolve. Ongoing optimization is the practice of regularly reviewing, adjusting, and improving so that your operations stay aligned with your goals.
        </p>
        <p className="mt-4 text-brand-muted leading-relaxed max-w-2xl">
          We can support you with periodic reviews, metrics that matter, and a structured approach to improvement—so you’re not constantly firefighting and you’re not letting systems drift until they break.
        </p>
      </Section>
      <Section title="What we deliver" className="bg-brand-light/30">
        <ul className="space-y-3 text-brand-muted max-w-2xl">
          <li>Defined metrics and review cadence</li>
          <li>Structured improvement cycles</li>
          <li>Documentation and knowledge retention</li>
          <li>Partnership for long-term alignment</li>
        </ul>
      </Section>
      <CTA
        title="Interested in ongoing optimization?"
        primaryText="Book a Meeting"
      />
    </>
  )
}
