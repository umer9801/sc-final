import type { Metadata } from 'next'
import { PageHero } from '@/components/page-hero'
import { ServiceDetail } from '@/components/service-detail'
import { Marquee } from '@/components/marquee'
import { CTASection } from '@/components/cta-section'
import { Container, Section } from '@/components/section'
import { SERVICES, CAPABILITIES } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Services',
  description:
    'Web, SaaS, mobile, AI, automation, e-commerce and custom software — engineering for what is next.',
}

const extras = ['AI Chatbots', 'n8n Automation', 'POS Systems', 'SEO & Content', 'AI Integrations']

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services / Capabilities"
        lines={[{ text: 'ENGINEERING' }, { text: "FOR WHAT'S NEXT.", highlight: true }]}
        intro="A full studio of capabilities — from marketing sites to AI systems and business-wide automation. One accountable team, end to end."
        index="10 CORE SERVICES"
      />

      <div className="border-y border-line bg-pearl/60">
        <Marquee items={CAPABILITIES} speed={30} />
      </div>

      <Section className="py-6 md:py-10">
        <Container>
          {SERVICES.map((s, i) => (
            <ServiceDetail key={s.id} service={s} i={i} />
          ))}
        </Container>
      </Section>

      <Section className="border-t border-line bg-stone/30 py-16 md:py-20">
        <Container>
          <p className="eyebrow">Also available</p>
          <div className="mt-6 flex flex-wrap gap-3">
            {extras.map((e) => (
              <span
                key={e}
                className="rounded-full border border-line bg-pearl px-4 py-2 text-sm text-charcoal"
              >
                {e}
              </span>
            ))}
          </div>
        </Container>
      </Section>

      <CTASection />
    </>
  )
}
