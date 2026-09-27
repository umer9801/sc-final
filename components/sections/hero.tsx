'use client'

import { useRef } from 'react'
import {
  motion,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
} from 'motion/react'
import { HeroVisual } from '@/components/hero-visual'
import { MagneticButton } from '@/components/magnetic-button'
import { Container } from '@/components/section'

const EASE = [0.22, 1, 0.36, 1] as const

const HEAD_LINES: { text: string; highlight?: string }[] = [
  { text: 'WE BUILD DIGITAL' },
  { text: 'SYSTEMS THAT' },
  { text: 'BUSINESS.', highlight: 'MOVE' },
]

/* pixel typing strings for eyebrow */
const EYEBROW_TEXT = '> DIGITAL PRODUCTS / AI / AUTOMATION / SOFTWARE_'

export function Hero() {
  const ref = useRef<HTMLDivElement>(null)

  const rawX = useMotionValue(0)
  const rawY = useMotionValue(0)
  const mx = useSpring(rawX, { stiffness: 120, damping: 20 })
  const my = useSpring(rawY, { stiffness: 120, damping: 20 })

  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const visualY = useTransform(scrollYProgress, [0, 1], [0, -100])
  const textY   = useTransform(scrollYProgress, [0, 1], [0, 60])
  const fade    = useTransform(scrollYProgress, [0, 0.75], [1, 0])

  const handleMove = (e: React.MouseEvent) => {
    const r = ref.current?.getBoundingClientRect()
    if (!r) return
    rawX.set((e.clientX - r.left) / r.width - 0.5)
    rawY.set((e.clientY - r.top) / r.height - 0.5)
  }
  const reset = () => { rawX.set(0); rawY.set(0) }

  const headTextX = useTransform(mx, [-0.5, 0.5], [-6, 6])

  return (
    <section
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={reset}
      className="relative overflow-hidden pt-32 pb-16 md:pt-40 lg:pt-44"
    >
      {/* pixel grid bg */}
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-70" />
      {/* scanlines */}
      <div className="scanlines pointer-events-none absolute inset-0" />

      {/* corner decorations */}
      <span className="pointer-events-none absolute left-4 top-20 font-mono text-[10px] text-forest/40 md:left-8 select-none">┌</span>
      <span className="pointer-events-none absolute right-4 top-20 font-mono text-[10px] text-forest/40 md:right-8 select-none">┐</span>
      <span className="pointer-events-none absolute bottom-4 left-4 font-mono text-[10px] text-forest/40 md:left-8 select-none">└</span>
      <span className="pointer-events-none absolute bottom-4 right-4 font-mono text-[10px] text-forest/40 md:right-8 select-none">┘</span>

      <Container className="relative">
        <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">

          {/* ── Text column ── */}
          <motion.div style={{ y: textY, opacity: fade }}>

            {/* pixel eyebrow — blinking cursor */}
            <motion.div
              initial={{ opacity: 0, x: -12 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: EASE }}
              className="mb-6 inline-flex items-center gap-0 border-2 border-line bg-stone px-3 py-2"
            >
              <span className="font-mono text-[10px] uppercase tracking-widest text-forest">
                {EYEBROW_TEXT}
              </span>
              <motion.span
                className="ml-0.5 inline-block h-3 w-2 bg-forest"
                animate={{ opacity: [1, 0, 1] }}
                transition={{ duration: 0.9, repeat: Infinity, ease: 'linear' }}
              />
            </motion.div>

            {/* headline */}
            <motion.h1
              style={{ x: headTextX }}
              className="font-display text-[8vw] font-semibold leading-[1.18] tracking-wide text-charcoal sm:text-4xl md:text-5xl lg:text-[3.8rem]"
            >
              {HEAD_LINES.map((line, i) => (
                <span key={line.text} className="block overflow-hidden">
                  <motion.span
                    className="inline-block"
                    initial={{ y: '110%' }}
                    animate={{ y: 0 }}
                    transition={{ duration: 0.85, ease: EASE, delay: 0.15 + i * 0.13 }}
                  >
                    {line.highlight && (
                      <span className="text-forest">{line.highlight} </span>
                    )}
                    {line.text}
                  </motion.span>
                </span>
              ))}
            </motion.h1>

            {/* pixel divider */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.6, ease: EASE, delay: 0.55 }}
              className="my-6 h-0.5 origin-left bg-gradient-to-r from-forest to-transparent"
            />

            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: EASE, delay: 0.52 }}
              className="max-w-lg text-xl leading-relaxed text-graphite text-pretty"
            >
              Solvix Core designs and engineers websites, software, AI systems and automation that
              help ambitious businesses operate better and grow faster.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: EASE, delay: 0.65 }}
              className="mt-8 flex flex-wrap items-center gap-4"
            >
              <MagneticButton href="/contact">Start a Project</MagneticButton>
              <MagneticButton href="/work" variant="secondary" arrow="up-right">
                Explore Our Work
              </MagneticButton>
            </motion.div>

            {/* pixel stat bar */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9, duration: 0.5 }}
              className="mt-10 flex flex-wrap gap-6 border-t-2 border-line pt-5"
            >
              {[
                { v: '50+', l: 'Projects' },
                { v: '30+', l: 'Clients' },
                { v: '24/7', l: 'Systems' },
              ].map((s) => (
                <div key={s.l} className="flex items-baseline gap-2">
                  <span className="font-display text-lg text-forest">{s.v}</span>
                  <span className="font-mono text-[10px] uppercase tracking-widest text-graphite">{s.l}</span>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* ── Visual column ── */}
          <motion.div style={{ y: visualY }} className="relative flex justify-center lg:justify-end">
            <HeroVisual mx={mx} my={my} />
          </motion.div>
        </div>
      </Container>
    </section>
  )
}
