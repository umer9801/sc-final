import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowUpRight, TrendingUp, Clock, Users, Zap } from 'lucide-react'
import { PageHero } from '@/components/page-hero'
import { WorkGrid } from '@/components/work-grid'
import { CTASection } from '@/components/cta-section'
import { Container, Section, Eyebrow } from '@/components/section'
import { AnimatedText, ScrollReveal, Stagger, StaggerItem } from '@/components/reveal'
import { PROJECTS } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Work',
  description:
    'A curated gallery of digital products, AI systems, e-commerce platforms and automation projects we have shipped.',
}

const WORK_STATS = [
  { value: '6', label: 'Case studies', icon: TrendingUp },
  { value: '< 3wk', label: 'Avg. kick-off', icon: Clock },
  { value: '100%', label: 'On-time delivery', icon: Zap },
  { value: '30+', label: 'Businesses served', icon: Users },
]

const TESTIMONIALS = [
  {
    quote:
      'They shipped a production-ready SaaS platform in 8 weeks. Every technical decision was clearly reasoned and tied back to the business problem we were solving.',
    author: 'CTO, Nordwind',
    tag: 'SaaS',
  },
  {
    quote:
      'The AI pipeline they built handles 82% of our inbound requests automatically. We saved 11 hours a week from day one. No fluff, no scope creep.',
    author: 'Head of Ops, Helix',
    tag: 'AI / Automation',
  },
  {
    quote:
      'Our Lighthouse score went from 54 to 98. Engagement doubled in the first month. The site just works — and it looks exactly how we imagined it.',
    author: 'Founder, Verde Studio',
    tag: 'Web',
  },
]

const APPROACH = [
  {
    no: '01',
    title: 'We start with the problem, not the solution',
    body: 'Before we touch code, we map the actual business constraint — where time is lost, where revenue leaks, where the system breaks under load. This defines every decision downstream.',
  },
  {
    no: '02',
    title: 'We build incrementally with production quality',
    body: 'Every sprint delivers something real and shippable. No "big reveal" at the end. You see progress weekly, and every increment is built to the same standard as the final product.',
  },
  {
    no: '03',
    title: 'We measure outcomes, not outputs',
    body: 'Lines of code, design screens, sprint velocity — none of that matters. What matters is conversion, uptime, time saved, revenue generated. We instrument everything from day one.',
  },
  {
    no: '04',
    title: 'We document everything we build',
    body: 'You own the codebase. We leave every project with clear architecture docs, runbooks, and inline comments — so your team can maintain, extend and hand off without us.',
  },
]

