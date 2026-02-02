import { Link } from 'react-router-dom'

export default function IndustryCard({
  title = 'Placeholder industry',
  description = 'Placeholder description.',
  href = '#',
}) {
  return (
    <Link
      to={href}
      className="block p-6 sm:p-8 bg-brand-light/50 border border-brand-dark/5 rounded-lg hover:border-brand-accent/20 hover:bg-brand-light transition-all group"
    >
      <h3 className="text-lg font-semibold text-brand-dark group-hover:text-brand-accent transition-colors">
        {title}
      </h3>
      <p className="mt-2 text-brand-muted text-sm leading-relaxed">{description}</p>
      <span className="mt-3 inline-flex items-center text-sm font-medium text-brand-accent">
        Learn more
        <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </span>
    </Link>
  )
}
