import Hero from '../components/Hero'
import Section from '../components/Section'
import CTA from '../components/CTA'

export default function CaseStudies() {
  return (
    <>
      <Hero
        title="Case Studies"
        subtitle="Examples of how we’ve helped organizations improve their systems and operations. More coming soon."
      />
      <Section title="Coming soon">
        <p className="text-brand-muted leading-relaxed max-w-2xl">
          We’re building out case studies that show the kind of work we do and the outcomes we help create. In the meantime, we’re happy to share examples and references in conversation.
        </p>
        <p className="mt-4 text-brand-muted leading-relaxed max-w-2xl">
          If you’d like to hear about specific engagements or industries, the best way is to book a meeting and ask. We’re transparent about what we’ve done and what we can do.
        </p>
      </Section>
      <CTA
        title="Want to learn more?"
        description="We’re happy to share examples and references in a conversation."
        primaryText="Book a Meeting"
      />
    </>
  )
}
