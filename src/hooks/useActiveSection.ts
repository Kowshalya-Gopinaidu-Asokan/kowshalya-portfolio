import { useEffect, useState } from 'react'

// Distance from the top of the viewport, in pixels, that a section's top
// edge must cross before it's considered "active". Roughly matches the
// height of the floating nav plus a little breathing room.
const NAV_OFFSET = 140

/**
 * Scroll-spy: returns whichever section id currently sits just below the
 * floating nav, so the highlighted nav link always matches what's on
 * screen.
 *
 * Sections below the fold are code-split with React.lazy/Suspense, so they
 * may not exist in the DOM yet at the moment this hook's effect first runs.
 * Elements are re-queried fresh on every scroll/resize event (rather than
 * cached once at effect-setup time) so a section that mounts a moment
 * later is still picked up, instead of the hook silently giving up and
 * getting stuck on its initial default forever.
 */
export function useActiveSection(sectionIds: string[]): string {
  const [active, setActive] = useState<string>(sectionIds[0] ?? '')

  // Depend on the joined ids rather than the array reference, since callers
  // often pass a freshly-mapped array literal on every render.
  const key = sectionIds.join('|')

  useEffect(() => {
    let ticking = false

    const updateActive = () => {
      ticking = false

      const elements = sectionIds
        .map((id) => document.getElementById(id))
        .filter((el): el is HTMLElement => el !== null)

      if (elements.length === 0) return

      let current = elements[0].id
      for (const el of elements) {
        if (el.getBoundingClientRect().top - NAV_OFFSET <= 0) {
          current = el.id
        }
      }
      setActive((prev) => (prev === current ? prev : current))
    }

    const onScroll = () => {
      if (ticking) return
      ticking = true
      requestAnimationFrame(updateActive)
    }

    updateActive()
    // Sections lazily mount shortly after first render; re-check once more
    // after they've had a chance to land, in case the visitor hasn't
    // scrolled yet.
    const settleTimer = window.setTimeout(updateActive, 400)

    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.clearTimeout(settleTimer)
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [key])

  return active
}
