import { useEffect, useRef } from 'react'

const KONAMI_SEQUENCE = [
  'ArrowUp',
  'ArrowUp',
  'ArrowDown',
  'ArrowDown',
  'ArrowLeft',
  'ArrowRight',
  'ArrowLeft',
  'ArrowRight',
  'b',
  'a',
]

/** Hidden easter egg, the Konami code triggers a callback. */
export function useKonami(onUnlock: () => void): void {
  const progress = useRef(0)

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      const expected = KONAMI_SEQUENCE[progress.current]
      if (e.key.toLowerCase() === expected?.toLowerCase()) {
        progress.current += 1
        if (progress.current === KONAMI_SEQUENCE.length) {
          progress.current = 0
          onUnlock()
        }
      } else {
        progress.current = e.key === KONAMI_SEQUENCE[0] ? 1 : 0
      }
    }

    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [onUnlock])
}
