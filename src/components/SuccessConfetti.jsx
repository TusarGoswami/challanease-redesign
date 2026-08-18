import { useEffect, useState } from 'react'

/**
 * SuccessConfetti — lightweight CSS-only confetti burst.
 * Renders 20 small colored dots that fly outward and fade.
 * Unmounts itself after the animation completes.
 */
export default function SuccessConfetti() {
  const [particles, setParticles] = useState([])

  useEffect(() => {
    const colors = ['#38bdf8', '#22d3ee', '#0ea5e9', '#22c55e', '#f59e0b', '#a78bfa']
    const items = Array.from({ length: 24 }, (_, i) => ({
      id: i,
      color: colors[i % colors.length],
      x: (Math.random() - 0.5) * 200,
      y: (Math.random() - 0.5) * 200 - 60,
      scale: 0.5 + Math.random() * 0.8,
      delay: Math.random() * 0.15,
    }))
    setParticles(items)

    // Clean up after animation
    const timer = setTimeout(() => setParticles([]), 1200)
    return () => clearTimeout(timer)
  }, [])

  if (particles.length === 0) return null

  return (
    <div
      className="absolute inset-0 pointer-events-none overflow-hidden z-20"
      aria-hidden="true"
    >
      {particles.map((p) => (
        <span
          key={p.id}
          className="absolute left-1/2 top-1/2 rounded-full"
          style={{
            width: `${6 * p.scale}px`,
            height: `${6 * p.scale}px`,
            backgroundColor: p.color,
            animation: `confetti-burst 0.8s ${p.delay}s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards`,
            '--confetti-x': `${p.x}px`,
            '--confetti-y': `${p.y}px`,
            opacity: 0,
          }}
        />
      ))}
    </div>
  )
}
