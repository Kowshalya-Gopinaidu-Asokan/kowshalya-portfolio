import { forwardRef, type ButtonHTMLAttributes } from 'react'
import { cn } from '@/lib/utils'

type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'outline'
type ButtonSize = 'sm' | 'md' | 'lg'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant
  size?: ButtonSize
}

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    'bg-aurora-gradient bg-[length:200%_200%] text-white shadow-lg shadow-aurora-violet/30 hover:bg-right hover:shadow-aurora-violet/50',
  secondary: 'glass text-white hover:bg-white/10',
  ghost: 'text-white/80 hover:text-white hover:bg-white/5',
  outline: 'border border-white/20 text-white hover:border-white/40 hover:bg-white/5',
}

const sizeStyles: Record<ButtonSize, string> = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-sm',
  lg: 'px-8 py-4 text-base',
}

/** shadcn/ui-style Button primitive, no required props, safe default export target. */
export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          'inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-all duration-300 ease-out',
          'focus-visible:outline focus-visible:outline-2 focus-visible:outline-aurora-cyan',
          'disabled:cursor-not-allowed disabled:opacity-50',
          variantStyles[variant],
          sizeStyles[size],
          className
        )}
        {...props}
      />
    )
  }
)
Button.displayName = 'Button'
