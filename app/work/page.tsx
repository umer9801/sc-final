import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { PageHero } from '@/components/page-hero'
import { WorkGrid } from '@/components/work-grid'
import { CTASection } from '@/components/cta-section'
import { Container, Section, Eyebrow } from '@/components/section'
import { ScrollReveal } from '@/components/reveal'
import { PROJECTS } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Work',
  description:
    'A curated portfolio of websites and digital products we have built for businesses across the UK.',
}

export default function WorkPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Work / Portfolio"
        lines={[{ text: 'WEBSITES WE' }, { text: 'HAVE BUILT.', highlight: true }]}
        intro="Real businesses, real websites. From restaurants and automotive to legal services and wellness — every project built to convert and perform."
        index={`${PROJECTS.length} PROJECTS`}
      />

      {/* Stats strip */}
      <div className="border-y-2 border-charcoal bg-pearl">
        <Container>
          <div className="grid grid-cols-3 divide-x-2 divide-charcoal">
            {[
              { v: `${PROJECTS.length}`, l: 'Projects delivered' },
              { v: '100%', l: 'Web projects' },
              { v: '2024–25', l: 'Recent work' },
            ].map((s) => (
              <div key={s.l} className="flex flex-col gap-1 px-6 py-5">
                <span className="font-display text-2xl font-semibold text-forest">{s.v}</span>
                <span className="font-mono text-[10px] uppercase tracking-widest text-graphite">{s.l}</span>
              </div>
            ))}
          </div>
        </Container>
      </div>

      {/* Grid */}
      <Section>
        <Container>
          <div className="mb-12 flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <Eyebrow>All Projects</Eyebrow>
              <ScrollReveal>
                <h2 className="mt-4 font-display text-xl font-semibold leading-snug tracking-wide text-charcoal md:text-3xl">
                  EVERY PROJECT WE HAVE SHIPPED.
                </h2>
              </ScrollReveal>
            </div>
            <ScrollReveal delay={0.1}>
              <p className="max-w-xs text-xl text-graphite">
                Click any project to see more. Live demo links available where the site is live.
              </p>
            </ScrollReveal>
          </div>
          <WorkGrid />
        </Container>
      </Section>

      {/* Start a project banner */}
      <Section className="border-t-2 border-charcoal bg-stone/30">
        <Container>
          <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
            <div className="max-w-xl">
              <Eyebrow>Start a project</Eyebrow>
              <ScrollReveal>
                <h2 className="mt-4 font-display text-xl font-semibold leading-snug tracking-wide text-charcoal md:text-3xl">
                  YOUR WEBSITE COULD BE NEXT.
                </h2>
              </ScrollReveal>
              <ScrollReveal delay={0.1}>
                <p className="mt-3 text-xl text-graphite">
                  Tell us about your business and we will come back with honest thoughts and a clear plan — within 24 hours.
                </p>
              </ScrollReveal>
            </div>
            <ScrollReveal delay={0.15} className="shrink-0">
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 border-2 border-charcoal bg-charcoal px-8 py-4 font-mono text-xs uppercase tracking-widest text-pearl shadow-[4px_4px_0_0_oklch(0.40_0.07_158)] transition-all hover:shadow-[2px_2px_0_0_oklch(0.40_0.07_158)] hover:translate-x-[2px] hover:translate-y-[2px]"
              >
                Start a project
                <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </ScrollReveal>
          </div>
        </Container>
      </Section>

      <CTASection />
    </>
  )
}
