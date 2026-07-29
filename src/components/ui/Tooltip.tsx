import type { ReactNode } from 'react'
import * as TooltipPrimitive from '@radix-ui/react-tooltip'

interface TooltipProps {
  content: string
  children: ReactNode
}

/** shadcn/ui-style Tooltip primitive built on Radix, used for icon-only controls. */
export function Tooltip({ content, children }: TooltipProps) {
  return (
    <TooltipPrimitive.Provider delayDuration={200}>
      <TooltipPrimitive.Root>
        <TooltipPrimitive.Trigger asChild>{children}</TooltipPrimitive.Trigger>
        <TooltipPrimitive.Portal>
          <TooltipPrimitive.Content
            sideOffset={8}
            className="glass z-[9996] rounded-lg px-3 py-1.5 text-xs text-white shadow-xl"
          >
            {content}
            <TooltipPrimitive.Arrow className="fill-white/10" />
          </TooltipPrimitive.Content>
        </TooltipPrimitive.Portal>
      </TooltipPrimitive.Root>
    </TooltipPrimitive.Provider>
  )
}
