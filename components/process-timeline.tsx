'use client'

import { useRef } from 'react'
import { motion, useScroll, useSpring, useTransform } from 'motion/react'
import { PROCESS } from '@/lib/site'

const EASE = [0.22, 1, 0.36, 1] as const

export function ProcessTimeline() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 70%', 'end 60%'],
  })
  const progress = useSpring(scrollYProgress, { stiffness: 80, damping: 24 })
  const height = useTransform(progress, [0, 1], ['0%', '100%'])

  return (
    <div ref={ref} className="relative">
      {/* vertical rail */}
      <div
        className="absolute left-[27px] top-0 h-full w-0.5 bg-line md:left-1/2 md:-translate-x-px"
        aria-hidden
      >
        <motion.div style={{ height }} className="absolute left-0 top-0 w-full bg-forest" />
      </div>

      <ol className="flex flex-col gap-10 md:gap-16">
        {PROCESS.map((step, i) => (
          <li key={step.no} className="relative">
            <div
              className={`grid grid-cols-[56px_1fr] items-start gap-4 md:grid-cols-2 md:gap-16 ${
                i % 2 === 1 ? 'md:[direction:rtl]' : ''
              }`}
            >
              {/* node */}
              <div className="relative flex justify-start md:justify-center md:[direction:ltr]">
                <motion.div
                  initial={{ scale: 0.5, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true, margin: '-100px' }}
                  transition={{ duration: 0.4, ease: EASE }}
                  className="z-10 flex size-14 items-center justify-center border-2 border-charcoal bg-pearl shadow-[3px_3px_0_0_var(--charcoal)] font-mono text-sm text-forest md:absolute md:left-1/2 md:-translate-x-1/2"
                >
                  {step.no}
                </motion.div>
              </div>

              {/* content */}
              <motion.div
                initial={{ opacity: 0, x: i % 2 === 1 ? 24 : -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.5, ease: EASE, delay: 0.1 }}
                className={`md:[direction:ltr] ${i % 2 === 1 ? 'md:text-right' : ''}`}
              >
                {/* pixel label */}
                <span className="mb-2 inline-block font-mono text-[9px] uppercase tracking-widest text-forest">
                  [ STEP {step.no} ]
                </span>
                <h3 className="font-display text-xl font-semibold leading-tight tracking-wide text-charcoal md:text-2xl">
                  {step.title}
                </h3>
                <p className="mt-2 max-w-sm text-xl text-graphite md:inline-block">{step.body}</p>
              </motion.div>
            </div>
          </li>
        ))}
      </ol>
    </div>
  )
}
