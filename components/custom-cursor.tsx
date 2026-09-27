'use client'

import { useEffect, useState } from 'react'
import { motion, useMotionValue, useSpring, AnimatePresence } from 'motion/react'

type Variant = 'default' | 'button' | 'link' | 'view' | 'explore'

export function CustomCursor() {
  const [enabled, setEnabled] = useState(false)
  const [variant, setVariant] = useState<Variant>('default')
  const [hidden, setHidden] = useState(true)

  const x = useMotionValue(-100)
  const y = useMotionValue(-100)
  const springX = useSpring(x, { stiffness: 500, damping: 40, mass: 0.5 })
  const springY = useSpring(y, { stiffness: 500, damping: 40, mass: 0.5 })

  useEffect(() => {
    const finePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (!finePointer || reduced) return
    setEnabled(true)
    document.documentElement.classList.add('cursor-none-desktop')

    const move = (e: MouseEvent) => {
      x.set(e.clientX)
      y.set(e.clientY)
      setHidden(false)
      const target = (e.target as HTMLElement)?.closest?.('[data-cursor]') as HTMLElement | null
      if (target) {
        setVariant((target.dataset.cursor as Variant) || 'default')
      } else {
        const tag = (e.target as HTMLElement)?.closest?.('a, button')
        setVariant(tag ? 'button' : 'default')
      }
    }
    const leave = () => setHidden(true)

    window.addEventListener('mousemove', move)
    document.addEventListener('mouseleave', leave)
    return () => {
      window.removeEventListener('mousemove', move)
      document.removeEventListener('mouseleave', leave)
      document.documentElement.classList.remove('cursor-none-desktop')
    }
  }, [x, y])

  if (!enabled) return null

  const label = variant === 'view' ? 'VIEW' : variant === 'explore' ? 'EXPLORE' : ''
  const isRing = variant === 'link'
  const isText = variant === 'view' || variant === 'explore'
  const size = isText ? 72 : variant === 'button' ? 44 : isRing ? 34 : 12

  return (
    <motion.div
      aria-hidden
      className="pointer-events-none fixed top-0 left-0 z-[999] hidden md:block"
      style={{ x: springX, y: springY }}
      animate={{ opacity: hidden ? 0 : 1 }}
      transition={{ duration: 0.2 }}
    >
      <motion.div
        className="flex items-center justify-center rounded-full border-charcoal"
        style={{ translateX: '-50%', translateY: '-50%', borderStyle: 'solid' }}
        animate={{
          width: size,
          height: size,
          backgroundColor: isText
            ? 'oklch(0.42 0.055 158)'
            : isRing
              ? 'transparent'
              : variant === 'button'
                ? 'oklch(0.205 0.01 70 / 0.12)'
                : 'oklch(0.205 0.01 70)',
          borderWidth: isRing ? 1.5 : 0,
        }}
        transition={{ type: 'spring', stiffness: 400, damping: 28 }}
      >
        <AnimatePresence mode="wait">
          {isText && (
            <motion.span
              key={label}
              initial={{ opacity: 0, scale: 0.6 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.6 }}
              className="font-mono text-[10px] font-semibold tracking-widest text-white"
            >
              {label}
            </motion.span>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.div>
  )
}
