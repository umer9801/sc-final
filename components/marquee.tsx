'use client'

import { useRef, useState } from 'react'
import { motion, useAnimationFrame, useMotionValue } from 'motion/react'

const DOT_COLORS = [
  'bg-rose-300',
  'bg-sky-300',
  'bg-emerald-300',
  'bg-violet-300',
  'bg-amber-300',
  'bg-orange-300',
]

export function Marquee({ items, speed = 40 }: { items: string[]; speed?: number }) {
  const x = useMotionValue(0)
  const [paused, setPaused] = useState(false)
  const trackRef = useRef<HTMLDivElement>(null)
  const widthRef = useRef(0)

  useAnimationFrame((_, delta) => {
    if (paused) return
    if (trackRef.current && widthRef.current === 0) {
      widthRef.current = trackRef.current.scrollWidth / 2
    }
    const move = (speed * delta) / 1000
    let next = x.get() - move
    if (widthRef.current && Math.abs(next) >= widthRef.current) {
      next += widthRef.current
    }
    x.set(next)
  })

  const content = [...items, ...items]

  return (
    <div
      className="relative overflow-hidden py-6"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-background to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-background to-transparent" />
      <motion.div ref={trackRef} style={{ x }} className="flex w-max items-center gap-14">
        {content.map((item, i) => (
          <span key={i} className="flex items-center gap-14">
            <span className="font-display text-2xl font-medium tracking-tight text-charcoal/80 md:text-3xl">
              {item}
            </span>
            <span className={`size-2 rounded-full ${DOT_COLORS[i % DOT_COLORS.length]}`} />
          </span>
        ))}
      </motion.div>
    </div>
  )
}
