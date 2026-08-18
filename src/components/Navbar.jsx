import { useState, useEffect } from 'react'
import { Menu, X, Search } from 'lucide-react'
import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion'
import Button from './Button'

const navLinks = [
  { label: 'How it works', href: '#how-it-works' },
  { label: 'Services', href: '#product-showcase' },
  { label: 'Help', href: '#clarity' },
]

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  // Scroll progress
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 })

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/90 backdrop-blur-md shadow-sm border-b border-navy-100/60'
          : 'bg-transparent'
      }`}
      role="banner"
    >
      {/* Scroll progress bar */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-sky-500 to-cyan-400 origin-left"
        style={{ scaleX, opacity: scrolled ? 1 : 0 }}
        aria-hidden="true"
      />

      <nav
        className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16 sm:h-18"
        aria-label="Main navigation"
      >
        {/* Logo */}
        <a
          href="#"
          className="flex items-center gap-2 text-navy-900 font-bold text-lg tracking-tight hover:opacity-80 transition-opacity"
          aria-label="ChallanEase — Home"
          data-easter-egg-trigger
        >
          <div className="w-8 h-8 rounded-lg bg-navy-900 flex items-center justify-center" aria-hidden="true">
            <svg width="18" height="18" viewBox="0 0 32 32" fill="none">
              <path d="M6 16.5C6 11.25 10.25 7 15.5 7C18.1 7 20.45 8.05 22.15 9.75L19.65 12.25C18.55 11.15 17.1 10.5 15.5 10.5C12.19 10.5 9.5 13.19 9.5 16.5C9.5 19.81 12.19 22.5 15.5 22.5C17.1 22.5 18.55 21.85 19.65 20.75L22.15 23.25C20.45 24.95 18.1 26 15.5 26C10.25 26 6 21.75 6 16.5Z" fill="#38bdf8"/>
              <circle cx="23" cy="16.5" r="2.5" fill="#22d3ee"/>
            </svg>
          </div>
          <span>ChallanEase</span>
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-1" role="menubar">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="px-3.5 py-2 text-sm font-medium text-navy-600 rounded-lg hover:text-navy-900 hover:bg-navy-50 transition-colors"
              role="menuitem"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-3">
          <Button
            variant="primary"
            size="sm"
            onClick={() => {
              document.getElementById('challan-lookup')?.scrollIntoView({ behavior: 'smooth' })
            }}
          >
            <Search className="w-4 h-4" aria-hidden="true" />
            Check Challan
          </Button>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden p-2 rounded-lg text-navy-600 hover:bg-navy-50 transition-colors cursor-pointer"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="md:hidden fixed inset-0 top-16 bg-white z-40"
            role="menu"
          >
            <div className="px-4 py-6 flex flex-col gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="px-4 py-3 text-base font-medium text-navy-700 rounded-xl hover:bg-navy-50 transition-colors"
                  role="menuitem"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <div className="mt-4 pt-4 border-t border-navy-100">
                <Button
                  variant="primary"
                  size="lg"
                  className="w-full"
                  onClick={() => {
                    setMobileOpen(false)
                    document.getElementById('challan-lookup')?.scrollIntoView({ behavior: 'smooth' })
                  }}
                >
                  <Search className="w-4 h-4" aria-hidden="true" />
                  Check Challan
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
