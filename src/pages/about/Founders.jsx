import Hero from '../../components/Hero'
import Section from '../../components/Section'
import FounderCard from '../../components/FounderCard'
import CTA from '../../components/CTA'

import johnConner from '../../assets/founders/john-conner.jpg'
import jacobForeman from '../../assets/founders/jacob-foreman.jpg'

export default function Founders() {
  return (
    <>
      <Hero
        title="Founders"
        subtitle="John and Jacob are equals and collaborators. Together they bring complementary strengths in strategy, execution, and systems design."
      />
      <Section>
        <div className="grid sm:grid-cols-2 gap-8 max-w-4xl mx-auto">
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
      </Section>
      <CTA
        title="Let’s talk"
        description="We start every engagement with a conversation. Tell us about your business."
        primaryText="Book a Meeting"
      />
    </>
  )
}
