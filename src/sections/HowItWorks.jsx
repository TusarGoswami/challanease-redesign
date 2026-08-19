import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
}

export default function HowItWorks() {
  const steps = [
    {
      number: '01',
      title: 'Check',
      description: 'Enter your vehicle registration details in the Indian license plate lookup box.',
      renderMockup: () => (
        <div className="mt-6 p-4 bg-navy-50/50 rounded-2xl border border-navy-100/50 flex items-center justify-center min-h-[96px]">
          <div className="relative w-full max-w-[170px] h-9 bg-white border-2 border-navy-950 rounded-lg flex items-center pl-8 pr-2 shadow-sm select-none">
            <div className="absolute left-0 top-0 bottom-0 w-[22px] bg-gradient-to-b from-[#0052B4] to-[#003893] rounded-l-md flex flex-col items-center justify-center">
              <span className="text-[4px] font-black text-white tracking-widest leading-none scale-75">IND</span>
            </div>
            <span className="font-mono text-[10px] font-black tracking-wider text-navy-900 leading-none">DL 01 AB 1234</span>
          </div>
        </div>
      )
    },
    {
      number: '02',
      title: 'Understand',
      description: 'See your challan status, fine amount, violation type, date, and location in one clear view.',
      renderMockup: () => (
        <div className="mt-6 p-4 bg-navy-50/50 rounded-2xl border border-navy-100/50 flex flex-col justify-center min-h-[96px] space-y-2 text-[10px]">
          <div className="flex justify-between items-center bg-white p-2.5 rounded-xl border border-navy-100 shadow-sm">
            <div>
              <p className="font-extrabold text-navy-900 leading-none">Speeding violation</p>
              <p className="text-[8px] text-navy-400 mt-1">₹1,000 · ITO Junction</p>
            </div>
            <span className="px-2 py-0.5 rounded-full bg-amber-50 text-amber-700 border border-amber-100 font-extrabold text-[9px] scale-90">Pending</span>
          </div>
        </div>
      )
    },
    {
      number: '03',
      title: 'Act',
      description: 'Take the appropriate next step — pay the penalty or submit a dispute to traffic cell review.',
      renderMockup: () => (
        <div className="mt-6 p-4 bg-navy-50/50 rounded-2xl border border-navy-100/50 flex items-center justify-center gap-2 min-h-[96px]">
          <div className="w-full max-w-[80px] text-center bg-navy-900 hover:bg-navy-800 text-white font-extrabold py-2 rounded-lg text-[9px] shadow-sm select-none transition-colors cursor-default">
            Pay Penalty
          </div>
          <div className="w-full max-w-[80px] text-center bg-white hover:bg-navy-50 text-navy-900 border border-navy-200 font-extrabold py-2 rounded-lg text-[9px] shadow-sm select-none transition-colors cursor-default">
            Dispute
          </div>
        </div>
      )
    }
  ]

  return (
    <section
      id="how-it-works"
      className="py-16 sm:py-20 bg-navy-50/30"
      aria-labelledby="how-it-works-heading"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section header */}
        <div className="max-w-2xl mx-auto text-center mb-14 sm:mb-16">
          <h2
            id="how-it-works-heading"
            className="text-3xl sm:text-h2 font-bold tracking-tight text-navy-900"
          >
            How it works
          </h2>
          <p className="mt-3 text-base sm:text-body-lg text-navy-500 font-semibold tracking-tight">
            From confusion to clarity.
          </p>
        </div>

        {/* Steps Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid lg:grid-cols-3 gap-8 relative"
        >
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              variants={itemVariants}
              className="relative group"
            >
              {/* Connector arrow (hidden on mobile, shown on desktop between columns) */}
              {i < 2 && (
                <div className="hidden lg:flex absolute top-[110px] -right-5 z-20 items-center justify-center" aria-hidden="true">
                  <ArrowRight className="w-5 h-5 text-sky-400 animate-pulse" />
                </div>
              )}

              <div className="rounded-3xl border border-navy-100 bg-white p-6 h-full transition-all duration-300 hover:shadow-product hover:border-navy-200 hover:scale-[1.02] relative z-10 flex flex-col justify-between">
                <div>
                  {/* Step header with circular badge number */}
                  <div className="flex items-center gap-3 mb-4">
                    <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-navy-900 text-sky-400 text-xs font-black">
                      {step.number}
                    </span>
                    <h3 className="text-lg font-bold text-navy-900">
                      {step.title}
                    </h3>
                  </div>

                  <p className="text-sm text-navy-500 leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Inline interactive mini visual mockup of the UX step */}
                {step.renderMockup()}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
