import { motion } from 'framer-motion'
import { X, Calendar, MapPin, Shield, AlertTriangle, Camera, CreditCard } from 'lucide-react'
import { useState } from 'react'
import Button from './Button'

/**
 * ChallanDetailModal — detailed view of a challan showing simulated
 * evidence (camera log, speed), payment action, and dispute action.
 */
export default function ChallanDetailModal({ challan, vehicleNumber, onClose, onPaymentSuccess }) {
  const [paymentState, setPaymentState] = useState('idle') // idle | processing | success
  const [disputed, setDisputed] = useState(false)

  const handlePay = () => {
    setPaymentState('processing')
    setTimeout(() => {
      setPaymentState('success')
      if (onPaymentSuccess) {
        onPaymentSuccess(challan.id)
      }
    }, 1500)
  }

  const handleDispute = () => {
    setDisputed(true)
  }

  const isPending = challan.status === 'pending' && paymentState !== 'success'

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 bg-navy-950/60 backdrop-blur-sm"
        aria-hidden="true"
      />

      {/* Modal Container */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 16 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 16 }}
        className="bg-white rounded-3xl shadow-elevated border border-navy-100 w-full max-w-xl max-h-[90vh] overflow-hidden flex flex-col relative z-10"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-navy-100">
          <div>
            <h3 id="modal-title" className="text-base font-bold text-navy-900">
              Challan Details
            </h3>
            <p className="text-xs text-navy-400">{challan.id}</p>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg hover:bg-navy-50 text-navy-400 hover:text-navy-900 transition-colors cursor-pointer"
            aria-label="Close details modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="px-6 py-5 overflow-y-auto space-y-5 flex-1">
          {/* Status Flag */}
          {!isPending ? (
            <div className="flex items-center gap-2 text-green-800 bg-green-50 p-3.5 rounded-xl text-xs font-semibold border border-green-100">
              <Shield className="w-4 h-4 text-green-600" />
              <span>Challan Fully Resolved — No Payment Required</span>
            </div>
          ) : disputed ? (
            <div className="flex items-center gap-2 text-sky-800 bg-sky-50 p-3.5 rounded-xl text-xs font-semibold border border-sky-100">
              <Shield className="w-4 h-4 text-sky-600" />
              <span>Dispute Submitted — Under review by division traffic cell</span>
            </div>
          ) : (
            <div className="flex items-center gap-2 text-amber-800 bg-amber-50 p-3.5 rounded-xl text-xs font-semibold border border-amber-100">
              <AlertTriangle className="w-4 h-4 text-amber-600 animate-pulse" />
              <span>Action Required — Please resolve by paying or disputing</span>
            </div>
          )}

          {/* Details Grid */}
          <div className="grid grid-cols-2 gap-4 bg-navy-50/40 p-4 rounded-2xl border border-navy-100/50">
            <div>
              <p className="text-[10px] text-navy-400 uppercase font-bold tracking-wider">Violation</p>
              <p className="text-sm font-semibold text-navy-900">{challan.violation}</p>
            </div>
            <div>
              <p className="text-[10px] text-navy-400 uppercase font-bold tracking-wider">Vehicle Number</p>
              <p className="text-sm font-mono font-bold text-navy-900">{vehicleNumber}</p>
            </div>
            <div>
              <p className="text-[10px] text-navy-400 uppercase font-bold tracking-wider">Fine Amount</p>
              <p className="text-sm font-bold text-red-600">₹{challan.amount.toLocaleString('en-IN')}</p>
            </div>
            <div>
              <p className="text-[10px] text-navy-400 uppercase font-bold tracking-wider">Act & Section</p>
              <p className="text-sm font-medium text-navy-700">{challan.section}</p>
            </div>
            <div className="col-span-2 border-t border-navy-100/60 pt-3 mt-1 grid grid-cols-2 gap-4">
              <div>
                <p className="text-[10px] text-navy-400 uppercase font-bold tracking-wider">Date & Time</p>
                <div className="flex items-center gap-1 mt-0.5 text-xs text-navy-700">
                  <Calendar className="w-3.5 h-3.5 text-navy-400" />
                  <span>{challan.date}</span>
                </div>
              </div>
              <div>
                <p className="text-[10px] text-navy-400 uppercase font-bold tracking-wider">Location</p>
                <div className="flex items-center gap-1 mt-0.5 text-xs text-navy-700">
                  <MapPin className="w-3.5 h-3.5 text-navy-400" />
                  <span className="truncate" title={challan.location}>{challan.location}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Evidence Image Block */}
          <div>
            <p className="text-xs font-semibold text-navy-900 mb-2">Simulated Evidence Log</p>
            <div className="bg-navy-950 rounded-xl p-4 text-white relative overflow-hidden flex flex-col justify-between min-h-[140px] border border-navy-800">
              {/* Scanlines / Camera look */}
              <div className="absolute inset-0 bg-[radial-gradient(transparent_50%,rgba(0,0,0,0.4))] pointer-events-none" />
              <div className="absolute top-2 left-2 flex items-center gap-1.5 bg-red-600 text-[8px] font-bold tracking-wider px-1.5 py-0.5 rounded uppercase">
                <span className="w-1 h-1 rounded-full bg-white animate-ping" />
                CCTV LIVE
              </div>

              <div className="flex justify-between items-start pt-4 relative z-10">
                <div className="space-y-1 font-mono text-[9px] text-navy-300">
                  <p>CAM ID: ANPR_WEST_MAIN</p>
                  <p>PLATE: {vehicleNumber}</p>
                  {challan.violation.toLowerCase().includes('speed') ? (
                    <p className="text-red-400 font-bold">SPEED: 84 km/h (Limit: 60 km/h)</p>
                  ) : (
                    <p className="text-amber-400 font-bold">STATE: SIGNAL JUMP DETECTED</p>
                  )}
                </div>
                <Camera className="w-8 h-8 text-navy-600/70" />
              </div>

              <div className="border-t border-navy-800 pt-2 mt-4 flex justify-between items-center text-[8px] font-mono text-navy-400 relative z-10">
                <span>POLICE HEADQUARTERS</span>
                <span>{challan.date}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Modal Footer / Actions */}
        <div className="px-6 py-4 border-t border-navy-100 bg-navy-50/50 flex flex-col sm:flex-row gap-2 justify-end">
          {paymentState === 'processing' ? (
            <Button disabled className="w-full sm:w-auto">
              <Loader2 className="w-4 h-4 animate-spin" />
              Processing Demo Payment...
            </Button>
          ) : paymentState === 'success' ? (
            <div className="text-center w-full py-2 text-sm font-semibold text-green-700 bg-green-50 border border-green-200 rounded-xl">
              ✓ Demo Payment Processed Successfully
            </div>
          ) : disputed ? (
            <Button variant="secondary" onClick={onClose} className="w-full">
              Close
            </Button>
          ) : (
            <>
              {isPending && (
                <button
                  onClick={handleDispute}
                  className="px-4 py-2.5 rounded-xl border border-navy-200 text-navy-600 hover:text-navy-900 hover:bg-white text-xs font-semibold transition-colors cursor-pointer w-full sm:w-auto"
                >
                  Dispute Challan
                </button>
              )}
              {isPending ? (
                <Button onClick={handlePay} className="w-full sm:w-auto">
                  <CreditCard className="w-4 h-4" />
                  Pay Penalty (Demo)
                </Button>
              ) : (
                <Button onClick={onClose} className="w-full sm:w-auto">
                  Done
                </Button>
              )}
            </>
          )}
        </div>
      </motion.div>
    </div>
  )
}

function Loader2({ className }) {
  return (
    <svg
      className={`animate-spin h-5 w-5 ${className}`}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
    >
      <circle
        className="opacity-25"
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        strokeWidth="4"
      />
      <path
        className="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
      />
    </svg>
  )
}
