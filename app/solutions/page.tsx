import type { Metadata } from 'next'
import { PageHero } from '@/components/page-hero'
import { SolutionsGrid } from '@/components/solutions-grid'
import { WorkflowVisualization } from '@/components/workflow-visualization'
import { CTASection } from '@/components/cta-section'
import { Container, Section, Eyebrow } from '@/components/section'
import { AnimatedText, ScrollReveal } from '@/components/reveal'

export const metadata: Metadata = {
  title: 'Solutions',
  description:
    'Outcome-focused solutions: business automation, AI integration, digital transformation, customer experience and more.',
}

export default function SolutionsPage() {
  return (
    <>
      <PageHero
        eyebrow="Solutions / Outcomes"
        lines={[{ text: 'SYSTEMS BUILT' }, { text: 'AROUND OUTCOMES.', highlight: true }]}
        intro="We start from the result you need — then design and engineer the systems that get you there."
        index="8 SOLUTION AREAS"
      />

      <Section>
        <Container>
          <div className="mb-12 max-w-2xl">
            <Eyebrow>How it connects</Eyebrow>
            <AnimatedText
              text="ONE CONNECTED OPERATING SYSTEM."
              className="mt-5 font-display text-3xl font-semibold leading-[0.98] tracking-tight text-charcoal md:text-5xl"
            />
            <ScrollReveal delay={0.15}>
              <p className="mt-5 text-graphite text-pretty">
                Every solution plugs into the same foundation — data, automation and interfaces that
                work together instead of in silos.
              </p>
            </ScrollReveal>
          </div>
          <ScrollReveal>
            <WorkflowVisualization />
          </ScrollReveal>
        </Container>
      </Section>

      <Section className="border-t border-line bg-stone/30">
        <Container>
          <div className="mb-12">
            <Eyebrow>Solution areas</Eyebrow>
            <AnimatedText
              text="WHERE WE CREATE LEVERAGE."
              className="mt-5 font-display text-3xl font-semibold leading-[0.98] tracking-tight text-charcoal md:text-5xl"
            />
          </div>
          <SolutionsGrid />
        </Container>
      </Section>

      <CTASection />
    </>
  )
}
