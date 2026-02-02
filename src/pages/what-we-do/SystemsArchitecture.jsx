import Hero from '../../components/Hero'
import Section from '../../components/Section'
import CTA from '../../components/CTA'

export default function SystemsArchitecture() {
  return (
    <>
      <Hero
        title="Systems Architecture"
        subtitle="We design and structure core business systems so they scale without breaking."
      />
      <Section title="What it means">
        <p className="text-brand-muted leading-relaxed max-w-2xl">
          Systems architecture is the foundation of how work gets done. It includes how information flows, how decisions are made, and how roles and responsibilities are defined. When it’s clear and well-designed, growth is manageable. When it’s unclear or brittle, growth creates chaos.
        </p>
        <p className="mt-4 text-brand-muted leading-relaxed max-w-2xl">
          We work with you to map your current systems, identify constraints and gaps, and design structures that support clarity, accountability, and sustainable growth.
        </p>
      </Section>
      <Section title="What we deliver" className="bg-brand-light/30">
        <ul className="space-y-3 text-brand-muted max-w-2xl">
          <li>Documented system maps and process flows</li>
          <li>Clear role and responsibility definitions</li>
          <li>Structures that support scaling without losing control</li>
          <li>Recommendations for tools and workflows that fit your context</li>
        </ul>
      </Section>
      <CTA
        title="Interested in systems architecture?"
        primaryText="Book a Meeting"
      />
    </>
  )
}
