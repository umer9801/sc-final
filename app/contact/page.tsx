'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ArrowUpRight, Mail, MapPin, Clock, ExternalLink, CheckCircle, ChevronDown } from 'lucide-react'
import { PageHero } from '@/components/page-hero'
import { Container, Section, Eyebrow } from '@/components/section'
import { AnimatedText, ScrollReveal, Stagger, StaggerItem } from '@/components/reveal'
import { MagneticButton } from '@/components/magnetic-button'

const CONTACT_INFO = [
  {
    icon: Mail,
    label: 'Email',
    value: 'hello@solvixcore.com',
    href: 'mailto:hello@solvixcore.com',
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'Canada — remote-first',
    href: null,
  },
  {
    icon: Clock,
    label: 'Response time',
    value: 'Within 24 hours',
    href: null,
  },
]

const SOCIAL = [
  { icon: ExternalLink, label: 'GitHub', href: 'https://github.com' },
  { icon: ExternalLink, label: 'LinkedIn', href: 'https://linkedin.com' },
  { icon: ExternalLink, label: 'Twitter', href: 'https://twitter.com' },
]

const CHECKLIST = [
  'You have a real problem to solve (not just a spec to execute)',
  'You want a team that will push back when something is wrong',
  'You care about outcomes, not just deliverables',
  'You value clear communication over project management theatre',
  'You want to own everything — code, infra, data',
]

const PROJECT_TYPES = [
  'Web Development',
  'SaaS Product',
  'Mobile App',
  'AI System',
  'Automation',
  'E-commerce',
  'Custom Software',
  'Not sure yet',
]

