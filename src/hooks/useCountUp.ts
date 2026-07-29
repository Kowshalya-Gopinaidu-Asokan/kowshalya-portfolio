import { useEffect, useRef, useState } from 'react'
import { useInView } from 'framer-motion'

/** Animates a number from 0 to `target` once the element scrolls into view. */
export function useCountUp(target: number, duration = 1600) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-10% 0px' })
  const [value, setValue] = useState(0)

  useEffect(() => {
    if (!inView) return
    let frame: number
    const start = performance.now()

    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setValue(Math.round(eased * target))
      if (progress < 1) frame = requestAnimationFrame(tick)
    }

    frame = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frame)
  }, [inView, target, duration])

  return { ref, value }
}
