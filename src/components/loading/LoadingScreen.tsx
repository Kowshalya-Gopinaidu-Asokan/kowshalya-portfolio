import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useReducedMotion } from '@/hooks/useReducedMotion'

interface LoadingScreenProps {
  onComplete: () => void
}

/**
 * Animated logo + progress loader shown on first paint. Progress is simulated
 * (real asset loading in this app is fast/code-split) but eases naturally and
 * never blocks longer than ~1.6s so it never feels like a fake gate.
 */
export function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [progress, setProgress] = useState(0)
  const [visible, setVisible] = useState(true)
  const reducedMotion = useReducedMotion()

  useEffect(() => {
    if (reducedMotion) {
      setProgress(100)
      const t = setTimeout(() => setVisible(false), 200)
      return () => clearTimeout(t)
    }

    let raf: number
    const start = performance.now()
    const duration = 1500

    const tick = (now: number) => {
      const elapsed = now - start
      const pct = Math.min(100, Math.round((elapsed / duration) * 100))
      setProgress(pct)
      if (pct < 100) {
        raf = requestAnimationFrame(tick)
      } else {
        setTimeout(() => setVisible(false), 350)
      }
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [reducedMotion])

  return (
    <AnimatePresence onExitComplete={onComplete}>
      {visible && (
        <motion.div
          role="status"
          aria-live="polite"
          aria-label={`Loading portfolio, ${progress}% complete`}
          className="fixed inset-0 z-[10000] flex flex-col items-center justify-center overflow-hidden bg-ink-950"
          exit={{ opacity: 0, filter: 'blur(12px)' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="absolute inset-0 animate-gradient-shift bg-aurora-gradient bg-[length:200%_200%] opacity-20" />
          <div className="grid-bg absolute inset-0 opacity-30" />

          <motion.svg
            width="72"
            height="72"
            viewBox="0 0 64 64"
            className="relative"
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <defs>
              <linearGradient id="loader-gradient" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#4f46e5" />
                <stop offset="50%" stopColor="#7c3aed" />
                <stop offset="100%" stopColor="#ec4899" />
              </linearGradient>
            </defs>
            <motion.path
              d="M20 16 L20 48 M20 32 L38 16 M20 32 L38 48"
              stroke="url(#loader-gradient)"
              strokeWidth={5}
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1.1, ease: 'easeInOut' }}
            />
            <motion.circle
              cx={46}
              cy={32}
              r={4}
              fill="url(#loader-gradient)"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.9, duration: 0.4 }}
            />
          </motion.svg>

          <p className="relative mt-6 font-display text-sm tracking-[0.3em] text-white/50">
            KOWSHALYA&nbsp;ASOKAN
          </p>

          <div className="relative mt-8 h-px w-52 overflow-hidden bg-white/10">
            <motion.div
              className="h-full bg-aurora-gradient"
              style={{ width: `${progress}%` }}
              transition={{ ease: 'linear' }}
            />
          </div>
          <p className="relative mt-3 font-mono text-xs tabular-nums text-white/40">{progress}%</p>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
