'use client'

import { motion } from 'motion/react'
import { MagneticButton } from '@/components/magnetic-button'
import { Container, Section } from '@/components/section'
import { AnimatedText } from '@/components/reveal'

const PIXEL_ROWS = 8

export function CTASection() {
  return (
    <Section className="relative overflow-hidden">
      <Container>
        {/* outer pixel frame — double border trick */}
        <div className="relative border-4 border-charcoal bg-charcoal p-1 shadow-[8px_8px_0_0_oklch(0.42_0.055_158)]">
          {/* inner border */}
          <div className="relative overflow-hidden border-2 border-pearl/20 px-6 py-20 text-center md:py-28 scanlines">

            {/* pixel row lines */}
            <div className="pointer-events-none absolute inset-0">
              {Array.from({ length: PIXEL_ROWS }).map((_, i) => (
                <motion.span
                  key={i}
                  className="absolute left-0 h-px w-full bg-pearl/10"
                  style={{ top: `${(i + 1) * (100 / (PIXEL_ROWS + 1))}%` }}
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: i * 0.07 }}
                />
              ))}
              {/* breathing glow */}
              <motion.div
                className="absolute left-1/2 top-1/2 size-[80%] -translate-x-1/2 -translate-y-1/2 bg-forest/15 blur-[80px]"
                animate={{ scale: [1, 1.12, 1], opacity: [0.4, 0.7, 0.4] }}
                transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
              />
            </div>

            {/* corner pixel brackets */}
            <span className="absolute top-3 left-3 font-mono text-[10px] text-forest/60 select-none leading-none">
              ┌─
            </span>
            <span className="absolute top-3 right-3 font-mono text-[10px] text-forest/60 select-none leading-none">
              ─┐
            </span>
            <span className="absolute bottom-3 left-3 font-mono text-[10px] text-forest/60 select-none leading-none">
              └─
            </span>
            <span className="absolute bottom-3 right-3 font-mono text-[10px] text-forest/60 select-none leading-none">
              ─┘
            </span>

            <div className="relative">
              <span className="font-mono text-xs uppercase tracking-widest text-sage">
                [ Start a Project ]
              </span>
              <AnimatedText
                text="HAVE AN IDEA? LET'S BUILD IT."
                as="h2"
                className="mx-auto mt-6 max-w-3xl justify-center font-display text-2xl font-semibold leading-[1.2] tracking-tight text-pearl md:text-4xl lg:text-5xl"
              />
              <p className="mx-auto mt-6 max-w-md font-sans text-xl text-pearl/60">
                Tell us what you&apos;re trying to build, improve or automate.
              </p>
              <div className="mt-10 flex justify-center">
                <MagneticButton
                  href="/contact"
                  variant="secondary"
                  className="border-pearl/50 text-pearl shadow-[4px_4px_0_0_oklch(0.72_0.045_152)] hover:shadow-[2px_2px_0_0_oklch(0.72_0.045_152)]"
                >
                  Start a Project
                </MagneticButton>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  )
}
