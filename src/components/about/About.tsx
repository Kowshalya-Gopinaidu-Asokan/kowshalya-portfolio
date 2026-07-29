import { motion } from 'framer-motion'
import { Section } from '@/components/ui/Section'
import { aboutFacts, personal } from '@/data/resume'

export function About() {
  return (
    <Section
      id="about"
      label="About"
      title="About Me"
      subtitle="A quick summary of my background, and the practical details that matter for hiring."
    >
      <div className="grid gap-8 lg:grid-cols-[1.5fr,1fr]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-10% 0px' }}
          transition={{ duration: 0.6 }}
          className="glass rounded-3xl p-8"
        >
          <h3 className="text-sm font-semibold uppercase tracking-widest text-white/50">
            Professional Summary
          </h3>
          <div className="mt-5 space-y-4 text-base leading-relaxed text-white/85">
            {personal.summary.map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-10% 0px' }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="glass rounded-3xl p-8"
        >
          <h3 className="text-sm font-semibold uppercase tracking-widest text-white/50">
            Quick Facts
          </h3>
          <dl className="mt-5 divide-y divide-white/10">
            {aboutFacts.map((fact) => (
              <div key={fact.id} className="py-4 first:pt-0 last:pb-0">
                <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                  <dt className="text-sm font-medium text-white/50">{fact.label}</dt>
                  <dd className="text-right font-display text-base font-semibold text-white">
                    {fact.value}
                  </dd>
                </div>
                <p className="mt-1 text-sm leading-relaxed text-white/70">{fact.detail}</p>
              </div>
            ))}
          </dl>
        </motion.div>
      </div>
    </Section>
  )
}
