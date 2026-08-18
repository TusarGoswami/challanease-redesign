import { useState, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Search, Loader2, CheckCircle2, Car, ArrowRight, ShieldCheck, Camera, CreditCard } from 'lucide-react'
import Button from '../components/Button'
import ChallanCard from '../components/ChallanCard'
import SuccessConfetti from '../components/SuccessConfetti'
import ChallanDetailModal from '../components/ChallanDetailModal'
import CarLoader from '../components/CarLoader'
import { lookupChallan } from '../data/demoChallan'

export default function Hero() {
  const [input, setInput] = useState('')
  const [state, setState] = useState('idle') // idle | loading | success | not-found
  const [result, setResult] = useState(null)
  const [showConfetti, setShowConfetti] = useState(false)
  const [selectedChallan, setSelectedChallan] = useState(null)
  const inputRef = useRef(null)

  const executeSearch = (plate) => {
    setState('loading')
    setResult(null)
    setShowConfetti(false)
    setSelectedChallan(null)

    // Simulate lookup delay
    setTimeout(() => {
      const data = lookupChallan(plate)
      if (data) {
        setResult(JSON.parse(JSON.stringify(data)))
        setState('success')
        setShowConfetti(true)
        setTimeout(() => setShowConfetti(false), 1500)
      } else {
        setState('not-found')
      }
    }, 800)
  }

  const handleCheck = (e) => {
    e.preventDefault()
    if (!input.trim()) {
      inputRef.current?.focus()
      return
    }
    executeSearch(input)
  }

  const handleQuickSelect = (plate) => {
    setInput(plate)
    executeSearch(plate)
  }

  const handleReset = () => {
    setState('idle')
    setResult(null)
    setInput('')
    setShowConfetti(false)
    setSelectedChallan(null)
    inputRef.current?.focus()
  }

  const handlePaymentSuccess = (challanId) => {
    if (!result) return
    const updatedChallans = result.challans.map((ch) => {
      if (ch.id === challanId) {
        return { ...ch, status: 'paid' }
      }
      return ch
    })
    setResult({
      ...result,
      challans: updatedChallans,
    })
  }

  return (
    <section
      className="relative pt-28 sm:pt-36 pb-20 sm:pb-28 overflow-hidden"
      aria-labelledby="hero-heading"
    >
      {/* Premium Dotted Grid Pattern Backdrop */}
      <div
        className="absolute inset-0 -z-20 opacity-[0.45] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"
        style={{
          backgroundImage: 'radial-gradient(#0ea5e9 1px, transparent 0)',
          backgroundSize: '24px 24px',
        }}
        aria-hidden="true"
      />

      {/* Backdrop glowing gradient spheres */}
      <div className="absolute inset-0 -z-10" aria-hidden="true">
        <div className="absolute top-[-10%] left-[25%] w-[400px] h-[400px] rounded-full bg-sky-300/10 blur-[80px] animate-pulse" />
        <div className="absolute top-[20%] right-[10%] w-[300px] h-[300px] rounded-full bg-cyan-300/10 blur-[60px] animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Heading and Value Prop - Sticky to prevent blank space on scroll */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="lg:col-span-6 max-w-xl lg:pt-8 lg:sticky lg:top-28"
          >
            <div className="inline-flex items-center gap-2 rounded-full bg-sky-500/10 px-3.5 py-1.5 text-xs font-semibold text-sky-600 ring-1 ring-sky-500/20 mb-6">
              <span className="w-2 h-2 rounded-full bg-sky-500 animate-ping" aria-hidden="true" />
              Redesign Concept
            </div>

            <h1
              id="hero-heading"
              className="text-4xl sm:text-5xl lg:text-display font-extrabold tracking-tight text-navy-900 leading-[1.1]"
            >
              Your challan.{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-cyan-500">
                Clear and simple.
              </span>
            </h1>

            <p className="mt-5 text-base sm:text-body-lg text-navy-500 leading-relaxed max-w-lg">
              Check your challan status, understand what you owe, and find the
              next step — without navigating confusing government portals.
            </p>

            {/* CTA Actions */}
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <Button
                size="lg"
                onClick={() =>
                  document.getElementById('challan-lookup')?.scrollIntoView({ behavior: 'smooth' })
                }
              >
                <Search className="w-4 h-4 animate-pulse" aria-hidden="true" />
                Check a Challan
              </Button>
              <Button
                variant="secondary"
                size="lg"
                onClick={() =>
                  document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' })
                }
              >
                How it works
              </Button>
            </div>

            {/* Quick check indicators */}
            <div className="mt-10 flex flex-wrap gap-6 text-xs text-navy-500 font-medium">
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-green-500" aria-hidden="true" />
                Clear status
              </div>
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-green-500" aria-hidden="true" />
                Simple next steps
              </div>
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-green-500" aria-hidden="true" />
                Mobile-first experience
              </div>
            </div>
          </motion.div>

          {/* Right Column: Interactive Card Plate Demo */}
          <div className="lg:col-span-6 w-full relative lg:pt-8" id="challan-lookup">
            
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15, ease: 'easeOut' }}
              className="w-full relative z-10"
            >
              <div className="rounded-3xl border border-navy-100 bg-white shadow-product p-5 sm:p-6 relative overflow-hidden">
                {/* Confetti on success */}
                {showConfetti && <SuccessConfetti />}

                {/* Card header */}
                <div className="flex items-center justify-between mb-5">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg bg-navy-900 flex items-center justify-center" aria-hidden="true">
                      <Car className="w-4 h-4 text-sky-400 animate-pulse" />
                    </div>
                    <div>
                      <h2 className="text-sm font-semibold text-navy-900">Check your challan</h2>
                      <p className="text-xs text-navy-400">Interactive demo</p>
                    </div>
                  </div>
                  {(state === 'success' || state === 'not-found') && (
                    <button
                      onClick={handleReset}
                      className="text-xs font-semibold text-sky-500 hover:text-sky-600 transition-colors cursor-pointer"
                    >
                      Reset Input
                    </button>
                  )}
                </div>

                {/* Search form with license-plate styled input */}
                <form onSubmit={handleCheck} className="mb-4">
                  <label htmlFor="vehicle-input" className="block text-xs font-medium text-navy-500 mb-2">
                    Vehicle registration number
                  </label>
                  <div className="flex gap-2">
                    <div className="relative flex-1">
                      {/* Blue flag strip — mimics the IND strip on Indian plates */}
                      <div className="plate-flag" aria-hidden="true">
                        <span>IND</span>
                      </div>
                      <input
                        ref={inputRef}
                        id="vehicle-input"
                        type="text"
                        value={input}
                        onChange={(e) => setInput(e.target.value.toUpperCase())}
                        placeholder="DL 01 AB 1234"
                        disabled={state === 'loading'}
                        className="plate-input w-full pl-10 pr-4 py-3.5 text-sm text-navy-900 font-mono font-bold tracking-wider placeholder:text-navy-300/70 focus:outline-none transition-all disabled:opacity-60"
                        aria-describedby="vehicle-hint"
                        autoComplete="off"
                      />
                    </div>
                    <Button
                      type="submit"
                      size="md"
                      disabled={state === 'loading'}
                      className="shrink-0 rounded-xl"
                    >
                      {state === 'loading' ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin" aria-hidden="true" />
                          <span className="sr-only">Checking</span>
                        </>
                      ) : (
                        <>
                          <Search className="w-4 h-4" aria-hidden="true" />
                          Check
                        </>
                      )}
                    </Button>
                  </div>

                  {/* Interactive Quick-Check Plates */}
                  <div className="flex flex-wrap gap-2 items-center mt-4">
                    <span className="text-xs font-semibold text-navy-400">Quick Test:</span>
                    <button
                      type="button"
                      onClick={() => handleQuickSelect('DL01AB1234')}
                      className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg border border-navy-200 bg-navy-50/50 hover:bg-navy-100/50 hover:border-navy-300 active:scale-[0.98] font-mono font-bold text-[10px] tracking-wider text-navy-800 transition-all cursor-pointer shadow-sm"
                    >
                      <span className="w-2 h-3 bg-[#0052B4] block rounded-[2px]" />
                      DL 01 AB 1234
                    </button>
                    <button
                      type="button"
                      onClick={() => handleQuickSelect('MH02CD5678')}
                      className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg border border-navy-200 bg-navy-50/50 hover:bg-navy-100/50 hover:border-navy-300 active:scale-[0.98] font-mono font-bold text-[10px] tracking-wider text-navy-800 transition-all cursor-pointer shadow-sm"
                    >
                      <span className="w-2 h-3 bg-[#0052B4] block rounded-[2px]" />
                      MH 02 CD 5678
                    </button>
                  </div>
                </form>

                {/* Results area */}
                <AnimatePresence mode="wait">
                  {state === 'loading' && (
                    <motion.div
                      key="loading"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                    >
                      <CarLoader />
                    </motion.div>
                  )}

                  {state === 'success' && result && (
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      role="region"
                      aria-label="Challan lookup results"
                    >
                      {/* Success header */}
                      <div className="flex items-center gap-2 text-green-800 bg-green-50 rounded-xl px-3 py-2.5 text-xs font-semibold mb-4 border border-green-100">
                        <CheckCircle2 className="w-4 h-4 shrink-0 text-green-600 animate-bounce" aria-hidden="true" />
                        Demo record found for {result.vehicleNumber}
                      </div>

                      {/* Summary stats */}
                      <div className="grid grid-cols-3 gap-2 mb-4">
                        <div className="rounded-xl bg-navy-50/80 px-3 py-2.5 text-center border border-navy-100/30">
                          <p className="text-lg font-extrabold text-navy-950">{result.challans.length}</p>
                          <p className="text-[10px] font-medium text-navy-400 uppercase">Total</p>
                        </div>
                        <div className="rounded-xl bg-amber-50/80 px-3 py-2.5 text-center border border-amber-100/30">
                          <p className="text-lg font-extrabold text-amber-800">
                            {result.challans.filter(c => c.status === 'pending').length}
                          </p>
                          <p className="text-[10px] font-medium text-navy-400 uppercase">Pending</p>
                        </div>
                        <div className="rounded-xl bg-green-50/80 px-3 py-2.5 text-center border border-green-100/30">
                          <p className="text-lg font-extrabold text-green-800">
                            ₹{result.challans.filter(c => c.status === 'pending').reduce((s, c) => s + c.amount, 0).toLocaleString('en-IN')}
                          </p>
                          <p className="text-[10px] font-medium text-navy-400 uppercase">Due</p>
                        </div>
                      </div>

                      {/* Challan list */}
                      <div className="space-y-3">
                        {result.challans.map((ch, i) => (
                          <motion.div
                            key={ch.id}
                            initial={{ opacity: 0, y: 8 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 + i * 0.1 }}
                          >
                            <ChallanCard
                              challan={ch}
                              compact
                              onViewDetails={() => setSelectedChallan(ch)}
                            />
                          </motion.div>
                        ))}
                      </div>

                      <p className="mt-4 text-xs text-navy-400 text-center">
                        This is demo data — not connected to any government database.
                      </p>
                    </motion.div>
                  )}

                  {state === 'not-found' && (
                    <motion.div
                      key="not-found"
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="text-center py-6"
                      role="status"
                      aria-live="polite"
                    >
                      <div className="w-10 h-10 rounded-full bg-navy-50 flex items-center justify-center mx-auto mb-3">
                        <Search className="w-5 h-5 text-navy-400" aria-hidden="true" />
                      </div>
                      <p className="text-sm font-semibold text-navy-800 mb-1">
                        No demo record found
                      </p>
                      <p className="text-xs text-navy-400">
                        Try one of the demo numbers: DL01AB1234 or MH02CD5678
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Challan Detail Modal */}
      <AnimatePresence>
        {selectedChallan && (
          <ChallanDetailModal
            challan={selectedChallan}
            vehicleNumber={result?.vehicleNumber}
            onClose={() => setSelectedChallan(null)}
            onPaymentSuccess={handlePaymentSuccess}
          />
        )}
      </AnimatePresence>
    </section>
  )
}
