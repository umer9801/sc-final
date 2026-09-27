'use client'

import Link from 'next/link'
import { motion, AnimatePresence } from 'motion/react'
import { X, ArrowUpRight } from 'lucide-react'
import { NAV } from '@/lib/site'

const EASE = [0.22, 1, 0.36, 1] as const

const items = [...NAV, { label: 'Contact', href: '/contact' }]

export function MobileMenu({ onClose }: { onClose: () => void }) {
  return (
    <>
      {/* backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.25 }}
        onClick={onClose}
        className="fixed inset-0 z-[190] bg-charcoal/40 backdrop-blur-sm lg:hidden"
      />

      {/* sidebar drawer — slides in from right */}
      <motion.aside
        initial={{ x: '100%' }}
        animate={{ x: 0 }}
        exit={{ x: '100%' }}
        transition={{ duration: 0.35, ease: EASE }}
        className="fixed right-0 top-0 z-[200] flex h-full w-72 flex-col border-l-2 border-charcoal bg-pearl shadow-[-6px_0_0_0_var(--charcoal)] lg:hidden"
      >
        {/* pixel top bar */}
        <div className="flex items-center justify-between border-b-2 border-charcoal bg-charcoal px-4 py-3">
          <span className="font-mono text-[10px] uppercase tracking-widest text-pearl/70">
            MENU
          </span>
          <button
            onClick={onClose}
            aria-label="Close menu"
            className="flex size-8 items-center justify-center border border-pearl/20 bg-pearl/10 text-pearl transition-colors hover:bg-pearl/20"
          >
            <X className="size-4" />
          </button>
        </div>

        {/* nav links */}
        <nav className="flex flex-1 flex-col overflow-y-auto">
          {items.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, x: 16 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, ease: EASE, delay: 0.1 + i * 0.05 }}
            >
              <Link
                href={item.href}
                onClick={onClose}
                className="group flex items-center justify-between border-b-2 border-line px-4 py-4 transition-colors hover:bg-stone"
              >
                <div className="flex items-center gap-3">
                  <span className="font-mono text-[9px] text-forest">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span className="font-mono text-sm uppercase tracking-widest text-charcoal">
                    {item.label}
                  </span>
                </div>
                <ArrowUpRight className="size-3.5 text-graphite/40 transition-all group-hover:text-forest group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </motion.div>
          ))}
        </nav>

        {/* bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, ease: EASE, delay: 0.35 }}
          className="border-t-2 border-charcoal p-4"
        >
          <Link
            href="/contact"
            onClick={onClose}
            className="flex items-center justify-center gap-2 border-2 border-charcoal bg-charcoal px-4 py-3 font-mono text-xs uppercase tracking-widest text-pearl shadow-[3px_3px_0_0_oklch(0.40_0.07_158)] transition-all hover:shadow-[1px_1px_0_0_oklch(0.40_0.07_158)] hover:translate-x-[2px] hover:translate-y-[2px]"
          >
            Start a Project
            <ArrowUpRight className="size-3.5" />
          </Link>
          <a
            href="mailto:info@solvixcore.com"
            className="mt-3 block text-center font-mono text-[9px] tracking-widest text-graphite/60"
          >
            info@solvixcore.com
          </a>
        </motion.div>
      </motion.aside>
    </>
  )
}
