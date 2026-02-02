import Hero from '../../components/Hero'
import Section from '../../components/Section'
import CTA from '../../components/CTA'

export default function VisibilityPresence() {
  return (
    <>
      <Hero
        title="Visibility & Presence"
        subtitle="We help you make sure your value is clear to the right people at the right time."
      />
      <Section title="What it means">
        <p className="text-brand-muted leading-relaxed max-w-2xl">
          Visibility and presence are about being found and understood by the people who need what you offer. This is not hype or vanity metrics—it’s clarity about who you serve, what you do well, and how you show up in the right places.
        </p>
        <p className="mt-4 text-brand-muted leading-relaxed max-w-2xl">
          We work with you to close the gap between the value you deliver and how that value is communicated and discovered. That can include positioning, messaging, and the systems that support consistent presence.
        </p>
      </Section>
      <Section title="What we deliver" className="bg-brand-light/30">
        <ul className="space-y-3 text-brand-muted max-w-2xl">
          <li>Clarity on your positioning and messaging</li>
          <li>Systems for consistent presence (e.g., content, outreach, referrals)</li>
          <li>Alignment between what you do and how you’re seen</li>
          <li>Practical, sustainable approaches—no hype</li>
        </ul>
      </Section>
      <CTA
        title="Want to improve your visibility and presence?"
        primaryText="Book a Meeting"
      />
    </>
  )
}
