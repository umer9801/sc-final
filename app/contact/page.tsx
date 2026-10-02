'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ArrowUpRight, Mail, MapPin, Clock, ExternalLink, CheckCircle, ChevronDown } from 'lucide-react'
import { PageHero } from '@/components/page-hero'
import { Container, Section, Eyebrow } from '@/components/section'
import { ScrollReveal, Stagger, StaggerItem } from '@/components/reveal'
import { MagneticButton } from '@/components/magnetic-button'
import { submitContactForm } from '@/app/actions/contact'

const CONTACT_INFO = [
  { icon: Mail,    label: 'Email',         value: 'info@solvixcore.uk',       href: 'mailto:info@solvixcore.uk' },
  { icon: MapPin,  label: 'Location',      value: 'United Kingdom — remote-first', href: null },
  { icon: Clock,   label: 'Response time', value: 'Within 24 hours',          href: null },
]

const SOCIAL = [
  { icon: ExternalLink, label: 'GitHub',   href: 'https://github.com' },
  { icon: ExternalLink, label: 'LinkedIn', href: 'https://linkedin.com' },
  { icon: ExternalLink, label: 'Twitter',  href: 'https://twitter.com' },
]

const CHECKLIST = [
  'You have a real problem to solve (not just a spec to execute)',
  'You want a team that will push back when something is wrong',
  'You care about outcomes, not just deliverables',
  'You value clear communication over project management theatre',
  'You want to own everything — code, infra, data',
]

const PROJECT_TYPES = [
  'Web Development', 'SaaS Product', 'Mobile App', 'AI System',
  'Automation', 'E-commerce', 'Custom Software', 'Not sure yet',
]

const FAQ = [
  { q: 'How quickly can you start?',        a: 'Once scoped and aligned, we typically kick off within 2 weeks.' },
  { q: 'Do you work with startups?',         a: 'Yes — some of our best work has been helping founders go from idea to production-ready product.' },
  { q: 'What does the engagement look like?', a: 'Discovery call → scoping → kick-off → weekly iterations → launch → optional retained support.' },
  { q: 'Do we own the code?',                a: 'Completely. Every credential, repo and doc is yours from day one.' },
  { q: 'How do you handle scope changes?',   a: 'Honestly and early — we flag changes with an impact estimate before they become surprises.' },
  { q: 'What is your minimum project size?', a: 'We do not take on projects under £5,000. Below that there is not enough room to do our best work.' },
]

