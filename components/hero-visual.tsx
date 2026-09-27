'use client'

import { motion, type MotionValue, useTransform } from 'motion/react'
import { Boxes, Cpu, Database, GitBranch, Workflow, Zap } from 'lucide-react'

const nodes = [
  { x: 20, y: 24 }, { x: 50, y: 14 }, { x: 80, y: 30 },
  { x: 30, y: 58 }, { x: 66, y: 54 }, { x: 48, y: 82 },
  { x: 84, y: 74 }, { x: 14, y: 82 },
]

const links: [number, number][] = [
  [0,1],[1,2],[0,3],[1,4],[3,4],[4,6],[3,5],[5,6],[5,7],[2,4],
]

const modules = [
  { icon: Cpu,      label: 'AI Agent',   x: '8%',  y: '18%', depth: 26 },
  { icon: Database, label: 'Data Layer', x: '60%', y: '10%', depth: 38 },
  { icon: Workflow, label: 'Automation', x: '65%', y: '60%', depth: 30 },
  { icon: Boxes,    label: 'Modules',    x: '6%',  y: '64%', depth: 44 },
]

const chips = [
  { icon: Zap,       label: 'REALTIME', x: '40%', y: '4%',  depth: 18 },
  { icon: GitBranch, label: 'PIPELINE', x: '36%', y: '88%', depth: 22 },
]

function FloatingModule({ mx, my, m }: { mx: MotionValue<number>; my: MotionValue<number>; m: typeof modules[number] }) {
  const px = useTransform(mx, [-0.5, 0.5], [m.depth, -m.depth])
  const py = useTransform(my, [-0.5, 0.5], [m.depth * 0.7, -m.depth * 0.7])
  return (
    <motion.div
      style={{ left: m.x, top: m.y, x: px, y: py }}
      className="absolute"
      animate={{ translateY: [0, -5, 0] }}
      transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
    >
      {/* pixel card — sharp corners via global override */}
      <div className="flex items-center gap-2 border-2 border-charcoal bg-pearl/95 px-3 py-2 shadow-[3px_3px_0_0_var(--charcoal)]">
        <m.icon className="size-4 text-forest" />
        <span className="font-mono text-[10px] tracking-wide text-charcoal">{m.label}</span>
      </div>
    </motion.div>
  )
}

function FloatingChip({ mx, my, c }: { mx: MotionValue<number>; my: MotionValue<number>; c: typeof chips[number] }) {
  const px = useTransform(mx, [-0.5, 0.5], [c.depth, -c.depth])
  const py = useTransform(my, [-0.5, 0.5], [c.depth, -c.depth])
  return (
    <motion.div
      style={{ left: c.x, top: c.y, x: px, y: py }}
      className="absolute flex items-center gap-1.5 border-2 border-charcoal bg-charcoal px-2.5 py-1.5 shadow-[2px_2px_0_0_oklch(0.40_0.07_158)]"
    >
      <c.icon className="size-3 text-sage" />
      <span className="font-mono text-[9px] tracking-widest text-pearl">{c.label}</span>
    </motion.div>
  )
}

export function HeroVisual({ mx, my }: { mx: MotionValue<number>; my: MotionValue<number> }) {
  const gridX = useTransform(mx, [-0.5, 0.5], [10, -10])
  const gridY = useTransform(my, [-0.5, 0.5], [8, -8])
  const netX  = useTransform(mx, [-0.5, 0.5], [-14, 14])
  const netY  = useTransform(my, [-0.5, 0.5], [-10, 10])

  return (
    <div className="relative aspect-square w-full max-w-xl select-none">
      {/* ── outer pixel frame ── */}
      <div className="absolute inset-0 overflow-hidden border-2 border-charcoal bg-gradient-to-br from-pearl to-stone/60 shadow-[8px_8px_0_0_var(--charcoal)]">

        {/* scanlines */}
        <div className="scanlines absolute inset-0 z-10" />

        {/* pixel grid layer */}
        <motion.div
          style={{ x: gridX, y: gridY }}
          className="absolute inset-[-10%]"
        >
          <div
            className="size-full"
            style={{
              backgroundImage:
                'linear-gradient(to right, oklch(0.82 0.007 85) 1px, transparent 1px), linear-gradient(to bottom, oklch(0.82 0.007 85) 1px, transparent 1px)',
              backgroundSize: '20px 20px',
              opacity: 1,
            }}
          />
        </motion.div>

        {/* forest glow */}
        <div className="absolute left-1/2 top-1/2 size-2/3 -translate-x-1/2 -translate-y-1/2 bg-forest/12 blur-3xl" />

        {/* network SVG */}
        <motion.svg
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          className="absolute inset-0 size-full"
          style={{ x: netX, y: netY }}
        >
          {links.map(([a, b], i) => (
            <g key={i}>
              <line
                x1={nodes[a].x} y1={nodes[a].y}
                x2={nodes[b].x} y2={nodes[b].y}
                stroke="oklch(0.60 0.008 75)"
                strokeWidth="0.5"
                strokeDasharray="2 1.5"
              />
              <motion.circle
                r="0.9"
                fill="oklch(0.40 0.07 158)"
                initial={{ opacity: 0 }}
                animate={{
                  cx: [nodes[a].x, nodes[b].x],
                  cy: [nodes[a].y, nodes[b].y],
                  opacity: [0, 1, 1, 0],
                }}
                transition={{
                  duration: 2.2, delay: i * 0.48,
                  repeat: Infinity, repeatDelay: 1.8,
                  ease: 'linear',
                }}
              />
            </g>
          ))}
          {nodes.map((n, i) => (
            <g key={i}>
              {/* pixel node: square instead of circle */}
              <motion.rect
                x={n.x - 1.4} y={n.y - 1.4}
                width="2.8" height="2.8"
                fill="oklch(0.18 0.012 70)"
                animate={{ width: ['2.8', '3.6', '2.8'], height: ['2.8', '3.6', '2.8'], x: [n.x-1.4, n.x-1.8, n.x-1.4], y: [n.y-1.4, n.y-1.8, n.y-1.4] }}
                transition={{ duration: 2.8, delay: i * 0.32, repeat: Infinity, ease: 'easeInOut' }}
              />
              <rect x={n.x - 3} y={n.y - 3} width="6" height="6" fill="none" stroke="oklch(0.60 0.008 75)" strokeWidth="0.4" />
            </g>
          ))}
        </motion.svg>

        {/* floating pixel cards */}
        {modules.map((m) => <FloatingModule key={m.label} m={m} mx={mx} my={my} />)}
        {chips.map((c)   => <FloatingChip   key={c.label} c={c} mx={mx} my={my} />)}

        {/* pixel status bar */}
        <div className="absolute inset-x-0 bottom-0 flex items-center justify-between border-t-2 border-charcoal bg-charcoal px-4 py-2">
          <div className="flex items-center gap-2">
            <motion.span
              className="inline-block size-2 bg-forest"
              animate={{ opacity: [1, 0.2, 1] }}
              transition={{ duration: 1.2, repeat: Infinity, ease: 'linear' }}
            />
            <span className="font-mono text-[9px] tracking-widest text-pearl/80">SYSTEM ONLINE</span>
          </div>
          <span className="font-mono text-[9px] tracking-widest text-pearl/40">v.SOLVIX</span>
        </div>

        {/* corner pixel labels */}
        <span className="absolute left-2 top-2 font-mono text-[8px] text-forest/50 select-none">00</span>
        <span className="absolute right-2 top-2 font-mono text-[8px] text-forest/50 select-none">FF</span>
      </div>
    </div>
  )
}
