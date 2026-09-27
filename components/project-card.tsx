'use client'

import { useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion, useMotionValue, useSpring, useTransform } from 'motion/react'
import { ArrowUpRight } from 'lucide-react'
import type { Project } from '@/lib/site'

const EASE = [0.22, 1, 0.36, 1] as const

const TAG_COLORS: Record<string, string> = {
  Web:          'bg-sky     text-charcoal border-charcoal',
  SaaS:         'bg-mint    text-charcoal border-charcoal',
  AI:           'bg-lavender text-charcoal border-charcoal',
  Automation:   'bg-lemon   text-charcoal border-charcoal',
  Mobile:       'bg-blush   text-charcoal border-charcoal',
  'E-commerce': 'bg-peach   text-charcoal border-charcoal',
}

export function ProjectCard({ project, index = 0 }: { project: Project; index?: number }) {
  const ref = useRef<HTMLAnchorElement>(null)
  const rx = useMotionValue(0)
  const ry = useMotionValue(0)
  const imgX = useSpring(useTransform(rx, [-0.5, 0.5], [-14, 14]), { stiffness: 150, damping: 20 })
  const imgY = useSpring(useTransform(ry, [-0.5, 0.5], [-14, 14]), { stiffness: 150, damping: 20 })

  const handleMove = (e: React.MouseEvent) => {
    const r = ref.current?.getBoundingClientRect()
    if (!r) return
    rx.set((e.clientX - r.left) / r.width - 0.5)
    ry.set((e.clientY - r.top) / r.height - 0.5)
  }
  const reset = () => { rx.set(0); ry.set(0) }

  return (
    <motion.div
      initial={{ opacity: 0, y: 36 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, ease: EASE, delay: (index % 2) * 0.08 }}
      className="group border-2 border-charcoal bg-pearl shadow-[6px_6px_0_0_var(--charcoal)] transition-all duration-150 hover:shadow-[3px_3px_0_0_var(--charcoal)] hover:translate-x-[3px] hover:translate-y-[3px]"
    >
      <Link
        ref={ref}
        href={`/work/${project.slug}`}
        onMouseMove={handleMove}
        onMouseLeave={reset}
        className="block"
      >
        {/* image */}
        <div className="relative aspect-[4/3] overflow-hidden border-b-2 border-charcoal bg-stone">
          <motion.div style={{ x: imgX, y: imgY }} className="absolute inset-[-8%]">
            <Image
              src={project.image || '/placeholder.svg'}
              alt={`${project.title} — ${project.category}`}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover transition-transform duration-700 group-hover:scale-103"
            />
          </motion.div>

          {/* dark overlay on hover */}
          <div className="absolute inset-0 bg-charcoal/30 opacity-0 transition-opacity duration-400 group-hover:opacity-100" />

          {/* tag badge — pixel style */}
          <div className="absolute left-0 top-0">
            <span className={`inline-block border-b-2 border-r-2 px-3 py-1.5 font-mono text-[9px] uppercase tracking-widest ${TAG_COLORS[project.tag] ?? 'bg-stone text-charcoal border-charcoal'}`}>
              {project.tag}
            </span>
          </div>

          {/* arrow — slides in on hover */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            whileHover={{ opacity: 1, y: 0 }}
            className="absolute right-3 top-3 flex size-9 items-center justify-center border-2 border-charcoal bg-pearl"
          >
            <ArrowUpRight className="size-4 text-charcoal" />
          </motion.div>

          {/* pixel year watermark */}
          <span className="absolute bottom-2 right-3 font-mono text-[8px] text-pearl/40 select-none">
            {project.year}
          </span>
        </div>

        {/* meta */}
        <div className="p-5">
          <div className="flex items-start justify-between gap-3">
            <div>
              <h3 className="font-display text-base font-semibold leading-tight tracking-wide text-charcoal">
                {project.title}
              </h3>
              <p className="mt-1.5 font-mono text-xs uppercase tracking-widest text-graphite">
                {project.category}
              </p>
            </div>
            <ArrowUpRight className="mt-1 size-4 shrink-0 text-graphite/30 transition-all group-hover:text-forest group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </div>
        </div>
      </Link>
    </motion.div>
  )
}