const BUDGETS = [
  { label: '< £5k',    value: '<5k' },
  { label: '£5–10k',  value: '5-10k' },
  { label: '£10–25k', value: '10-25k' },
  { label: '£25–50k', value: '25-50k' },
  { label: '£50k+',   value: '50k+' },
  { label: 'Not sure', value: 'unsure' },
]

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading]     = useState(false)
  const [error, setError]         = useState('')
  const [openFaq, setOpenFaq]     = useState<number | null>(null)
  const [form, setForm] = useState({
    name: '', email: '', company: '', projectType: '', budget: '', message: '',
  })

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    setForm((p) => ({ ...p, [e.target.name]: e.target.value }))
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)
    setError('')
    const result = await submitContactForm(form)
    setLoading(false)
    if (result.success) {
      setSubmitted(true)
    } else {
      setError(result.error)
    }
  }

  return (
    <>
      <PageHero
        eyebrow="Contact / Start a Project"
        lines={[{ text: "LET'S BUILD" }, { text: 'SOMETHING REAL.', highlight: true }]}
        intro="Tell us what you are trying to solve. We will get back to you within 24 hours — no pitch, no pressure."
      />

      <Section>
        <Container>
          <div className="grid gap-16 lg:grid-cols-[1fr_2fr] lg:gap-20">

            {/* ── Left ── */}
            <div className="flex flex-col gap-10">
              <div>
                <Eyebrow>Get in touch</Eyebrow>
                <h2 className="mt-4 font-display text-xl font-semibold leading-snug tracking-wide text-charcoal">
                  WE ARE EASY TO REACH.
                </h2>
                <div className="mt-8 flex flex-col gap-5">
                  {CONTACT_INFO.map((item, i) => (
                    <ScrollReveal key={item.label} delay={i * 0.06}>
                      <div className="flex items-center gap-4">
                        <div className="flex size-10 shrink-0 items-center justify-center border-2 border-line bg-pearl">
                          <item.icon className="size-4 text-forest" />
                        </div>
                        <div>
                          <p className="font-mono text-[9px] uppercase tracking-widest text-graphite">{item.label}</p>
                          {item.href ? (
                            <a href={item.href} className="mt-0.5 text-sm font-medium text-charcoal hover:text-forest transition-colors">
                              {item.value}
                            </a>
                          ) : (
                            <p className="mt-0.5 text-sm font-medium text-charcoal">{item.value}</p>
                          )}
                        </div>
                      </div>
                    </ScrollReveal>
                  ))}
                </div>
                <ScrollReveal delay={0.25}>
                  <div className="mt-6 flex gap-3">
                    {SOCIAL.map((s) => (
                      <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer"
                        aria-label={s.label}
                        className="flex size-9 items-center justify-center border-2 border-line bg-pearl text-graphite hover:border-forest hover:text-forest transition-colors">
                        <s.icon className="size-3.5" />
                      </a>
                    ))}
                  </div>
                </ScrollReveal>
              </div>

              <ScrollReveal>
                <div className="border-2 border-charcoal bg-stone/40 p-5 shadow-[3px_3px_0_0_var(--charcoal)]">
                  <p className="font-mono text-[9px] uppercase tracking-widest text-graphite mb-4">[ Good fit if… ]</p>
                  <ul className="flex flex-col gap-2.5">
                    {CHECKLIST.map((item) => (
                      <li key={item} className="flex items-start gap-2.5 text-sm text-charcoal">
                        <CheckCircle className="mt-0.5 size-4 shrink-0 text-forest" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollReveal>

              <ScrollReveal>
                <div className="border-2 border-line bg-pearl p-5">
                  <p className="font-mono text-[9px] uppercase tracking-widest text-graphite mb-4">[ Typical engagement ]</p>
                  <ol className="flex flex-col gap-3">
                    {[
                      { n: '01', t: 'Fill the form',       s: 'Takes 3 minutes.' },
                      { n: '02', t: 'Discovery call',      s: '30 min — we ask the hard questions.' },
                      { n: '03', t: 'Proposal & scoping',  s: 'Detailed, honest, no obligations.' },
                      { n: '04', t: 'Kick-off',            s: 'Within 2 weeks of agreement.' },
                    ].map((s) => (
                      <li key={s.n} className="flex items-start gap-3">
                        <span className="flex size-7 shrink-0 items-center justify-center border-2 border-line bg-stone font-mono text-[9px] text-forest">{s.n}</span>
                        <div>
                          <p className="text-sm font-medium text-charcoal">{s.t}</p>
                          <p className="text-xs text-graphite">{s.s}</p>
                        </div>
                      </li>
                    ))}
                  </ol>
                </div>
              </ScrollReveal>
            </div>

            {/* ── Right: form ── */}
            <ScrollReveal delay={0.1}>
              {submitted ? (
                <div className="flex min-h-[500px] flex-col items-center justify-center border-2 border-charcoal bg-pearl p-12 text-center shadow-[6px_6px_0_0_var(--charcoal)]">
                  <div className="flex size-20 items-center justify-center border-2 border-forest bg-forest/10">
                    <CheckCircle className="size-8 text-forest" />
                  </div>
                  <h2 className="mt-6 font-display text-xl font-semibold text-charcoal">MESSAGE RECEIVED.</h2>
                  <p className="mt-3 max-w-sm text-xl text-graphite">
                    Thanks for reaching out. Check your email — we have sent a confirmation. We will reply within 24 hours.
                  </p>
                  <div className="mt-8 flex gap-4">
                    <button
                      onClick={() => { setSubmitted(false); setForm({ name:'', email:'', company:'', projectType:'', budget:'', message:'' }) }}
                      className="border-2 border-line px-5 py-2.5 font-mono text-xs uppercase tracking-widest text-charcoal hover:border-charcoal transition-colors"
                    >
                      Send another
                    </button>
                    <Link href="/work"
                      className="inline-flex items-center gap-1.5 border-2 border-charcoal bg-charcoal px-5 py-2.5 font-mono text-xs uppercase tracking-widest text-pearl hover:bg-forest hover:border-forest transition-colors">
                      See our work <ArrowUpRight className="size-3.5" />
                    </Link>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="border-2 border-charcoal bg-pearl p-8 shadow-[6px_6px_0_0_var(--charcoal)] md:p-10">
                  <h3 className="font-display text-base font-semibold text-charcoal mb-1">Tell us about your project</h3>
                  <p className="text-xl text-graphite mb-8">The more context you give us, the more useful our response will be.</p>

                  <div className="grid gap-5 sm:grid-cols-2">
                    {/* Name */}
                    <div className="flex flex-col gap-2">
                      <label htmlFor="name" className="font-mono text-[9px] uppercase tracking-widest text-graphite">Name *</label>
                      <input id="name" name="name" type="text" required value={form.name} onChange={handleChange}
                        placeholder="Your full name"
                        className="border-2 border-line bg-background px-4 py-3 text-sm text-charcoal placeholder:text-graphite/40 outline-none focus:border-forest transition-colors" />
                    </div>

                    {/* Email */}
                    <div className="flex flex-col gap-2">
                      <label htmlFor="email" className="font-mono text-[9px] uppercase tracking-widest text-graphite">Email *</label>
                      <input id="email" name="email" type="email" required value={form.email} onChange={handleChange}
                        placeholder="you@company.com"
                        className="border-2 border-line bg-background px-4 py-3 text-sm text-charcoal placeholder:text-graphite/40 outline-none focus:border-forest transition-colors" />
                    </div>

                    {/* Company */}
                    <div className="flex flex-col gap-2">
                      <label htmlFor="company" className="font-mono text-[9px] uppercase tracking-widest text-graphite">Company</label>
                      <input id="company" name="company" type="text" value={form.company} onChange={handleChange}
                        placeholder="Company or project name"
                        className="border-2 border-line bg-background px-4 py-3 text-sm text-charcoal placeholder:text-graphite/40 outline-none focus:border-forest transition-colors" />
                    </div>

                    {/* Project type */}
                    <div className="flex flex-col gap-2">
                      <label htmlFor="projectType" className="font-mono text-[9px] uppercase tracking-widest text-graphite">Project Type</label>
                      <select id="projectType" name="projectType" value={form.projectType} onChange={handleChange}
                        className="border-2 border-line bg-background px-4 py-3 text-sm text-charcoal outline-none focus:border-forest transition-colors">
                        <option value="">Select a type…</option>
                        {PROJECT_TYPES.map((t) => <option key={t} value={t}>{t}</option>)}
                      </select>
                    </div>

                    {/* Budget */}
                    <div className="flex flex-col gap-2 sm:col-span-2">
                      <label className="font-mono text-[9px] uppercase tracking-widest text-graphite">Budget</label>
                      <div className="grid grid-cols-3 gap-2 sm:grid-cols-6">
                        {BUDGETS.map((b) => (
                          <button key={b.value} type="button"
                            onClick={() => setForm((p) => ({ ...p, budget: b.value }))}
                            className={`border-2 px-3 py-2.5 font-mono text-xs transition-all ${
                              form.budget === b.value
                                ? 'border-forest bg-forest/10 text-forest'
                                : 'border-line bg-background text-charcoal/70 hover:border-charcoal/40'
                            }`}>
                            {b.label}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Message */}
                    <div className="flex flex-col gap-2 sm:col-span-2">
                      <label htmlFor="message" className="font-mono text-[9px] uppercase tracking-widest text-graphite">Message *</label>
                      <textarea id="message" name="message" required rows={5} value={form.message} onChange={handleChange}
                        placeholder="What are you building? What problem are you solving?"
                        className="resize-none border-2 border-line bg-background px-4 py-3 text-sm text-charcoal placeholder:text-graphite/40 outline-none focus:border-forest transition-colors" />
                    </div>
                  </div>

                  {error && (
                    <p className="mt-4 border-2 border-red-300 bg-red-50 px-4 py-3 font-mono text-xs text-red-600">{error}</p>
                  )}

                  <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                    <p className="font-mono text-[9px] text-graphite/50 uppercase tracking-widest">We never share your info.</p>
                    <MagneticButton type="submit" arrow="right" disabled={loading}>
                      {loading ? 'Sending…' : 'Send Message'}
                    </MagneticButton>
                  </div>
                </form>
              )}
            </ScrollReveal>
          </div>
        </Container>
      </Section>

      {/* FAQ */}
      <Section className="border-t-2 border-charcoal bg-stone/30">
        <Container>
          <div className="grid gap-16 lg:grid-cols-[1fr_2fr] lg:gap-20">
            <div>
              <Eyebrow>FAQ</Eyebrow>
              <h2 className="mt-4 font-display text-xl font-semibold leading-snug tracking-wide text-charcoal">COMMON QUESTIONS.</h2>
              <ScrollReveal delay={0.1}>
                <p className="mt-4 text-xl text-graphite">
                  More questions?{' '}
                  <a href="mailto:info@solvixcore.uk" className="border-b-2 border-forest text-forest">Email us.</a>
                </p>
              </ScrollReveal>
            </div>
            <Stagger className="divide-y-2 divide-line border-2 border-charcoal bg-pearl shadow-[4px_4px_0_0_var(--charcoal)]">
              {FAQ.map((item, i) => (
                <StaggerItem key={item.q}>
                  <button type="button" onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="flex w-full items-start justify-between gap-4 px-6 py-5 text-left">
                    <h3 className="font-display text-xs font-semibold leading-snug tracking-wide text-charcoal">{item.q}</h3>
                    <ChevronDown className={`mt-0.5 size-4 shrink-0 text-graphite transition-transform ${openFaq === i ? 'rotate-180' : ''}`} />
                  </button>
                  {openFaq === i && (
                    <p className="border-t-2 border-line px-6 pb-5 pt-4 text-xl leading-relaxed text-graphite">{item.a}</p>
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
