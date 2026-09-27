'use client'

import Link from 'next/link'
import { motion } from 'motion/react'
import { ArrowUpRight } from 'lucide-react'
import type { MegaItem } from '@/lib/site'

const EASE = [0.22, 1, 0.36, 1] as const

export function MegaMenu({ items, onClose }: { items: MegaItem[]; onClose: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -8, clipPath: 'inset(0% 0% 100% 0% round 20px)' }}
      animate={{ opacity: 1, y: 0, clipPath: 'inset(0% 0% 0% 0% round 20px)' }}
      exit={{ opacity: 0, y: -8, clipPath: 'inset(0% 0% 100% 0% round 20px)' }}
      transition={{ duration: 0.4, ease: EASE }}
      className="absolute left-1/2 top-full mt-3 w-[min(920px,calc(100vw-3rem))] -translate-x-1/2 overflow-hidden rounded-3xl border border-line bg-pearl/95 p-3 shadow-[0_30px_80px_-30px_rgba(30,35,25,0.35)] backdrop-blur-xl"
    >
      <div className="grid grid-cols-2 gap-1 md:grid-cols-3">
        {items.map((item, i) => (
          <motion.div
            key={item.key}
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease: EASE, delay: 0.05 + i * 0.05 }}
          >
            <Link
              href={item.href}
              onClick={onClose}
              className="group relative flex flex-col gap-3 rounded-2xl border border-transparent p-5 transition-colors hover:border-line hover:bg-background"
            >
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs tracking-[0.2em] text-forest">{item.key}</span>
                <ArrowUpRight className="size-4 text-graphite opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </div>
              <div>
                <div className="font-display text-lg font-medium tracking-tight text-charcoal">
                  {item.title}
                </div>
                <p className="mt-1 text-sm text-graphite">{item.description}</p>
              </div>
              <span className="mt-1 h-px w-0 bg-forest transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:w-full" />
            </Link>
          </motion.div>
        ))}
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="mt-1 flex items-center justify-between rounded-2xl bg-charcoal px-6 py-4 text-pearl"
      >
        <span className="text-sm text-pearl/70">Not sure where to start?</span>
        <Link
          href="/services"
          onClick={onClose}
          className="group flex items-center gap-2 text-sm font-medium"
        >
          Explore all services
          <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </Link>
      </motion.div>
    </motion.div>
  )
}
