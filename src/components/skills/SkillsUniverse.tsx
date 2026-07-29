import { motion } from 'framer-motion'
import { Section } from '@/components/ui/Section'
import { skills } from '@/data/resume'
import type { Skill } from '@/types'

const categoryOrder: Skill['category'][] = ['frontend', 'architecture', 'ux', 'testing', 'apis', 'tools', 'ai']

const categoryLabels: Record<Skill['category'], string> = {
  frontend: 'Frontend',
  architecture: 'Architecture',
  ux: 'UX Collaboration',
  testing: 'Testing',
  apis: 'APIs & Libraries',
  tools: 'Tools & DevOps',
  ai: 'AI & LLMs',
}

export function SkillsUniverse() {
  return (
    <Section
      id="skills"
      label="Skills"
      title="Technical Skills"
      subtitle="The full set of technologies I use to design, build, test and ship production React applications."
    >
      <div className="grid gap-6 sm:grid-cols-2">
        {categoryOrder.map((category, i) => {
          const items = skills.filter((s) => s.category === category)
          if (items.length === 0) return null

          return (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-10% 0px' }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="glass rounded-3xl p-7"
            >
              <h3 className="text-sm font-semibold uppercase tracking-widest text-white/50">
                {categoryLabels[category]}
              </h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {items.map((skill) => (
                  <li
                    key={skill.id}
                    className="rounded-full border border-white/15 bg-white/[0.04] px-4 py-2 text-sm font-medium text-white/90"
                  >
                    {skill.name}
                  </li>
                ))}
              </ul>
            </motion.div>
          )
        })}
      </div>
    </Section>
  )
}
