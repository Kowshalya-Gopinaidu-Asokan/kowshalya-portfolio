import { lazy, Suspense } from 'react'
import { motion } from 'framer-motion'
import { Hero } from '@/components/hero/Hero'
import { SectionFallback } from '@/components/ui/SectionFallback'

// Below-the-fold sections are code-split so the hero paints instantly.
const About = lazy(() => import('@/components/about/About').then((m) => ({ default: m.About })))
const CareerTimeline = lazy(() =>
  import('@/components/timeline/CareerTimeline').then((m) => ({ default: m.CareerTimeline }))
)
const SkillsUniverse = lazy(() =>
  import('@/components/skills/SkillsUniverse').then((m) => ({ default: m.SkillsUniverse }))
)
const Projects = lazy(() =>
  import('@/components/projects/Projects').then((m) => ({ default: m.Projects }))
)
const StatsSection = lazy(() =>
  import('@/components/stats/StatsSection').then((m) => ({ default: m.StatsSection }))
)
const AwardsSection = lazy(() =>
  import('@/components/awards/AwardsSection').then((m) => ({ default: m.AwardsSection }))
)
const ResumeSection = lazy(() =>
  import('@/components/resume/ResumeSection').then((m) => ({ default: m.ResumeSection }))
)
const ContactTerminal = lazy(() =>
  import('@/components/contact/ContactTerminal').then((m) => ({ default: m.ContactTerminal }))
)

export function HomePage() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <Hero />

      <Suspense fallback={<SectionFallback />}>
        <About />
      </Suspense>
      <Suspense fallback={<SectionFallback />}>
        <CareerTimeline />
      </Suspense>
      <Suspense fallback={<SectionFallback />}>
        <SkillsUniverse />
      </Suspense>
      <Suspense fallback={<SectionFallback />}>
        <Projects />
      </Suspense>
      <Suspense fallback={<SectionFallback />}>
        <StatsSection />
      </Suspense>
      <Suspense fallback={<SectionFallback />}>
        <AwardsSection />
      </Suspense>
      <Suspense fallback={<SectionFallback />}>
        <ResumeSection />
      </Suspense>
      <Suspense fallback={<SectionFallback />}>
        <ContactTerminal />
      </Suspense>
    </motion.div>
  )
}
