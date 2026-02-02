import Hero from '../../components/Hero'
import Section from '../../components/Section'
import CapabilityCard from '../../components/CapabilityCard'
import CTA from '../../components/CTA'

export default function Overview() {
  return (
    <>
      <Hero
        title="What we do"
        subtitle="We identify constraints within businesses and markets that limit progress, then design and implement practical systems that improve efficiency, clarity, and quality of life for business owners and stakeholders."
      />
      <Section
        title="Our capabilities"
        subtitle="Our work spans the systems that connect strategy to execution. Each area can be addressed on its own or as part of a broader engagement."
      >
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <CapabilityCard
            title="Systems Architecture"
            description="Structure and design of core business systems so they scale without breaking."
            href="/what-we-do/systems-architecture"
          />
          <CapabilityCard
            title="Intake & Lead Flow"
            description="How inquiries and opportunities move through your business without getting lost."
            href="/what-we-do/intake-lead-flow"
          />
          <CapabilityCard
            title="Automation & Tooling"
            description="Tools and workflows that reduce manual work and keep processes consistent."
            href="/what-we-do/automation-tooling"
          />
          <CapabilityCard
            title="Visibility & Presence"
            description="Making sure your value is clear to the right people at the right time."
            href="/what-we-do/visibility-presence"
          />
          <CapabilityCard
            title="Ongoing Optimization"
            description="Continuous improvement so systems stay aligned with your goals."
            href="/what-we-do/ongoing-optimization"
          />
        </div>
      </Section>
      <Section title="How we approach work" className="bg-brand-light/30">
        <p className="text-brand-muted leading-relaxed max-w-2xl">
          We start by understanding your business, your constraints, and your goals. We do not apply generic playbooks. We design systems that fit your context and that you can sustain over time.
        </p>
        <p className="mt-4 text-brand-muted leading-relaxed max-w-2xl">
          Our engagements can be focused on a single area—for example, intake and lead flow—or can span multiple systems. We work as a partner, not a vendor, and we are built for long-term relationships.
        </p>
      </Section>
      <CTA
        title="Ready to talk?"
        description="Tell us about your business and what you want to improve."
        primaryText="Book a Meeting"
      />
    </>
  )
}
