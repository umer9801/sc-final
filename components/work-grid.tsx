'use client'

import { useState } from 'react'
import { motion, AnimatePresence, LayoutGroup } from 'motion/react'
import { ProjectCard } from '@/components/project-card'
import { PROJECTS } from '@/lib/site'

const FILTERS = ['All', 'Web', 'SaaS', 'AI', 'Automation', 'Mobile', 'E-commerce'] as const

const FILTER_COLORS: Record<string, string> = {
  All:          'bg-charcoal',
  Web:          'bg-sky-400',
  SaaS:         'bg-emerald-400',
  AI:           'bg-violet-400',
  Automation:   'bg-amber-400',
  Mobile:       'bg-rose-400',
  'E-commerce': 'bg-orange-400',
}

const FILTER_TEXT: Record<string, string> = {
  All:          'text-pearl',
  Web:          'text-white',
  SaaS:         'text-white',
  AI:           'text-white',
  Automation:   'text-charcoal',
  Mobile:       'text-white',
  'E-commerce': 'text-white',
}

export function WorkGrid() {
  const [filter, setFilter] = useState<(typeof FILTERS)[number]>('All')
  const filtered = filter === 'All' ? PROJECTS : PROJECTS.filter((p) => p.tag === filter)

  return (
    <div>
      {/* Filters */}
      <div className="sticky top-20 z-30 -mx-5 mb-10 flex flex-wrap gap-2 bg-background/80 px-5 py-3 backdrop-blur md:top-24">
        {FILTERS.map((f) => {
          const active = filter === f
          return (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className="relative rounded-full px-4 py-2 text-sm font-medium tracking-tight transition-colors"
              aria-pressed={active}
            >
              {active && (
                <motion.span
                  layoutId="filter-pill"
                  className={`absolute inset-0 -z-10 rounded-full ${FILTER_COLORS[f] ?? 'bg-charcoal'}`}
                  transition={{ type: 'spring', stiffness: 400, damping: 32 }}
                />
              )}
              <span className={active ? (FILTER_TEXT[f] ?? 'text-pearl') : 'text-charcoal/70 hover:text-charcoal'}>
                {f}
              </span>
            </button>
          )
        })}
      </div>

      <LayoutGroup>
        <motion.div layout className="grid gap-8 md:grid-cols-2 md:gap-10">
          <AnimatePresence mode="popLayout">
            {filtered.map((p, i) => (
              <motion.div
                key={p.slug}
                layout
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              >
                <ProjectCard project={p} index={i} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </LayoutGroup>

      {filtered.length === 0 && (
        <p className="py-20 text-center text-graphite">No projects in this category yet.</p>
      )}
    </div>
  )
}
