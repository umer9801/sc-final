import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowUpRight, BookOpen, Clock, Tag } from 'lucide-react'
import { PageHero } from '@/components/page-hero'
import { CTASection } from '@/components/cta-section'
import { NewsletterForm } from '@/components/newsletter-form'
import { Container, Section, Eyebrow } from '@/components/section'
import { AnimatedText, ScrollReveal, Stagger, StaggerItem } from '@/components/reveal'
import { INSIGHTS, INSIGHT_CATEGORIES } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Insights',
  description:
    'Thinking on AI, automation, web development, SaaS and technology from the Solvix Core team.',
}

const CATEGORY_DESC: Record<string, string> = {
  AI: 'Agents, models, RAG pipelines and what actually works in production.',
  Automation: 'n8n, workflows, integrations and removing manual work at scale.',
  'Web Development': 'Performance, Core Web Vitals, design systems and modern web craft.',
  SaaS: 'Multi-tenancy, data models, billing and building products that scale.',
  Technology: 'Infrastructure choices, trade-offs and engineering decisions that matter.',
  Business: 'Strategy, ROI, and the business case for building (or not building) technology.',
}

const CATEGORY_COLOR: Record<string, string> = {
  AI: 'bg-violet-50 text-violet-700 border-violet-100',
  Automation: 'bg-amber-50 text-amber-700 border-amber-100',
  'Web Development': 'bg-sky-50 text-sky-700 border-sky-100',
  SaaS: 'bg-emerald-50 text-emerald-700 border-emerald-100',
  Technology: 'bg-stone/60 text-charcoal/70 border-line',
  Business: 'bg-rose-50 text-rose-700 border-rose-100',
}

