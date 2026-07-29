import { motion } from 'framer-motion'
import { FiDownload, FiFolder, FiSend, FiChevronDown } from 'react-icons/fi'
import { personal } from '@/data/resume'
import { Button } from '@/components/ui/Button'
import { TypingSkills } from '@/components/hero/TypingSkills'
import { CursorGlow } from '@/components/hero/CursorGlow'
import { HeroCodeCard } from '@/components/hero/HeroCodeCard'

function scrollTo(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

export function Hero() {
  return (
    <section
      id="hero"
      aria-label="Introduction"
      className="relative flex min-h-[100svh] items-center overflow-hidden px-6 pb-16 pt-24 sm:px-10 sm:pt-28 lg:px-16"
    >
      <div className="absolute inset-0 -z-10 bg-ink-950" />
      <div className="grid-bg absolute inset-0 -z-10 opacity-40" />
      <div
        className="absolute inset-0 -z-10 opacity-60"
        style={{
          background:
            'radial-gradient(60% 50% at 50% 0%, rgba(124,58,237,0.25) 0%, transparent 70%)',
        }}
        aria-hidden="true"
      />
      <CursorGlow />
      <div
        className="absolute inset-x-0 bottom-0 -z-10 h-1/2 bg-gradient-to-t from-ink-950 via-ink-950/60 to-transparent"
        aria-hidden="true"
      />

      <div className="relative mx-auto grid w-full max-w-6xl items-center gap-12 lg:grid-cols-[1.15fr,0.85fr] lg:gap-10">
        <div className="text-center lg:text-left">
          <motion.span
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="glass mx-auto inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-medium text-white/80 lg:mx-0"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            {personal.availability} · {personal.workAuth}
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-5 font-display text-4xl font-bold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-6xl"
          >
            {personal.name}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-3 text-xl font-medium text-gradient sm:text-2xl"
          >
            {personal.role}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-4 flex justify-center lg:justify-start"
          >
            <TypingSkills />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-white/75 sm:text-lg lg:mx-0"
          >
            {personal.experienceYears} years building production React.js, JavaScript and TypeScript
            applications across fintech and enterprise platforms at PayPal, HCL Tech and Cognizant. Based
            in {personal.location} and open to relocation.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-8 flex flex-wrap items-center justify-center gap-4 lg:justify-start"
          >
            <a href="/kowshalya-resume.pdf" download>
              <Button variant="primary" size="lg">
                <FiDownload /> Download Resume
              </Button>
            </a>
            <Button variant="secondary" size="lg" onClick={() => scrollTo('projects')}>
              <FiFolder /> View Projects
            </Button>
            <Button variant="outline" size="lg" onClick={() => scrollTo('contact')}>
              <FiSend /> Contact Me
            </Button>
          </motion.div>
        </div>

        <div className="hidden lg:flex lg:justify-end">
          <HeroCodeCard />
        </div>
      </div>

      <motion.button
        type="button"
        onClick={() => scrollTo('about')}
        aria-label="Scroll to About section"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 8, 0] }}
        transition={{ opacity: { delay: 1, duration: 0.6 }, y: { repeat: Infinity, duration: 1.8 } }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/50 hover:text-white"
      >
        <FiChevronDown size={24} />
      </motion.button>
    </section>
  )
}
