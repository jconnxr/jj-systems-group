import Hero from '../../components/Hero'
import Section from '../../components/Section'
import CTA from '../../components/CTA'

export default function OperationsHeavyBusinesses() {
  return (
    <>
      <Hero
        title="Operations-Heavy Businesses"
        subtitle="We partner with organizations where operations are central—manufacturing, logistics, distribution, field operations, and similar—that want clarity and systems that scale without losing control."
      />
      <Section title="Industry overview">
        <p className="text-brand-muted leading-relaxed max-w-2xl">
          Operations-heavy businesses depend on how work gets done: workflows, handoffs, visibility, and consistency. When systems are unclear or brittle, growth creates chaos. We work with organizations that are ready to invest in better systems so operations support—rather than limit—their goals.
        </p>
      </Section>
      <Section title="Common challenges" className="bg-brand-light/30">
        <ul className="space-y-3 text-brand-muted max-w-2xl">
          <li>Workflows and handoffs that break under load or change</li>
          <li>Lack of visibility into what’s happening where and when</li>
          <li>Inconsistent processes across teams or locations</li>
          <li>Systems that don’t scale as the business grows</li>
          <li>Difficulty sustaining improvements over time</li>
        </ul>
      </Section>
      <Section title="How we help">
        <p className="text-brand-muted leading-relaxed max-w-2xl">
          We start by understanding your operations, your constraints, and your goals. We map current systems, identify gaps and bottlenecks, and design practical systems that fit your context. We focus on clarity, accountability, and structure—so work flows reliably and your team can sustain it.
        </p>
        <ul className="mt-6 space-y-3 text-brand-muted max-w-2xl">
          <li>Systems architecture that supports operational clarity</li>
          <li>Intake and lead flow so inquiries and work don’t get lost</li>
          <li>Workflow design that scales with your operation</li>
          <li>Ongoing optimization so systems stay aligned with your goals</li>
        </ul>
      </Section>
      <Section title="Outcomes" className="bg-brand-light/30">
        <p className="text-brand-muted leading-relaxed max-w-2xl">
          Our engagements are built to deliver clarity and sustainable systems. You can expect clearer workflows, better visibility into operations, and structures that support growth without losing control. We work as a partner—aligned with your long-term success, not a one-off project.
        </p>
      </Section>
      <CTA
        title="Ready to talk?"
        description="Tell us about your operations and what you want to improve."
        primaryText="Book a Meeting"
      />
    </>
  )
}
