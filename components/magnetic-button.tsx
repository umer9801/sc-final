'use client'

import { useRef, type ReactNode } from 'react'
import Link from 'next/link'
import { motion, useMotionValue, useSpring } from 'motion/react'
import { ArrowRight, ArrowUpRight } from 'lucide-react'
import { cn } from '@/lib/utils'

type Props = {
  children: ReactNode
  href?: string
  onClick?: () => void
  variant?: 'primary' | 'secondary' | 'ghost'
  arrow?: 'right' | 'up-right' | 'none'
  className?: string
  type?: 'button' | 'submit'
  disabled?: boolean
}

export function MagneticButton({
  children,
  href,
  onClick,
  variant = 'primary',
  arrow = 'right',
  className,
  type = 'button',
  disabled,
}: Props) {
  const ref = useRef<HTMLDivElement>(null)
  const mx = useMotionValue(0)
  const my = useMotionValue(0)
  const x = useSpring(mx, { stiffness: 300, damping: 20, mass: 0.4 })
  const y = useSpring(my, { stiffness: 300, damping: 20, mass: 0.4 })

  const handleMove = (e: React.MouseEvent) => {
    const el = ref.current
    if (!el) return
    const r = el.getBoundingClientRect()
    mx.set((e.clientX - (r.left + r.width / 2)) * 0.18)
    my.set((e.clientY - (r.top + r.height / 2)) * 0.25)
  }
  const reset = () => { mx.set(0); my.set(0) }

  /* pixel: square, border-2, hard offset shadow, no radius */
  const base =
    'group relative inline-flex items-center justify-center gap-2 overflow-hidden border-2 font-mono font-medium uppercase tracking-widest transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest focus-visible:ring-offset-2 disabled:opacity-50'
  const sizing = 'h-12 px-6 text-xs'

  const variants = {
    primary:
      'border-charcoal bg-charcoal text-pearl shadow-[4px_4px_0_0_oklch(0.42_0.055_158)] hover:shadow-[2px_2px_0_0_oklch(0.42_0.055_158)] hover:translate-x-[2px] hover:translate-y-[2px]',
    secondary:
      'border-charcoal bg-transparent text-charcoal shadow-[4px_4px_0_0_var(--charcoal)] hover:shadow-[2px_2px_0_0_var(--charcoal)] hover:translate-x-[2px] hover:translate-y-[2px]',
    ghost: 'border-transparent text-charcoal',
  }

  const Arrow = arrow === 'up-right' ? ArrowUpRight : ArrowRight

  const inner = (
    <>
      {variant === 'primary' && (
        <span className="absolute inset-0 -z-0 translate-y-full bg-forest transition-transform duration-300 ease-in-out group-hover:translate-y-0" />
      )}
      <span className="relative z-10 flex items-center gap-2">
        {children}
        {arrow !== 'none' && (
          <Arrow className="size-3.5 transition-transform duration-200 group-hover:translate-x-1" />
        )}
      </span>
    </>
  )

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={reset}
      style={{ x, y }}
      className="inline-flex"
    >
      {href ? (
        <Link href={href} className={cn(base, sizing, variants[variant], className)}>
          {inner}
        </Link>
      ) : (
        <button
          type={type}
          onClick={onClick}
          disabled={disabled}
          className={cn(base, sizing, variants[variant], className)}
        >
          {inner}
        </button>
      )}
    </motion.div>
  )
}
