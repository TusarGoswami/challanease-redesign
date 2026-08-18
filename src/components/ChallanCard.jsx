import StatusBadge from './StatusBadge'
import { MapPin, Calendar, FileText, AlertCircle, ArrowRight } from 'lucide-react'

/**
 * ChallanCard — displays a single challan record with all relevant details.
 * Used in both the hero demo preview and the product showcase.
 */
export default function ChallanCard({ challan, compact = false, onViewDetails }) {
  const isPending = challan.status === 'pending'

  return (
    <div
      className={`rounded-2xl border border-navy-100 bg-white transition-shadow duration-200 hover:shadow-card-hover ${
        compact ? 'p-4' : 'p-5 sm:p-6'
      }`}
      role="article"
      aria-label={`Challan ${challan.id}: ${challan.violation}`}
    >
      {/* Header */}
      <div className="flex items-start justify-between gap-3 mb-4">
        <div className="min-w-0">
          <p className="text-xs font-medium text-navy-400 mb-1">{challan.id}</p>
          <h4 className={`font-semibold text-navy-900 ${compact ? 'text-sm' : 'text-base'}`}>
            {challan.violation}
          </h4>
        </div>
        <StatusBadge status={challan.status} />
      </div>

      {/* Details grid */}
      <div className={`grid gap-3 mb-4 ${compact ? 'grid-cols-1' : 'grid-cols-2'}`}>
        <div className="flex items-start gap-2">
          <FileText className="w-4 h-4 text-navy-400 mt-0.5 shrink-0" aria-hidden="true" />
          <div>
            <p className="text-xs text-navy-400">Section</p>
            <p className="text-sm font-medium text-navy-700">{challan.section}</p>
          </div>
        </div>
        <div className="flex items-start gap-2">
          <AlertCircle className="w-4 h-4 text-navy-400 mt-0.5 shrink-0" aria-hidden="true" />
          <div>
            <p className="text-xs text-navy-400">Fine amount</p>
            <p className="text-sm font-semibold text-navy-900">₹{challan.amount.toLocaleString('en-IN')}</p>
          </div>
        </div>
        <div className="flex items-start gap-2">
          <Calendar className="w-4 h-4 text-navy-400 mt-0.5 shrink-0" aria-hidden="true" />
          <div>
            <p className="text-xs text-navy-400">Date</p>
            <p className="text-sm font-medium text-navy-700">{challan.date}</p>
          </div>
        </div>
        <div className="flex items-start gap-2">
          <MapPin className="w-4 h-4 text-navy-400 mt-0.5 shrink-0" aria-hidden="true" />
          <div>
            <p className="text-xs text-navy-400">Location</p>
            <p className="text-sm font-medium text-navy-700">{challan.location}</p>
          </div>
        </div>
      </div>

      {/* Action */}
      {isPending && (
        <button
          onClick={onViewDetails}
          className="w-full flex items-center justify-center gap-2 rounded-xl bg-navy-900 text-white py-2.5 text-sm font-semibold transition-colors hover:bg-navy-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-400 cursor-pointer"
          aria-label={`View details for challan ${challan.id}`}
        >
          View details
          <ArrowRight className="w-4 h-4" aria-hidden="true" />
        </button>
      )}
      {!isPending && (
        <div className="flex items-center gap-2 text-green-800 bg-green-50 rounded-xl py-2.5 px-4 text-sm font-medium">
          <svg className="w-4 h-4 shrink-0" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
            <path fillRule="evenodd" d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z" clipRule="evenodd" />
          </svg>
          Paid — no action needed
        </div>
      )}
    </div>
  )
}
