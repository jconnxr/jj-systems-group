import Hero from '../../components/Hero'
import Section from '../../components/Section'
import CTA from '../../components/CTA'

export default function FranchiseMultiLocation() {
  return (
    <>
      <Hero
        title="Franchise & Multi-Location"
        subtitle="We partner with brands that have multiple locations and need consistent systems that scale without losing control."
      />
      <Section title="Why we work with franchise and multi-location">
        <p className="text-brand-muted leading-relaxed max-w-2xl">
          Franchise and multi-location brands need systems that work the same way everywhere—intake, operations, visibility, and optimization. We help you design and implement systems that support consistency across locations while allowing for local context where it matters.
        </p>
      </Section>
      <Section title="Common focus areas" className="bg-brand-light/30">
        <ul className="space-y-3 text-brand-muted max-w-2xl">
          <li>Systems architecture that scales across locations</li>
          <li>Intake and lead flow at the brand and location level</li>
          <li>Visibility and presence that supports the brand</li>
          <li>Ongoing optimization and support for franchisees</li>
        </ul>
      </Section>
      <CTA
        title="Ready to talk?"
        description="Tell us about your brand and what you want to improve."
        primaryText="Book a Meeting"
      />
    </>
  )
}