export default function InsightsPage() {
  const [featured, second, ...rest] = INSIGHTS
  const totalMinutes = INSIGHTS.reduce((acc, a) => acc + parseInt(a.readTime), 0)

  return (
    <>
      <PageHero
        eyebrow="Insights / Writing"
        lines={[{ text: 'THINKING OUT' }, { text: 'IN THE OPEN.', highlight: true }]}
        intro="Honest takes on AI, automation, SaaS and the craft of building technology that actually works. No buzzwords, no fluff — just what we have learned shipping real systems."
        index={`${INSIGHTS.length} ARTICLES`}
      />

      {/* Stats strip */}
      <div className="border-y border-line bg-pearl/60">
        <Container>
          <div className="grid grid-cols-3 divide-x divide-line">
            <div className="flex items-center gap-3 px-6 py-5">
              <BookOpen className="size-4 shrink-0 text-forest" />
              <div>
                <p className="font-display text-xl font-semibold text-charcoal">{INSIGHTS.length}</p>
                <p className="font-mono text-[10px] uppercase tracking-widest text-graphite">Articles</p>
              </div>
            </div>
            <div className="flex items-center gap-3 px-6 py-5">
              <Clock className="size-4 shrink-0 text-forest" />
              <div>
                <p className="font-display text-xl font-semibold text-charcoal">{totalMinutes} min</p>
                <p className="font-mono text-[10px] uppercase tracking-widest text-graphite">Total reading</p>
              </div>
            </div>
            <div className="flex items-center gap-3 px-6 py-5">
              <Tag className="size-4 shrink-0 text-forest" />
              <div>
                <p className="font-display text-xl font-semibold text-charcoal">{INSIGHT_CATEGORIES.length}</p>
                <p className="font-mono text-[10px] uppercase tracking-widest text-graphite">Topic areas</p>
              </div>
            </div>
          </div>
        </Container>
      </div>

      {/* Category filter */}
      <div className="border-b border-line">
        <Container>
          <div className="flex flex-wrap gap-2 py-4">
            <span className="rounded-full border border-forest bg-forest/10 px-4 py-1.5 text-sm font-medium text-forest">
              All
            </span>
            {INSIGHT_CATEGORIES.map((cat) => (
              <span
                key={cat}
                className="cursor-pointer rounded-full border border-line px-4 py-1.5 text-sm text-charcoal/70 transition-colors hover:border-charcoal/40 hover:text-charcoal"
              >
                {cat}
              </span>
            ))}
          </div>
        </Container>
      </div>

      {/* Featured — two-column hero cards */}
      <Section className="pb-0">
        <Container>
          <div className="mb-10">
            <Eyebrow>Featured</Eyebrow>
            <AnimatedText
              text="LATEST THINKING."
              className="mt-4 font-display text-4xl font-semibold leading-[0.98] tracking-tight text-charcoal md:text-5xl"
            />
          </div>

          <div className="grid gap-6 lg:grid-cols-[1.4fr_1fr]">
            {/* Primary featured */}
            <ScrollReveal>
              <Link
                href={`/insights/${featured.slug}`}
                className="group flex h-full flex-col justify-between overflow-hidden rounded-[2rem] border border-line bg-pearl transition-colors hover:bg-background"
              >
                {/* Top colour band */}
                <div className="h-1.5 w-full bg-gradient-to-r from-forest/60 via-forest to-forest/40" />
                <div className="flex flex-1 flex-col justify-between p-8 md:p-10">
                  <div>
                    <div className="flex flex-wrap items-center gap-2">
                      <span className={`rounded-full border px-3 py-1 font-mono text-[10px] uppercase tracking-wider ${CATEGORY_COLOR[featured.category] ?? 'bg-stone/60 text-charcoal/70 border-line'}`}>
                        {featured.category}
                      </span>
                      <span className="font-mono text-xs text-graphite">{featured.date}</span>
                      <span className="font-mono text-xs text-graphite">{featured.readTime} read</span>
                    </div>
                    <h2 className="mt-5 font-display text-2xl font-semibold leading-tight tracking-tight text-charcoal md:text-3xl lg:text-4xl">
                      {featured.title}
                    </h2>
                    <p className="mt-4 text-base leading-relaxed text-graphite text-pretty">
                      {featured.excerpt}
                    </p>
                    {/* Key takeaways preview */}
                    {featured.keyTakeaways && (
                      <div className="mt-6 rounded-xl border border-line bg-stone/40 p-4">
                        <p className="mb-2 font-mono text-[10px] uppercase tracking-widest text-graphite">Key takeaways</p>
                        <ul className="flex flex-col gap-1.5">
                          {featured.keyTakeaways.slice(0, 3).map((t) => (
                            <li key={t} className="flex items-start gap-2 text-sm text-charcoal">
                              <span className="mt-1.5 size-1 shrink-0 rounded-full bg-forest" />
                              {t}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                  <div className="mt-8 flex items-center justify-between">
                    <span className="inline-flex items-center gap-2 text-sm font-medium text-charcoal">
                      Read article
                      <ArrowUpRight className="size-4 text-forest transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </span>
                    {featured.tags && (
                      <div className="hidden items-center gap-1.5 sm:flex">
                        {featured.tags.slice(0, 2).map((tag) => (
                          <span key={tag} className="rounded-full bg-stone px-2.5 py-1 font-mono text-[9px] uppercase tracking-widest text-graphite">
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </Link>
            </ScrollReveal>

            {/* Secondary featured */}
            <ScrollReveal delay={0.08}>
              <Link
                href={`/insights/${second.slug}`}
                className="group flex h-full flex-col justify-between overflow-hidden rounded-[2rem] border border-line bg-pearl transition-colors hover:bg-background"
              >
                <div className="h-1.5 w-full bg-gradient-to-r from-charcoal/40 via-charcoal/60 to-charcoal/30" />
                <div className="flex flex-1 flex-col justify-between p-8">
                  <div>
                    <div className="flex flex-wrap items-center gap-2">
                      <span className={`rounded-full border px-3 py-1 font-mono text-[10px] uppercase tracking-wider ${CATEGORY_COLOR[second.category] ?? 'bg-stone/60 text-charcoal/70 border-line'}`}>
                        {second.category}
                      </span>
                      <span className="font-mono text-xs text-graphite">{second.date}</span>
                      <span className="font-mono text-xs text-graphite">{second.readTime} read</span>
                    </div>
                    <h2 className="mt-5 font-display text-xl font-semibold leading-tight tracking-tight text-charcoal md:text-2xl">
                      {second.title}
                    </h2>
                    <p className="mt-3 text-sm leading-relaxed text-graphite text-pretty">
                      {second.excerpt}
                    </p>
                  </div>
                  <div className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-charcoal">
                    Read article
                    <ArrowUpRight className="size-4 text-forest transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                </div>
              </Link>
            </ScrollReveal>
          </div>
        </Container>
      </Section>

      {/* All articles list */}
      <Section>
        <Container>
          <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <Eyebrow>All Articles</Eyebrow>
              <AnimatedText
                text="EVERY PIECE WE HAVE WRITTEN."
                className="mt-4 font-display text-4xl font-semibold leading-[0.98] tracking-tight text-charcoal md:text-5xl"
              />
            </div>
            <ScrollReveal delay={0.15}>
              <p className="max-w-xs text-graphite">
                Sorted newest first. Avg. read: {Math.round(totalMinutes / INSIGHTS.length)} min.
              </p>
            </ScrollReveal>
          </div>

          <div className="divide-y divide-line">
            {/* First 2 already shown as featured, show all from rest */}
            {rest.map((article, i) => (
              <ScrollReveal key={article.slug} delay={i * 0.05}>
                <Link
                  href={`/insights/${article.slug}`}
                  className="group grid gap-4 py-8 transition-colors hover:bg-transparent md:grid-cols-[2rem_1fr_auto] md:items-start"
                >
                  <span className="hidden font-mono text-xs text-graphite/40 md:block pt-1">
                    {String(i + 3).padStart(2, '0')}
                  </span>
                  <div>
                    <div className="flex flex-wrap items-center gap-2">
                      <span className={`rounded-full border px-3 py-1 font-mono text-[10px] uppercase tracking-wider ${CATEGORY_COLOR[article.category] ?? 'bg-stone/60 text-charcoal/70 border-line'}`}>
                        {article.category}
                      </span>
                      <span className="font-mono text-xs text-graphite">{article.date}</span>
                      <span className="font-mono text-xs text-graphite">{article.readTime} read</span>
                    </div>
                    <h3 className="mt-2.5 font-display text-xl font-medium tracking-tight text-charcoal transition-colors group-hover:text-forest md:text-2xl">
                      {article.title}
                    </h3>
                    <p className="mt-1.5 max-w-2xl text-sm leading-relaxed text-graphite text-pretty">
                      {article.excerpt}
                    </p>
                    {article.tags && (
                      <div className="mt-3 flex flex-wrap gap-1.5">
                        {article.tags.map((tag) => (
                          <span key={tag} className="rounded-full bg-stone/60 px-2.5 py-0.5 font-mono text-[9px] uppercase tracking-widest text-graphite">
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                  <ArrowUpRight className="mt-1 size-5 shrink-0 text-graphite/30 transition-all group-hover:text-forest group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* Topic areas */}
      <Section className="border-t border-line bg-stone/30">
        <Container>
          <div className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <Eyebrow>Topic Areas</Eyebrow>
              <AnimatedText
                text="WHAT WE WRITE ABOUT."
                className="mt-4 font-display text-4xl font-semibold leading-[0.98] tracking-tight text-charcoal md:text-5xl"
              />
            </div>
          </div>
          <Stagger className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {INSIGHT_CATEGORIES.map((cat) => {
              const count = INSIGHTS.filter((a) => a.category === cat).length
              return (
                <StaggerItem key={cat}>
                  <div className="group h-full rounded-2xl border border-line bg-pearl p-6 transition-colors hover:bg-background">
                    <div className="mb-3 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="size-2 rounded-full bg-forest" />
                        <h3 className="font-display text-lg font-semibold text-charcoal">{cat}</h3>
                      </div>
                      <span className="font-mono text-xs text-forest">
                        {count} article{count !== 1 ? 's' : ''}
                      </span>
                    </div>
                    <p className="text-sm leading-relaxed text-graphite">
                      {CATEGORY_DESC[cat] ?? 'Practical writing on this topic from the team.'}
                    </p>
                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {INSIGHTS.filter((a) => a.category === cat).map((a) => (
                        <Link
                          key={a.slug}
                          href={`/insights/${a.slug}`}
                          className="rounded-full border border-line bg-stone/60 px-2.5 py-0.5 font-mono text-[9px] uppercase tracking-wider text-graphite transition-colors hover:border-forest/40 hover:text-forest"
                        >
                          {a.readTime}
                        </Link>
                      ))}
                    </div>
                  </div>
                </StaggerItem>
              )
            })}
          </Stagger>
        </Container>
      </Section>

      {/* Newsletter */}
      <Section className="border-t border-line">
        <Container>
          <NewsletterForm />
        </Container>
      </Section>

      <CTASection />
    </>
  )
}
