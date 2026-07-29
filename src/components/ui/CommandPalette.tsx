import { useEffect, useState, useCallback, type ReactNode } from 'react'
import { Command } from 'cmdk'
import {
  FiHome,
  FiUser,
  FiCpu,
  FiBriefcase,
  FiFolder,
  FiAward,
  FiMail,
  FiGithub,
  FiLinkedin,
  FiDownload,
} from 'react-icons/fi'
import { personal } from '@/data/resume'

interface NavTarget {
  id: string
  label: string
  icon: ReactNode
}

const navTargets: NavTarget[] = [
  { id: 'hero', label: 'Home', icon: <FiHome /> },
  { id: 'about', label: 'About', icon: <FiUser /> },
  { id: 'experience', label: 'Experience', icon: <FiBriefcase /> },
  { id: 'skills', label: 'Skills', icon: <FiCpu /> },
  { id: 'projects', label: 'Projects', icon: <FiFolder /> },
  { id: 'awards', label: 'Awards', icon: <FiAward /> },
  { id: 'contact', label: 'Contact', icon: <FiMail /> },
]

/** Global ⌘K / Ctrl+K command palette, jump to any section or open external profiles. */
export function CommandPalette() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault()
        setOpen((prev) => !prev)
      }
      if (e.key === 'Escape') setOpen(false)
    }
    document.addEventListener('keydown', handler)
    return () => document.removeEventListener('keydown', handler)
  }, [])

  const goTo = useCallback((id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    setOpen(false)
  }, [])

  return (
    <Command.Dialog
      open={open}
      onOpenChange={setOpen}
      label="Command palette"
      className="fixed left-1/2 top-24 z-[9997] w-[92vw] max-w-xl -translate-x-1/2 overflow-hidden rounded-2xl border border-white/10 bg-ink-900/95 text-white shadow-2xl backdrop-blur-2xl"
    >
      <div className="flex items-center gap-2 border-b border-white/10 px-4">
        <span className="font-mono text-xs text-white/40">⌘K</span>
        <Command.Input
          autoFocus
          placeholder="Jump to a section or open a profile…"
          className="w-full bg-transparent py-4 text-sm text-white outline-none placeholder:text-white/40"
        />
      </div>
      <Command.List className="max-h-80 overflow-y-auto p-2">
        <Command.Empty className="px-4 py-6 text-center text-sm text-white/40">
          No results found.
        </Command.Empty>

        <Command.Group heading="Navigate" className="px-2 py-2 text-xs uppercase tracking-wider text-white/40">
          {navTargets.map((t) => (
            <Command.Item
              key={t.id}
              onSelect={() => goTo(t.id)}
              className="flex cursor-pointer items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-white/80 aria-selected:bg-white/10 aria-selected:text-white"
            >
              {t.icon}
              {t.label}
            </Command.Item>
          ))}
        </Command.Group>

        <Command.Group heading="Actions" className="px-2 py-2 text-xs uppercase tracking-wider text-white/40">
          <Command.Item
            onSelect={() => {
              window.open('/kowshalya-resume.pdf', '_blank')
              setOpen(false)
            }}
            className="flex cursor-pointer items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-white/80 aria-selected:bg-white/10 aria-selected:text-white"
          >
            <FiDownload />
            Download resume
          </Command.Item>
          <Command.Item
            onSelect={() => window.open(personal.social.github, '_blank')}
            className="flex cursor-pointer items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-white/80 aria-selected:bg-white/10 aria-selected:text-white"
          >
            <FiGithub />
            Open GitHub profile
          </Command.Item>
          <Command.Item
            onSelect={() => window.open(personal.social.linkedin, '_blank')}
            className="flex cursor-pointer items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-white/80 aria-selected:bg-white/10 aria-selected:text-white"
          >
            <FiLinkedin />
            Open LinkedIn profile
          </Command.Item>
        </Command.Group>
      </Command.List>
    </Command.Dialog>
  )
}
