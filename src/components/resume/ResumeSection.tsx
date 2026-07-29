import { motion } from 'framer-motion'
import { FiDownload, FiFileText, FiExternalLink } from 'react-icons/fi'
import { Section } from '@/components/ui/Section'
import { Button } from '@/components/ui/Button'
import { personal } from '@/data/resume'

export function ResumeSection() {
  return (
    <Section
      id="resume"
      label="Resume"
      title="Download the full resume."
      subtitle="A complete, two-page PDF with full work history, technical skills and education, ready to download anytime."
    >
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-10% 0px' }}
        transition={{ duration: 0.6 }}
        className="glass flex flex-col items-center gap-8 overflow-hidden rounded-3xl p-8 sm:flex-row sm:p-10"
      >
        <div className="flex h-28 w-24 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-gradient-to-br from-aurora-indigo/40 to-aurora-pink/30 text-white shadow-lg">
          <FiFileText size={32} />
        </div>

        <div className="flex-1 text-center sm:text-left">
          <h3 className="font-display text-xl font-semibold">{personal.name}</h3>
          <p className="mt-1 text-sm text-white/80">
            {personal.role} · {personal.experienceYears} years · {personal.location}
          </p>
        </div>

        <div className="flex shrink-0 flex-col gap-3 sm:flex-row">
          <a href="/kowshalya-resume.pdf" download="Kowshalya-Asokan-Resume.pdf">
            <Button variant="primary">
              <FiDownload /> Download PDF
            </Button>
          </a>
          <a href="/kowshalya-resume.pdf" target="_blank" rel="noreferrer">
            <Button variant="secondary">
              <FiExternalLink /> View in Browser
            </Button>
          </a>
        </div>
      </motion.div>
    </Section>
  )
}
