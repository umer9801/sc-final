import Link from 'next/link'
import Image from 'next/image'
import { ArrowUpRight } from 'lucide-react'
import { Hero } from '@/components/sections/hero'
import { Marquee } from '@/components/marquee'
import { ServiceExplorer } from '@/components/service-explorer'
import { WorkflowVisualization } from '@/components/workflow-visualization'
import { StatsSection } from '@/components/stats-section'
import { CTASection } from '@/components/cta-section'
import { Container, Section, Eyebrow } from '@/components/section'
import { ScrollReveal, Stagger, StaggerItem } from '@/components/reveal'
import { MagneticButton } from '@/components/magnetic-button'
import { CAPABILITIES, INSIGHTS } from '@/lib/site'

const DIFFERENTIATORS = [
  {
    no: '01',
    title: 'One team, full-stack',
    body: 'Strategy, design and engineering in one room. No hand-offs between agencies. No miscommunication between teams. One point of contact, one point of accountability.',
  },
  {
    no: '02',
    title: 'Senior people on every project',
    body: 'Your project is never handed to a junior after the sales call. The people who scoped your project are the people who build it — and they have shipped production systems before.',
  },
  {
    no: '03',
    title: 'Outcomes, not outputs',
    body: 'We instrument what matters from day one — conversion, uptime, time saved, revenue. Lines of code and design screens are means to an end. The end is a measurable business result.',
  },
  {
    no: '04',
    title: 'You own everything',
    body: 'Every repo, credential, infrastructure component and documentation file is yours from day one. We hand over runbooks, architecture docs and make sure your team can operate without us.',
  },
]

