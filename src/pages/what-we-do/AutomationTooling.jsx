import Hero from '../../components/Hero'
import Section from '../../components/Section'
import CTA from '../../components/CTA'

export default function AutomationTooling() {
  return (
    <>
      <Hero
        title="Automation & Tooling"
        subtitle="We help you reduce manual work and keep processes consistent with the right tools and workflows."
      />
      <Section title="What it means">
        <p className="text-brand-muted leading-relaxed max-w-2xl">
          Automation and tooling are about using technology to do repetitive work reliably and to keep your team aligned. The goal is not automation for its own sake—it’s freeing people to focus on work that requires judgment and relationship.
        </p>
        <p className="mt-4 text-brand-muted leading-relaxed max-w-2xl">
          We help you identify where automation adds value, select tools that fit your context, and implement workflows that your team can actually use and maintain.
        </p>
      </Section>
      <Section title="What we deliver" className="bg-brand-light/30">
        <ul className="space-y-3 text-brand-muted max-w-2xl">
          <li>Assessment of where automation will have the most impact</li>
          <li>Tool selection and implementation support</li>
          <li>Workflow design that reduces manual steps</li>
          <li>Documentation and training so your team can sustain it</li>
        </ul>
      </Section>
      <CTA
        title="Ready to improve your automation and tooling?"
        primaryText="Book a Meeting"
      />
    </>
  )
}
