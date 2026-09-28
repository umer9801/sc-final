import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowUpRight, ArrowLeft, CheckCircle, ChevronDown } from 'lucide-react'
import { CTASection } from '@/components/cta-section'
import { Container, Section, Eyebrow } from '@/components/section'
import { ScrollReveal, Stagger, StaggerItem } from '@/components/reveal'
import { MagneticButton } from '@/components/magnetic-button'
import { SERVICES } from '@/lib/site'

type Props = { params: Promise<{ slug: string }> }

export async function generateStaticParams() {
  return SERVICES.map((s) => ({ slug: s.id }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const service = SERVICES.find((s) => s.id === slug)
  if (!service) return { title: 'Not Found' }
  return {
    title: service.title,
    description: service.description,
  }
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params
  const service = SERVICES.find((s) => s.id === slug)
  if (!service) notFound()

  const currentIndex = SERVICES.findIndex((s) => s.id === slug)
  const prev = currentIndex > 0 ? SERVICES[currentIndex - 1] : null
  const next = currentIndex < SERVICES.length - 1 ? SERVICES[currentIndex + 1] : null

  return (
    <>
      {/* ── Hero ── */}
      <div className="relative overflow-hidden pt-36 pb-0 md:pt-44">
        <div className="pointer-events-none absolute inset-0 bg-grid opacity-60" />
        <div className="scanlines pointer-events-none absolute inset-0" />
        <Container className="relative">
          {/* back link */}
          <ScrollReveal>
            <Link
              href="/services"
              className="group mb-10 inline-flex items-center gap-2 border-2 border-line bg-pearl px-4 py-2 font-mono text-xs uppercase tracking-widest text-charcoal transition-colors hover:border-charcoal"
            >
              <ArrowLeft className="size-3.5 transition-transform group-hover:-translate-x-0.5" />
              All Services
            </Link>
          </ScrollReveal>

          {/* eyebrow */}
          <ScrollReveal delay={0.05}>
            <div className="mb-4 inline-flex items-center gap-3 border-2 border-line bg-stone px-3 py-2">
              <span className="font-mono text-[9px] uppercase tracking-widest text-forest">
                [ {service.no} / SERVICE ]
              </span>
            </div>
          </ScrollReveal>

          {/* headline */}
          <ScrollReveal delay={0.1}>
            <h1 className="font-display text-3xl font-semibold leading-snug tracking-wide text-charcoal md:text-5xl lg:text-6xl">
              {service.title}
            </h1>
          </ScrollReveal>

          {service.tagline && (
            <ScrollReveal delay={0.18}>
              <p className="mt-4 border-l-4 border-forest pl-4 font-mono text-sm uppercase tracking-widest text-forest">
                {service.tagline}
              </p>
            </ScrollReveal>
          )}

          {/* capability + stack pills */}
          <ScrollReveal delay={0.22}>
            <div className="mt-8 flex flex-wrap gap-2">
              {service.capabilities.map((c) => (
                <span key={c} className="border-2 border-charcoal bg-charcoal px-3 py-1 font-mono text-[9px] uppercase tracking-widest text-pearl">
                  {c}
                </span>
              ))}
              {service.stack.map((t) => (
                <span key={t} className="border-2 border-line bg-pearl px-3 py-1 font-mono text-[9px] uppercase tracking-widest text-graphite">
                  {t}
                </span>
              ))}
            </div>
          </ScrollReveal>

          <div className="mt-10 h-0.5 w-full bg-line" />
        </Container>
      </div>

      {/* ── Portrait image + description (web & automation only) ── */}
      {service.image ? (
        <Section>
          <Container>
            <div className="grid gap-12 lg:grid-cols-[420px_1fr] lg:gap-16 xl:grid-cols-[480px_1fr]">
              {/* portrait image */}
              <ScrollReveal>
                <div className="relative border-2 border-charcoal shadow-[8px_8px_0_0_var(--charcoal)]">
                  <div className="relative aspect-[3/4] w-full overflow-hidden">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 480px"
                      priority
                    />
                  </div>
                  {/* pixel overlay label */}
                  <div className="absolute bottom-0 left-0 right-0 border-t-2 border-charcoal bg-charcoal px-4 py-2">
                    <span className="font-mono text-[9px] uppercase tracking-widest text-pearl/70">
                      {service.no} — {service.title}
                    </span>
                  </div>
                </div>
              </ScrollReveal>

              {/* description text */}
              <ScrollReveal delay={0.1} className="flex flex-col justify-center gap-8">
                <div>
                  <Eyebrow>Overview</Eyebrow>
                  <h2 className="mt-5 font-display text-xl font-semibold leading-snug tracking-wide text-charcoal md:text-3xl">
                    WHAT WE DO.
                  </h2>
                </div>
                <p className="text-xl leading-relaxed text-graphite text-pretty">
                  {service.longDescription ?? service.description}
                </p>
                {service.results && (
                  <div className="grid grid-cols-3 gap-3 border-t-2 border-line pt-6">
                    {service.results.map((r) => (
                      <div key={r.label} className="border-2 border-charcoal bg-pearl px-4 py-4 shadow-[3px_3px_0_0_var(--charcoal)]">
                        <p className="font-display text-xl font-semibold text-forest md:text-2xl">{r.value}</p>
                        <p className="mt-1 font-mono text-[9px] uppercase tracking-widest text-graphite">{r.label}</p>
                      </div>
                    ))}
                  </div>
                )}
                <MagneticButton href="/contact" arrow="right">
                  Start a {service.short} Project
                </MagneticButton>
              </ScrollReveal>
            </div>
          </Container>
        </Section>
      ) : service.video ? (
        /* ── Video + description (mobile) ── */
        <Section>
          <Container>
            <div className="grid gap-12 lg:grid-cols-[420px_1fr] lg:gap-16 xl:grid-cols-[480px_1fr]">
              {/* video */}
              <ScrollReveal>
                <div className="relative border-2 border-charcoal shadow-[8px_8px_0_0_var(--charcoal)]">
                  <div className="relative aspect-[3/4] w-full overflow-hidden bg-charcoal">
                    <video
                      src={service.video}
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="h-full w-full object-cover"
                    />
                  </div>
                  {/* pixel overlay label */}
                  <div className="absolute bottom-0 left-0 right-0 border-t-2 border-charcoal bg-charcoal px-4 py-2">
                    <span className="font-mono text-[9px] uppercase tracking-widest text-pearl/70">
                      {service.no} — {service.title}
                    </span>
                  </div>
                </div>
              </ScrollReveal>

              {/* description text */}
              <ScrollReveal delay={0.1} className="flex flex-col justify-center gap-8">
                <div>
                  <Eyebrow>Overview</Eyebrow>
                  <h2 className="mt-5 font-display text-xl font-semibold leading-snug tracking-wide text-charcoal md:text-3xl">
                    WHAT WE DO.
                  </h2>
                </div>
                <p className="text-xl leading-relaxed text-graphite text-pretty">
                  {service.longDescription ?? service.description}
                </p>
                {service.results && (
                  <div className="grid grid-cols-3 gap-3 border-t-2 border-line pt-6">
                    {service.results.map((r) => (
                      <div key={r.label} className="border-2 border-charcoal bg-pearl px-4 py-4 shadow-[3px_3px_0_0_var(--charcoal)]">
                        <p className="font-display text-xl font-semibold text-forest md:text-2xl">{r.value}</p>
                        <p className="mt-1 font-mono text-[9px] uppercase tracking-widest text-graphite">{r.label}</p>
                      </div>
                    ))}
                  </div>
                )}
                <MagneticButton href="/contact" arrow="right">
                  Start a {service.short} Project
                </MagneticButton>
              </ScrollReveal>
            </div>
          </Container>
        </Section>
      ) : (
        /* ── No image — description only ── */
        <Section>
          <Container>
            <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
              <div>
                <Eyebrow>Overview</Eyebrow>
                <ScrollReveal>
                  <h2 className="mt-5 font-display text-xl font-semibold leading-snug tracking-wide text-charcoal md:text-3xl">
                    WHAT WE DO.
                  </h2>
                </ScrollReveal>
              </div>
              <ScrollReveal delay={0.1} className="flex flex-col gap-8">
                <p className="text-xl leading-relaxed text-graphite text-pretty">
                  {service.longDescription ?? service.description}
                </p>
                {service.results && (
                  <div className="grid grid-cols-3 gap-3 border-t-2 border-line pt-6">
                    {service.results.map((r) => (
                      <div key={r.label} className="border-2 border-charcoal bg-pearl px-4 py-4 shadow-[3px_3px_0_0_var(--charcoal)]">
                        <p className="font-display text-xl font-semibold text-forest md:text-2xl">{r.value}</p>
                        <p className="mt-1 font-mono text-[9px] uppercase tracking-widest text-graphite">{r.label}</p>
                      </div>
                    ))}
                  </div>
                )}
                <MagneticButton href="/contact" arrow="right">
                  Start a {service.short} Project
                </MagneticButton>
              </ScrollReveal>
            </div>
          </Container>
        </Section>
      )}

      {/* ── Features ── */}
      {service.features && service.features.length > 0 && (
        <Section className="border-t-2 border-charcoal bg-stone/30">
          <Container>
            <div className="mb-14">
              <Eyebrow>What&apos;s Included</Eyebrow>
              <ScrollReveal>
                <h2 className="mt-5 font-display text-xl font-semibold leading-snug tracking-wide text-charcoal md:text-3xl">
                  EVERYTHING IN THE ENGAGEMENT.
                </h2>
              </ScrollReveal>
            </div>
            <Stagger className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {service.features.map((f, i) => (
                <StaggerItem key={f.title}>
                  <div className="flex h-full flex-col gap-4 border-2 border-charcoal bg-pearl p-6 shadow-[4px_4px_0_0_var(--charcoal)] transition-all hover:shadow-[2px_2px_0_0_var(--charcoal)] hover:translate-x-[2px] hover:translate-y-[2px]">
                    <div className="flex items-center gap-3">
                      <CheckCircle className="size-4 shrink-0 text-forest" />
                      <h3 className="font-display text-xs font-semibold leading-snug tracking-wide text-charcoal">
                        {f.title}
                      </h3>
                    </div>
                    <p className="text-xl leading-relaxed text-graphite">{f.body}</p>
                    <span className="mt-auto font-mono text-[9px] text-graphite/40">
                      [ {String(i + 1).padStart(2, '0')} ]
                    </span>
                  </div>
                </StaggerItem>
              ))}
            </Stagger>
          </Container>
        </Section>
      )}

      {/* ── Process ── */}
      {service.process && service.process.length > 0 && (
        <Section className="border-t-2 border-charcoal">
          <Container>
            <div className="mb-14 max-w-xl">
              <Eyebrow>How We Work</Eyebrow>
              <ScrollReveal>
                <h2 className="mt-5 font-display text-xl font-semibold leading-snug tracking-wide text-charcoal md:text-3xl">
                  THE PROCESS.
                </h2>
              </ScrollReveal>
            </div>
            <div className="flex flex-col gap-0 border-2 border-charcoal">
              {service.process.map((step, i) => (
                <ScrollReveal key={step.no} delay={i * 0.06}>
                  <div className={`grid grid-cols-[3rem_1fr] gap-6 p-6 transition-colors hover:bg-stone md:grid-cols-[4rem_1fr_2fr] ${i < (service.process?.length ?? 0) - 1 ? 'border-b-2 border-charcoal' : ''}`}>
                    <div className="flex items-start">
                      <span className="flex size-10 items-center justify-center border-2 border-charcoal bg-pearl font-mono text-xs text-forest shadow-[2px_2px_0_0_var(--charcoal)]">
                        {step.no}
                      </span>
                    </div>
                    <div className="flex flex-col gap-1 md:justify-center">
                      <h3 className="font-display text-xs font-semibold leading-snug tracking-wide text-charcoal">
                        {step.title}
                      </h3>
                    </div>
                    <p className="col-span-2 text-xl leading-relaxed text-graphite md:col-span-1 md:flex md:items-center">
                      {step.body}
                    </p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </Container>
        </Section>
      )}

      {/* ── FAQ ── */}
      {service.faqs && service.faqs.length > 0 && (
        <Section className="border-t-2 border-charcoal bg-stone/30">
          <Container>
            <div className="grid gap-16 lg:grid-cols-[1fr_2fr] lg:gap-20">
              <div>
                <Eyebrow>FAQ</Eyebrow>
                <ScrollReveal>
                  <h2 className="mt-5 font-display text-xl font-semibold leading-snug tracking-wide text-charcoal md:text-3xl">
                    COMMON QUESTIONS.
                  </h2>
                </ScrollReveal>
                <ScrollReveal delay={0.1}>
                  <p className="mt-4 text-xl text-graphite">
                    More questions?{' '}
                    <a href="mailto:hello@solvixcore.com" className="border-b-2 border-forest text-forest">
                      Email us.
                    </a>
                  </p>
                </ScrollReveal>
              </div>
              <Stagger className="divide-y-2 divide-line border-2 border-charcoal bg-pearl" delay={0.05}>
                {service.faqs.map((faq) => (
                  <StaggerItem key={faq.q}>
                    <details className="group">
                      <summary className="flex cursor-pointer items-start justify-between gap-4 px-6 py-5 marker:content-none">
                        <h3 className="font-display text-xs font-semibold leading-snug tracking-wide text-charcoal">
                          {faq.q}
                        </h3>
                        <ChevronDown className="mt-0.5 size-4 shrink-0 text-graphite transition-transform group-open:rotate-180" />
                      </summary>
                      <p className="border-t-2 border-line px-6 pb-5 pt-4 text-xl leading-relaxed text-graphite">
                        {faq.a}
                      </p>
                    </details>
                  </StaggerItem>
                ))}
              </Stagger>
            </div>
          </Container>
        </Section>
      )}

      {/* ── Other services ── */}
      <Section className="border-t-2 border-charcoal">
        <Container>
          <div className="mb-10 flex items-end justify-between gap-4">
            <div>
              <Eyebrow>Other Services</Eyebrow>
              <ScrollReveal>
                <h2 className="mt-4 font-display text-xl font-semibold leading-snug tracking-wide text-charcoal">
                  EXPLORE MORE.
                </h2>
              </ScrollReveal>
            </div>
            <Link
              href="/services"
              className="hidden shrink-0 items-center gap-1.5 border-b-2 border-forest pb-0.5 font-mono text-xs uppercase tracking-widest text-charcoal hover:text-forest transition-colors sm:flex"
            >
              All services <ArrowUpRight className="size-3.5" />
            </Link>
          </div>
          <Stagger className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.filter((s) => s.id !== slug)
              .slice(0, 3)
              .map((s) => (
                <StaggerItem key={s.id}>
                  <Link
                    href={`/services/${s.id}`}
                    className="group flex h-full flex-col justify-between border-2 border-line bg-pearl p-6 transition-all hover:border-charcoal hover:shadow-[4px_4px_0_0_var(--charcoal)]"
                  >
                    <div>
                      <span className="font-mono text-[9px] text-forest">[ {s.no} ]</span>
                      <h3 className="mt-2 font-display text-xs font-semibold leading-snug tracking-wide text-charcoal">
                        {s.title}
                      </h3>
                      <p className="mt-3 text-xl leading-relaxed text-graphite line-clamp-2">
                        {s.description}
                      </p>
                    </div>
                    <div className="mt-5 flex items-center justify-between border-t-2 border-line pt-4">
                      <div className="flex flex-wrap gap-1">
                        {s.stack.slice(0, 2).map((t) => (
                          <span key={t} className="border border-line px-2 py-0.5 font-mono text-[8px] uppercase tracking-widest text-graphite">
                            {t}
                          </span>
                        ))}
                      </div>
                      <ArrowUpRight className="size-4 text-graphite/30 transition-all group-hover:text-forest" />
                    </div>
                  </Link>
                </StaggerItem>
              ))}
          </Stagger>

          {/* prev / next nav */}
          <div className="mt-10 flex flex-col gap-4 border-t-2 border-line pt-8 sm:flex-row sm:justify-between">
            {prev ? (
              <Link href={`/services/${prev.id}`} className="group flex items-center gap-3 font-mono text-xs uppercase tracking-widest text-charcoal hover:text-forest transition-colors">
                <ArrowLeft className="size-3.5 transition-transform group-hover:-translate-x-0.5" />
                <span>{prev.title}</span>
              </Link>
            ) : <div />}
            {next ? (
              <Link href={`/services/${next.id}`} className="group flex items-center gap-3 font-mono text-xs uppercase tracking-widest text-charcoal hover:text-forest transition-colors sm:flex-row-reverse">
                <ArrowUpRight className="size-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                <span>{next.title}</span>
              </Link>
            ) : <div />}
          </div>
        </Container>
      </Section>

      <CTASection />
    </>
  )
}
