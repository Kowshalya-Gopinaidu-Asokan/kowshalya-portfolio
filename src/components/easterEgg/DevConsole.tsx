import { useEffect } from 'react'
import { personal } from '@/data/resume'

/** Prints a styled message in the browser devtools, a small nod to fellow engineers. */
export function DevConsole() {
  useEffect(() => {
    const styles = [
      'font-size: 14px',
      'font-weight: bold',
      'padding: 8px 12px',
      'color: #ffffff',
      'background: linear-gradient(90deg, #4f46e5, #7c3aed, #ec4899)',
      'border-radius: 6px',
    ].join(';')

    // eslint-disable-next-line no-console
    console.log('%c👋 Hey, fellow engineer.', styles)
    console.log(
      `%cLooking at the source? I like that. This site is React 19 + TypeScript + Vite, built by ${personal.name}.`,
      'color:#a78bfa; font-size:12px;'
    )
    console.log(
      '%cTry the command palette with ⌘K / Ctrl+K, or the Konami code for something extra 👀',
      'color:#22d3ee; font-size:12px;'
    )
    console.log(`%cSay hi: ${personal.social.email}`, 'color:#f472b6; font-size:12px;')
  }, [])

  return null
}
