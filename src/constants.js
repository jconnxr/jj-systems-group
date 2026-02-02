// Booking flow: on-site form → CRM → Calendly. All booking CTAs point to /contact/book-a-meeting.

// CRM backend (Railway production). POST /leads, GET /health.
export const CRM_BASE_URL = 'https://jnj-native-crm-production-6dd4.up.railway.app'
export const CRM_LEADS_URL = `${CRM_BASE_URL}/leads`

// Start With Clarity — guided discovery experience (same tab).
export const START_WITH_CLARITY_URL = 'https://business-website-builder-nu.vercel.app/'
