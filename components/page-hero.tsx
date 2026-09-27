'use client'

import { motion } from 'motion/react'
import { Container } from '@/components/section'

const EASE = [0.22, 1, 0.36, 1] as const

export function PageHero({
  eyebrow,
  lines,
  intro,
  index,
}: {
  eyebrow: string
  lines: { text: string; highlight?: boolean }[]
  intro?: string
  index?: string
}) {
  return (
    <section className="relative overflow-hidden pt-36 pb-14 md:pt-44 md:pb-20">
      {/* pixel grid full */}
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-60" />
      {/* scanlines */}
      <div className="scanlines pointer-events-none absolute inset-0" />

      <Container className="relative">
        {/* top bar — eyebrow + index */}
        <div className="flex items-center justify-between border-2 border-line px-4 py-2 mb-8">
          <motion.span
            initial={{ opacity: 0, x: -8 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, ease: EASE }}
            className="font-mono text-xs uppercase tracking-widest text-graphite"
          >
            <span className="text-forest mr-2">▶</span>
            {eyebrow}
          </motion.span>
          {index && (
            <span className="font-mono text-xs tracking-widest text-graphite">
              {index}
            </span>
          )}
        </div>

        {/* headline */}
        <h1 className="font-display text-[6vw] font-semibold leading-[1.15] tracking-tight text-charcoal sm:text-4xl md:text-5xl lg:text-6xl">
          {lines.map((line, i) => (
            <span key={line.text} className="block overflow-hidden">
              <motion.span
                className="inline-block"
                initial={{ y: '110%' }}
                animate={{ y: 0 }}
                transition={{ duration: 0.8, ease: EASE, delay: 0.15 + i * 0.1 }}
              >
                <span className={line.highlight ? 'text-forest' : ''}>{line.text}</span>
              </motion.span>
            </span>
          ))}
        </h1>

        {intro && (
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: EASE, delay: 0.45 }}
            className="mt-8 max-w-xl border-l-4 border-forest pl-5 text-xl leading-relaxed text-graphite"
          >
            {intro}
          </motion.p>
        )}

        {/* pixel corner decoration bottom-right */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="absolute bottom-0 right-0 font-mono text-[10px] text-graphite/40 pr-1 pb-1 select-none"
        >
          ████ ██ ████
        </motion.div>
      </Container>
    </section>
  )
}
