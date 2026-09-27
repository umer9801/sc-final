'use client'

import { motion } from 'motion/react'
import { MessageSquare, Bot, Cpu, Users, Mail, BarChart3 } from 'lucide-react'

const steps = [
  { icon: MessageSquare, label: 'Client Request', tag: 'INPUT' },
  { icon: Bot,           label: 'AI Agent',       tag: 'REASON' },
  { icon: Cpu,           label: 'Data Processing', tag: 'ENRICH' },
  { icon: Users,         label: 'CRM',            tag: 'SYNC' },
  { icon: Mail,          label: 'Email',           tag: 'NOTIFY' },
  { icon: BarChart3,     label: 'Analytics',       tag: 'MEASURE' },
]

const EASE = [0.22, 1, 0.36, 1] as const

const STEP_COLORS = [
  'border-charcoal shadow-[3px_3px_0_0_var(--charcoal)]',
  'border-forest shadow-[3px_3px_0_0_oklch(0.40_0.07_158)]',
  'border-charcoal shadow-[3px_3px_0_0_var(--charcoal)]',
  'border-forest shadow-[3px_3px_0_0_oklch(0.40_0.07_158)]',
  'border-charcoal shadow-[3px_3px_0_0_var(--charcoal)]',
  'border-forest shadow-[3px_3px_0_0_oklch(0.40_0.07_158)]',
]

export function WorkflowVisualization() {
  return (
    <div className="relative overflow-hidden border-2 border-charcoal bg-pearl shadow-[6px_6px_0_0_var(--charcoal)]">
      {/* pixel top strip */}
      <div className="flex items-center gap-2 border-b-2 border-charcoal bg-charcoal px-4 py-2">
        <motion.span
          className="size-2 bg-forest"
          animate={{ opacity: [1, 0.2, 1] }}
          transition={{ duration: 1.1, repeat: Infinity, ease: 'linear' }}
        />
        <span className="font-mono text-[9px] uppercase tracking-widest text-pearl/70">
          AI_WORKFLOW.exe
        </span>
        <span className="ml-auto font-mono text-[9px] text-pearl/30">RUNNING</span>
      </div>

      <div className="p-5 md:p-8">
        <div className="relative flex flex-col gap-3 lg:flex-row lg:items-stretch lg:gap-0">
          {steps.map((step, i) => (
            <div key={step.label} className="flex flex-1 items-center gap-3 lg:flex-col lg:gap-4">

              <motion.div
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.45, ease: EASE, delay: i * 0.09 }}
                className={`group relative flex w-full flex-1 flex-col gap-3 border-2 bg-background p-4 transition-all lg:items-center lg:text-center ${STEP_COLORS[i]}`}
              >
                {/* icon */}
                <div className="relative flex size-11 items-center justify-center border-2 border-line bg-pearl">
                  <step.icon className="size-5 text-forest" />
                  {/* pixel pulse ring */}
                  <motion.span
                    className="absolute inset-0 border-2 border-forest"
                    animate={{ opacity: [0, 0.7, 0], scale: [0.85, 1.2, 1.3] }}
                    transition={{
                      duration: 2.2, repeat: Infinity,
                      delay: i * 0.38, ease: 'easeOut',
                    }}
                  />
                </div>

                <div className="lg:mt-1">
                  <div className="font-mono text-[9px] tracking-widest text-forest">{step.tag}</div>
                  <div className="mt-0.5 font-mono text-sm text-charcoal">{step.label}</div>
                </div>

                {/* step number */}
                <span className="absolute right-1.5 top-1.5 font-mono text-[8px] text-graphite/40">
                  {String(i + 1).padStart(2, '0')}
                </span>
              </motion.div>

              {/* pixel connector */}
              {i < steps.length - 1 && (
                <div className="relative flex shrink-0 items-center justify-center lg:h-6 lg:w-full">
                  <div className="relative h-8 w-0.5 overflow-hidden bg-line lg:h-0.5 lg:w-8">
                    <motion.span
                      className="absolute inset-0 origin-top bg-forest lg:origin-left"
                      animate={{ opacity: [0.1, 1, 0.1] }}
                      transition={{ duration: 1.4, repeat: Infinity, delay: i * 0.28, ease: 'easeInOut' }}
                    />
                  </div>
                  {/* arrow head */}
                  <span className="absolute font-mono text-[8px] text-forest/60 lg:rotate-90">
                    ▼
                  </span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
