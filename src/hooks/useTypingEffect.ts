import { useEffect, useState } from 'react'
import { useReducedMotion } from '@/hooks/useReducedMotion'

interface UseTypingEffectOptions {
  words: string[]
  typingSpeed?: number
  deletingSpeed?: number
  pauseDuration?: number
  /** When false, types the first word once and stops instead of looping. */
  loop?: boolean
}

/** Classic typewriter effect. Can loop through multiple words, or type a
 * single line once and stop (set loop: false). */
export function useTypingEffect({
  words,
  typingSpeed = 70,
  deletingSpeed = 40,
  pauseDuration = 1800,
  loop = true,
}: UseTypingEffectOptions): string {
  const reducedMotion = useReducedMotion()
  const [wordIndex, setWordIndex] = useState(0)
  const [text, setText] = useState('')
  const [phase, setPhase] = useState<'typing' | 'pausing' | 'deleting' | 'done'>('typing')

  useEffect(() => {
    if (reducedMotion) {
      setText(words[wordIndex] ?? '')
      return
    }

    const currentWord = words[wordIndex] ?? ''
    let timeout: ReturnType<typeof setTimeout>

    if (phase === 'typing') {
      if (text.length < currentWord.length) {
        timeout = setTimeout(() => setText(currentWord.slice(0, text.length + 1)), typingSpeed)
      } else if (!loop) {
        setPhase('done')
      } else {
        timeout = setTimeout(() => setPhase('pausing'), pauseDuration)
      }
    } else if (phase === 'pausing') {
      timeout = setTimeout(() => setPhase('deleting'), pauseDuration / 3)
    } else if (phase === 'deleting') {
      if (text.length > 0) {
        timeout = setTimeout(() => setText(text.slice(0, -1)), deletingSpeed)
      } else {
        setWordIndex((i) => (i + 1) % words.length)
        setPhase('typing')
      }
    }

    return () => clearTimeout(timeout)
  }, [text, phase, wordIndex, words, typingSpeed, deletingSpeed, pauseDuration, reducedMotion, loop])

  return text
}
