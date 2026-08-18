import { motion } from 'framer-motion'
import StatusBadge from '../components/StatusBadge'
import { demoChallanRecords } from '../data/demoChallan'
import useCountUp from '../hooks/useCountUp'
import {
  Car,
  MapPin,
  Calendar,
  FileText,
  AlertCircle,
  ArrowRight,
  Shield,
  Clock,
} from 'lucide-react'

// Grab all challans across all demo records for the showcase
const allChallans = Object.values(demoChallanRecords).flatMap((r) =>
  r.challans.map((ch) => ({ ...ch, vehicleNumber: r.vehicleNumber }))
)

export default function ProductShowcase() {
  const pendingCount = allChallans.filter((c) => c.status === 'pending').length
  const totalAmount = allChallans
    .filter((c) => c.status === 'pending')
    .reduce((sum, c) => sum + c.amount, 0)

  return (
    <section
      id="product-showcase"
      className="py-20 sm:py-section bg-navy-900 relative overflow-hidden"
      aria-labelledby="showcase-heading"
    >
      {/* Subtle radial glow */}
      <div
        className="absolute inset-0 -z-0"
        aria-hidden="true"
        style={{
          background:
            'radial-gradient(ellipse 60% 40% at 50% 0%, rgba(56, 189, 248, 0.08) 0%, transparent 60%)',
        }}
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section header */}
        <div className="max-w-2xl mx-auto text-center mb-14 sm:mb-16">
          <h2
            id="showcase-heading"
            className="text-3xl sm:text-h2 font-bold tracking-tight text-white"
          >
            See what it looks like
          </h2>
          <p className="mt-4 text-base sm:text-body-lg text-navy-300 leading-relaxed">
            A dashboard designed around what matters — your pending challans,
            amounts, and next steps. All in one view.
          </p>
        </div>

        {/* Mock dashboard */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="rounded-2xl sm:rounded-3xl border border-navy-700/50 bg-navy-800/80 backdrop-blur-sm shadow-elevated overflow-hidden"
        >
          {/* Dashboard top bar */}
          <div className="flex items-center justify-between px-4 sm:px-6 py-3 border-b border-navy-700/50">
            <div className="flex items-center gap-3">
              <div className="flex gap-1.5" aria-hidden="true">
                <span className="w-3 h-3 rounded-full bg-red-500/70" />
                <span className="w-3 h-3 rounded-full bg-amber-500/70" />
                <span className="w-3 h-3 rounded-full bg-green-500/70" />
              </div>
              <span className="text-xs text-navy-400 font-medium hidden sm:block">
                ChallanEase — Demo Dashboard
              </span>
            </div>
            <span className="text-xs text-navy-500">Demo preview</span>
          </div>

          {/* Dashboard content */}
          <div className="p-4 sm:p-6 lg:p-8">
            {/* Summary cards */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-6">
              <SummaryCard
                icon={<AlertCircle className="w-4 h-4" />}
                label="Pending challans"
                endValue={pendingCount}
                accent="text-amber-400"
              />
              <SummaryCard
                icon={<Clock className="w-4 h-4" />}
                label="Total due"
                prefix="₹"
                endValue={totalAmount}
                accent="text-sky-400"
              />
              <SummaryCard
                icon={<Shield className="w-4 h-4" />}
                label="Resolved"
                endValue={allChallans.length - pendingCount}
                accent="text-green-400"
              />
              <SummaryCard
                icon={<Car className="w-4 h-4" />}
                label="Vehicles"
                endValue={Object.keys(demoChallanRecords).length}
                accent="text-cyan-400"
              />
            </div>

            {/* Challan table */}
            <div className="rounded-xl border border-navy-700/50 overflow-hidden">
              {/* Table header */}
              <div className="hidden sm:grid grid-cols-12 gap-4 px-4 sm:px-5 py-3 bg-navy-800/60 text-xs font-semibold text-navy-400 uppercase tracking-wider">
                <div className="col-span-3">Challan</div>
                <div className="col-span-2">Vehicle</div>
                <div className="col-span-2">Date</div>
                <div className="col-span-2">Amount</div>
                <div className="col-span-2">Status</div>
                <div className="col-span-1" />
              </div>

              {/* Table rows */}
              {allChallans.map((ch) => (
                <div
                  key={ch.id}
                  className="grid grid-cols-1 sm:grid-cols-12 gap-2 sm:gap-4 px-4 sm:px-5 py-4 border-t border-navy-700/30 hover:bg-navy-700/20 transition-colors items-center"
                >
                  {/* Challan info */}
                  <div className="sm:col-span-3">
                    <p className="text-sm font-semibold text-white">{ch.violation}</p>
                    <p className="text-xs text-navy-400">{ch.id}</p>
                  </div>

                  {/* Mobile: labelled row, Desktop: columns */}
                  <div className="sm:col-span-2 flex sm:block gap-2 items-center">
                    <span className="text-xs text-navy-500 sm:hidden">Vehicle:</span>
                    <span className="text-sm text-navy-300 sm:text-navy-200">{ch.vehicleNumber}</span>
                  </div>

                  <div className="sm:col-span-2 flex sm:block gap-2 items-center">
                    <span className="text-xs text-navy-500 sm:hidden">Date:</span>
                    <span className="text-sm text-navy-300">{ch.date}</span>
                  </div>

                  <div className="sm:col-span-2 flex sm:block gap-2 items-center">
                    <span className="text-xs text-navy-500 sm:hidden">Amount:</span>
                    <span className="text-sm font-semibold text-white">₹{ch.amount.toLocaleString('en-IN')}</span>
                  </div>

                  {/* Status + action row */}
                  <div className="sm:col-span-2 flex items-center justify-between sm:justify-start">
                    <StatusBadge status={ch.status} />
                  </div>

                  <div className="sm:col-span-1 flex justify-end">
                    <button
                      className="p-1.5 rounded-lg text-navy-400 hover:text-white hover:bg-navy-700 transition-colors cursor-pointer"
                      aria-label={`View details for ${ch.id}`}
                    >
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Footer note */}
            <p className="mt-4 text-xs text-navy-500 text-center">
              All data shown above is fictional and for demonstration purposes only.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

function SummaryCard({ icon, label, endValue, prefix = '', suffix = '', accent }) {
  const { ref, value } = useCountUp(endValue)
  return (
    <div ref={ref} className="rounded-xl bg-navy-700/40 border border-navy-700/50 p-3 sm:p-4">
      <div className={`mb-2 ${accent}`} aria-hidden="true">{icon}</div>
      <p className="text-xs text-navy-400 mb-0.5">{label}</p>
      <p className="text-lg sm:text-xl font-bold text-white">
        {prefix}{value.toLocaleString('en-IN')}{suffix}
      </p>
    </div>
  )
}
