import { useRef, useState, type FormEvent } from 'react'
import { motion } from 'framer-motion'
import { FiSend, FiCheckCircle, FiMail, FiCopy } from 'react-icons/fi'
import { Button } from '@/components/ui/Button'
import { personal } from '@/data/resume'

type Status = 'idle' | 'sent'
type CopyStatus = 'idle' | 'copied'

/**
 * Contact form that opens the visitor's own email client with a pre-filled
 * message via a mailto: link. This requires no third-party service, no API
 * keys and no backend, so it always works. The recipient address and
 * subject are pre-populated; the message is left blank for the visitor to
 * write themselves.
 */
export function ContactForm() {
  const formRef = useRef<HTMLFormElement>(null)
  const [status, setStatus] = useState<Status>('idle')
  const [copyStatus, setCopyStatus] = useState<CopyStatus>('idle')

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(personal.social.email)
      setCopyStatus('copied')
      window.setTimeout(() => setCopyStatus('idle'), 2000)
    } catch {
      // Clipboard access can fail in some browser contexts; the address is
      // already visible in the "To" line for the visitor to copy by hand.
    }
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!formRef.current) return

    const data = new FormData(formRef.current)
    const name = String(data.get('from_name') ?? '')
    const email = String(data.get('reply_to') ?? '')
    const message = String(data.get('message') ?? '')

    const subject = `Hiring Inquiry for ${personal.name}, from ${name}`
    const body = `${message}\n\nBest regards,\n${name}\n${email}`
    const mailtoUrl = `mailto:${personal.social.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`

    window.location.href = mailtoUrl
    setStatus('sent')
  }

  return (
    <form ref={formRef} onSubmit={handleSubmit} className="glass flex flex-col gap-4 rounded-3xl p-8">
      <div className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white/70">
        <FiMail size={14} className="shrink-0 text-aurora-cyan" />
        <span className="min-w-0 flex-1 truncate">
          To <span className="text-white/90">{personal.social.email}</span>
        </span>
        <button
          type="button"
          onClick={copyEmail}
          className="shrink-0 rounded-full px-2 py-1 text-xs font-medium text-white/50 transition-colors hover:text-white"
        >
          <span className="flex items-center gap-1">
            <FiCopy size={12} /> {copyStatus === 'copied' ? 'Copied' : 'Copy'}
          </span>
        </button>
      </div>

      <div>
        <label htmlFor="from_name" className="mb-1.5 block text-xs font-medium text-white/50">
          Name
        </label>
        <input
          id="from_name"
          name="from_name"
          type="text"
          required
          className="w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white outline-none transition-colors focus:border-aurora-cyan"
          placeholder="Your name"
        />
      </div>
      <div>
        <label htmlFor="reply_to" className="mb-1.5 block text-xs font-medium text-white/50">
          Email
        </label>
        <input
          id="reply_to"
          name="reply_to"
          type="email"
          required
          className="w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white outline-none transition-colors focus:border-aurora-cyan"
          placeholder="you@company.com"
        />
      </div>
      <div>
        <label htmlFor="message" className="mb-1.5 block text-xs font-medium text-white/50">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={6}
          className="w-full resize-none rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white outline-none transition-colors focus:border-aurora-cyan"
          placeholder="Tell me about the role, or just say hi."
        />
      </div>

      <Button type="submit" className="mt-1 justify-center">
        <FiSend /> Send Message
      </Button>

      <p className="text-center text-xs text-white/40">
        Opens your own email app with the recipient and subject already filled in, ready to review and
        send. If nothing opens, use the "Copy" button above to email me directly.
      </p>

      {status === 'sent' && (
        <motion.p
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center gap-2 text-sm text-emerald-400"
        >
          <FiCheckCircle /> Your email app should now be open with the message ready to send.
        </motion.p>
      )}
    </form>
  )
}
