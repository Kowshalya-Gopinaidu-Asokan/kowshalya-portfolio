import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/Button'

export function NotFound() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="grid-bg flex min-h-screen flex-col items-center justify-center px-6 text-center"
    >
      <p className="font-mono text-sm text-aurora-cyan">404</p>
      <h1 className="mt-4 font-display text-4xl font-bold sm:text-6xl">
        This route threw an <span className="text-gradient">unhandled exception</span>.
      </h1>
      <p className="mt-4 max-w-md text-white/60">
        The page you&rsquo;re looking for doesn&rsquo;t exist, but the rest of the portfolio compiles just
        fine.
      </p>
      <Link to="/" className="mt-8">
        <Button>Back to Home</Button>
      </Link>
    </motion.div>
  )
}
