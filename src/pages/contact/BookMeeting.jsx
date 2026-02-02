import { useState } from 'react'
import { Link } from 'react-router-dom'
import { CRM_LEADS_URL } from '../../constants'

// After successful CRM submission, user is sent to Calendly to pick a time.
const CALENDLY_REDIRECT_URL = 'https://calendly.com/jnjsystems/working-conversation'

export default function BookMeeting() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    business_name: '',
    notes: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState(null)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    setError(null)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError(null)
    const { name, email, phone, business_name, notes } = formData
    if (!name?.trim() || !email?.trim() || !business_name?.trim() || !notes?.trim()) return

    setIsSubmitting(true)

    try {
      const res = await fetch(CRM_LEADS_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: name.trim(),
          email: email.trim(),
          phone: phone?.trim() || undefined,
          business_name: business_name.trim(),
          notes: notes.trim(),
          source: 'main-site',
        }),
      })

      const data = await res.json().catch(() => ({}))

      // Only redirect to Calendly when the CRM confirms the lead was created.
      if (data.success === true) {
        window.location.href = CALENDLY_REDIRECT_URL
        return
      }

      setError(data.message || 'Something went wrong. Please try again.')
    } catch (err) {
      setError('We couldn’t send your details right now. Please try again or use the link below to reach out.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <>
      <section className="py-16 sm:py-24 bg-brand-light/50">
        <div className="max-w-xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl font-semibold text-brand-dark leading-tight">
            Let's have a working conversation.
          </h1>
          <p className="mt-6 text-lg text-brand-muted leading-relaxed">
            This is a chance to walk through your situation, ask questions, and determine what makes sense to do next.
          </p>
        </div>
      </section>

      <section className="py-12 sm:py-16">
        <div className="max-w-xl mx-auto px-4 sm:px-6 lg:px-8">
          <form onSubmit={handleSubmit} className="space-y-8">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-brand-dark mb-1">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-brand-dark/20 rounded focus:outline-none focus:ring-2 focus:ring-brand-accent focus:border-transparent text-brand-dark"
                placeholder="Your name"
              />
            </div>

            <div>
              <label htmlFor="business_name" className="block text-sm font-medium text-brand-dark mb-1">
                Company name
              </label>
              <input
                type="text"
                id="business_name"
                name="business_name"
                value={formData.business_name}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-brand-dark/20 rounded focus:outline-none focus:ring-2 focus:ring-brand-accent focus:border-transparent text-brand-dark"
                placeholder="Your company"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-brand-dark mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-brand-dark/20 rounded focus:outline-none focus:ring-2 focus:ring-brand-accent focus:border-transparent text-brand-dark"
                placeholder="you@company.com"
              />
            </div>

            <div>
              <label htmlFor="notes" className="block text-sm font-medium text-brand-dark mb-1">
                Reason for the conversation
              </label>
              <textarea
                id="notes"
                name="notes"
                value={formData.notes}
                onChange={handleChange}
                rows={5}
                className="w-full px-4 py-3 border border-brand-dark/20 rounded focus:outline-none focus:ring-2 focus:ring-brand-accent focus:border-transparent text-brand-dark resize-y"
                placeholder="What would you like to cover?"
              />
              <p className="mt-2 text-sm text-brand-muted">
                This helps us come into the conversation prepared.
              </p>
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-brand-dark mb-1">
                Phone number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-brand-dark/20 rounded focus:outline-none focus:ring-2 focus:ring-brand-accent focus:border-transparent text-brand-dark"
                placeholder="Optional"
              />
            </div>

            {error && (
              <div className="p-4 rounded border border-red-200 bg-red-50 text-red-800 text-sm">
                {error}
              </div>
            )}

            <div className="pt-4">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full sm:w-auto px-8 py-3 text-base font-medium text-white bg-brand-accent rounded hover:opacity-90 transition-opacity disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Sending…' : 'Continue to scheduling'}
              </button>
              <p className="mt-3 text-sm text-brand-muted">
                You'll be guided step-by-step. No commitment required.
              </p>
            </div>
          </form>
        </div>
      </section>

      <section className="py-8 border-t border-brand-dark/10">
        <div className="max-w-xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-sm text-brand-muted">
            Prefer to reach out first? <Link to="/contact/general-inquiry" className="text-brand-accent hover:underline">Send a message</Link> and we'll respond.
          </p>
        </div>
      </section>
    </>
  )
}
