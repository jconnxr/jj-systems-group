import Hero from '../../components/Hero'
import Section from '../../components/Section'
import CTA from '../../components/CTA'

export default function LocalServiceBusinesses() {
  return (
    <>
      <Hero
        title="Local Service Businesses"
        subtitle="We partner with plumbers, HVAC companies, contractors, and other field-service operations that want to grow without losing control."
      />
      <Section title="Why we work with local service businesses">
        <p className="text-brand-muted leading-relaxed max-w-2xl">
          Local service businesses often face the same challenges: intake and lead flow that drop leads, scheduling and dispatch that create chaos, and visibility that doesn’t match the quality of the work. We help you design systems that capture every inquiry, route work effectively, and keep your team and your customers aligned.
        </p>
      </Section>
      <Section title="Common focus areas" className="bg-brand-light/30">
        <ul className="space-y-3 text-brand-muted max-w-2xl">
          <li>Intake and lead flow so no inquiry is lost</li>
          <li>Scheduling and dispatch systems that scale</li>
          <li>Visibility and presence in your market</li>
          <li>Ongoing optimization so systems stay aligned with growth</li>
        </ul>
      </Section>
      <CTA
        title="Ready to talk?"
        description="Tell us about your business and what you want to improve."
        primaryText="Book a Meeting"
      />
    </>
  )
}
