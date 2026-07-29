import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Section } from '@/components/ui/Section'
import { TimelineItem } from '@/components/timeline/TimelineItem'
import { careerTimeline } from '@/data/resume'
import { useReducedMotion } from '@/hooks/useReducedMotion'

gsap.registerPlugin(ScrollTrigger)

export function CareerTimeline() {
  const containerRef = useRef<HTMLDivElement>(null)
  const lineRef = useRef<HTMLDivElement>(null)
  const reducedMotion = useReducedMotion()

  // GSAP + ScrollTrigger scrubs the connecting line's growth to scroll
  // position, so the line is always exactly as "complete" as the reader is
  // through the timeline. start/end use the same viewport percentage (just
  // the top edge for start, the bottom edge for end) so the total scrub
  // distance matches the container's own height exactly, the line finishes
  // growing right as the last card scrolls by instead of lagging into the
  // next section.
  useEffect(() => {
    if (reducedMotion || !containerRef.current || !lineRef.current) return

    const ctx = gsap.context(() => {
      gsap.fromTo(
        lineRef.current,
        { scaleY: 0 },
        {
          scaleY: 1,
          ease: 'none',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 80%',
            end: 'bottom 80%',
            scrub: 0.5,
          },
        }
      )
    }, containerRef)

    // The accordion cards inside the timeline change height when opened or
    // closed, which moves the container's bottom edge. Without this,
    // ScrollTrigger keeps using its originally-measured end position and
    // the line drifts out of sync, appearing to keep growing after the
    // last card has already scrolled past.
    const resizeObserver = new ResizeObserver(() => ScrollTrigger.refresh())
    resizeObserver.observe(containerRef.current)

    return () => {
      resizeObserver.disconnect()
      ctx.revert()
    }
  }, [reducedMotion])

  return (
    <Section
      id="experience"
      label="Experience"
      title="Professional Experience"
      subtitle="Six years of frontend engineering across three companies, PayPal, HCL Tech and Cognizant, most recent first."
    >
      <div ref={containerRef} className="relative">
        <div className="absolute left-[17px] top-0 h-full w-px bg-white/10 sm:left-[21px]" aria-hidden="true" />
        <div
          ref={lineRef}
          className="absolute left-[17px] top-0 h-full w-px origin-top bg-aurora-gradient sm:left-[21px]"
          aria-hidden="true"
        />
        <ol className="relative">
          {careerTimeline.map((stop, i) => (
            <TimelineItem key={stop.id} stop={stop} index={i} />
          ))}
        </ol>
      </div>
    </Section>
  )
}
