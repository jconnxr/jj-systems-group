import Hero from '../components/Hero'
import Section from '../components/Section'
import CTA from '../components/CTA'
import FounderCard from '../components/FounderCard'
import IndustryCard from '../components/IndustryCard'
import { Link } from 'react-router-dom'

import johnConner from '../assets/founders/john-conner.jpg'
import jacobForeman from '../assets/founders/jacob-foreman.jpg'

export default function Home() {
  return (
    <>
      <Hero
        title="We partner with organizations to identify what's holding them back and build systems that move them forward."
        subtitle="J&J Systems Group is a systems and operations partner helping organizations create clarity, efficiency, and sustainable growth—without losing control."
        ctaText="Book a Strategy Call"
        ctaHref="/contact/book-a-meeting"
      />
      <Section
        title="What we do"
        subtitle="We work as a systems-first partner. We focus on the constraints and opportunities in your business, then design and implement practical systems that improve clarity, efficiency, and sustainable growth."
      >
        <p className="text-brand-muted leading-relaxed max-w-2xl">
          We do not apply generic playbooks. We start with your context, your goals, and the gaps that limit progress—then we build systems that fit and that you can sustain.
        </p>
      </Section>
      <Section
        title="Who we work with"
        subtitle="We partner with organizations that are ready to invest in better systems. Our experience spans several sectors where clarity and operations matter most."
        className="bg-brand-light/30"
      >
        <div className="grid sm:grid-cols-2 gap-6">
          <IndustryCard
            title="Local Service Businesses"
            description="Plumbers, HVAC, contractors, and other field-service operations."
            href="/industries/local-service-businesses"
          />
          <IndustryCard
            title="Professional Services"
            description="Law firms, accounting, consulting, and advisory practices."
            href="/industries/professional-services"
          />
          <IndustryCard
            title="Operations-Heavy Businesses"
            description="Manufacturing, logistics, distribution, and field operations where systems must scale."
            href="/industries/operations-heavy-businesses"
          />
          <IndustryCard
            title="Franchise & Multi-Location"
            description="Brands with multiple locations that need consistent systems."
            href="/industries/franchise-multi-location"
          />
        </div>
      </Section>
      <Section
        title="How we work"
        subtitle="We follow a clear process: understand your situation, design systems that fit, build them with you, and support you over time."
      >
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-4xl">
          <div>
            <h3 className="text-lg font-semibold text-brand-dark">Diagnose</h3>
            <p className="mt-2 text-brand-muted text-sm leading-relaxed">
              Understand your business, constraints, and goals.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-brand-dark">Design</h3>
            <p className="mt-2 text-brand-muted text-sm leading-relaxed">
              Shape systems that fit your context.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-brand-dark">Build</h3>
            <p className="mt-2 text-brand-muted text-sm leading-relaxed">
              Implement with you so it sticks.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-brand-dark">Support</h3>
            <p className="mt-2 text-brand-muted text-sm leading-relaxed">
              Partner for the long term so systems stay aligned.
            </p>
          </div>
        </div>
        <div className="mt-10">
          <Link
            to="/process"
            className="text-brand-accent font-medium hover:underline"
          >
            See our process →
          </Link>
        </div>
      </Section>
      <Section
        title="Founders"
        subtitle="John and Jacob founded J&J Systems Group as equals and collaborators. Together they bring complementary strengths in strategy, execution, and systems design."
        className="bg-brand-light/30"
      >
        <div className="grid sm:grid-cols-2 gap-8 max-w-4xl">
          <FounderCard
            name="John Conner"
            title="Co-Founder"
            bio="Focuses on understanding the story behind businesses, identifying what they do exceptionally well, and closing the gap between value, visibility, and execution. People-first, partnership-oriented, with a blend of strategy and execution."
            image={johnConner}
            imageAlt="John Conner"
          />
          <FounderCard
            name="Jacob Foreman"
            title="Co-Founder"
            bio="Focuses on structure, execution, and operational sustainability. Translates strategy into reliable systems and aligns tools, workflows, and teams for long-term clarity."
            image={jacobForeman}
            imageAlt="Jacob Foreman"
          />
        </div>
        <div className="mt-8 text-center">
          <Link
            to="/about/founders"
            className="text-brand-accent font-medium hover:underline"
          >
            Meet the founders →
          </Link>
        </div>
      </Section>
      <CTA
        title="Ready to talk?"
        description="We start with a conversation. Tell us about your business and what you want to improve."
        primaryText="Book a Strategy Call"
        primaryHref="/contact/book-a-meeting"
        secondaryText="General Inquiry"
        secondaryHref="/contact/general-inquiry"
      />
    </>
  )
}
