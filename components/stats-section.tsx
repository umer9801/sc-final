'use client'

import { motion } from 'motion/react'
import { Counter } from '@/components/counter'
import { STATS } from '@/lib/site'
import { Container, Section } from '@/components/section'

const EASE = [0.22, 1, 0.36, 1] as const

/* pixel art — all brand palette, no rainbow */
const STAT_STYLES = [
  { bg: 'bg-pearl',    num: 'text-charcoal',  label: 'text-graphite',   shadow: 'shadow-[4px_4px_0_0_var(--charcoal)]' },
  { bg: 'bg-pearl',    num: 'text-charcoal',  label: 'text-graphite',   shadow: 'shadow-[4px_4px_0_0_var(--charcoal)]' },
  { bg: 'bg-forest',   num: 'text-pearl',     label: 'text-pearl/60',   shadow: 'shadow-[4px_4px_0_0_var(--charcoal)]' },
  { bg: 'bg-stone',    num: 'text-forest',    label: 'text-graphite',   shadow: 'shadow-[4px_4px_0_0_var(--charcoal)]' },
]

export function StatsSection() {
  return (
    <Section className="border-y-2 border-charcoal">
      <Container>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
          {STATS.map((s, i) => {
            const st = STAT_STYLES[i]
            return (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, ease: EASE, delay: i * 0.08 }}
                className={`flex flex-col border-2 border-charcoal p-6 md:p-8 ${st.bg} ${st.shadow}`}
              >
                {/* pixel index */}
                <span className={`mb-2 font-mono text-[9px] uppercase tracking-widest ${st.label}`}>
                  [ {String(i + 1).padStart(2, '0')} ]
                </span>
                <span className={`font-display text-4xl font-semibold md:text-5xl lg:text-6xl ${st.num}`}>
                  <Counter value={s.value} suffix={s.suffix} />
                </span>
                <span className={`mt-3 font-mono text-[10px] uppercase tracking-widest ${st.label}`}>
                  {s.label}
                </span>
              </motion.div>
            )
          })}
        </div>
        <p className="mt-4 font-mono text-[10px] tracking-widest text-graphite/40">
          * Sample metrics — replace with live company data.
        </p>
      </Container>
    </Section>
  )
}
