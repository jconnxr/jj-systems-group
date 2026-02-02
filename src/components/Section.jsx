export default function Section({ title, subtitle, children, className = '', id }) {
  const showHeader = title != null || subtitle != null

  return (
    <section id={id} className={`py-16 sm:py-20 ${className}`}>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {showHeader && (
          <div className="max-w-2xl mb-12">
            {title != null && (
              <h2 className="text-2xl sm:text-3xl font-semibold text-brand-dark">
                {title}
              </h2>
            )}
            {subtitle != null && subtitle !== '' && (
              <p className="mt-4 text-lg text-brand-muted leading-relaxed">
                {subtitle}
              </p>
            )}
          </div>
        )}
        {children}
      </div>
    </section>
  )
}
