import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { clarityPoints } from '../data/demoChallan'
import { CheckCircle, AlertTriangle, ShieldCheck, ChevronRight } from 'lucide-react'

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 12 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.35, ease: 'easeOut' } },
}

export default function TrustSection() {
  const [activeTab, setActiveTab] = useState('challanease') // 'traditional' | 'challanease'

  return (
    <section
      id="clarity"
      className="py-20 sm:py-section"
      aria-labelledby="clarity-heading"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: copy */}
          <div className="max-w-lg">
            <h2
              id="clarity-heading"
              className="text-3xl sm:text-h2 font-bold tracking-tight text-navy-900 mb-4"
            >
              Designed around{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-cyan-500">
                clarity
              </span>
            </h2>
            <p className="text-base sm:text-body-lg text-navy-500 leading-relaxed mb-8">
              Most challan websites overload you with options before you even know
              what you're looking for. ChallanEase starts with the question
              you actually came with — and answers it immediately.
            </p>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
              className="space-y-4"
            >
              {clarityPoints.map((point) => (
                <motion.div
                  key={point.title}
                  variants={itemVariants}
                  className="flex items-start gap-3"
                >
                  <div className="mt-0.5 shrink-0">
                    <CheckCircle className="w-5 h-5 text-sky-500" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-navy-900">{point.title}</h3>
                    <p className="text-sm text-navy-500 mt-0.5">{point.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            <div className="mt-8 p-4 rounded-xl bg-navy-50 border border-navy-100">
              <p className="text-xs text-navy-500 leading-relaxed">
                <strong className="text-navy-700">Note:</strong> ChallanEase is a
                conceptual redesign exploring how a citizen-first challan experience
                could work. It is not affiliated with any official government service.
              </p>
            </div>
          </div>

          {/* Right: interactive visual card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="w-full"
          >
            <div className="rounded-2xl border border-navy-100 bg-white shadow-card overflow-hidden">
              {/* Tab Selector */}
              <div className="flex border-b border-navy-100 p-2 bg-navy-50/50 gap-2">
                <button
                  onClick={() => setActiveTab('traditional')}
                  className={`flex-1 text-center py-2 px-3 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                    activeTab === 'traditional'
                      ? 'bg-red-500 text-white shadow-sm'
                      : 'text-navy-400 hover:text-navy-900 hover:bg-navy-100/50'
                  }`}
                >
                  Traditional Portal
                </button>
                <button
                  onClick={() => setActiveTab('challanease')}
                  className={`flex-1 text-center py-2 px-3 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                    activeTab === 'challanease'
                      ? 'bg-navy-900 text-white shadow-sm'
                      : 'text-navy-400 hover:text-navy-900 hover:bg-navy-100/50'
                  }`}
                >
                  ChallanEase Redesign
                </button>
              </div>

              {/* Tab Content Window */}
              <div className="p-5 sm:p-6 min-h-[340px] flex flex-col justify-between">
                <AnimatePresence mode="wait">
                  {activeTab === 'traditional' ? (
                    <motion.div
                      key="traditional"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2 }}
                      className="space-y-4"
                    >
                      <div className="flex items-center gap-2 text-red-600 bg-red-50 p-2.5 rounded-lg text-xs font-medium border border-red-100">
                        <AlertTriangle className="w-4 h-4 shrink-0" />
                        <span>Flow analysis: 5 inputs, high friction</span>
                      </div>

                      {/* Simulated form */}
                      <div className="space-y-3 opacity-75 pointer-events-none select-none">
                        <div>
                          <label className="block text-[10px] uppercase font-bold text-navy-400 mb-1">
                            Search By
                          </label>
                          <div className="flex gap-2 text-xs">
                            <span className="border border-red-200 bg-red-50/50 px-2 py-1 rounded text-red-700 font-medium">Challan Number</span>
                            <span className="border border-navy-200 px-2 py-1 rounded text-navy-600">Vehicle Number</span>
                            <span className="border border-navy-200 px-2 py-1 rounded text-navy-600">DL Number</span>
                          </div>
                        </div>

                        <div className="grid grid-cols-2 gap-2">
                          <div>
                            <label className="block text-[10px] font-medium text-navy-500 mb-1">
                              Chassis Number *
                            </label>
                            <input
                              type="text"
                              placeholder="Last 5 characters"
                              className="w-full bg-navy-50 border border-navy-200 rounded px-2.5 py-1.5 text-xs"
                              disabled
                            />
                          </div>
                          <div>
                            <label className="block text-[10px] font-medium text-navy-500 mb-1">
                              Engine Number *
                            </label>
                            <input
                              type="text"
                              placeholder="Last 5 characters"
                              className="w-full bg-navy-50 border border-navy-200 rounded px-2.5 py-1.5 text-xs"
                              disabled
                            />
                          </div>
                        </div>

                        <div className="grid grid-cols-2 gap-2 items-end">
                          <div>
                            <label className="block text-[10px] font-medium text-navy-500 mb-1">
                              CAPTCHA Verification
                            </label>
                            <div className="bg-amber-100 border border-amber-200 h-8 flex items-center justify-center font-serif tracking-widest text-sm font-bold text-amber-800 line-through select-none rounded">
                              3Gz9Xw
                            </div>
                          </div>
                          <input
                            type="text"
                            placeholder="Enter Code"
                            className="w-full bg-navy-50 border border-navy-200 rounded px-2.5 py-1.5 text-xs"
                            disabled
                          />
                        </div>
                      </div>

                      <div className="text-xs text-navy-400 space-y-1 pt-2 border-t border-navy-100">
                        <p className="flex items-center gap-1.5 text-red-700 font-medium">
                          ❌ Must look up chassis/engine numbers from physical RC
                        </p>
                        <p className="flex items-center gap-1.5 text-red-700 font-medium">
                          ❌ Multi-step modal navigation to find details
                        </p>
                      </div>
                    </motion.div>
                  ) : (
                    <motion.div
                      key="challanease"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2 }}
                      className="space-y-4"
                    >
                      <div className="flex items-center gap-2 text-green-800 bg-green-50 p-2.5 rounded-lg text-xs font-medium border border-green-100">
                        <ShieldCheck className="w-4 h-4 shrink-0 text-green-600" />
                        <span>Flow analysis: 1 input, zero friction</span>
                      </div>

                      {/* Simulated simple flow */}
                      <div className="space-y-3">
                        <div className="border border-navy-200/60 rounded-xl p-3 bg-navy-50/20">
                          <p className="text-[10px] text-navy-400 font-medium mb-1">Vehicle Registration Number</p>
                          <div className="flex items-center gap-2">
                            <span className="inline-block text-xs font-bold bg-navy-900 text-white px-2 py-0.5 rounded">IND</span>
                            <span className="text-sm font-mono font-bold text-navy-900">DL 01 AB 1234</span>
                          </div>
                        </div>

                        {/* Result teaser */}
                        <div className="border border-navy-100 rounded-xl p-3 bg-white shadow-sm flex justify-between items-center">
                          <div>
                            <p className="text-xs font-bold text-navy-900">Signal jumping</p>
                            <p className="text-[10px] text-navy-400">CH-2026-00147 • ₹1,000</p>
                          </div>
                          <ChevronRight className="w-4 h-4 text-navy-400" />
                        </div>
                      </div>

                      <div className="text-xs text-navy-500 space-y-1 pt-2 border-t border-navy-100">
                        <p className="flex items-center gap-1.5 text-green-800 font-medium">
                          ✓ No OTP, Chassis, or Engine numbers required for preview
                        </p>
                        <p className="flex items-center gap-1.5 text-green-800 font-medium">
                          ✓ Single-click access to full status, amount, and next action
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                <div className="mt-4 pt-3 border-t border-navy-100 flex justify-between items-center text-[10px] font-medium text-navy-400">
                  <span>Interactive Simulator</span>
                  <span>Click tabs above to compare</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
