import { useState, useCallback } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { useKonami } from '@/hooks/useKonami'

/** Konami-code hidden easter egg, a small celebration overlay. */
export function KonamiEasterEgg() {
  const [visible, setVisible] = useState(false)

  const unlock = useCallback(() => {
    setVisible(true)
    window.setTimeout(() => setVisible(false), 3200)
  }, [])

  useKonami(unlock)

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          role="status"
          aria-live="polite"
          initial={{ opacity: 0, y: 40, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 40, scale: 0.9 }}
          className="fixed bottom-8 left-1/2 z-[9998] -translate-x-1/2 rounded-2xl border border-white/10 bg-ink-900/95 px-6 py-4 text-center shadow-2xl backdrop-blur-xl"
        >
          <p className="font-display text-lg font-semibold text-gradient">Konami mode unlocked 🎉</p>
          <p className="mt-1 text-sm text-white/60">You found the easter egg. Bonus points for curiosity.</p>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
