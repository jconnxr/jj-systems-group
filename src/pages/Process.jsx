import Hero from '../components/Hero'
import Section from '../components/Section'
import CTA from '../components/CTA'

const steps = [
  {
    title: 'Conversation',
    description: 'We start with a conversation. We want to understand your business, your constraints, and what you want to improve. No pitch, no pressure—just clarity on whether we might be a fit.',
  },
  {
    title: 'Discovery',
    description: 'If it makes sense to move forward, we go deeper. We map your current systems, identify constraints and gaps, and clarify your goals. We don’t assume—we learn.',
  },
  {
    title: 'Design',
    description: 'We design systems that fit your context. That might mean intake and lead flow, systems architecture, automation and tooling, visibility and presence, or ongoing optimization—or a combination.',
  },
  {
    title: 'Implementation',
    description: 'We implement with you. We don’t hand off a deck and disappear. We work alongside you to build, test, and refine so the systems stick and your team can sustain them.',
  },
  {
    title: 'Partnership',
    description: 'We’re built for long-term relationships. Many of our engagements include ongoing optimization and support so your systems stay aligned with your goals as you grow.',
  },
]

export default function Process() {
  return (
    <>
      <Hero
        title="Our process"
        subtitle="We start with a conversation, then move through discovery, design, implementation, and ongoing partnership. No hype, no one-size-fits-all—just clarity and practical systems."
      />
      <Section title="How we work">
        <div className="space-y-10 max-w-2xl">
          {steps.map((step, index) => (
            <div key={step.title} className="flex gap-6">
              <span className="flex-shrink-0 w-10 h-10 rounded-full bg-brand-accent text-white flex items-center justify-center text-sm font-semibold">
                {index + 1}
              </span>
              <div>
                <h3 className="text-lg font-semibold text-brand-dark">{step.title}</h3>
                <p className="mt-2 text-brand-muted leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>
      <Section title="What to expect" className="bg-brand-light/30">
        <p className="text-brand-muted leading-relaxed max-w-2xl">
          You can expect clear communication, practical recommendations, and work that fits your context. We don’t overpromise. We don’t use buzzwords. We write and speak like trusted partners—calm, clear, and focused on what actually matters for your business.
        </p>
      </Section>
      <CTA
        title="Ready to start?"
        description="The first step is a conversation. Tell us about your business."
        primaryText="Book a Meeting"
      />
    </>
  )
}