const FAQ = [
  {
    q: 'How quickly can you start?',
    a: 'Once we have scoped the project and aligned on requirements, we typically kick off within 2 weeks. We keep a small pipeline so you are never waiting months.',
  },
  {
    q: 'Do you work with early-stage startups?',
    a: 'Yes — some of our best work has been helping founders go from idea to production-ready product. We adapt our process to your stage.',
  },
  {
    q: 'What does the engagement look like?',
    a: 'Discovery call → scoping & proposal → kick-off → weekly iterations with real demos → launch → optional retained support. No surprises.',
  },
  {
    q: 'Do we own the code?',
    a: 'Completely. Every credential, repo, doc and runbook is yours from day one. We hand over everything and make sure your team can run it without us.',
  },
  {
    q: 'How do you handle changes in scope?',
    a: 'Honestly and early. We flag scope changes as soon as we see them — with an impact estimate — before they become surprises on an invoice.',
  },
  {
    q: 'What is your minimum project size?',
    a: 'We do not take on projects under $10,000. Below that, the relationship usually does not have enough room for us to do our best work.',
  },
]

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false)
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  const [form, setForm] = useState({
    name: '',
    email: '',
    company: '',
    projectType: '',
    budget: '',
    message: '',
  })

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <>
      <PageHero
        eyebrow="Contact / Start a Project"
        lines={[{ text: "LET'S BUILD" }, { text: 'SOMETHING REAL.', highlight: true }]}
        intro="Tell us what you are trying to solve. We will get back to you within 24 hours with honest thoughts on how we can help — no pitch, no pressure."
      />

      {/* Main contact section */}
      <Section>
        <Container>
          <div className="grid gap-16 lg:grid-cols-[1fr_2fr] lg:gap-20">

            {/* ─── Left: info + checklist ─── */}
            <div className="flex flex-col gap-12">

              {/* Contact info */}
              <div>
                <Eyebrow>Get in touch</Eyebrow>
                <AnimatedText
                  text="WE ARE EASY TO REACH."
                  className="mt-5 font-display text-3xl font-semibold leading-[0.98] tracking-tight text-charcoal md:text-4xl"
                />
                <ScrollReveal delay={0.1}>
                  <p className="mt-4 text-graphite leading-relaxed">
                    We work with businesses at every stage — from pre-launch startups to established
                    companies running complex operations.
                  </p>
                </ScrollReveal>
                <div className="mt-8 flex flex-col gap-5">
                  {CONTACT_INFO.map((item, i) => (
                    <ScrollReveal key={item.label} delay={0.1 + i * 0.06}>
                      <div className="flex items-center gap-4">
                        <div className="flex size-10 shrink-0 items-center justify-center rounded-full border border-line bg-pearl">
                          <item.icon className="size-4 text-forest" />
                        </div>
                        <div>
                          <p className="font-mono text-[10px] uppercase tracking-widest text-graphite">
                            {item.label}
                          </p>
                          {item.href ? (
                            <a
                              href={item.href}
                              className="mt-0.5 inline-flex items-center gap-1 text-sm font-medium text-charcoal hover:text-forest transition-colors"
                            >
                              {item.value}
                              <ArrowUpRight className="size-3" />
                            </a>
                          ) : (
                            <p className="mt-0.5 text-sm font-medium text-charcoal">{item.value}</p>
                          )}
                        </div>
                      </div>
                    </ScrollReveal>
                  ))}
                </div>

                {/* Socials */}
                <ScrollReveal delay={0.3}>
                  <div className="mt-6 flex gap-3">
                    {SOCIAL.map((s) => (
                      <a
                        key={s.label}
                        href={s.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={s.label}
                        className="flex size-10 items-center justify-center rounded-full border border-line bg-pearl text-graphite transition-colors hover:border-forest/40 hover:text-forest"
                      >
                        <s.icon className="size-4" />
                      </a>
                    ))}
                  </div>
                </ScrollReveal>
              </div>

              {/* Is this a good fit? */}
              <ScrollReveal delay={0.2}>
                <div className="rounded-2xl border border-line bg-stone/50 p-6">
                  <p className="font-mono text-xs uppercase tracking-widest text-graphite mb-4">
                    We are a good fit if…
                  </p>
                  <ul className="flex flex-col gap-3">
                    {CHECKLIST.map((item) => (
                      <li key={item} className="flex items-start gap-3 text-sm text-charcoal">
                        <CheckCircle className="mt-0.5 size-4 shrink-0 text-forest" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollReveal>

              {/* Engagement steps */}
              <ScrollReveal delay={0.25}>
                <div className="rounded-2xl border border-line bg-pearl p-6">
                  <p className="font-mono text-xs uppercase tracking-widest text-graphite mb-4">
                    Typical engagement
                  </p>
                  <ol className="flex flex-col gap-4">
                    {[
                      { step: '01', label: 'You fill in the form', sub: 'Takes 3 minutes.' },
                      { step: '02', label: 'Discovery call', sub: '30 min. We ask the hard questions.' },
                      { step: '03', label: 'Proposal & scoping', sub: 'Detailed, honest, no obligations.' },
                      { step: '04', label: 'Kick-off', sub: 'Within 2 weeks of agreement.' },
                    ].map((s) => (
                      <li key={s.step} className="flex items-start gap-4">
                        <span className="flex size-7 shrink-0 items-center justify-center rounded-full border border-line bg-stone font-mono text-[10px] text-forest">
                          {s.step}
                        </span>
                        <div>
                          <p className="text-sm font-medium text-charcoal">{s.label}</p>
                          <p className="text-xs text-graphite">{s.sub}</p>
                        </div>
                      </li>
                    ))}
                  </ol>
                </div>
              </ScrollReveal>
            </div>

            {/* ─── Right: form ─── */}
            <ScrollReveal delay={0.1}>
              {submitted ? (
                <div className="flex min-h-[500px] flex-col items-center justify-center rounded-3xl border border-line bg-pearl p-12 text-center">
                  <div className="flex size-20 items-center justify-center rounded-full bg-forest/10">
                    <CheckCircle className="size-8 text-forest" />
                  </div>
                  <h2 className="mt-6 font-display text-3xl font-semibold text-charcoal">
                    Message received.
                  </h2>
                  <p className="mt-3 max-w-sm text-graphite">
                    Thanks for reaching out. We will review your message and get back within 24
                    hours — usually much sooner.
                  </p>
                  <div className="mt-8 flex gap-4">
                    <button
                      onClick={() => {
                        setSubmitted(false)
                        setForm({ name: '', email: '', company: '', projectType: '', budget: '', message: '' })
                      }}
                      className="rounded-full border border-line px-5 py-2.5 text-sm text-charcoal transition-colors hover:bg-stone"
                    >
                      Send another message
                    </button>
                    <Link
                      href="/work"
                      className="inline-flex items-center gap-1.5 rounded-full bg-charcoal px-5 py-2.5 text-sm text-pearl transition-colors hover:bg-forest"
                    >
                      See our work <ArrowUpRight className="size-3.5" />
                    </Link>
                  </div>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="rounded-3xl border border-line bg-pearl p-8 md:p-10"
                >
                  <h3 className="font-display text-xl font-semibold text-charcoal mb-1">
                    Tell us about your project
                  </h3>
                  <p className="text-sm text-graphite mb-8">
                    The more context you give us, the more useful our response will be.
                  </p>

                  <div className="grid gap-5 sm:grid-cols-2">
                    {/* Name */}
                    <div className="flex flex-col gap-2">
                      <label htmlFor="name" className="font-mono text-[10px] uppercase tracking-widest text-graphite">
                        Name *
                      </label>
                      <input
                        id="name" name="name" type="text" required
                        value={form.name} onChange={handleChange}
                        placeholder="Your full name"
                        className="rounded-xl border border-line bg-background px-4 py-3 text-sm text-charcoal placeholder:text-graphite/40 outline-none transition-all focus:border-forest/50 focus:ring-2 focus:ring-forest/10"
                      />
                    </div>

                    {/* Email */}
                    <div className="flex flex-col gap-2">
                      <label htmlFor="email" className="font-mono text-[10px] uppercase tracking-widest text-graphite">
                        Email *
                      </label>
                      <input
                        id="email" name="email" type="email" required
                        value={form.email} onChange={handleChange}
                        placeholder="you@company.com"
                        className="rounded-xl border border-line bg-background px-4 py-3 text-sm text-charcoal placeholder:text-graphite/40 outline-none transition-all focus:border-forest/50 focus:ring-2 focus:ring-forest/10"
                      />
                    </div>

                    {/* Company */}
                    <div className="flex flex-col gap-2">
                      <label htmlFor="company" className="font-mono text-[10px] uppercase tracking-widest text-graphite">
                        Company
                      </label>
                      <input
                        id="company" name="company" type="text"
                        value={form.company} onChange={handleChange}
                        placeholder="Company or project name"
                        className="rounded-xl border border-line bg-background px-4 py-3 text-sm text-charcoal placeholder:text-graphite/40 outline-none transition-all focus:border-forest/50 focus:ring-2 focus:ring-forest/10"
                      />
                    </div>

                    {/* Project type */}
                    <div className="flex flex-col gap-2">
                      <label htmlFor="projectType" className="font-mono text-[10px] uppercase tracking-widest text-graphite">
                        Project Type
                      </label>
                      <select
                        id="projectType" name="projectType"
                        value={form.projectType} onChange={handleChange}
                        className="rounded-xl border border-line bg-background px-4 py-3 text-sm text-charcoal outline-none transition-all focus:border-forest/50 focus:ring-2 focus:ring-forest/10"
                      >
                        <option value="">Select a type…</option>
                        {PROJECT_TYPES.map((t) => <option key={t} value={t}>{t}</option>)}
                      </select>
                    </div>

                    {/* Budget */}
                    <div className="flex flex-col gap-2 sm:col-span-2">
                      <label htmlFor="budget" className="font-mono text-[10px] uppercase tracking-widest text-graphite">
                        Approximate Budget
                      </label>
                      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
                        {[
                          { label: '< $10k', value: '<10k' },
                          { label: '$10–25k', value: '10-25k' },
                          { label: '$25–50k', value: '25-50k' },
                          { label: '$50–100k', value: '50-100k' },
                          { label: '$100k+', value: '100k+' },
                          { label: 'Not sure', value: 'unsure' },
                        ].map((b) => (
                          <button
                            key={b.value}
                            type="button"
                            onClick={() => setForm((p) => ({ ...p, budget: b.value }))}
                            className={`rounded-xl border px-3 py-2.5 text-xs font-medium transition-all ${
                              form.budget === b.value
                                ? 'border-forest bg-forest/10 text-forest'
                                : 'border-line bg-background text-charcoal/70 hover:border-charcoal/30'
                            }`}
                          >
                            {b.label}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Message */}
                    <div className="flex flex-col gap-2 sm:col-span-2">
                      <label htmlFor="message" className="font-mono text-[10px] uppercase tracking-widest text-graphite">
                        Message *
                      </label>
                      <textarea
                        id="message" name="message" required rows={5}
                        value={form.message} onChange={handleChange}
                        placeholder="What are you building? What problem are you solving? Where are you stuck? The more detail the better."
                        className="resize-none rounded-xl border border-line bg-background px-4 py-3 text-sm text-charcoal placeholder:text-graphite/40 outline-none transition-all focus:border-forest/50 focus:ring-2 focus:ring-forest/10"
                      />
                    </div>
                  </div>

                  <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                    <p className="text-xs text-graphite/50">
                      We never share your information. Ever.
                    </p>
                    <MagneticButton type="submit" arrow="right">
                      Send Message
                    </MagneticButton>
                  </div>
                </form>
              )}
            </ScrollReveal>
          </div>
        </Container>
      </Section>

      {/* FAQ */}
      <Section className="border-t border-line bg-stone/30">
        <Container>
          <div className="grid gap-16 lg:grid-cols-[1fr_2fr] lg:gap-20">
            <div>
              <Eyebrow>FAQ</Eyebrow>
              <AnimatedText
                text="COMMON QUESTIONS."
                className="mt-5 font-display text-4xl font-semibold leading-[0.98] tracking-tight text-charcoal md:text-5xl"
              />
              <ScrollReveal delay={0.1}>
                <p className="mt-4 text-graphite">
                  If your question is not here, just email us.{' '}
                  <a
                    href="mailto:hello@solvixcore.com"
                    className="text-forest underline underline-offset-4"
                  >
                    hello@solvixcore.com
                  </a>
                </p>
              </ScrollReveal>
            </div>
            <Stagger className="divide-y divide-line" delay={0.1}>
              {FAQ.map((item, i) => (
                <StaggerItem key={item.q}>
                  <button
                    type="button"
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="flex w-full items-start justify-between gap-4 py-6 text-left"
                  >
                    <h3 className="font-display text-lg font-medium text-charcoal">{item.q}</h3>
                    <ChevronDown
                      className={`mt-1 size-5 shrink-0 text-graphite transition-transform ${
                        openFaq === i ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  {openFaq === i && (
                    <p className="pb-6 text-sm leading-relaxed text-graphite text-pretty">
                      {item.a}
                    </p>
                  )}
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </Container>
      </Section>
    </>
  )
}
