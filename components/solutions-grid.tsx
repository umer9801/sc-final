'use client'

import { useState } from 'react'
import { motion } from 'motion/react'
import { ArrowUpRight } from 'lucide-react'
import Link from 'next/link'
import { SOLUTIONS } from '@/lib/site'

const EASE = [0.22, 1, 0.36, 1] as const

const SOLUTION_HOVER = [
  'hover:bg-rose-50',
  'hover:bg-sky-50',
  'hover:bg-emerald-50',
  'hover:bg-violet-50',
  'hover:bg-amber-50',
  'hover:bg-orange-50',
  'hover:bg-rose-50',
  'hover:bg-sky-50',
]

const SOLUTION_DOT: string[] = [
  'oklch(0.85 0.06 15)',
  'oklch(0.85 0.06 230)',
  'oklch(0.85 0.06 158)',
  'oklch(0.85 0.06 290)',
  'oklch(0.90 0.09 98)',
  'oklch(0.87 0.07 55)',
  'oklch(0.85 0.06 15)',
  'oklch(0.85 0.06 230)',
]

export function SolutionsGrid() {
  const [hovered, setHovered] = useState<number | null>(null)

  return (
    <div className="grid gap-px overflow-hidden rounded-3xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
      {SOLUTIONS.map((s, i) => {
        const active = hovered === i
        return (
          <motion.div
            key={s.no}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5, ease: EASE, delay: (i % 4) * 0.06 }}
            onMouseEnter={() => setHovered(i)}
            onMouseLeave={() => setHovered(null)}
            className={`group relative flex min-h-[220px] flex-col justify-between bg-pearl p-6 transition-colors ${SOLUTION_HOVER[i] ?? 'hover:bg-stone/60'}`}
          >
            <div className="flex items-start justify-between">
              <span className="font-mono text-xs text-forest">{s.no}</span>
              <ArrowUpRight
                className={`size-4 transition-all duration-300 ${
                  active ? 'translate-x-0 opacity-100 text-forest' : 'translate-x-1 opacity-0'
                }`}
              />
            </div>

            {/* mini node diagram */}
            <div className="my-4 flex items-center gap-1.5">
              {[0, 1, 2, 3].map((n) => (
                <div key={n} className="flex items-center gap-1.5">
                  <motion.span
                    animate={{
                      backgroundColor: active
                        ? (SOLUTION_DOT[i] ?? 'oklch(0.42 0.055 158)')
                        : 'oklch(0.9 0.006 85)',
                      scale: active ? 1.2 : 1,
                    }}
                    transition={{ duration: 0.3, delay: active ? n * 0.05 : 0 }}
                    className="size-2 rounded-full"
                  />
                  {n < 3 && <span className="h-px w-4 bg-line" />}
                </div>
              ))}
            </div>

            <div>
              <h3 className="font-display text-lg font-medium tracking-tight text-charcoal">
                {s.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-graphite">{s.body}</p>
            </div>
          </motion.div>
        )
      })}
      <Link
        href="/contact"
        className="group flex min-h-[220px] flex-col justify-between bg-charcoal p-6 text-pearl transition-colors hover:bg-forest sm:col-span-2 lg:col-span-1"
      >
        <span className="font-mono text-xs text-sage">→</span>
        <div>
          <h3 className="font-display text-xl font-medium tracking-tight">
            Have a different challenge?
          </h3>
          <span className="mt-3 inline-flex items-center gap-2 text-sm">
            Talk to us
            <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </span>
        </div>
      </Link>
    </div>
  )
}
