import { FiGithub, FiLinkedin, FiMail, FiArrowUp } from 'react-icons/fi'
import { motion } from 'framer-motion'
import { personal } from '@/data/resume'

const year = new Date().getFullYear()

export function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  return (
    <footer className="relative overflow-hidden border-t border-white/10 px-6 py-16 sm:px-10 lg:px-16">
      <div className="grid-bg pointer-events-none absolute inset-0 opacity-40" />

      <div className="relative mx-auto max-w-7xl">
        <div className="flex flex-col items-start justify-between gap-8 border-b border-white/10 pb-10 sm:flex-row sm:items-end">
          <div>
            <p className="font-display text-2xl font-bold">
              Kowshalya<span className="text-gradient">.</span>
            </p>
            <p className="mt-2 max-w-sm text-sm text-white/70">
              {personal.role} building fast, accessible, scalable interfaces from Frankfurt, Germany.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={`mailto:${personal.social.email}`}
              aria-label="Email Kowshalya"
              className="glass flex h-11 w-11 items-center justify-center rounded-full text-white/70 transition-colors hover:text-white"
            >
              <FiMail size={18} />
            </a>
            <a
              href={personal.social.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub profile"
              className="glass flex h-11 w-11 items-center justify-center rounded-full text-white/70 transition-colors hover:text-white"
            >
              <FiGithub size={18} />
            </a>
            <a
              href={personal.social.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn profile"
              className="glass flex h-11 w-11 items-center justify-center rounded-full text-white/70 transition-colors hover:text-white"
            >
              <FiLinkedin size={18} />
            </a>
            <motion.button
              type="button"
              onClick={scrollToTop}
              whileHover={{ y: -2 }}
              aria-label="Back to top"
              className="glass flex h-11 w-11 items-center justify-center rounded-full text-white/70 transition-colors hover:text-white"
            >
              <FiArrowUp size={18} />
            </motion.button>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-2 text-xs text-white/50 sm:flex-row sm:items-center sm:justify-between">
          <p>© {year} {personal.name}. All rights reserved.</p>
          <p>Built with React, TypeScript &amp; Tailwind CSS.</p>
        </div>
      </div>
    </footer>
  )
}
