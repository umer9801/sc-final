'use client'

import { motion, useScroll, useSpring } from 'motion/react'

export function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 30, mass: 0.3 })

  return (
    <>
      {/* progress bar */}
      <motion.div
        aria-hidden
        className="fixed inset-x-0 top-0 z-[200] h-1 origin-left bg-forest"
        style={{ scaleX }}
      />
      {/* pixel tick marks */}
      <div aria-hidden className="fixed inset-x-0 top-0 z-[199] flex h-1 justify-between px-0">
        {Array.from({ length: 10 }).map((_, i) => (
          <span
            key={i}
            className="h-1 w-px bg-charcoal/20"
          />
        ))}
      </div>
    </>
  )
}
