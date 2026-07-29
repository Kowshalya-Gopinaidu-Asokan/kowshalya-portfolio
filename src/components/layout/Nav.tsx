import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { FiMenu, FiX, FiSearch } from 'react-icons/fi'
import { useActiveSection } from '@/hooks/useActiveSection'
import { Button } from '@/components/ui/Button'
import { cn } from '@/lib/utils'

const links = [
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
]

// Computed once at module scope so useActiveSection always receives a
// stable array reference instead of a brand-new one on every render.
const sectionIds = links.map((l) => l.id)

function openCommandPalette() {
  document.dispatchEvent(new KeyboardEvent('keydown', { key: 'k', metaKey: true }))
}

export function Nav() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const active = useActiveSection(sectionIds)

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    setMobileOpen(false)
  }

  return (
    <header className="fixed inset-x-0 top-0 z-[100] px-4 pt-4 sm:px-8">
      <nav
        aria-label="Primary"
        className="glass mx-auto flex max-w-6xl items-center justify-between rounded-full px-4 py-2.5 sm:px-6"
      >
        <a
          href="#hero"
          onClick={(e) => {
            e.preventDefault()
            scrollTo('hero')
          }}
          aria-label="Back to top"
          className="flex h-10 w-10 items-center justify-center rounded-full bg-aurora-gradient font-display text-sm font-bold tracking-tight text-white shadow-lg shadow-aurora-violet/30"
        >
          KA
        </a>

        <ul className="hidden items-center gap-1 lg:flex">
          {links.map((link) => (
            <li key={link.id}>
              <button
                type="button"
                onClick={() => scrollTo(link.id)}
                aria-current={active === link.id ? 'true' : undefined}
                className={cn(
                  'rounded-full px-4 py-2 text-sm font-medium transition-colors',
                  active === link.id ? 'bg-white/10 text-white' : 'text-white/70 hover:text-white'
                )}
              >
                {link.label}
              </button>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-2 lg:flex">
          <button
            type="button"
            onClick={openCommandPalette}
            aria-label="Search this site (Ctrl+K)"
            className="glass flex items-center gap-2 rounded-full px-3 py-2 text-xs font-medium text-white/70 hover:text-white"
          >
            <FiSearch size={14} /> Search
          </button>
          <Button size="sm" onClick={() => scrollTo('contact')}>
            Hire Me
          </Button>
        </div>

        <button
          type="button"
          className="glass flex h-10 w-10 items-center justify-center rounded-full text-white lg:hidden"
          onClick={() => setMobileOpen((v) => !v)}
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <FiX size={18} /> : <FiMenu size={18} />}
        </button>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -12, height: 0 }}
            animate={{ opacity: 1, y: 0, height: 'auto' }}
            exit={{ opacity: 0, y: -12, height: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="glass mx-auto mt-2 max-w-6xl overflow-hidden rounded-3xl p-4 lg:hidden"
          >
            <ul className="flex flex-col gap-1">
              {links.map((link) => (
                <li key={link.id}>
                  <button
                    type="button"
                    onClick={() => scrollTo(link.id)}
                    className="w-full rounded-xl px-4 py-3 text-left text-sm font-medium text-white/90 hover:bg-white/5"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
            <div className="mt-3 flex items-center justify-between gap-2 border-t border-white/10 pt-3">
              <button
                type="button"
                onClick={openCommandPalette}
                aria-label="Search this site"
                className="glass flex h-10 w-10 items-center justify-center rounded-full text-white/70 hover:text-white"
              >
                <FiSearch size={16} />
              </button>
              <Button size="sm" onClick={() => scrollTo('contact')}>
                Hire Me
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
