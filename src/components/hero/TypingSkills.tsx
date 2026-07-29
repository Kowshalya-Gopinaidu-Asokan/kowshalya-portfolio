import { useTypingEffect } from '@/hooks/useTypingEffect'
import { personal } from '@/data/resume'

/** Types out the main skills line once, in a single row, and stops. */
export function TypingSkills() {
  const text = useTypingEffect({ words: [personal.skillsLine], loop: false })

  return (
    <div
      className="flex min-h-10 items-center justify-center gap-1 whitespace-nowrap font-mono text-base text-aurora-cyan sm:text-lg lg:justify-start"
      aria-live="polite"
    >
      <span>{text}</span>
      <span className="animate-blink inline-block h-5 w-[2px] shrink-0 bg-aurora-cyan" aria-hidden="true" />
    </div>
  )
}
