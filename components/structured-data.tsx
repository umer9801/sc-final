import Script from 'next/script'

type OrganizationSchema = {
  '@context': 'https://schema.org'
  '@type': 'Organization'
  name: string
  url: string
  logo: string
  description: string
  email: string
  address: {
    '@type': 'PostalAddress'
    addressCountry: string
  }
  sameAs: string[]
  founder: Array<{
    '@type': 'Person'
    name: string
    jobTitle: string
  }>
}

type WebSiteSchema = {
  '@context': 'https://schema.org'
  '@type': 'WebSite'
  name: string
  url: string
  description: string
  publisher: {
    '@type': 'Organization'
    name: string
    logo: string
  }
  potentialAction: {
    '@type': 'SearchAction'
    target: string
    'query-input': string
  }
}

type ServiceSchema = {
  '@context': 'https://schema.org'
  '@type': 'Service'
  name: string
  provider: {
    '@type': 'Organization'
    name: string
    url: string
  }
  areaServed: {
    '@type': 'Country'
    name: string
  }
  serviceType: string
  description: string
}

type BreadcrumbSchema = {
  '@context': 'https://schema.org'
  '@type': 'BreadcrumbList'
  itemListElement: Array<{
    '@type': 'ListItem'
    position: number
    name: string
    item?: string
  }>
}

const SITE_URL = 'https://solvixcore.uk'
const LOGO_URL = `${SITE_URL}/logo.png`

export function OrganizationStructuredData() {
  const schema: OrganizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Solvix Core',
    url: SITE_URL,
    logo: LOGO_URL,
    description: 'UK-based digital engineering studio specialising in web development, SaaS platforms, mobile apps, and AI automation.',
    email: 'info@solvixcore.uk',
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'GB',
    },
    sameAs: [
      'https://linkedin.com/company/solvixcore',
      'https://github.com/solvixcore',
      'https://twitter.com/solvixcore',
    ],
    founder: [
      {
        '@type': 'Person',
        name: 'Muhammad Umer',
        jobTitle: 'Founder & Owner',
      },
      {
        '@type': 'Person',
        name: 'Shahryar Javed',
        jobTitle: 'Co-Owner & CTO',
      },
    ],
  }

  return (
    <Script
      id="organization-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

export function WebSiteStructuredData() {
  const schema: WebSiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Solvix Core',
    url: SITE_URL,
    description: 'Digital engineering studio building web applications, SaaS platforms, and AI systems for UK businesses.',
    publisher: {
      '@type': 'Organization',
      name: 'Solvix Core',
      logo: LOGO_URL,
    },
    potentialAction: {
      '@type': 'SearchAction',
      target: `${SITE_URL}/search?q={search_term_string}`,
      'query-input': 'required name=search_term_string',
    },
  }

  return (
    <Script
      id="website-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

export function ServiceStructuredData({ service }: { service: string }) {
  const serviceDescriptions: Record<string, { name: string; type: string; description: string }> = {
    web: {
      name: 'Web Development',
      type: 'Web Development',
      description: 'Custom web application development using Next.js, React, and TypeScript for UK businesses.',
    },
    saas: {
      name: 'SaaS Development',
      type: 'Software as a Service Development',
      description: 'Multi-tenant SaaS platform development with subscription management and scalable architecture.',
    },
    mobile: {
      name: 'Mobile App Development',
      type: 'Mobile Application Development',
      description: 'Cross-platform mobile app development using React Native and Expo for iOS and Android.',
    },
    ai: {
      name: 'AI & Automation',
      type: 'Artificial Intelligence Services',
      description: 'AI integration, automation workflows, and intelligent systems using OpenAI and LangChain.',
    },
  }

  const serviceData = serviceDescriptions[service]
  if (!serviceData) return null

  const schema: ServiceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: serviceData.name,
    provider: {
      '@type': 'Organization',
      name: 'Solvix Core',
      url: SITE_URL,
    },
    areaServed: {
      '@type': 'Country',
      name: 'United Kingdom',
    },
    serviceType: serviceData.type,
    description: serviceData.description,
  }

  return (
    <Script
      id={`service-schema-${service}`}
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

export function BreadcrumbStructuredData({ items }: { items: Array<{ name: string; url?: string }> }) {
  const schema: BreadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      ...(item.url && { item: `${SITE_URL}${item.url}` }),
    })),
  }

  return (
    <Script
      id="breadcrumb-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

export function LocalBusinessStructuredData() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'Solvix Core',
    image: LOGO_URL,
    url: SITE_URL,
    telephone: '+447348486506',
    email: 'info@solvixcore.uk',
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'GB',
    },
    geo: {
      '@type': 'GeoCoordinates',
      addressCountry: 'GB',
    },
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '09:00',
      closes: '18:00',
    },
    priceRange: '££-£££',
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '5',
      reviewCount: '10',
    },
  }

  return (
    <Script
      id="local-business-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

// Article schema for blog posts
export function ArticleStructuredData({
  title,
  description,
  image,
  datePublished,
  dateModified,
  author,
  slug,
}: {
  title: string
  description: string
  image: string
  datePublished: string
  dateModified?: string
  author: string
  slug: string
}) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    description: description,
    image: `${SITE_URL}${image}`,
    datePublished: datePublished,
    dateModified: dateModified || datePublished,
    author: {
      '@type': 'Person',
      name: author,
    },
    publisher: {
      '@type': 'Organization',
      name: 'Solvix Core',
      logo: {
        '@type': 'ImageObject',
        url: LOGO_URL,
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${SITE_URL}/insights/${slug}`,
    },
  }

  return (
    <Script
      id={`article-schema-${slug}`}
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
