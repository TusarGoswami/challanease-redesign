import { motion } from 'framer-motion'
import { Search } from 'lucide-react'
import Button from '../components/Button'

/**
 * Final CTA — a calm closing prompt before the footer.
 */
export default function CtaSection() {
  return (
    <section className="py-20 sm:py-section" aria-labelledby="cta-heading">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
          className="rounded-2xl sm:rounded-3xl bg-navy-900 p-8 sm:p-12 lg:p-16 text-center relative overflow-hidden"
        >
          {/* Subtle glow */}
          <div
            className="absolute inset-0"
            aria-hidden="true"
            style={{
              background:
                'radial-gradient(ellipse 50% 50% at 50% 100%, rgba(56, 189, 248, 0.1) 0%, transparent 60%)',
            }}
          />

          <div className="relative z-10">
            <h2
              id="cta-heading"
              className="text-2xl sm:text-3xl lg:text-h2 font-bold tracking-tight text-white mb-4"
            >
              See how it works
            </h2>
            <p className="text-base sm:text-body-lg text-navy-300 leading-relaxed max-w-lg mx-auto mb-8">
              Try the interactive demo with a sample vehicle number. No sign-up,
              no personal data — just a preview of a clearer experience.
            </p>
            <Button
              size="lg"
              variant="primary"
              className="bg-white! text-navy-900! hover:bg-navy-100!"
              onClick={() =>
                document.getElementById('challan-lookup')?.scrollIntoView({ behavior: 'smooth' })
              }
            >
              <Search className="w-4 h-4" aria-hidden="true" />
              Try the demo
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
