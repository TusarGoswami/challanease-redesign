import { motion } from 'framer-motion'
import { steps } from '../data/demoChallan'

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: 'easeOut' } },
}

export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="py-20 sm:py-section"
      aria-labelledby="how-it-works-heading"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="max-w-2xl mx-auto text-center mb-14 sm:mb-16">
          <h2
            id="how-it-works-heading"
            className="text-3xl sm:text-h2 font-bold tracking-tight text-navy-900"
          >
            Everything you need,{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-cyan-500">
              without the maze.
            </span>
          </h2>
          <p className="mt-4 text-base sm:text-body-lg text-navy-500 leading-relaxed">
            Four steps. No sign-ups. No confusing dashboards.
          </p>
        </div>

        {/* Steps */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              variants={itemVariants}
              className="relative group"
            >
              <div className="rounded-2xl border border-navy-100 bg-white p-6 h-full transition-all duration-200 hover:shadow-card-hover hover:border-navy-200">
                {/* Step number */}
                <div className="flex items-center gap-3 mb-4">
                  <span className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-navy-900 text-white text-sm font-bold">
                    {step.number}
                  </span>
                  {/* Connector line (hidden on last) */}
                  {i < steps.length - 1 && (
                    <div className="hidden lg:block absolute top-11 left-[calc(100%+0.75rem)] w-[calc(100%-3.5rem)] h-px bg-navy-100" aria-hidden="true" />
                  )}
                </div>

                <h3 className="text-base font-semibold text-navy-900 mb-2">
                  {step.title}
                </h3>
                <p className="text-sm text-navy-500 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
