import { useEffect, useRef } from 'react'
import { useReducedMotion } from '@/hooks/useReducedMotion'

/**
 * A soft radial glow that follows the cursor within the hero section only.
 * Uses direct DOM style mutation (not React state) to stay perfectly smooth
 * at 60fps without triggering re-renders.
 */
export function CursorGlow() {
  const glowRef = useRef<HTMLDivElement>(null)
  const reducedMotion = useReducedMotion()

  useEffect(() => {
    if (reducedMotion) return
    const el = glowRef.current
    if (!el) return

    const handleMove = (e: MouseEvent) => {
      const parent = el.parentElement
      if (!parent) return
      const rect = parent.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top
      el.style.transform = `translate3d(${x - 240}px, ${y - 240}px, 0)`
    }

    window.addEventListener('mousemove', handleMove, { passive: true })
    return () => window.removeEventListener('mousemove', handleMove)
  }, [reducedMotion])

  if (reducedMotion) return null

  return (
    <div
      ref={glowRef}
      aria-hidden="true"
      className="pointer-events-none absolute left-0 top-0 h-[480px] w-[480px] rounded-full opacity-30 blur-3xl transition-transform duration-150 ease-out will-change-transform"
      style={{
        background:
          'radial-gradient(circle, rgba(124,58,237,0.6) 0%, rgba(6,182,212,0.3) 45%, transparent 70%)',
      }}
    />
  )
}
