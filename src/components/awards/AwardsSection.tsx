import { motion } from 'framer-motion'
import { FiAward } from 'react-icons/fi'
import { Section } from '@/components/ui/Section'
import { awards, education } from '@/data/resume'

export function AwardsSection() {
  return (
    <Section
      id="awards"
      label="Recognition"
      title="Awards & Education"
      subtitle="Recognition earned across two companies, plus the engineering foundation underneath it all."
    >
      <div className="grid gap-6 sm:grid-cols-2">
        {awards.map((award, i) => (
          <motion.div
            key={award.id}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-10% 0px' }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="glass flex gap-5 rounded-3xl p-8"
          >
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-aurora-gradient text-white shadow-lg shadow-aurora-violet/30">
              <FiAward size={24} />
            </div>
            <div>
              <h3 className="font-display text-lg font-semibold text-white">{award.title}</h3>
              <p className="mt-1 text-sm font-medium text-aurora-cyan">{award.organization}</p>
              <p className="mt-2 text-sm leading-relaxed text-white/75">{award.description}</p>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-10% 0px' }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="glass mt-6 rounded-3xl p-8"
      >
        <h3 className="text-sm font-semibold uppercase tracking-widest text-white/50">Education</h3>
        <p className="mt-3 font-display text-lg font-semibold text-white">{education.degree}</p>
        <p className="mt-1 text-sm text-white/70">
          {education.institution} · {education.period}
        </p>
      </motion.div>
    </Section>
  )
}
