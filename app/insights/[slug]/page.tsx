import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { ArrowLeft, ArrowUpRight, Clock, Calendar, Tag } from 'lucide-react'
import { CTASection } from '@/components/cta-section'
import { NewsletterForm } from '@/components/newsletter-form'
import { Container, Section } from '@/components/section'
import { ScrollReveal, Stagger, StaggerItem } from '@/components/reveal'
import { INSIGHTS, type InsightSection } from '@/lib/site'

type Props = { params: Promise<{ slug: string }> }

export async function generateStaticParams() {
  return INSIGHTS.map((a) => ({ slug: a.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const article = INSIGHTS.find((a) => a.slug === slug)
  if (!article) return { title: 'Not Found' }
  return {
    title: article.title,
    description: article.excerpt,
  }
}

const CATEGORY_COLOR: Record<string, string> = {
  AI: 'bg-violet-50 text-violet-700 border-violet-100',
  Automation: 'bg-amber-50 text-amber-700 border-amber-100',
  'Web Development': 'bg-sky-50 text-sky-700 border-sky-100',
  SaaS: 'bg-emerald-50 text-emerald-700 border-emerald-100',
  Technology: 'bg-stone/60 text-charcoal/70 border-line',
  Business: 'bg-rose-50 text-rose-700 border-rose-100',
}

function BodyBlock({ block }: { block: InsightSection }) {
  switch (block.type) {
    case 'heading':
      return (
        <h2 className="mt-12 mb-4 font-display text-2xl font-semibold leading-tight tracking-tight text-charcoal md:text-3xl first:mt-0">
          {block.content}
        </h2>
      )
    case 'paragraph':
      return (
        <p className="mb-6 text-base leading-[1.85] text-charcoal/80 text-pretty">
          {block.content}
        </p>
      )
    case 'callout':
      return (
        <div className="my-8 overflow-hidden rounded-2xl border border-forest/20 bg-forest/5">
          {block.label && (
            <div className="border-b border-forest/15 bg-forest/10 px-6 py-2.5">
              <span className="font-mono text-[10px] uppercase tracking-widest text-forest">
                {block.label}
              </span>
            </div>
          )}
          <p className="px-6 py-5 text-base leading-relaxed text-charcoal/80 text-pretty">
            {block.content}
          </p>
        </div>
      )
    case 'list':
      return (
        <div className="my-6">
          {block.content && (
            <p className="mb-4 text-base leading-[1.85] text-charcoal/80">{block.content}</p>
          )}
          <ul className="flex flex-col gap-3 rounded-2xl border border-line bg-pearl p-6">
            {block.items?.map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-sm leading-relaxed text-charcoal/80">
                <span className="mt-2 size-1.5 shrink-0 rounded-full bg-forest" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      )
    case 'code':
      return (
        <div className="my-8 overflow-hidden rounded-2xl border border-line">
          {block.label && (
            <div className="border-b border-line bg-stone px-5 py-2.5">
              <span className="font-mono text-[10px] uppercase tracking-widest text-graphite">
                {block.label}
              </span>
            </div>
          )}
          <pre className="overflow-x-auto bg-charcoal p-6 text-sm leading-relaxed text-pearl/80">
            <code>{block.content}</code>
          </pre>
        </div>
      )
    default:
      return null
  }
}

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params
  const article = INSIGHTS.find((a) => a.slug === slug)
  if (!article) notFound()

  const articleIndex = INSIGHTS.findIndex((a) => a.slug === slug)
  const prevArticle = articleIndex > 0 ? INSIGHTS[articleIndex - 1] : null
  const nextArticle = articleIndex < INSIGHTS.length - 1 ? INSIGHTS[articleIndex + 1] : null
  const related = INSIGHTS.filter(
    (a) => a.slug !== slug && a.category === article.category,
  ).slice(0, 2)
  const otherRelated = related.length < 2
    ? INSIGHTS.filter((a) => a.slug !== slug && !related.includes(a)).slice(0, 2 - related.length)
    : []
  const relatedArticles = [...related, ...otherRelated].slice(0, 3)

  return (
    <>
      {/* Article header */}
      <div className="relative overflow-hidden pt-36 pb-0 md:pt-44">
        {/* Background grid */}
        <div className="bg-grid pointer-events-none absolute inset-0 opacity-40" />
        <Container className="relative">
          {/* Breadcrumb */}
          <ScrollReveal>
            <Link
              href="/insights"
              className="group mb-10 inline-flex items-center gap-2 rounded-full border border-line bg-pearl/80 px-4 py-2 text-sm text-charcoal backdrop-blur transition-colors hover:bg-pearl"
            >
              <ArrowLeft className="size-3.5 transition-transform group-hover:-translate-x-0.5" />
              All Insights
            </Link>
          </ScrollReveal>

          {/* Meta */}
          <ScrollReveal delay={0.05}>
            <div className="flex flex-wrap items-center gap-3">
              <span className={`rounded-full border px-3 py-1 font-mono text-[10px] uppercase tracking-wider ${CATEGORY_COLOR[article.category] ?? 'bg-stone/60 text-charcoal/70 border-line'}`}>
                {article.category}
              </span>
              <span className="flex items-center gap-1.5 font-mono text-xs text-graphite">
                <Calendar className="size-3" /> {article.date}
              </span>
              <span className="flex items-center gap-1.5 font-mono text-xs text-graphite">
                <Clock className="size-3" /> {article.readTime} read
              </span>
            </div>
          </ScrollReveal>

          {/* Title */}
          <div className="mt-6 max-w-4xl">
            <h1 className="font-display text-4xl font-semibold leading-[1.05] tracking-tight text-charcoal md:text-5xl lg:text-6xl">
              {article.title}
            </h1>
          </div>

          {/* Excerpt */}
          <ScrollReveal delay={0.12}>
            <p className="mt-6 max-w-2xl text-xl leading-relaxed text-graphite text-pretty">
              {article.excerpt}
            </p>
          </ScrollReveal>

          {/* Tags */}
          {article.tags && (
            <ScrollReveal delay={0.16}>
              <div className="mt-6 flex flex-wrap items-center gap-2">
                <Tag className="size-3.5 text-graphite/50" />
                {article.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-line bg-stone/60 px-3 py-1 font-mono text-[10px] uppercase tracking-widest text-graphite"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </ScrollReveal>
          )}

          {/* Divider */}
          <div className="mt-14 h-px w-full bg-line" />
        </Container>
      </div>

      {/* Main content + sidebar */}
      <Section>
        <Container>
          <div className="grid gap-16 lg:grid-cols-[1fr_320px] lg:gap-20 xl:grid-cols-[1fr_360px]">

            {/* ── Article body ── */}
            <article>
              {article.body.map((block, i) => (
                <BodyBlock key={i} block={block} />
              ))}

              {/* Bottom nav */}
              <div className="mt-16 flex flex-col gap-4 border-t border-line pt-8 sm:flex-row sm:justify-between">
                {prevArticle ? (
                  <Link
                    href={`/insights/${prevArticle.slug}`}
                    className="group flex items-center gap-3 text-sm text-charcoal"
                  >
                    <ArrowLeft className="size-4 shrink-0 text-graphite/50 transition-transform group-hover:-translate-x-0.5" />
                    <div>
                      <p className="font-mono text-[10px] uppercase tracking-widest text-graphite">Previous</p>
                      <p className="mt-0.5 font-medium group-hover:text-forest transition-colors line-clamp-1">
                        {prevArticle.title}
                      </p>
                    </div>
                  </Link>
                ) : <div />}
                {nextArticle ? (
                  <Link
                    href={`/insights/${nextArticle.slug}`}
                    className="group flex items-center gap-3 text-right text-sm text-charcoal sm:flex-row-reverse"
                  >
                    <ArrowUpRight className="size-4 shrink-0 text-graphite/50 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    <div>
                      <p className="font-mono text-[10px] uppercase tracking-widest text-graphite">Next</p>
                      <p className="mt-0.5 font-medium group-hover:text-forest transition-colors line-clamp-1">
                        {nextArticle.title}
                      </p>
                    </div>
                  </Link>
                ) : <div />}
              </div>
            </article>

            {/* ── Sidebar ── */}
            <aside className="flex flex-col gap-8">

              {/* Key takeaways */}
              {article.keyTakeaways && (
                <ScrollReveal>
                  <div className="sticky top-28 flex flex-col gap-8">
                    <div className="rounded-2xl border border-line bg-pearl p-6">
                      <p className="mb-4 font-mono text-[10px] uppercase tracking-widest text-graphite">
                        Key takeaways
                      </p>
                      <ul className="flex flex-col gap-3">
                        {article.keyTakeaways.map((t, i) => (
                          <li key={i} className="flex items-start gap-3 text-sm leading-relaxed text-charcoal">
                            <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-forest" />
                            {t}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Share strip */}
                    <div className="rounded-2xl border border-line bg-stone/40 p-6">
                      <p className="mb-3 font-mono text-[10px] uppercase tracking-widest text-graphite">
                        Share this article
                      </p>
                      <div className="flex flex-col gap-2">
                        {[
                          {
                            label: 'Copy link',
                            href: '#',
                          },
                          {
                            label: 'Share on LinkedIn',
                            href: `https://www.linkedin.com/sharing/share-offsite/?url=https://solvixcore.com/insights/${article.slug}`,
                          },
                          {
                            label: 'Share on X',
                            href: `https://x.com/intent/tweet?text=${encodeURIComponent(article.title)}&url=${encodeURIComponent(`https://solvixcore.com/insights/${article.slug}`)}`,
                          },
                        ].map((s) => (
                          <a
                            key={s.label}
                            href={s.href}
                            target={s.href === '#' ? undefined : '_blank'}
                            rel="noopener noreferrer"
                            className="flex items-center justify-between rounded-xl border border-line bg-pearl px-4 py-2.5 text-sm text-charcoal transition-colors hover:bg-background"
                          >
                            {s.label}
                            <ArrowUpRight className="size-3.5 text-graphite/40" />
                          </a>
                        ))}
                      </div>
                    </div>

                    {/* Reading progress chip */}
                    <div className="rounded-2xl border border-line bg-pearl p-5 text-center">
                      <p className="font-mono text-[10px] uppercase tracking-widest text-graphite">
                        Reading time
                      </p>
                      <p className="mt-2 font-display text-3xl font-semibold text-charcoal">
                        {article.readTime}
                      </p>
                      <p className="mt-1 text-xs text-graphite">
                        {article.body.filter((b) => b.type === 'paragraph').length} sections
                      </p>
                    </div>
                  </div>
                </ScrollReveal>
              )}
            </aside>
          </div>
        </Container>
      </Section>

      {/* Related articles */}
      {relatedArticles.length > 0 && (
        <Section className="border-t border-line bg-stone/30">
          <Container>
            <div className="mb-10 flex items-end justify-between gap-4">
              <div>
                <span className="font-mono text-[10px] uppercase tracking-widest text-graphite">
                  More reading
                </span>
                <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-charcoal md:text-4xl">
                  Related Articles
                </h2>
              </div>
              <Link
                href="/insights"
                className="hidden shrink-0 items-center gap-1.5 text-sm font-medium text-charcoal hover:text-forest transition-colors sm:flex"
              >
                All insights <ArrowUpRight className="size-4" />
              </Link>
            </div>

            <Stagger className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {relatedArticles.map((rel) => (
                <StaggerItem key={rel.slug}>
                  <Link
                    href={`/insights/${rel.slug}`}
                    className="group flex h-full flex-col justify-between rounded-2xl border border-line bg-pearl p-6 transition-colors hover:bg-background"
                  >
                    <div>
                      <div className="mb-3 flex flex-wrap items-center gap-2">
                        <span className={`rounded-full border px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-wider ${CATEGORY_COLOR[rel.category] ?? 'bg-stone/60 text-charcoal/70 border-line'}`}>
                          {rel.category}
                        </span>
                        <span className="font-mono text-[10px] text-graphite">{rel.readTime} read</span>
                      </div>
                      <h3 className="font-display text-lg font-semibold leading-tight tracking-tight text-charcoal transition-colors group-hover:text-forest">
                        {rel.title}
                      </h3>
                      <p className="mt-2.5 text-sm leading-relaxed text-graphite line-clamp-2 text-pretty">
                        {rel.excerpt}
                      </p>
                    </div>
                    <div className="mt-5 flex items-center justify-between">
                      <span className="font-mono text-xs text-graphite">{rel.date}</span>
                      <ArrowUpRight className="size-4 text-graphite/30 transition-all group-hover:text-forest group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </div>
                  </Link>
                </StaggerItem>
              ))}
            </Stagger>
          </Container>
        </Section>
      )}

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
