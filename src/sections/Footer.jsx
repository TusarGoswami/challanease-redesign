import { ArrowUp } from 'lucide-react'

const footerLinks = [
  {
    heading: 'Product',
    links: [
      { label: 'How it works', href: '#how-it-works' },
      { label: 'Services', href: '#product-showcase' },
    ],
  },
  {
    heading: 'Support',
    links: [
      { label: 'Help', href: '#clarity' },
      { label: 'Accessibility', href: '#' },
    ],
  },
  {
    heading: 'Legal',
    links: [
      { label: 'Privacy', href: '#' },
      { label: 'Disclaimer', href: '#' },
    ],
  },
]

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  return (
    <footer className="border-t border-navy-100 bg-white" role="contentinfo">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="col-span-2 sm:col-span-1">
            <a
              href="#"
              className="flex items-center gap-2 text-navy-900 font-bold text-lg tracking-tight mb-3"
              aria-label="ChallanEase"
            >
              <div className="w-7 h-7 rounded-md bg-navy-900 flex items-center justify-center" aria-hidden="true">
                <svg width="14" height="14" viewBox="0 0 32 32" fill="none">
                  <path d="M6 16.5C6 11.25 10.25 7 15.5 7C18.1 7 20.45 8.05 22.15 9.75L19.65 12.25C18.55 11.15 17.1 10.5 15.5 10.5C12.19 10.5 9.5 13.19 9.5 16.5C9.5 19.81 12.19 22.5 15.5 22.5C17.1 22.5 18.55 21.85 19.65 20.75L22.15 23.25C20.45 24.95 18.1 26 15.5 26C10.25 26 6 21.75 6 16.5Z" fill="#38bdf8"/>
                  <circle cx="23" cy="16.5" r="2.5" fill="#22d3ee"/>
                </svg>
              </div>
              ChallanEase
            </a>
            <p className="text-sm text-navy-500 leading-relaxed max-w-xs">
              Concept redesign for a clearer citizen experience.
            </p>
          </div>

          {/* Link columns */}
          {footerLinks.map((col) => (
            <div key={col.heading}>
              <h3 className="text-xs font-semibold text-navy-400 uppercase tracking-wider mb-3">
                {col.heading}
              </h3>
              <ul className="space-y-2">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className={`text-sm transition-colors ${
                        link.href === '#'
                          ? 'text-navy-400 cursor-default'
                          : 'text-navy-600 hover:text-navy-900'
                      }`}
                      {...(link.href === '#' ? { tabIndex: -1, 'aria-disabled': true } : {})}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t border-navy-100">
          <div className="text-center sm:text-left">
            <p className="text-xs text-navy-400">
              © {new Date().getFullYear()} ChallanEase. Conceptual redesign — not an official
              government website.
            </p>
            <p className="text-xs text-navy-400 mt-1">
              This project does not collect, store, or process real user data.
            </p>
          </div>
          <button
            onClick={scrollToTop}
            className="p-2 rounded-lg text-navy-400 hover:text-navy-900 hover:bg-navy-50 transition-colors cursor-pointer"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  )
}