export default function HomePage() {
  return (
    <>
      <Hero />

      {/* Capabilities marquee */}
      <div className="border-y-2 border-charcoal bg-pearl">
        <Marquee items={CAPABILITIES} />
      </div>

      {/* Services */}
      <Section id="services">
        <Container>
          <div className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <Eyebrow>Services</Eyebrow>
              <ScrollReveal>
                <h2 className="mt-5 max-w-2xl font-display text-2xl font-semibold leading-snug tracking-wide text-charcoal md:text-4xl">
                  FROM IDEA TO DIGITAL INFRASTRUCTURE.
                </h2>
              </ScrollReveal>
            </div>
            <ScrollReveal delay={0.2} className="max-w-xs">
              <p className="text-xl text-graphite text-pretty">
                A connected system of capabilities — from the first sketch to production infrastructure.
              </p>
            </ScrollReveal>
          </div>
          <ServiceExplorer />
          <ScrollReveal delay={0.15} className="mt-10 flex justify-end">
            <MagneticButton href="/services" variant="secondary" arrow="up-right">
              All services
            </MagneticButton>
          </ScrollReveal>
        </Container>
      </Section>

      {/* Why us — differentiators */}
      <Section className="border-t-2 border-charcoal bg-stone/30">
        <Container>
          <div className="mb-16 max-w-2xl">
            <Eyebrow>Why Solvix Core</Eyebrow>
            <ScrollReveal>
              <h2 className="mt-5 font-display text-2xl font-semibold leading-snug tracking-wide text-charcoal md:text-4xl">
                THE DIFFERENCE IS IN HOW WE WORK.
              </h2>
            </ScrollReveal>
          </div>
          <div className="grid gap-0 border-2 border-charcoal sm:grid-cols-2">
            {DIFFERENTIATORS.map((d, i) => (
              <ScrollReveal key={d.no} delay={i * 0.07}>
                <div className={`flex h-full flex-col gap-4 border-charcoal bg-pearl p-8 transition-colors hover:bg-stone lg:p-10 ${i < 2 ? 'border-b-2' : ''} ${i % 2 === 0 ? 'sm:border-r-2' : ''}`}>
                  <span className="font-mono text-xs text-forest">[ {d.no} ]</span>
                  <h3 className="font-display text-sm font-semibold leading-snug tracking-wide text-charcoal">
                    {d.title}
                  </h3>
                  <p className="text-xl leading-relaxed text-graphite">{d.body}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* AI + Automation */}
      <Section className="border-t-2 border-charcoal">
        <Container>
          <div className="mb-12 max-w-2xl">
            <Eyebrow>AI &amp; Automation</Eyebrow>
            <ScrollReveal>
              <h2 className="mt-5 font-display text-2xl font-semibold leading-snug tracking-wide text-charcoal md:text-4xl">
                INTELLIGENT SYSTEMS THAT RUN THEMSELVES.
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={0.15}>
              <p className="mt-5 text-xl text-graphite text-pretty">
                We connect AI agents, n8n and your existing tools into automated workflows that move
                data and make decisions — so your team can focus on the work that matters.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.2} className="mt-6 flex flex-wrap gap-3">
              {['AI Agents', 'RAG Pipelines', 'n8n Workflows', 'Chatbots', 'Data Sync'].map((tag) => (
                <span
                  key={tag}
                  className="border-2 border-line bg-pearl px-4 py-1.5 font-mono text-xs uppercase tracking-widest text-charcoal/70"
                >
                  {tag}
                </span>
              ))}
            </ScrollReveal>
          </div>
          <ScrollReveal delay={0.1}>
            <WorkflowVisualization />
          </ScrollReveal>
          <ScrollReveal delay={0.15} className="mt-10 flex justify-end">
            <MagneticButton href="/solutions" variant="secondary" arrow="up-right">
              Explore solutions
            </MagneticButton>
          </ScrollReveal>
        </Container>
      </Section>

      <StatsSection />

      {/* About preview */}
      <Section className="border-t-2 border-charcoal">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[380px_1fr] lg:gap-16 xl:grid-cols-[440px_1fr]">

            {/* portrait image */}
            <ScrollReveal>
              <div className="relative border-2 border-charcoal shadow-[8px_8px_0_0_var(--charcoal)]">
                <div className="relative aspect-[3/4] w-full overflow-hidden">
                  <Image
                    src="/1.jpeg"
                    alt="Solvix Core team at work"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 440px"
                  />
                </div>
                {/* pixel label bar */}
                <div className="absolute bottom-0 left-0 right-0 border-t-2 border-charcoal bg-charcoal px-4 py-2">
                  <span className="font-mono text-[9px] uppercase tracking-widest text-pearl/70">
                    Solvix Core — UK technology studio
                  </span>
                </div>
              </div>
            </ScrollReveal>

            {/* content */}
            <ScrollReveal delay={0.12} className="flex flex-col justify-center gap-8">
              <div>
                <Eyebrow>About</Eyebrow>
                <h2 className="mt-5 font-display text-2xl font-semibold leading-snug tracking-wide text-charcoal md:text-4xl">
                  TECHNOLOGY SHOULD MAKE BUSINESS SIMPLER.
                </h2>
              </div>
              <p className="text-xl leading-relaxed text-graphite text-pretty">
                Solvix Core is a UK technology studio. We combine strategy, design and
                engineering into one accountable team — no hand-offs, no blame gaps, no inflated
                estimates. Just clear thinking and production-grade delivery.
              </p>
              <p className="text-xl leading-relaxed text-graphite text-pretty">
                We are a small, senior team. Every project gets our best thinking, not a junior
                hand-off. We work with a focused number of clients so each one gets full attention
                from the people who actually build their product.
              </p>
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
                {[
                  { label: 'Strategy', desc: 'Problem-first always' },
                  { label: 'Design', desc: 'Intent & clarity' },
                  { label: 'Engineering', desc: 'Production-grade' },
                  { label: 'AI', desc: 'Real workflow integration' },
                  { label: 'Automation', desc: 'n8n & beyond' },
                  { label: 'Support', desc: 'Post-launch partnership' },
                ].map((c) => (
                  <div
                    key={c.label}
                    className="border-2 border-line bg-pearl p-3 transition-colors hover:border-forest"
                  >
                    <p className="font-mono text-xs uppercase tracking-widest text-charcoal">{c.label}</p>
                    <p className="mt-0.5 font-mono text-[9px] text-graphite">{c.desc}</p>
                  </div>
                ))}
              </div>
              <Link
                href="/about"
                className="group inline-flex w-fit items-center gap-2 border-b-2 border-forest pb-0.5 font-mono text-xs uppercase tracking-widest text-charcoal"
              >
                Our story, team &amp; process
                <ArrowUpRight className="size-3.5 text-forest transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </ScrollReveal>
          </div>
        </Container>
      </Section>

      {/* Insights teaser */}
      <Section className="border-t-2 border-charcoal bg-stone/30">
        <Container>
          <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <Eyebrow>Insights</Eyebrow>
              <ScrollReveal>
                <h2 className="mt-5 max-w-2xl font-display text-2xl font-semibold leading-snug tracking-wide text-charcoal md:text-4xl">
                  THINKING OUT IN THE OPEN.
                </h2>
              </ScrollReveal>
            </div>
            <MagneticButton href="/insights" variant="secondary" arrow="up-right">
              All articles
            </MagneticButton>
          </div>

          <Stagger className="grid gap-4 md:grid-cols-3">
            {INSIGHTS.slice(0, 3).map((article) => (
              <StaggerItem key={article.slug}>
                <Link
                  href={`/insights/${article.slug}`}
                  className="group flex h-full flex-col justify-between border-2 border-line bg-pearl p-6 transition-all hover:border-charcoal hover:shadow-[4px_4px_0_0_var(--charcoal)]"
                >
                  <div>
                    <div className="flex items-center gap-2 mb-4">
                      <span className="border border-line bg-stone px-3 py-1 font-mono text-[9px] uppercase tracking-widest text-charcoal/70">
                        {article.category}
                      </span>
                      <span className="font-mono text-[9px] text-graphite/60">{article.readTime} read</span>
                    </div>
                    <h3 className="font-display text-xs font-semibold leading-snug tracking-wide text-charcoal transition-colors group-hover:text-forest">
                      {article.title}
                    </h3>
                    <p className="mt-3 text-lg leading-relaxed text-graphite line-clamp-3 text-pretty">
                      {article.excerpt}
                    </p>
                  </div>
                  <div className="mt-5 flex items-center justify-between border-t-2 border-line pt-3">
                    <span className="font-mono text-[9px] text-graphite">{article.date}</span>
                    <ArrowUpRight className="size-4 text-graphite/30 transition-all group-hover:text-forest" />
                  </div>
                </Link>
              </StaggerItem>
            ))}
          </Stagger>
        </Container>
      </Section>

      <CTASection />
    </>
  )
}
