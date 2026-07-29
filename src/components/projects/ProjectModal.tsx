import type { ReactNode } from 'react'
import * as Dialog from '@radix-ui/react-dialog'
import { AnimatePresence, motion } from 'framer-motion'
import { FiX, FiBriefcase, FiGithub } from 'react-icons/fi'
import type { Project } from '@/types'
import { Badge } from '@/components/ui/Badge'

interface ProjectModalProps {
  project: Project | null
  onClose: () => void
}

function Block({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="mt-6">
      <h3 className="text-xs font-semibold uppercase tracking-widest text-white/40">{title}</h3>
      <div className="mt-2 text-sm leading-relaxed text-white/70">{children}</div>
    </section>
  )
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  const open = project !== null

  return (
    <Dialog.Root open={open} onOpenChange={(next) => !next && onClose()}>
      <AnimatePresence>
        {open && project && (
          <Dialog.Portal forceMount>
            <Dialog.Overlay asChild forceMount>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-[200] bg-black/70 backdrop-blur-sm"
              />
            </Dialog.Overlay>

            {/*
              This wrapper is a plain (non-motion) element that centers its
              child with flexbox. Framer Motion writes its own inline
              `transform` style onto the animated element below, which would
              silently override any centering done via a Tailwind
              `translate-x` class on that same element. Centering the layout
              here, one level up, keeps the animation and the positioning
              independent so the dialog always lands in the middle of the
              screen.
            */}
            <Dialog.Content asChild forceMount aria-describedby={undefined}>
              <div className="fixed inset-0 z-[201] flex items-start justify-center overflow-y-auto px-4 py-[4vh]">
                <motion.div
                  initial={{ opacity: 0, y: 40, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 40, scale: 0.98 }}
                  transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                  className="w-full max-w-3xl overflow-hidden rounded-3xl border border-white/10 bg-ink-900 shadow-2xl"
                >
                  <div className="flex items-start justify-between gap-4 border-b border-white/10 p-8 pb-6">
                    <div>
                      <Dialog.Title className="font-display text-2xl font-bold sm:text-3xl">
                        {project.title}
                      </Dialog.Title>
                      <p className="mt-1 text-aurora-cyan">{project.tagline}</p>
                      {(project.company || project.period) && (
                        <p className="mt-1 font-mono text-xs text-white/40">
                          {[project.company, project.period].filter(Boolean).join(' · ')}
                        </p>
                      )}
                    </div>
                    <Dialog.Close asChild>
                      <button
                        type="button"
                        aria-label="Close"
                        className="glass flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-white/70 hover:text-white"
                      >
                        <FiX size={18} />
                      </button>
                    </Dialog.Close>
                  </div>

                  <div className="max-h-[70vh] overflow-y-auto p-8 pt-2">
                    <Block title="Overview">{project.overview}</Block>

                    <Block title="Key Contributions">
                      <ul className="space-y-2">
                        {project.features.map((f, i) => (
                          <li key={i} className="flex gap-2">
                            <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-aurora-cyan" />
                            {f}
                          </li>
                        ))}
                      </ul>
                    </Block>

                    <Block title="Tech Stack">
                      <div className="flex flex-wrap gap-2">
                        {project.techStack.map((t) => (
                          <Badge key={t}>{t}</Badge>
                        ))}
                      </div>
                    </Block>

                    <div className="mt-8 flex flex-wrap gap-3 border-t border-white/10 pt-6">
                      {project.type === 'personal' && project.linkUrl ? (
                        <a
                          href={project.linkUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="glass flex items-center gap-2 rounded-full px-4 py-2 text-xs font-medium text-white/80 transition-colors hover:text-white"
                        >
                          <FiGithub size={13} /> {project.linkLabel}
                        </a>
                      ) : (
                        <span className="glass flex items-center gap-2 rounded-full px-4 py-2 text-xs text-white/60">
                          <FiBriefcase size={13} /> {project.linkLabel}
                        </span>
                      )}
                    </div>
                  </div>
                </motion.div>
              </div>
            </Dialog.Content>
          </Dialog.Portal>
        )}
      </AnimatePresence>
    </Dialog.Root>
  )
}
