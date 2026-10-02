'use client'

import { useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion, useMotionValue, useSpring, useTransform } from 'motion/react'
import { ArrowUpRight, ExternalLink } from 'lucide-react'
import type { Project } from '@/lib/site'

const EASE = [0.22, 1, 0.36, 1] as const

const TAG_COLORS: Record<string, string> = {
  Web:          'bg-sky     text-charcoal',
  SaaS:         'bg-mint    text-charcoal',
  AI:           'bg-lavender text-charcoal',
  Automation:   'bg-lemon   text-charcoal',
  Mobile:       'bg-blush   text-charcoal',
  'E-commerce': 'bg-peach   text-charcoal',
}

export function ProjectCard({ project, index = 0 }: { project: Project; index?: number }) {
  const ref = useRef<HTMLAnchorElement>(null)
  const rx = useMotionValue(0)
  const ry = useMotionValue(0)
  const imgX = useSpring(useTransform(rx, [-0.5, 0.5], [-8, 8]), { stiffness: 120, damping: 20 })
  const imgY = useSpring(useTransform(ry, [-0.5, 0.5], [-8, 8]), { stiffness: 120, damping: 20 })

  const handleMove = (e: React.MouseEvent) => {
    const r = ref.current?.getBoundingClientRect()
    if (!r) return
    rx.set((e.clientX - r.left) / r.width - 0.5)
    ry.set((e.clientY - r.top) / r.height - 0.5)
  }
  const reset = () => { rx.set(0); ry.set(0) }

  return (
    <div className="group flex flex-col border-2 border-charcoal bg-pearl shadow-[5px_5px_0_0_var(--charcoal)] transition-all duration-150 hover:shadow-[2px_2px_0_0_var(--charcoal)] hover:translate-x-[3px] hover:translate-y-[3px]">

      {/* image */}
      <Link
        ref={ref}
        href={`/work/${project.slug}`}
        onMouseMove={handleMove}
        onMouseLeave={reset}
        className="block"
      >
        <div className="relative aspect-[16/10] overflow-hidden border-b-2 border-charcoal bg-stone">
          {project.image ? (
            <motion.div style={{ x: imgX, y: imgY }} className="absolute inset-[-6%]">
              <Image
                src={project.image}
                alt={project.title}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </motion.div>
          ) : (
            <div className="absolute inset-0 flex items-center justify-center bg-stone">
              <span className="font-mono text-xs uppercase tracking-widest text-graphite/40">
                Image coming soon
              </span>
            </div>
          )}

          {/* hover overlay */}
          <div className="absolute inset-0 bg-charcoal/25 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

          {/* tag */}
          <div className="absolute left-0 top-0">
            <span className={`inline-block border-b-2 border-r-2 border-charcoal px-3 py-1.5 font-mono text-[9px] uppercase tracking-widest ${TAG_COLORS[project.tag] ?? 'bg-stone text-charcoal'}`}>
              {project.tag}
            </span>
          </div>

          {/* year */}
          <span className="absolute bottom-2 right-3 font-mono text-[8px] text-pearl/80 select-none drop-shadow">
            {project.year}
          </span>
        </div>

        {/* title + category */}
        <div className="px-5 pt-5">
          <h3 className="font-display text-sm font-semibold leading-snug tracking-wide text-charcoal group-hover:text-forest transition-colors">
            {project.title}
          </h3>
          <p className="mt-1 font-mono text-[10px] uppercase tracking-widest text-graphite">
            {project.category}
          </p>
          <p className="mt-2.5 text-lg leading-relaxed text-graphite line-clamp-2">
            {project.summary}
          </p>
        </div>
      </Link>

      {/* bottom bar — stack + live link */}
      <div className="mt-auto flex items-center justify-between border-t-2 border-line mx-5 mb-5 mt-4 pt-3">
        <div className="flex flex-wrap gap-1.5">
          {project.stack.slice(0, 2).map((t) => (
            <span key={t} className="border border-line bg-stone px-2 py-0.5 font-mono text-[8px] uppercase tracking-widest text-graphite">
              {t}
            </span>
          ))}
        </div>
        {project.liveUrl ? (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 border-2 border-forest bg-pearl px-3 py-1.5 font-mono text-[9px] uppercase tracking-widest text-forest transition-all hover:bg-forest hover:text-pearl"
          >
            Live <ExternalLink className="size-3" />
          </a>
        ) : (
          <Link
            href={`/work/${project.slug}`}
            className="flex items-center gap-1 font-mono text-[9px] uppercase tracking-widest text-graphite/50 transition-colors group-hover:text-forest"
          >
            View <ArrowUpRight className="size-3.5" />
          </Link>
        )}
      </div>
    </div>
  )
}
