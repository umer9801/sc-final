import type { Metadata } from 'next'
import { PageHero } from '@/components/page-hero'
import { CTASection } from '@/components/cta-section'
import { Container, Section } from '@/components/section'
import { ScrollReveal } from '@/components/reveal'

export const metadata: Metadata = {
  title: 'Work',
  description:
    'A curated gallery of digital products, AI systems, e-commerce platforms and automation projects we have shipped.',
}

export default function WorkPage() {
  return (
    <>
      <PageHero
        eyebrow="Selected Work"
        lines={[{ text: 'TECHNOLOGY' }, { text: 'CASE STUDIES.', highlight: true }]}
        intro="Every project here is a real business problem we solved — from SaaS platforms to AI automation and high-conversion storefronts."
        index="COMING SOON"
      />

      <Section>
        <Container>
          <ScrollReveal>
            <div className="flex flex-col items-center justify-center border-2 border-charcoal bg-pearl py-24 text-center shadow-[6px_6px_0_0_var(--charcoal)]">
              {/* pixel loading icon */}
              <div className="mb-8 font-mono text-4xl text-forest select-none">
                ░░░░░░░░░░
              </div>
              <span className="mb-3 font-mono text-[10px] uppercase tracking-widest text-forest">
                [ Loading Projects ]
              </span>
              <h2 className="font-display text-xl text-charcoal md:text-2xl">
                CASE STUDIES COMING SOON.
              </h2>
              <p className="mt-4 max-w-sm font-mono text-sm text-graphite">
                We are preparing detailed breakdowns of our work. Check back shortly.
              </p>
              {/* pixel progress bar */}
              <div className="mt-8 h-3 w-48 border-2 border-charcoal bg-stone">
                <div className="h-full w-2/3 bg-forest" />
              </div>
              <p className="mt-2 font-mono text-[9px] uppercase tracking-widest text-graphite/50">
                66% Complete
              </p>
            </div>
          </ScrollReveal>
        </Container>
      </Section>

      <CTASection />
    </>
  )
}
