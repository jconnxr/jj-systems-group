import Hero from '../../components/Hero'
import Section from '../../components/Section'
import CTA from '../../components/CTA'

export default function IntakeLeadFlow() {
  return (
    <>
      <Hero
        title="Intake & Lead Flow"
        subtitle="We help you capture inquiries and move opportunities through your business without losing them."
      />
      <Section title="What it means">
        <p className="text-brand-muted leading-relaxed max-w-2xl">
          Intake and lead flow is about how inquiries, leads, and opportunities enter your business and move through it. When this flow is broken or unclear, you lose opportunities, waste time, and frustrate both your team and your prospects.
        </p>
        <p className="mt-4 text-brand-muted leading-relaxed max-w-2xl">
          We design and implement intake processes that capture every inquiry, route it to the right person, and move it through your pipeline with clarity and accountability.
        </p>
      </Section>
      <Section title="What we deliver" className="bg-brand-light/30">
        <ul className="space-y-3 text-brand-muted max-w-2xl">
          <li>Defined intake channels and handoff points</li>
          <li>Clear response and follow-up expectations</li>
          <li>Pipeline visibility so nothing falls through the cracks</li>
          <li>Integration with your existing tools where possible</li>
        </ul>
      </Section>
      <CTA
        title="Want to improve your intake and lead flow?"
        primaryText="Book a Meeting"
      />
    </>
  )
}