export default function WorkPage() {
  const tagCounts = PROJECTS.reduce(
    (acc, p) => ({ ...acc, [p.tag]: (acc[p.tag] || 0) + 1 }),
    {} as Record<string, number>,
  )

  return (
    <>
      <PageHero
        eyebrow="Selected Work"
        lines={[{ text: 'TECHNOLOGY' }, { text: 'CASE STUDIES.', highlight: true }]}
        intro="Every project here is a real business problem we solved — from SaaS platforms to AI automation and high-conversion storefronts."
        index="6 PROJECTS"
      />

      {/* Work stats strip */}
      <div className="border-y border-line bg-pearl/60">
        <Container>
          <div className="grid grid-cols-2 divide-x divide-y divide-line md:grid-cols-4 md:divide-y-0">
            {WORK_STATS.map((s, i) => (
              <ScrollReveal key={s.label} delay={i * 0.06}>
                <div className="flex items-center gap-4 px-6 py-7">
                  <div className="flex size-10 shrink-0 items-center justify-center rounded-full border border-line bg-stone">
                    <s.icon className="size-4 text-forest" />
                  </div>
                  <div>
                    <p className="font-display text-2xl font-semibold tracking-tight text-charcoal">
                      {s.value}
                    </p>
                    <p className="font-mono text-[10px] uppercase tracking-widest text-graphite">
                      {s.label}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </Container>
      </div>

      {/* Category breakdown */}
      <Section className="pb-0">
        <Container>
          <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <Eyebrow>Project Breakdown</Eyebrow>
              <AnimatedText
                text="WHAT WE HAVE BUILT."
                className="mt-5 font-display text-4xl font-semibold leading-[0.98] tracking-tight text-charcoal md:text-5xl"
              />
            </div>
            <ScrollReveal delay={0.15}>
              <p className="max-w-sm text-graphite text-pretty">
                Six projects across five technology domains — each one a different problem, the same
                standard of craft.
              </p>
            </ScrollReveal>
          </div>

          <Stagger className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {Object.entries(tagCounts).map(([tag, count]) => (
              <StaggerItem key={tag}>
                <div className="group flex items-center justify-between rounded-2xl border border-line bg-pearl px-6 py-5 transition-colors hover:bg-background">
                  <div className="flex items-center gap-3">
                    <span className="size-2 rounded-full bg-forest" />
                    <span className="font-display text-lg font-medium text-charcoal">{tag}</span>
                  </div>
                  <span className="font-mono text-sm text-graphite">
                    {count} project{count > 1 ? 's' : ''}
                  </span>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </Container>
      </Section>

      {/* The work grid */}
      <Section>
        <Container>
          <WorkGrid />
        </Container>
      </Section>

      {/* How we approach a project */}
      <Section className="border-t border-line bg-stone/30">
        <Container>
          <div className="mb-16 max-w-2xl">
            <Eyebrow>Our Approach</Eyebrow>
            <AnimatedText
              text="HOW EVERY PROJECT GETS BUILT."
              className="mt-5 font-display text-4xl font-semibold leading-[0.98] tracking-tight text-charcoal md:text-6xl"
            />
          </div>

          <div className="grid gap-px bg-line overflow-hidden rounded-3xl border border-line sm:grid-cols-2">
            {APPROACH.map((step, i) => (
              <ScrollReveal key={step.no} delay={i * 0.07}>
                <div className="flex h-full flex-col gap-4 bg-pearl p-8 transition-colors hover:bg-background lg:p-10">
                  <span className="font-mono text-xs text-forest">{step.no}</span>
                  <h3 className="font-display text-xl font-semibold leading-tight tracking-tight text-charcoal">
                    {step.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-graphite">{step.body}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* Testimonials */}
      <Section>
        <Container>
          <div className="mb-14">
            <Eyebrow>Client Feedback</Eyebrow>
            <AnimatedText
              text="WHAT CLIENTS SAY."
              className="mt-5 font-display text-4xl font-semibold leading-[0.98] tracking-tight text-charcoal md:text-5xl"
            />
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {TESTIMONIALS.map((t, i) => (
              <ScrollReveal key={t.author} delay={i * 0.08}>
                <div className="flex h-full flex-col justify-between rounded-3xl border border-line bg-pearl p-8">
                  {/* Quote marks */}
                  <div>
                    <span className="font-display text-5xl leading-none text-forest/30 select-none">
                      "
                    </span>
                    <p className="mt-2 text-base leading-relaxed text-charcoal text-pretty">
                      {t.quote}
                    </p>
                  </div>
                  <div className="mt-8 flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-charcoal">{t.author}</p>
                    </div>
                    <span className="rounded-full bg-stone px-3 py-1 font-mono text-[10px] uppercase tracking-widest text-graphite">
                      {t.tag}
                    </span>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* Dark results banner */}
      <Section className="border-t border-line">
        <Container>
          <div className="overflow-hidden rounded-[2.5rem] bg-charcoal px-8 py-16 md:px-16 md:py-20">
            <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
              <div>
                <span className="font-mono text-xs uppercase tracking-widest text-sage">
                  Real results
                </span>
                <AnimatedText
                  text="NUMBERS FROM PRODUCTION."
                  className="mt-5 font-display text-4xl font-semibold leading-[0.98] tracking-tight text-pearl md:text-5xl"
                />
              </div>
              <div className="grid grid-cols-2 gap-px bg-pearl/10 overflow-hidden rounded-2xl sm:grid-cols-3">
                {[
                  { v: '82%', l: 'Requests auto-resolved' },
                  { v: '+46%', l: 'Conversion uplift' },
                  { v: '98', l: 'Lighthouse score' },
                  { v: '99.9%', l: 'Platform uptime' },
                  { v: '4.8★', l: 'App store rating' },
                  { v: '0', l: 'Stock conflicts' },
                ].map((r) => (
                  <div key={r.l} className="flex flex-col gap-1 bg-charcoal px-5 py-5">
                    <span className="font-display text-2xl font-semibold text-pearl">{r.v}</span>
                    <span className="font-mono text-[10px] uppercase tracking-widest text-pearl/40">
                      {r.l}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Start a project CTA */}
      <Section className="border-t border-line bg-stone/30">
        <Container>
          <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
            <div className="max-w-xl">
              <Eyebrow>Start a project</Eyebrow>
              <AnimatedText
                text="YOUR PROJECT COULD BE NEXT."
                className="mt-5 font-display text-4xl font-semibold leading-[0.98] tracking-tight text-charcoal md:text-5xl"
              />
              <ScrollReveal delay={0.1}>
                <p className="mt-4 text-graphite">
                  Tell us what you are building and we will come back with honest thoughts and a
                  clear plan — usually within 24 hours.
                </p>
              </ScrollReveal>
            </div>
            <ScrollReveal delay={0.2} className="shrink-0">
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 rounded-full bg-charcoal px-8 py-4 font-medium text-pearl transition-colors hover:bg-forest"
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
