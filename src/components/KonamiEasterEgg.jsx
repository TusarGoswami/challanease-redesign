import { useState, useEffect, useCallback, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

// Classic Konami Code: ↑ ↑ ↓ ↓ ← → ← → B A
const KONAMI_SEQUENCE = [
  'ArrowUp', 'ArrowUp',
  'ArrowDown', 'ArrowDown',
  'ArrowLeft', 'ArrowRight',
  'ArrowLeft', 'ArrowRight',
  'b', 'a',
]

/**
 * Easter egg: two ways to trigger it.
 *   1. Konami code on keyboard (↑↑↓↓←→←→BA)
 *   2. Click the ChallanEase logo 5 times quickly (mobile-friendly)
 *
 * A subtle 🎮 hint in the footer reveals the sequence on hover.
 */
export default function KonamiEasterEgg() {
  const [index, setIndex] = useState(0)
  const [revealed, setRevealed] = useState(false)

  // --- Konami code keyboard listener ---
  const handleKeyDown = useCallback(
    (e) => {
      const key = e.key.length === 1 ? e.key.toLowerCase() : e.key
      if (key === KONAMI_SEQUENCE[index]) {
        const next = index + 1
        if (next === KONAMI_SEQUENCE.length) {
          setRevealed(true)
          setIndex(0)
        } else {
          setIndex(next)
        }
      } else {
        setIndex(0)
      }
    },
    [index]
  )

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [handleKeyDown])

  // --- Logo click listener (5 taps within 3 seconds) ---
  const clickTimestamps = useRef([])

  useEffect(() => {
    const handleLogoClick = () => {
      const now = Date.now()
      clickTimestamps.current.push(now)
      // Keep only clicks in the last 3 seconds
      clickTimestamps.current = clickTimestamps.current.filter(
        (t) => now - t < 3000
      )
      if (clickTimestamps.current.length >= 5) {
        setRevealed(true)
        clickTimestamps.current = []
      }
    }

    // Attach to all elements with data-easter-egg-trigger
    const triggers = document.querySelectorAll('[data-easter-egg-trigger]')
    triggers.forEach((el) => el.addEventListener('click', handleLogoClick))
    return () =>
      triggers.forEach((el) => el.removeEventListener('click', handleLogoClick))
  }, [])

  return (
    <AnimatePresence>
      {revealed && (
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          transition={{ type: 'spring', duration: 0.5 }}
          className="fixed bottom-6 left-6 right-6 sm:left-auto sm:right-6 z-[100] sm:max-w-xs"
          role="alert"
        >
          <div className="rounded-2xl bg-navy-900 text-white p-5 shadow-elevated border border-navy-700">
            <div className="flex items-start justify-between gap-3">
              <div>
                <p className="text-sm font-semibold mb-1">🎮 You found it!</p>
                <p className="text-xs text-navy-300 leading-relaxed">
                  You entered the Konami code. This person clearly has good taste in
                  hidden secrets. Welcome to the bonus round.
                </p>
              </div>
              <button
                onClick={() => setRevealed(false)}
                className="text-navy-400 hover:text-white transition-colors shrink-0 mt-0.5 cursor-pointer"
                aria-label="Dismiss easter egg"
              >
                ✕
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
