import { motion } from 'framer-motion'
import { AnimatedCounter } from '@/components/ui/AnimatedCounter'
import { stats } from '@/data/resume'

export function StatsSection() {
  return (
    <section className="relative overflow-hidden border-y border-white/10 px-6 py-20 sm:px-10 lg:px-16">
      <div className="grid-bg pointer-events-none absolute inset-0 opacity-20" aria-hidden="true" />
      <div className="relative mx-auto grid max-w-7xl grid-cols-2 gap-8 lg:grid-cols-4">
        {stats.map((stat, i) => (
          <motion.div
            key={stat.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-10% 0px' }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="text-center"
          >
            <AnimatedCounter
              value={stat.value}
              suffix={stat.suffix}
              className="text-gradient text-4xl font-bold sm:text-5xl lg:text-6xl"
            />
            <p className="mt-3 text-xs uppercase tracking-widest text-white/50 sm:text-sm">
              {stat.label}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
