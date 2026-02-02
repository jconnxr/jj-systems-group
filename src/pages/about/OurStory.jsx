import Hero from '../../components/Hero'
import Section from '../../components/Section'
import CTA from '../../components/CTA'

export default function OurStory() {
  return (
    <>
      <Hero
        title="Our Story"
        subtitle="J&J Systems Group was founded to help organizations grow without losing control. We believe in partnership over transactions, clarity before scale, and systems that put people first."
      />
      <Section title="Who we are">
        <div className="prose prose-lg max-w-none text-brand-muted">
          <p className="leading-relaxed">
            We are not a freelance collective, a marketing agency, or a generic consulting firm. We are a systems and operations partner. Our work is built on integrity, stewardship, and long-term thinking.
          </p>
          <p className="mt-6 leading-relaxed">
            We identify constraints within businesses and markets that limit progress, then design and implement practical systems that improve efficiency, clarity, and quality of life for business owners and stakeholders.
          </p>
        </div>
      </Section>
      <Section title="What we believe" className="bg-brand-light/30">
        <ul className="space-y-4 max-w-2xl text-brand-muted">
          <li className="flex gap-3">
            <span className="text-brand-accent font-medium">People-first systems.</span>
            Systems should serve the people who use them, not the other way around.
          </li>
          <li className="flex gap-3">
            <span className="text-brand-accent font-medium">Partnership over transactions.</span>
            We work with clients as long-term partners, not one-off projects.
          </li>
          <li className="flex gap-3">
            <span className="text-brand-accent font-medium">Clarity before scale.</span>
            Getting clear on what works comes before growing it.
          </li>
          <li className="flex gap-3">
            <span className="text-brand-accent font-medium">Integrity and stewardship.</span>
            We take responsibility for the work we do and the outcomes we help create.
          </li>
        </ul>
      </Section>
      <CTA
        title="Want to learn more?"
        description="We’re happy to share more about how we work and whether we might be a fit."
        primaryText="Book a Meeting"
      />
    </>
  )
}
