import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { FiChevronDown, FiMapPin, FiCheckCircle } from 'react-icons/fi'
import type { CareerStop } from '@/types'
import { Badge } from '@/components/ui/Badge'
import { cn } from '@/lib/utils'

interface TimelineItemProps {
  stop: CareerStop
  index: number
}

export function TimelineItem({ stop, index }: TimelineItemProps) {
  const [open, setOpen] = useState(index === 0)

  return (
    <motion.li
      initial={{ opacity: 0, x: -24 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: '-10% 0px' }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="relative pb-12 pl-14 last:pb-0 sm:pl-20"
    >
      <span
        className={cn(
          'absolute left-0 top-1 flex h-9 w-9 items-center justify-center rounded-full border sm:h-11 sm:w-11',
          stop.isFuture
            ? 'border-dashed border-white/30 bg-transparent text-white/50'
            : 'border-transparent bg-aurora-gradient text-white shadow-lg shadow-aurora-violet/30'
        )}
      >
        <span className="text-xs font-bold sm:text-sm">{index + 1}</span>
      </span>

      <div className="glass overflow-hidden rounded-3xl">
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          className="flex w-full flex-col items-start gap-2 p-6 text-left sm:flex-row sm:items-center sm:justify-between"
        >
          <div>
            <div className="flex flex-wrap items-center gap-2">
              <h3 className="font-display text-xl font-semibold">{stop.company}</h3>
              {stop.isFuture && <Badge className="border-aurora-cyan/40 text-aurora-cyan">Open</Badge>}
            </div>
            <p className="mt-1 text-sm text-white/75">{stop.role}</p>
            <div className="mt-2 flex flex-wrap items-center gap-3 text-xs text-white/40">
              <span className="flex items-center gap-1">
                <FiMapPin size={12} /> {stop.location}
              </span>
              <span className="font-mono">{stop.period}</span>
            </div>
          </div>
          <motion.span
            animate={{ rotate: open ? 180 : 0 }}
            transition={{ duration: 0.3 }}
            className="shrink-0 text-white/50"
          >
            <FiChevronDown size={20} />
          </motion.span>
        </button>

        <AnimatePresence initial={false}>
          {open && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="overflow-hidden"
            >
              <div className="border-t border-white/10 px-6 pb-6 pt-5">
                <p className="text-sm leading-relaxed text-white/80">{stop.summary}</p>

                {stop.highlights && stop.highlights.length > 0 && (
                  <div className="mt-5">
                    <h4 className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-white/40">
                      <FiCheckCircle size={13} /> Key Contributions
                    </h4>
                    <ul className="mt-3 space-y-2">
                      {stop.highlights.map((item, i) => (
                        <li key={i} className="flex gap-2 text-sm text-white/85">
                          <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-aurora-cyan" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {stop.techStack && stop.techStack.length > 0 && (
                  <div className="mt-5 flex flex-wrap gap-2">
                    {stop.techStack.map((tech) => (
                      <Badge key={tech}>{tech}</Badge>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.li>
  )
}
