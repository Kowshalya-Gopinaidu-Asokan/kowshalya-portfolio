import { useEffect, useRef, useState, type ReactNode } from 'react'
import { motion } from 'framer-motion'
import { FiMail, FiLinkedin, FiGithub, FiMapPin } from 'react-icons/fi'
import { personal } from '@/data/resume'

interface HistoryLine {
  id: number
  type: 'command' | 'output'
  content: ReactNode
}

const CONTACT_OUTPUT = (
  <div className="space-y-1.5">
    <p className="text-emerald-400">✓ Thank you for reaching out.</p>
    <p className="text-white/80">Kowshalya typically responds within 24 hours.</p>
    <div className="mt-3 space-y-1 text-white/85">
      <p className="flex items-center gap-2">
        <FiMail size={13} /> {personal.social.email}
      </p>
      <p className="flex items-center gap-2">
        <FiLinkedin size={13} /> {personal.social.linkedin.replace('https://', '')}
      </p>
      <p className="flex items-center gap-2">
        <FiGithub size={13} /> {personal.social.github.replace('https://', '')}
      </p>
      <p className="flex items-center gap-2">
        <FiMapPin size={13} /> {personal.social.location}
      </p>
    </div>
  </div>
)

const HELP_OUTPUT = (
  <div className="space-y-1 text-white/80">
    <p>Available commands:</p>
    <p><span className="text-aurora-cyan">npm about kowshalya</span>, get in touch</p>
    <p><span className="text-aurora-cyan">whoami</span>, quick bio</p>
    <p><span className="text-aurora-cyan">clear</span>, clear the terminal</p>
  </div>
)

const WHOAMI_OUTPUT = (
  <p className="text-white/80">
    {personal.name}, {personal.role}, {personal.location}. {personal.experienceYears} years, formerly at
    PayPal, HCL Tech and Cognizant.
  </p>
)

let idCounter = 0
function nextId() {
  idCounter += 1
  return idCounter
}

/** A creative terminal-style contact prompt, the "npm about kowshalya" easter egg. */
export function Terminal() {
  const [input, setInput] = useState('npm about kowshalya')
  const [history, setHistory] = useState<HistoryLine[]>([
    { id: nextId(), type: 'output', content: <p className="text-white/40">Type a command and press Enter. Try "npm about kowshalya".</p> },
  ])
  const scrollRef = useRef<HTMLDivElement>(null)
  const [highlighted, setHighlighted] = useState(false)

  const triggerHighlight = () => {
    setHighlighted(true)
    window.setTimeout(() => setHighlighted(false), 1800)
  }

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: 'smooth' })
  }, [history])

  const runCommand = (raw: string) => {
    const trimmed = raw.trim()
    if (!trimmed) return

    if (trimmed === 'clear') {
      setHistory([])
      setInput('')
      return
    }

    const commandLine: HistoryLine = { id: nextId(), type: 'command', content: trimmed }
    let output: ReactNode

    if (/^npm\s+about\s+kowshalya$/i.test(trimmed)) {
      output = CONTACT_OUTPUT
    } else if (trimmed === 'whoami') {
      output = WHOAMI_OUTPUT
    } else if (trimmed === 'help') {
      output = HELP_OUTPUT
    } else {
      output = (
        <p className="text-rose-400">
          command not found: {trimmed}, try <span className="text-aurora-cyan">help</span>
        </p>
      )
    }

    setHistory((prev) => [...prev, commandLine, { id: nextId(), type: 'output', content: output }])
    setInput('')
  }

  return (
    <motion.div
      onViewportEnter={triggerHighlight}
      viewport={{ amount: 0.6 }}
      animate={{
        boxShadow: highlighted
          ? '0 0 0 2px rgba(6,182,212,0.6), 0 0 40px rgba(6,182,212,0.25)'
          : '0 0 0 0px rgba(6,182,212,0)',
      }}
      transition={{ duration: 0.6 }}
      className="glass overflow-hidden rounded-3xl"
    >
      <div className="flex items-center gap-2 border-b border-white/10 px-4 py-3">
        <span className="h-3 w-3 rounded-full bg-rose-500/70" />
        <span className="h-3 w-3 rounded-full bg-amber-500/70" />
        <span className="h-3 w-3 rounded-full bg-emerald-500/70" />
        <span className="ml-2 font-mono text-xs text-white/40">kowshalya@portfolio: ~/contact</span>
      </div>

      <div ref={scrollRef} className="h-72 overflow-y-auto p-5 font-mono text-sm sm:h-80">
        {history.map((line) => (
          <motion.div
            key={line.id}
            initial={{ opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-3"
          >
            {line.type === 'command' ? (
              <p className="text-white">
                <span className="text-aurora-cyan">➜ </span>
                {line.content}
              </p>
            ) : (
              <div>{line.content}</div>
            )}
          </motion.div>
        ))}

        <form
          onSubmit={(e) => {
            e.preventDefault()
            runCommand(input)
          }}
          className="flex items-center gap-2"
        >
          <span className="text-aurora-cyan">➜</span>
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            aria-label="Terminal command input"
            className="flex-1 bg-transparent text-white outline-none placeholder:text-white/30"
            placeholder="npm about kowshalya"
            autoComplete="off"
            spellCheck={false}
          />
          <span className="animate-blink h-4 w-2 bg-white/70" aria-hidden="true" />
        </form>
      </div>
    </motion.div>
  )
}
