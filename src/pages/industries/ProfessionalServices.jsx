import Hero from '../../components/Hero'
import Section from '../../components/Section'
import CTA from '../../components/CTA'

export default function ProfessionalServices() {
  return (
    <>
      <Hero
        title="Professional Services"
        subtitle="We partner with law firms, accounting practices, consulting firms, and other professional services that want clarity and systems that scale."
      />
      <Section title="Why we work with professional services">
        <p className="text-brand-muted leading-relaxed max-w-2xl">
          Professional services firms often have strong expertise but struggle with intake, project management, and visibility. We help you design systems that capture leads, manage engagements, and communicate your value clearly—without adding bureaucracy or losing the personal touch that defines your practice.
        </p>
      </Section>
      <Section title="Common focus areas" className="bg-brand-light/30">
        <ul className="space-y-3 text-brand-muted max-w-2xl">
          <li>Intake and lead flow for new clients</li>
          <li>Project and engagement management</li>
          <li>Visibility and positioning in your market</li>
          <li>Automation and tooling that fit professional workflows</li>
        </ul>
      </Section>
      <CTA
        title="Ready to talk?"
        description="Tell us about your practice and what you want to improve."
        primaryText="Book a Meeting"
      />
    </>
  )
}
