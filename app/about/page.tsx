import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowUpRight, CheckCircle } from 'lucide-react'
import { PageHero } from '@/components/page-hero'
import { ProcessTimeline } from '@/components/process-timeline'
import { TechNetwork } from '@/components/tech-network'
import { StatsSection } from '@/components/stats-section'
import { CTASection } from '@/components/cta-section'
import { Container, Section, Eyebrow } from '@/components/section'
import { AnimatedText, ScrollReveal, Stagger, StaggerItem } from '@/components/reveal'
import { pageMetadata } from '@/lib/metadata'

export const metadata = pageMetadata.about

const VALUES = [
  {
    no: '01',
    title: 'Clarity over complexity',
    body: 'We design systems that are easy to understand, maintain and extend. If you cannot explain it simply, it is not ready to ship.',
  },
  {
    no: '02',
    title: 'Outcome-first thinking',
    body: 'Every technical decision is tied to a business result. We build what earns its keep — and push back on what does not.',
  },
  {
    no: '03',
    title: 'One accountable team',
    body: 'Strategy, design and engineering under one roof. No hand-offs, no blame gaps, no "that is not our department".',
  },
  {
    no: '04',
    title: 'Honest craft',
    body: 'We tell you what will work, what will not, and why — before we write a line of code. Uncomfortable truths early beat expensive surprises late.',
  },
  {
    no: '05',
    title: 'Production from day one',
    body: 'We do not ship prototypes dressed up as products. Every increment is built to the same quality standard as the final release.',
  },
  {
    no: '06',
    title: 'You own everything',
    body: 'Your codebase, your infrastructure, your data. We hand over every credential, doc and runbook — and make sure your team can run things without us.',
  },
]

const MANIFESTO = [
  'We believe most technology fails not because of bad code, but because strategy, design and engineering never spoke the same language.',
  'We built Solvix Core so they do.',
  'We are not a body-shop. We do not take on every project. We work with a small number of businesses where we can make a real difference — and we turn down projects where we cannot.',
  'Every person on our team has shipped production systems. There are no juniors on the other side of a wall. You get direct access to the people building your product.',
  'We measure success one way: did the thing we built make your business better? Not prettier, not technically impressive — better.',
]

const DISCIPLINES = [
  { label: 'Strategy & Scoping', desc: 'We map goals, constraints and the problem before writing a line.' },
  { label: 'Product Design', desc: 'Interfaces and interactions with intent, clarity and motion.' },
  { label: 'Frontend Engineering', desc: 'Next.js, React, TypeScript — performance-first from the start.' },
  { label: 'Backend & APIs', desc: 'Node.js, Python, FastAPI — reliable, documented, versioned.' },
  { label: 'Data & Infrastructure', desc: 'PostgreSQL, MongoDB, AWS — modeled for the real access patterns.' },
  { label: 'AI & Agents', desc: 'OpenAI, LangChain, RAG — wired into real business workflows.' },
  { label: 'Automation', desc: 'n8n, webhooks, integrations — removing manual work at scale.' },
  { label: 'Mobile', desc: 'React Native, Expo — cross-platform with offline-first architecture.' },
]

const TEAM = [
  {
    name: 'Muhammad Umer',
    role: 'Founder & Owner',
    bio: 'Visionary founder driving technical excellence and business strategy. Leads the studio with a focus on delivering exceptional digital products.',
    focus: ['Strategy', 'Leadership', 'Innovation'],
  },
  {
    name: 'Shahryar Javed',
    role: 'Co-Owner, CTO & Sales Lead',
    bio: 'Co-owner and technical architect driving engineering excellence. Bridges client needs with cutting-edge solutions while scaling our business.',
    focus: ['Architecture', 'Sales', 'Engineering'],
  },
  {
    name: 'Muhammad Abubakar',
    role: 'CEO & Lead Software Engineer',
    bio: 'Leading operations and engineering excellence. Architecting scalable systems while ensuring every project delivers measurable business impact.',
    focus: ['Engineering', 'Leadership', 'Architecture'],
  },
  {
    name: 'Abdul Wahab',
    role: 'Marketing & Business Development',
    bio: 'Building the Solvix brand and driving market presence. Crafts compelling narratives and expands our reach globally.',
    focus: ['Marketing', 'Brand', 'Growth'],
  },
]

