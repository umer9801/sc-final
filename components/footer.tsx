'use client'

import Link from 'next/link'
import { motion } from 'motion/react'
import { ArrowUpRight } from 'lucide-react'

const columns = [
  {
    title: 'Company',
    links: [
      { label: 'Services', href: '/services' },
      { label: 'Solutions', href: '/solutions' },
      { label: 'Work', href: '/work' },
      { label: 'About', href: '/about' },
    ],
  },
  {
    title: 'More',
    links: [
      { label: 'Insights', href: '/insights' },
      { label: 'Contact', href: '/contact' },
    ],
  },
]

const socials = [
  { label: 'LinkedIn', href: '#' },
  { label: 'X / Twitter', href: '#' },
  { label: 'GitHub', href: '#' },
  { label: 'Dribbble', href: '#' },
]

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="group inline-flex w-fit items-center gap-1 font-mono text-xs uppercase tracking-widest text-charcoal/70 transition-colors hover:text-forest"
    >
      <span className="text-forest/40 group-hover:text-forest transition-colors">▸</span>
      {children}
    </Link>
  )
}

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t-4 border-charcoal bg-stone/40">
      {/* pixel top accent line */}
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        className="absolute inset-x-0 top-0 h-1 origin-left bg-forest"
      />

      <div className="mx-auto max-w-[1400px] px-5 py-16 md:px-8 md:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr]">
          <div>
            {/* pixel label box */}
            <div className="inline-block border-2 border-line px-3 py-1 mb-4">
              <span className="font-mono text-xs uppercase tracking-widest text-graphite">
                Solvix Core / Digital Engineering Studio
              </span>
            </div>
            <p className="mt-4 max-w-md font-display text-lg font-semibold tracking-tight text-charcoal">
              Let&apos;s build something useful.
            </p>
            <a
              href="mailto:info@solvixcore.uk"
              className="group mt-5 inline-flex items-center gap-2 border-b-2 border-forest pb-0.5 font-mono text-sm text-charcoal hover:text-forest transition-colors"
            >
              info@solvixcore.uk
              <ArrowUpRight className="size-3.5 text-forest" />
            </a>
            <a
              href="https://wa.me/447348486506"
              target="_blank"
              rel="noopener noreferrer"
              className="group mt-3 inline-flex items-center gap-2 border-b-2 border-forest pb-0.5 font-mono text-sm text-charcoal hover:text-forest transition-colors"
            >
              +44 7348 486506
              <ArrowUpRight className="size-3.5 text-forest" />
            </a>
            <p className="mt-3 font-mono text-xs text-graphite">
              Working remotely · Serving businesses globally
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
            {columns.map((col) => (
              <div key={col.title} className="flex flex-col gap-3">
                <div className="border-b-2 border-charcoal pb-1">
                  <p className="font-mono text-xs uppercase tracking-widest text-charcoal">
                    {col.title}
                  </p>
                </div>
                {col.links.map((l) => (
                  <FooterLink key={l.label} href={l.href}>
                    {l.label}
                  </FooterLink>
                ))}
              </div>
            ))}
            <div className="flex flex-col gap-3">
              <div className="border-b-2 border-charcoal pb-1">
                <p className="font-mono text-xs uppercase tracking-widest text-charcoal">Social</p>
              </div>
              {socials.map((s) => (
                <FooterLink key={s.label} href={s.href}>
                  {s.label}
                </FooterLink>
              ))}
            </div>
          </div>
        </div>

        {/* Giant pixel wordmark */}
        <div className="mt-16 overflow-hidden border-t-2 border-line pt-6 text-center">
          <motion.h2
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="select-none font-display text-[7vw] font-semibold leading-[1.1] tracking-tight text-charcoal"
          >
            SOLVIX <span className="text-forest">CORE</span>
          </motion.h2>
        </div>

        <div className="mt-6 flex flex-col items-start justify-between gap-4 border-t-2 border-line pt-5 sm:flex-row sm:items-center">
          <p className="font-mono text-xs text-graphite">
            © {new Date().getFullYear()} Solvix Core. All rights reserved.
          </p>
          <p className="font-mono text-xs tracking-widest text-graphite">
            [ DIGITAL SYSTEMS THAT MOVE BUSINESS ]
          </p>
        </div>
      </div>
    </footer>
  )
}
