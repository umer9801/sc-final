'use client'

import { motion } from 'motion/react'
import { ProjectCard } from '@/components/project-card'
import { PROJECTS } from '@/lib/site'

const EASE = [0.22, 1, 0.36, 1] as const

export function WorkGrid() {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {PROJECTS.map((p, i) => (
        <motion.div
          key={p.slug}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5, ease: EASE, delay: (i % 3) * 0.07 }}
        >
          <ProjectCard project={p} index={i} />
        </motion.div>
      ))}
    </div>
  )
}
