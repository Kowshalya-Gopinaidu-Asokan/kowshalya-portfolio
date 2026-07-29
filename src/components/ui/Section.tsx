import { type ReactNode } from 'react'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

interface SectionProps {
  id: string
  label?: string
  title: string
  subtitle?: string
  children: ReactNode
  className?: string
  containerClassName?: string
}

/**
 * Shared scroll-reveal wrapper for every major page section, keeps
 * heading typography, spacing and reveal animation consistent site-wide.
 */
export function Section({
  id,
  label,
  title,
  subtitle,
  children,
  className,
  containerClassName,
}: SectionProps) {
  return (
    <section
      id={id}
      aria-labelledby={`${id}-heading`}
      className={cn('relative scroll-mt-24 px-6 py-24 sm:px-10 lg:px-16 lg:py-32', className)}
    >
      <div className={cn('mx-auto max-w-7xl', containerClassName)}>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-15% 0px' }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mb-14 max-w-3xl"
        >
          {label && (
            <span className="mb-4 inline-block rounded-full border border-white/15 bg-white/5 px-4 py-1 font-mono text-xs uppercase tracking-widest text-aurora-cyan">
              {label}
            </span>
          )}
          <h2
            id={`${id}-heading`}
            className="font-display text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl"
          >
            {title}
          </h2>
          {subtitle && <p className="mt-4 text-base text-white/75 sm:text-lg">{subtitle}</p>}
        </motion.div>
        {children}
      </div>
    </section>
  )
}
