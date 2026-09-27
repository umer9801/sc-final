import { type ReactNode } from 'react'
import { cn } from '@/lib/utils'

export function Container({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <div className={cn('mx-auto w-full max-w-[1400px] px-5 md:px-8', className)}>
      {children}
    </div>
  )
}

export function Section({
  children,
  className,
  id,
}: {
  children: ReactNode
  className?: string
  id?: string
}) {
  return (
    <section id={id} className={cn('relative py-20 md:py-28 lg:py-32', className)}>
      {children}
    </section>
  )
}

export function Eyebrow({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <span className={cn('eyebrow inline-flex items-center gap-3', className)}>
      {/* pixel bracket left */}
      <span className="inline-flex items-center gap-1 font-mono text-forest">
        <span className="text-forest">[</span>
      </span>
      {children}
      <span className="font-mono text-forest">]</span>
    </span>
  )
}
