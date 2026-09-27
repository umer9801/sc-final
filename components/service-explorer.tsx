'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { ArrowUpRight } from 'lucide-react'
import Link from 'next/link'
import { SERVICES } from '@/lib/site'

const EASE = [0.22, 1, 0.36, 1] as const

const SERVICE_COLORS = [
  'from-blush to-blush/30',
  'from-sky to-sky/30',
  'from-mint to-mint/30',
  'from-lavender to-lavender/30',
  'from-lemon to-lemon/30',
  'from-peach to-peach/30',
  'from-blush/70 to-sky/30',
]

const SERVICE_NUM_COLORS = [
  'text-rose-400/50',
  'text-sky-400/50',
  'text-emerald-400/50',
  'text-violet-400/50',
  'text-amber-400/50',
  'text-orange-400/50',
  'text-rose-400/40',
]

export function ServiceExplorer() {
  const [active, setActive] = useState(0)
  const service = SERVICES[active]

  return (
    <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:gap-16">
      {/* List */}
      <ul className="flex flex-col">
        {SERVICES.map((s, i) => {
          const isActive = i === active
          return (
            <li key={s.id}>
              <button
                onMouseEnter={() => setActive(i)}
                onFocus={() => setActive(i)}
                onClick={() => setActive(i)}
                className="group relative flex w-full items-center gap-5 border-b border-line py-5 text-left md:py-6"
                aria-pressed={isActive}
              >
                {isActive && (
                  <motion.span
                    layoutId="svc-line"
                    className="absolute -bottom-px left-0 h-0.5 w-full bg-forest"
                    transition={{ duration: 0.4, ease: EASE }}
                  />
                )}
                <span
                  className={`font-mono text-xs transition-colors ${isActive ? 'text-forest' : 'text-graphite'}`}
                >
                  {s.no}
                </span>
                <motion.span
                  animate={{ x: isActive ? 8 : 0 }}
                  transition={{ duration: 0.4, ease: EASE }}
                  className={`flex-1 font-display text-2xl font-medium tracking-tight transition-colors md:text-3xl ${
                    isActive ? 'text-charcoal' : 'text-charcoal/45'
                  }`}
                >
                  {s.title}
                </motion.span>
                <ArrowUpRight
                  className={`size-5 transition-all duration-300 ${
                    isActive ? 'translate-x-0 opacity-100 text-forest' : '-translate-x-2 opacity-0'
                  }`}
                />
              </button>
            </li>
          )
        })}
      </ul>

      {/* Preview */}
      <div className="relative min-h-[380px] lg:sticky lg:top-28 lg:h-fit">
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.4, ease: EASE }}
            className={`relative overflow-hidden rounded-3xl border border-line bg-gradient-to-br p-8 md:p-10 ${SERVICE_COLORS[active]}`}
          >
            <div className="pointer-events-none absolute inset-0 bg-dots opacity-30" />
            <div className="relative">
              <div className="flex items-start justify-between">
                <span className={`font-display text-6xl font-semibold tracking-tighter md:text-7xl ${SERVICE_NUM_COLORS[active]}`}>
                  {service.no}
                </span>
                <span className="rounded-full border border-white/60 bg-white/60 px-3 py-1 font-mono text-[10px] uppercase tracking-widest text-charcoal/70 backdrop-blur-sm">
                  {service.short}
                </span>
              </div>
              <h3 className="mt-6 font-display text-2xl font-medium tracking-tight text-charcoal md:text-3xl">
                {service.title}
              </h3>
              <p className="mt-3 max-w-md text-charcoal/70">{service.description}</p>

              <div className="mt-6 flex flex-wrap gap-2">
                {service.capabilities.map((c) => (
                  <span
                    key={c}
                    className="rounded-full border border-white/70 bg-white/50 px-3 py-1 text-xs text-charcoal backdrop-blur-sm"
                  >
                    {c}
                  </span>
                ))}
              </div>

              <div className="mt-8 flex items-center justify-between border-t border-black/10 pt-5">
                <div className="flex flex-wrap gap-x-4 gap-y-1 font-mono text-[11px] tracking-wide text-charcoal/60">
                  {service.stack.map((t) => (
                    <span key={t}>{t}</span>
                  ))}
                </div>
                <Link
                  href={`/services#${service.id}`}
                  className="group flex items-center gap-1 text-sm font-medium text-charcoal"
                >
                  Details
                  <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  )
}
