import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

import lockup from '../assets/logos/jj-lockup.png'
import mark from '../assets/logos/jj-mark.png'

const navItems = [
  { label: 'Home', path: '/' },
  {
    label: 'About',
    children: [
      { label: 'Our Story', path: '/about/our-story' },
      { label: 'Founders', path: '/about/founders' },
    ],
  },
  {
    label: 'What We Do',
    children: [
      { label: 'Overview', path: '/what-we-do' },
      { label: 'Systems Architecture', path: '/what-we-do/systems-architecture' },
      { label: 'Intake & Lead Flow', path: '/what-we-do/intake-lead-flow' },
      { label: 'Automation & Tooling', path: '/what-we-do/automation-tooling' },
      { label: 'Visibility & Presence', path: '/what-we-do/visibility-presence' },
      { label: 'Ongoing Optimization', path: '/what-we-do/ongoing-optimization' },
    ],
  },
  {
    label: 'Industries',
    children: [
      { label: 'Local Service Businesses', path: '/industries/local-service-businesses' },
      { label: 'Professional Services', path: '/industries/professional-services' },
      { label: 'Operations-Heavy Businesses', path: '/industries/operations-heavy-businesses' },
      { label: 'Franchise & Multi-Location', path: '/industries/franchise-multi-location' },
    ],
  },
  { label: 'Process', path: '/process' },
  { label: 'Case Studies', path: '/case-studies' },
  {
    label: 'Contact',
    children: [
      { label: 'Book a Meeting', path: '/contact/book-a-meeting' },
      { label: 'General Inquiry', path: '/contact/general-inquiry' },
    ],
  },
]

function isActive(path, location) {
  if (path === '/') return location.pathname === '/'
  return location.pathname.startsWith(path)
}

export default function Navbar() {
  const [openDropdown, setOpenDropdown] = useState(null)
  const [mobileOpen, setMobileOpen] = useState(false)
  const location = useLocation()

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-brand-light">
      <nav className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center shrink-0">
            <img
              src={lockup}
              alt="J&J Systems Group"
              className="hidden lg:block h-8 w-auto object-contain object-left"
            />
            <img
              src={mark}
              alt="J&J Systems Group"
              className="lg:hidden h-8 w-auto object-contain"
            />
          </Link>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navItems.map((item) =>
              item.children ? (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => setOpenDropdown(item.label)}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  <button
                    className={`px-3 py-2 text-sm rounded hover:bg-brand-light transition-colors ${
                      item.children.some((c) => isActive(c.path, location))
                        ? 'text-brand-accent font-medium'
                        : 'text-brand-muted hover:text-brand-dark'
                    }`}
                  >
                    {item.label}
                  </button>
                  {openDropdown === item.label && (
                    <div className="absolute top-full left-0 mt-0 w-56 py-2 bg-white border border-brand-light rounded-lg shadow-lg">
                      {item.children.map((child) => (
                        <Link
                          key={child.path}
                          to={child.path}
                          className={`block px-4 py-2 text-sm hover:bg-brand-light transition-colors ${
                            isActive(child.path, location)
                              ? 'text-brand-accent font-medium'
                              : 'text-brand-muted'
                          }`}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`px-3 py-2 text-sm rounded hover:bg-brand-light transition-colors ${
                    isActive(item.path, location)
                      ? 'text-brand-accent font-medium'
                      : 'text-brand-muted hover:text-brand-dark'
                  }`}
                >
                  {item.label}
                </Link>
              )
            )}
            <Link
              to="/contact/book-a-meeting"
              className="ml-2 px-4 py-2 text-sm font-medium text-white bg-brand-accent rounded hover:opacity-90 transition-opacity"
            >
              Book a Meeting
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            className="lg:hidden p-2 text-brand-muted hover:text-brand-dark"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile nav */}
        {mobileOpen && (
          <div className="lg:hidden py-4 border-t border-brand-light">
            <div className="flex flex-col gap-1">
              {navItems.map((item) =>
                item.children ? (
                  <div key={item.label} className="pt-2">
                    <span className="block px-3 py-1 text-xs font-medium text-brand-muted uppercase tracking-wider">
                      {item.label}
                    </span>
                    {item.children.map((child) => (
                      <Link
                        key={child.path}
                        to={child.path}
                        onClick={() => setMobileOpen(false)}
                        className={`block px-3 py-2 text-sm rounded ${
                          isActive(child.path, location)
                            ? 'text-brand-accent font-medium bg-brand-light'
                            : 'text-brand-muted'
                        }`}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                ) : (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={() => setMobileOpen(false)}
                    className={`px-3 py-2 text-sm rounded ${
                      isActive(item.path, location)
                        ? 'text-brand-accent font-medium bg-brand-light'
                        : 'text-brand-muted'
                    }`}
                  >
                    {item.label}
                  </Link>
                )
              )}
              <Link
                to="/contact/book-a-meeting"
                onClick={() => setMobileOpen(false)}
                className="mt-2 mx-3 py-2 text-center text-sm font-medium text-white bg-brand-accent rounded"
              >
                Book a Meeting
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
