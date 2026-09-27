'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence, useMotionValueEvent, useScroll } from 'motion/react'
import { NAV, MEGA_MENU } from '@/lib/site'
import { MegaMenu } from '@/components/mega-menu'
import { MobileMenu } from '@/components/mobile-menu'
import { MagneticButton } from '@/components/magnetic-button'
import { Logo } from '@/components/logo'
import { cn } from '@/lib/utils'

export function Header() {
  const pathname = usePathname()
  const { scrollY } = useScroll()
  const [scrolled, setScrolled] = useState(false)
  const [megaOpen, setMegaOpen] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [hovered, setHovered] = useState<string | null>(null)

  useMotionValueEvent(scrollY, 'change', (v) => setScrolled(v > 24))

  useEffect(() => {
    setMegaOpen(false)
    setMobileOpen(false)
  }, [pathname])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  return (
    <>
      <motion.header
        className="fixed inset-x-0 top-0 z-[150]"
        onMouseLeave={() => { setMegaOpen(false); setHovered(null) }}
      >
        <motion.div
          animate={{
            paddingTop: scrolled ? 10 : 22,
            paddingBottom: scrolled ? 10 : 22,
          }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className={cn(
            'relative mx-auto flex max-w-[1400px] items-center justify-between px-5 transition-all duration-300 md:px-8',
            scrolled
              ? 'mt-2 border-2 border-charcoal bg-pearl shadow-[4px_4px_0_0_var(--charcoal)] md:mx-4 lg:mx-auto lg:max-w-[1200px]'
              : 'border-2 border-transparent bg-transparent',
          )}
        >
          {/* Logo */}
          <Link href="/" aria-label="Solvix Core home" className="relative z-10 flex items-center">
            <motion.div animate={{ scale: scrolled ? 0.94 : 1 }} transition={{ duration: 0.3 }}>
              <Logo />
            </motion.div>
          </Link>

          {/* Center nav */}
          <nav
            className="absolute left-1/2 hidden -translate-x-1/2 items-center lg:flex"
            onMouseLeave={() => setHovered(null)}
          >
            {NAV.map((item) => {
              const isServices = item.label === 'Services'
              const active = pathname === item.href || pathname.startsWith(item.href + '/')
              return (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => { setHovered(item.label); setMegaOpen(isServices) }}
                >
                  <Link
                    href={item.href}
                    className="relative flex items-center gap-1 px-4 py-2 font-mono text-xs uppercase tracking-widest text-charcoal/80 transition-colors hover:text-charcoal"
                  >
                    {hovered === item.label && (
                      <motion.span
                        layoutId="nav-pill"
                        className="absolute inset-0 -z-10 border border-line bg-stone"
                        transition={{ type: 'spring', stiffness: 400, damping: 32 }}
                      />
                    )}
                    {active && (
                      <span className="absolute -bottom-0.5 left-0 right-0 h-0.5 bg-forest" />
                    )}
                    <span>{item.label}</span>
                    {isServices && (
                      <motion.span
                        animate={{ rotate: megaOpen ? 180 : 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <svg width="9" height="9" viewBox="0 0 10 10" fill="none">
                          <path d="M2 3.5L5 6.5L8 3.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="square" />
                        </svg>
                      </motion.span>
                    )}
                  </Link>
                </div>
              )
            })}
          </nav>

          {/* Right */}
          <div className="relative z-10 flex items-center gap-2">
            <div className="hidden lg:block">
              <MagneticButton href="/contact" arrow="right" className="h-10 px-5 text-[10px]">
                Start a Project
              </MagneticButton>
            </div>
            {/* pixel hamburger */}
            <button
              onClick={() => setMobileOpen(true)}
              aria-label="Open menu"
              className="flex size-11 items-center justify-center border-2 border-charcoal bg-pearl lg:hidden"
            >
              <span className="flex flex-col items-center gap-[5px]">
                <span className="block h-0.5 w-5 bg-charcoal" />
                <span className="block h-0.5 w-5 bg-charcoal" />
                <span className="block h-0.5 w-3 bg-charcoal" />
              </span>
            </button>
          </div>

          <AnimatePresence>
            {megaOpen && <MegaMenu items={MEGA_MENU} onClose={() => setMegaOpen(false)} />}
          </AnimatePresence>
        </motion.div>
      </motion.header>

      <AnimatePresence>
        {mobileOpen && <MobileMenu onClose={() => setMobileOpen(false)} />}
      </AnimatePresence>
    </>
  )
}
