import { useCountUp } from '@/hooks/useCountUp'
import { cn } from '@/lib/utils'

interface AnimatedCounterProps {
  value: number
  suffix?: string
  className?: string
}

export function AnimatedCounter({ value, suffix = '', className }: AnimatedCounterProps) {
  const { ref, value: animated } = useCountUp(value)
  return (
    <div ref={ref} className={cn('font-display tabular-nums', className)}>
      {animated}
      {suffix}
    </div>
  )
}
