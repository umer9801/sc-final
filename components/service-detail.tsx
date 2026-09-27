'use client'

import { motion } from 'motion/react'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import type { Service } from '@/lib/site'
import { cn } from '@/lib/utils'

const EASE = [0.22, 1, 0.36, 1] as const

function ServiceVisual({ service, flip }: { service: Service; flip: boolean }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: flip ? -30 : 30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.8, ease: EASE }}
      className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-line bg-gradient-to-br from-pearl to-stone/50"
    >
      <div className="pointer-events-none absolute inset-0 bg-dots opacity-40" />
      <div className="absolute inset-0 flex flex-col justify-between p-8">
        <div className="flex items-start justify-between">
          <span className="font-display text-[7rem] font-semibold leading-none tracking-tighter text-forest/15">
            {service.no}
          </span>
          <span className="rounded-full border border-line bg-pearl px-3 py-1 font-mono text-[10px] uppercase tracking-widest text-graphite">
            {service.short}
          </span>
        </div>

        {/* animated bars */}
        <div className="flex items-end gap-2">
          {[40, 68, 52, 84, 60, 92, 48].map((h, i) => (
            <motion.div
              key={i}
              initial={{ height: 0 }}
              whileInView={{ height: `${h}%` }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, ease: EASE, delay: 0.2 + i * 0.06 }}
              className="w-full max-w-8 flex-1 rounded-t-md bg-charcoal/80"
              style={{ height: `${h}%` }}
            >
              <span className="block h-1.5 w-full rounded-t-md bg-forest" />
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

export function ServiceDetail({ service, i }: { service: Service; i: number }) {
  const flip = i % 2 === 1
  return (
    <section
      id={service.id}
      className="scroll-mt-28 border-t border-line py-16 first:border-t-0 md:py-24"
    >
      <div
        className={cn(
          'grid items-center gap-10 lg:grid-cols-2 lg:gap-16',
          flip && 'lg:[&>*:first-child]:order-2',
        )}
      >
        <div>
          <div className="flex items-center gap-4">
            <span className="font-mono text-sm text-forest">{service.no}</span>
            <span className="h-px flex-1 bg-line" />
          </div>
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, ease: EASE }}
            className="mt-5 font-display text-3xl font-semibold tracking-tight text-charcoal md:text-4xl"
          >
            {service.title}
          </motion.h2>
          <p className="mt-4 max-w-md text-graphite text-pretty">{service.description}</p>

          <div className="mt-7">
            <p className="font-mono text-[11px] uppercase tracking-widest text-graphite">
              Capabilities
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              {service.capabilities.map((c) => (
                <span
                  key={c}
                  className="rounded-full border border-line bg-pearl px-3 py-1 text-sm text-charcoal"
                >
                  {c}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-6">
            <p className="font-mono text-[11px] uppercase tracking-widest text-graphite">Stack</p>
            <div className="mt-3 flex flex-wrap gap-x-4 gap-y-1 font-mono text-sm text-charcoal">
              {service.stack.map((t) => (
                <span key={t}>{t}</span>
              ))}
            </div>
          </div>

          <Link
            href="/contact"
            className="group mt-8 inline-flex items-center gap-2 font-medium text-charcoal"
          >
            Start a {service.short} project
            <ArrowUpRight className="size-4 text-forest transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>

        <ServiceVisual service={service} flip={flip} />
      </div>
    </section>
  )
}
