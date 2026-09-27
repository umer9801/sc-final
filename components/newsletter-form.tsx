'use client'

import { useState } from 'react'
import { AnimatedText, ScrollReveal } from '@/components/reveal'

export function NewsletterForm() {
  const [status, setStatus] = useState<'idle' | 'success'>('idle')
  const [email, setEmail] = useState('')

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!email) return
    setStatus('success')
    setEmail('')
  }

  return (
    <div className="overflow-hidden rounded-[2.5rem] border border-line bg-charcoal px-8 py-14 md:px-16 md:py-20">
      <div className="grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-20">
        <div>
          <span className="font-mono text-xs uppercase tracking-widest text-sage">
            Stay sharp
          </span>
          <AnimatedText
            text="NEW THINKING, WHEN WE PUBLISH."
            className="mt-5 font-display text-4xl font-semibold leading-[0.98] tracking-tight text-pearl md:text-5xl"
          />
          <ScrollReveal delay={0.1}>
            <p className="mt-5 max-w-md text-pearl/60 text-pretty">
              We publish when we have something worth saying — usually once or twice a month.
              No roundups, no sponsored content, no fluff.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.15}>
            <div className="mt-6 flex flex-col gap-2">
              {[
                'One email per article, nothing more',
                'Unsubscribe any time — one click',
                'No sponsors, no ads, no agenda',
              ].map((item) => (
                <div key={item} className="flex items-center gap-2 text-sm text-pearl/50">
                  <span className="size-1 rounded-full bg-forest" />
                  {item}
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>

        <ScrollReveal delay={0.15}>
          {status === 'success' ? (
            <div className="rounded-2xl border border-pearl/10 bg-pearl/5 p-8 text-center">
              <div className="mx-auto mb-4 flex size-12 items-center justify-center rounded-full bg-forest/20">
                <span className="text-xl text-forest">✓</span>
              </div>
              <p className="font-display text-lg font-medium text-pearl">You are in.</p>
              <p className="mt-2 text-sm text-pearl/50">
                Next article lands in your inbox when it is ready.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-3">
              <div className="flex gap-3 rounded-2xl border border-pearl/10 bg-pearl/5 p-2">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  required
                  className="min-w-0 flex-1 bg-transparent px-4 py-3 text-sm text-pearl placeholder:text-pearl/30 outline-none"
                />
                <button
                  type="submit"
                  className="shrink-0 rounded-xl bg-forest px-5 py-3 text-sm font-medium text-pearl transition-colors hover:bg-forest/80"
                >
                  Subscribe
                </button>
              </div>
              <p className="px-2 text-xs text-pearl/30">
                No spam. Unsubscribe any time.
              </p>
            </form>
          )}
        </ScrollReveal>
      </div>
    </div>
  )
}
