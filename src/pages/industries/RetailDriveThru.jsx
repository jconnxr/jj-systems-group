import Hero from '../../components/Hero'
import Section from '../../components/Section'
import CTA from '../../components/CTA'

export default function RetailDriveThru() {
  return (
    <>
      <Hero
        title="Retail & Drive-Thru"
        subtitle="We partner with quick-service, retail, and multi-location operations that need consistent systems across locations."
      />
      <Section title="Why we work with retail and drive-thru">
        <p className="text-brand-muted leading-relaxed max-w-2xl">
          Retail and drive-thru operations live on consistency—in service, in operations, and in how work gets done across locations. We help you design systems that support that consistency: intake and lead flow for catering or B2B, operational workflows, and visibility that keeps your brand clear in the market.
        </p>
      </Section>
      <Section title="Common focus areas" className="bg-brand-light/30">
        <ul className="space-y-3 text-brand-muted max-w-2xl">
          <li>Intake and lead flow for catering, B2B, or events</li>
          <li>Operational workflows that scale across locations</li>
          <li>Visibility and presence in your market</li>
          <li>Ongoing optimization so systems stay aligned</li>
        </ul>
      </Section>
      <CTA
        title="Ready to talk?"
        description="Tell us about your operations and what you want to improve."
        primaryText="Book a Meeting"
      />
    </>
  )
}
