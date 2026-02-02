export default function FounderCard({
  name = 'Placeholder name',
  title = 'Placeholder title',
  bio = 'Placeholder bio.',
  image,
  imageAlt,
}) {
  const initials = name.split(' ').map((n) => n[0]).join('').slice(0, 2) || '?'

  return (
    <article className="bg-white border border-brand-dark/10 rounded-lg p-6 sm:p-8 shadow-sm">
      <div className="flex flex-col sm:flex-row gap-6">
        <div className="flex-shrink-0 w-24 h-24 sm:w-32 sm:h-32 rounded-full overflow-hidden bg-brand-light flex items-center justify-center">
          {image ? (
            <img
              src={image}
              alt={imageAlt ?? name}
              className="w-full h-full object-cover"
            />
          ) : (
            <span className="text-2xl sm:text-3xl font-semibold text-brand-muted">
              {initials}
            </span>
          )}
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="text-xl font-semibold text-brand-dark">{name}</h3>
          <p className="mt-1 text-sm text-brand-muted">{title}</p>
          <p className="mt-4 text-brand-muted leading-relaxed">{bio}</p>
        </div>
      </div>
    </article>
  )
}
