/**
 * StatusBadge — semantic status indicator for challan state.
 */
export default function StatusBadge({ status }) {
  const config = {
    pending: {
      label: 'Payment Pending',
      className: 'bg-amber-50 text-amber-800 ring-amber-500/20',
    },
    paid: {
      label: 'Paid',
      className: 'bg-green-50 text-green-800 ring-green-500/20',
    },
    overdue: {
      label: 'Overdue',
      className: 'bg-red-50 text-red-800 ring-red-500/20',
    },
    disputed: {
      label: 'Disputed',
      className: 'bg-navy-50 text-navy-700 ring-navy-500/20',
    },
  }

  const { label, className } = config[status] || config.pending

  return (
    <span
      className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold ring-1 ring-inset ${className}`}
      role="status"
      aria-label={`Challan status: ${label}`}
    >
      {label}
    </span>
  )
}
