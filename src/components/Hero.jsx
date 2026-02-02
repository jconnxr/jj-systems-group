import { Link } from 'react-router-dom'

export default function Hero({
  title = 'Placeholder title',
  subtitle,
  ctaText,
  ctaHref = '/contact/book-a-meeting',
  secondaryCtaText,
  secondaryCtaHref,
}) {
  const ctaIsExternal = ctaHref?.startsWith('http')
  return (
    <section className="py-16 sm:py-24 bg-brand-light/50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-brand-dark leading-tight">
          {title}
        </h1>
        {subtitle ? (
          <p className="mt-6 text-lg sm:text-xl text-brand-muted leading-relaxed">
            {subtitle}
          </p>
        ) : null}
        {(ctaText || secondaryCtaText) && (
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            {ctaText && (ctaIsExternal ? (
              <a
                href={ctaHref}
                className="inline-flex justify-center px-6 py-3 text-base font-medium text-white bg-brand-accent rounded hover:opacity-90 transition-opacity"
              >
                {ctaText}
              </a>
            ) : (
              <Link
                to={ctaHref}
                className="inline-flex justify-center px-6 py-3 text-base font-medium text-white bg-brand-accent rounded hover:opacity-90 transition-opacity"
              >
                {ctaText}
              </Link>
            ))}
            {secondaryCtaText && (
              <Link
                to={secondaryCtaHref}
                className="inline-flex justify-center px-6 py-3 text-base font-medium text-brand-dark bg-white border border-brand-dark/20 rounded hover:bg-brand-light transition-colors"
              >
                {secondaryCtaText}
              </Link>
            )}
          </div>
        )}
      </div>
    </section>
  )
}
