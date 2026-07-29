import { motion } from 'framer-motion'
import { FiArrowUpRight, FiTrendingUp, FiBriefcase, FiGithub } from 'react-icons/fi'
import type { Project } from '@/types'
import { Badge } from '@/components/ui/Badge'

interface ProjectCardProps {
  project: Project
  onOpen: (project: Project) => void
}

export function ProjectCard({ project, onOpen }: ProjectCardProps) {
  const isPersonal = project.type === 'personal'

  const handleClick = () => {
    if (isPersonal && project.linkUrl) {
      window.open(project.linkUrl, '_blank', 'noreferrer')
      return
    }
    onOpen(project)
  }

  return (
    <motion.button
      type="button"
      onClick={handleClick}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-10% 0px' }}
      whileHover={{ y: -6 }}
      transition={{ duration: 0.5 }}
      className="glass group relative flex h-full flex-col overflow-hidden rounded-3xl p-7 text-left"
    >
      <div className="flex items-center justify-between">
        <span className="glass flex h-11 w-11 items-center justify-center rounded-2xl text-aurora-cyan">
          {isPersonal ? <FiGithub size={18} /> : <FiBriefcase size={18} />}
        </span>
        {project.metric && (
          <div className="flex items-center gap-1.5 rounded-full bg-white/[0.06] px-3 py-1.5 text-xs font-semibold text-white">
            <FiTrendingUp size={12} className="text-emerald-400" />
            {project.metric.value}
          </div>
        )}
      </div>

      <div className="mt-5 flex flex-1 flex-col">
        <div className="flex flex-wrap items-center gap-2">
          <h3 className="font-display text-xl font-semibold">{project.title}</h3>
          {isPersonal && (
            <span className="rounded-full border border-white/15 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-white/50">
              Personal
            </span>
          )}
        </div>
        <p className="mt-1 text-sm text-aurora-cyan">{project.tagline}</p>
        <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-white/75">{project.overview}</p>

        <div className="mt-4 flex flex-wrap gap-2">
          {project.techStack.slice(0, 4).map((t) => (
            <Badge key={t}>{t}</Badge>
          ))}
        </div>

        <span className="mt-6 flex items-center gap-1 text-xs font-semibold uppercase tracking-widest text-aurora-cyan">
          {isPersonal ? 'View on GitHub' : 'Explore Details'}
          <FiArrowUpRight className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </span>
      </div>
    </motion.button>
  )
}