export default function AboutPage() {
  return (
    <main>
      <PageHero
        eyebrow="About / Studio"
        lines={[
          { text: 'TECHNOLOGY SHOULD' },
          { text: 'MAKE BUSINESS', highlight: true },
          { text: 'SIMPLER.' },
        ]}
        intro="Solvix Core is a UK technology studio. We design and engineer digital products, AI systems and automation for ambitious businesses — one accountable team, no hand-offs."
      />

      {/* Story */}
      <Section>
        <Container>
          <div className="grid gap-12 lg:grid-cols-[1fr_420px] lg:gap-16 xl:grid-cols-[1fr_480px]">
            {/* text */}
            <ScrollReveal className="flex flex-col justify-center gap-8">
              <div>
                <Eyebrow>Our Story</Eyebrow>
                <h2 className="mt-5 font-display text-2xl font-semibold leading-snug tracking-wide text-charcoal md:text-4xl">
                  BUILT TO SOLVE THE REAL PROBLEM.
                </h2>
              </div>
              <div className="flex flex-col gap-5 text-xl leading-relaxed text-graphite text-pretty">
                <p>
                  Most technology projects fail not because of bad code — but because strategy,
                  design and engineering never spoke the same language. Agencies hand off. Freelancers
                  disappear. Internal teams build in isolation. The result is the same: expensive,
                  late, and wrong.
                </p>
                <p>
                  We built Solvix Core to fix that. One team, one language, one point of
                  accountability. We work with a small number of businesses at a time so every project
                  gets our full attention — not a junior assigned two weeks before launch.
                </p>
                <p>
                  From marketing sites to multi-tenant SaaS, AI agent pipelines and business-wide
                  automation: we have one goal. Technology that earns its keep.
                </p>
              </div>
            </ScrollReveal>

            {/* video */}
            <ScrollReveal delay={0.12}>
              <div className="relative border-2 border-charcoal shadow-[8px_8px_0_0_var(--charcoal)]">
                <div className="relative aspect-[3/4] w-full overflow-hidden bg-charcoal">
                  <video
                    src="/videos/2.mp4"
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="absolute bottom-0 left-0 right-0 border-t-2 border-charcoal bg-charcoal px-4 py-2">
                  <span className="font-mono text-[9px] uppercase tracking-widest text-pearl/70">
                    Solvix Core — How We Work
                  </span>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </Container>
      </Section>

      {/* Stats */}
      <StatsSection />

      {/* Manifesto */}
      <Section className="border-t-2 border-charcoal bg-stone/40">
        <Container>
          <div className="grid gap-16 lg:grid-cols-[1fr_1.4fr] lg:gap-24">
            <div>
              <span className="font-mono text-xs uppercase tracking-widest text-graphite">
                [ Manifesto ]
              </span>
              <ScrollReveal>
                <h2 className="mt-5 font-display text-2xl font-semibold leading-snug tracking-wide text-charcoal md:text-4xl">
                  WHAT WE BELIEVE.
                </h2>
              </ScrollReveal>
              {/* pixel accent line */}
              <div className="mt-6 h-0.5 w-16 bg-forest" />
            </div>
            <Stagger className="flex flex-col gap-8" delay={0.1}>
              {MANIFESTO.map((line, i) => (
                <StaggerItem key={i}>
                  <p
                    className={`leading-relaxed text-pretty ${
                      i === 1
                        ? 'border-l-4 border-forest pl-4 font-display text-xl font-semibold text-forest md:text-2xl'
                        : 'text-xl text-graphite'
                    }`}
                  >
                    {line}
                  </p>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </Container>
      </Section>

      {/* Values */}
      <Section className="border-t border-line">
        <Container>
          <div className="mb-16 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <Eyebrow>Values</Eyebrow>
              <AnimatedText
                text="HOW WE THINK AND WORK."
                className="mt-5 font-display text-4xl font-semibold leading-[0.98] tracking-tight text-charcoal md:text-5xl"
              />
            </div>
            <ScrollReveal delay={0.15}>
              <p className="max-w-sm text-graphite text-pretty">
                Six principles that govern every decision we make — from architecture to client
                communication.
              </p>
            </ScrollReveal>
          </div>
          <div className="grid gap-px bg-line overflow-hidden rounded-3xl border border-line sm:grid-cols-2 lg:grid-cols-3">
            {VALUES.map((v, i) => (
              <ScrollReveal key={v.title} delay={i * 0.06}>
                <div className="flex h-full flex-col gap-4 bg-pearl p-8 transition-colors hover:bg-background">
                  <span className="font-mono text-xs text-forest">{v.no}</span>
                  <h3 className="font-display text-xl font-semibold leading-tight tracking-tight text-charcoal">
                    {v.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-graphite">{v.body}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* Disciplines */}
      <Section className="border-t border-line bg-stone/30">
        <Container>
          <div className="mb-16 max-w-2xl">
            <Eyebrow>Disciplines</Eyebrow>
            <AnimatedText
              text="EVERYTHING UNDER ONE ROOF."
              className="mt-5 font-display text-4xl font-semibold leading-[0.98] tracking-tight text-charcoal md:text-5xl"
            />
            <ScrollReveal delay={0.1}>
              <p className="mt-5 text-graphite text-pretty">
                We are not specialists who do one thing. We cover the full stack of what it takes to
                build a digital product — from strategy to deployment and beyond.
              </p>
            </ScrollReveal>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {DISCIPLINES.map((d, i) => (
              <ScrollReveal key={d.label} delay={i * 0.05}>
                <div className="rounded-2xl border border-line bg-pearl p-6 h-full">
                  <div className="mb-3 flex items-center gap-2">
                    <CheckCircle className="size-4 text-forest" />
                    <h3 className="font-display text-sm font-semibold text-charcoal">{d.label}</h3>
                  </div>
                  <p className="text-xs leading-relaxed text-graphite">{d.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* Team */}
      <Section className="border-t border-line">
        <Container>
          <div className="mb-16 max-w-2xl">
            <Eyebrow>The Team</Eyebrow>
            <AnimatedText
              text="SMALL TEAM. SENIOR PEOPLE."
              className="mt-5 font-display text-4xl font-semibold leading-[0.98] tracking-tight text-charcoal md:text-5xl"
            />
            <ScrollReveal delay={0.1}>
              <p className="mt-5 text-graphite text-pretty">
                Every project is run by someone who has shipped production systems, not someone who
                manages the people who have. You get direct access to the people building your
                product — always.
              </p>
            </ScrollReveal>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {TEAM.map((member, i) => (
              <ScrollReveal key={member.name} delay={i * 0.08}>
                <div className="flex h-full flex-col rounded-3xl border border-line bg-pearl p-6">
                  {/* Avatar placeholder */}
                  <div className="mb-4 flex size-14 items-center justify-center rounded-2xl border border-line bg-stone font-display text-lg font-semibold text-forest">
                    {member.name.charAt(0)}
                  </div>
                  <h3 className="font-display text-base font-semibold text-charcoal leading-tight">
                    {member.name}
                  </h3>
                  <p className="mt-1 font-mono text-[9px] uppercase tracking-widest text-forest">
                    {member.role}
                  </p>
                  <p className="mt-3 flex-1 text-xs leading-relaxed text-graphite">{member.bio}</p>
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {member.focus.map((f) => (
                      <span
                        key={f}
                        className="rounded-full border border-line bg-stone px-2.5 py-0.5 font-mono text-[9px] uppercase tracking-widest text-charcoal/70"
                      >
                        {f}
                      </span>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* Process */}
      <Section className="border-t border-line bg-stone/30">
        <Container>
          <div className="mb-16 max-w-2xl">
            <Eyebrow>Process</Eyebrow>
            <AnimatedText
              text="HOW WE TURN COMPLEXITY INTO PRODUCTS."
              className="mt-5 font-display text-4xl font-semibold leading-[0.98] tracking-tight text-charcoal md:text-6xl"
            />
            <ScrollReveal delay={0.1}>
              <p className="mt-5 text-graphite text-pretty">
                A repeatable, battle-tested six-step process we have refined across 50+ projects.
                Predictable enough to plan around. Flexible enough to adapt when reality changes.
              </p>
            </ScrollReveal>
          </div>
          <ProcessTimeline />
        </Container>
      </Section>

      {/* Technology */}
      <Section className="border-t border-line">
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-[1fr_1.1fr]">
            <div>
              <Eyebrow>Technology</Eyebrow>
              <AnimatedText
                text="AN INTERCONNECTED TECHNOLOGY ECOSYSTEM."
                className="mt-5 font-display text-4xl font-semibold leading-[0.98] tracking-tight text-charcoal md:text-5xl"
              />
              <ScrollReveal delay={0.12}>
                <p className="mt-5 max-w-md text-graphite text-pretty">
                  We choose proven, well-understood technologies and connect them into reliable
                  systems. No hype-driven stack decisions. Every tool earns its place.
                </p>
              </ScrollReveal>
              <ScrollReveal delay={0.2}>
                <div className="mt-8 flex flex-col gap-3">
                  {[
                    'Modern, maintained, well-documented',
                    'Chosen for the problem — not the trend',
                    'Connected into reliable end-to-end systems',
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-3 text-sm text-charcoal">
                      <span className="size-1.5 rounded-full bg-forest" />
                      {item}
                    </div>
                  ))}
                </div>
              </ScrollReveal>
              <ScrollReveal delay={0.25}>
                <Link
                  href="/services"
                  className="group mt-8 inline-flex items-center gap-2 text-sm font-medium text-charcoal"
                >
                  Explore our services
                  <ArrowUpRight className="size-4 text-forest transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
              </ScrollReveal>
            </div>
            <div className="flex justify-center">
              <TechNetwork />
            </div>
          </div>
        </Container>
      </Section>

      <CTASection />
    </main>
  )
}
