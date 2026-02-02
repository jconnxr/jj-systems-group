import { Link } from 'react-router-dom'

import mark from '../assets/logos/jj-mark.png'

const footerLinks = [
  {
    heading: 'About',
    links: [
      { label: 'Our Story', path: '/about/our-story' },
      { label: 'Founders', path: '/about/founders' },
    ],
  },
  {
    heading: 'What We Do',
    links: [
      { label: 'Overview', path: '/what-we-do' },
      { label: 'Process', path: '/process' },
      { label: 'Case Studies', path: '/case-studies' },
    ],
  },
  {
    heading: 'Contact',
    links: [
      { label: 'Book a Meeting', path: '/contact/book-a-meeting' },
      { label: 'General Inquiry', path: '/contact/general-inquiry' },
    ],
  },
]

export default function Footer() {
  return (
    <footer className="bg-brand-light border-t border-brand-dark/10">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-1">
            <Link to="/" className="inline-block">
              <img
                src={mark}
                alt="J&J Systems Group"
                className="h-8 w-auto object-contain object-left"
              />
            </Link>
            <p className="mt-2 text-sm text-brand-muted max-w-xs">
              A systems and operations partner for organizations that want to grow without losing control.
            </p>
          </div>
          {footerLinks.map((group) => (
            <div key={group.heading}>
              <h3 className="text-sm font-semibold text-brand-dark uppercase tracking-wider">
                {group.heading}
              </h3>
              <ul className="mt-3 space-y-2">
                {group.links.map((link) => (
                  <li key={link.path}>
                    <Link
                      to={link.path}
                      className="text-sm text-brand-muted hover:text-brand-accent transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-10 pt-8 border-t border-brand-dark/10 text-sm text-brand-muted">
          &copy; {new Date().getFullYear()} J&J Systems Group. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
