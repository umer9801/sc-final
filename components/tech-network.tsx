'use client'

import { useState } from 'react'
import { motion } from 'motion/react'

type Tech = { id: string; label: string; x: number; y: number; group: string }

const TECHS: Tech[] = [
  { id: 'next', label: 'Next.js', x: 50, y: 50, group: 'core' },
  { id: 'react', label: 'React', x: 28, y: 30, group: 'core' },
  { id: 'ts', label: 'TypeScript', x: 72, y: 28, group: 'core' },
  { id: 'node', label: 'Node.js', x: 22, y: 62, group: 'backend' },
  { id: 'python', label: 'Python', x: 78, y: 66, group: 'backend' },
  { id: 'fastapi', label: 'FastAPI', x: 62, y: 82, group: 'backend' },
  { id: 'pg', label: 'PostgreSQL', x: 38, y: 84, group: 'data' },
  { id: 'mongo', label: 'MongoDB', x: 14, y: 44, group: 'data' },
  { id: 'openai', label: 'OpenAI', x: 86, y: 46, group: 'ai' },
  { id: 'langchain', label: 'LangChain', x: 88, y: 22, group: 'ai' },
  { id: 'n8n', label: 'n8n', x: 50, y: 18, group: 'ai' },
  { id: 'aws', label: 'AWS', x: 50, y: 88, group: 'infra' },
]

const EDGES: [string, string][] = [
  ['next', 'react'],
  ['next', 'ts'],
  ['next', 'node'],
  ['react', 'ts'],
  ['node', 'pg'],
  ['node', 'mongo'],
  ['python', 'fastapi'],
  ['python', 'openai'],
  ['openai', 'langchain'],
  ['langchain', 'n8n'],
  ['n8n', 'node'],
  ['next', 'openai'],
  ['fastapi', 'pg'],
  ['aws', 'node'],
  ['aws', 'pg'],
  ['aws', 'fastapi'],
  ['n8n', 'next'],
]

export function TechNetwork() {
  const [active, setActive] = useState<string | null>(null)

  const connected = new Set<string>()
  if (active) {
    connected.add(active)
    EDGES.forEach(([a, b]) => {
      if (a === active) connected.add(b)
      if (b === active) connected.add(a)
    })
  }

  const byId = (id: string) => TECHS.find((t) => t.id === id)!

  return (
    <div className="relative aspect-square w-full max-w-2xl">
      <svg viewBox="0 0 100 100" className="absolute inset-0 size-full" aria-hidden>
        {EDGES.map(([a, b], i) => {
          const na = byId(a)
          const nb = byId(b)
          const isActive = active ? a === active || b === active : false
          return (
            <line
              key={i}
              x1={na.x}
              y1={na.y}
              x2={nb.x}
              y2={nb.y}
              stroke={isActive ? 'oklch(0.42 0.055 158)' : 'var(--line)'}
              strokeWidth={isActive ? 0.5 : 0.25}
              className="transition-all duration-300"
              opacity={active && !isActive ? 0.3 : 1}
            />
          )
        })}
      </svg>

      {TECHS.map((t, i) => {
        const dim = active !== null && !connected.has(t.id)
        const isActive = t.id === active
        return (
          <motion.button
            key={t.id}
            initial={{ opacity: 0, scale: 0.7 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.04 }}
            onMouseEnter={() => setActive(t.id)}
            onMouseLeave={() => setActive(null)}
            onFocus={() => setActive(t.id)}
            onBlur={() => setActive(null)}
            style={{ left: `${t.x}%`, top: `${t.y}%` }}
            className="absolute -translate-x-1/2 -translate-y-1/2"
          >
            <motion.span
              animate={{
                scale: isActive ? 1.12 : 1,
                opacity: dim ? 0.35 : 1,
              }}
              transition={{ duration: 0.3 }}
              className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-xs font-medium tracking-tight transition-colors ${
                isActive
                  ? 'border-forest bg-forest text-pearl'
                  : connected.has(t.id)
                    ? 'border-forest/40 bg-pearl text-charcoal'
                    : 'border-line bg-pearl text-charcoal'
              }`}
            >
              <span
                className={`size-1.5 rounded-full ${isActive ? 'bg-pearl' : 'bg-forest'}`}
              />
              {t.label}
            </motion.span>
          </motion.button>
        )
      })}
    </div>
  )
}
