import { FiCalendar } from 'react-icons/fi'
import { Section } from '@/components/ui/Section'
import { Terminal } from '@/components/contact/Terminal'
import { ContactForm } from '@/components/contact/ContactForm'
import { personal } from '@/data/resume'

function bookACall() {
  const subject = `Request to Schedule a Call with ${personal.name}`
  const body = `Hi ${personal.firstName},\n\nI'd like to schedule a call to discuss an opportunity. Could you let me know a time that works for you?\n\nBest regards,`
  window.location.href = `mailto:${personal.social.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
}

export function ContactTerminal() {
  return (
    <Section
      id="contact"
      label="Contact"
      title="Let's ship something great together."
      subtitle="Run the command, use the form, or book a call. Either way, I'll get back to you within 24 hours."
    >
      <div className="mb-6 flex justify-center">
        <button
          type="button"
          onClick={bookACall}
          className="glass flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium text-white/80 transition-colors hover:text-white"
        >
          <FiCalendar size={15} className="text-aurora-cyan" /> Book a Call
        </button>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <Terminal />
        <ContactForm />
      </div>
    </Section>
  )
}
