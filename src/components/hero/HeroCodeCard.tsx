import { useState } from 'react'
import { motion } from 'framer-motion'
import { FiCheckCircle } from 'react-icons/fi'
import { useReducedMotion } from '@/hooks/useReducedMotion'

const LINES: { tokens: { text: string; className: string }[] }[] = [
  { tokens: [{ text: 'const', className: 'text-aurora-pink' }, { text: ' engineer = {', className: 'text-white/60' }] },
  { tokens: [{ text: '  name', className: 'text-white/80' }, { text: ': ', className: 'text-white/40' }, { text: "'Kowshalya'", className: 'text-aurora-cyan' }, { text: ',', className: 'text-white/40' }] },
  { tokens: [{ text: '  role', className: 'text-white/80' }, { text: ': ', className: 'text-white/40' }, { text: "'Senior Software Engineer'", className: 'text-aurora-cyan' }, { text: ',', className: 'text-white/40' }] },
  { tokens: [{ text: '  stack', className: 'text-white/80' }, { text: ': [', className: 'text-white/40' }, { text: "'React'", className: 'text-emerald-400' }, { text: ', ', className: 'text-white/40' }, { text: "'TypeScript'", className: 'text-emerald-400' }, { text: '],', className: 'text-white/40' }] },
  { tokens: [{ text: '  status', className: 'text-white/80' }, { text: ': ', className: 'text-white/40' }, { text: "'Building great UI'", className: 'text-aurora-cyan' }, { text: ',', className: 'text-white/40' }] },
  { tokens: [{ text: '}', className: 'text-white/60' }] },
]

/**
 * A small animated code-editor mock-up: syntax-highlighted lines reveal one
 * by one, a build-passing badge fades in once they're all in, and the
 * whole sequence replays every time this scrolls into view.
 */
export function HeroCodeCard() {
  const [playKey, setPlayKey] = useState(0)
  const reducedMotion = useReducedMotion()

  const replay = () => {
    if (reducedMotion) return
    setPlayKey((k) => k + 1)
  }

  const lineDelay = 0.35
  const badgeDelay = LINES.length * lineDelay + 0.3

  return (
    <motion.div
      onViewportEnter={replay}
      viewport={{ amount: 0.6 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="relative mx-auto w-full max-w-[340px] sm:max-w-[380px]"
    >
      <div
        className="absolute inset-0 -z-10 rounded-full opacity-40 blur-3xl"
        style={{
          background:
            'radial-gradient(circle, rgba(124,58,237,0.35) 0%, rgba(6,182,212,0.2) 45%, transparent 75%)',
        }}
        aria-hidden="true"
      />

      <div className="glass overflow-hidden rounded-3xl shadow-2xl shadow-aurora-violet/20">
        <div className="flex items-center gap-2 border-b border-white/10 px-4 py-3">
          <span className="h-3 w-3 rounded-full bg-rose-500/70" />
          <span className="h-3 w-3 rounded-full bg-amber-500/70" />
          <span className="h-3 w-3 rounded-full bg-emerald-500/70" />
          <span className="ml-2 font-mono text-xs text-white/40">engineer.ts</span>
        </div>

        <div key={playKey} className="p-5 font-mono text-sm leading-relaxed">
          {LINES.map((line, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -8 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: reducedMotion ? 0 : i * lineDelay }}
            >
              {line.tokens.map((t, ti) => (
                <span key={ti} className={t.className}>
                  {t.text}
                </span>
              ))}
              {i === LINES.length - 1 && (
                <span className="animate-blink ml-1 inline-block h-4 w-[2px] bg-aurora-cyan align-middle" aria-hidden="true" />
              )}
            </motion.div>
          ))}

          <motion.div
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: reducedMotion ? 0 : badgeDelay }}
            className="mt-4 flex items-center gap-2 rounded-full bg-emerald-500/10 px-3 py-1.5 text-xs font-medium text-emerald-400"
          >
            <FiCheckCircle size={13} /> Build passing
          </motion.div>
        </div>
      </div>
    </motion.div>
  )
}
