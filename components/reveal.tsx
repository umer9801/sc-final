'use client'

import { type ReactNode, type ElementType } from 'react'
import { motion } from 'motion/react'
import { cn } from '@/lib/utils'

const EASE = [0.22, 1, 0.36, 1] as const

export function ScrollReveal({
  children,
  className,
  delay = 0,
  y = 24,
  as = 'div',
}: {
  children: ReactNode
  className?: string
  delay?: number
  y?: number
  as?: ElementType
}) {
  const MotionTag = motion[as as 'div'] ?? motion.div
  return (
    <MotionTag
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.7, ease: EASE, delay }}
    >
      {children}
    </MotionTag>
  )
}

export function Stagger({
  children,
  className,
  delay = 0,
  stagger = 0.08,
}: {
  children: ReactNode
  className?: string
  delay?: number
  stagger?: number
}) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: '-80px' }}
      variants={{
        hidden: {},
        show: { transition: { staggerChildren: stagger, delayChildren: delay } },
      }}
    >
      {children}
    </motion.div>
  )
}

export const staggerItem = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } },
}

export function StaggerItem({
  children,
  className,
}: {
  children: ReactNode
  className?: string
}) {
  return (
    <motion.div className={className} variants={staggerItem}>
      {children}
    </motion.div>
  )
}

/**
 * Pixel-safe animated heading — animates the whole line as one block,
 * no word-split that causes dash artefacts with pixel fonts.
 */
export function AnimatedText({
  text,
  className,
  as: Tag = 'h2',
  delay = 0,
  once = true,
}: {
  text: string
  className?: string
  as?: ElementType
  delay?: number
  once?: boolean
}) {
  return (
    <Tag className={cn('overflow-hidden', className)}>
      <motion.span
        className="block"
        initial={{ y: '105%', opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once, margin: '-60px' }}
        transition={{ duration: 0.7, ease: EASE, delay }}
      >
        {text}
      </motion.span>
    </Tag>
  )
}
