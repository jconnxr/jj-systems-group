import { Link } from 'react-router-dom'

export default function CTA({
  title = 'Placeholder CTA title',
  description,
  primaryText = 'Placeholder CTA',
  primaryHref = '/contact/book-a-meeting',
  secondaryText,
  secondaryHref,
}) {
  return (
    <section className="py-16 sm:py-20 bg-brand-accent text-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-2xl sm:text-3xl font-semibold">{title}</h2>
        {description && (
          <p className="mt-4 text-lg text-white/90 leading-relaxed">{description}</p>
        )}
        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to={primaryHref}
            className="inline-flex justify-center px-6 py-3 text-base font-medium text-brand-accent bg-white rounded hover:bg-brand-light transition-colors"
          >
            {primaryText}
          </Link>
          {secondaryText && (
            <Link
              to={secondaryHref}
              className="inline-flex justify-center px-6 py-3 text-base font-medium text-white border border-white/60 rounded hover:bg-white/10 transition-colors"
            >
              {secondaryText}
            </Link>
          )}
        </div>
      </div>
    </section>
  )
}
